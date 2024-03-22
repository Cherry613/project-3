import { FunctionComponent } from "preact";

type CharacterProps = { 
    name: string,
    image: string,
    status: string,
}

const Character: FunctionComponent<CharacterProps> = (props) =>{  
    const {name, image, status} = props;
    return (
        <div class="character">
            <h2>{name}</h2>
            <image class ="imagen-redonda" src={image} alt= {name} />
            <p><strong>Status: </strong> {status}</p>
        </div>
    )
}

export default Character;