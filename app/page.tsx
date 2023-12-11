import { Container } from "@radix-ui/themes";
import { Metadata } from "next";
import Link from "next/link";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Home Page",
  description: "Home Page Description",
};

async function HomePage() {
  const session = await getServerSession(authOptions);
  if (session) return redirect("/dashboard");
  return (
    <Container className="mx-5 md:px-0">
      <header className="my-4 bg-slate-900 p-10 rounded-md">
        <h1 className="text-7xl my-10">Next Auth Radix</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
          perferendis magnam quas, excepturi at, iure ad nulla eligendi nihil
          sunt, ipsa accusantium quidem ea. Dolorem reprehenderit earum est
          reiciendis nihil eligendi labore error libero sapiente, rerum minima,
          quasi dolores at! Dolorum vel fugit odio obcaecati eos nulla
          reiciendis quia laudantium?
        </p>
        <div className="mt-5">
          <Link
            className="text-white bg-blue-500 px-2 py-1 rounded-md"
            href="/auth/login"
          >
            Login
          </Link>
        </div>
      </header>
    </Container>
  );
}

export default HomePage;
