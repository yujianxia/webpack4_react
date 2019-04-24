import React from 'react'; //创建组件，虚拟DOM元素，生命周期

class Animal {
    // 每一个类中都有一个构造器，如果我们程序员没有显式指定constructor（构造器），
    // 那么。我们可以认为类的内部有一个隐形的空构造器constructor(){}
    // constructor的作用： 每当new这个类的时候，必然会优先执行constructor中的代码
    constructor(name,age){
        this.name = name,
        this.age = age
    }
    // 在class里面通过static修饰的属性就是【静态属性】
    static info = '静态属性'
}

// constr 就是 Animal 的实例， constr 中的属性就是【实例属性】
// 通过构造函数直接能访问的属性叫做 【静态属性】
var constr = new Animal("名字","12");
console.log('constr',constr); //{name: "名字", age: "12"}
console.log('Animal',Animal.info); //静态属性