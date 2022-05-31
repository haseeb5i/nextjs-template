import { useQuery, UseQueryOptions } from "react-query";
import { useRouter } from "next/router";
import { Session } from "next-auth";

type UseSessionHook = <R extends boolean = false>(opts?: {
  required?: R;
  redirectTo?: string;
  queryConfig?: UseQueryOptions<
    Session | null,
    unknown,
    Session | null,
    string[]
  >;
}) =>
  | { data: undefined; status: "loading" }
  | {
      data: R extends true ? Session : Session | null;
      status: R extends true
        ? "authenticated"
        : "unauthenticated" | "authenticated";
    };

export async function getSession(): Promise<Session | null> {
  const res = await fetch("/api/auth/session");
  const session = await res.json();
  if (Object.keys(session).length) {
    return session;
  }
  return null;
}

// @ts-ignore
export const useSession: UseSessionHook = ({
  required = false,
  redirectTo = "/api/auth/signin?error=SessionExpired",
  queryConfig,
} = {}) => {
  const router = useRouter();
  const query = useQuery(["session"], getSession, {
    ...queryConfig,
    onSettled(data, error) {
      if (queryConfig?.onSettled) queryConfig.onSettled(data, error);
      if (data || !required) return;
      router.push(redirectTo);
    },
  });

  if (query.isLoading || query.data === undefined)
    return { data: undefined, status: "loading" };
  if (query.data === null) return { data: null, status: "unauthenticated" };
  return { data: query.data, status: "authenticated" };
};
