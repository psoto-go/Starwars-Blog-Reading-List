import React, { Component, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const Card = props => {
	const [detalles, setDetalles] = useState(undefined);

	useEffect(() => {
		fetch(props.url)
			.then(res => {
				return res.json();
			})
			.then(person => {
				setDetalles(person.result.properties);
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
				<h5 className="card-title">{detalles ? detalles.name : ""}</h5>
				<p className="card-text">{detalles ? `Hair Color: ${detalles.hair_color}` : ""}</p>
				<p className="card-text">{detalles ? `Terrain: ${detalles.terrain} ` : ""}</p>
				<p className="card-text">{detalles ? `Eye-Color: ${detalles.eye_color}` : ""}</p>
				<p className="card-text">{detalles ? `Population: ${detalles.population}` : ""}</p>
				<p className="card-text">{detalles ? `Gender: detalles.gender` : ""}</p>

				<a href="#" className="btn btn-primary">
					Go somewhere
				</a>
			</div>
		</div>
	);
};

Card.propTypes = {
	url: PropTypes.string,
	fav: PropTypes.bool
};
