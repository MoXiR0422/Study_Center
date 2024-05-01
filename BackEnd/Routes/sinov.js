const str = {
    userName:"DIlshodbek",
    nikName:"moxir",
    email:"myprofileforgithub@gmail.com",
    ieltsLevel:"7.5",
    age:23,
    addressTeacher:"Namnagan",
    roleUser:"teacher",
    teacherRoom:"8 xona",
    birthday:"22.04.2001"
};

let valueUpdateItemKey = 'id';
let valueUpdateItem = '"ds"';


Object.keys(str).forEach(function(key, index) {
    valueUpdateItemKey+=`,${key}`;
});
Object.keys(str).forEach(function(key, index) {
    valueUpdateItem+=`,'${str[key]}'`;
});

console.log(valueUpdateItemKey);
console.log(valueUpdateItem);
  