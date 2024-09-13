import { deletePoke } from "../features/slices/pokeSlice"
import { useAppDispatch } from "./hooks"


export const usePokemonActions = ()=>{
    const dispatch = useAppDispatch()
    const deletePokemon = (name: string)=>{
        dispatch(deletePoke(name))
    }
    
    return{
        deletePokemon
    }
}