// const some = (name:string): string => {
//     return ("hi " + name);
// }
// console.log(some('bro'));
//
// const count = (age:number) => {
//     return (age + 2);
// }
// console.log(count(8));
//
// const someNames = (names:string[]) => {
//     return names[0] + names[1];
// }
// console.log(someNames(['olia', 'max']));
//
// let a:number = 6;
// console.log(a);
// a = 12;
// let b:string = a + '';
// console.log(b);
//
// interface IUser {
//     name: string,
//     age: number,
//     status: boolean
// }
//
// const user: IUser = {
//     name: 'Max',
//     age: 23,
//     status:true
// }
//
// const user2: IUser = {
//     name: 'John',
//     age: 36,
//     status:false
// }
//
// console.log(user);
// console.log(user2);
//
// interface ICourier <T> {
//     name: string,
//     age: number,
//     status: boolean,
//     data: T
// }
//
// const courier1: ICourier<number[]> = {
//     name: 'Jorik',
//     age: 18,
//     status: true,
//     data: [21,16,48,56]
// }
// console.log(courier1);
var func = function (name) {
    return name.toUpperCase();
};
var upper = func("hello");
console.log(upper);
var func2 = function (names) {
};
var io = func2(['Dima', 'Vlad', 'Kolia']);
func2(['Oleh', 'Misha', 'Olia']);
func2(['Ira', 'Vasya', 'Ira']);
// interface IUser {
//    name: string,
//    age: number,
//    house: number
// }
//
// const user:IUser = {
//    name: 'Max',
//    age: 15,
//    house: 20
// }
//
// const user2:IUser = {
//    name: 'Oleh',
//    age: 15,
//    house: 45
// }
// interface IUser<T> {
//    name: string,
//    age: number,
//    house: number,
//    data:T
// }
//
// const user1:IUser<number[]> = {
//    name:'Vaasya',
//    age: 15,
//    house: 54,
//    data: [54,58,12]
// }
//
// const user2:IUser<string> = {
//    name:'Vaasya',
//    age: 15,
//    house: 54,
//    data: '45'
// }
// interface IUser {
//    name?: string,
//    age?: number,
//    house?: number
// }
//
// const user:IUser = {
//
// }
// interface IUser {
//    name: string,
//    age: number,
//    house?: number
// }
//
// const user:IUser = {
//    name:'Vaasya',
//    age: 15,
//    house: 44
// }
// interface IUser {
//    name: string,
//    age: number,
//    house?: number
// }
//
// const user:Partial<IUser> = {
//
// }
// interface IUser {
//    name: string,
//    age: number,
//    house?: number
// }
//
// const user:Partial<IUser> = {
//    name:'Vaasya',
//    age: 15,
// }
// class User {
//    name: string;
//    age: number
//
//    constructor(name: string, age: number) {
//       this.name = name;
//       this.age = age;
//    }
// }
//
// const user = new User('Max', 15);
//
// console.log(user);
// class User {
//    private name: string;
//    private age: number
//
//    constructor(name: string, age: number) {
//       this.name = name;
//       this.age = age;
//    }
//    getName():string{
//       return this.name
//    }
// }
//
// const user = new User('Max', 15);
//
// console.log(user.getName());
// class User {
//
//    constructor(private name: string, private age: number) {
//    }
//    getName():string{
//       return this.name
//    }
// }
//
// const user = new User('Max', 15);
//
// console.log(user.getName());
// class User {
//
//    constructor(protected name: string, protected age: number) {
//    }
//    getName():string{
//       return this.name
//    }
// }
//
// const user = new User('Max', 15);
//
// console.log(user.getName());
// class User {
//
//    constructor(private name: string, private age: number) {
//    }
//    getName():string{
//       return this.name
//    }
// }
//
// const user = new User('Max', 15);
//
// console.log(user.getName());
//
// const users:User[] = [
//    new User('Max', 15),
//    new User('Kokos', 24)
// ]
// interface IElectric {
//    enginePower:number;
//
//    getLedStatus():boolean;
// }
//
// class Car implements IElectric{
//    enginePower: number;
//    constructor(private seats:number, private brand:string, private year:number, enginePower: number = 0) {
//    this.enginePower = enginePower
//    }
//
//
//     getLedStatus(): boolean {
//         return true
//     }
//
//    start():void{
//       console.log('Rrrrrrr');
//    }
//
//    getInfo():void{
//       console.log(`Brand: ${this.brand} -- seats:${this.seats} -- year:${this.year}`)
//    }
// }
//
//
// let car = new Car(5, 'BMW', 2000);
//
// car.getInfo()
// car.start()
// class ElectroCar extends Car {
//
//    constructor(seats:number, brand:string, year:number, private enginePower:number) {
//       super(seats, brand, year);
//    }
//
// }
// abstract class Shape {
//     abstract perimeter():number;
//
//     abstract area():number;
// }
//
// class Triangle extends Shape {
//
//     constructor(private a:number, private b:number, private c:number) {
//         super();
//     }
//     perimeter(): number {
//         return this.a * this.b / this.c;
//     }
//
//     area(): number {
//         return this.c/this.a + this.b;
//     }
// }
//
// class Rectangle extends Shape {
//
//     constructor(private a:number, private b:number) {
//         super();
//     }
//     perimeter(): number {
//         return this.a + this.b * 2
//     }
//
//     area(): number {
//         return this.a * this.b
//     }
// }
//
// const shapes:Shape[] = [
//     new Triangle(6,5,8),
//     new Rectangle(5,7),
//     new Triangle(4,5,9)
// ];
//
// for (let shape of shapes) {
//     console.log(shape.constructor['name']);
//     console.log(shape.area());
//     console.log(shape.perimeter());
// }
