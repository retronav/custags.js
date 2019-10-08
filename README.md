# custags.js
![logo](https://raw.githubusercontent.com/obnoxiousnerd/custags.js/master/custags-logo.png)
> ## A library that unleashes the power of custom elements.
> ## A library that makes complicated functions short and sweet.
For the minified version, add this:-
```html
<script  src="https://bit.ly/custagsmin"></script>
```
For the unminified version, add this:-
```html
<script  src="https://bit.ly/custagsjs"></script>
```
# Modules Included
## The `Ω` module
This Ω(omega) module has the following syntax:-
```javascript
Ω(selector).somefunction();
```
Selector is added in single or double quotes. This syntax is similar to that of jQuery.
##### Functions added
* `html()`=> returns innerHTML if null; set innerHTML if value present.
* `val()`=>  returns value of any input-related element.
* `on()`and `off()`=> add or remove event listeners, respctively.
*  `append()`and `prepend()`=> add innerHTML after and before the existing innerHTML, respectively.
*  `text()`=> similar like html(), `textContent` in this case.
*  `css()`=> set CSS of a particular element.
* `detectAdBlock()` pass one of the two strings for the following:-
> 'mild' => a mild notification at the bottom of website

> 'harsh' => aggressive; removes all content of site and displays a text 'Please disable your adBlocker'.
* `register()`=> register you custom element with a html property. These include:- 
> for the desired tag, just type the tag name without arrow brackets and inverted commas

> for an input, type like this:-
>>  for input type='text', inputText

>> for input type="datetime-local", inputDateTimeLocal
* `extendcss(element1, element2)`=> function that inherits all attributes from element1 and passes to element2.
## the `zax` module
The `zax` module does functions of fetching JSON and XML documents.
##### Functions included
* `zax.getJSON(url , (object){})`=> this function gets JSON from the `url` and you can do stuff inside the function. You can name anything in the `object` parameter and it will be used to get values, like:-
> lol.json contents
```json
 "name" : "custags.js"
 ```
>To get the `name`, you do:-
```javascript 
const url = "lol.json";
zax.getJSON(url , (res){
console.log(res.name);
});`
//results "custags.js"
```
* `zax.getXML(url , (object){})`=> this function gets XML from the `url` and you can do stuff inside the function. Usage similar like `zax.getJSON`.
