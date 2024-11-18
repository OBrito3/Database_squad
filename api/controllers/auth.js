const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const Privado = require("../models/perfil_privado.js");

const signup = async (req, res) => {
    try {
        const saltRounds = bcrypt.genSaltSync(process.env.VUELTAS); //esto en .env
        const hasedPassword = bcrypt.hashSync(req.body.password, saltRounds);
        req.body.password = hasedPassword;

        const privado = await Privado.create(req.body);
        const payload = { email: req.body.email };
        const token = jwt.sign(payload, process.env.TOKEN_WORD, { expiresIn: process.env.EXPIRES });
        res.status(200).json({ token, role: privado.role, usuario: privado.email });
    } catch (error) {
        return res.status(500).send(error);
    }
};

const login = async (req, res) => {
    try {
        const privado = await Privado.findOne({
            where: { email: req.body.email },
        });

        if (!privado) return res.status(400).send("Error: usuario no encontrado");

        const comparePass = bcrypt.compareSync(req.body.password, privado.password);

        if (comparePass) {
            const payload = { email: privado.email };
            const token = jwt.sign(payload, process.env.TOKEN_WORD, { expiresIn: "1h" });
            return res.status(200).json({ token, role: privado.role });
        } else {
            return res.status(404).send("Error: comprueba los datos introducidos");
        }
    } catch (error) {
        return res.status(500).send(error);
    }
};

const logout = async (req, res) => {
    try {
        res.locals.privado = ""
        jwt.destroy(req.headers.authorization)
    } catch (error) {
        res.status(400).send(error)
    }
}

module.exports = { signup, login, logout };