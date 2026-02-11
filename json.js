  /*
  const loadPost = () => {
    const url = "https://jsonplaceholder.typicode.com/posts";
    console.log("click");
      fetch(url)
      .then((res) => res.json() )
      .then((data) => {
        console.log(data);
        data.forEach(element => {
           console.log(element) 
        });
 
      })
  };

*/
const loadPost = () =>{
  const url = "https://jsonplaceholder.typicode.com/posts";
  
  fetch(url)
  .then((res) => res.json())
  .then((data) => {
    showPost(data);
  });
}



const showPost=(data)=>{

  const cardContainer = document.getElementById("card-container");
    cardContainer.innerHTML=``; 
    data.forEach(element => {
      console.log(element);
     

/*
   const ul =  document.getElementById("list");
   const li = document.createElement('li');
   li.innerText = element.title;  
   ul.appendChild(li);
   */
   
 const postCard = document.createElement('div');
     postCard.classList.add('card')
   postCard.innerHTML= `
   

        <h4>${element.title}</h4>
        <span>${element.id}</span>
        <p>${element.body}</p>

   `;
   cardContainer.appendChild(postCard);



    });
    

}

