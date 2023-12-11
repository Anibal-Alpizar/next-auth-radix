import { Container, Card, Heading, Flex, Text, Link } from "@radix-ui/themes";
import SigninForm from "@/components/auth/SignupForm";
import NavLink from "next/link";

function RegisterPage() {
  return (
    <>
      <Container size="1" height="100%" className="p-3 md:p-0">
        <Flex className="h-[calc(100vh-10rem)] w-full items-center ">
          <Card className="w-full p-7">
            <Heading>Sign Up</Heading>
            <SigninForm />

            <Flex justify="between" my="4">
              <Text>Already have an account?</Text>
            </Flex>
            <Link asChild>
              <NavLink passHref href="/auth/login">
                Sign In
              </NavLink>
            </Link>
          </Card>
        </Flex>
      </Container>
    </>
  );
}

export default RegisterPage;
