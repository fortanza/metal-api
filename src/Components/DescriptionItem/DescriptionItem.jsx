import './DescriptionItem.scss';
import PropTypes from 'prop-types';

const DescriptionItem = ({
  title,
  url,
  synopsis,
  type,
  source,
  episodes,
  status,
}) => {
  return (
    <>
      <article>
        <h2>{title}</h2>
        <img src={url} alt={title} />
        <h3>Synopsis:</h3>
        <p>{synopsis}</p>
        <h3>Type:</h3>
        <p>{type}</p>
        <h3>Source:</h3>
        <p>{source}</p>
        <h3>pisodes</h3>
        <p>{episodes}</p>
        <h3>Status</h3>
        <p>{status}</p>
      </article>
    </>
  );
};

DescriptionItem.propTypes = {
  title: PropTypes.string,
  url: PropTypes.string,
  synopsis: PropTypes.string,
  type: PropTypes.string,
  source: PropTypes.string,
  episodes: PropTypes.string,
  status: PropTypes.string,
};

DescriptionItem.defaultProps = {
  title: '',
  url: '',
  synopsis: '',
  type: '',
  source: '',
  episodes: '',
  status: '',
};
export default DescriptionItem;
