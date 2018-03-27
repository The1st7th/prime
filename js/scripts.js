
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
$("#prime").text(primes);
}

function factorial(n){
  console.log("entering function");
  var output = 1;
  for ( var i = 1 ; i <= 5 ;i = i+1 ){
    console.log("entering for");
    output = output * i;
  }
  console.log(output);
}

  function factorial1(n){
    console.log("entering function");
    var output = n;
    for ( var i = n-1 ; i >= 1 ;i = i-1 ){
      console.log("entering for");
      output = output * i;
    }
    console.log(output);
    $("#factorial").text(output);

}
function wordpuzzle(n){

console.log(n.length);
var array =["a","e","i","o","u","y"];
var newarray=[" "];
var pushed = false;
for (var i=0; i < n.length; i++){
  pushed = false;
  for (var j=0; j < array.length; j++){
    if(array[j] == n[i]){
      newarray.push("-");
      pushed = true;
    }
}
if (pushed == false){
  console.log(pushed);
newarray.push(n[i]);

}
}

console.log(newarray.join(""));
var array2 = newarray.join("")
$("#wordpuzzle").text(array2);
}

function palindrom (n){

var string = n.split(' ').join('');
console.log(string);
for (var i = 0; i < string.length; i++){
    if(string[i] != string[string.length -1-i]){

      return false;

    }


}
return true;
}

$(document).ready(function(){
  $("#validation").click(function(){
var n = $("textarea").val();
prime(n);
factorial1(n);
wordpuzzle(n);
var check = palindrom(n);
console.log(check);
if (check == true ){
  $("#palindrome").text("it is a palindrome");
}
if (check == false){
  $("#palindrome").text("it is not a palindrome");
}



});
});
