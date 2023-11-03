import Link from "next/link";

const title = 'Static Test Page';

export const metadata = {
    title,
};

export default function SsgLayout({ children }: { children: React.ReactNode }) {
    console.log("ssg layout");
    return <div>
        <div>
            <div>ssg page layout</div>
            <div><Link href={'/ssg'}>home</Link></div>
            <div><Link href={'/ssg/1'}>ssg 1</Link></div>
            <div><Link href={'/ssg/2'}>ssg 2</Link></div>
            <div>ssg page layout</div>
        </div>
        <div>{children}</div>
    </div>
}