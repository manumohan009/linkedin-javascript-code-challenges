// Using class

// class User {
//   constructor(email, name) {
//     this.email = email;
//     this.name = name;
//   }

//   login() {
//     this.status = true;
//     console.log(this.name + " is logged in");
//   }

//   logout() {
//     this.status = false;
//     console.log(this.name + " is logged out");
//   }
// }

// class Admin extends User {
//   deleteUser(u) {
//     users = users.filter((user) => {
//       return user.email != u.email;
//     });
//   }
// }




// Using prototypal inheritance

function User(email, name){
    this.email = email;
    this.name = name;
    this.status = false;
}

User.prototype.login = function(){
    this.status = true;
    console.log(this.name + ' is logged in')
}

User.prototype.logout = function(){
    this.status = false;
    console.log(this.name + ' is logged out')

}

function Admin(...args){
    User.apply(this, args) // The apply() method calls a function with a given this value, and arguments provided as an array
    this.role = 'Super admin'
}

Admin.prototype = Object.create(User.prototype)
Admin.prototype.deleteUser = function(u){
    users = users.filter(user=>{
       return  user.email != u.email
    })
}

// creating instances

const userOne = new User("manu@gmail.com", "Manu M");
const userTwo = new User("amit@gmail.com", "Amit T");
const admin = new Admin("thanima@gmail.com", "Thanima");

userOne.login();
admin.login();

let users = [userOne, userTwo, admin];
console.log(users);
admin.deleteUser(users[0]);
console.log(users);
