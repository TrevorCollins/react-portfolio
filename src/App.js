import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import './App.scss';
import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';

class App extends Component {
	render() {
		return (
			<Router>
				<Route exact path="/" component={Home} />
				<Route exact path="/about" component={About} />
				<Route exact path="/work" component={Portfolio} />
				<Route exact path="/contact" component={Contact} />
				<Route exact path="/nav" component={Nav} />
				<Footer />
			</Router>
  		);
	}
}

export default App;
