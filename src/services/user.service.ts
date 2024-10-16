import { URL_RANDOM_USERS_API } from '@utils/consts'
import axios, { AxiosResponse } from 'axios'
import { APIResponse } from './user.types'

export const usersService = {
	getAll: async (page: number): Promise<APIResponse> => {		
		const response: AxiosResponse<APIResponse, Error> = await axios.get(
			URL_RANDOM_USERS_API + `?page=${page}&results=12&seed=abc`
		)
		return response.data
	},
}
