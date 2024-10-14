import React from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap';

const ProductGrid = ({ addToCart }) => {
  const products = [
    {
      image: 'https://cdn.dmart.in/images/products/LHALWA200gmLal16xx040521_5_P.jpg',
      name: 'Lal Bombay Halwa : 200 gms',
      price: '29.99',
      discount: '10',
    },
    {
      image: 'https://cdn.dmart.in/images/products/OCT120000656xx17OCT23_5_P.jpg',
      name: 'Royal Rasgulla : 1 kg',
      price: '39.99',
      discount: '15',
    },
    {
      image: 'https://cdn.dmart.in/images/products/DEC120001970xx06DEC23_5_P.jpg',
      name: 'Royal Peanut Chikki : 96 gms',
      price: '19.99',
      discount: '5',
    },
    {
      image: 'https://cdn.dmart.in/images/products/JUN130000491xx9JUN22_5_P.jpg',
      name: 'Tea - Lemon Ginger : 25 Tea-Bags',
      price: '49.99',
      discount: '20',
    },
    {
      image: 'https://cdn.dmart.in/images/products/MAY120003408xx15MAY24_5_P.jpg',
      name: 'Orange Soan Papdi : 200 gms',
      price: '24.99',
      discount: '25',
    },
    {
      image: 'https://cdn.dmart.in/images/products/MAY120002321xx18MAY22_1_P.jpg',
      name: 'Shree Peanut Chikki : 100 gms',
      price: '34.99',
      discount: '30',
    },
  ];

  return (
    <Row className="g-4 justify-content-center flex-wrap">
      {products.map((product, index) => (
        <ProductCard key={index} {...product} addToCart={addToCart}  />
      ))}
    </Row>
  );
};



const ProductCard = ({ image, name, price, discount, addToCart}) => (
 
  <Col xs={12} md={4} lg={2} className="d-flex justify-content-center">
    <Card style={{ width: '265px', height: 'auto', padding: '8px 12px' }} className="text-center">
      <Card.Img
        variant="top"
        src={image}
        style={{ height: 'auto', maxHeight: '200px', width: '100%', objectFit: 'cover' }}
      />
      <Card.Body className="d-flex flex-column" style={{ flexGrow: 1 }}>
        <Card.Title style={{ margin: '10px 0' }}>{name}</Card.Title>
        <Card.Text className="mb-auto">
          <div>Price: ${price}</div>
          <div>Discount: {discount}%</div>
        </Card.Text>
        <Button variant="success" onClick={() => addToCart({ image, name, price, discount })}>
          Add to Cart
        </Button>

        

      </Card.Body>
    </Card>
  </Col>
);

export default ProductGrid;
