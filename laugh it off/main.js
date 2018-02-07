/*
 * Programming Quiz: Laugh it Off 1 (5-1)
 */

// your code goes here
function laugh() {
  return "hahahahahahahahahaha!";
}
console.log(laugh());




/*
 * Programming Quiz: Laugh it Off 2 (5-2)
 *
 * Write a function called `laugh` with a parameter named `num` that represents the number of "ha"s to return.
 *
 * Note:
 *  - make sure your the final character is an exclamation mark ("!")
 *  - make sure that your function produces the correct results when it is called multiple times
 */

function laugh(num){
    var ha = "";
    for(var i=0;i<=num-1;i++){
        ha += "ha";
    }
    return ha + "!";
}

console.log(laugh(3))
