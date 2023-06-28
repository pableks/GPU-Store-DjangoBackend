import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import React from 'react';

function Product({ product }) {
  return (
    <div>
      <Card className="mb-4 rounded product-card">
        <Card.Body>
          <Link to={`/product/${product.id}`}>
            <Card.Img variant="top" src={product.image} className="product-image" fluid />
          </Link>
          <Link to={`/product/${product.id}`} className="product-link">
            <Card.Title as="div" className="product-title">
              <strong>{product.name}</strong>
            </Card.Title>
          </Link>
          <Card.Text as="h3">${product.price}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Product;
