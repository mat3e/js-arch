export interface ListedProject {
  id: number;
  name: string;
}

export const getProjects = async (): Promise<ListedProject[]> => (await (fetch(`${API_URL}/episode`).then(response => response.json())))
.results.map(({id, name}: ListedProject) => ({
  id,
  name
}));

export interface Project {
  id: string;
  name: string;
  users: ProjectUser[];
}

export async function getProject(projectId: string): Promise<Project> {
  const {name, characters} = (await (fetch(`${API_URL}/episode/${projectId}`).then(response => response.json())));
  const userIds = characters.map((char: string) => char.replace(`${API_URL}/character/`, ''));
  const users: ProjectUser[] = await getProjectUsers(userIds);
  return {
    id: projectId,
    name,
    users
  };
}

export interface ProjectUser {
  id: number;
  name: string;
  image: string;
}

async function getProjectUsers(userIds: string[]): Promise<ProjectUser[]> {
  const result: ProjectUser[] = await (fetch(`${API_URL}/character/${userIds}`).then(response => response.json()));
  return result.map(({id, name, image}) => ({
    id,
    name,
    image
  }));
}

const API_URL = 'https://rickandmortyapi.com/api';
