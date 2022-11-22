/* eslint-disable max-len */
import { useDispatch, useSelector } from 'react-redux';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import { Link } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useEffect, useState } from 'react';
import { getAssests } from '../Redux/cryptoSlice';

const Home = () => {
  const dispatch = useDispatch();
  const assetList = useSelector((state) => state.cryptos);
  useEffect(() => {
    if (!assetList.length) {
      dispatch(getAssests());
    }
  });
  const [searchcoin, setSearchcoin] = useState('');
  const onSearch = (e) => {
    setSearchcoin(e.target.value);
  };
  const searched = assetList.filter(
    (filteredCoin) => filteredCoin.name.toLowerCase().includes(searchcoin.toLowerCase()) || filteredCoin.symbol.toLowerCase().includes(searchcoin.toLowerCase()),
  );

  return (
    <Container>
      <Row>
        <Col className="Home__Header">
          <div className="">
            <p>Welcome!</p>
            <p>Cryptic World</p>
          </div>
        </Col>
      </Row>
      <Row className="">
        <div className="">
          <span>Filter:</span>
          <input type="text" size="sm" value={searchcoin} onChange={onSearch} />
        </div>
      </Row>
      <Row className="">
        {searched.map((asset) => (
          <Col
            xs={6}
            className=""
            Key={`${asset.asset_id}${Math.random * 10}`}
          >
            <Link
              className=""
              Key={asset.asset_id}
              to={`/crypto/${asset.id}`}
            >
              <Row className="">
                <p>{asset.price}</p>
              </Row>
              <Row>
                <Col>
                  <Image className="" src={asset.icon} />
                </Col>
                <Col className="">
                  <span className="">{asset.symbol}</span>
                  <span className="">{asset.name}</span>
                </Col>
              </Row>
              <Row />
            </Link>
          </Col>
        ))}
      </Row>
    </Container>
  );
};
export default Home;
