// Iteration 1: Names and Input
let hacker1 = "Lee"
let hacker2 = "Justin"
let spacedName = ''
let reverseName = ''

console.log(`The driver's name is ${hacker1}.`)
console.log(`The navigator's name is ${hacker2}.`)

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters.`)
}

// Iteration 3: Loops
for (x = 0; x < hacker2.length; x++) {
    spaceName = hacker2[x].toUpperCase() + " ";
    spacedName += spaceName;
}
console.log(spacedName);

for (x = hacker2.length - 1; x >= 0; x--) {
    reverseName += hacker2[x];
}
console.log(reverseName);

if (hacker1[0] < hacker2[0]) {
    console.log("The driver's name goes first")
} else if (hacker1[0] > hacker2[0]) {
    console.log("Yo, the navigator goes first, definitely.")
} else {
    console.log("What?! You both have the same name?")
}


let longText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vehicula vestibulum libero. Curabitur pellentesque eros purus, id cursus dui posuere ut. In hac habitasse platea dictumst. Suspendisse arcu risus, consectetur vitae malesuada in, porttitor in risus. Nunc vel est ante. Suspendisse consectetur, erat eu hendrerit dapibus, odio mauris sagittis nisi, non consequat dui lorem id arcu. Pellentesque eleifend eu leo porttitor dapibus. Duis ut odio augue. Aliquam viverra nisl id enim rutrum, in tempor quam pellentesque. Proin in mi efficitur, porta mauris ut, aliquam sapien. In vehicula diam in mi sodales vulputate. Nam pharetra lacus a dolor eleifend sollicitudin. Cras malesuada, libero vitae eleifend porttitor, eros urna egestas nisl, ut bibendum dolor lorem id felis. Fusce dictum sollicitudin augue sed hendrerit. Fusce quis aliquam arcu. Vivamus et quam maximus, sagittis sapien venenatis, tempus purus. In leo tellus, molestie et volutpat vel, ornare eget risus. Suspendisse potenti. Mauris id nulla enim. Nulla fermentum odio mattis mi fringilla dignissim. Donec facilisis ligula tortor. Curabitur nec suscipit urna. Proin pharetra, dolor eleifend feugiat efficitur, tortor dolor porta urna, a blandit lacus ligula vel arcu. Donec in lacus quam. Sed a ante a neque venenatis ornare eu et erat. Nunc a dui mollis odio ultrices placerat. Maecenas rhoncus commodo pellentesque. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean nec ligula in augue semper tempus non in nisl. Fusce quis sodales neque."

let wordCount = 0;
let etCount = 0;

function print(x) {
    console.log(x);
}
//prints out the number of words
for (x = 0; x < longText.length; x++) {
    if (longText[x] === ' ') {
        wordCount += 1;
    }
}

for (x = 0; x < longText.length; x++) {
    if (longText[x] === ' ' && longText[x + 1] === 'e') {
        if (longText[x + 2] === 't' && longText[x + 3] === ' ') {
            etCount += 1;
        }
    }
}


print(wordCount);
print(etCount)
