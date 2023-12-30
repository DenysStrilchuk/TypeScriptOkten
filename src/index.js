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
func2(['Dima', 'Vlad', 'Kolia']);
func2(['Oleh', 'Misha', 'Olia']);
func2(['Ira', 'Vasya', 'Ira']);
var NoteBook = /** @class */ (function () {
    function NoteBook(name) {
        this.name = name;
        this._initMain();
    }
    NoteBook.prototype._getTodosFromLS = function () {
        this._todos = JSON.parse(localStorage.getItem(this.name)) || [];
    };
    NoteBook.prototype._setTodosToLS = function () {
        localStorage.setItem(this.name, JSON.stringify(this._todos));
        this._initTodos();
    };
    NoteBook.prototype._initMain = function () {
        this._initForm();
        this._initTodos();
    };
    NoteBook.prototype._initTodos = function () {
        this._getTodosFromLS();
        var todosDiv = document.getElementById('todos');
        todosDiv.innerHTML = '';
        this._todos.forEach(function (todo) {
            var todoDiv = document.createElement('div');
            todoDiv.innerText = "".concat(todo.id, ") ").concat(todo.title);
            todosDiv.appendChild(todoDiv);
        });
    };
    NoteBook.prototype._initForm = function () {
        var _this = this;
        var form = document.forms['form'];
        form.onsubmit = function (e) {
            var _a;
            e.preventDefault();
            var input = e.target['title'];
            var id = ((_a = _this._todos.slice(-1)[0]) === null || _a === void 0 ? void 0 : _a.id) + 1 || 1;
            _this._todos.push({ id: id, title: input.value });
            _this._setTodosToLS();
            form.reset();
        };
    };
    return NoteBook;
}());
new NoteBook('notebook2');
