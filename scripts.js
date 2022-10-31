/* Add your JavaScript to this file */
window.onload= ()=>{
  let btn = document.querySelector(".newsletter form button.btn");
  let mail = document.querySelector(".newsletter form input[type=\"email\"]");
  let message = document.querySelector(".newsletter div.message");
  const testmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ ;
  
  mail.setAttribute("placeholder", "Email address"); //swet to match template

  btn.onclick = (event)=>{
    event.preventDefault();
    if (testmail.test(mail.value.toLowerCase()) != 0 && mail.value.length){
      message.innerHTML = `Thank you! Your email address ${mail.value} has been added to our mailing list!`;
    }
    else{
      message.innerHTML = "Please enter a valid email address.";
    }
  }
}