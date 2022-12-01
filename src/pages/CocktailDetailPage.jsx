import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import CocktailCard from '../components/CocktailCard/CocktailCard';
import cocktailApi from '../services/cocktail.service';

const CocktailDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [cocktail, setCocktail] = useState(undefined);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    cocktailApi
      .getOneCocktailById(id)
      .then((cocktail) => {
        setCocktail(cocktail);
      })
      .catch((err) => {
        console.log(err.response.data.errorMessage);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const deleteCocktail = (id) => {
    cocktailApi.deleteOneCocktailById(id).then(() => {
      navigate('/galery');
    });
  };

  if (loading) {
    // Cambiar por un spinner https://react-bootstrap.github.io/components/spinners/ :O
    return <h1>Loading...</h1>;
  }

  return (
    <>
      {cocktail ? (
        <CocktailCard deleteCocktail={deleteCocktail} cocktail={cocktail} />
      ) : (
        <p>Ha ocurrido un error.</p>
      )}
    </>
  );
};

export default CocktailDetail;
