import {useState} from 'react';

function MapIng() {

    const [ingredients,setIngredients] = useState(["meat",'eggs','fish']);
    return(
        <>
        <select>
            {ingredients.map((ingredient) => <option value={ingredient}>{ingredient}</option>)}
        </select>
        </>
    )
}

export default MapIng;