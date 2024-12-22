

//Creating an member function

function Member(name){
    this.name=name;
    this.borrowedBooks = [];
}

Member.prototype.borrowBook = function(book){
    if(this.borrowedBooks.length > 3){
        return console.log(this.name+" has reached the borrowing limit")
    }

    if(book.isAvailable){
        book.isAvailable=false;
        this.borrowedBooks.push(book.title);
        console.log(this.name+" borrowed book "+book.title)
    }
    else console.log("book is already borrowed");
}

export {Member};