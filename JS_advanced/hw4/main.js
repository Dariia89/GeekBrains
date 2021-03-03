// let text = `One: 'Hi Mary.' Two: 'Oh, hi.'
//     One: 'How are you doing?'
//     Two: 'I'm doing alright. How about you?'
//     One: 'Not too bad. The weather is great isn't it?'
//     Two: 'Yes. It's absolutely beautiful today.'
//     One: 'I wish it was like this more frequently.'
//     Two: 'Me too.'
//     One: 'So where are you going now?'
//     Two: 'I'm going to meet a friend of mine at the department store'
//     One: 'Going to do a little shopping?'
//     Two: 'Yeah, I have to buy some presents for my parents.'
//     One: 'What's the occasion?'
//     Two: 'It's their anniversary.'
//     One: 'That's great. Well, you better get going. You don't want to be late.'
//     Two: 'I'll see you next time.'
//     One: 'Sure.' Bye.'`

// let newText = text.replace(/'/g, '"');
// console.log(newText);

// let reg1 = /'\B/;
// let reg2 = /\B'/;

// let newText2 = text.replaceAll(/\'\B/g, '"');
// newText2 = text.replaceAll(/\B\'/g, '"');
// console.log(newText2);

let correctName = new RegExp(/[a-zа-яё]{2,13}/ig); // не могу понять, почему каждое нечетное количество букв он считает ошибкой
let correctTel = new RegExp(/\+7\(?[0-9]{3}\)?[0-9]{3}-?[0-9]{4}/g);
let correctEmail = new RegExp(/([a-z0-9_\.-]+)@([a-z0-9_\.-]+)\.([a-z\.]{2,6})/ig);
let userName = document.querySelector("#name");
let email = document.querySelector("#email");
let tel = document.querySelector("#tel");
let btn = document.querySelector("button");

function check(input, correct) {
    input.addEventListener("input", () => {
     if (correct.test(input.value) ) {
        input.classList.add("correct");
        input.classList.remove("wrong");
     }   else {
        input.classList.add("wrong");
        input.classList.remove("correct");
     }
    });
}

check(userName, correctName);
check(email, correctEmail);
check(tel, correctTel);
