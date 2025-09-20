// require('dotenv').config()
const express = require('express') // require syntax
// import express from "express"
const app = express() // app

const port = 4000 // so many port virtual port 65305

// request response parameter

app.get('/', (req, res) => {
  res.send('uvpatel1708')
})

app.get('/twitter', (req, res) => {
  res.send('Hello twitter!')
})
app.get('/login', (req, res) => {
  res.send('<h1>Login Page</h1>')
})
app.get('/youtube', (req, res) => {
  res.send('<h2>yt Page</h2>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
