# HTMLStringManager
Translate your site on other languages and more

## Installation
Add to <head> of your HTML document this code:
```
 <script type="text/javascript" src="sm.js"></script>
```
Create a folder "strings" and file "strings.json" in it. Write this in "strings.json":
```
{
  "(<string> id)" : "(value)",
  ...
}
```
Replace "(<string> id)" on <string> tag id attribute, and "(value)" replace on your text.
You can create more files in folder "strings" and switch between them using function setFile("strings/(your file name).json").

## How to use
Create in your file some <string> tags and give them unique ids. Then add their ids to json array in file "strings.json".

## Example
**index.html**
```
<html>
  <head>
    <title>Example #1</title>
    <script type="text/javascript" src="sm.js"></script>
  </head>
  <body>
    <string id='string'></string>
    <input type='button' value='Use strings.json' onclick='setFile("strings/strings.json")'>
    <input type='button' value='Use strings2.json' onclick='setFile("strings/strings2.json")'>
  </body>
</html>
```

**strings/strings.json**
```
{
  "string" : "Hello world from strings.json!"
}
```

**strings/strings2.json**
```
{
  "string" : "Hello world from strings2.json!"
}
```
