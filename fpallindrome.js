function reverse(){
  let string="aman";
  let bag="";
  for(let i=string.length-1;i>=0;i--){
    bag=bag+string[i];
  }
  console.log(bag);
}
reverse();