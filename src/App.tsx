import Card from "./components/Card"
import { useAppSelector } from "./hooks/hooks"
import { usePokemonActions } from "./hooks/usePokemonActions"
import { Pokemon } from "./services/Pokemon"



function App() {
  const {loading} = Pokemon()
  const pokemons = useAppSelector((state)=> state.poke)
  const {deletePokemon} = usePokemonActions()
  return (
    <>
      <div className="container">
          {loading && <p>Loading...</p>}
          {pokemons && pokemons.map((poke,index)=>(
            <Card key={index}>
            <Card.Title>{poke.name}</Card.Title>

            <button onClick={()=> deletePokemon(poke.name)}  className="button delete">Delete</button>
          </Card>
          ))}
      </div>
    </>
  )
}

export default App
