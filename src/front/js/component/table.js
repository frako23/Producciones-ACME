import React, { Component } from "react";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";

export const Table = (props) => (
  <Table striped bordered hover size="sm" variant="light" className="mt-5 mb-5">
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
        <td>Trompo de Inception</td>
        <td>23/1/2021 11:12 a.m.</td>
        <td>Se necesita con caracter de urgencia</td>
        <td>ENTREGADO</td>
      </tr>
    </tbody>
  </Table>
);
