const items = document.querySelector('.items');
const li = document.querySelector('li');
const item_row=document.querySelector('.item_row');
const div =document.querySelector('div');
const item = document.querySelector('.item');
const input=document.querySelector('.footer_input');
const btn=document.querySelector('.footer_btn');
const itemname =document.querySelector('.item_name');
let itemdeletes = [...document.querySelectorAll('.item_delete')];

function updateItem() {
  itemdeletes = [...document.querySelectorAll('.item_delete')];
}

function make() {
  if (!input.value.trim()) {
    alert('값을 입력해주세요');
    return;
  }

  const newId = document.getElementById("myitems").children.length + 1;

  const getter = document.createElement('li');
  getter.classList.add('item_row');
  getter.setAttribute('data-id', newId);
  items.appendChild(getter);

  const chi = document.createElement('div');
  chi.classList.add('item');
  getter.appendChild(chi);

  const span = document.createElement('span');
  span.classList.add('item_name');
  chi.appendChild(span);

  const button = document.createElement('button');
  button.classList.add('item_delete');
  chi.appendChild(button);

  const i = document.createElement('i');
  i.classList.add('fa-solid', 'fa-trash-can');
  i.setAttribute('data-id', newId);
  button.appendChild(i);

  span.textContent = input.value;

  updateItem(); 
  addDeleteListener(itemdeletes[itemdeletes.length - 1]);
}

function addDeleteListener(itemdelete) {
  itemdelete.addEventListener('click', () => {
    updateItem();
    const parentLi = itemdelete.closest('.item_row');
    parentLi.remove();
  });
}

btn.addEventListener('click', () => {
  make();
});

itemdeletes.forEach((itemdelete) => {
  addDeleteListener(itemdelete);
});