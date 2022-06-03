const Sum = (A, B, C) => 
{
 return A+B+C;
};

const Average = (A, B, C) => 
{
 let total=Sum(A,B,C);
 return (total*100)/300;
};
let Numbers = Sum(2,3,4)
console.log(Numbers);