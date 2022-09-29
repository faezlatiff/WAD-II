function doMystery(i) {
  let ans = 0;
  while (i > 0) {
    ans = ans * 10 + i % 10 ;
    i = Math.floor(i / 10);
  }
  return ans;
}
let x = doMystery( 1234 );
