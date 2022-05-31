import { Box } from "@/components/layout";
import { useQuery } from "react-query";

interface Joke {
  id: number;
  joke: string;
  setup: string;
  delivery: string;
  safe: boolean;
}

async function getJoke(): Promise<Joke> {
  return fetch("https://v2.jokeapi.dev/joke/Programming?type=twopart").then(
    (resp) => resp.json()
  );
}

const ReactQueryExample = () => {
  const query = useQuery(["joke"], getJoke);

  if (query.isLoading) {
    return <div>Loading...</div>;
  }

  if (query.error instanceof Error) {
    return <div>An error has occurred: {query.error.message} </div>;
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
          textTransform: "",
        }}
      >
        React Query Data Fetch Example
      </Box>
      <Box css={{ px: "$md" }}>
        <p>Programmer Jokes {`#${query.data?.id}`}</p>
        <p>{query.data?.setup}</p>
        <p>{query.data?.delivery}</p>
      </Box>
      <Box css={{ px: "$md" }}>
        <div>{query.isFetching ? "Updating..." : "Fetch Done"}</div>
        <p>
          <button onClick={() => query.refetch()}>update manually</button>
        </p>
        <div>
          <a
            href="https://react-query.tanstack.com/quick-start"
            target="_blank"
            rel="noopener noreferrer"
          >
            Go To Documentation
          </a>
        </div>
      </Box>
    </div>
  );
};

/**  use this pattern to hydrate all queries on the page and
 *    in its children components, for ssg and/or ssr
 */
// export async function getStaticProps() {
//   const client = new QueryClient();
//   await client.prefetchQuery(["joke"], getJoke);
//   const dehydratedState = dehydrate(client);
//   client.clear();

//   return {
//     props: {
//       dehydratedState,
//     },
//   };
// }

export default ReactQueryExample;
