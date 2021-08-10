// class 类

// 定义一个类
class MyClass { }

class Person {
    name: string
    readonly age: number // 只能在构造器中初始化

    // 构造函数
    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }

    // accessors: Getters / Setters
    set setname(name: string) {
        this.name = name
    }
    get getname() {
        return this.name
    }


    // 方法可见性
    wakeup() {
        this.sleep()
        console.log("sun raise", this.name, "wakes up")
    }
    // The default visibility of class members is public. A public member can be accessed anywhere:
    // 公开: 在任意地方都可以访问
    public wakesup() {
        this.wakeup()
    }

    // protected: members are only visible to subclasses of the class they’re declared in.
    // 保护: 子类型可以引用
    protected work() {
        console.log(this.name, "is work")
    }

    // private is like protected, but doesn’t allow access to the member even from subclasses:
    // 隐私: 子类型也不能引用
    private sleep() {
        console.log("${this.name} sleeping")
        console.log(`${this.name} sleeping`)
    }
}

// usage
const p3 = new Person("zhangsan", 18)
p3.wakeup()
p3.wakesup()