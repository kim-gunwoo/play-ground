import type { NextAuthOptions, User } from "next-auth";
import NextAuth from "next-auth";
import { JWT } from "next-auth/jwt";
import CredentialsProvider from "next-auth/providers/credentials";

// interface IUser extends User {
//   addr?: string
// }



export const authOptions: NextAuthOptions = {
  pages: {
    signIn: "/login",
  },
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      id: 'login-id-pwd',
      name: "Sign in",
      credentials: {
        // email: {
        //   label: "Email",
        //   type: "email",
        //   placeholder: "example@example.com",
        // },
        id: { label: "id", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.id || !credentials.password) {
          // throw new Error("아이디 혹은 패스워드가 틀립니다.");
          return null
        }

        if (credentials.id !== "test" && credentials?.password !== "test") {
          throw new Error("아이디 혹은 패스워드가 틀립니다.");
          // return null;
        }

        const user = {
          id: "1",
          name: "Admin",
          secret: 'is secrest',
          email: "admin@admin.com",
          addr: "this is ???"
        };
        return user;
      },
    }),
  ],
  callbacks: {
    // jwt: ({ token, user }: { token: JWT, user: IUser }) => {
    jwt: ({ token, user }) => {
      if (user) {
        return { ...token, ...user };
      }
      return token;
    },
    session: ({ session, token }) => {
      return {
        ...session,
        // ...token,
        // accessToken: token,
        user: {
          // ...token,
          ...session.user,
          id: token.id,
          addr: token.addr,
          // randomKey: token.randomKey,
        },
      }
    },
  },
};


const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };