import { Box } from "@/components/layout";
import { useLaunchesQuery } from "@/generated";

const ReactQueryExample = () => {
  const query = useLaunchesQuery({ limit: 10 });

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
        }}
      >
        Server state management with react-query
      </Box>
      <Box css={{ px: "$md" }}>
        <div>
          {query.data?.launchesPast?.map((launch) => {
            return (
              <div key={launch?.id}>
                <span>{launch?.id}</span> <span>{launch?.mission_name}</span>
              </div>
            );
          })}
        </div>
        <div style={{ marginBlock: "7px" }}>
          {query.isFetching ? "Updating..." : "Fetch Done"}
          <button
            style={{ marginLeft: "10px" }}
            onClick={() => query.refetch()}
          >
            update manually
          </button>
        </div>
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
