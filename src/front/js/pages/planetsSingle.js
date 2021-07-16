import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";

export const PlanetsSingle = props => {
	const { store, actions } = useContext(Context);
	const [detalles, setDetalles] = useState(undefined);
	const params = useParams();

	useEffect(() => {
		fetch("https://www.swapi.tech/api/planets/" + params.theid)
			.then(resp => resp.json())
			.then(person => {
				setDetalles(person.result);
			});
	}, []);

	return (
		<div className="container">
			<div className="row">
				<div className="col">
					<img src="https://lh3.googleusercontent.com/proxy/PimXiNasMIRTxYR0QGoAjORToBYs9JB8tW1a7F5lhfpLnVMQevptnbKQLhFSmYO0L_N0nTGG2nE5R7DvdW04EobSwx-vLj3Rz9rkUBy_KJ4bItuPWz0xeo_HyA" />
				</div>
				<div className="col text-center">
					<h1>{detalles ? detalles.properties.name : ""}</h1>
					<p>{detalles ? detalles.description : ""}</p>
				</div>
				<hr />
				<div className="container">
					<div className="row">
						<div className="col">
							<p className="col text-center">
								Name
								<br />
								{detalles ? detalles.properties.name : ""}
							</p>
						</div>
						<div className="col">
							<p className="col text-center">
								Climate
								<br />
								{detalles ? detalles.properties.climate : ""}
							</p>
						</div>
						<div className="col">
							<p className="col text-center">
								Population
								<br />
								{detalles ? detalles.properties.population : ""}
							</p>
						</div>
						<div className="col">
							<p className="col text-center">
								Orbital Period
								<br />
								{detalles ? detalles.properties.orbital_period : ""}
							</p>
						</div>
						<div className="col">
							<p className="col text-center">
								Rotation Period
								<br />
								{detalles ? detalles.properties.rotation_period : ""}
							</p>
						</div>
						<div className="col">
							<p className="col text-center">
								Diameter
								<br />
								{detalles ? detalles.properties.diameter : ""}
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

PlanetsSingle.propTypes = {
	match: PropTypes.object
};
