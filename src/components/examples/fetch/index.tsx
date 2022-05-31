import { Box } from "@/components/layout";
import React, { useEffect, useState } from "react";

const API_URL = "https://v2.jokeapi.dev/joke/Programming?type=twopart";

// put these types in an appropriate file in actual project
interface Joke {
  id: number;
  joke: string;
  setup: string;
  delivery: string;
  safe: boolean;
}

const FetchExample = () => {
  const [error, setError] = useState<Error | undefined>();
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<Joke | undefined>();

  function getJoke() {
    fetch(API_URL, {})
      .then((resp): Promise<Joke> => resp.json())
      .then(
        (result) => {
          console.log("result: ", result);
          setData(result);
          setIsLoading(false);
        },
        // Note: it's important to handle errors here
        (error) => {
          setIsLoading(false);
          setError(error);
        }
      );
  }

  useEffect(() => {
    getJoke();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

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
        Data fetching example with fetch API
      </Box>
      <Box css={{ px: "$md", mb: "$5" }}>
        <p>Programmer Jokes {`#${data?.id}`}</p>
        <p>{data?.setup}</p>
        <p>{data?.delivery}</p>
        <span style={{ marginRight: "10px" }}>
          {isLoading ? "loading..." : "loaded"}
        </span>
        <button onClick={getJoke}>update manually</button>
      </Box>
      <Box css={{ px: "$md", mb: "$5" }}>
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API"
          target="_blank"
          rel="noopener noreferrer"
        >
          Go To Documentation
        </a>
      </Box>
    </div>
  );
};

export default FetchExample;
