import { useParams } from 'react-router-dom';

const Detail = () => {
  const id = useParams().id;

  return (
    <div>
      <h2>detail 페이지</h2>
      <div>{id}</div>
    </div>
  );
};

export default Detail;
