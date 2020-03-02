var User = require('../models/users');
exports.user_create = function (req, res, next) {
    console.log("entro a controller");
    if (req.body) {
        console.log("dato valido");
        let items = req.body;
        User.create(items, function (err, newUsers) {
            console.log("comenzamos a crear usuario");
            if (err) return res.json({ error: err });
            console.log("llego al final");
            res.json(newUsers)
        });
    } else {
        res.json({
            status: 'ERROR', message: 'Debe completar todos los campos'}); //opcional mandar un mensaje de error
}
}