import { useDispatch, useSelector } from 'react-redux';
import Container from 'react-bootstrap/Container';
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
  return (
    <Container>
      hello
    </Container>
  );
};

export default Detail;
