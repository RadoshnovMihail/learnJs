// class Comment {
//     constructor(text){
//     this.text = text;
//     this.votesQty = 0;        
//     }
//     upvote(){
//         this.votesQty++;
//     }
// }

// const firstComment = new Comment('This is my first comment');

// firstComment instanceof Comment; // true
// firstComment.Object instanceof Object; // 

// class Student {
//     planet = 'Earth'
//     coutnry = 'USA'
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }
//     logAge(){
//         console.log(this.age)
//     }
// }

// const firstStudent = new Student('John', 25);
// const secondStudent = new Student('Jane', 30);

// console.log(firstStudent)
// secondStudent.logAge()


class Student {
    #city = null
    constructor(name, age){
        this.name = name;
        this.age = age; 
    }
   set city(value) {
    const firstLetter = value[0].toUpperCase()
    const fromSecondLetter = value.slice(1).toLowerCase()

    this.#city = `${firstLetter}${fromSecondLetter}`
   }
   get city(){
    return `г. ${this.#city}`
   }
}

const firstStudent = new Student('Вася', 25)

firstStudent.city = 'москва'

console.log(firstStudent.city)



