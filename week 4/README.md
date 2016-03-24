# To-do-list

# For online usage
http://spotitshopit.com/todo

# Enhancements
### Colors
* color contrast is al goed

### Custom Fonts 
* Added Fallback fonts -> font-family: 'Open Sans', 'Helvetica', 'Arial', sans-serif;

# black and white balance checked (is good)

### Images -> zijn allemaal css icons
Werkt dus prima als je de images uit zet

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

### No Mouse, use a keyboard
Works well already

### h1 to h6 added in the right way

### No JS
**From**

script.js

**To**

Javascript op de server
(werkt dus ook zonder javascript drag en drop worden dan opgevangen door kliks)


### LocalStorage
Put the usersetting in a Database on the server.
If local storage is unavalible, get the usersetings from the server.


