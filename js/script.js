  let loggedIn = false
  authenticate()

  let articles = []

  function newArticle () {
    let articleTitle = document.forms["newArticle"]["newArticleTitle"].value;
    let articleBody = document.forms["newArticle"]["newArticleBody"].value;
          const node=document.createElement("h4")
          const node2=document.createElement("p")
          
          //const textnode= document.createTextNode(`${author.name}` + `. Email: ` + `${author.email}`);
          const textnode= document.createTextNode(`${articleTitle}`);
          const bodynode= document.createTextNode(`${articleBody}`);
          //const node=document.createElement("p")
          //const textnode= document.createTextNode(`${posts.body}`);
          node.appendChild(textnode);
          node2.appendChild(bodynode);
          document.getElementById("mainBody").prepend(node2);
          document.getElementById("mainBody").prepend(node);
          
  }

  const url = "https://jsonplaceholder.typicode.com/posts"

  fetch(url)
      .then((response)=>{
          return response.json();
      })

      .then((data)=>{
          let posts =data;
          posts.map(function(posts){
          //All html elements are considered to be nodes
          const node=document.createElement("h4")
          const node2=document.createElement("p")
          
          //const textnode= document.createTextNode(`${author.name}` + `. Email: ` + `${author.email}`);
          const textnode= document.createTextNode(`${posts.title}`);
          const bodynode= document.createTextNode(`${posts.body}`);
          //const node=document.createElement("p")
          //const textnode= document.createTextNode(`${posts.body}`);
          node.appendChild(textnode);
          node2.appendChild(bodynode);
          document.getElementById("mainBody").appendChild(node);
          document.getElementById("mainBody").appendChild(node2);
          });
      })

      .catch(function(error){
          console.log(error);
      });
  

  function authenticate () {
    let x = document.forms["logIn"]["userName"].value;
    let y = document.forms["logIn"]["passWord"].value;
    loggedIn = (x == "admin" && y == "password");
    
    if (loggedIn) {
        document.getElementById("loginSection").innerHTML = "Welcome!!!!";
        document.getElementById("loginBody").style.display = "none";
        document.getElementById("loginInfo").style.display = "none";
        document.getElementById("loginInfo2").style.display = "none";
        document.getElementById("newArticle").style.display = "block";
    } else {
        document.getElementById("newArticle").style.display = "none";
    }
  }  
