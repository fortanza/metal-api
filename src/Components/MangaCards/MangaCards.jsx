import './MangaCards.scss';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Card from '../Card/Card';

const MangaCards = () => {
  const [mangas, setMangas] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.jikan.moe/v3/search/anime?q=&order_by=members&sort=desc&page=1`
      )
      .then(({ data }) => {
        const newDatas = data.results.map((newData) => {
          return {
            id: newData.mal_id,
            title: newData.title,
            url: newData.image_url,
            synopsis: newData.synopsis,
          };
        });
        setMangas(newDatas);
      })
      .catch(() => {
        console.error('Plz fix your call, or set up your internet');
      });
  }, []);

  return (
    <section className="MangaDescription">
      {mangas.map((manga) => {
        return <Card {...manga} />;
      })}
    </section>
  );
};

export default MangaCards;
