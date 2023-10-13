// collections/media.ts

import { CollectionConfig } from 'payload/types';

const Media: CollectionConfig = {
  slug: 'media',
  auth: true,
  fields: [
    {
      name: 'file',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      type: 'text',
    },
    {
      name: 'posts', 
      type: 'relationship',
      relationTo: 'posts',
      hasMany: true, 
    },
  ],
};

export default Media;
