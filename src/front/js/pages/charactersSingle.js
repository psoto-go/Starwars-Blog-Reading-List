import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";

export const CharactersSingle = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();

	useEffect(() => {
		fetch("https://www.swapi.tech/api/people/" + params.theid)
			.then(resp => resp.json())
			.then(data => {
				data;
			});
	}, []);

	return (
		<div className="container">
			<div className="row">
				<div className="col">
					<img src="https://lh3.googleusercontent.com/proxy/PimXiNasMIRTxYR0QGoAjORToBYs9JB8tW1a7F5lhfpLnVMQevptnbKQLhFSmYO0L_N0nTGG2nE5R7DvdW04EobSwx-vLj3Rz9rkUBy_KJ4bItuPWz0xeo_HyA" />
				</div>
				<div className="col">
					<h1>{params.name}</h1>
				</div>
			</div>
		</div>
	);
};

CharactersSingle.propTypes = {
	match: PropTypes.object
};
