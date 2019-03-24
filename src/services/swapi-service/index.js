class SwapiServiceClass {
    constructor(url) {
        this.url = url;
    }
    fetchResource(resource) {
        const promise = new Promise((resolve, reject) => {
            fetch(this.url + resource)
            .then((res) => res.json())
            .then((data)=> resolve(data.results))
            .catch((err) => reject(err))
        })
        return promise;
    }
}
export const SwapiService = new SwapiServiceClass('https://swapi.co/api/');
