const user = {
    name: "Arif",
    title: "Developer",
    company: "Programming Hero"
};
// Arif
// Developer at Programming Hero

const getUser = ({ name, title, company }) => (`${name}
${title} at ${company}`)

// console.log(getUser(user));

// _________Task 1__________

const greetUser = (name) => (`Welcome, ${name}`)

// console.log(greetUser("Mahadi"));

// _________Task 2__________

// Mahadi is 21 years old.

const showAge = (name, age) => (`${name} is ${age} years old.`)

// console.log(showAge("Mahadi", 21));

// _________Task 3__________

// Atomic Habits by James Clear

const bookInfo = ({title, author}) => `${title} by ${author}`;

const book = {
    title: "Atomic Habits",
    author: "James Clear"
}

// console.log(bookInfo(book));

// _________Task 4__________

// Rajshahi: 34°C

const weather = (city, temp) => (`${city}: ${temp}°C`)

// console.log(weather("Rajshahi", 34));

// _________Task 5__________

// Mouse costs 850 TK

const product = (name, price) => (`${name} costs ${price} TK`)

// console.log(product("Mouse", 850));

// _________Task 6__________

// Mahadi scored 88 marks.

const examResult = (name, marks) => (`${name} scored ${marks} marks.`)

// console.log(examResult("Mahadi", 88));

// _________Task 7__________

// Mahadi
// Frontend Developer

const profile = ({ name, role }) =>
(`${name}
        ${role}`)


const user1 = {
    name: "Mahadi",
    role: "Frontend Developer"
}
// console.log(profile(user1));

// _________Task 8__________

// Item : Mouse
// Qty  : 2
// Price: 850 TK
// Total: 1700 TK

const invoice = (item, qty, price) => (`    Item    : ${item}
    Qty     : ${qty}
    Price   : ${price}
    Total   : ${price * qty} TK`)


// console.log(invoice("Mouse", 2, 850,));

// _________Task 9__________

// Name : Mahadi
// Role : Frontend Developer
// Skill: JavaScript

const portfolio = (name, role, skill) => (`Name    : ${name}
    Role    : ${role}
    Skill   : ${skill}`)

// console.log(portfolio("Mahadi", "Frontend Developer", "JavaScript"));

// _________Task 10__________

// 🎬 Movie Ticket
// Name : Mahadi
// Movie: Interstellar
// Seat : A12
// Enjoy your movie!

const movieTicket = (name, movie, seat) => (`🎬 Movie Ticket
Name : ${name}
Movie: ${movie}
Seat : ${seat}
Enjoy Your movie!`)

// console.log(movieTicket("Mahadi", "Interstellar", "A12"));

// _________Challenge 1____________

const Student = {
    name: "Nadia",
    roll: 12,
    marks: 95
}

const studentReport = ({ name, roll, marks }) =>
(`        Student: ${name}
        Roll  : ${roll}
        Marks : ${marks}`)

console.log(studentReport(Student));

// _________Challenge 2____________

// Rafi works at Google and earns 120000 TK.
const employee = {
    name: "Rafi",
    company: "Google",
    salary: 120000
}

const employeeInfo = ({ name, company, salary }) => (`${name} works at ${company} and earns ${salary} TK.`)

// console.log(employeeInfo(employee));


// _________Challenge 3____________

// 2 x Keyboard = 3000 TK

const cartItem = (name, qty, price) => (` ${qty} x ${name} = ${qty * price} TK`)

// console.log(cartItem("Keyboard", 2, 1500));

// _________Challenge 4____________

const loginMessage = ({ username, isLoggedIn }) => {
    return isLoggedIn
        ? `Welcome back, ${username}!`
        : `Please login, ${username}.`;
};
// console.log(loginMessage({ username: "Mahadi", isLoggedIn: true }));
// console.log(loginMessage({ username: "Mahadi", isLoggedIn: false }));

// _________Challenge 5____________

const restaurantBill = (customer, items, total) => (`Customer  : ${customer}
Items     : ${items}
Total     : ${total} TK

Thank you!`
)

// console.log(restaurantBill("Mahadi", 5, 1850));


// Template Literal লিখতে কোন চিহ্ন (', ", নাকি অন্য কিছু) ব্যবহার করা হয়?
//     Ans: ``
// ${}-এর ভিতরে কী কী লেখা যায়?
// ans: Peramiter
// Multi-line string কেন Template Literal-এ সহজ?
// Ans: becouse exatra kono code lekha lage na
// + দিয়ে string concatenate করার তুলনায় Template Literal-এর সুবিধা কী?
// Ans: Exatra kono code lekha lage na, code onk short hoy
// Template Literal-এর ভিতরে function call করা যায় কি?
// Ans: jay