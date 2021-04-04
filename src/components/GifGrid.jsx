import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
// import { getGifs } from '../helpers/getGifs';
import GifGridItem from './GifGridItem';

const GifGrid = ({ category }) => {

    // const state = useFetchGifs();

    const {data:images, loading} = useFetchGifs(category);

    // const [images, setImages] = useState([]);

    // useEffect(() => {
    //     getGifs(category)
    //         .then(setImages)
    // }, [category]);

    // funcion para obtener imagenesw
  

    // getGifs();


    return (

        <>
            <h3 className="animate__animated animate__pulse">
                {category}
            </h3>
            
            {loading && <p className="animate__animated animate__flash">Cargando....</p>}

            

            <div className="card-grid" >


                {
                    images.map((img) => (
                        <GifGridItem
                            key={img.id}
                            {...img}
                        />

                    ))
                }


            </div>

        </>
    )
}

export default GifGrid
