import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "../../styles/home.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import logo from "../../img/logo.jpg";

export const Home = () => {
  const { store, actions } = useContext(Context);
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const token = sessionStorage.getItem("token");
  const handleClick = () => {
    actions.login(email, password);
  };

  useEffect(() => {
    if (token && token != "") navigate("/demo");
  }, [token]);

  return (
    <div className="text-center mt-5">
      <h1 className="titulo pt-5">Producciones ACME</h1>
      <img src={logo} className="pt-5 rounded-3" />
      {token && token != "" && token != undefined ? (
        <h1 className="titulo pt-5">Ya estas loggeado</h1>
      ) : (
        <>
          <div>
            <Button
              variant="danger"
              size="lg"
              className="mt-5"
              onClick={handleShow}
            >
              Login
            </Button>
          </div>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Login</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">Email</InputGroup.Text>
                <Form.Control
                  placeholder="Email"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </InputGroup>
              <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">Password</InputGroup.Text>
                <Form.Control
                  placeholder="Password"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </InputGroup>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="danger" onClick={handleClose}>
                Cerrar
              </Button>
              <Link to="/demo">
                <Button variant="success" onClick={handleClick}>
                  Ingresar
                </Button>
              </Link>
            </Modal.Footer>
          </Modal>
        </>
      )}
    </div>
  );
};
