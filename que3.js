const Check = (A, B) => 
{
  return ((A%10==0 && B%10==0) || (A%10==0 || B%10==0))?'true':'false'
};
let Numbers = Check(12,20)
console.log(Numbers);