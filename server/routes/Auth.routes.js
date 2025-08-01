const express = require('express');
const router = express.Router();
const User = require("../models/User");
const verifyToken = require("../middlewares/verifyToken");
const { registerAdmin, loginAdmin, RefreshToken } = require('../controllers/Auth.controller');

router.post('/register', registerAdmin);
router.post('/login', loginAdmin);
router.post('/refresh-token', RefreshToken);

// GET /api/auth/me
router.get("/me", verifyToken, async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select("-password"); // on ne renvoie pas le mdp
        if (!user) return res.status(404).json({ message: "Utilisateur non trouvé" });

        res.status(200).json(user);
    } catch (error) {
        console.error("Erreur /me :", error);
        res.status(500).json({ message: "Erreur serveur" });
    }
});

module.exports = router;
