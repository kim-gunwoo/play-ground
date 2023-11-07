'use client'

import DateInput from "@/components/date/DateInput"
import useRemoteConfig from "@/hooks/useRemoteConfig"
import Image from "next/image";
import Link from "next/link"

// import Calendar from '@/components/date/Calendar';



export default function Home() {

  const a = useRemoteConfig();

  // remoteConfig.fetchAndActivate()
  //   .then(() => {
  //     const val = remoteConfig.getString("tosspayments_card_list");
  //   })
  //   .catch((err) => {
  //     console.log(err)
  //   });

  return (
    <main>
      <Link href={'/map'} >map</Link><br />
      <Link href={'/search'} >search</Link><br />
      <Link href={'/counter'} >counter</Link><br />
      <Link href={'/juso'} >juso</Link><br />
      <Link href={'/form'} >form</Link><br />
      <Link href={'/table'} >table</Link><br />
      <Link href={'/cache'} >cache</Link><br />
      <Link href={'/query'} >query</Link><br />
      <Link href={'/state-management'} >state-management</Link><br />
      <Link href={'/global-state-test'} >global-state-test</Link><br />
      <Link href={'/browser-image-compression'} >browser-image-compression</Link><br />
      <Link href={'/ssg'} >ssg</Link><br />
      <Link href={'/input'} >input</Link><br />


      {/* <Image
        width={750}
        height={500}
        src="https://www.adobe.com/kr/express/feature/image/convert/jpg-to-png/media_17e9d2503c0ecdea37e6d9bc6e2beb26adb470617.png?width=750&format=png&optimize=medium"
        alt={"aa"} />
      <div style={{ position: 'relative', width: '100%', height: '500px' }}>
        <Image
          fill
          src="https://www.adobe.com/kr/express/feature/image/convert/jpg-to-png/media_17e9d2503c0ecdea37e6d9bc6e2beb26adb470617.png"
          alt={""}
          style={{ objectFit: 'contain' }}
        />
      </div>
      <div>
        <img
          src="https://www.adobe.com/kr/express/feature/image/convert/jpg-to-png/media_17e9d2503c0ecdea37e6d9bc6e2beb26adb470617.png"
          alt={""}
        />
      </div> */}

      {/* <DateInput /> */}
      {/* <Calendar /> */}
    </main>
  )
}
