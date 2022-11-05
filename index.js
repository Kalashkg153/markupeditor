

var editor = document.getElementById('texteditor');
var preview = document.getElementById('previewer');

function setdefault()
{
    let defaulttext = `
# Heading 1
## Heading 2
### Heading 3
#### Heading 4
##### Heading 5
**Bold Text**

*italic_text*
- list item
* list item

[link](www.google.com)

1. Number list
2. number list

heading alternative
-------------------

heading alternative
===================
`;
    editor.value = defaulttext;
    getpreview(editor.value);

}


const getpreview = value => {
    const html = marked.parse(value);
    preview.innerHTML = html;
}


function change()
{

    var temp = document.querySelector('.temp');

    temp.style.display = 'none';
    var main = document.querySelector('.main');
    main.style.display = 'block';

}
editor.addEventListener('keyup' , event=>{

    const {value} = event.target;

    window.localStorage.setItem("markdown" , value);
   
    getpreview(value);

});


