// 1 - masala
{
  console.log(`1 - masala`);
  function findShort(s) {
    let array = s.split(" ");
    let kaltaSoz = array[0];
    for (let i = 0; i < array.length; i++) {
      const element = array[i];
      if (kaltaSoz.length > element.length) {
        kaltaSoz = element;
      }
    }
    return kaltaSoz.length;
  }
  console.log(findShort("salom dun ou fdfdfdf"));
}
// 2 - masala
{
  function descendingOrder(n) {
    //...
    let array = n.toString().split();
    array.sort();
    array.reverse;
  }
}
//3 - masala
{
  console.log(`3 - masala`);
  function accum(s) {
    // your code
    let array = s.split("");
    n = array.length;
    d = 1;
    natija = "";

    for (let i = 0; i < array.length; i++) {
      const element = array[i];
      if (d <= n) {
        natija += element.repeat(d) + "-";
        d++;
      }
    }

    return natija.slice(0, natija.length - 1);
  }
  console.log(accum(`qwer`));
}
// 4- masala
{
  console.log(`4 - masala`);
  var summation = function (num) {
    // Code here
    yigindi = 0;
    for (let i = 1; i <= num; i++) {
      yigindi += i;
    }
    return yigindi;
  };
  console.log(summation(8));
}
// 5 - masala
{
  console.log(`5 - masala`);
  function noSpace(x) {
    let i = 0;
    for (let i = 0; i < 200; i++) {
      return x.replace(" ", "");
    }
  }
  console.log(noSpace("33 44 66 88"));
}
