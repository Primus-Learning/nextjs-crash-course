import AuthenticatedScreen from "@/components/AuthenticatedScreen";
import UnaunthenticatedScreen from "@/components/UnauthenticatedScreen";
import { useSession } from "next-auth/react";

function Home() {
  const { data: session } = useSession();

  if (session) {
    return <AuthenticatedScreen />;
  }
  return <UnaunthenticatedScreen />;
}

export default Home;

