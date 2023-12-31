import { Container, Card, Heading, Flex, Text, Link } from "@radix-ui/themes";
import SigninForm from "@/components/auth/SigninForm";
import NavLink from "next/link";

function LoginPage() {
  return (
    <>
      <Container size="1" height="100%" className="p-3 md:p-0">
        <Flex className="h-[calc(100vh-10rem)] w-full items-center ">
          <Card className="w-full p-7">
            <Heading>Sign In</Heading>
            <SigninForm />

            <Flex justify="between" my="4">
              <Text>Don't have an account?</Text>
            </Flex>
            <Link asChild>
              <NavLink passHref href="/auth/register">
                Sign Up
              </NavLink>
            </Link>
          </Card>
        </Flex>
      </Container>
    </>
  );
}

export default LoginPage;
