const jwt = require("jsonwebtoken");
const Privado = require("../models/perfil_privado.js");

const checkAuth = async (req, res, next) => {
    try {
        if (!req.headers.authorization) {
            return res.status(404).send("Token no encontrado");
        }

        jwt.verify(req.headers.authorization, TOKEN_WORD, async (err, result) => {
            if (err) return res.status(401).send("Token no válido");
            const privado = await Privado.findOne({
                where: { email: result.email },
            });
            if (!privado) return res.status(404).send("Usuario no encontrado");
            res.locals.privado = privado;
            next();
        });
    } catch (error) {
        res.status(500).send(error);
    }
};

const checkAdmin = async (req, res, next) => {
    try {
        if (res.locals.privado.role !== "Admin") {
            return res.status(401).send("No eres administrador");
        } else {
            next();
        }
    } catch (error) {
        res.status(404).send(error);
    }
};

const checkArtista = async (req, res, next) => {
    try {
        if (res.locals.privado.role !== "Artista") {
            return res.status(401).send("No estás autorizado");
        } else {
            next();
        }
    } catch (error) {
        res.status(404).send(error);
    }
};

module.exports = { checkAuth, checkAdmin, checkArtista };