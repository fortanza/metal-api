import './Card.scss';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const MagicCard = ({ id, title, url, synopsis }) => {
  const navigate = useNavigate();

  const DiplayCardsSescriptionHandler = (event) => {
    event.preventDefault();
    navigate(`/mangadescription:${id}`);
  };

  return (
    <>
      <figure className="card">
        <h2>{title}</h2>
        <button type="button" onClick={DiplayCardsSescriptionHandler}>
          <img className="cardImg" src={url} alt={title} />
        </button>
        <h3>Synopsis</h3>
        <p>{synopsis}</p>
      </figure>
    </>
  );
};

MagicCard.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  url: PropTypes.string,
  synopsis: PropTypes.string,
};

MagicCard.defaultProps = {
  id: '',
  title: '',
  url: '',
  synopsis: '',
};
export default MagicCard;
