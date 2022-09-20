function prime(number)
factors=0;
  for (let i=1;i<=number;i++){
    if (number%1==0){
      factors++;
      
    }
  }
  if (factors==2){
    return true;
  }
return false;
}
let ans=prime(7);
if(ans==true){
  console.log("prime");

}
else{
  console.log("Not prime");
}