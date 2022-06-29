import { ProjectUser } from './project.api';

export function filterByProjectUserName(phrase: string, users: ProjectUser[]): ProjectUser[] {
  phrase = phrase.toLowerCase();
  return users.filter(({name}) => name.toLowerCase().includes(phrase));
}
