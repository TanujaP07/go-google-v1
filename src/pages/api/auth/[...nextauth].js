import NextAuth from "next-auth"
{/*we can change the provider based on our requirement*/}
/*import GithubProvider from "next-auth/providers/github"*/
import GoogleProvider from "next-auth/providers/google";

export const authOptions = ({
  // Configure one or more authentication providers
  providers: [
    /*GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),*/
    // ...add more providers here
    GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET, //needs to be a secret from the public users- to prevent them from misusing
    }),
    ],
    pages:{
        signIn : "/auth/signin",
    },
});

export default NextAuth(authOptions)