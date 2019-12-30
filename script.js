var database = [
  {
    username: "ceko",
    password: "secret"
  },
  {
    username: "fero",
    password: "secret1"
  },
  {
    username: "muho",
    password: "secret2"
  }
];

var newsFeed = [
  {
    username: "Jenna",
    timeline: "Coding is so fun"
  },
  {
    username: "Ridvan",
    timeline: "JS is the best language"
  },
  {
    username: "Miley",
    timeline: "I am the cutest"
  }
];




function isUserValid(username, password){
  for (var i=0; i < database.length; i++) {
    if (database[i].username === username && database[i].password === password) {
      return true;
    }
    }

    return false;
  }


function signIn(username, password) {
  
  
  if (isUserValid(username, password)) {
  } else {
    alert("Sorry, wrong username and password");
  }
}

var userNamePrompt = prompt("What is your username?");
var passwordPrompt = prompt("What is your password?");

signIn(userNamePrompt, passwordPrompt);