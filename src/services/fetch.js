export async function fetchRickandMorty(id) {
  const resp = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
  const RnM = await resp.json();
  return RnM;
}

export async function fetchAllCharacters() {
  const resp = await fetch('https://rickandmortyapi.com/api/character/');
  const RnM = await resp.json();
  return RnM.results;
}
