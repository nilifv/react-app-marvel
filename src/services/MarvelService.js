

class MarvelService {
  getResource = async (url) => {
    let res = await fetch(url);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, status: ${res.status}`)
    }

    return await res.join();
  }

  getAllCharacters = () => {
    return this.getResource('https://gateway.marvel.com:443/v1/public/characters?apikey=8161e3eab46533a45713548946b65be3');
  }
} 