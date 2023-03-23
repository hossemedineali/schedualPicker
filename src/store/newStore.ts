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
    stepNumber:number,
    selectedParent:string,
    selectedChild:string,
    parentIndex:number,
    childIndex:number,
    selectedDuration:number
    setStepNumber:(x:number)=>void
    setSelectedParten:(x:string)=>void
    setSetlectdChild:(x:string)=>void
    setParentIndex:(x:number)=>void,
    setChildIndex:(x:number)=>void
    setSelectedDuration:(x:number)=>void
    
}


export const useChoises=create<Choises>()((set)=>({
    stepNumber:1,
    selectedParent:'',
    selectedChild:'',
    parentIndex:-1,
    childIndex:-1,
    selectedDuration:0,
    setStepNumber:(x)=>set(()=>({stepNumber:x})),
    setSelectedParten:(x)=>set(()=>({selectedParent:x})),
    setSetlectdChild:(x)=>set(()=>({selectedChild:x})),
    setParentIndex:(x)=>set(()=>({parentIndex:x})),
    setChildIndex:(x)=>set(()=>({childIndex:x})),
    setSelectedDuration:(x)=>set(()=>({selectedDuration:x}))

}))