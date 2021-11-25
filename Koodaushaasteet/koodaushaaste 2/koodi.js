function testi(arr)
{
  arr.sort();
  var pienin = arr.shift();
  var suurin = arr.pop();
  console.log("pienin: " + pienin + " ja suurin: "+ suurin);
}
