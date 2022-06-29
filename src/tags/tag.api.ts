export type TaggedEntity = 'product' | 'user';

export interface Tag {
  id: number;
  key: string;
  value: string;
}

export const getAll = async (): Promise<Tag[]> => tags;

export async function getTagsFor(entity: TaggedEntity, entityId: string): Promise<Tag[]> {
  if (entity === 'user') {
    return [tags[7], tags[0]];
  }
  return projectAssignments[entityId].map(tagId => tags[tagId - 1]);
}

const tags: Tag[] = [
  {id: 1, key: 'env', value: 'prod'},
  {id: 2, key: 'env', value: 'test'},
  {id: 3, key: 'foo', value: 'bar'},
  {id: 4, key: 'foo', value: 'baz'},
  {id: 5, key: 'priority', value: 'max'},
  {id: 6, key: 'priority', value: 'highest'},
  {id: 7, key: 'priority', value: 'lowest'},
  {id: 8, key: 'friendliness', value: 'max'},
  {id: 9, key: 'friendliness', value: 'medium'},
];

const projectAssignments: Record<string, number[]> = {};

for (let i = 1; i <= 20; i++) {
  const assignments = random(1, 5);
  const key = `${i}`;
  projectAssignments[key] = [];
  for (let j = 0; j < assignments; j++) {
    projectAssignments[key].push(random(1, tags.length));
    projectAssignments[key] = [...(new Set(projectAssignments[key]))];
  }
}

function random(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min) + min);
}
