let low = 0;
let upp = 101;

let num = Math.floor(Math.random() * 101);
let userInput = Math.floor(Math.random() * (upp - low)) + low;

console.log("Please guess a number between 0 to 100\n");

while (userInput !== num) {

    console.log(`Generate number : ${num}`);
    console.log(`User Input : ${userInput}`);

    if (userInput < num) {
        console.log("Too Low");
        low = userInput + 1;
    }
    else {
        console.log("Too High");
        upp = userInput - 1;
    }

    userInput = Math.floor(Math.random() * (upp - low)) + low;

    console.log("\n");
}

console.log(`Generate number : ${num}`);
console.log(`User Input : ${userInput}\n`);

console.log(`Congratulations 🎉🥳! \nCorrect guess: ${num}`);


