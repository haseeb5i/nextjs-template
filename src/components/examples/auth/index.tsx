import { Box } from "@/components/layout";
import useUser from "@/hooks/useUser";
import fetchJson, { FetchError } from "@/lib/fetchJson";
import { useState } from "react";
import Form from "./Form";
import Header from "./Header";

export default function Home() {
  const { mutateUser } = useUser();
  const [errorMsg, setErrorMsg] = useState("");

  return (
    <div>
      <Box
        as="h2"
        css={{
          bgColor: "$primaryBg",
          p: "$md",
          mb: "$5",
          borderRadius: "$sm",
        }}
      >
        Authentication using iron-session
      </Box>
      <Box css={{ px: "$md" }}>
        <Header />

        <Form
          errorMessage={errorMsg}
          onSubmit={async function handleSubmit(event) {
            event.preventDefault();

            const body = {
              username: event.currentTarget.username.value,
            };

            try {
              mutateUser(
                await fetchJson("/api/login", {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify(body),
                })
              );
            } catch (error) {
              if (error instanceof FetchError) {
                setErrorMsg(error.data.message);
              } else {
                console.error("An unexpected error happened:", error);
              }
            }
          }}
        />
      </Box>
    </div>
  );
}
