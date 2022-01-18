import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/about';
import Events from './pages/events';
import AnnualReport from './pages/annual';
import Teams from './pages/team';
import Blogs from './pages/blogs';
import Storeinfo from './pages/Storeinfo';
import shopcart from './pages/shopcart';
import cakes from './pages/cakes';
import category3 from './pages/category3';



function App() {

 return (
	<div>
	<div class="titlename">  
	<a href="/about" class="title1"><h1>baked.with.love</h1></a>
	</div> 
	   
  <Router>
 	<Navbar />
 	{ <Switch>
 		<Route path='/' exact component={Home} />
 		<Route path='/about' component={About} />
 		<Route path='/cakes' component={cakes} />
 		<Route path='/category3' component={category3} />
 		<Route path='/team' component={Teams} />
 		<Route path='/blogs' component={Blogs} />
 		<Route path='/storeinfo' component={Storeinfo} />
		<Route path="/checkout" component={shopcart} /> 
 	</Switch>}
 	</Router>
   </div>

   
 );
}

export default App;
