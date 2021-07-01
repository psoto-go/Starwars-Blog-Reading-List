import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Card } from "../component/card.js";
import { ConjuntoPersons } from "../component/conjunto.js";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return <ConjuntoPersons />;
};
