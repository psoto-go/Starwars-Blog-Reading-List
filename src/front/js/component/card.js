import React from "react";
import { Link } from "react-router-dom";

export const Card = () => {
	return (
		<div className="container">
			<div className="row">
				<div className="col" />
				<div className="col-12">
					<div className="card-deck">
						<div className="card">
							<img className="card-img-top" src="..." alt="Card image cap" />
							<div className="card-body">
								<h5 className="card-title">Card title</h5>
								<p className="card-text">
									This is a wider card with supporting text below as a natural lead-in to additional
									content. This content is a little bit longer.
								</p>
							</div>
							<div className="card-footer">
								<small className="text-muted">Last updated 3 mins ago</small>
							</div>
						</div>
						<div className="card">
							<img className="card-img-top" src="..." alt="Card image cap" />
							<div className="card-body">
								<h5 className="card-title">Card title</h5>
								<p className="card-text">
									This card has supporting text below as a natural lead-in to additional content.
								</p>
							</div>
							<div className="card-footer">
								<small className="text-muted">Last updated 3 mins ago</small>
							</div>
						</div>
						<div className="card">
							<img className="card-img-top" src="..." alt="Card image cap" />
							<div className="card-body">
								<h5 className="card-title">Card title</h5>
								<p className="card-text">
									This card has supporting text below as a natural lead-in to additional content.
								</p>
							</div>
							<div className="card-footer">
								<small className="text-muted">Last updated 3 mins ago</small>
							</div>
						</div>
					</div>
				</div>
				<div className="col" />
			</div>
		</div>
	);
};
