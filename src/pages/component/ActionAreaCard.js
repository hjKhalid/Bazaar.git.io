import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import NextLink from 'next/link';
import data from '../../utils/data';

import {  Grid, CardActions, Button } from '@mui/material';
// import data from '@/utils/data';

export default function ActionAreaCard(props) {

  return (
    
     <Grid container spacing={3}> 
      <Grid item md={4}>
        <Card>

          <NextLink href={`/product/${props.slug}`} passHref>
            <CardActionArea>
              <CardMedia
                component="img"
                image={props.image}
                title={props.name}
              ></CardMedia>
              <CardContent>
                <Typography>{props.name}</Typography>
              </CardContent>
            </CardActionArea>
          </NextLink>
          <CardActions>
            <Typography>${props.price}</Typography>
            <Button size="small" color="primary">
              Add to cart
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
    
  
  );
}