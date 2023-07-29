'use client'

import DateInput from "@/components/date/DateInput"
import useRemoteConfig from "@/hooks/useRemoteConfig"
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

      {/* <DateInput /> */}
      {/* <Calendar /> */}
    </main>
  )
}
