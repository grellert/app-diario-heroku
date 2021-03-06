"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setupBDDriver = setupBDDriver;
exports.getEntradas = getEntradas;
exports.getEntrada = getEntrada;
exports.addEntrada = addEntrada;

var _env = require("./env");

// versão alternativa usando async/await -- RECOMENDADO
const {
  MongoClient
} = require('mongodb');

var DBDriver = new MongoClient(_env.MONGO_URL, {
  useUnifiedTopology: true
}); // declaramos funções assíncronas com async 
// token é o identificador do usuário

async function addEntrada(userId, data, entrada) {
  const collection = DBDriver.collection('diario');
  const query = {
    userId: userId,
    data: data
  };
  const doc = {
    userId: userId,
    data: data,
    conteudo: entrada
  }; // toda promise é precedida de um await - bloqueia a execução dessa função até ser completada
  // upsert = update ou insert

  const res = await collection.updateOne(query, {
    $set: doc
  }, {
    upsert: true
  });
  return res;
}

async function getEntrada(userId, data) {
  const collection = DBDriver.collection('diario');
  const query = {
    userId: userId,
    data: data
  };
  const res = await collection.findOne(query);
  return res;
}

async function getEntradas(token) {
  console.log('Requisitando entradas do user: ', token);
  const collection = DBDriver.collection('diario');
  const query = {
    userId: token
  };
  const entradas = await collection.find(query).toArray();
  return entradas;
}

async function setupBDDriver() {
  DBDriver.connect((err, conn) => {
    if (err) {
      console.dir(err);
    }

    DBDriver = conn.db('INE5646');
  });
}