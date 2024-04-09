import './App.css';
import { usePokemonInfo } from './context/PokeInfoContext';
import Container from "./components/Container";
import SearchBar from './components/SearchBar';
import PokemonCardList from './components/PokemonCardList';
import PokeButton from './components/PokeButton';
import PokeLogo from './image/pokelogo.png';
import InfoButton from './components/InfoButton';

function App() {
  const {pokemons, selectPks, selectPksUpdate, resultPks} = usePokemonInfo()
  return (
            <div className="bg-[#3466AF] max-h-screen">
              <div className="flex flex-col h-screen justify-center items-center">{/*flex wrapper*/}
              <InfoButton className= "w-[3%] mx-auto h-[7%]"/>
                <img src = {PokeLogo} className= "w-[20%] mx-auto p-2 h-[15%]"/>
                <Container className= "px-5 w-[90%] h-[8%]"><h1 className="text-center font-semibold">Build your best Pokémon team and determine your winning rates!</h1></Container>
                <div className="flex flex-row h-[75%] w-[90%]">
                  <Container className = "w-1/3 flex flex-col gap-y-2">
                    <h1 className="text-center font-bold h-[5%]">Build Your Team</h1>
                    <SearchBar/>
                    <PokemonCardList pks = {[...pokemons]} handle = {selectPksUpdate} hidden= " hidden" className="h-[80%]"/>
                  </Container>
                  {/*<div className = "w-1/3 flex flex-col gap-y-2">*/}
                    <Container className = "w-1/3 flex flex-col gap-y-2">
                      <h1 className="text-center font-bold h-[5%]">Selection</h1>
                      <PokemonCardList pks = {[...selectPks]} handle = {() => {}} hidden= "" className="h-[80%]"/>
                      <PokeButton className = "w-1/3 place-self-center"/>
                    </Container>
                  {/*</div>*/}
                  <Container className = "w-1/3 flex flex-col gap-y-2">
                    <h1 className="text-center font-bold h-[5%]">Result</h1>
                    <PokemonCardList pks = {[...resultPks]} handle = {() => {}} hidden= " hidden" className="h-[80%]"/>
                    </Container>
                </div>
              </div>
            </div>
  )
}

export default App