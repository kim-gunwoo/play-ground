
import type { Metadata, ResolvingMetadata } from 'next'
import { setTimeout } from "timers/promises";
 
type Props = {
  params: { id: string }
  searchParams: { [key: string]: string | string[] | undefined }
}
 
export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  console.log(params, searchParams)
  const id = params.id
 
  // fetch data
//   const product = await fetch(`https://.../${id}`).then((res) => res.json())
 
  // optionally access and extend (rather than replace) parent metadata
//   const previousImages = (await parent).openGraph?.images || []

const res = await setTimeout(5000, () => 'success');

  return {
    title: 'meta page ' + id + res,
    description: 'meta description test',
    openGraph: {
        title: 'open graph test id : ' + id, 
        description: 'description test' ,
        // images: ''
    }
  }
 
//   return {
//     title: product.title,
//     openGraph: {
//       images: ['/some-specific-page-image.jpg', ...previousImages],
//     },
//   }
}


export default function MetaId({params, searchParams}:Props) {
    console.log(params, searchParams)
    return <div>
        <div>meta id : {params.id}</div>
        <div>meta searchParams : {searchParams.test}</div>
    </div>
}