import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";

export const CharactersSingle = props => {
	const { store, actions } = useContext(Context);
	const [detalles, setDetalles] = useState(undefined);
	const params = useParams();

	useEffect(() => {
		fetch("https://www.swapi.tech/api/people/" + params.theid)
			.then(resp => resp.json())
			.then(person => {
				setDetalles(person.result);
			});
	}, []);

	return (
		<div className="container">
			<div className="row">
				<div className="col">
					<img src="https://avpn.asia/wp-content/uploads/sites/28/2019/10/800x600.png" />
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
								Birth Year
								<br />
								{detalles ? detalles.properties.birth_year : ""}
							</p>
						</div>
						<div className="col">
							<p className="col text-center">
								Gender
								<br />
								{detalles ? detalles.properties.gender : ""}
							</p>
						</div>
						<div className="col">
							<p className="col text-center">
								Skin Color
								<br />
								{detalles ? detalles.properties.skin_color : ""}
							</p>
						</div>
						<div className="col">
							<p className="col text-center">
								Eye Color
								<br />
								{detalles ? detalles.properties.eye_color : ""}
							</p>
						</div>
						<div className="col">
							<p className="col text-center">
								Height
								<br />
								{detalles ? detalles.properties.height : ""}
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

CharactersSingle.propTypes = {
	match: PropTypes.object
};
