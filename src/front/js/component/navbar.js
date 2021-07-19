import React, { Component, useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { DropdownButton, Dropdown } from "react-bootstrap";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
			<div className="container">
				<img
					src="https://logodownload.org/wp-content/uploads/2015/12/star-wars-logo-1-1.png"
					style={{ width: "100px" }}
				/>
				<DropdownButton id="dropdown-basic-button" title={"Favoritos " + store.favorites.length}>
					{store.personajes.map((item, index) => {
						if (item.favorite == true) {
							console.log(store.personajes);
							return <Dropdown.Item key={index}>{item.name}</Dropdown.Item>;
						}
					})}
					{store.planets.map((item, index) => {
						if (item.favorite == true) {
							console.log(store.planets);
							return <Dropdown.Item key={index}>{item.name}</Dropdown.Item>;
						}
					})}
				</DropdownButton>
			</div>
		</nav>

		// <nav className="navbar navbar-light bg-light mb-3">
		// 	<Link to="/">
		// 		<span className="navbar-brand mb-0 h1">React Boilerplate</span>
		// 	</Link>
		// 	<div className="ml-auto">
		// 		<Link to="/demo">
		// 			<button className="btn btn-primary">Check the Context in action</button>
		// 		</Link>
		// 	</div>
		// </nav>
	);
};
