import { useState, useEffect } from 'react';
import { getTagsFor, TaggedEntity, Tag } from './tag.api';

export const useAssignedTags = (entity: TaggedEntity, entityId: string): Tag[] => {
  const [tags, setTags] = useState<Tag[]>([]);
  useEffect(() => {
    getTagsFor(entity, entityId).then(setTags);
  }, [entity, entityId]);
  return tags;
}
