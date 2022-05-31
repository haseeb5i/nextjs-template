import { QueryClient, DefaultOptions } from "react-query";

const queryConfig: DefaultOptions = {
  queries: {
    useErrorBoundary: true,
    refetchOnWindowFocus: false,
    retry: false,
  },
};

export function createQueryClient() {
  return new QueryClient({ defaultOptions: queryConfig });
}
