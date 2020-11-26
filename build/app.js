"use strict";

var _env = require("./env");

var _mongodb = require("./mongodb");

var _http = _interopRequireDefault(require("http"));

var _fs = _interopRequireDefault(require("fs"));

var _path = _interopRequireDefault(require("path"));

var _nodeFetch = _interopRequireDefault(require("node-fetch"));

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// cadastrar chave em https://console.developers.google.com/apis/credentials
async function validaToken(token) {
  const url = `https://oauth2.googleapis.com/tokeninfo?id_token=${token}`;
  const res = await (0, _nodeFetch.default)(url);
  const res_json = await res.json();
  if (res_json['email']) return res_json['email'];else {
    console.log(res_json);
  }
  return false;
}

const app = (0, _express.default)();

const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(_express.default.static(_path.default.resolve(__dirname, '../publico')));
app.get('/chave', (req, res) => res.json(_env.GOOGLE_CLIENT_ID));
app.post('/diario/busca', async (req, res) => {
  const token = req.body.token;
  const isValid = await validaToken(token);

  if (isValid) {
    const obj = await (0, _mongodb.getEntradas)();
    res.json(obj);
  } else {
    res.status(500).send('Something broke!');
  }
});
app.post('/diario/adiciona', async (req, res) => {
  const token = req.body.token;
  const data = req.body.data;
  const entrada = req.body.entrada;
  console.log(token);
  const isValid = await validaToken(token); // retorna email do user se valido

  if (isValid) {
    const userId = isValid;
    const obj = await (0, _mongodb.addEntrada)(userId, data, entrada);
    res.json(obj);
  } else {
    res.status(500).send('Something broke!');
  }
});

const server = _http.default.createServer(app);

(0, _mongodb.setupBDDriver)(); // eslint-disable-next-line no-console

server.listen(_env.PORTA, () => console.log(`No ar, HTTPS porta ${_env.PORTA}`));