import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const Editpizza = () => {
  const { pizzaId } = useParams();
  const navigate = useNavigate();

  return (
    <div>
      <h1>Edit Pizza</h1>
      <h1>Pizza Id = {pizzaId}</h1>
    </div>
  );
};

export default Editpizza;
