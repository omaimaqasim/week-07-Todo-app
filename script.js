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
        task_section.insertAdjacentHTML("beforeend", `
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
        `);

        // Clear input after adding
        task_input.value = "";
    }
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
                }
            });
        }

        // If input already exists, save its value directly
        else {
            task_text.textContent = exist_input.value;
        }
    }
});
