/* arrayElement.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    const childNode = fragment.firstChild;
    console.log(item, childNode);
    fragment.insertBefore(li, childNode);
})
 */
/* lista.appendChild(fragment); */

const arrayElement = ['Elemento 1','Elemento 2','Elemento 3']
const lista = document.getElementById('lista');

const template = document.querySelector('#template-li').content;

const fragment = document.createDocumentFragment();

arrayElement.forEach(item => {
    template.querySelector('.list .text-element').textContent = item;
    const clone = template.cloneNode(true);
    fragment.appendChild(clone);
})

lista.appendChild(fragment);


/* <li class="list">
    <b>Nombre: </b><span class="text-element">element....</span>
</li> */



