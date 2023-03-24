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

         {stepNumber==2&&<SelectAgent/>}


    </div> );
}
 



const SelectService=()=>{


    return <div className=" flex text-slate-500 h-full flex-col">
     
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




const SelectAgent=()=>{

    return <div className="text-slate-500 flex h-full flex-col">
     
    <div className="flex-grow flex">
        <div className="m-auto flex gap-2 flex-col text-center px-1">


        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" className="w-20 h-20 fill-white stroke-black mx-auto " strokeWidth={3}><path d="M72 88a56 56 0 1 1 112 0A56 56 0 1 1 72 88zM64 245.7C54 256.9 48 271.8 48 288s6 31.1 16 42.3V245.7zm144.4-49.3C178.7 222.7 160 261.2 160 304c0 34.3 12 65.8 32 90.5V416c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V389.2C26.2 371.2 0 332.7 0 288c0-61.9 50.1-112 112-112h32c24 0 46.2 7.5 64.4 20.3zM448 416V394.5c20-24.7 32-56.2 32-90.5c0-42.8-18.7-81.3-48.4-107.7C449.8 183.5 472 176 496 176h32c61.9 0 112 50.1 112 112c0 44.7-26.2 83.2-64 101.2V416c0 17.7-14.3 32-32 32H480c-17.7 0-32-14.3-32-32zm8-328a56 56 0 1 1 112 0A56 56 0 1 1 456 88zM576 245.7v84.7c10-11.3 16-26.1 16-42.3s-6-31.1-16-42.3zM320 32a64 64 0 1 1 0 128 64 64 0 1 1 0-128zM240 304c0 16.2 6 31 16 42.3V261.7c-10 11.3-16 26.1-16 42.3zm144-42.3v84.7c10-11.3 16-26.1 16-42.3s-6-31.1-16-42.3zM448 304c0 44.7-26.2 83.2-64 101.2V448c0 17.7-14.3 32-32 32H288c-17.7 0-32-14.3-32-32V405.2c-37.8-18-64-56.5-64-101.2c0-61.9 50.1-112 112-112h32c61.9 0 112 50.1 112 112z"/></svg>


    <h2 className="text-lg text-blue-600 font-medium ">Select Agent</h2>
    <p className="text-sm"> You can pick a specific agent to perform your service or select any to automatically assign you one
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