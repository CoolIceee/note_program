const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const app = express()

app.use(cors())
app.use(express.json())
app.use('/api', require('./routes/index.js'))

async function start() {
  try {
    await mongoose.connect(
      'mongodb+srv://Magomed:IMmagomed0895@cluster0.qo1p7.mongodb.net/?retryWrites=true&w=majority'
    )
    app.listen(9999, () => {
      console.log(`server connected successfully 9999`)
    })
  } catch (e) {
    console.log('Server error', e.message)
    process.exit(1)
  }
}
start()
