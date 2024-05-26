let taskArray = [];
const taskList = document.querySelector(".todo-list");

const setTask = document.querySelector(".todo-set__text");
const setSubmit = document.querySelector(".todo-set__submit");
setSubmit.addEventListener("click", () => {
    const setValue = setTask.value.trim();
    if (setValue !== '') {
        taskArray.push(setValue);
        setTask.value = ''; // 入力フィールドをクリア
        showList(taskArray);
    }
});

function showList(listArray) {
    // 追加前にリストをクリア
    taskList.innerHTML = '';
    
    if (listArray.length === 0) {
        const emptyMessage = document.createElement("li");
        emptyMessage.textContent = "リストはありません";
        taskList.appendChild(emptyMessage);
    } else {
        listArray.forEach((taskText, index) => {
            const listItem = document.createElement("li");
            const listText = document.createElement("p");
            const deleteButton = document.createElement("button");

            listItem.classList.add("todo-list__item");
            listText.classList.add("todo-list__text");
            listText.textContent = taskText;

            deleteButton.classList.add('todo-list__delete');
            deleteButton.textContent = "削除する";

            listItem.appendChild(listText);
            listItem.appendChild(deleteButton);
            taskList.appendChild(listItem);

            // 削除ボタンのクリックイベントリスナーを設定
            deleteButton.addEventListener("click", () => {
                listArray.splice(index, 1);
                showList(listArray);
            });
        });
    }
}

showList(taskArray);
