/*
1. dabaojian.js(被测试文件)
2. dabaojian.js文件比如是我们写的一些业务逻辑方法，我们就那他当一个例子，最后要测试的就是这个文件。这里我们模仿一次去按摩的经历。
*/
function baojian1(money) {
    return money >= 200 ? '至尊享受' : '基本按摩'
}

function baojian2(money) {
    return money >= 1000 ? '双人服务' : '单人服务'
}
module.exports = {
    baojian1, baojian2
}