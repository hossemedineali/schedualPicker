import { create } from 'zustand'

interface BearState {
  bears: number
  increase: (by: number) => void
}

const useBearStore = create<BearState>()((set) => ({
  bears: 0,
  increase: (by) => set((state) => ({ bears: state.bears + by })),
}))



interface modal{
    isOpen:boolean,
    toggleOpen:()=>void
}

export const useModal=create<modal>()((set)=>({
    isOpen:false,
    toggleOpen:()=>set((state)=>({isOpen:!state.isOpen}))
}))





interface Step {
    currentStep:string,
    setCurrentStep:(x:string)=>void
}

export const useStep=create<Step>()((set)=>({
     currentStep:'Select service',
     setCurrentStep:(x)=>set(()=>({currentStep:''}))
}))

interface Services{
  currentService:string,
  setCurrentService:(x:string)=>void
}


export const useServices =create<Services>()((set)=>({
  currentService:'',
  setCurrentService:(x)=>set(()=>({currentService:x}))
}))


interface DesiredAction{
  desirecAction:string,
  setDesiredAction:(x:string)=>void
}


export const useDesiredAction=create<DesiredAction>()((set)=>({
  desirecAction:'', 
  setDesiredAction:(x)=>set(()=>({desirecAction:x}))
}))