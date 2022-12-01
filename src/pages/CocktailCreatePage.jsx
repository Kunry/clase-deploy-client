import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import cocktailApi from '../services/cocktail.service';
import { useNavigate } from 'react-router-dom';

const CocktailCreate = () => {
  const navigate = useNavigate();
  const [cocktail, setCocktail] = useState({});

  const createNewCocktail = (event) => {
    event.preventDefault();
    cocktailApi
      .createCocktail(cocktail)
      .then(() => {
        navigate('/galery');
      });
  };

  const updateNewCocktail = (event) => {
    // const name = event.target.name;
    // const value = event.target.value;
    const { name, value } = event.target;

    // const _cocktail = { ...cocktail };
    // _cocktail[name] = value;
    // setCocktail(_cocktail);
    setCocktail({ ...cocktail, [name]: value });
  };

  return (
    <>
      <div style={{ marginTop: '60px' }}></div>
      <Form onSubmit={createNewCocktail}>
        <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
          <Form.Label>strDrink</Form.Label>
          <Form.Control
            onChange={updateNewCocktail}
            type='text'
            name='strDrink'
            placeholder='strDrink'
          />
        </Form.Group>
        <Form.Group className='mb-3' controlId='exampleForm.ControlInput2'>
          <Form.Label>strDrinkThumb</Form.Label>
          <Form.Control
            type='text'
            placeholder='strDrinkThumb'
            name='strDrinkThumb'
            onChange={updateNewCocktail}
          />
        </Form.Group>
        <Form.Group className='mb-3' controlId='exampleForm.ControlInput3'>
          <Form.Label>strGlass</Form.Label>
          <Form.Control
            type='text'
            placeholder='strGlass'
            name='strGlass'
            onChange={updateNewCocktail}
          />
        </Form.Group>
        <Form.Group className='mb-3' controlId='exampleForm.ControlTextarea1'>
          <Form.Label>strInstructions</Form.Label>
          <Form.Control
            as='textarea'
            rows={3}
            name='strInstructions'
            onChange={updateNewCocktail}
          />
        </Form.Group>
        <Button variant='primary' type='submit'>
          Create
        </Button>
      </Form>
    </>
  );
};

export default CocktailCreate;
