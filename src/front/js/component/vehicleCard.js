import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const VehicleCard = (props) => {
  const { store, actions } = useContext(Context);

  return (
    <div className="d-flex container m-5">
      <div className="card" style={{ width: "18rem" }}>
        <img
          src={`https://starwars-visualguide.com/assets/img/vehicles/${props.vehicleCharacter.id}.jpg`}
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{props.vehicleCharacter.model}</h5>
          <p className="card-text">
            <strong>Manufacturer:</strong> {props.vehicleCharacter.manufacturer}
            <br></br>
            <strong>Model:</strong> {props.vehicleCharacter.model}
            <br></br>
            <strong>Crew:</strong> {props.vehicleCharacter.crew}
            <br></br>
            <strong>Passengers:</strong> {props.vehicleCharacter.passengers}
          </p>
          <Link
            to={`/singleV/${props.vehicleCharacter.id}`}
            className="btn btn-outline-primary"
          >
            Learn more!
          </Link>
          <a
            href="#"
            className="btn btn-outline-warning amarillo"
            onClick={(event) => actions.toggleFavorite(props.vehicleCharacter)}
          >
            <i
              className={
                actions.isFavorite(props.vehicleCharacter.name) == undefined
                  ? "far fa-heart"
                  : "fas fa-heart"
              }
            ></i>
          </a>
        </div>
      </div>
    </div>
  );
};
