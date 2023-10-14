import { CollectionConfig } from 'payload/types'

const Posts: CollectionConfig = {
  slug: 'posts',
  auth: true,
  admin: {
    useAsTitle: 'email',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'type',
      type: 'select',
      options: ['Image', 'Video', 'Short_Video'],
      required: true,
    },
    
  ],
  endpoints: [
    {
      path: '/videos/stream',
      method: 'get',
      handler: async (req, res, next) => {
        try{
          const shortVideoPosts = await posts.find({ type: 'Short_Video' }).exec();
          res.send({shortVideoPosts});
        }catch (error) {
          res.send(error)
        }
      },
    },
  ]
}



export default Posts
