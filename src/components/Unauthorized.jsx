import React from 'react';
import { useNavigate } from "react-router-dom";

const Unauthorized = () => {

	const navigate = useNavigate();

	const goBack = () => navigate(-1);

	return(
			<React.Fragment>
			<h1>Unauthorized!!!</h1>
			<br />
			<p>You are not authorized to view this page</p>
			<div>
				<button onClick={goBack}>Return</button>
			</div>
			</React.Fragment>
		);
}

export default Unauthorized;