"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GOOGLE_CLIENT_ID = exports.MONGO_URL = exports.PORTA = void 0;

var _path = _interopRequireDefault(require("path"));

var _dotenv = _interopRequireDefault(require("dotenv"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable no-console */
// verifica se todas as variáveis de ambiente estão definidas
const arquivoPontoEnv = _path.default.join(__dirname, '../.env');

_dotenv.default.config({
  path: arquivoPontoEnv
});

let comErro = false;

if (process.env.PORTA === undefined) {
  console.log('Variável PORTA não definida!. Defina no arquivo servidor/.env');
  console.log('Exemplo: PORTA=3000');
  comErro = true;
}

if (process.env.MONGO_URL === undefined) {
  console.log('Variável MONGO_URL não definida! Defina no arquivo servidor/.env');
  comErro = true;
}

if (process.env.GOOGLE_CLIENT_ID === undefined) {
  console.log('Variável GOOGLE_CLIENT_ID não definida! Defina no arquivo servidor/.env');
  console.log('Para obter uma chave acesse https://console.developers.google.com/apis/credentials');
  comErro = true;
}

if (comErro) {
  process.exit(1);
}

const PORTA = parseInt(process.env.PORTA);
exports.PORTA = PORTA;
const MONGO_URL = process.env.MONGO_URL;
exports.MONGO_URL = MONGO_URL;
const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
exports.GOOGLE_CLIENT_ID = GOOGLE_CLIENT_ID;