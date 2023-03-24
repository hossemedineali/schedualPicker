import { useChoises, useModal } from "@/store/newStore";

import man from '../../../public/man.png'
import woman from '../../../public/woman.jpg'
import blacnk from '../../../public/blank.webp'
import Image from "next/image";


const agents=[{name:'Michael',pic:man},{name:'Katelyn',pic:woman},{name:'Brandan',pic:man},{name:'Thomas',pic:man},{name:'Gloria',pic:woman}]

const Step2 = () => {
    const {toggleOpen}=useModal()
    const {setStepNumber,setStepName,setSetlectdChild,setSelectedParten}=useChoises()
    return ( 
        <div className= "h-full  flex flex-col">
              {/*   <div className=" flex justify-between p-2 items-center text-xl border-b">
                        <p className=" text-blue-900  font-medium text-center text-xl ">Select Agent</p>
                        <span onClick={()=>{toggleOpen();setSelectedParten('');setSetlectdChild('');setStepNumber(1)}} className="text-2xl hover:cursor-pointer ">X</span>
                </div> */}

                <div className="grid grid-cols-3 justify-center items-center p-2">
                            <div className=" hover:cursor-pointer hover:border-blue-900 hover:border-2 rounded-md transition-all duration-150 ease-linear border mt-3 w-28 aspect-square flex flex-col justify-center items-center">
                                <Image src={blacnk.src} width={64} height={64} alt='agent' className="rounded-full  "/>
                                <p className=" w-full   text-lg text-center">Any agent</p>
                            </div>
                        {agents.map(({name,pic},idx)=>{
                            return <div onClick={()=>{setStepNumber(3);setStepName('Select date and time')}} key={ idx} className='group hover:cursor-pointer hover:border-blue-900 hover:border-2 rounded-md transition-all duration-150 ease-linear border mt-3 w-28 aspect-square flex flex-col justify-center items-center '>
                                <Image src={pic.src} width={64} height={64} alt='agent' className="rounded-full group-hover:scale-75 transition-all duration-150 ease-linear group-hover:-translate-y-2 "/> 
                                <p className=" w-full group-hover:-translate-y-3 transition-all duration-150 ease-linear  text-lg text-center">{name}</p>
                                <p className="text-xs hidden group-hover:block group-hover:-translate-y-3 transition-transform duration-150 ease-linear underline decoration-dotted underline-offset-4 decoration-blue-900 hover:decoration-red-800">View details</p>
                                </div>
                        })}
                </div>




                <div className="  mt-auto border-t">
                                            {<div  onClick={()=>{setStepNumber(1);setStepName('Select Service')}} className="flex p-3 gap-3 group hover:cursor-pointer"> 

                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 group-hover:-translate-x-2 transition-all duration-100 ease-linear">
                                                 <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                                                </svg>
                                                    <p className="">

                                                    Back
                                                    </p>
                                                </div>}
                                    </div>
                </div>
     );
}
 
export default Step2;