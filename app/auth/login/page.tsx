import { BookmarkIcon } from "@radix-ui/react-icons";
import { Button } from "@radix-ui/themes";

function LoginPage() {
  return (
    <div>
      Login page
      <Button>
        <BookmarkIcon width={16} height={16} /> Login
      </Button>
    </div>
  );
}

export default LoginPage;
