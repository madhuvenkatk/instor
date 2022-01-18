
import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from 'react-bootstrap/Row';	
import Col from 'react-bootstrap/Col';
import FontAwesomeIcon from 'font-awesome/css/font-awesome.min.css';


 const products =  
	 [
	   {
		  id: 1,
		  title: "Mango Toppings Vanila Cake",
		  description: "CREAMY PUFF",
		  price: "20.00",
		  discounted: "15",
		  currency: "$",
		  image:"https://firebasestorage.googleapis.com/v0/b/sparkfluence.appspot.com/o/cake1.jpg?alt=media&token=4628aeea-1750-45ab-ae0c-799f1a1f8e58" 
		  },
	   {
		  id: 2,
		  title: "NAPOLIAN",
		  description: "NAPOLIAN",
		  price: "25.00",
		  currency: "$",
		  discounted: "15",
		  image: "https://firebasestorage.googleapis.com/v0/b/sparkfluence.appspot.com/o/cake2.jpg?alt=media&token=94bf5aa7-5ddf-47f5-83b8-83edf1afb1a5",
	   },
	   {
		  id: 3,
		  title: "FRENCH HORN",
		  description: "French Horn",
		  currency: "$",
		  price: "30.00",
		  image: "https://firebasestorage.googleapis.com/v0/b/sparkfluence.appspot.com/o/cake3.jpg?alt=media&token=dc1d5000-36bc-48ed-8a85-40b58e548735"},
	   {
		id: 4,
		title: "ECLAIR CAKE",
		description: "ECLAIR",
		currency: "$",
		price: "30.00",
		image: "https://firebasestorage.googleapis.com/v0/b/sparkfluence.appspot.com/o/cake4.jpg?alt=media&token=16aec235-a68b-40ba-88ec-c5c1f2d0149c",
	 }, 
	 {
		id: 5,
		title: "CHEESE CAKE",
		description: "CHEESE",
		currency: "$",
		price: "30.00",
		image: "https://firebasestorage.googleapis.com/v0/b/sparkfluence.appspot.com/o/cake5.jpg?alt=media&token=ff32db81-498c-443f-b8fc-fd790e26ebe4",
	 }	 

	];

 const  addcart = (e) =>  {
	const productsnew = [];
	localStorage.removeItem('Name');
	localStorage.setItem('Name', e.target.value);
	const keyv = e.target.key;
	const name1 = localStorage.getItem('Name');
    productsnew.push({
        id:keyv,
        title:name1,
        description:name1,
        qty:"60",
        price:"45.00",
        currency:"$",
        discounted:"15",
		total:"100",
        image: "https://firebasestorage.googleapis.com/v0/b/sparkfluence.appspot.com/o/cake2.jpg?alt=media&token=e527a68a-2626-4d93-8974-e9235ff7b428",
    });
localStorage.removeItem('Name');
if("productsarray" in localStorage){
	var existing = JSON.parse(localStorage.getItem('productsarray'));	
	existing.push({
        id:keyv,
        title:name1,
        description:name1,
        qty:"60",
        price:"45.00",
        currency:"$",
        discounted:"15",
		total:"150",
        image: "https://firebasestorage.googleapis.com/v0/b/sparkfluence.appspot.com/o/cake2.jpg?alt=media&token=e527a68a-2626-4d93-8974-e9235ff7b428",
    });
	localStorage.setItem('productsarray', JSON.stringify(existing));
 } else {
	alert('no');
	localStorage.setItem('productsarray', JSON.stringify(productsnew));
 }	


} 	

const renderCard = (card, index) => {

	return (
	<div>		
	<Row xs={1} md={2} class="g-4">
	<Col xs={1} md={2} class="g-4">	
	<Card border="primary" class="card"  key={index}>	
	<Card.Img class="image" alt="Card image cap" src={card.image} />
    <Card.Body>
    <Card.Title class="cardtitle">{card.title}</Card.Title>   
	<Card.Title class="cardprice">{card.currency}{card.price}</Card.Title>
	<br></br>
    </Card.Body>
	<a href="/checkout"><Button key = {index} value={card.title} onClick = {addcart} class="btn">Add to Cart <i class="fa fa-shopping-cart" aria-hidden="true"></i></Button></a>

  </Card>
  </Col>
  </Row>
</div>
	);
};


 const cakes= () => {
		return <div class="wrapper">{products.map(renderCard)}</div>
 };

 
export default cakes;