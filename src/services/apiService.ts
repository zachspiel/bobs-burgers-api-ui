export const ROOT_URL = "https://bobsburgers-api.herokuapp.com";

export async function performGetRequest(endpoint: string, id?: number, options?: string) {
  try {
    let completeEndpoint = `${ROOT_URL}${endpoint.length > 0 ? "/" : ""}${endpoint}`;

    if (id !== undefined) {
      completeEndpoint += `/${id.toString()}`;
    }

    if (options !== undefined) {
      completeEndpoint += `/${options}`;
    }

    const response = await fetch(completeEndpoint);
    return await response.json();
  } catch (error) {
    return [];
  }
}
