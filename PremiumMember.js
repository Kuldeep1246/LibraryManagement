
import { Member } from './Member.js';

// Constructor function for PremiumMember
function PremiumMember(name) {
  Member.call(this, name); 
  this.specialCollectionAccess = true; 
}

// Inherit Member prototype
PremiumMember.prototype = Object.create(Member.prototype);
PremiumMember.prototype.constructor = PremiumMember;

// Override borrowBook method
PremiumMember.prototype.borrowBook = function (book) {
  if (this.borrowedBooks.length >= 5) {
    console.log(`${this.name} has reached the borrowing limit of 5 books.`);
    return;
  }

  // Reuse Member's borrowBook method using call
  Member.prototype.borrowBook.call(this, book);
};

// Export PremiumMember constructor
export { PremiumMember };
