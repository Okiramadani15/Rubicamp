
export const PI = 22/7

export default class Calculator {
    constructor (){
        this.nilai = 1
}

add(value){
    this.nilai += value
    return this
}

substract(value){
    this.nilai -= value
    return this
}

divide(value){
    this.nilai /= value
    return this
}

multiply(value){
    this.nilai *= value
    return this
}


square(){
    this.nilai = Math.pow(this.nilai, 2)
    return this
}

exponent(value){
    this.nilai = Math.pow(this.nilai,value)
    return this
}

squareRoot(){
    this.nilai = Math.sqrt(this.nilai)
    return this
}

x (value){
    this.nilai = value
}

result(){
console.log(this.nilai)
}
}

