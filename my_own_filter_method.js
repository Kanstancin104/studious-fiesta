let words = ["spray", "limit", "elite", "exuberant", "destruction", "present"];
let result = [];

function filter(words) {
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > 6) {
      result.push(words[i]);
    }
  }
  console.log(result);
}

filter(words);
