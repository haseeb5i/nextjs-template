import { useState } from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { darkTheme, globalStyles } from "@/theme";
import { QueryClientProvider, Hydrate } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { createQueryClient } from "@/lib/react-query";
import { Provider as ReduxProvider } from "react-redux";
import type { NextPage } from "next";
import type { AppProps } from "next/app";
import store from "@/state/store";

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
          <ReduxProvider store={store}>
            <Component {...pageProps} />
          </ReduxProvider>
        </Hydrate>
      </QueryClientProvider>
    </NextThemesProvider>
  );
}
