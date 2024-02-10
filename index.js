// use for loops when you know how many times you want the loop to run

for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
}

const gifts = ["Teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
    for (let i= 0; i< gifts.length; i++) {
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
    };
}
wrapGifts(gifts);

const names = ["Guadalupe", "Ollie", "Aki"];
const event = "surprise";

function writeCards(names, event) {
    const thankYouMessages = [];
    for (let i = 0; i < names.length; i++) {
        thankYouMessages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`
        );
    }
    return thankYouMessages;
};

writeCards();

function countDown(startingNumber) {
    let count = startingNumber;
    while (count >= 0) {
    console.log(count);
    count--;
    }
}
