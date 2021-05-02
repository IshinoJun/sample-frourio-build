import aspida from '@aspida/axios'
import { AxiosRequestConfig } from 'axios'
import api from '~/server/api/$api'
import axios from 'axios'

const overrideConfig: AxiosRequestConfig = {
  headers: {
    'Access-Control-Allow-Origin': 'https://sample-frourio-build.herokuapp.com',
    'Content-Type': 'application/json'
  }
}

export const apiClient = api(aspida(axios, overrideConfig))
