// _________Task 1___________
function sayHello(name = "Guest") {
    return `Hello ${name}`
}
// console.log(sayHello());
// console.log(sayHello("Mahadi"));

// _________Task 2___________

function multiply(a, b = 2) {
    return a * b
}
// console.log(multiply(5));
// console.log(multiply(5, 4));

// _________Task 3___________

function makeTea(cups = 1) {
    return `Making ${cups} cup(s) of tea.`
}

// console.log(makeTea());
// console.log(makeTea(2));

// _________Task 4___________
function getDiscount(price, discount = 0.05) {
    let total = price - (price * discount)
    return total
}
console.log(getDiscount(1000));

// _________Task 5___________

function createUser(name, role = "User") {
    return { name, role }
}
// console.log(createUser("Mahadi"));

// _________Task 6___________

function calculateArea(length, width = length) {
    return length * width
}
// console.log(calculateArea(5));
// console.log(calculateArea(5, 15));

// _________Task 7___________
function power(base, exponent = 2) {
    return base ** exponent;
}
// console.log(power(45));

// _________Task 8___________

function sendEmail(to, subject = "No Subject") {
    return `Email sent to ${to} with  Subject "${subject}"`
}
// console.log(sendEmail("mahadi"));

// _________Task 9___________

function calculateSalary(basic, bonus = 0) {
    return basic + bonus;
}
// console.log(calculateSalary(56561, 5000));

// _________Task 10___________


// const createOrder = ({ product, quantity = 1, shipping = 60 }) => ({ product, quantity, shipping })

// console.log(createOrder({ product: "Mouse" }));

function createOrder(product, quantity = 1, shipping = 60) {
    return {
        product, quantity, shipping
    }
}
// console.log(createOrder("Mouse"));
