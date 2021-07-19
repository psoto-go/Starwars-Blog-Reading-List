import React, { Component, useContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Card_planet = props => {
	const [detalles, setDetalles] = useState();
	const { store, actions } = useContext(Context);

	useEffect(() => {
		fetch(props.url)
			.then(res => {
				return res.json();
			})
			.then(person => {
				setDetalles(person.result);
			})
			.catch(error => console.log("Error loading message from backend", error));
	}, []);

	return (
		<div className="m-2 col" style={{ width: "50rem" }}>
			<img
				className="card-img-top"
				src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Star_wars2.svg/1200px-Star_wars2.svg.png"
				alt="Card image cap"
			/>
			<div className="card-body" style={{ heigth: "200px" }}>
				<h5 className="card-title">{detalles ? detalles.properties.name : ""}</h5>
				<p className="card-text">
					{detalles
						? detalles.properties.hair_color
							? `Hair Color: ${detalles.properties.hair_color}`
							: ""
						: ""}
				</p>
				<p className="card-text">
					{detalles ? (detalles.properties.terrain ? `Terrain: ${detalles.properties.terrain} ` : "") : ""}
				</p>
				<p className="card-text">
					{detalles
						? detalles.properties.eye_color
							? `Eye-Color: ${detalles.properties.eye_color}`
							: ""
						: ""}
				</p>
				<p className="card-text">
					{detalles
						? detalles.properties.population
							? `Population: ${detalles.properties.population}`
							: ""
						: ""}
				</p>
				<p className="card-text">
					{detalles ? (detalles.properties.gender ? `Gender: ${detalles.properties.gender}` : "") : ""}
				</p>

				<Link to={"/planets/" + props.itemId}>
					<button type="Button" className="btn btn-primary">
						Learn More!
					</button>
				</Link>
				<div
					onClick={() => {
						actions.addfavs2(detalles.uid);
					}}
					className="btn btn-primary">
					<i className="far fa-heart" />
				</div>
			</div>
		</div>
	);
};

Card_planet.propTypes = {
	url: PropTypes.string,
	fav: PropTypes.bool,
	itemId: PropTypes.string
};
