import React, { useState, useEffect } from 'react';
import Product from '../product/Product';
import './ProductList.css';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/productos') // El proxy en React se encargará de redirigir la solicitud a http://localhost:3000
      .then((response) => response.json())
      .then((data) => {
        console.log('Data: ', data);
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching data: ', err);
        setError(err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading products: {error.message}</div>;
  }

  return (
    <div className="container-products">
      {products.map((product) => (
        <Product key={product.id} product={product} />

      ))}
    </div>
  );
};

export default ProductList;
