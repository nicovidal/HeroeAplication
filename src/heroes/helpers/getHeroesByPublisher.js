import {heroes} from '../data/heroes';


export const getHeroresByPublisher=(publisher)=>{


    const validPublisher =['DC Comics','Marvel Comics'];
    //is valid if the publisher exist
    if(!validPublisher.includes(publisher)){
        throw new Error (`${publisher} is not valid publisher`)
    };

    return heroes.filter(heroe=>heroe.publisher===publisher);
}