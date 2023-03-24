import { useChoises, useModal } from "@/store/newStore";

const Step3 = () => {
    const {setStepNumber,setSelectedParten,setSetlectdChild}=useChoises()
    const {toggleOpen}=useModal()
    return ( <div className="flex flex-col h-full p-4">
        <div className="h-10 text-2xl flex hover:cursor-pointer">
            <span onClick={()=>{toggleOpen();setSelectedParten('');setSetlectdChild('');setStepNumber(1)}} className="ml-auto">X</span>

        </div>
        <p className="m-auto text-center text-2xl font-semibold">Please hang on , the calandar is being developed</p>

        <div  onClick={()=>{setStepNumber(1)}} className="flex p-3 gap-3 group hover:cursor-pointer"> 

<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 group-hover:-translate-x-2 transition-all duration-100 ease-linear">
 <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
</svg>
    <p className="">

    Back
    </p>
</div>
    </div> );
}
 
export default Step3;