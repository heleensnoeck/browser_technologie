
// var lis = document.getElementsByTagName('li');
// console.log(lis);

// for(var i = 0; i < lis.length; i++) {
//     var colors = ['#fff', 'green', 'blue', 'orange', 'yellow'];

//     for(var i = 0; i < 3; i++) {
//         colors.push(Math.floor(Math.random() * 255));
//         	console.log(colors.push);

//             lis[i].style.backgroundColor = 'colors('+ colors.join(',') +')';
//             console.dir(lis[i]);

//     }
// }


function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
	if (ev.stopPropagation) {
		ev.stopPropagation(); // Stops some browsers from redirecting.
	} 

	// schrijf een if zodat hij hem niet opzichzelf kan droppen
    ev.preventDefault();
    var itemId = ev.dataTransfer.getData("text");
    
    ev.target.appendChild(document.getElementById(itemId));
}

var todoForm = document.querySelector('.search-field'); // pak searchfield
todoForm.addEventListener('submit', function(e){ // luister naar submit
	var content = document.querySelector('.content'); // 
	var item = document.querySelector('.input-todo').value;



	var r = new XMLHttpRequest(); 
	r.open(this.method, this.action, true); //this.action is /add this.method = post
    r.onreadystatechange = function () { 
       	

       	if (r.readyState != 4 || r.status != 200) return; // dat is terug ontvangen
       
		var parser = new DOMParser(); 
		var html = parser.parseFromString(r.responseText,"text/html"); // maak van text -> html
		var listItems = html.querySelector(".content ul"); // pak de content


		console.log(listItems);
		
		content.innerHTML = listItems.innerHTML; // overschrijf gewonen conten met de nieuwe content html
       
    };
    r.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    r.send("item="+ item);

	e.preventDefault();


});