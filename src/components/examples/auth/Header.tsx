import Link from "next/link";
import { useRouter } from "next/router";
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
  const router = useRouter();

  return (
    <div>
      <ul>
        <li>
          <Link className={linkStyle} href="/">
            Home
          </Link>
        </li>
        {user?.isLoggedIn === false && (
          <li>
            <Link className={linkStyle} href="/login">
              Login
            </Link>
          </li>
        )}
        {user?.isLoggedIn === true && (
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
                  <Image src={user.avatarUrl} width={32} height={32} alt="" />
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
                  mutateUser(
                    await fetchJson("/api/logout", { method: "POST" })
                  );
                }}
              >
                Logout
              </a>
            </li>
          </>
        )}
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
          list-style: none;
          margin-left: 0;
          padding-left: 0;
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
