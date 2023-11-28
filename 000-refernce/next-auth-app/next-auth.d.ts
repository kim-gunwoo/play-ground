import 'next-auth' 
import { User } from 'next-auth'

declare module "next-auth" {

    interface Session {
        user: {
            // name: string
            // email: string
            // image: string
            addr: string
        } & User
    }
}