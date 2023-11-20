import express from 'express'

const app = express()

app.set('view engine', 'ejs')

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.send('Hello world!')
})
app.get('/home', (req, res) => {
  res.render('home')
})

app.listen(3000, () => {
  console.log('Connected')
})
