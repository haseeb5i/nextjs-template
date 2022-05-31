import { useSession } from "next-auth/react";
import MainLayout from "@/components/layout/MainLayout";

export default function MePage() {
  const { data, status } = useSession();
  
  console.log({ data, status });

  return (
    <MainLayout>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </MainLayout>
  );
}
