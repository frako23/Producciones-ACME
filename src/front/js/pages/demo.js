import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "../component/navbar";
import { Context } from "../store/appContext";
import Table from "react-bootstrap/Table";

export const Demo = () => {
  const { store, actions } = useContext(Context);

  return (
    <>
      <Navbar />
      {store.token && store.token != "" && store.token != undefined ? (
        <div className="text-center mt-5">
          <h1 className="titulo pt-5">Lista de pedidos</h1>
          <div className="tabla pb-5">
            <Table
              striped
              bordered
              hover
              size="sm"
              variant="light"
              className="mt-5 mb-5"
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
                {store.listaPedidos.map((listaPedido, index) => {
                  return (
                    <tr key={listaPedido.idPedido}>
                      <Link to={`/single/${listaPedido.idPedido}`}>
                        <td>{listaPedido.idPedido}</td>
                      </Link>
                      <td>{listaPedido.nombre}</td>
                      <td>{listaPedido.fechaYhora}</td>
                      <td>{listaPedido.comentario}</td>
                      <td>{listaPedido.estado}</td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </div>
        </div>
      ) : (
        <h1 className="acceso p-5 rounded-pill">
          No tienes permiso para acceder a esta página
        </h1>
      )}
    </>
  );
};
