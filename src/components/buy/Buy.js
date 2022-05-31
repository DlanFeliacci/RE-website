import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Buy = () => {
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    axios.get("http://localhost:5000/biens/buy").then((rsp) => {
      setResponse(rsp.data)
      setLoading(false)
    });
  }, []);
  
  return <div>
        <div>
            <h2>En vente</h2>
        </div>
        <div>
          {loading? "is loading..." : response.map((iter) =>  {
          return (
            <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="140"
              image={iter.image}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over 6,000
                species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
          )

      })}
        </div>
      
  </div>;
};

export default Buy;