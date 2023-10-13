import express from 'express'
import payload from 'payload'

import Posts from './collections/Posts'

require('dotenv').config()
const app = express()


// Redirect root to Admin panel
app.get('/', (_, res) => {
  res.send("Hello World");
})

app.get('/posts/videos/stream', async (req, res) => {
  try {
    console.log(req.app.locals);
    const { posts } = req.app.locals; // Access "posts" collection
    const shortVideoPosts = await posts.find({ type: 'Short_Video' }).exec();
    res.json(shortVideoPosts);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

const start = async () => {
  // Initialize Payload
  await payload.init({
    secret: process.env.PAYLOAD_SECRET,
    express: app,
    onInit: async () => {
      payload.logger.info(`Payload Admin URL: ${payload.getAdminURL()}`)
    },
  })

  // Add your own express routes here

  app.listen(3000)
}

start()
