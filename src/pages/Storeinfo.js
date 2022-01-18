import React from 'react';
import { FaCentercode } from 'react-icons/fa';

const Storeinfo = () => {
return (
    <div>
    <div class="storinfo"
	> <img src='https://firebasestorage.googleapis.com/v0/b/sparkfluence.appspot.com/o/logo.jpg?alt=media&token=0fe500e5-4c40-4fa1-82cb-17a00abaec12'></img></div>
   	<div class="address">
	<h2>Baked with Love</h2>
    <div class="hline"></div>
    <h4>Address</h4>
    <p>170 S Market</p>
    <p>Valsarapakkam</p>
    <p>Chennai - 600098</p>
    <h4>Phone</h4>
    <p>800-000-0009</p>
    <div class="hline"></div>
    <h4>Store Hours</h4>
    <h5>Business Hours</h5>
    <p>Monday-Saturday  10.00am-6.00pm</p> 
    <a href="https://api.whatsapp.com/send?phone=3197010240285"><button class="btn_green">Contact us on WhatsApp</button></a>
    </div>   


     </div>
    );
};

export default Storeinfo;
