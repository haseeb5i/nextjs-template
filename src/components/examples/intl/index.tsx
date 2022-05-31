import { Box } from "@/components/elements";
import { locales } from "@i18n";
import Link from "next/link";
import useTranslation from "next-translate/useTranslation";

export const IntlExample = () => {
  const { t } = useTranslation("common");

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
        {locales.map((lng) => (
          <Link href="/" passHref locale={lng} key={lng}>
            <a style={{ marginRight: "10px" }}>{t(`language.${lng}`)}</a>
          </Link>
        ))}
        <p>{t("greet", { name: t`common:world` })}</p>
      </Box>
      <Box css={{ px: "$md", mb: "$5" }}>
        <a
          href="https://github.com/vinissimus/next-translate"
          target="_blank"
          rel="noopener noreferrer"
        >
          Go To Documentation
        </a>
      </Box>
    </div>
  );
};
