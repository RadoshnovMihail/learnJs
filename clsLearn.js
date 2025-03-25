class User {
    constructor(name, profession){
        this.name = name
        this.profession = profession
    }

}

const firstUser = new User('Alex','doctor')

console.log(firstUser)

class UserUpdated extends User {
    accNum(){
        return this.reduce((acc, el) => acc + el)
    }
}

const arr = new User