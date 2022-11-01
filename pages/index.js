import styles from '../styles/Home.module.css'
import Image from 'next/image'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Cardcar from '../src/components/Cardcar'
import { useState } from 'react';
import Link from "next/link"


export default function Home() {
  const month = {
    1: { weekDay: "SEG", hours: ["09:00", "10:00", "11:00", "12:00", "13:00"] },
    2: { weekDay: "TER", hours: ["10:00", "12:00", "13:00"] },
    3: { weekDay: "QUA", hours: ["14:00",] },
    4: { weekDay: "QUI", hours: ["09:00", "10:00", "11:00"] },
    5: { weekDay: "SEX", hours: ["10:00", "11:00", "12:00", "13:00"] },
    6: { weekDay: "SAB", hours: ["10:00", "12:00",] },
  }; 

  const [selectedDay, setSelectedDay] = useState(null);
  const [selectedHour, setSelectedHour] = useState(null);
  const [selectedWeekDay, setSelectedWeekDay] = useState(null);
  
  return (
    <>
      <Stack spacing={2} direction="row">
      <Button color="inherit" >Voltar</Button>
    </Stack>
    <div className={styles.schedule}>
    <Cardcar/>
      <div className={styles.schedule_box}>
        <span>Agende o dia e horário da sua visita</span>
        <ul className="day-list">
          {Object.keys(month).map((day) => (
            <li className="day" onClick={() => {setSelectedDay(day); setSelectedWeekDay(month[day].weekDay)}}>
              <span>{month[day].weekDay}</span>
              <span>{day}</span>
            </li>
          ))}
        </ul>
        <ul className="schedule-list">
          {selectedDay && month[selectedDay].hours.map((hour) => (
              <li onClick={() => setSelectedHour(hour)} 
              className="hour">{hour}</li>
            ))}
        </ul>
        <Button 
      component={Link} 
      href={{
        pathname: "/Form",
        query: {selectedDay, selectedHour, selectedWeekDay}}} 
      disabled={selectedDay && selectedHour ? false : true} 
      variant="contained">
        Agendar Visita
      </Button>
      </div>
    </div>
    </>
  )
}