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

interface Choises{
    hasChoosen:boolean,
    stepNumber:number,
    selectedParent:string,
    selectedChild:string,
    parentIndex:number,
    childIndex:number,
    selectedDuration:number
    setHasChoosen:(x:boolean)=>void
    setStepNumber:(x:number)=>void
    setSelectedParten:(x:string)=>void
    setSetlectdChild:(x:string)=>void
    setParentIndex:(x:number)=>void,
    setChildIndex:(x:number)=>void
    setSelectedDuration:(x:number)=>void
    
}


export const useChoises=create<Choises>()((set)=>({
  hasChoosen:false,
    stepNumber:1,
    selectedParent:'',
    selectedChild:'',
    parentIndex:-1,
    childIndex:-1,
    selectedDuration:0,
    setHasChoosen:(x)=>set(()=>({hasChoosen:x})),
    setStepNumber:(x)=>set(()=>({stepNumber:x})),
    setSelectedParten:(x)=>set(()=>({selectedParent:x})),
    setSetlectdChild:(x)=>set(()=>({selectedChild:x})),
    setParentIndex:(x)=>set(()=>({parentIndex:x})),
    setChildIndex:(x)=>set(()=>({childIndex:x})),
    setSelectedDuration:(x)=>set(()=>({selectedDuration:x}))

}))