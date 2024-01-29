const sentence = "The quick brown dog jumps over the lazy dog.     ";

console.log(sentence.charCodeAt(10));

const day = "Monday";
const time = "11:24";

console.log(day.concat(", ", time));

console.log(day.endsWith("ey"));

console.log(sentence.includes("d"));

console.log(sentence.indexOf("brown"));

console.log(sentence.indexOf("dog"));
console.log(sentence.lastIndexOf("dog"));

console.log(sentence.replace("dog", "cat"));
console.log(sentence.replaceAll("dog", "cat"));

console.log(sentence.substring(10, 15));
console.log(sentence.length);

console.log(sentence.trim().length);

console.log(sentence.toUpperCase());
console.log(sentence.toLowerCase());
