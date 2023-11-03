
// import type { Metadata, ResolvingMetadata } from 'next'

import Link from "next/link";

 
// type Props = {
//   params: { id: string }
//   searchParams: { [key: string]: string | string[] | undefined }
// }
 
// export async function generateMetadata(
//   { params, searchParams }: Props,
//   parent: ResolvingMetadata
// ): Promise<Metadata> {
//   // read route params
//   const id = params.id
 
//   // fetch data
//   const product = await fetch(`https://.../${id}`).then((res) => res.json())
 
//   // optionally access and extend (rather than replace) parent metadata
//   const previousImages = (await parent).openGraph?.images || []
 
//   return {
//     title: product.title,
//     openGraph: {
//       images: ['/some-specific-page-image.jpg', ...previousImages],
//     },
//   }
// }

export default function MetaHome() {
    return <div>
        <div>meta home</div>
        <Link href={'/meta/1'} >meta/1</Link>
        <br />
        <Link href={'/meta/1?test=123'} >meta/1?test=123</Link>
        <br />
        <Link href={'/meta/2'} >meta/2</Link>
    </div>
}