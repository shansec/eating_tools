// 对象之删除属性
let book = {
    // 属性名包含空格和连字符，因此使用字符串字面量
    "main title": "JavaScript",
    "sub-title": "sub-title",
    author: {
        firstName: "David",
        surname: "Flanagan"
    }
}
// delete操作符只删除自有属性，不删除继承属性（要删除继承属性，必须从定义属性的原型对象上删除。这样做会影响继承该原型的所有对象）
console.log('属性没有删除之前')
for (let attr of Object.keys(book)) {
    console.log(attr)
}
delete book["main title"]
delete book.author
console.log('属性没有删除之后')
for (let attr of Object.keys(book)) {
    console.log(attr)
}
