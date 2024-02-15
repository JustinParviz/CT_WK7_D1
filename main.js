//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
For extra credit, output "Thats a damn cat" 
*/

let dogString = "All dogs are good boys. Dogs named Precious can be annoying but are still good. Dogs named Shadow are usually majestic and cool.\
Sassy is a cat, but Chance is a dog. Can cat people be trusted? I don't know. Also Potato is a great dog name for a lil tiny stubby guy."

let dogNames = ["Fido", "Precious", "Sassy", "Gertrude", "Shadow", "Potato", "Bart"]


function dogs(s, l) {

    for (let name of l) {
        if (s.includes(name)) {
            console.log("Matched dog_name")
        }
        else {
            console.log("No Matches")
        }
    }
};




//============Exercise #2 ============//
/*Write a function that takes in an array and removes every even index with a splice,
and replaces it with the string "even index". For bonus points instead of inserting even index
replace each character with their signature move.*/

let arr = ["Goku", "Vegeta", "Trunks", "Krillin", "Gohan", "Piccolo"]

const removeEvenIndex = (arr) => {
    for (i = 0; i < arr.length; i++) {
        if (i % 2 == 0) {
            arr.splice(i, 1, "even index")
        }
    }   return arr
}



// ========== CODEWARS PROBLEMS ========== //


// https://www.codewars.com/kata/53da3dbb4a5168369a0000fe/train/javascript

function evenOrOdd(number) {
    if (number % 2 == 0) {
      return "Even"
    } else {
      return "Odd"
    }
};


// https://www.codewars.com/kata/53dc54212259ed3d4f00071c/train/javascript

function sum (numbers) {
    
    let sum = 0;
    
    for (let i = 0; i < numbers.length; i++) {
      sum += numbers[i];
    }
    return sum;
};

