interface ICar {
    id: number;
    brand: string;
    price: number;
    year: number;
}

const carServise = {
    getAll:():Promise<ICar[]> => fetch('http://owu.linkpc.net/carsAPI/v1/cars').then(response => response.json()),
    create:(car:ICar):Promise<ICar> => fetch('http://owu.linkpc.net/carsAPI/v1/cars', {
        method:'POST',
        body:JSON.stringify('car'),
        headers:{'Content-type':'aplication/json'}
    }).then(response => response.json()),
    deleteById:(id:number):Promise<Response> => fetch('http://owu.linkpc.net/carsAPI/v1/cars/${}id')
}
class CarRender {
    static run() :void{
        console.log('hello');
    }
}

//CarRender.run()

carServise.getAll().then(resolve => console.log(resolve))
