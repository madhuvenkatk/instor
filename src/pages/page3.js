
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
		  title: "CREAM PUFF",
		  description: "CREAMY PUFF",
		  price: "20.00",
		  discounted: "15",
		  currency: "$",
		  image:"https://firebasestorage.googleapis.com/v0/b/sparkfluence.appspot.com/o/tart1.jpg?alt=media&token=82bd5ac7-4f76-429d-948e-6ba7d579658b" 
		  },
	   {
		  id: 2,
		  title: "NAPOLIAN",
		  description: "NAPOLIAN",
		  price: "25.00",
		  currency: "$",
		  discounted: "15",
		  image: "https://firebasestorage.googleapis.com/v0/b/sparkfluence.appspot.com/o/tart2.jpg?alt=media&token=43321f21-4a68-4015-85fb-f29793efa571",
	   },
	   {
		  id: 3,
		  title: "FRENCH HORN",
		  description: "French Horn",
		  currency: "$",
		  price: "30.00",
		  image: "https://firebasestorage.googleapis.com/v0/b/sparkfluence.appspot.com/o/tart3.jpg?alt=media&token=25071d71-98d0-48f8-9f5d-2975521b2192"},
	   {
		id: 4,
		title: "ECLAIR CAKE",
		description: "ECLAIR",
		currency: "$",
		price: "30.00",
		image: "https://firebasestorage.googleapis.com/v0/b/sparkfluence.appspot.com/o/tart4.jpg?alt=media&token=efac66db-aa01-42fa-8088-510a7116ab0f",
	 }, 
	 {
		id: 5,
		title: "CHEESE CAKE",
		description: "CHEESE",
		currency: "$",
		price: "30.00",
		image: "https://firebasestorage.googleapis.com/v0/b/sparkfluence.appspot.com/o/tart5.jpg?alt=media&token=25b46a00-d753-4e70-a350-f4cd4fa9ea87",
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
	<a href="/checkout"><Button key = {index} value={card.description} onClick = {addcart} class="btn">Add to Cart <i class="fa fa-shopping-cart" aria-hidden="true"></i></Button></a>
  </Card.Body>
  </Card>
  </Col>
  </Row>
</div>
	);
};


 const category3= () => {
		return <div class="wrapper">{products.map(renderCard)}</div>
 };

 
export default category3;