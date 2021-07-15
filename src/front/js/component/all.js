import React, { Component, useContext, useState, useEffect } from "react";
import { Card } from "./card";
import { Context } from "../store/appContext";

export const ConjuntoPersons = props => {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.loadPersons(), actions.loadPlanets();
	}, []);

	let personajes = store.personajes.map((item, index) => {
		return <Card key={index} url={item.url} fav={item.favorite} />;
	});
	let planets = store.planets.map((item, index) => {
		return <Card key={index} url={item.url} fav={item.favorite} />;
	});

	return (
		<div>
			<h1>Characters</h1>
			<div className="scrolling-wrapper row flex-row flex-nowrap mt-4 pb-4 pt-2 tarjetas">
				{personajes.length > 0 ? personajes : "Loading characters..."}
			</div>
			<h1>Planets</h1>
			<div className="scrolling-wrapper row flex-row flex-nowrap mt-4 pb-4 pt-2 tarjetas">
				{planets.length > 0 ? planets : "Loading planets..."}
			</div>
		</div>
	);
};
