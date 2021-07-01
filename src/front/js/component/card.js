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
				setDetalles(person.result);
			})
			.catch(error => console.log("Error loading message from backend", error));
	}, []);

	return (
		<div className="card" style={{ width: "18rem" }}>
			<img
				className="card-img-top"
				src="https://image.flaticon.com/icons/png/512/21/21104.png"
				alt="Card image cap"
			/>
			<div className="card-body">
				<h5 className="card-title">{detalles ? detalles.properties.name : ""}</h5>
				<p className="card-text">{detalles ? detalles.description : ""}</p>

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
