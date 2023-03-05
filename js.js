const { query } = require("express");

console.log("hello");

let a = document.getElementsByClassName('row');
a.innerHTML= ('<p>loool</p>');

//function table(){


  //  }


    // У каждого пользователя будет случайный стиль для блока с сообщенями,
		// поэтому в этом кусочке кода мы получаем случайные числа
		var min = 1;
		var max = 6;
		var random = Math.floor(Math.random() * (max - min)) + min;

		// Устаналиваем класс в переменную в зависимости от случайного числа
		// Эти классы взяты из Bootstrap стилей
		var alertClass;
		switch (connections.length) {
			case 1:
				alertClass = 'secondary';
				break;
			case 2:
				alertClass = 'danger';
				break;
			case 3:
				alertClass = 'success';
				break;
			case 4:
				alertClass = 'warning';
				break;
			case 5:
				alertClass = 'info';
				break;
			case 6:
				alertClass = 'light';
				break;
		}

		function table2(){

			let a = document.getElementsByClassName('row');

			let m1 = document.getElementById("message1");
			let m2 = document.getElementById("message2");
			let m3 = document.getElementById("message3");
			let m4 = document.getElementById("message4");
			let m5 = document.getElementById("message5");
		
		
			let tbl = document.querySelector('table')
		
			document.createElement('table');
		
			let table = document.createElement('table');
			let thead = document.createElement('thead');
			let tbody = document.createElement('tbody');
			
			table.appendChild(thead);
			table.appendChild(tbody);
			
			let row_1 = document.createElement("tr");
		
		
			let heading_1 = document.createElement("th");
			heading_1.innerHTML = ("Игрок:");
			let heading_2 = document.createElement("th");
			heading_2.innerHTML = "Имя";
			let heading_3 = document.createElement("th");
			heading_3.innerHTML = "Город";
			let heading_4 = document.createElement("th");
			heading_4.innerHTML = "Растение";
			let heading_5 = document.createElement("th");
			heading_5.innerHTML = "Животное";
			let heading_6 = document.createElement("th");
			heading_6.innerHTML = "Река";
			
			row_1.appendChild(heading_1);
			row_1.appendChild(heading_2);
			row_1.appendChild(heading_3);
			row_1.appendChild(heading_4); 
			row_1.appendChild(heading_5);
			row_1.appendChild(heading_6);
			
		
			
		  // Creating and adding data to second row of the table
		  let row_2 = document.createElement("tr");
		
		  let row_2_data_1 = document.createElement("td");
		  row_2_data_1.innerHTML = m1.value;
		
		  let row_2_data_2 = document.createElement("td");
		  row_2_data_2.innerHTML = m2.value;
		
		  let row_2_data_3 = document.createElement("td");
		  row_2_data_3.innerHTML = m3.value;
		
		  let row_2_data_4 = document.createElement("td");
		  row_2_data_4.innerHTML = m4.value;
		
		  let row_2_data_5 = document.createElement("td");
		  row_2_data_5.innerHTML = m5.value;
		
		
		  row_2.appendChild(row_2_data_1);
		  row_2.appendChild(row_2_data_2);
		  row_2.appendChild(row_2_data_3);
		  row_2.appendChild(row_2_data_4);
		  row_2.appendChild(row_2_data_5);
		
		
		  tbl.innerHTML="";
		
		
		}

function table(){


	let a = document.getElementsByClassName('row');

	let m1 = document.getElementById("message1");
	let m2 = document.getElementById("message2");
	let m3 = document.getElementById("message3");
	let m4 = document.getElementById("message4");
	let m5 = document.getElementById("message5");


	let tbl = document.querySelector('table')

	document.createElement('table');

	let table = document.createElement('table');
	let thead = document.createElement('thead');
	let tbody = document.createElement('tbody');
	
	table.appendChild(thead);
	table.appendChild(tbody);
	
	let row_1 = document.createElement("tr");


	let heading_1 = document.createElement("th");
	heading_1.innerHTML = ("Игрок:");
	let heading_2 = document.createElement("th");
	heading_2.innerHTML = "Имя";
	let heading_3 = document.createElement("th");
	heading_3.innerHTML = "Город";
	let heading_4 = document.createElement("th");
	heading_4.innerHTML = "Растение";
	let heading_5 = document.createElement("th");
	heading_5.innerHTML = "Животное";
	let heading_6 = document.createElement("th");
	heading_6.innerHTML = "Река";
	
	row_1.appendChild(heading_1);
	row_1.appendChild(heading_2);
	row_1.appendChild(heading_3);
	row_1.appendChild(heading_4); 
	row_1.appendChild(heading_5);
	row_1.appendChild(heading_6);
	
	tbl.appendChild(row_1);
	
  // Creating and adding data to second row of the table
  let row_2 = document.createElement("tr");

  let row_2_data_1 = document.createElement("td");
  row_2_data_1.innerHTML = m1.value;

  let row_2_data_2 = document.createElement("td");
  row_2_data_2.innerHTML = m2.value;

  let row_2_data_3 = document.createElement("td");
  row_2_data_3.innerHTML = m3.value;

  let row_2_data_4 = document.createElement("td");
  row_2_data_4.innerHTML = m4.value;

  let row_2_data_5 = document.createElement("td");
  row_2_data_5.innerHTML = m5.value;


  row_2.appendChild(row_2_data_1);
  row_2.appendChild(row_2_data_2);
  row_2.appendChild(row_2_data_3);
  row_2.appendChild(row_2_data_4);
  row_2.appendChild(row_2_data_5);


  tbl.appendChild(row_2);



	//a.innerHTML= (tbl);

	

}




		// Функция для работы с данными на сайте
		$(function() {

			// Включаем socket.io и отслеживаем все подключения
			var socket = io.connect();
			// Делаем переменные на:
			var $form = $("#messForm"); // Форму сообщений
			var $name = $("#name"); // Поле с именем
			var $textarea1 = $("#message1"); // Текстовое поле
			var $textarea2 = $("#message2"); // Текстовое поле
			var $textarea3 = $("#message3"); // Текстовое поле
			var $textarea4 = $("#message4"); // Текстовое поле
			var $textarea5 = $("#message5"); // Текстовое поле
			var $textarea6 = $(".table"); // Текстовое поле
			var $all_messages = $("#all_mess"); // Блок с сообщениями
			

			// Отслеживаем нажатие на кнопку в форме сообщений
			$form.submit(function(event) {
				// Предотвращаем классическое поведение формы
				event.preventDefault();
				// В сокет отсылаем новое событие 'send mess',
				// в событие передаем различные параметры и данные
				socket.emit('send mess', {mess:  $textarea1.val() + $textarea2.val() + $textarea3.val() + $textarea4.val() + $textarea5.val(), name: $name.val(), className: alertClass});
				// Очищаем поле с сообщением
				$textarea.val('');
			
			});

			// Здесь отслеживаем событие 'add mess', 
			// которое должно приходить из сокета в случае добавления но ого сообщения
			socket.on('add mess', function(data) {
				// Встраиваем полученное сообщение в блок с сообщениями
				// У блока с сообщением будет тот класс, который соответвует пользователю что его от правил
				$all_messages.append("<div class='alert alert-" + data.className + "'><b>" + data.name + "</b>: " + data.mess + "</div>" + tbl);
			
			});

		});
