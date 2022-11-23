import { useDispatch, useSelector } from 'react-redux';
import { Image } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { getDetail } from '../Redux/detailSlice';

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
    <div className="Container">
      <div className="Icon_Container">
        <Image src={detail.icon} />
        <p className="">
          ~
          {formatter.format(
            Math.round(detail.price) === 0
              ? detail.price
              : Math.round(detail.price),
          )}
        </p>
      </div>
      <div>
        <div className="">
          <span className="">Coin name :</span>
          <span>{detail.name}</span>
        </div>
        <div className="">
          <span className="">Coin symbol :</span>
          <span>{detail.symbol}</span>
        </div>
        <div className="">
          <span className="">Ranking :</span>
          <span>{detail.rank}</span>
        </div>
        <div className="">
          <span className="">Price :</span>
          <span>{detail.price}</span>
        </div>
        <div className="">
          <span className=""> Market cap :</span>
          <span>{detail.marketCap}</span>
        </div>
        <div className="">
          <span className=""> Price change week :</span>
          <span>{detail.priceChange1w}</span>
        </div>
        <div className="">
          <span className=""> Avail. supply :</span>
          <span>{detail.availableSupply}</span>
        </div>
      </div>
    </div>
  );
};

export default Detail;
