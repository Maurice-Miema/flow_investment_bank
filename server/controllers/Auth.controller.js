const Admin = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Inscription
exports.registerAdmin = async (req, res) => {
    const { nom, postnom, prenom, fonction, email, password } = req.body;
    try {
        const existingAdmin = await Admin.findOne({ email });
        if (existingAdmin) return res.status(400).json({ message: 'Cet email est déjà utilisé.' });

        const hashedPassword = await bcrypt.hash(password, 10);
        const admin = new Admin({ nom, postnom, prenom, fonction, email, password: hashedPassword });

        await admin.save();
        res.status(201).json({ message: 'Admin enregistré avec succès' });
    } catch (error) {
        res.status(500).json({ message: 'Erreur lors de l’inscription', error: error.message });
    }
};

// Connexion
exports.loginAdmin = async (req, res) => {
    const { email, password } = req.body;
    try {
        const admin = await Admin.findOne({ email });
        if (!admin) return res.status(404).json({ message: 'Admin introuvable' });

        const isMatch = await bcrypt.compare(password, admin.password);
        if (!isMatch) return res.status(401).json({ message: 'Mot de passe incorrect' });

        const accessToken = jwt.sign(
            { id: admin._id, email: admin.email }, 
            process.env.JWT_SECRET, {
            expiresIn: '1h',
        });
        const refreshToken = jwt.sign(
            { id: admin._id, email: admin.email },
            process.env.REFRESH_TOKEN_SECRET,
            { expiresIn: '7d' }
        );

        res.status(200).json({
            message: 'Connexion réussie',
            accessToken,
            refreshToken,
        });
    } catch (error) {
        res.status(500).json({ message: 'Erreur lors de la connexion', error: error.message });
    }
};


// Renouveler le token de user
exports.RefreshToken = async (req, res) => {
    const { refreshToken } = req.body;

    if (!refreshToken) {
        return res.status(401).json({ message: 'Refresh token manquant' });
    }

    try {
        // Vérifie le refresh token
        const decoded = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET);

        // Regénère un nouveau token
        const accessToken = jwt.sign(
            { id: decoded.id, role: decoded.role },
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
        );

        res.status(200).json({ accessToken });
    } catch (error) {
        res.status(403).json({ message: 'Token invalide ou expiré' });
    }
}