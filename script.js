// ==============================
// 🌼 ELEMENT REFERENCES
// ==============================
let task_input = document.querySelector(".task_input");
let task_add_btn = document.querySelector(".task_add_btn");
let task_section = document.querySelector(".task_section");

// ==============================
// ➕ ADD NEW TASK
// ==============================
task_add_btn.addEventListener("click", () => {
    let current_task = task_input.value;

    // Only add task if input is not empty
    if (current_task !== "") {
        task_section.insertAdjacentHTML(
            "beforeend",
            `
            <div class="task">
                <div class="input_task">
                    <div class="task_type">
                        <input class="unique_back" type="checkbox">
                        <span class="task_text">${current_task}</span>
                    </div>
                </div>

                <button class="edit_btn">
                    <img src="assets/edit.png" alt="icon" width="24" height="24">
                </button>

                <button class="delete_btn">
                    <img src="assets/delete.png" alt="icon" width="18" height="18">
                </button>
            </div>
            `
        );

        // Clear input after adding
        task_input.value = "";
    }

    // Logic for total task to complete
    let TOtal_tasks = Array.from(document.querySelectorAll(".task_section .task")).length;
    let task_completion = document.querySelector(".task_completion_rate");
    task_completion.textContent = "0/" + TOtal_tasks;
});

// ==============================
// 🗑️ DELETE & ✏️ EDIT BUTTON HANDLER
// ==============================
task_section.addEventListener("click", (e) => {

    // ---------- DELETE BUTTON ----------
    if (e.target.closest(".delete_btn")) {
        e.target.closest(".task").remove();
    }

    // ---------- EDIT BUTTON ----------
    if (e.target.closest(".edit_btn")) {
        let task = e.target.closest(".task");
        let task_text = task.querySelector(".input_task span");
        let exist_input = task_text.querySelector("input");

        // If there is no input, create one for editing
        if (!exist_input) {
            task_text.innerHTML = `<input type="text" value="${task_text.textContent}">`;

            // When pressing Enter, save edited text
            let input_text = task_text.querySelector("input");
            input_text.addEventListener("keydown", (e) => {
                if (e.key === "Enter") {
                    task_text.innerHTML = input_text.value;

                    // When enter then checkbox will be cleared
                    let task_checkbox = task_text.closest(".task_type").querySelector("input");
                    task_checkbox.checked = false;
                }
            });
        } 
        // If input already exists, save its value directly
        else {
            task_text.textContent = exist_input.value;
        }
    }

    // Logic for task completion rate
    let TOtal_tasks = Array.from(document.querySelectorAll(".task_section .task")).length;
    let task_completion = document.querySelector(".task_completion_rate");
    let completed_tasks = 0;
    let checkboxes = document.querySelectorAll("input[type='checkbox']");
    Array.from(checkboxes).forEach((checkbox) => {
        if (checkbox.checked) {
            completed_tasks++;
        }
    });
    task_completion.innerHTML = TOtal_tasks + "/" + completed_tasks;

    // logic for task tracker
    let progress_track = document.querySelector(".progress_tracker")
    let percent = TOtal_tasks===0 ? 0 : (completed_tasks / TOtal_tasks) * 100

    progress_track.style.width = `${percent}%`

    deleteEmpty()


});

function deleteEmpty() {
    let task =document.querySelector(".task")
    let emptySvg = document.querySelector(".empty")
    if (task_section.contains(task)) {
        emptySvg.remove()
    }
}
// correct svg logic
