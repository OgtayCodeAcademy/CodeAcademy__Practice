import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import axios from "axios";

export default function AdminPanel({ CurrentUser, users }) {
  let filtred_users = users.filter((user) => user.cards.length > 0);
  let filtred_cards;
  let cards = [];
  let cards_array = [];
  let [cardsOwner, setCardsOwner] = useState({})
  cards.push(filtred_users.map((user) => user.cards.map((card) => card)));
  cards[0].map((card) => {
    cards_array = [...card];
  });
  return (
    <>
      <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px', marginTop: '100px'}} className="container">
        {cards_array.map((CARD, idx) => {
          return (CARD.isConfirmed == false &&  (
            <Card key={idx} sx={{ maxWidth: 345 }}>
              <CardMedia
                sx={{ height: 140 }}
                image={CARD.image}
                title="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {CARD.tittle}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {CARD.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button variant="contained" style={{color: 'white', backgroundColor: 'seagreen'}} size="small" onClick={async ()=>{
                  axios.get(`https://6564178bceac41c0761d637a.mockapi.io/users/${CARD.id}`)
                  .then((response)=>{
                    setCardsOwner(response.data)
                  })
                  filtred_cards = await cardsOwner.cards.filter((card)=> card.tittle !== CARD.tittle && card.description !== CARD.description)
                  setCardsOwner({...cardsOwner, cards: [...filtred_cards, {description: CARD.description, id: CARD.id, image: CARD.image, tittle: CARD.tittle, isConfirmed: true}]})
                  cardsOwner.cards = [...filtred_cards, {description: CARD.description, id: CARD.id, image: CARD.image, tittle: CARD.tittle, isConfirmed: true}]
                  axios.put(`https://6564178bceac41c0761d637a.mockapi.io/users/${CARD.id}`, cardsOwner)
                }}>Confirm</Button>
                <Button variant="contained" style={{color: 'white', backgroundColor: 'red'}} size="small" onClick={async ()=>{
                  axios.get(`https://6564178bceac41c0761d637a.mockapi.io/users/${CARD.id}`)
                  .then((response)=>{
                    setCardsOwner(response.data)
                  })
                  filtred_cards = await cardsOwner?.cards?.filter((card)=> card.tittle !== CARD.tittle && card.description !== CARD.description)
                  setCardsOwner({...cardsOwner, cards: [...filtred_cards]})
                  cardsOwner.cards = [...filtred_cards]
                  axios.put(`https://6564178bceac41c0761d637a.mockapi.io/users/${CARD.id}`, cardsOwner)
                }}>Decline</Button>
              </CardActions>
            </Card>
          ))         
        })}
      </div>
    </>
  );
}
