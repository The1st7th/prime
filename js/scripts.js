
function prime(n) {
  var array = [];
  var primes =[2]

  for (i = 0; i < n ; i++){
    array[i] = true;
  }

  for (i=3; i < n; i = i+2){
    for (j = i * i; j < n; j = j + i * 2){
      array[j]=false;
    }
  }
for (i = 3; i < n ; i = i +2){
  if (array[i]){
    primes.push(i);
  }
}
$("p").text(primes);
}

$(document).ready(function(){
  $("#validation").click(function(){
var n = $("textarea").val();
prime(n);

});
});
