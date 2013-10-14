Presentation
============

This plugin add some useful mathematical function to jQuery.

Installation
============

This plugin require at less _jQuery 1.4_.
Download math.jquery.js and place it in your website folder.
In you website page, add this code to load the file :

    <script type="text/javascript" src="math.jquery.js"></script>`

Formation
============
Pour plus d'informations sur l'utilisation de jQuery, retrouvez notre formation jquery à Lyon http://www.devictio.fr/internet/formation-jquery.php
Examples
========
HTML Code
----------

    <ul id="list1">
      <li>12</li>
	    <li>16</li>
	    <li>10</li>
	    <li>18</li>
    </ul>


or 

    <form action="" id="form1">
    	<label>Value 1 : <input type="text" name="values" /></label>
    	<label>Value 2 : <input type="text" name="values" /></label>
	    <label>Value 3 : <input type="text" name="values" /></label>
	    <label>Value 4 : <input type="text" name="values" /></label>
    </form>

Average Function
-----------------

Calculate the average of a list of elements in a container.


    <script type="text/javascript"> 
    $(document).ready(function(){ 
        var avg = $("#list1").avg({items:"li"}); 
        alert(avg); 
    });  
    </script>

or 

    <script type="text/javascript"> 
    $(document).ready(function(){ 
        var avg = $("#form1").avg({items:"input[name=values]"}); 
        alert(avg); 
    });  
    </script>

Minimum Function
----------------

Return the minimum value of a list of elements in a container.

    <script type="text/javascript"> 
    $(document).ready(function(){ 
        var min = $("#list1").min({items:"li"}); 
        alert(min); 
    });  
    </script>

or 

    <script type="text/javascript"> 
    $(document).ready(function(){ 
        var min = $("#form1").min({items:"input[name=values]"}); 
        alert(min); 
    });  
    </script>

Maximum Function
----------------

Return the maximum value of a list of elements in a container.

    <script type="text/javascript"> 
    $(document).ready(function(){ 
        var max = $("#list1").max({items:"li"}); 
        alert(max); 
    });  
    </script>

or 

    <script type="text/javascript"> 
    $(document).ready(function(){ 
        var max = $("#form1").max({items:"input[name=values]"}); 
        alert(max); 
    });  
    </script>

is Prime Number Function
-------------------------

Check if a number is a prime number.

    <script type="text/javascript"> 
    $(document).ready(function(){ 
        var pn = $().isPrimeNumber(256); 
        alert(pn); 
    });  
    </script>
    
    
[![githalytics.com alpha](https://cruel-carlota.pagodabox.com/f6da60bc77442f11b26679b049a134c3 "githalytics.com")](http://githalytics.com/nicoss01/jQuery-Plugin-Math-Functions)
