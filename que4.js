const First_Digit = (n) => {
    while (n >= 10)
             n /= 10;
         return Math.floor(n);
};

let Numbers = First_Digit(4567)
 console.log(Numbers);