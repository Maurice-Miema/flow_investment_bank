const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
    nom: { type: String, required: true },
    postnom: { type: String, required: true },
    prenom: { type: String, required: true },
    fonction: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: {
        type: String,
        enum: ['admin', 'superadmin'],
        default: 'admin',
    },
}, { timestamps: true });

module.exports = mongoose.model('Users', adminSchema);
