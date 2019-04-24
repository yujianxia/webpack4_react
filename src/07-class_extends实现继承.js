//继承      给子类添加独有的实例方法和实例属性

// 父类
class Animal {
    constructor (name,age) {
        this.name = name,
        this.age = age
    }
    // 公共实例方法
    syaHello(){
        console.log('你好')
    }
}

// 继承
// 语法 class 子类 extends 父类{}
class Smallcat extends Animal{
    constructor(name,age){
        //  为什么要在constructor中调用super？
        //    答案：如果一个子类通过extends继承了父类，那么在子类的constructor中必须优调用一下 super(); 这个是语法规范
        //  super是什么？
        //    答案：super()是一个函数，指向的是父类的构造器（constructor）
        //  为什么调用super了之后，为什么new Smallcat("22222","33") => {name: undefined, age: undefined} ？
        //    答案：super()是一个函数，指向的是父类的构造器（constructor）
         super(name,age);
    }
}

class SmallDog extends Animal{
    constructor(name,age,IDNumber){
        // this.IDNumber = IDNumber;  //报错 原因：在子类中 this 只能在 super 之后使用
        super(name,age);
        this.IDNumber = IDNumber; //单独挂载到子类
    }
}

var cat2 = new Smallcat("22222","33");
console.log(cat2); 

var dog2 = new SmallDog("张三","24",'511324************');
console.log(dog2); 

