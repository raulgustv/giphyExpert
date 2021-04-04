import React, { useState } from 'react'

const AddCategory = ({ setCategories }) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = e => {
        setInputValue(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();

        if (inputValue.trim().length < 2) {
            console.log('Hubo un error....');
        } else {
            setCategories(cats => [inputValue, ...cats]) //tengo que usar cats porque no tengo acceso a const categorias del App principal
            setInputValue('');
        }


    }

    return (
        <>
            <form onSubmit={handleSubmit} >
                <input
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                />
            </form>

        </>
    )
}

export default AddCategory
