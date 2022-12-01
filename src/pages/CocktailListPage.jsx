import { useEffect, useState } from 'react';
import { Col, Container, Pagination, Row } from 'react-bootstrap';
import CocktailCard from '../components/CocktailCard/CocktailCard';
import cocktailApi from '../services/cocktail.service';

const CocktailList = () => {
  const [cocktails, setCocktails] = useState([]);
  const [pagination, setPagination] = useState(0);
  const [maxPage, setMaxPage] = useState(0);

  const reloadCocktails = (pagination) => {
    cocktailApi.getAllCocktails(pagination).then((cocktails) => {
      setCocktails(cocktails.results);
      setMaxPage(cocktails.maxPage);
    });
  };

  useEffect(() => {
    reloadCocktails(pagination);
  }, [pagination]);

  const deleteCocktail = (id) => {
    cocktailApi.deleteOneCocktailById(id).then(() => {
      reloadCocktails(pagination);
    });
  };

  return (
    <div className='galery'>
      <Container>
        <Row xs={1} md={3} className='g-4'>
          {cocktails.map((cocktail) => {
            return (
              <Col key={cocktail._id}>
                <CocktailCard
                  deleteCocktail={deleteCocktail}
                  cocktail={cocktail}
                  showLink
                />
              </Col>
            );
          })}
        </Row>

        <Row>
          <Pagination>
            <Pagination.First as='span' onClick={() => setPagination(0)} />
            <Pagination.Prev
              as='span'
              onClick={() =>
                setPagination((lastPagination) => lastPagination - 1)
              }
            />
            <Pagination.Next
              as='span'
              onClick={() =>
                setPagination((lastPagination) => lastPagination + 1)
              }
            />
            <Pagination.Last as='span' onClick={() => setPagination(maxPage)} />
          </Pagination>
        </Row>
      </Container>
    </div>
  );
};

export default CocktailList;
