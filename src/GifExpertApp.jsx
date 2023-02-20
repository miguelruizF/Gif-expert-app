import { useState } from "react";
import { AddCategory, GifGrid } from "./components";
// import { GifGrid } from "./components";


export const GifExpertApp = () => {
const [categories, setCategories] = useState(
    ["One Punch Man"]
);

const onAddCategory = (newCategory) => {
    if(categories.includes(newCategory)) return;
    // setCategories(["Pokemón", ...categories]);
    console.log(newCategory)
    setCategories([newCategory, ...categories]);
};

    return (
        <>
        {/* Titulo */}
            <h1>GifExpertApp</h1>

        {/* Input */}
        <AddCategory 
            // setCategories = {setCategories} 
            onNewCategory = {event => onAddCategory(event)}
        />

        {/* Listado de Gif */}
        {/* <button onClick={addCategory}>Agregar</button> */}
        
        {categories.map(category => {
                return (
                    <GifGrid 
                        key={category}
                        category = {category}
                    />
                );
            })}
        </>
    );
}