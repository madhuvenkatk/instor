
import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from 'react-bootstrap/Row';	
import Col from 'react-bootstrap/Col';



 

const products =  
	 [
	   {
		  id: 1,
		  title: "Canvas",
		  description: "High quality canvas shoes.",
		  price: "20.00",
		  discounted: "15",
		  currency: "$",
		  image: "https://firebasestorage.googleapis.com/v0/b/sparkfluence.appspot.com/o/cake1.jpg?alt=media&token=1fc07507-6078-4f3c-960c-38796fa7622b",
	   },
	   {
		  id: 2,
		  title: "Sport shoes",
		  description: "Sporty shoes, durable at affordable ranges.",
		  price: "25.00",
		  currency: "$",
		  discounted: "15",
		  image: "https://firebasestorage.googleapis.com/v0/b/sparkfluence.appspot.com/o/cake2.jpg?alt=media&token=e527a68a-2626-4d93-8974-e9235ff7b428",
	   },
	   {
		  id: 3,
		  title: "Heels",
		  description: "Fashionable trendy heels.",
		  currency: "$",
		  price: "30.00",
		  image: "https://firebasestorage.googleapis.com/v0/b/sparkfluence.appspot.com/o/cake3.jpg?alt=media&token=9e6812ce-edfd-4f39-a5ca-7af8986dbca9",
	   },
	   {
		id: 4,
		title: "Choco Cake",
		description: "Choco Cake",
		currency: "$",
		price: "30.00",
		image: "https://firebasestorage.googleapis.com/v0/b/sparkfluence.appspot.com/o/cake4.jpg?alt=media&token=755a440f-64e4-4f60-a2c0-2d840a2035ec",
	 }	 

	];

 const  addcart = (e) =>  {
	localStorage.removeItem('Name');
	localStorage.setItem('Name', e.target.value);
}	

const renderCard = (card, index) => {

	return (
	<div >		
	<Row xs={1} md={2} class="g-4">
	<Col xs={1} md={2} class="g-4">	
	<Card border="primary" class="card" key={index}>	
	<Card.Img class="image" src={card.image} />
    <Card.Body>
    <Card.Title class="cardtitle">{card.title}</Card.Title>
    <Card.Text class="cardtxt">
     {card.description}
    </Card.Text>
	<Card.Title class="cardprice">{card.currency}{card.price}</Card.Title>
	<a href="/checkout"><Button key = {index} value={index} onClick = {addcart} class="btn">Add to Cart</Button></a>
  </Card.Body>
  </Card>
  </Col>
  </Row>
</div>
	);
};


 const About= () => {
		return <div class="wrapper">{products.map(renderCard)}</div>
 };

 
export default About;