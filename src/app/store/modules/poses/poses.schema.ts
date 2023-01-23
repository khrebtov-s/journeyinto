import { schema } from 'normalizr';

// Define a teachers schema
export const posesSchema = new schema.Entity('poses', {}, { idAttribute: 'slug' });
