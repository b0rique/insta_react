 export default class InstaService {
    constructor() {
            this._apiBase = "http://localhost:3000/"
    }

    getResource =  async(url) => {
    let res = await fetch(`${this._apiBase}${url}`);
        
        if(!res.ok) {
            throw new Error(`Could not fetch ${url}, received ${res.status}`)
        }
 
        return res.json();
    }

    getAllPosts = async () => {
    let res = await this.getResource('posts/');
    return res;
    }

    getAllUsers = async () => {
    let res = await this.getResource('users/');
    return res;
      }
    
}