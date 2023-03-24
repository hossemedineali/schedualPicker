import { useChoises, useModal } from "@/store/newStore";
import { useState } from "react";
import DatePicker, { CalendarContainer } from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";


const Step3 = () => {
    const [startDate, setStartDate] = useState(new Date());

    const {setStepNumber,setSelectedParten,setSetlectdChild}=useChoises()
    const {toggleOpen}=useModal()

type props={
    
    children:JSX.Element
}

    const MyContainer:React.FC<props> = ({ children }) => {
        return (
          <div className="" style={{  background: "#216ba5", color: "#fff" }}>
            <CalendarContainer >
              
              <div style={{ position: "relative", }}>{children}</div>
            </CalendarContainer>
          </div>
        );
      };
    
      
    
    return ( 
        <div className="flex flex-col h-full p-4">
            <div className="h-10 text-2xl flex hover:cursor-pointer">
                <span onClick={()=>{toggleOpen();setSelectedParten('');setSetlectdChild('');setStepNumber(1)}} className="ml-auto">X</span>
            </div>
            <div className="flex-grow border overflow-auto">
                <DatePicker
                  inline
                  selected={startDate}
                  onChange={(date) => setStartDate(date as Date)}
                  calendarContainer={MyContainer}
                  className=''
                />
            </div>
            <div onClick={()=>{setStepNumber(1)}} className="flex p-3 gap-3 group hover:cursor-pointer"> 
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 group-hover:-translate-x-2 transition-all duration-100 ease-linear">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
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
