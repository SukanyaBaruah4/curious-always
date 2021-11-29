import axios from "axios";
import {useState,useEffect} from "react";
import ProductCard  from './components/ProductCard/ProductCard';
import Grid from '@mui/material/Grid';
import './Product.css';
const baseURL = "https://fakestoreapi.com/products";

const Product = () => {
  
 
   

 const [results,setResults]=useState([]);

 useEffect(() => {
  axios.get(baseURL).then(response => {
    setResults(response.data)
    console.log(response.data)
  })
}, [])
 
console.log(results,'ss');
    
  return(
    
    <div>

      {results.map((result,index) => {
       return(
        <ProductCard key={result.id}
          category ={result.category}
          description ={result.description}
          id = {result.id}
          image={result.image}
          price={result.price}
          rating={result.rating.rate}
          title={result.title}/>
       )
        }
      )}
     
        
    </div>
 
  )

  }
    
  
   
  
export default Product;
  
  