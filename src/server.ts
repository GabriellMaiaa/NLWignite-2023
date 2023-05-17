import fastify from 'fastify'

const app = fastify()

// HTTP METHODS - GET, POST, PUT, PATCH, DELETE

app.get('/hello', () => {
  return 'Hello World'
})

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('✈ HTTP server running on http://localhost:3333') // a TECLA WINDOWS ., leva a emojis
  })
