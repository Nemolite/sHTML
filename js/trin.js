fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))


      async function getUsers() {
        // отправляет запрос и получаем ответ
        const response = await fetch("https://jsonplaceholder.typicode.com/users", {
            method: "GET",
            headers: { "Accept": "application/json" }
        });
        // если запрос прошел нормально
        if (response.ok === true) {
            // получаем данные
            const users = await response.json();
            console.log(users)
            let rows = document.querySelector("body"); 
            users.forEach(user => {
                // добавляем полученные элементы в таблицу
                rows.append(row(user));
            });
        }
    }
    getUsers()
