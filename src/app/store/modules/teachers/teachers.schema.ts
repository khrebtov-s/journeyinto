import { schema } from 'normalizr';

// Define a teachers schema
export const teachersSchema = new schema.Entity('teachers',{}, { idAttribute: 'slug' });