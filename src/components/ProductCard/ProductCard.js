import React,{useState} from 'react';
import Grid from '@mui/material/Grid';
const ProductCard = (props) => {
   console.log(props);

    return(
        <div className='product-card'>
        <img 
        src={props.image}>
        </img>
        <div className='user-details'>
        <Grid item class='onet'>
        <p>Category:{props.category}</p>
        <p>Description:{props.description}</p>
        <p>Id:{props.id} </p>
        <p>Price:{props.price}</p>
        <p>Rating:{props.rating}</p>
        <p>Title:{props.title}</p>
        </Grid>
        </div>
        
      </div>
    )
   
}

export default ProductCard;