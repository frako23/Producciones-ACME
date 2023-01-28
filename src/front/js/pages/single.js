import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import Table from "react-bootstrap/Table";
import { Navbar } from "../component/navbar";
import imagenes from "../../img/imagenes";
import trompo from "../../img/0001.jpg";

export const Single = (props) => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  console.log(params);

  let pedido = store.listaPedidos.find((ped) => {
    return ped.idPedido === params.theid;
  });

  console.log(pedido);
  console.log(pedido.img);
  console.log(params.img);
  console.log(`../../img/${pedido.idPedido}.jpg`);

  return (
    <>
      <Navbar />{" "}
      {store.token && store.token != "" && store.token != undefined ? (
        <div
          className="jumbotron container card mb-3 jumbotron"
          key={pedido.idPedido}
        >
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src={pedido.img}
                className="img-fluid rounded-start mt-4 mb-2"
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h1 className="card-title display-4">{pedido.nombre} </h1>

                <Table
                  striped
                  bordered
                  hover
                  size="sm"
                  variant="light"
                  className=""
                >
                  <thead>
                    <tr>
                      <th>ID DE PEDIDO</th>
                      <th>NOMBRE DEL PRODUCTO</th>
                      <th>FECHA Y HORA DEL PEDIDO</th>
                      <th>COMENTARIO</th>
                      <th>ESTADO</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{pedido.idPedido}</td>
                      <td>{pedido.nombre}</td>
                      <td>{pedido.fechaYhora}</td>
                      <td>{pedido.comentario}</td>
                      <td>{pedido.estado}</td>
                    </tr>
                  </tbody>
                  <Link to="/demo">
                    <span
                      className="btn btn-primary btn-lg mt-2"
                      href="#"
                      role="button"
                    >
                      Regresar
                    </span>
                  </Link>
                </Table>
              </div>
            </div>
          </div>
          {/* <hr className="my-4" /> */}
        </div>
      ) : (
        <h1 className="acceso p-5 rounded-pill">
          No tienes permiso para acceder a esta página
        </h1>
      )}
    </>
  );
};

Single.propTypes = {
  match: PropTypes.object,
};
