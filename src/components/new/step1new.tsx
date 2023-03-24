import { useChoises, useModal } from "@/store/newStore";
import { useDesiredAction, useServices, useStep } from "@/store/store";

import { motion } from "framer-motion";
import { Fragment, useEffect, useState } from "react";

const x = {
  parent: "General Dentistry",
  children: ["Root Canal", "Invisilign Braces", "Teeth Whitening"],
};

export const choises = [
  {
    parent: "General Dentistry",
    index: 0,
    children: [
      {
        name: "Root Canal",
        hasFixedTime: false,
        fixedTimes: [],
        startfrom: 20,
      },
      {
        name: "Invisilign Braces",
        hasFixedTime: false,
        fixedTimes: [],
        startfrom: 30,
      },
      {
        name: "Teeth Whitening",
        hasFixedTime: false,
        fixedTimes: [],
        startfrom: 50,
      },
    ],
  },
  {
    parent: "Psychologie servie",
    index: 1,
    children: [
      {
        name: "Counseling for Couples",
        hasFixedTime: false,
        fixedTimes: [],
        startfrom: 20,
      },
      {
        name: "Panic Attacks",
        hasFixedTime: false,
        fixedTimes: [],
        startfrom: 20,
      },
      {
        name: "Stress Management",
        hasFixedTime: false,
        fixedTimes: [],
        startfrom: 20,
      },
    ],
  },
  {
    parent: "Massage and Recovery",
    index: 2,
    children: [
      {
        name: "Deep Tissue Massage",
        hasFixedTime: true,
        fixedTimes: [
          { minutes: 30, price: 20 },
          { minutes: 60, price: 40 },
          { minutes: 120, price: 60 },
        ],
        startfrom: 20,
      },
      {
        name: "Hot Stone Massage",
        hasFixedTime: true,
        fixedTimes: [
          { minutes: 30, price: 40 },
          { minutes: 60, price: 50 },
          { minutes: 90, price: 80 },
        ],
        startfrom: 30,
      },
      {
        name: "Spin Class Indoor",
        hasFixedTime: true,
        fixedTimes: [
          { minutes: 30, price: 20 },
          { minutes: 60, price: 40 },
          { minutes: 90, price: 60 },
        ],
        startfrom: 50,
      },
    ],
  },
];

const Steps1 = () => {
  const { currentStep, setCurrentStep } = useStep();
  const { toggleOpen } = useModal();
  const { setCurrentService, currentService } = useServices();
  const { desirecAction, setDesiredAction } = useDesiredAction();

  
  const {
      hasChoosen,
      selectedChild,
      selectedParent,
      setSelectedParten,
      setSetlectdChild,
      setParentIndex,
      parentIndex,
      childIndex,
      setChildIndex,
      setSelectedDuration,
      setStepNumber,
      setStepName,
      stepNumber,
      selectedDuration
    } = useChoises();
    
    const [internalSteps,setInternalStep]=useState('')
    
    useEffect(() => {
      if(!selectedParent){
        setInternalStep('choose parent')
      }
      else{
        if(choises[parentIndex].children[0].hasFixedTime){
            setInternalStep('choose duration')
        }else{
            setInternalStep('choose child')
        }
      }
    }, [])

    const HandelParentSelection=()=>{


        setInternalStep('choose child')
    }

    const handelChildSelection=()=>{
        if(choises[parentIndex].children[0].hasFixedTime){
            setInternalStep('choose duration')
        }else{
            setStepNumber(2)
            setStepName('Select agent')
        }
    }

    const HandelGoBack=()=>{
        if(internalSteps=='choose child'){
            setInternalStep('choose parent')
        }
        if(internalSteps=='choose duration'){
            setInternalStep('choose child')
        }
    }

    return <div className= "h-full  flex flex-col">
   {/*  <div className=" flex justify-between p-2 items-center text-xl border-b">
            <p className=" text-blue-900  font-medium text-center text-xl ">{currentStep}</p>
            <span onClick={()=>{toggleOpen();setSelectedParten('');setSetlectdChild('')}} className="text-2xl hover:cursor-pointer ">X</span>
    </div> */}

    
        {internalSteps=='choose parent'&&<div className="flex flex-col  items-center gap-5  p-5">
                            {choises.map((item,index)=>{

                                return <motion.div key={index} onClick={()=>{setSelectedParten(item.parent); setParentIndex(item.index);HandelParentSelection() }} initial={{y:20,opacity:0}} animate={{y:0,opacity:1}} transition={{duration:0.5,delay:index*0.2}} className={`border-2 hover:cursor-pointer hover:border-blue-900 group rounded-lg w-full p-3 flex  justify-between items-center text-md ${selectedParent==item.parent?'border-blue-900':''}`}>
                                <div className="flex items-center" >
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 fill-none stroke-black " viewBox="0 0 384 512" strokeWidth={5}><path d="M154.1 52.1C137.3 39.1 116.7 32 95.5 32C42.7 32 0 74.7 0 127.5v6.2c0 15.8 3.7 31.3 10.7 45.5l23.5 47.1c4.5 8.9 7.6 18.4 9.4 28.2L80.4 460.2c2 11.2 11.6 19.4 22.9 19.8s21.4-7.4 24-18.4l28.9-121.3C160.2 323.7 175 312 192 312s31.8 11.7 35.8 28.3l28.9 121.3c2.6 11.1 12.7 18.8 24 18.4s20.9-8.6 22.9-19.8l36.7-205.8c1.8-9.8 4.9-19.3 9.4-28.2l23.5-47.1c7.1-14.1 10.7-29.7 10.7-45.5v-2.1c0-55-44.6-99.6-99.6-99.6c-24.1 0-47.4 8.8-65.6 24.6l-3.2 2.8 19.5 15.2c7 5.4 8.2 15.5 2.8 22.5s-15.5 8.2-22.5 2.8l-24.4-19-37-28.8z"/></svg>
                                    <p className="group-hover:translate-x-1  transition-all duration-150 ease-linear">
                                     {item.parent}
                                    </p>
                                </div>
        
                                <div  className="flex text-sm font-light items-center">
                                        <p>3 services |</p>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 448 512"><path d="M200 344V280H136C122.7 280 112 269.3 112 256C112 242.7 122.7 232 136 232H200V168C200 154.7 210.7 144 224 144C237.3 144 248 154.7 248 168V232H312C325.3 232 336 242.7 336 256C336 269.3 325.3 280 312 280H248V344C248 357.3 237.3 368 224 368C210.7 368 200 357.3 200 344zM0 96C0 60.65 28.65 32 64 32H384C419.3 32 448 60.65 448 96V416C448 451.3 419.3 480 384 480H64C28.65 480 0 451.3 0 416V96zM48 96V416C48 424.8 55.16 432 64 432H384C392.8 432 400 424.8 400 416V96C400 87.16 392.8 80 384 80H64C55.16 80 48 87.16 48 96z"/></svg>
                                </div>
                             </motion.div>
                            })}
                        </div>}


                        {internalSteps=='choose child' && <div className="flex flex-col  items-center gap-5  p-5">
                            {choises[parentIndex].children.map((itm,idx)=>{
                                return <motion.div key={idx} onClick={()=>{setSetlectdChild(itm.name);setChildIndex(idx); handelChildSelection();}} initial={{y:20,opacity:0}} animate={{y:0,opacity:1}} transition={{duration:0.5,delay:idx*0.2}} className={`border-2 hover:cursor-pointer hover:border-blue-900 group rounded-lg w-full p-3 flex  justify-between items-center text-md ${selectedChild==itm.name?'border-blue-900':''}`}>
                                <div className="flex items-center" >
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 fill-none stroke-black " viewBox="0 0 384 512" strokeWidth={5}><path d="M154.1 52.1C137.3 39.1 116.7 32 95.5 32C42.7 32 0 74.7 0 127.5v6.2c0 15.8 3.7 31.3 10.7 45.5l23.5 47.1c4.5 8.9 7.6 18.4 9.4 28.2L80.4 460.2c2 11.2 11.6 19.4 22.9 19.8s21.4-7.4 24-18.4l28.9-121.3C160.2 323.7 175 312 192 312s31.8 11.7 35.8 28.3l28.9 121.3c2.6 11.1 12.7 18.8 24 18.4s20.9-8.6 22.9-19.8l36.7-205.8c1.8-9.8 4.9-19.3 9.4-28.2l23.5-47.1c7.1-14.1 10.7-29.7 10.7-45.5v-2.1c0-55-44.6-99.6-99.6-99.6c-24.1 0-47.4 8.8-65.6 24.6l-3.2 2.8 19.5 15.2c7 5.4 8.2 15.5 2.8 22.5s-15.5 8.2-22.5 2.8l-24.4-19-37-28.8z"/></svg>
                                    <p className="group-hover:translate-x-1  transition-all duration-150 ease-linear">
                                     {itm.name}
                                    </p>
                                </div>
                                <div  className=" pl-2 border-l-2 text-center">
                                        <p>{itm.startfrom}$</p>
                                        <p>Start from</p>
                                        </div>
                             </motion.div>
                            })}
                        </div>}

                        {internalSteps=='choose duration'&&choises[parentIndex].children[0].hasFixedTime&&<motion.div initial={{y:20,opacity:0}} animate={{y:0,opacity:1}} transition={{duration:0.2}} className="  flex flex-col justify-center items-center gap-5">

                        <div className="px-5 pt-5 text-center w-full max-w-sm  mx-auto">

                            <h3 className="text-lg font-semibold">Select Service Duration</h3>
                            <p>You need to select service duration , The price of your service will depend on duration</p>
                        </div>
                        <div className="flex gap-2">

                        {choises[parentIndex].children[childIndex].fixedTimes.map((itm,idx)=>{
                        return <motion.div initial={{y:20,opacity:0}} animate={{y:0,opacity:1}} transition={{duration:0.5,delay:idx*0.1}} key={idx} onClick={()=>{setSelectedDuration(itm.minutes);setStepNumber(stepNumber+1);setStepName('Select agent')}} className={`hover:border-blue-800 rounded-lg h-28 w-28 flex relative text-xl border-2  hover:cursor-pointer ${selectedDuration==itm.minutes?'border-blue-900':''}`}>
                            <p className="text-blue-900 text-3xl font-semibold text-center  w-fit h-fit m-auto">

                            {itm.price}
                            <p className="text-sm">Minutes</p>
                            </p>
                            <span className="absolute right-1 text-amber-600" >${itm.price}</span>
                            </motion.div>
                        })}
                        </div>
                        </motion.div>}



                        <div className="  mt-auto border-t">
                                {internalSteps!='choose parent'&&<div onClick={HandelGoBack} className="flex p-3 gap-3 group hover:cursor-pointer"> 

                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 group-hover:-translate-x-2 transition-all duration-100 ease-linear">
                                     <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                                    </svg>
                                        <p className="">

                                        Back
                                        </p>
                                    </div>}
                        </div>


</div>
    

};

export default Steps1;
