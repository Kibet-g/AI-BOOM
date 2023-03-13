import bot from './assets/bot.svg, user.svg';

 const form =document.querySelector('form');
 const chatContainer =document.querySelector(chatContainer);
let loadInterval;



//OUR JAVASCRIPT FUNCTIONALITY TO LOAD THE DOTS AFTER EVERY 300 SECONDS
function loader(element)
{
  element.textContent='';
  loadInterval=setInterval(()=>{
  element.textContent +='.';
  
  if(element.textContent==='...'){
    element.textContent='';
  }
},300)
}

//FUNCTION TO TYPE TEXT BY TEXT
function typetext(element, text){

  let index=0;
  let interval=setInterval(()=>{
    if (index<text.length)
    {
      element.innerHTML += text.charAt(index);
      index++
    } else{
      clearInterval(interval);
    }
  },20)
  
}
//FUNCTION TO CREATE A UNIQUE ID FOR EVERY SINGLE MESSAGE
function generateUniqueId()
{
  const timestamp= Date.now();
  const randomNumber=Math.random();
  const hexadecimalString= randomNumber.toString;
  return 'id-${timestamp}-${hexadecimalString}'
}  
 //A FUNCTION TO IMPLEMENT A  FROM B;ACK TO GREY MESSAGING
 function chatStripe (isAi, value, uniqueId){
  return (
    
    <div class="wrapper ${isAi && 'ai'}">
    <div class="chat">
    <div className="profile">
    <img
    src="${isAi ? bot : user}"
    alt="${isAi ? 'bot' : 'user'}"
    />
    </div>
    <div class="message" id={uniqueId}>${value}</div>
    </div>
    </div>
    
  )
  //END OF CHAT STRIPE

  
 }
 const handleSubmit = async(e) =>
{

  e.preventDefault();//PREVENT BROWSER BEHAVIOUR
  const data = new FormData(form);
  //users chat stripe now
  chatContainer.innerHTML +=chatStripe(true,"",uniqueId);
  

  chatContainer.scrollTop= chatContainer.scrollHeight;
  const messageDiv =document
  

} 

 
