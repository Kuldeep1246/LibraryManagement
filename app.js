import { Book } from './Books.js';
import { Member } from './Member.js';
import { PremiumMember } from './PrimiumMember.js';

// Create book objects
const book1 = new Book('1920', 'George Orwell');
const book2 = new Book('Bigil', 'Harper Lee');
const book3 = new Book('RRR', 'SS Raja Moli');
const book4 = new Book('The Catcher', 'J.D. Salinger');
const book5 = new Book('KKKKG', 'Herman ');
const book6 = new Book('War and Peace', 'Leo Tolstoy');

// Create regular and premium members
const regularMember = new Member('Alice');
const premiumMember = new PremiumMember('Bob');

// Borrow books using regular member
regularMember.borrowBook(book1);
regularMember.borrowBook(book2);
regularMember.borrowBook(book3);
regularMember.borrowBook(book4); 

console.log(regularMember.borrowedBooks); 

// Borrow books using premium member
premiumMember.borrowBook(book4); 
premiumMember.borrowBook(book5);
premiumMember.borrowBook(book6);
premiumMember.borrowBook(book1);
premiumMember.borrowBook(book2);
premiumMember.borrowBook(book3); 

console.log(premiumMember.borrowedBooks); 

// Bind borrowBook method for a premium member
const borrowBound = premiumMember.borrowBook.bind(premiumMember);
borrowBound(book4); // Book already borrowed

// Test special collection access
console.log(`${premiumMember.name} has special collection access: ${premiumMember.specialCollectionAccess}`);
