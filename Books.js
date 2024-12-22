//Create a constructor function of Books
function Book(title,author,isAvailable=true){
    this.title=title;
    this.author=author;
    this.isAvailable=isAvailable
}
export {Book}