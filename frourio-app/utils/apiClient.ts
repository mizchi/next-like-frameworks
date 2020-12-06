import aspida from '@aspida/fetch'
import api from '~/server/api/$api'

export const apiClient = api(aspida())
