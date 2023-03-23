import { useChoises } from "@/store/newStore";
import { useStep } from "@/store/store";

const steps=[1,2,3,4,5]

const StepsViewer = () => {
    const {stepNumber}=useChoises()
    const {currentStep}=useStep()
    return ( <div  className="w-full h-full flex flex-col">
        <div className=" h-10  flex gap-5 px-4 p-2 w-fit mx-auto">
         {steps.map((item,index)=>{
            return <span key={index} className={` h-2 w-2 rounded-sm border border-blue-800  ${stepNumber==index+1?'bg-blue-800':''} `}> </span>
         })}
         </div>

         {stepNumber==1&&<SelectService/>}




    </div> );
}
 



const SelectService=()=>{


    return <div className=" flex h-full flex-col">
     
        <div className="flex-grow flex">
            <div className="m-auto flex gap-2 flex-col text-center px-1">


        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className="w-20 h-20 fill-white stroke-black mx-auto " strokeWidth={3}><path d="M249.6 471.5c10.8 3.8 22.4-4.1 22.4-15.5V78.6c0-4.2-1.6-8.4-5-11C247.4 52 202.4 32 144 32C93.5 32 46.3 45.3 18.1 56.1C6.8 60.5 0 71.7 0 83.8V454.1c0 11.9 12.8 20.2 24.1 16.5C55.6 460.1 105.5 448 144 448c33.9 0 79 14 105.6 23.5zm76.8 0C353 462 398.1 448 432 448c38.5 0 88.4 12.1 119.9 22.6c11.3 3.8 24.1-4.6 24.1-16.5V83.8c0-12.1-6.8-23.3-18.1-27.6C529.7 45.3 482.5 32 432 32c-58.4 0-103.4 20-123 35.6c-3.3 2.6-5 6.8-5 11V456c0 11.4 11.7 19.3 22.4 15.5z"/></svg>


        <h2 className="text-lg text-blue-600 font-medium ">Select Service</h2>
        <p className="text-sm"> Please select a service you want to schedule appointment for
</p>
            </div>
        </div>


        <div className="h-16 border text-center">

        <h2 className="text-md text-blue-600 font-medium ">Questions?</h2>
        <p className="text-sm"> Call (858) 939-3746 for help

</p>
        </div>
    </div>
}
export default StepsViewer;