interface ICar {
    id?: number;
    brand: string;
    price: number;
    year: number;
}

const carService = {
    getAll:():Promise<ICar[]> => fetch('http://owu.linkpc.net/carsAPI/v1/cars').then(response => response.json()),
    create:(car:ICar):Promise<ICar> => fetch('http://owu.linkpc.net/carsAPI/v1/cars', {
        method:'POST',
        body:JSON.stringify(car),
        headers:{'Content-type':'application/json'}
    }).then(response => response.json()),
    deleteById:(id:number):Promise<Response> => fetch(`http://owu.linkpc.net/carsAPI/v1/cars/${id}`,{
    method:'DELETE'
})

}
class CarRender {
    static run() :void{
        this._initForm()
        this._carsShow()
    }

    private static async _carsShow():Promise<void>{
        const carDiv = document.querySelector('#carsDiv')  as HTMLDivElement;
        carDiv.innerText = ''
        const cars = await carService.getAll();
        cars.forEach(car  => {
            const {id, brand, price, year} = car;
            const itemDiv = document.createElement('div')
            itemDiv.innerText = `${id} ${brand} -- ${price} -- ${year}`
            const btn = document.createElement('button')
            btn.innerText = 'delete'
            btn.onclick = async ():Promise<void> => {
                await carService.deleteById(id)
                await this._carsShow()
            }
            itemDiv.appendChild(btn)
            carDiv.appendChild(itemDiv)
        })
    }
    private static _initForm(): void {
        const form = document.forms.namedItem('form') as HTMLFormElement;
        form.onsubmit = async (e: Event): Promise<void> => {
            e.preventDefault();
            const brand = (document.getElementById('brand') as HTMLInputElement).value;
            const price = (document.getElementById('price') as HTMLInputElement).value;
            const year = (document.getElementById('year') as HTMLInputElement).value;
            await carService.create({ brand, price: +price, year: +year });
            await this._carsShow();
            form.reset();
        };
    }

}

CarRender.run()

//carService.getAll().then(resolve => console.log(resolve))

//carService.create({brand:'AstonMartin', price:10500,year:2020}).then(response => console.log(response))

//carService.deleteById(10087)
