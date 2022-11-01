import Cardcar from "../src/components/Cardcar";
import { useRouter } from "next/router"



export default function Form() {
    const router = useRouter();
    const query = router.query;
    const day = query.selectedDay;
    const hour = query.selectedHour;
    const weekDay = query.selectedWeekDay

    return(
        <>
        <Cardcar/>

        {day}
        {hour}
        {weekDay}
        </>
    )
}
