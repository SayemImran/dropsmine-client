import { mongodbAdapter } from "@better-auth/mongo-adapter";
import { betterAuth } from "better-auth";
import { jwt } from "better-auth/plugins";
import { MongoClient } from "mongodb";


const client = new MongoClient(process.env.MONGODB_URI!);
const db = client.db("dropsmine_db");
export const auth = betterAuth({
    baseURL: process.env.BETTER_AUTH_URL,
    trustedOrigins: [
        "https://dropsmine.vercel.app",
        "http://localhost:3000",
    ],
    database: mongodbAdapter(db, { client }),
    emailAndPassword: {
        enabled: true,
        autoSignIn: false,
    },
    user:{
        additionalFields:{
            phoneNumber:{
                type:"string",
                required:false,
            },
            role:{
                type:"string",
                defaultValue:"customer",
                required:false,
            }
        }
    },
    plugins:[jwt()]
})