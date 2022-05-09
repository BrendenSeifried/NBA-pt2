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

  return (
    <article>
      <img alt={`${person.name}`} src={person.image} />
    </article>
  );
}
