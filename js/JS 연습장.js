function Circle(radius) {
    this.radius = radius

}
function Cyllinder(radius, height) {
    Cyllinder.prototype.radius = radius
    this.height = height
}
Cyllinder.prototype = new Circle()

Circle.prototype.getArea = function() {
    return this.radius ** 2 * 3.14
}
Cyllinder.prototype.getVolume = function() {
    this.height * this.getArea()
}
var c = new Cyllinder(5, 10)
console.dir(c)


// 콜백 지옥
/*
setTimeout(() => {
    alert(1)
    setTimeout(() => {
        alert(2)
        setTimeout(() => {
            alert(3)
            setTimeout(() => {
                alert(4)
                setTimeout(() => alert(5), 5000)
            }, 4000)
        }, 3000)
    }, 2000)
}, 1000)
*/

// 프로미스 천국
new Promise(resolve => {
    setTimeout(() => {alert(1); resolve()}, 1000)
}).then(() => new Promise(resolve => {
    setTimeout(() => {alert(2); resolve()}, 2000)
})).then(() => new Promise(resolve => {
    setTimeout(() => {alert(3); resolve()}, 3000)
})).then(() => new Promise(resolve => {
    setTimeout(() => {alert(4); resolve()}, 4000)
})).then(() => new Promise(resolve => {
    setTimeout(() => {alert(5); resolve()}, 5000)
}))