// recipient is a SUBDOCUMENT COLLECTION

const mongoose = require("mongoose");
const { Schema } = mongoose;

const recipientSchema = new Schema({
  email: String,
  // has the user give respond or not (yes / no)
  responded: { type: Boolean, default: false }
});

module.exports = recipientSchema;
