import { Container, Card, Heading, Flex } from "@radix-ui/themes";
import SigninForm from "@/components/auth/SigninForm";

function LoginPage() {
  return (
    <>
      <Container size="1" height="100%" className="p-3 md:p-0">
        <Flex className="h-screen w-full items-center ">
          <Card className="w-full p-7">
            <Heading>Sign In</Heading>
            <SigninForm />
          </Card>
        </Flex>
      </Container>
    </>
  );
}

export default LoginPage;
