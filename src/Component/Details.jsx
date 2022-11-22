import { useDispatch, useSelector } from 'react-redux';
import { Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { getDetail } from '../Redux/detailSlice';

const Detail = () => {
  const data = useParams();
  const dispatch = useDispatch();
  const detail = useSelector((state) => state.detail);
  useEffect(() => {
    dispatch(getDetail(data.id));
  });
  return (
    <Container>
      <Row>
        <Col className="">
          <div className="">
            <Image src={detail.icon} />
            <p className="">
              $
              {detail.price}
            </p>
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs={12} className="">
          <span className="">Coin name :</span>
          <span>{detail.name}</span>
        </Col>
        <Col xs={12} className="">
          <span className="">Coin symbol :</span>
          <span>{detail.symbol}</span>
        </Col>
        <Col xs={12} className="">
          <span className="">Ranking :</span>
          <span>{detail.rank}</span>
        </Col>
        <Col xs={12} className="">
          <span className="">Price :</span>
          <span>{detail.price}</span>
        </Col>
        <Col xs={12} className="">
          <span className=""> Market cap :</span>
          <span>{detail.marketCap}</span>
        </Col>
        <Col xs={12} className="">
          <span className=""> Price change week :</span>
          <span>{detail.priceChange1w}</span>
        </Col>
        <Col xs={12} className="">
          <span className=""> Avail. supply :</span>
          <span>{detail.availableSupply}</span>
        </Col>
      </Row>
    </Container>
  );
};

export default Detail;
