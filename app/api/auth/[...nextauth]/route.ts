import NextAuth, { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "@/libs/prisma";
import bcrypt from "bcrypt";
export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "user@something.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials: any, req) {
        const { email, password } = credentials;
        const userFound = await prisma.user.findUnique({ where: { email } });
        console.log(userFound);
        if (!userFound) throw new Error("Invalid credentials");

        const validPassword = await bcrypt.compare(
          password,
          userFound.password
        );

        if (!validPassword) throw new Error("Invalid credentials");

        return {
          id: userFound.id + "",
          name: userFound.name,
          email: userFound.email,
        };

        return null;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user, account, profile, isNewUser }) {
      if (user) token.id = user.id;
      return token;
    },

    async session({ session, token, user }) {
      if (token) session.user.id = token.sub as string;

      return session;
    },
  },
  pages: {
    signIn: "/auth/login",
  },
};
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
