# class 类

## 定义

+ 定义: `class Name() {}`
+ 实例化: `const p = new Person()`

### 字段 Field

1. 普通字段: 可以在 **任何时候** 被赋值或者更新
2. 只读字段: 在普通字段前使用 `readonly` 修饰符， 此类字段只能在初始化时被更新。
    + 构造函数: `constructor(name, age){}`
    + 初始化 `const p3 = new Person("zhangsan", 18)`

```ts
class Person {
    name: string
    readonly age: number // 只能在构造器中初始化
}
```

### 构造器 `Constructors`

类中一个特殊的方法，在类被实例化的时候自动被调用。
    1. 其方法名 **只能是** `constructor`
    2. 可以包含 **方法签名**， 即包含参数

在实例化时被调用 `const p3 = new Person("zhangsan", 18)`

```ts
class Person {
    name: string
    readonly age: number // 只能在构造器中初始化

    // 构造函数
    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }
}
```

### 方法其可见性

1. 方法是 **只属于类** 的函数。
2. 方法 **只能** 在类的 Body 中定义
3. 方法可见性: `public wakesup() {}`
    + `public`: 公开的，在 **任何地点(类，实例化对象)** 都可以被调用。 默认可见性，可以被省略。
    + `protected`: 受保护的， 只有在 **类，及其衍生的子类** 中被调用。
    + `private`: 隐私的， 只能 **类** 中被调用，子类也不能调用。
4. 类中字段及方法的调用， 使用 `this` 选择
    + `this.name = name`
    + `this.sleep()`
5. 方法调用， 类似函数调用， 但必须由实例对象发起。
    + `p3.wakesup()`

```ts
class Person {
    // ...

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
```

### `Getters / Setters`

??? 看不懂
