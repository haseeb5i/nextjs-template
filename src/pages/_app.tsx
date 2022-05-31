import { useState } from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { darkTheme, globalStyles } from "@/theme";
import { QueryClientProvider, Hydrate } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { createQueryClient } from "@/lib/react-query";
import type { NextPage } from "next";
import type { AppProps } from "next/app";

type CustomPage = NextPage & {
  theme?: string;
};

type CustomAppProps = AppProps & {
  Component: CustomPage;
};

export default function App(props: CustomAppProps) {
  const { Component, pageProps } = props;
  const [queryClient] = useState(createQueryClient);

  globalStyles();

  return (
    <NextThemesProvider
      attribute="class"
      value={{
        light: "light-theme",
        dark: darkTheme.className,
      }}
    >
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <Hydrate state={pageProps.dehydratedState}>
          <Component {...pageProps} />
        </Hydrate>
      </QueryClientProvider>
    </NextThemesProvider>
  );
}
