function func1() {
  const collback = () => {
    console.log(x);
    console.log(y);
  };

  // setTimeout(()=>{
  //     console.log(x);
  //     console.log(y);
  // },3000);

  var x = 2;
  let y = 12;

  return collback;
}
const r = func1();
r();
