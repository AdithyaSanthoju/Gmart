import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

function PopularCategories() {
  const categories = [
    { name: 'Dairy', icon: 'https://cdn.dmart.in/images/rwd/banners/cards/1may23-popularcat-dairy.png' },
    { name: 'Tea', icon: 'https://cdn.dmart.in/images/rwd/banners/cards/12sept23-popularcat-tea1.png' },
    { name: 'Soft Drinks', icon: 'https://cdn.dmart.in/images/rwd/banners/cards/12sept23-popularcat-softdrinks.png' },
    { name: 'Cleaners', icon: 'https://cdn.dmart.in/images/rwd/banners/cards/1oct24-popularcat-cleaners.png' },
    { name: 'Bath Soaps', icon: 'https://cdn.dmart.in/images/rwd/banners/cards/12jan24-popularcat-soaps.png' },
    { name: 'Toothpaste', icon: 'https://cdn.dmart.in/images/rwd/banners/cards/12sept23-popularcat-toothpaste.png' },
    { name: 'Shampoos', icon: 'https://cdn.dmart.in/images/rwd/banners/cards/12jan24-popularcat-shampoos.png' },
    { name: 'Pooja Needs', icon: 'https://cdn.dmart.in/images/rwd/banners/cards/16jan23-popularcat-poojaneeds1.png' },
    { name: 'Towels', icon: 'https://cdn.dmart.in/images/rwd/banners/cards/1apr24-popularcat-towels.png' },
    { name: 'Bath Utility', icon: 'https://cdn.dmart.in/images/rwd/banners/cards/1apr24-popularcat-bathroom.png' },
    { name: 'Coffee', icon: 'https://cdn.dmart.in/images/rwd/banners/cards/12jan24-popularcat-coffee.png' },
    { name: 'Fruits', icon: 'https://img.freepik.com/vecteurs-premium/illustration-vectorielle-fruits-pain_543090-723.jpg' },
  ];

  return (
    <Container className="popular-categories mt-5">
      <h4>Popular Categories</h4>
      <Row className="text-center">
        {categories.map((category, index) => (
          <Col xs={6} md={3} lg={2} key={index} className="mb-4">
            <img src={category.icon} alt={category.name} className="img-fluid" />
            <p>{category.name}</p>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default PopularCategories;
