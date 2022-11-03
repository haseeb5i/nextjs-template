import { Box } from "@/components/layout";
import { useQuery } from "@tanstack/react-query";
// import { useLaunchesQuery } from "@/generated";

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
  // const launchesQuery = useLaunchesQuery({ limit: 10 });
  const jokeQuery = useQuery(["joke"], getJoke);

  if (jokeQuery.isLoading) {
    return <div>Loading...</div>;
  }

  if (jokeQuery.error instanceof Error) {
    return <div>An error has occurred: {jokeQuery.error.message} </div>;
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
        Server state management with react-query
      </Box>
      <Box css={{ px: "$md" }}>
        {/* <div>
          {launchesQuery.data?.launchesPast?.map((launch) => {
            return (
              <div key={launch?.id}>
                <span>{launch?.id}</span> <span>{launch?.mission_name}</span>
              </div>
            );
          })}
        </div>
        <div style={{ marginBlock: "7px" }}>
          {launchesQuery.isFetching ? "Updating..." : "Fetch Done"}
          <button
            style={{ marginLeft: "10px" }}
            onClick={() => launchesQuery.refetch()}
          >
            update manually
          </button>
        </div> */}

        <div>
          <h3>{jokeQuery.data?.setup}</h3>
          <p>{jokeQuery.data?.delivery}</p>
        </div>
        <div style={{ marginBlock: "7px" }}>
          {jokeQuery.isFetching ? "Updating..." : "Fetch Done"}
          <button
            style={{ marginLeft: "10px" }}
            onClick={() => jokeQuery.refetch()}
          >
            update manually
          </button>
        </div>

        <div>
          <a
            href="https://tanstack.com/query/v4/docs/overview"
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
