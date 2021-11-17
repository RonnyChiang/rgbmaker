const mongoose = require("mongoose")
const Schema = mongoose.Schema

const rgbSchema = new Schema({
  redIndex: { type: Number, required: true },
  greenIndex: { type: Number, required: true },
  blueIndex: { type: Number, required: true },
})

module.exports = mongoose.model("rgb", rgbSchema)