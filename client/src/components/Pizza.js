import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../actions/cartAction";

export default function Pizza({ pizza }) {
  const [quantity, setquantity] = useState(1);
  const [varient, setvarient] = useState("Regular");
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const dispatch = useDispatch();

  function addCart() {
    dispatch(addToCart(pizza, quantity, varient));
  } 

  return (
    <div
      style={{ margin: "60px" }}
      className="shadow-lg p-3 m-1 bg-white rounded"
    >
      <div onClick={handleShow}>
        <h1>{pizza.name}</h1>
        <img src={pizza.image} className="img-fluid" />
      </div>

      <div className="flex-container">
        <div className="w-100 m-1">
          <p className="pt">Select a Varient</p>
          <select
            className="form-control"
            value={varient}
            onChange={(e) => {
              setvarient(e.target.value);
            }}
          >
            {pizza.varients.map((varient) => {
              return <option value={varient}>{varient}</option>;
            })}
          </select>
        </div>
        <div className="w-100 m-1">
          <p className="pt">Select Quantity</p>
          <select
            className="form-control"
            value={quantity}
            onChange={(e) => {
              setquantity(e.target.value);
            }}
          >
            {[...Array(10).keys()].map((x, i) => {
              return <option value={i + 1}>{i + 1}</option>;
            })}
          </select>
        </div>
      </div>
      <div className="flex-container">
        <div className="w-100 m-1">
          <h5 className="mt-2">
            Price : LKR.{pizza.prices[0][varient] * quantity}
          </h5>
        </div>
        <div className="m-1 w-100">
          <button className="btn" onClick={addCart}>
            ADD TO CART
          </button>
        </div>
      </div>

      <Modal show={show} centered>
        <Modal.Header>
          <Modal.Title>{pizza.name}<br/><p className="mp">Pizza Type - {pizza.category}</p></Modal.Title>
          
        </Modal.Header>
        <Modal.Body className="modal-body">
          <img src={pizza.image} className="modal-image"></img>
          <p>{pizza.description}</p>
          
        </Modal.Body>
        <Modal.Footer>
          <button className="btn" onClick={handleClose}>
            Close
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
