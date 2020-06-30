import React from 'react';

const Card = ({name, id, email})=>{
	// const {name, id, email} = props; Another way of doing this
	return(
		<div className="tc bg-light-green dib br3 pa3 ma3 grow bw2 shadow-5">
			<img alt='robot' src={`https://robohash.org/${id}?200x200`}/>
			<div>
				<h2>{name}</h2>
				<p>{email}</p>
			</div>
		</div>		
		);
}

export default Card;