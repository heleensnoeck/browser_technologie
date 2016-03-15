# Weather app

# For online usage
http://spotitshopit.com/done

# Enhancements
### Colors
* second row -> Higher Contrast -> background-color: #4D4D4D;

### Custom Fonts 
* Added Fallback fonts -> font-family: 'Open Sans', 'Helvetica', 'Arial', sans-serif;

# black and white balance checked (is good)

### Svg
Request a smaller image on a smaller screen
**From**
```
<div id="rain">
	<svg 
	  fill="#8ba892"  
	  x="0" 
	  y="0" 
	  width="116" 
	  height="150" 
	  viewBox="0 0 116 115">
	  <g>
	    <g class="cloud">
	      <path stroke="#8ba892" stroke-miterlimit="10" d="M84 77"/>
	      <path stroke="#8ba892" stroke-miterlimit="10" d="M59 77"/>
	      <path stroke="#8ba892" stroke-miterlimit="10" d="M35 77"/>
	      <path stroke="#8ba892" stroke-miterlimit="10" d="M95 38c-3-7-10-13-18-13 -2 0-4 0-6 1C66 18 57 13 47 13 32 13 20 25 20 40c-5 3-9 9-9 16 0 10 8 18 18 18h61c10 0 18-8 18-18C108 47 102 40 95 38L95 38zM90 68"/>
	    </g>
	  </g>
```
**To svg + title**
```
<div id="rain">
	<svg 
	  fill="#8ba892"  
	  x="0" 
	  y="0" 
	  width="116" 
	  height="150" 
	  viewBox="0 0 116 115">
	  <g>
	  	<title>Rain</title>
	    <g class="cloud">
	      <path stroke="#8ba892" stroke-miterlimit="10" d="M84 77"/>
	      <path stroke="#8ba892" stroke-miterlimit="10" d="M59 77"/>
	      <path stroke="#8ba892" stroke-miterlimit="10" d="M35 77"/>
	      <path stroke="#8ba892" stroke-miterlimit="10" d="M95 38c-3-7-10-13-18-13 -2 0-4 0-6 1C66 18 57 13 47 13 32 13 20 25 20 40c-5 3-9 9-9 16 0 10 8 18 18 18h61c10 0 18-8 18-18C108 47 102 40 95 38L95 38zM90 68"/>
	    </g>
	  </g>
```

```

### ScreenReader add alt attribute
**From**
```
	<input type="text" id="place" placeholder="type a place" required="true">
```	
**To**
```
	<input type="text" id="place" placeholder="type a place" required="true" alt="type a place to find out the forcast">
```

### No Mouse, use a keyboard
It does not work wel because it is a hover state and he doesnt load the second content row while tapping.

### No JS
**From**
```
app.js

```
**To**
```
<noscript>
    <style type="text/css">
        main {display:none;}
    </style>
    <div class="noscriptmsg">
    	<h1>Sorry this application only works with JavaScript enabled</h1>
    	<p>Help: Google Support <a href="https://support.google.com/adsense/answer/12654?hl=nl"></a></p>
    </div>
</noscript>

```

**Even better:**
Render the data in the template on the server. Return this data as html. 
If JS is enabled, the user stil can see content.

### LocalStorage
Put the usersetting in a Database on the server.
If local storage is unavalible, get the usersetings from the server.


