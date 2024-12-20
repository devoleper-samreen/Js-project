//array of random jokes
const jokes = [
    "Why dont scientists trust atoms? Because they make up everything!",
    "What do you call fake spaghetti? An impasta!",
    "Why did the scarecrow win an award? Because he was outstanding in his field!",
    "Why dont skeletons fight each other? They dont have the guts.",
    "What do you get when you cross a snowman with a vampire? Frostbite.",
    "Why couldnt the bicycle stand up by itself? It was two-tired!",
    "What do you call cheese that isn't yours? Nacho cheese!",
    "Why couldnt the leopard play hide and seek? Because he was always spotted.",
    "How does a penguin build its house? Igloos it together!",
    "Why did the math book look sad? Because it had too many problems.",
    "What do you call a boomerang that doesnt come back? A stick.",
    "Why do bees have sticky hair? Because they use honeycombs.",
    "Why was the computer cold? It left its Windows open!",
    "Why are ghosts bad liars? Because they are too transparent.",
    "Why dont programmers like nature? It has too many bugs.",
    "What do you call a belt made out of watches? A waist of time.",
    "Why couldnt the astronaut book a hotel on the moon? It was full.",
    "Why did the golfer bring an extra pair of pants? In case he got a hole in one.",
    "Why cant your nose be 12 inches long? Because then it would be a foot.",
    "Why did the stadium get hot after the game? All the fans left!"
];

//generate random jokes
let randomIdx = Math.floor(Math.random() * jokes.length);
let randomJoke = jokes[randomIdx];

console.log(randomJoke);
