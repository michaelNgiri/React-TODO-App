import React, { Component } from 'react';
import './App.css';
import Projects from './components/projects';  
import AddProject from './components/addProject';


class App extends Component {

	constructor(){
		super();
		this.state = {
			projects: []
		}
	}

	componentWillMount(){
		this.setState({projects:[
			{
				title:'business website',
				category: 'webdesign'
			},
			{
				title:'Social App',
				category: 'mobile development'
			},
			{
				title:'Ecommerce shopping cart',
				category: 'web Development'
			}
			]})
	}

	render=()=>{
		return(
		<div className="App">
			<p>Welcome</p>
			<AddProject />
			<Projects projects={this.state.projects} />
		</div>
		);
	}
}




export default App;
