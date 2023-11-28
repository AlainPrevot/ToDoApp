//Note: Este evento forma parte del menu desplagable de cada ToDoItem
// y trabaja junto a la funcion del archivo ToDoOpciones.jsx

document.addEventListener("click", (e) => {
    if (!e.target.classList.contains("menu")) {
      document.querySelector(".visible").classList.remove("visible");
    }
  });
