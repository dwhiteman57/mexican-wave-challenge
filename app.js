function wave(str){
  let newStr = [];
  str.split("").map((char, i) => {
    if (/[a-z]/.test(char)) {
        newStr.push(str.slice(0, i) + char.toUpperCase() + str.slice(i+1));
    }
  });
  return newStr;
}



console.log(wave('this'))
console.log(wave(' gap '))
