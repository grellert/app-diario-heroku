/* eslint-disable no-console */
// verifica se todas as variáveis de ambiente estão definidas
import path from 'path'
import dotenv from 'dotenv'

const arquivoPontoEnv = path.join(__dirname, '../.env')
dotenv.config({ path: arquivoPontoEnv })

let comErro = false


if (process.env.MONGO_URL === undefined) {
  console.log('Variável MONGO_URL não definida! Defina no arquivo servidor/.env')
  comErro = true
}

if (process.env.GOOGLE_CLIENT_ID === undefined) {
  console.log('Variável GOOGLE_CLIENT_ID não definida! Defina no arquivo servidor/.env')
  console.log('Para obter uma chave acesse https://console.developers.google.com/apis/credentials')
  comErro = true
}

if (comErro) {
  process.exit(1)
}
// process.env.PORT vem do Heroku
const PORTA = process.env.PORT || 3000
const MONGO_URL = process.env.MONGO_URL
const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID
export { PORTA, MONGO_URL, GOOGLE_CLIENT_ID}
