import 'App.scss';
import MangaDescription from 'Components/MangaDescription/MangaDescription';
import MangaCards from 'Components/MangaCards/MangaCards';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <h1>Welcome in the manga univers</h1>
      <Routes>
        <Route path="/" element={<MangaCards />} />
        <Route path="/mangaDescription:id" element={<MangaDescription />} />
      </Routes>
    </>
  );
}

export default App;
