// import { set } from 'mongoose';
import React, {useEffect} from 'react';
import "./Progressbar.css"


const ProgressBar = (progressCompleted) => {
	// console.log(progressCompleted.progressCompleted)




	
	const containerStyles = {
	  height: 20,
	  width: 'full',
	  backgroundColor: "#e0e0de",
	  borderRadius: 50,
	  margin: 50
	}
  
	const fillerStyles = {
	  height: '100%',
	  width: `${progressCompleted.progressCompleted}%`,
	  backgroundColor: "blue",
	  borderRadius: 'inherit',
	  textAlign: 'right'
	}
  
	const labelStyles = {
	  padding: 5,
	  color: 'white',
	  fontWeight: 'bold'
	}
  
	return (
	<div className=" container max-w-xl">
	  <div style={containerStyles}>
		<div style={fillerStyles}>
		  <span style={labelStyles}>{`${progressCompleted.progressCompleted}%`}</span>
		</div>
	  </div>
	  </div>
	);
  };
  
  export default ProgressBar;