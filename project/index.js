

const numbers = [ 12, 11, 11, 18, 18, 7, 9 ];

let getNum = (num) => {
    let total = 0;
    for(let i=0; i < num.length; i++) {
    total += num[i]
  };
    return Math.floor(total / num.length)
};

getNum(numbers);

