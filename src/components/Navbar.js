import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../actions/userActions";

export default function Navbar() {
  const cartstate = useSelector((state) => state.cartReducer);
  const userstate = useSelector((state) => state.loginUserReducer);
  const { currentUser } = userstate;
  const dispatch = useDispatch();
  
  return (
    <div className="sticky-div">
      <nav className="navbar navbar-expand-lg shadow-lg p-3 mb-5 bg-white">
        <a className="navbar-brand" href="/">
          <img
            className="logo"
            src="https://cdn.discordapp.com/attachments/892605531850694756/1201561830871535776/Logo.png?ex=65ca44a8&is=65b7cfa8&hm=a3f451635efd5a102e06608002cc3e156a506ca6aae60d994e4df649c621980f&"
            alt="PIZZA HARBOR"
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            {currentUser ? (
              <React.Fragment>
                <li className="m-2">Welcome {currentUser.name} !</li>
                <li className="nav-item">
                  <a className="nav-link" href="/cart">
                    Cart {cartstate.cartItems.length}
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="">
                    Your Orders
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href=""
                    onClick={() => {
                      dispatch(logoutUser());
                    }}
                  >
                    <li>Logout</li>
                  </a>
                </li>
              </React.Fragment>
            ) : (
              <li className="nav-item">
                <a className="nav-link" href="/login">
                  Login
                </a>
              </li>
            )}
          </ul>
        </div>
      </nav>
    </div>
  );
}
