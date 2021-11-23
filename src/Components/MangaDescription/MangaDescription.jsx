import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import DescriptionItem from 'Components/DescriptionItem/DescriptionItem';

const MangaDescription = () => {
  const [description, setDescription] = useState([]);

  const { id } = useParams;

  useEffect(() => {
    axios
      .get(`https://api.jikan.moe/v3/anime/${id}`)
      .then(({ data }) => {
        const newDatas = data.results.map((newData) => {
          return {
            id: newData.mal_id,
            title: newData.title,
            url: newData.image_url,
            synopsis: newData.synopsis,
            type: newData.type,
            source: newData.source,
            episodes: newData.episodes,
            status: newData.status,
          };
        });
        setDescription(newDatas);
      })
      .catch(() => {
        console.error('Plz fix your call, or set up your internet');
      });
  }, []);

  return (
    <section className="MangaDescription">
      <h2>Essai</h2>
      <DescriptionItem {...description} />
    </section>
  );
};
export default MangaDescription;
