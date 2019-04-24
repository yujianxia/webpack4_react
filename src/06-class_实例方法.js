import React from 'react'; //创建组件，虚拟DOM元素，生命周期






/**
 * 
 * 注意1：在class { } 区间内，只能写构造器，实例方法，静态属性，静态方法
 * 注意2：class关键字内部，还是用es5的方法实现的，所以我们把class关键字叫做语法糖
 * 
 */


class Animal {
    // 每一个类中都有一个构造器，如果我们程序员没有显式指定constructor（构造器），
    // 那么。我们可以认为类的内部有一个隐形的空构造器constructor(){}
    // constructor的作用： 每当new这个类的时候，必然会优先执行constructor中的代码
    constructor(name,age){
        this.name = name,
        this.age = age
    }
    // 在class里面通过static修饰的属性就是【静态属性 / 方法】
    static info = '静态属性'
 
    // 静态方法（不常用）
    static sta_say(){
        console.log('静态方法');
    }
    // 实例方法（常用）
    say(){
        console.log('实例方法');
    }
}

// constr 就是 Animal 的实例， constr 中的属性就是【实例属性】
// 通过构造函数直接能访问的属性叫做 【静态属性】
var constr = new Animal("名字","12");
console.log('constr',constr); //{name: "名字", age: "12"}

console.log('Animal静态属性',Animal.info); //静态属性
console.log('Animal静态方法',Animal.sta_say); //静态方法