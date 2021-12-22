import axios from 'axios';

const ROOT_URL = 'https://bobsburgers-api.herokuapp.com';

export async function performGetRequest(endpoint: string, id?: number) {
  try {
    const response = await axios.get(
      `${ROOT_URL}${endpoint.length > 0 ? '/' : ''}${endpoint}/${id?.toString() ?? ''}`
    );
    return response.data;
  } catch (error) {
    return [];
  }
}
