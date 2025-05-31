export const getApiData = async (url: string) => {
  const cachedResult = sessionStorage.getItem(url);

  if (cachedResult) {
    return cachedResult;
  }

  const result = await fetch(url)
    .then((res) => res.json())
    .then((jsonData) => JSON.stringify(jsonData, null, 2));

  sessionStorage.setItem(url, result);

  return result;
};
