import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Box, Button} from "@/components/elements";

const ThemeToggle = () => {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const isDark = resolvedTheme === "dark";

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
        Themes management using next-themes
      </Box>

      <Box css={{ px: "$md", my: "$3" }}>
        <Button onClick={() => setTheme(isDark ? "light" : "dark")}>
          Switch {isDark ? "Light" : "Dark"}
        </Button>
      </Box>
      <Box css={{ px: "$md", mb: "$5" }}>
        <a
          href="https://github.com/pacocoursey/next-themes"
          target="_blank"
          rel="noopener noreferrer"
        >
          Go To Documentation
        </a>
      </Box>
    </div>
  );
};
export default ThemeToggle;
