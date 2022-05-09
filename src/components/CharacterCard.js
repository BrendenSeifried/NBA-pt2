import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { fetchRickandMorty } from '../services/fetch';

export default function CharacterCard() {
  const { id } = useParams();
  const [person, setPerson] = useState({});
  const history = useHistory('');

  useEffect(() => {
    const fetchChar = async () => {
      const data = await fetchRickandMorty(id);
      setPerson(data);
    };
    fetchChar();
  }, [id]);

  const close = async () => {
    history.push('/char');
  };

  return (
    <article>
      <img alt={`${person.name}`} src={person.image} />
      <h1>Name: {person.name}</h1>
      <p>{person.species}</p>
      <p>{person.gender}</p>
      <button onClick={close}>Close View</button>
    </article>
  );
}
