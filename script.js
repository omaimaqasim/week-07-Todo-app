
let task_input = document.querySelector(".task_input")

let task_add_btn = document.querySelector(".task_add_btn")

let task_section = document.querySelector(".task_section")


// add listener to + task add btn
task_add_btn.addEventListener("click", () => {
    let current_task = task_input.value
    if (task_input.value !== "") {
        task_section.insertAdjacentHTML("beforeend", `<div class="task">
                <div class="input_task">
                    <label>
                        <input class="unique_back" type="checkbox"> <span class = "task_text">${current_task}</span>
                    </label>
                </div>
                <button class = "edit_btn">
                    <img src="assets/edit.png" alt="icon" width="24" height="24">

                </button>
                <button class = "delete_btn">
                    <img src="assets/delete.png" alt="icon" width="18" height="18">

                </button>


            </div>`)
            task_input.value = ""
    }
})


// add listener to task_section for handling delete and edit_btn
let delete_btn = document.querySelector(".delete_btn")

task_section.addEventListener("click" ,(e)=>{
    // add event on delete_btn
    if (e.target.closest(".delete_btn")) {
        e.target.closest(".task").remove()
    }

    // add event on edit_btn 
    if (e.target.closest(".edit_btn")) {
        let task = e.target.closest(".task")
        let task_text = task.querySelector(".input_task label span")

        // make task_text editable
        task_text.innerHTML =  `<input type="text" value = "${task_text.textContent}">`
     
        // again make task_text uneditable
         let input_text = task_text.querySelector("input");

        input_text.addEventListener("keydown" ,(e)=>{
           
            if (e.key==="Enter") {
               task_text.innerHTML = input_text.value
               
            }
        })
   
        
    }
})




  