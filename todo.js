// Form elemanı seçimi
const form = document.querySelector("#todo-form");

// Yeni görev ekleme işlemi
form.addEventListener("submit", function (e) {
  // Sayfa yenilenmesini engelleme
  e.preventDefault();

  // Input elemanını seçme
  const input = document.querySelector("#todo");

  // Input değerini alınması ve trim edilmesi
  const newTodo = input.value.trim();

  // Eğer input değeri boş ise işlem yapılmayacak
  if (newTodo === "") {
    return;
  }

  // Yeni liste öğesi oluşturma
  const li = document.createElement("li");
  li.className = "list-group-item d-flex justify-content-between";
  li.appendChild(document.createTextNode(newTodo));

  // Silme butonu oluşturma
  const deleteLink = document.createElement("a");
  deleteLink.href = "#";
  deleteLink.innerHTML = '<i class="fa fa-remove"></i>';
  li.appendChild(deleteLink);

  // Listeye ekleme
  const todoList = document.querySelector(".list-group");
  todoList.appendChild(li);

  // Input elemanının temizlenmesi
  input.value = "";
});

// Görev silme işlemi
const todoList = document.querySelector(".list-group");
todoList.addEventListener("click", function (e) {
  if (e.target.parentElement.classList.contains("list-group-item")) {
    if (confirm("Emin misiniz?")) {
      e.target.parentElement.remove();
    }
  }
});

// Tüm görevleri silme işlemi
const clearBtn = document.querySelector("#clear-todos");
clearBtn.addEventListener("click", function (e) {
  if (confirm("Emin misiniz?")) {
    todoList.innerHTML = "";
  }
});

// Arama işlemi
const filter = document.querySelector("#filter");
filter.addEventListener("keyup", function (e) {
  const searchValue = e.target.value.trim().toLowerCase();

  const listItems = document.querySelectorAll(".list-group-item");

  listItems.forEach(function (item) {
    const text = item.textContent.trim().toLowerCase();
    if (text.indexOf(searchValue) === -1) {
      item.style.display = "none";
    } else {
      item.style.display = "flex";
    }
  });
});
