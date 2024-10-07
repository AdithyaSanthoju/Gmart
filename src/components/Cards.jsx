import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function ImageAndTextExample() {
  return (
    <Row className="g-3 seperate" data-aos="fade-up">
      <Col className='sep_2' xs={12} md={6} >
        <Card className="h-100 h-auto" > {/* Ensure card stretches to full height */}
          <Card.Img 
            className="Card1" 
            variant="top" 
            src="https://cdn.dmart.in/images/rwd/banners/curated/1oct24-curated-halfprice-hyd.jpg" 
          />
          <Card.Body>
            <Card.Text>
              Shop for great Offers - minimum off
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col  className='sep_2' xs={12} md={6} >
        <Card className="h-100"> {/* Ensure card stretches to full height */}
          <Card.Img 
            className="Card1" 
            variant="top" 
            src="https://cdn.dmart.in/images/rwd/banners/curated/25sep24-curated-ft-navratri-hp.jpg" 
          />
          <Card.Body>
            <Card.Text>
              Shop for Great Deals minimum 50% off
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}

export default ImageAndTextExample;
