import Link from "next/link";
import Image from "next/image";
import useUser from "@/hooks/useUser";
import fetchJson from "@/lib/fetchJson";
import { css } from "@/theme/stitches.config";

const linkStyle = css({
  display: "flex",
  alignItems: "center",
  textDecoration: "none",
  img: {
    marginRight: "1em",
  },
})();

export default function Header() {
  const { user, mutateUser } = useUser();

  const LoggedInLinks = () => (
    <>
      <li>
        <Link className={linkStyle} href="/profile-sg">
          <span
            style={{
              marginRight: ".3em",
              verticalAlign: "middle",
              borderRadius: "100%",
              overflow: "hidden",
            }}
          >
            <Image src={user?.avatarUrl || ""} width={32} height={32} alt="" />
          </span>
          Profile (Static Generation, recommended)
        </Link>
      </li>
      <li>
        <Link className={linkStyle} href="/profile-ssr">
          Profile (Server-side Rendering)
        </Link>
      </li>
      <li>
        {/* In this case, we're fine with linking with a regular a in case of no JavaScript */}
        {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
        <a
          className={linkStyle}
          href="/api/logout"
          onClick={async (e) => {
            e.preventDefault();
            mutateUser(await fetchJson("/api/logout", { method: "POST" }));
          }}
        >
          Logout
        </a>
      </li>
    </>
  );

  return (
    <div>
      <ul>
        {user?.isLoggedIn === true && <LoggedInLinks />}
        <li>
          <a href="https://github.com/vvo/iron-session">
            <Image
              src="/GitHub-Mark-Light-32px.png"
              width="32"
              height="32"
              alt=""
            />
          </a>
        </li>
      </ul>
      <style jsx>{`
        ul {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          list-style: none;
          margin-left: 0;
          padding-left: 0;
          gap: 2rem;
        }

        li {
          margin-right: 1rem;
          height: min-content;
        }

        li:first-child {
          margin-left: auto;
        }
      `}</style>
    </div>
  );
}
