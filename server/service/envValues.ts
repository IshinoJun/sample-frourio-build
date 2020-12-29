import dotenv from 'dotenv'

dotenv.config()

const JWT_SECRET = process.env.JWT_SECRET ?? ''
const USER_ID = process.env.USER_ID ?? ''
const USER_PASS = process.env.USER_PASS ?? ''
const SERVER_PORT = process.env.PORT ?? process.env.SERVER_PORT ?? '8080'
const SERVER_IP = process.env.SERVER_IP ?? ''
const BASE_PATH = process.env.BASE_PATH ?? ''
const API_ORIGIN = process.env.API_ORIGIN ?? ''

export {
  JWT_SECRET,
  USER_ID,
  USER_PASS,
  SERVER_PORT,
  SERVER_IP,
  BASE_PATH,
  API_ORIGIN
}
