import React, { useState } from 'react'
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

const GifExpertApp = () => {

    // const categories = ['One Punch Man', 'One Piece', 'Bleach', 'Attack on Titan']

    const [categories, setCategories] = useState(['One Punch Man']);

    // const handleAdd = () =>{
    //     setCategories([...categories, 'Ranma']);
    // }

 
    
    return (

        <div>
            <h2>Gift Expert App</h2> 

            <AddCategory setCategories={setCategories} />
            <hr/>
      

            <ol>
                {
                    categories.map((category) =>(
                        <GifGrid 
                        key={category}
                        category={category}                        
                        />
                    ))
                }
            </ol>
        </div>
    )
}

export default GifExpertApp
