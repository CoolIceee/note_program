const mongoose = require('mongoose')

const customSchema = mongoose.Schema({
  header: { type: String },
  text: { type: String },
  dataTime: {type: String},
})
const Custom = mongoose.model('Custom', customSchema)
module.exports = Custom
