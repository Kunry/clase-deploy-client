import { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useParams, useNavigate } from 'react-router-dom';
import cocktailApi from '../services/cocktail.service';

const CocktailUpdate = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [cocktail, setCocktail] = useState(undefined);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    cocktailApi
      .getOneCocktailById(id)
      .then((cocktail) => {
        setCocktail(cocktail);
      })
      .catch((err) => {
        console.error(err.response.data.errorMessage);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  const updateNewCocktail = (event) => {
    const { name, value } = event.target;
    setCocktail({ ...cocktail, [name]: value });
  };

  const updateCocktail = (event) => {
    event.preventDefault();
    cocktailApi.updateOneCocktailById(id, cocktail).then(() => {
      navigate(`/cocktail/${id}`)
    });
  };

  if (loading) {
    return <h1>SPINEER :D</h1>;
  }
  return (
    <>
      <div style={{ marginTop: '60px' }}></div>
      <Form onSubmit={updateCocktail}>
        <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
          <Form.Label>strDrink</Form.Label>
          <Form.Control
            onChange={updateNewCocktail}
            type='text'
            placeholder='strDrink'
            name='strDrink'
            value={cocktail.strDrink}
          />
        </Form.Group>
        <Form.Group className='mb-3' controlId='exampleForm.ControlInput2'>
          <Form.Label>strDrinkThumb</Form.Label>
          <Form.Control
            type='text'
            placeholder='strDrinkThumb'
            onChange={updateNewCocktail}
            name='strDrinkThumb'
            value={cocktail.strDrinkThumb}
          />
        </Form.Group>
        <Form.Group className='mb-3' controlId='exampleForm.ControlInput3'>
          <Form.Label>strGlass</Form.Label>
          <Form.Control
            type='text'
            placeholder='strGlass'
            onChange={updateNewCocktail}
            name='strGlass'
            value={cocktail.strGlass}
          />
        </Form.Group>
        <Form.Group className='mb-3' controlId='exampleForm.ControlTextarea1'>
          <Form.Label>strInstructions</Form.Label>
          <Form.Control
            as='textarea'
            rows={3}
            onChange={updateNewCocktail}
            name='strInstructions'
            value={cocktail.strInstructions}
          />
        </Form.Group>
        <Button variant='primary' type='submit'>
          Update
        </Button>
      </Form>
    </>
  );
};

export default CocktailUpdate;
