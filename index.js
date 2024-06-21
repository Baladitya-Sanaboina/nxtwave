const express = require('express')
const path = require('path')
const {open} = require('sqlite')
const sqlite3 = require('sqlite3')
const app = express()
const db_path = path.join(__dirname, 'goodreads.db')
const db = null
app.get('/', (req, res) => {
  res.send('Hai')
})

const intializeDb = async () => {
  try {
    db = await open({
      filename: db_path,
      driver: sqlite3.Database,
    })
    app.listen(3000, () => {
      console.log('Running on 3000')
    })
  } catch (e) {
    console.log(e)
  }
}
intializeDb()
