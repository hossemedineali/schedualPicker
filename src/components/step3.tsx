import { useChoises, useModal } from "@/store/newStore";
import { useState } from "react";
import DatePicker, { CalendarContainer } from "react-datepicker";
import { format } from "date-fns";
import {motion} from "framer-motion"
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

import "react-datepicker/dist/react-datepicker.css";


const hours=['09:00','10:00','11:00','12:00','13:00','14:00',]

const Step3 = () => {
  const [startDate, setStartDate] = useState(new Date());

  const [selected, setSelected] = useState<Date>();

  let footer = <p>Please pick a day.</p>;
  if (selected) {
    footer = <p>You picked {format(selected, "PP")}.</p>;
  }

  const { setStepNumber,setStepName, setSelectedParten, setSetlectdChild } = useChoises();
  const { toggleOpen } = useModal();

  type props = {
    children: JSX.Element;
  };

  const MyContainer: React.FC<props> = ({ children }) => {
    return (
      <div className="" style={{ background: "#216ba5", color: "#fff" }}>
        <CalendarContainer>
          <div style={{ position: "relative" }}>{children}</div>
        </CalendarContainer>
      </div>
    );
  };

  return (
    <div className="flex flex-col h-full p-4 overflow-hidden">
     {/*  <div className="h-10 text-2xl flex hover:cursor-pointer">
        <span
          onClick={() => {
            toggleOpen();
            setSelectedParten("");
            setSetlectdChild("");
            setStepNumber(1);
          }}
          className="ml-auto"
        >
          X
        </span>
      </div> */}
      <div className="flex-grow  flex items-center flex-col overflow-x-hidden overflow-y-auto  ">
       
        <DayPicker
        className=" text-center  w-fit border    "
          mode="single"
          selected={selected}
          onSelect={setSelected}
        />

{selected&&<div className="h-40 grid grid-cols-3 mb-5 gap-5  flex-wrap    justify-center">
                    {hours.map((item,index)=>{
                        return <motion.div initial={{y:'100%',opacity:0}} animate={{y:0,opacity:1}} transition={{duration:0.3 ,delay:0.2*index}} key={index} className='  h-fit  border text-center text-lg px-6 odd:bg-green-400 even:cursor-not-allowed even:bg-slate-100'>{item} </motion.div>
                    })}
        </div>}
      </div>

     
      <div
        onClick={() => {
          setStepNumber(2);
          setStepName('Select agent')
        }}
        className="flex p-3 gap-3 group hover:cursor-pointer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 group-hover:-translate-x-2 transition-all duration-100 ease-linear"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
          />
        </svg>
        <p>Back</p>
      </div>
      <style jsx>{`
        .my-calendar {
          width: 100%;
        }
        .react-datepicker__month-container {
          height: calc(100% - 64px);
        }
        .react-datepicker__current-month {
          font-size: 1.5rem;
          font-weight: bold;
        }
      `}</style>
    </div>
  );
};

export default Step3;
