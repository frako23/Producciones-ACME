import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { CharacterCard } from "../component/characterCard";
import { PlanetCard } from "../component/planetCard";
import { VehicleCard } from "../component/vehicleCard";
import { Link } from "react-router-dom";

export const Home = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    if (store.characters.length > 0) {
      actions.getCharacters();
    }
  }, [store.characters]);
  useEffect(() => {
    if (store.planetCharacters.length > 0) {
      actions.getPlanetCharacters();
    }
  }, [store.planetCharacters]);
  useEffect(() => {
    if (store.vehicleCharacters.length > 0) {
      actions.getVehicleCharacters();
    }
  }, [store.vehicleCharacters]);
  return (
    <>
      {!store.token ? (
        <div className="card">
          <img
            src="https://i.blogs.es/1da08b/1366_2000-9-/1366_2000.jpeg"
            className="card-img"
          />
          <div className="card-img-overlay align-items-center justify-content-center d-flex">
            <Link to="/signup">
              <button className="btn btn-primary btn-lg signup" type="button">
                <strong>Sign up!</strong>
              </button>
            </Link>
          </div>
        </div>
      ) : (
        <div className="container">
          <h2 className="text-danger mt-5">Characters</h2>
          <div className="carousel">
            <div className="characters">
              {store.characters.map((character, index) => {
                return <CharacterCard character={character} key={index} />;
              })}
            </div>
          </div>

          <h2 className="text-danger mt-5">Planets</h2>
          <div className="carousel">
            <div className="characters">
              {store.planetCharacters.map((planetCharacter, indexPlanet) => {
                return (
                  <PlanetCard
                    planetCharacter={planetCharacter}
                    key={indexPlanet}
                  />
                );
              })}
            </div>
          </div>

          <h2 className="text-danger mt-5">Vehicles</h2>
          <div className="carousel">
            <div className="characters">
              {store.vehicleCharacters.map((vehicleCharacter, indexVehicle) => {
                return (
                  <VehicleCard
                    vehicleCharacter={vehicleCharacter}
                    key={indexVehicle}
                  />
                );
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
