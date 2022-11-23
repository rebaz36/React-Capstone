import { useDispatch, useSelector } from 'react-redux';
import Image from 'react-bootstrap/Image';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getAssests } from '../Redux/cryptoSlice';
import Nav from './Nav';

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
    (filteredCoin) => filteredCoin.name.toLowerCase()
      .includes(searchcoin.toLowerCase()) || filteredCoin.symbol.toLowerCase()
      .includes(searchcoin.toLowerCase()),
  );

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  return (
    <>
      <Nav />
      <div className="Header">
        <div className="Header__Container">
          <p className="Header__Container__Title">One Place</p>
          <p className="Header__Container__Description">
            All the Crypto Information you need!
          </p>
        </div>
      </div>

      <div className="Filter">
        <div className="Filter__Container">
          <span className="Filter__Container__Title">Filter:</span>
          <input
            className="Filter__Container__Input"
            type="text"
            value={searchcoin}
            onChange={onSearch}
          />
        </div>
      </div>

      <div className="Cryptos">
        {searched.map((asset, index) => (
          <Link
            className={`Cryptos__Item${(index + 1) % 4}`}
            key={asset.id}
            to={`crypto/${asset.id}`}
            style={{ textDecoration: 'none' }}
          >
            <div className="ImageContainer">
              <div>
                <Image className="Image" src={asset.icon} />
              </div>
            </div>
            <div className="details">
              <p>
                Name:
                {' '}
                {asset.name}
              </p>
              <p className="">
                Symbol:
                {' '}
                {asset.symbol}
              </p>
              <p className="">
                Current Price:
                {' '}
                ~
                {formatter
                  .format(Math.round(asset.price) === 0 ? asset.price : Math.round(asset.price))}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};
export default Home;
