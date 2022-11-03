import { useCallback, useEffect } from "react";
import Router from "next/router";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import type { User } from "@/pages/api/user";

export function getUser(): Promise<User> {
  return fetch("/api/user").then((res) => res.json());
}

export default function useUser({
  redirectTo = "",
  redirectIfFound = false,
} = {}) {
  // const { data: user, mutate: mutateUser } = <User>"/api/user";
  const { data: user } = useQuery(["user"], getUser);
  const client = useQueryClient();

  const mutateUser = useCallback(
    (data: User) => {
      client.setQueryData(["user"], data);
    },
    [client]
  );

  useEffect(() => {
    // if no redirect needed, just return (example: already on /dashboard)
    // if user data not yet there (fetch in progress, logged in or not) then don't do anything yet
    if (!redirectTo || !user) return;

    if (
      // If redirectTo is set, redirect if the user was not found.
      (redirectTo && !redirectIfFound && !user?.isLoggedIn) ||
      // If redirectIfFound is also set, redirect if the user was found
      (redirectIfFound && user?.isLoggedIn)
    ) {
      Router.push(redirectTo);
    }
  }, [user, redirectIfFound, redirectTo]);

  return { user, mutateUser };
}
