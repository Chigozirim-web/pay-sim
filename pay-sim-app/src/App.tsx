import { Button } from "@/components/ui/button"
import { BrowserRouter, useRoutes } from "react-router-dom";
import { routes } from "./routes";

function AppRoutes() {
  return useRoutes(routes);
}
export default function App() {
  return (
    <>
      <div className="flex bg-primary justify-center items-center"> <Button>Paysim App </Button></div>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </>
  );
}