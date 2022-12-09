import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState([ 'One Punch']);
    
    const OnAddCategory = (newCategory) =>{
      
      if ( categories.includes(newCategory) ) return;
      // categories.push( newCategory );
      setCategories([newCategory, ...categories]);
      //setCategories(cat => [...categories,['Superman']]);
    }

  return (
    <>
        <h1>GifExpertApp</h1>

        <AddCategory         
          onNewCategory = { (value) => OnAddCategory(value) }
        />        
        { 
          categories.map( (category) =>(
            <GifGrid 
                key={ category } 
                category={ category }
            />               
          )) 
        }
        
    </>
    
  )
}
