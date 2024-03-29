import React from "react";
import useUser from "@/hooks/useUser";

// Make sure to check https://nextjs.org/docs/basic-features/layouts for more info on how to use layouts
export default function SgProfile() {
  const { user } = useUser({ redirectTo: "/login" });

  return (
    <div>
      <h1>Your GitHub profile</h1>
      <h2>
        This page uses{" "}
        <a href="https://nextjs.org/docs/basic-features/pages#static-generation-recommended">
          Static Generation (SG)
        </a>{" "}
        {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
        and the <a href="/api/user">/api/user</a> route
      </h2>
      {user && (
        <>
          <p style={{ fontStyle: "italic" }}>
            Public data, from{" "}
            <a href={`https://github.com/${user.login}`}>
              https://github.com/{user.login}
            </a>
            , reduced to `login` and `avatar_url`.
          </p>

          <pre>{JSON.stringify(user, null, 2)}</pre>
        </>
      )}
    </div>
  );
}
