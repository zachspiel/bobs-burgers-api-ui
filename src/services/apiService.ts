import axios from 'axios';

const ROOT_URL = 'https://bobsburgers-api.herokuapp.com';

export async function performGetRequest(endpoint: string, id?: number, options?: string) {
  try {
    let completeEndpoint = `${ROOT_URL}${endpoint.length > 0 ? '/' : ''}${endpoint}`;

    if (id !== undefined) {
      completeEndpoint += `/${id.toString()}`;
    }

    if (options !== undefined) {
      completeEndpoint += `/${options}`;
    }

    const response = await axios.get(completeEndpoint);
    return response.data;
  } catch (error) {
    return [];
  }
}
