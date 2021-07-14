import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { ConjuntoPersons } from "../component/conjunto.js";
import { ConjuntoPlanets } from "../component/conjunto.js";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div>
			<ConjuntoPersons />
		</div>
	);
};
