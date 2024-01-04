
// export const dynamicParams = false;
// export const dynamic = 'force-static';
// export const revalidate = 'force-cache';
// export const maxDuration = 0;

export async function generateStaticParams() {
    // Generate two pages at build time and the rest (3-100) on-demand
    return [{ id: '1' }, { id: '2' }];
  }
  

  export default async function SsgIdPage({ params }: { params: { id: string } }) {
    return <div>
        <div>{params.id} page</div>
    </div>
}