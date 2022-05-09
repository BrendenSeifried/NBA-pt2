import React, { useEffect, useState } from 'react';
import { Link, Route } from 'react-router-dom/cjs/react-router-dom';
import { useRouteMatch } from 'react-router-dom/cjs/react-router-dom.min';
import CharacterCard from '../components/CharacterCard';
import { fetchAllCharacters } from '../services/fetch';

export default function LandingPage() {
  const [data, setData] = useState([]);
  const [load, setLoad] = useState(true);
  const { url, path } = useRouteMatch();

  console.log(url);
  console.log(path);

  useEffect(() => {
    const fetchEveryone = async () => {
      const resp = await fetchAllCharacters();
      setData(resp);
      setLoad(false);
    };
    fetchEveryone();
  }, []);

  if (load) return <div>LandingPage</div>;

  return (
    <>
      {data.map((item) => (
        <article key={item.id}>
          <Link to={`${url}/${item.id}`}>
            <h1>{item.name}</h1>
          </Link>
        </article>
      ))}
      <Route path={`${path}/:id`}>
        <CharacterCard />
      </Route>
    </>
  );
}
