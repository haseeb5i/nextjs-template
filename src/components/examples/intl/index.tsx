import { Box } from "@/components/layout";
import Link from "next/link";
import useTranslation from "next-translate/useTranslation";

export const IntlExample = () => {
  const { t, lang } = useTranslation();
  const isRTL = lang === "ar" || lang === "he";
  const arrow = isRTL ? String.fromCharCode(8592) : String.fromCharCode(8594);

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
        Internationalization using next-translate
      </Box>
      <Box css={{ px: "$md", mb: "$5" }}>
        <div dir={isRTL ? "rtl" : "ltr"}>
          <div className="grid">
            <Link href="/" locale="en" legacyBehavior>
              <div className="card">
                <h3>{t("home:english")}</h3>
                <p>
                  {t("home:change-to")} {t("home:english")}
                </p>
              </div>
            </Link>

            <Link href="/" locale="ca" legacyBehavior>
              <div className="card">
                <h3>{t("home:catalan")}</h3>
                <p>
                  {t("home:change-to")} {t("home:catalan")}
                </p>
              </div>
            </Link>

            <Link href="/" locale="ar" legacyBehavior>
              <div className="card">
                <h3>{t("home:arabic")}</h3>
                <p>
                  {t("home:change-to")} {t("home:arabic")}
                </p>
              </div>
            </Link>

            <Link href="/" locale="he" legacyBehavior>
              <div className="card">
                <h3>{t("home:hebrew")}</h3>
                <p>
                  {t("home:change-to")} {t("home:hebrew")}
                </p>
              </div>
            </Link>
          </div>

          <style jsx>{`
            .grid {
              display: flex;
              gap: 1.5rem;
              flex-wrap: wrap;

              max-width: 800px;
              margin-top: 2.5rem;
            }

            .card {
              flex-basis: 45%;
              padding: 1.5rem;
              text-align: left;
              color: inherit;
              text-decoration: none;
              border: 1px solid #eaeaea;
              border-radius: 10px;
              transition: color 0.15s ease, border-color 0.15s ease;
              cursor: pointer;
            }

            .card:hover,
            .card:focus,
            .card:active {
              color: #0070f3;
              border-color: #0070f3;
            }

            .card h3 {
              display: flex;
              font-size: 1.5rem;
              margin: 0 0 1rem 0;
            }

            .card p {
              margin: 0;
              font-size: 1.25rem;
              line-height: 1.5;
            }

            [dir="rtl"] p {
              text-align: right;
            }

            @media (max-width: 600px) {
              .grid {
                width: 100%;
                flex-direction: column;
              }
            }
          `}</style>
        </div>
      </Box>
      <Box css={{ px: "$md", mb: "$5" }} dir={isRTL ? "rtl" : "ltr"}>
        <a
          href="https://github.com/vinissimus/next-translate"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t("home:plugin-docs")} {arrow}
        </a>
      </Box>
    </div>
  );
};
