function prime(num){
  let counter=0
  for (let i=1;i<=num;i++){
    if (num%1==0){
      counter++;
    }
  }
  if (counter==2){
    return true
  }
  return false
}

let ans=prime(7);
if(ans==true){
  console.log("prime");
}
else{
  console.log("Not prime")
}