import { useState } from "react";


// export const AddCategory = ({setCategories}) => {
export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState("");
    

    const onInputChange = ({target}) => {
        setInputValue(target.value);
        // console.log(e.target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if(inputValue.trim().length <= 1) return;
        // setCategories(categories => [inputValue, ...categories]);
        onNewCategory(inputValue.trim())
        setInputValue("");
    }
    return (

        <form onSubmit={e => onSubmit(e)}>
            <input type="text"
                placeholder="Buscar gifs"
                value={inputValue}
                // onChange={(e) => onInputChange(e)} 
                onChange={onInputChange} 
            />
        </form>
        
    );
}

