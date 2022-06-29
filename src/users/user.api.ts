export interface User {
  id: number;
  name: string;
  species: string;
  gender: string;
  image: string;
}

export async function getUser(userId: string): Promise<User> {
  const {
    id,
    name,
    species,
    gender,
    image
  } = await (fetch(`${API_URL}/${userId}`).then(response => response.json()));
  return {
    id, name, species, gender, image
  };
}

const API_URL = 'https://rickandmortyapi.com/api/character';
