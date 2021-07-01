import React, { Component, useContext, useState, useEffect } from "react";
import { Card } from "./card";
import { Context } from "../store/appContext";

export const ConjuntoPersons = props => {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.loadPersons();
	}, []);

	let personajes = store.personajes.map((item, index) => {
		return <Card key={index} url={item.url} fav={item.favorite} />;
	});

	return (
		<div>
			<h1>Characters</h1>
			{personajes.length > 0 ? personajes : "Loading characters"}
		</div>
	);
};
