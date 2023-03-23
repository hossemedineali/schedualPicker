import { useChoises, useModal } from "@/store/newStore";




const Step2 = () => {
    const {toggleOpen}=useModal()
    const {setStepNumber,stepNumber}=useChoises()
    return ( 
        <div className= "h-full  flex flex-col">
                <div className=" flex justify-between p-2 items-center text-xl border-b">
                        <p className=" text-blue-900  font-medium text-center text-xl ">Select Agent</p>
                        <span onClick={toggleOpen} className="text-2xl hover:cursor-pointer ">X</span>
                </div>




                <div className="  mt-auto border-t">
                                            {true&&<div  onClick={()=>{setStepNumber(1)}} className="flex p-3 gap-3 group hover:cursor-pointer"> 

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