import { NextRequest, NextResponse } from "next/server";
import { cookies } from 'next/headers';
import { redirect } from "next/navigation";

export async function GET(request: Request) {
    console.log('api/auth/GET');
    // const headersList = headers()
    const { searchParams } = new URL(request.url);
    // const id = searchParams.get('id');
    const cookieStore = cookies();
    const access = cookieStore.get('access');

    // console.log(access);
    // console.log(searchParams)

    return NextResponse.json({ access });
    // redirect('/');
}

// export async function POST(request: Request) {
export async function POST(request: Request) {
    console.log("POST", request.body);
    // console.log(request)

    cookies().set({
        name: 'access',
        value: `${Math.random()}`,
        httpOnly: true,
        path: '/',
    });

    return NextResponse.json({ isLogin: true });
    // redirect('/');
}


// export default function handler(req: NextRequest, res: NextResponse) {
//     res.status(200).json({ name: 'John Doe' })
// }