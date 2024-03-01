import { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import prismaDb from "@/lib/prismadb/prismadb";
import { compare } from "bcrypt";

// function getGoogleCredentials() {
//   const clientId = process.env.GOOGLE_CLIENT_ID;
//   const clientSecret = process.env.GOOGLE_CLIENT_SECRET;

//   if (!clientId || clientId.length === 0) {
//     throw new Error("Missing GOOGLE_CLIENT_ID");
//   }
//   if (!clientSecret || clientSecret.length === 0) {
//     throw new Error("Missing GOOGLE_CLIENT_SECRET");
//   }

//   return { clientId, clientSecret };
// }

export const authOptions: NextAuthOptions = {
  providers: [
    Credentials({
      id: "credentials",
      name: "credentials",
      credentials: {
        email: {
          label: "Email",
          type: "text",
        },
        password: {
          label: "Password",
          type: "password",
        },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials.password) {
          throw new Error("Email and password Required");
        }

        const user = await prismaDb.user.findUnique({
          where: {
            email: credentials.email,
          },
        });

        if (!user || !user.hashedPassword) {
          throw new Error("Email does not exist");
        }

        const isCorrectPassword = await compare(
          credentials.password,
          user.hashedPassword
        );
        if (!isCorrectPassword) {
          throw new Error("Incorrect password");
        }

        return user;
      },
    }),
    // GoogleProvider({
    //   clientId: getGoogleCredentials().clientId,
    //   clientSecret: getGoogleCredentials().clientSecret,
    // }),
  ],
  // callbacks: {
  //     async jwt({ token, user }) {
  //         const dbUser = await prismaDb.user.findUnique({
  //             where: {
  //                 email:token.email
  //             }
  //         })
  //     }
  // },
  pages: {
    signIn: "/auth",
  },
  debug: process.env.NODE_ENV === "development",
  session: {
    strategy: "jwt",
  },
  jwt: {
    secret: process.env.NEXTAUTH_JWT_SECRET,
  },
  secret: process.env.NEXTAUTH_SECRET,
};
