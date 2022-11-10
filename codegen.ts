import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "https://api.spacex.land/graphql",
  documents: ["src/**/*.{ts,tsx}", "!src/gql/**/*"],
  generates: {
    "./src/gql/": {
      preset: "client",
      plugins: [],
    },
  },
};

export default config;
