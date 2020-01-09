const apiUrl = 'https://opendata.rdw.nl/resource/m9d7-ebf2.json?kenteken='

export const retrieveCarDetails = number => fetch(apiUrl + number).then((response: Response) => response.json()).then(response => response).catch(error => error)