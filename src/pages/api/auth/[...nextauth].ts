import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
// import CredentialsProvider from "next-auth/providers/credentials";

export default NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  // https://next-auth.js.org/tutorials/refresh-token-rotation
  callbacks: {
    async jwt({ token }) {
      token.userRole = "admin";
      return token;
    },
  },
});
