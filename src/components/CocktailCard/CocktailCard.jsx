import { useState } from 'react';
import { Button, Card, ListGroup, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CocktailCard = ({ cocktail, showLink, deleteCocktail }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Card style={{ with: '18rem' }}>
        <Card.Img
          variant='top'
          src={cocktail.strDrinkThumb}
          alt={cocktail.strDrink}
        />
        <Card.Body>
          <Card.Title>{cocktail.strDrink}</Card.Title>
          <Card.Text>
            {cocktail.strInstructions?.length > 100
              ? `${cocktail.strInstructions.substring(0, 100)}...`
              : cocktail.strInstructions}
          </Card.Text>
          <Card.Text>{cocktail.strAlcoholic}</Card.Text>
        </Card.Body>
        <Card.Footer>
          <Button variant='primary' onClick={handleShow}>
            Details
          </Button>
          {showLink && (
            <Button variant='link'>
              <Link to={`/cocktail/${cocktail._id}`}>Get Cocktail</Link>
            </Button>
          )}
          <Button
            variant='secondary'
            onClick={() => deleteCocktail(cocktail._id)}
          >
            Delete
          </Button>
        </Card.Footer>
      </Card>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{cocktail.strDrink}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {cocktail.strInstructions}
          <ListGroup>
            {cocktail.ingredientAndMeasure.map((ingredientAndMeasure) => {
              return (
                <ListGroup.Item key={ingredientAndMeasure.strIngredient}>
                  <p>Ingredient: {ingredientAndMeasure.strIngredient}</p>
                  <p>Measure: {ingredientAndMeasure.strMeasure}</p>
                </ListGroup.Item>
              );
            })}
          </ListGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='link'>
            <Link to={`/cocktail/edit/${cocktail._id}`}>Edit Cocktail</Link>
          </Button>
          <Button variant='secondary' onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default CocktailCard;
