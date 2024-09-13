import { createSlice, PayloadAction } from "@reduxjs/toolkit";



interface Poke{
    name:string,
    url: string
}

const initialState: Poke[] = [];


export const pokeSlice = createSlice({
    name: 'poke',
    initialState, 
    reducers:{
        setPokemons: (state, action: PayloadAction<Poke[]>) => {
            return action.payload; 
          },
        deletePoke : (state, action: PayloadAction<string>)=>{
            const name = action.payload
            return state.filter(poke=> poke.name !== name)
        }
    }
})

export const { setPokemons,deletePoke } = pokeSlice.actions
export default pokeSlice.reducer