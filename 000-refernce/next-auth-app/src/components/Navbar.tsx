"use client"

import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

export default function Navbar() {
    const { data: session, status } = useSession();
    console.log(session?.user.addr)
    // console.log(session?.user)

    return <nav>
        <div>
            {status !== 'loading' && (session ?
                <button onClick={() => signOut()}>logout</button> :
                <Link href={'/login'}>login</Link>)
            }
        </div>
        <Link href='/counter'>couter</Link>
    </nav>

}