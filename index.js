let taskArray = [];
const taskList = document.querySelector(".todo-list");

const setTask = document.querySelector(".todo-set__text");
const setSubmit = document.querySelector(".todo-set__submit");
setSubmit.addEventListener("click", () => {
    let setValue = setTask.value;
    if (setValue.trim() !== '') {
        taskArray.push(setValue);
        setTask.value = ''; // 入力フィールドをクリア
        showList(taskArray);
    }
});

function showList(listArray) {
    // 追加前にリストをクリア
    taskList.innerHTML = '';
    for (let i = 0; i < listArray.length; i++) {
        const listItem = document.createElement("li");
        const listText = document.createElement("p");
        const deleteButton = document.createElement("button");

        listItem.classList.add("todo-list__item");

        listText.classList.add("todo-list__text");
        listText.textContent = listArray[i];

        deleteButton.classList.add('todo-list__delete');
        deleteButton.textContent = "削除する";

        listItem.appendChild(listText);
        listItem.appendChild(deleteButton);
        taskList.appendChild(listItem);

        // 削除ボタンのクリックイベントリスナーを設定
        deleteButton.addEventListener("click", function() {
            // クリックされた削除ボタンに対応する要素のインデックスを取得
            const index = listArray.indexOf(listText.textContent);
            // インデックスが見つかった場合、その要素を削除
            if (index !== -1) {
                listArray.splice(index, 1);
                // リストを再描画
                showList(listArray);
            }
        });
    }
}

showList(taskArray);
