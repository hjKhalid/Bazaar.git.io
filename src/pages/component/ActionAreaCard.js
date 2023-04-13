import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import NextLink from 'next/link';
import { Grid, CardActions, Button } from '@mui/material';


export default function ActionAreaCard() {
  const [productDetails, setProductDetails] = React.useState("");
  React.useEffect(() => {
    const url = "http://localhost:3000/api/products";
    async function fetchData() {
      try {
        const data = await axios.get(url);
        setProductDetails(data.data);

      } catch (error) {
        console.log(error);
      }
    }
    fetchData();

  }, [])
  console.log(productDetails);

  return (
    <>
      <h1>Products</h1>
      <Grid container spacing={3}>
        {productDetails ? productDetails.map((product) => (
          <Grid item md={4} key={product.name ? product.name : "t-shirt"}>
            <Card>
              <NextLink href={`/product/${product.slug}`} passHref>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    image={product.image ? product.image : "/images/shirt1.jpg"}
                    title={product.name ? product.name : "t-shirt"}
                  ></CardMedia>
                  <CardContent>
                    <Typography>{product.name ? product.name : "t-shirt"}</Typography>
                  </CardContent>
                </CardActionArea>
              </NextLink>
              <CardActions>
                <Typography>${product.price ? product.price : "20"}</Typography>
                <Button size="small" color="primary">
                  Add to cart
                </Button>
              </CardActions>
            </Card>
          </Grid>
        )) : ""}
      </Grid>


    </>


  );
}