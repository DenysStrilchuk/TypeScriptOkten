var carServise = {
    getAll: function () { return fetch('http://owu.linkpc.net/carsAPI/v1/cars').then(function (response) { return response.json(); }); },
    create: function (car) { return fetch('http://owu.linkpc.net/carsAPI/v1/cars', {
        method: 'POST',
        body: JSON.stringify('car'),
        headers: { 'Content-type': 'aplication/json' }
    }).then(function (response) { return response.json(); }); },
    deleteById: function (id) { return fetch('http://owu.linkpc.net/carsAPI/v1/cars/${}id'); }
};
var CarRender = /** @class */ (function () {
    function CarRender() {
    }
    CarRender.run = function () {
        console.log('hello');
    };
    return CarRender;
}());
//CarRender.run()
carServise.getAll().then(function (resolve) { return console.log(resolve); });
