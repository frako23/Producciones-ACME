import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";


export const SingleV = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	console.log(params);

	let personaje = store.vehicleCharacteristics.find((characteristic) => {
		return characteristic.uid == params.id
	})
	console.log(personaje);
	return (
		<>
			<div className="jumbotron container card mb-3 mt-5" key={personaje._id} >
				<div className="row g-0">
					<div className="col-md-4">
						<img src={`https://starwars-visualguide.com/assets/img/vehicles/${params.id}.jpg`} className="img-fluid rounded-start mt-4" />
					</div>
					<div className="col-md-8">
						<div className="card-body">
							<h1 className="card-title display-4">{personaje.model} </h1>
							<p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta perspiciatis sit possimus repudiandae totam, in blanditiis accusantium quidem ratione. Reiciendis, itaque. Necessitatibus veniam a fuga doloremque. Architecto hic vero aliquid.</p>
							<table className="table">
								<tr >
									<td><strong>Vehicle Class</strong></td>
									<td><strong>Manufacturer</strong></td>
									<td><strong>Lenght</strong></td>
									<td><strong>Crew</strong></td>
									<td><strong>Passengers</strong></td>
									<td><strong>Cargo Capacity</strong></td>
									<td><strong>Consumables</strong></td>
								</tr>
								<tr>
									<td>{personaje.vehicle_class}</td>
									<td>{personaje.manufacturer}</td>
									<td>{personaje.lenght}</td>
									<td>{personaje.crew}</td>
									<td>{personaje.passengers}</td>
									<td>{personaje.cargo_capacity}</td>
									<td>{personaje.consumables}</td>
								</tr>
							</table>
						</div>
					</div>
				</div>
				<hr className="my-4" />
				<Link to="/">
					<span className="btn btn-primary btn-lg mb-4" href="#" role="button">
						Back home
					</span>
				</Link>
			</div>
		</>
	);
};

// Single.propTypes = {
// 	match: PropTypes.object
// };
