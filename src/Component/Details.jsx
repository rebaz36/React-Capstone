import { useDispatch, useSelector } from 'react-redux';
import { Image } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { getDetail } from '../Redux/detailSlice';
import Nav from './Nav';

const Detail = () => {
  const data = useParams();
  const dispatch = useDispatch();
  const detail = useSelector((state) => state.detail);
  useEffect(() => {
    dispatch(getDetail(data.id));
  });
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });
  return (
    <>
      <Nav back />
      <div className="Container">
        <div className="Icon_Container">
          <Image src={detail.icon} />
          <p>
            ~
            {formatter.format(
              Math.round(detail.price) === 0
                ? detail.price
                : Math.round(detail.price),
            )}
          </p>
        </div>
        <div className="Details">
          <div className="background">
            <span>Coin name :</span>
            <span>{detail.name}</span>
          </div>
          <div className="background">
            <span>Coin symbol :</span>
            <span>{detail.symbol}</span>
          </div>
          <div className="background">
            <span>Ranking :</span>
            <span>{detail.rank}</span>
          </div>
          <div className="background">
            <span>Price :</span>
            <span>
              {' '}
              {formatter.format(
                Math.round(detail.price) === 0
                  ? detail.price
                  : Math.round(detail.price),
              )}
            </span>
          </div>
          <div className="background">
            <span> Cap :</span>
            <span>
              {' '}
              {formatter.format(
                Math.round(detail.marketCap) === 0
                  ? detail.price
                  : Math.round(detail.marketCap),
              )}
            </span>
          </div>
          <div className="background">
            <span> Price change week :</span>
            <span>{detail.priceChange1w}</span>
          </div>
          <div className="background">
            <span> Supply :</span>
            <span>
              ~
              {formatter.format(
                Math.round(detail.availableSupply) === 0
                  ? detail.price
                  : Math.round(detail.availableSupply),
              )}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Detail;
