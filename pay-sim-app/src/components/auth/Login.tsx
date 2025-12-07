import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function Login() {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen gap-4">
        <div>Login Page</div>
        <Link to="/">
          <Button variant="secondary">Back to Home</Button>
        </Link>
      </div>
    );
  }