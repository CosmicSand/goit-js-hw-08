'use stict';

const categoriesAr = document.querySelectorAll('#categories .item');

console.log(`Number of categories: ${categoriesAr.length}`);

const message = () => {
  categoriesAr.forEach(category => {
    console.log(`Category: ${category.firstElementChild.textContent}`);
    console.log(`Elements: ${category.lastElementChild.children.length}`);
  });
};

message();
