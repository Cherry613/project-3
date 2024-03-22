import axios from "npm:axios"
import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import Character from "../components/Character.tsx"

type Character = {
    name: string,
    image: string,
    status: string,
}

type Data = {
    results: Character[]
}

export const handler: Handlers = {
    GET: async (_req: Request, ctx: FreshContext<unknown, Data>) => { 

        try{            
            const datos= await axios.get<Data>(`https://rickandmortyapi.com/api/character`);
            
            if(datos.status !== 200){
                throw new Error ("Ha habido un error")
            }

            return ctx.render(datos.data);

        } catch (e){
            throw new Error ("Ha habido un error")
        }
    },
}

//PARA EL MAP PONER UN PARENTESIS 

export default function Home( props: PageProps<Data>) {
  try{
    const characters = props.data.results;

    return (
      <body class ="fondo">
        <div>  
          <h1>Rick and Morty Characters</h1>
            <div  class ="flex-container flex-around">
              {(characters.map((character)=> (
                  <div>
                  <Character name={character.name} image={character.image} status={character.status}/>
                  </div>
              )))}
            </div>
        </div>        
      </body>
    );

  }catch(e){
    throw new Error(e);
  }
}
