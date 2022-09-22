const express = require("express");
const routerProductos = express.Router();

const DB_PRODUCTOS = [];


routerProductos.get( "/", (req, res, next) => {
    res.render('vista', {DB_PRODUCTOS});
    next();
});

routerProductos.post( "/productos", (req, res, next) => {
  DB_PRODUCTOS.push(req.body);
  res.redirect('/');

});


module.exports = routerProductos;