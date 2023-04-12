import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import NextLink from 'next/link';
import data from '../../utils/data';
import axios from 'axios'
import {  Grid, CardActions, Button } from '@mui/material';
// import data from '@/utils/data';

export default function ActionAreaCard(props) {
  const [productDetails,setProductDetails]=React.useState("");
  React.useEffect(()=>{
   const url ="http://localhost:3000/api/products";
   async function fetchData(){
    try {
      const data =await axios.get(url);
      setProductDetails(data.data);
    
    } catch (error) {
    console.log(error);      
    }
  }
  fetchData(); 
   
},[])
  console.log(productDetails)
  return (
    <Grid container spacing={3}>
    {data.products.map((product) => (
      <Grid item md={4} key={product.name}>
        <Card>

          <NextLink href={`/product/${product.slug}`} passHref>
            <CardActionArea>
              <CardMedia
                component="img"
                image={product.image}
                title={product.name}
              ></CardMedia>
              <CardContent>
                <Typography>{product.name}</Typography>
              </CardContent>
            </CardActionArea>
          </NextLink>
          <CardActions>
            <Typography>${product.price}</Typography>
            <Button size="small" color="primary">
              Add to cart
            </Button>
          </CardActions>
        </Card>
      </Grid>
    ))}
  </Grid>
  );
}