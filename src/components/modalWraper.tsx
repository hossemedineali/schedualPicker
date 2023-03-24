import StepsViewer from "./stepsviwer";
import { motion } from "framer-motion";
import { useChoises, useModal } from "@/store/newStore";
import Step2 from "./new/step2";
import NewSteps1 from "./new/step1new";
import Steps1 from "./steps1";
import Link from "next/link";
import Step3 from "./step3";
import { useStep } from "@/store/store";

const ModalWrapper = () => {
  const { currentStep, setCurrentStep } = useStep();

  console.log(currentStep)
  const { toggleOpen } = useModal();

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
    stepNumber,
    setStepName,
    stepName,
    selectedDuration,
  } = useChoises();
  return (
    <motion.div
      layout
      initial={{ y: 30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: "anticipate" }}
      className="absolute top-0 left-0 right-0 bottom-0 flex bg-white"
    >
      <div className="border  flex w-full h-full m-auto max-w-fit md:max-h-[475px] rounded-xl shadow-lg">
        <div className=" w-3/12 max-w-[240px] min-w-min hidden md:flex ">
          <StepsViewer />
        </div>


        <div className=" flex-grow flex  flex-col border max-w-2xl ">
          <div className=" flex justify-between p-2 items-center text-xl border-b">
            <p className=" text-blue-900  font-medium text-center text-xl ">
              {stepName}
            </p>
            <span
              onClick={() => {
                toggleOpen();
                setSelectedParten("");
                setSetlectdChild("");
                setStepName('Select Service');
                setStepNumber(1)
                
              }}
              className="text-2xl hover:cursor-pointer "
            >
              X
            </span>

          </div>

          <div className="flex-grow h-full overflow-y-auto border">

          {stepNumber == 1 && <NewSteps1 />}
          {stepNumber == 2 && <Step2 />}
          {stepNumber == 3 && <Step3 />}
         
          </div>

{/*           <div className="h-10 mt-auto bg-black "></div>
 */}        </div>

        {selectedChild && (
          <motion.div
            layout
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: "30%" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className=" hidden md:flex flex-col min-w-3/12  overflow-hidden "
          >
            <div className="flex h-fit py-2 w-full  border overflow-hidden text-blue-900 gap-2">
              <div className="">
                <p className="leading-[13px]">
                  ::::::::::::::::::::::::::::::::
                </p>
                <p className="leading-[0.1px]">
                  ................................
                </p>
              </div>
              <div>
                <p>SUMMARY</p>
              </div>

              <div className=" ">
                <p className="leading-[13px]">
                  ::::::::::::::::::::::::::::::::
                </p>
                <p className="leading-[0.1px]">
                  ................................
                </p>
              </div>
            </div>

            <div className="px-2 pt-4 pb-2 text-lg font-medium ">
              <h3>{selectedChild}</h3>
            </div>
            <div className="w-10/12 h-[1px] bg-slate-300 mx-auto"></div>

            <div className="flex">
              <p>Location</p>
              <div className="border-b   flex-grow"></div>
              <div className="flex gap-1 px-1">
                <p>Main Location</p>
                <Link
                  target={"_blank"}
                  href={
                    "https://www.google.com/maps?q=41+Madison+Ave%2C+New+York%2C+NY+10010"
                  }
                  className="flex"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke=""
                    className="w-4 h-4 m-auto stroke-blue-900"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                    />
                  </svg>
                </Link>
              </div>
            </div>

            <div className=" mt-auto flex flex-col pt-5 border">
                    
            </div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default ModalWrapper;
