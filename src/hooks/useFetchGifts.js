import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifts = ( category ) => {
    
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    
    const getImages = async() => {
        const newImages = await getGifs( category );
        setImages(newImages);
        setIsLoading(false);
    }
    //Al dejar el array de categorias vacias, indicamos que sólo se ejecutará la primera vez
    useEffect( () => {
        getImages();
    }, []);
  
    return {
        images,
        isLoading
  }
}
