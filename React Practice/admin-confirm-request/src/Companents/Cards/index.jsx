import React, { useEffect, useReducer, useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import axios from "axios";

function reducer(state, action){
  const type = action.type
  switch (type) {
    case 'addNewCard':
      let current_user = JSON.parse(localStorage.getItem('currentUser'))
      current_user = {...current_user, cards: [...current_user.cards, {
        id: action.userID,
        image: action.cardImage,
        description: action.cardDescription,
        tittle: action.cardTittle,
        isConfirmed: false
      }]};
      axios.put(`https://6564178bceac41c0761d637a.mockapi.io/users/${action.userID}`, current_user)
      localStorage.setItem('currentUser', JSON.stringify(current_user))
    break;
    default:
      return state
  }
}

export default function CardsSection({CurrentUser}) {
  let [newCardInputs, setNewCardInputs] = useState({image: "https://www.birdlife.org/wp-content/uploads/2021/06/Hummingbird-Norbert-Hentges-Unsplash-edited-scaled.jpg", tittle: 'HummingBird', description: 'Hummingbirds have compact, strongly muscled bodies and rather long, bladelike wings that, unlike the wings of other birds, articulate (connect) to the body only from the shoulder joint. '})
  let [currentUser, dispatch] = useReducer(reducer, CurrentUser)
  return (
    <>
      <div style={{display: 'flex', justifyContent: 'center', paddingTop: '100px'}} className="container">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={newCardInputs.image}
            title= {newCardInputs.tittle}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {newCardInputs.tittle}
            </Typography>
            <input type="text" placeholder="Tittle" onChange={(e)=>{
              setNewCardInputs({...newCardInputs, tittle: e.target.value});
            }}/>
            <Typography variant="body2" color="text.secondary">
              {newCardInputs.description}
            </Typography>
            <input type="text" placeholder="Description" onChange={(e)=>{
              setNewCardInputs({...newCardInputs, description: e.target.value});
            }}/>
          </CardContent>
          <CardActions>
            <Button size="small" onClick={()=>{
              dispatch({type: 'addNewCard', 
              user: CurrentUser, 
              userID: CurrentUser.id,
              cardTittle: newCardInputs.tittle, 
              cardDescription: newCardInputs.description,
              cardImage: newCardInputs.image,
            })
              setNewCardInputs({image: "https://www.birdlife.org/wp-content/uploads/2021/06/Hummingbird-Norbert-Hentges-Unsplash-edited-scaled.jpg", tittle: 'HummingBird', description: 'Hummingbirds have compact, strongly muscled bodies and rather long, bladelike wings that, unlike the wings of other birds, articulate (connect) to the body only from the shoulder joint. '})
            }}>Send to approval</Button>
            <input type="text" placeholder="Image Link" onChange={(e)=>{
              setNewCardInputs({...newCardInputs, image: e.target.value});
            }}/>
          </CardActions>
        </Card>
      </div>
    </>
  );
}
