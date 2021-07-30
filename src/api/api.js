export const _apiBase = 'https://swapi.dev/api/';
export const _imageBase = 'https://starwars-visualguide.com/assets/img';

export const getResource = async (url) => {
    const res = await fetch(`${_apiBase}${url}`);

    if (!res.ok) {
        throw new Error(`Could not fetch ${url}, recieved ${res.status}`)
    }

    let results = await res.json()
    for(let result in results){
        // console.log(result)

        if(results[result] instanceof Object){
            // console.log(results[result])
            return results[result];
        }
    }
    // return await res.json();
};

// let x = await getAllObjects('people');
export async function getAllObjects(category){
    const res = await getResource(`${category}/`);
    // console.log(res);
    return res;
};


// console.log(x)
// export const getAllPeople = async () => {
//     const res = await getResource(`people/`);
//     return res.results.map(_transformPerson);
// };
// export const getAllPlanets = async () => {
//     const res = await getResource(`planets/`);
//     return res.results.map(_transformPlanet);
// };
//
// export const getAllStarships = async () => {
//     const res = await getResource(`starships/`);
//     return res.results.map(_transformStarship);
// };

// console.log(category)

//
// export const getPlanet = async (id) => {
//     const planet = await getResource(`planets/${id}`);
//     return _transformPlanet(planet);
// };
//
//
// export const getStarship = async (id) => {
//     const starship = await getResource(`starships/${id}`);
//     return _transformStarship(starship);
// };
// export const getPerson = async (id) => {
//     const person = await getResource(`people/${id}`);
//     return _transformPerson(person);
// };

export const getPersonalInformation = async(category, id) =>{
    const person = await getResource(`${category}/${id}`);
    return _transformPerson(person);
};

export const getPersonImage = (id) => {
    return `${_imageBase}/characters/${id}.jpg`
};

export const getStarshipImage = (id) => {
    return `${_imageBase}/starships/${id}.jpg`
};

export const getPlanetImage = (id) => {
    return `${_imageBase}/planets/${id}.jpg`
};

// export const getObjectsImg = (categoryid) =>{
//
// }





export const _extractId = (item) => {
    const idRegExp = /\/([0-9]*)\/$/;
    return item.url.match(idRegExp)[1];
};

export const _transformPlanet = (planet) => {
    return {
        id: _extractId(planet),
        name: planet.name,
        population: planet.population,
        rotationPeriod: planet.rotation_period,
        diameter: planet.diameter
    }
};

export const _transformPerson = (person) => {
    return {
        id: _extractId(person),
        name: person.name,
        gender: person.gender,
        birthYear: person.birth_year,
        eyeColor: person.eye_color
    }
};

export const _transformStarship = (starship) => {
    return {
        id: _extractId(starship),
        name: starship.name,
        model: starship.model,
        manufacturer: starship.manufacturer,
        costInCredits: starship.cost_in_credits,
        length: starship.length,
        crew: starship.crew,
        passengers: starship.passengers,
        cargoCapacity: starship.cargo_capacity
    }
};
