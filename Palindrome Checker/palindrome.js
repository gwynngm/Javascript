function ispalindrome(word) {
  lengt = word.length
  for (i = 1; i <= (lengt-(i+1)); i++) {
    if(word[i] == word[lengt-(i+1)]){
      continue;
          }
    else if (word[i] != word[lengt-(i+1)]){
      return "False";
      break;
          }
    }
  return "True";
 }

console.log(ispalindrome())
