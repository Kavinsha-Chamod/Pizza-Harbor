import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserOrders } from "../actions/orderActions";
import Loading from "../components/Loading";
import Error from "../components/Error";

export default function OrdersScreen() {
  const dispatch = useDispatch()
  const orderstate = useSelector(state => state.getUserOrdersReducer);
  const { orders, error, loading } = orderstate;

  console.log(orderstate);
  console.log(orders);

  useEffect(() => {
    dispatch(getUserOrders());
  }, [dispatch]);
 
  return (
    <div>
      <h2 style={{ fontSize: "35px" }}>MY ORDERS</h2>
      <div className="row">
        {loading && <Loading />}
        {error && <Error error="Something went wrong!" />}

        {orders &&
          orders.map((order) => (
            <div
              className="col-md-8 m-2 p-1"
              style={{ backgroundColor: "#FCE7CC" }}
            >
              <div className="flex-container">
                <div className="item">
                  <h2 style={{ fontSize: "25px" }}>Items</h2>
                  <hr />
                  {order.orderItems.map((item) => (
                    <div key={item._id}>
                      <p>
                        {item.name} [{item.varient}]<br/>
                        Qty - {item.quantity}
                        <br />
                        Total = LKR.{item.price}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="address">
                  <h2 style={{ fontSize: "25px" }}>Address</h2>
                  <hr />
                  <p>
                    Street - {order.shippingAddress.street}
                    <br />
                    City - {order.shippingAddress.city}
                    <br />
                    Country - {order.shippingAddress.country}
                    <br />
                    Postal Code - {order.shippingAddress.postalcode}
                  </p>
                </div>

                <div className="order-details">
                  <h2 style={{ fontSize: "25px" }}>Order Details</h2>
                  <hr />
                  <p>
                    Order Id - {order._id} <br />
                    Transaction Id - {order.paymentId} <br />
                    Order Amount - LKR.{order.orderAmount} <br />
                    Date - {order.createdAt.substring(0, 10)}
                  </p>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
