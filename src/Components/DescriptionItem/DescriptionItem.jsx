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
  trailer,
}) => {
  console.log(title);
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
        <h3>Episodes</h3>
        <p>{episodes}</p>
        <h3>Status</h3>
        <p>{status}</p>
        <h3>Trailer</h3>
        <p>{trailer}</p>
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
  episodes: PropTypes.number,
  status: PropTypes.string,
  trailer: PropTypes.string,
};

DescriptionItem.defaultProps = {
  title: 'Death Note',
  url: 'https://cdn.myanimelist.net/images/anime/9/9453.jpg',
  synopsis: `A shinigami, as a god of death, can kill any person—provided they see their victim's face and write their victim's name in a notebook called a Death Note. One day, Ryuk, bored by the shinigami lifestyle and interested in seeing how a human would use a Death Note, drops one into the human realm. High school student and prodigy Light Yagami stumbles upon the Death Note and—since he deplores the state of the world—tests the deadly notebook by writing a criminas name in it. When the criminal dies immediately following his experiment with the Death Note, Light is greatly surprised and quickly recognizes how devastating the power that has fallen into his hands could be. With this divine capability, Light decides to extinguish all criminals in order to build a new world where crime does not exist and people worship him as a god. Police, however, quickly discover that a serial killer is targeting criminals and, consequently, try to apprehend the culprit. To do this, the Japanese investigators count on the assistance of the best detective in the world: a young and eccentric man known only by the name of L.`,
  type: 'TV',
  source: 'Manga',
  episodes: 37,
  status: 'Finished Airing',
  trailer:
    'https://www.youtube.com/embed/Vt_3c8BgxV4?enablejsapi=1&wmode=opaque&autoplay=1',
};
export default DescriptionItem;
