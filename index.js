/* Enter the code to remove the main node element under this comment */
var element = document.createElement('div');

/* Create your new element here and assign it to newHeader */
var ul = document.createElement('ul')
 
for (let i = 0; i < 3; i++) {
  let li = document.createElement('li');
  li.innerHTML = (i + 1).toString();
  ul.appendChild(li);
}
 
element.appendChild(ul);
const newHeader = document.createElement('h1');
newHeader.id="victory";
document.body.appendChild(newHeader);
newHeader.innerHTML= 'Sophoe is the Champion';
