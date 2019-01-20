const alphabet = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

function init() {
  let index = 0 ;

  document.body.addEventListener("keydown", function(e) {
    const key = e.key
    
    if(alphabet[index] === key){
     index++;
    }
    if (index === alphabet.length) {
      ("Hurray!");
      index = 0;
    }
    else{
      index = 0;
    }
  });
}