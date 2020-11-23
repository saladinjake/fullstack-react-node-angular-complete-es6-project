
'use strict';
import mongoose from  'mongoose';
let SignUpTokenSchema = new mongoose.Schema({
    _userId: { type: String },
    email_confirm_token: { type: String, required: true },
    createdAt: { type: Date, required: true, default: Date.now, expires: 43200 }
});

module.exports = mongoose.model('SignUpToken', SignUpTokenSchema);
