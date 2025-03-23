class Comment {
    constructor(text) {
        this.text = text
        this.votesQty = 0
    }
    upvote() {
        this.votesQty += 1
    }
}


const firstComment = new Comment('First comment');

console.log(firstComment);


const a = 'abc';

function sum (word){
    console.log(this);
}

sum.bind(a);



