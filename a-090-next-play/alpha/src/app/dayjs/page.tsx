import dynamic from "next/dynamic";
import DayJs from "./DayJs";
const NoSSRDayJs = dynamic(() => import('./DayJs'), { ssr: false })

export default function DayJsPage() {

    return <div>
        <DayJs />
        {/* <NoSSRDayJs /> */}
    </div>
}