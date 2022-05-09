import React, { useEffect, useState } from 'react';
import { Link, Route } from 'react-router-dom/';
import { useLocation, useParams, useRouteMatch } from 'react-router-dom/';
import CharacterCard from '../components/CharacterCard';
import { fetchAllCharacters } from '../services/fetch';

export default function LandingPage() {
  const [data, setData] = useState([]);
  const [load, setLoad] = useState(true);
  const { url, path } = useRouteMatch();
  const location = useLocation();

  console.log(location);

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
      {data.map((character) => (
        <article key={character.id}>
          <Link to={`${url}/${character.id}`}>
            <h1>{character.name}</h1>
          </Link>
        </article>
      ))}
      <Route path={`${path}/:id`}>
        <CharacterCard />
      </Route>
    </>
  );
}
