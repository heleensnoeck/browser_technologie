# To-do-list

# For online usage
Not i.v.m node

# The build up 
First i had to make a node set-up before i could start building some HTML. Krijn told me if i build the site with node it would work without javascript. (I could replace the drag and drop then by clicks)

The i build the HTML but with the html came also some javascript, otherwise it would not work without javascript. Example:
```
<section class="content">

				<ul>
					<% for(var i = items.length-1; i > 0; i--) { %>
						
						<li id="item-<%= i %>" class="todo-item" draggable="true" ondragstart="drag(event)"><%= items[i] %>
					
						<form class="change" action="/done" method="post">
							<input type="hidden" name="source" value="items">
							<button class="frame icon vink vink-bg-color" name="id" value="<%= i %>" type="submit" class="btn-new-todo" alt="place item under done">
							</button> 
						</form>


						<form class="change" action="/doing" method="post">
							<button class="frame icon settings settings-bg-color" name="id" value="<%= i %>" type="submit" class="btn-new-todo" alt="place item under bussy">
							</button> 
						</form>


						<button class="frame icon arrow arrow-bg-color" id="later" name="id" value="<%= i %>" type="submit" class="btn-new-todo" alt="place item under later">
						</button> 

						</li>
					<% } %>
				</ul>

			</section>
		</section>
```

 
After the html and javascript was build-up, i could start working on the css. (I know it isnt the right way to build up but it would not work otherwise.)
 
# Feathers html & css 
If your browser loads CSS, you will get some nice colors, icons, positions and fonts. The enhancement in the CSS is the alignment with flexbox. Doesn't your browser support flexbox, then you dont have a responsive site.

with and without flexbox
![alt tag](https://github.com/heleensnoeck/browser_technologie/blob/master/week%204/screenshots1/Schermafbeelding%202016-04-17%20om%2012.09.10.png)

With Flexbox
![alt tag](https://github.com/heleensnoeck/browser_technologie/blob/master/week%204/screenshots1/Schermafbeelding%202016-04-17%20om%2012.11.12.png) 
 

# Feathers css i tought about-> 

# Enhancements
### Colors
* color contrast 

### Custom Fonts 
* Added Fallback fonts -> font-family: 'Open Sans', 'Helvetica', 'Arial', sans-serif;

# black and white balance checked 

### Images -> all costum made css icons

```

### ScreenReader add alt attribute
**From**
```
	<input type="text" id="place" placeholder="type a todo item" required="true">
```	
**To**
```
	<input type="text" id="place" placeholder="type a place" required="true" alt="type a todo item">
```

### No Mouse, use a keyboard (focus)

### h1 to h6 added in the right way

### No JS
**From**

script.js

**To**

```
<script>
			var cutsTheMustard = ('querySelector' in window && 'addEventListener' in window)
			var js; 

			if(cutsTheMustard) {
				js = document.createElement('script');
				js.src = '/javascripts/script.js';
				js.async = true; 
				document.querySelector('script').parentNode.appendChild(js);
			}
		</script>
```

Javascript rendering on the server. 
Drag and drop will be replaced for clicks and by each click a item wil be added to a certaine list. 


### Feedback Krijn
I also had some points of inprovement with my code -> See issues resolved:
https://github.com/heleensnoeck/browser_technologie/issues?q=is%3Aissue+is%3Aclosed


