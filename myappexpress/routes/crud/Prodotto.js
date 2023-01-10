var express = require("express");
var router = express.Router();
var dbPool = require("../db");
var db = dbPool.getPool();

const getProdotti = (req, res) => {
  db.query("SELECT * FROM prodotto ORDER BY id ASC;", (error, results) => {
    if (error) {
      console.log(error);
    } else {
      //res.render("/", { data: results.rows });
      res.send(results.rows)
    }
  });
};


const createProdotto = (req, res) => {
  const { nome, descrizione, prezzo, sku, quantità } = req.body;
  db.query(
    "INSERT INTO prodotto VALUES ($1,$2,$3,$4,$5) RETURNING id;",
    [nome, descrizione,prezzo, sku, quantità],
    (error, results) => {
      if (error) {
        console.log(error);
        res
          .status(500)
          .json({
            message: error,
            code: 500,
            result: results,
            postdata: req.body,
          });
      } else {
        res.status(201).send("Prodotto added with ID: " + results.rows)
      }
    }
  );
};

module.exports = {getProdotti,createProdotto};
