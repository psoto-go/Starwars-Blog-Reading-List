import React from "react";
import { Link } from "react-router-dom";

export const Card = props => {
	return (
		<div className="card" style={{ width: "18rem" }}>
			<img
				className="card-img-top"
				src="https://www.cnet.com/a/img/wr9LIsKHBBffQepa7AMHMMqMEl4=/1200x675/2019/10/09/c4f49e5f-459e-4c9f-bfc9-9e4e9d6256d5/nikon-z50-10.jpg"
				alt="Card image cap"
			/>
			<div className="card-body">
				<h5 className="card-title">Card title</h5>
				<p className="card-text">
					This is a wider card with supporting text below as a natural lead-in to additional content. This
					content is a little bit longer.
				</p>
			</div>
		</div>
	);
};
