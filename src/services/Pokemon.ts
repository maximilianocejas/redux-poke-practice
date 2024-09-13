import { useEffect, useState } from "react"
import { useAppDispatch } from "../hooks/hooks"
import { setPokemons } from "../features/slices/pokeSlice"



const URL_POKEMON = 'https://pokeapi.co/api/v2/pokemon?limit=10'


export function Pokemon(){
    const [loading,setLoading] = useState(true)
    const dispatch = useAppDispatch()

    useEffect(()=>{
        fetch(URL_POKEMON)
        .then(res=>{
            if(!res.ok) throw new Error('Error fetch pokemons')
            return res.json()
        })
        .then(data=> {
            dispatch(setPokemons(data.results))
        })
        .catch(err=>console.log(err))
        .finally(()=>{
            setLoading(false)
        })
    },[dispatch])
    return{
        loading
    }
}