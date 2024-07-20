// 类之子类和原型
function Range(from, to) {
    this.from = from;
    this.to = to;
}

Range.prototype = {
    /**
     * 如果 x 在范围内则返回 true, 否则返回 false
     * @returns
     */
    includes(x) {
        return this.from <= x && x <= this.to;
    },
    /**
     * 返回范围的字符表示
     * @returns
     */
    toString() {
        return "(" + this.from + "..." + this.to + ")"
    },
    /**
     * 让类的实例可迭代
     */
    * [Symbol.iterator]() {
        for (let x = Math.ceil(this.from); x <= this.to; x++) yield x;
    }
}

function Span(start, span) {
    if (span > 0) {
        this.from = start;
        this.to = start + span;
    } else {
        this.to = start;
        this.from = start + span;
    }
}

Span.prototype = Object.create(Range.prototype)
Span.prototype.constructor = Span;
Span.prototype.toString = function () {
    return `(${this.from}...${this.to - this.from})`
}

// 通过extends和super创建子类
class EZArray extends Array {
    get first() {
        return this[0]
    }

    get last() {
        return this[this.length - 1]
    }
}

let a = new EZArray()
console.log(a instanceof EZArray)
console.log(a instanceof Array)

class TypedMap extends Map {
    /**
     *
     * @param keyType 期望的键
     * @param valueType 期望的值
     * @param entries
     */
    constructor(keyType, valueType, entries) {
        if (entries) {
            for (let [k, v] of entries) {
                if (typeof k !== keyType || typeof v !== valueType) {
                    console.log(k)
                    console.log(v)
                    throw new TypeError('wrong type for entry ' + '[' + k + ',' + v + ']')
                }
            }
        }
        super(entries);
        this.keyType = keyType;
        this.valueType = valueType;
    }

    set(key, value) {
        if (this.keyType && typeof key !== this.keyType) {
            throw new TypeError(`${key} is not of type ${this.keyType}`)
        }
        if (this.valueType && typeof value !== this.valueType) {
            throw new TypeError(`${value} is not of type ${this.valueType}`)
        }
        return super.set(key, value)
    }
}

let entries = [["map", 123]]
let typedMap = new TypedMap('string', 'number', entries)
console.log(typedMap)
