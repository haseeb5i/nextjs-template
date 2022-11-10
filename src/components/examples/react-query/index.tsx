import { Box } from "@/components/layout";
import { useQuery } from "@tanstack/react-query";
import request from "graphql-request";
import { graphql } from "@/gql";

interface Joke {
  id: number;
  joke: string;
  setup: string;
  delivery: string;
  safe: boolean;
}

// using built-in fetch, alternatively you can use axios
async function getJoke(): Promise<Joke> {
  return fetch("https://v2.jokeapi.dev/joke/Programming?type=twopart").then(
    (resp) => resp.json()
  );
}

export const launchesDocument = graphql(/* GraphQL */ `
  query launches($limit: Int) {
    launchesPast(limit: $limit) {
      mission_name
      links {
        mission_patch_small
        mission_patch
      }
      launch_year
      rocket {
        rocket_name
      }
      id
    }
  }
`);

// this is auto typed by graphql-codegen
async function getLaunches(limit: number) {
  return request("https://api.spacex.land/graphql/", launchesDocument, {
    limit,
  });
}

const ReactQueryExample = () => {
  const launchesQuery = useQuery(["launches"], () => getLaunches(10));
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
        <h3>Graphql</h3>
        <div>
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
        </div>

        <h3>Rest API</h3>
        <div>
          <h4>{jokeQuery.data?.setup}</h4>
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
