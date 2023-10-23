// add item ở vị trí đầu tiên
let new1 = document.createElement('li');
const textNew1 = document.createTextNode('New1');
new1.appendChild(textNew1);
const apply1 = document.getElementsByTagName('ul')[0];
apply1.insertBefore(new1, apply1.childNodes[0]);

// add thêm item ở vị trí cuối cùng
let new2 = document.createElement('li');
const textNew2 = document.createTextNode('New2');
new2.appendChild(textNew2);
const apply2 = document.getElementsByTagName('ul')[0];
apply2.appendChild(new2)

// đổi màu background-color là màu đen và font color là màu trắng
let listItem = document.querySelectorAll('li')
let i;
for( i = 0; i < listItem.length; i++ ) {
    listItem[i].className = 'dark'
}

// đếm số lượng phần tử li và thêm vào header
let count = document.getElementsByTagName('li').length;
let header = document.getElementsByTagName('h1')[0];
header.innerHTML += '<span>'+`${count}`+ '</span>';
