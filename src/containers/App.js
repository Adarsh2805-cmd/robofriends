import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox'
import './App.css'
import ErrorBoundry from '../components/ErrorBoundry'
import Scroll from '../components/Scroll'


class App extends Component{
	constructor(){
		super();
		this.state = {
				robots : [],
				searchfield :'',
		} 
	}
componentDidMount()
{
	fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({robots : users}))
}



onSearchChnage = (event) => {
	this.setState({searchfield : event.target.value });
}
	render(){
		const { robots, searchfield} = this.state;
			const filteredRobots = robots.filter(robots =>{
			return robots.name.toLowerCase().includes(searchfield.toLowerCase());
		})
		return !robots.length ?
			 <h1>Loading</h1> :
			(
				<div className="tc">
					<h1 className='f1'> RoboFriend </h1>
					<SearchBox searchChange={this.onSearchChnage}/>
					<Scroll>
						<ErrorBoundry>
							<CardList robots={filteredRobots} />
						</ErrorBoundry>
					</Scroll>
				</div>
			);
		
	}
};

export default App;