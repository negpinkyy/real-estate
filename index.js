let globalTaskDate = [];
taskContents = document.getElementById("taskContents")
const addCard = () => {
	const newTaskDetails ={
		id:'${date.now}',
		image: document.getElementById('image').value,
		email: document.getElementById('taskEmail').value,
		address: document.getElementById('taskAddress').value,
		enquiries: document.getElementById('taskEnquiries').value
	};
    taskContents.insertAdjacentHTML('beforeend', generateNewTask(newTaskDetails));
    
	 globalTaskDate.push(newTaskDetails);
    saveToLocalStorage();
}

const generateNewTask = ({id,image,email,address,enquiries})=>{
return (`<div class="col-md-6 col-lg-4 mt-3 card__one" id=${id} key=${id}>

<div class="card">
  <div class="card-header">
        <button class="btn btn-outline-info" name=${id} onclick="editTask(this)" >
        <div class="d-flex justify-content-end">
            <i class="fas fa-pencil-alt" name=${id} onclick="editTask(this)" ></i>
         </button>
         <button class="btn btn-outline-danger" name=${id} onclick="deleteTask(this)">
             <i class="far fa-trash-alt" name=${id} onclick="deleteTask(this)" ></i>
         </button>
       </div>
    </div>
  
<image src="./images/estate 11.jpg" height="25%" width="100%" ${image}>
<div class="card-body">
    <h5>Email: ${email}</h5>
    <p>Address: ${address}</p>
    <span class="badge bg-info">${enquiries}</span>
</div>
<div  class="card-footer">
<button class="btn btn-outline-primary float-end" name=${id} onclick="saveEditTask(this)">OPEN TASK</button>
</div>
  </div>
</div>`)
}

const saveToLocalStorage = () =>{
	localStorage.setItem("tasky", JSON.stringify({tasky: globalTaskDate}))
};

const reloadTaskCard = () =>{
  const localStorageCopy = JSON.parse(localStorage.getItem("tasky"))
 if(localStorageCopy){
  globalTaskDate = localStorageCopy.tasky;
 }
 globalTaskDate.map((cardData) =>{
  taskContents.insertAdjacentHTML('beforeend', generateNewTask(cardData));
 })
};

const deleteTask = (e) =>{
  const targetID = e.getAttribute("name");
  globalTaskDate = globalTaskDate.filter((cardData) => cardData.id!==targetID)
  saveToLocalStorage();
  window.location.reload();
}


const editTask = (e) =>{
  const targetID = e.getAttribute("name");
   console.log(e);
   console.log(e.parentNode);
    console.log(e.parentNode.parentNode.parentNode.childNodes);
    console.log(e.parentNode.parentNode.parentNode.childNodes[5].childNodes[1]);
     console.log(e.parentNode.parentNode.parentNode.childNodes[5].childNodes[3]);
     console.log(e.parentNode.parentNode.parentNode.childNodes[5].childNodes[5]);

    e.parentNode.parentNode.parentNode.childNodes[5].childNodes[1].setAttribute("contenteditable","true");
    e.parentNode.parentNode.parentNode.childNodes[5].childNodes[3].setAttribute("contenteditable","true");
    e.parentNode.parentNode.parentNode.childNodes[5].childNodes[5].setAttribute("contenteditable","true");

      console.log(e.parentNode.parentNode.parentNode.childNodes[7].childNodes[1]);
       e.parentNode.parentNode.parentNode.childNodes[7].childNodes[1].setAttribute("onclick", "saveEditTask(this)");
      e.parentNode.parentNode.parentNode.childNodes[7].childNodes[1].innerHTML ="Save Changes"
   
    //saveToLocalStorage();
  //window.location.reload();
}

//   const saveEditTask = (e) =>{
//   const targetID = e.getAttribute("name");
//   console.log(e);
//  console.log(e.parentNode);
//  console.log(e.parentNode.parentNode.parentNode.childNode);
//  console.log(e.parentNode.parentNode.parentNode.childNodes[5].childNodes[1]);
//  console.log(e.parentNode.parentNode.parentNode.childNodes[5].childNodes[3]);
//  console.log(e.parentNode.parentNode.parentNode.childNodes[5].childNodes[7]);

// e.parentNode.parentNode.parentNode.childNodes[5].childNodes[1].setAttribute("contenteditable","true");
// e.parentNode.parentNode.parentNode.childNodes[5].childNodes[3].setAttribute("contenteditable","true");
//  e.parentNode.parentNode.parentNode.childNodes[5].childNodes[7].setAttribute("contenteditable","true");
//    saveToLocalStorage();
//   window.location.reload();

// //      console.log(e.parentNode.parentNode.parentNode.childNodes[7].childNodes[1]);
// //       e.parentNode.parentNode.parentNode.childNodes[7].childNodes[1].innerHtml ="Save Changes"
// //     e.parentNode.parentNode.parentNode.childNodes[5].childNodes[3].setAttribute("onclick","saveEditTask(this)");
// }