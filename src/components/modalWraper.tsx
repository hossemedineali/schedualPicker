import Steps1 from "./steps1";
import StepsViewer from "./stepsviwer";
import {motion} from 'framer-motion'
import { useChoises } from "@/store/newStore";
import Step2 from "./new/step2";


const ModalWrapper = () => {
    const {stepNumber}=useChoises()
    return ( <motion.div initial={{y:30,opacity:0}} animate={{y:0,opacity:1}} transition={{duration:1,ease:'anticipate'}} className="absolute top-0 left-0 right-0 bottom-0 flex bg-white">
                <div className="border  flex w-full h-full m-auto max-w-4xl md:max-h-[475px] rounded-xl shadow-lg">

                    <div className=" w-3/12 hidden md:flex ">
                       
                            <StepsViewer/>
                      
                    </div>
                    <div className=" flex-grow border ">
                        {stepNumber==1&&<Steps1/>}
                        {stepNumber==2&&<Step2/>}
                            
                    </div>
                    <div className=" hidden md:flex w-3/12  bg-slate-50">

                    </div>

                </div>
    </motion.div> );   
}
 
export default ModalWrapper;