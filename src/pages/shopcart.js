
import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from 'react-bootstrap/Row';	
import Col from 'react-bootstrap/Col';
import {useEffect, useState} from 'react';
import FontAwesomeIcon from 'font-awesome/css/font-awesome.min.css';



//const productsarray =  []

const products = [];
var subTotal = 0;
var subTotPrice = 0;
var products_arr = JSON.parse(localStorage.getItem('productsarray') );

if (products_arr) {
  subTotal = products_arr.reduce((totalprice, product) => totalprice + parseInt(product.total, 10), 0) ;
 
console.log(subTotal); // 36 calories
} else {
  subTotal = 0 ;
  subTotPrice = 0;
}

const Shopcart = () => {

 
    function addcart() {
        console.log('object');       
    }

    const removerow = (e,i) => {
        alert(i);
        var existing = JSON.parse(localStorage.getItem('productsarray'));	
        existing.splice(i,1);
        localStorage.setItem('productsarray', JSON.stringify(existing));
        window.location.reload();
    }

    function sendemail()
    {

    }
     

    return (          
    <div>    
    
    <div class="row" >  
    <div class="column">
    <div >   
     <h2>Order Cart</h2>  
     </div>     
    <table >
        <thead>
        <tr>
            <th class="ctd" width="70%">Item</th>
            <th class="ntd" width="20%">Quantity</th>
            <th class="ntd" width="20%">Price</th>
        </tr>
        </thead>
    </table>  
    <table>
        <tbody>
        {products_arr.map((data,i) =>	(
 
        <tr>
             <td class="remove" key={this}>                 
        <button type="button"  title="Delete Row" onClick={(e) => removerow(e,i)}>X</button>
    </td>
            <td class='ctd' width="70%">{data.title}</td>
            <td class='qntd' contenteditable="true" width="20%">{data.qty}</td>
            <td class='ntd' width="20%">{data.price}</td>
        </tr>
        ))}
        </tbody>        
    </table>
     <div>
     <div class="hline_checkout"></div>
        <br></br>
        <div class="parent">
        <div class='col1'>Subtotal&nbsp;</div><div class='col2'>Rs.{subTotal}.00</div>
        </div>
        <div class="parent">
        <div class='col1'>Discount</div><div class='col2'>Rs.20.00</div>
        </div>
        <div class="parent">
        <div class='col1'>Taxes&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div><div></div><div class='col2'>Rs.10.00</div>
        </div>
        <div class="parent">
        <div class='col1'>Total&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div><div class='col2'>Rs.{subTotal}.00</div>
        </div>
     <br></br>       
    </div>  
    <div class="hline_checkout"></div>
    <br></br>        


    <div>                   
    <a href="/about"><button class='btn_additem'>Add More Items</button></a>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <a href="/about"><button class='btn_additem'>Update Cart <i class="fa fa-shopping-cart" aria-hidden="true"></i></button></a>
    </div> 

    </div>
    <div class="column">
    <form>
    <h2>Your Info</h2>    
    <label for="fname">Name</label><br></br>
    <input class="form-control-lg" type="text" id="name" name="fname" required></input>
    <br></br>
    <label for="fname">Email</label><br></br>
    <input class="form-control-lg" type="text" id="email" name="lname" required></input>
    <br></br>
    <label for="fname">Phone</label><br></br>
    <input class="form-control-lg" type="text" id="phone" name="email" required></input>
    <br></br>
    <label for="fname">Address</label><br></br>
    <textarea id="address" name="address" rows="4" cols="50"></textarea>
    <br></br>
    </form>
    <br></br>
    <a href="/about"><button onClick="sendemail()" class="btn_green">Proceed to Checkout</button></a>
    
    </div>
    </div>
    </div>
     
    )}

  export default Shopcart;  