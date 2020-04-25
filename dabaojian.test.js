/*
1. dabaojian.test.js（测试文件）文件。
2. 这个文件就是用来测试dabaojian.js文件的，Jest会自动找对应的test作为测试文件，所以我们这里也使用了.test文件名:
    先来看两个必须会的方法：
        * test方法：Jest封装的测试方法，一般填写两个参数，描述和测试方法
        * expect方法 ：预期方法，就是你调用了什么方法，传递了什么参数，得到的预期是什么(代码中详细讲解)。
*/

// 3. 当然我们在编写测试代码前，用require引入要测试的文件。
const dabaojian = require('./dabaojian.js')
const { baojian1, baojian2 } = dabaojian


// 4. 引入之后，就可以用test和expect方法进行测试了。具体代码如下：
test('保健1 300元', () => {//描述
    expect(baojian1(300)).toBe('至尊享受') //也就是说，输入300，期望得到的值是“至尊享受”（既：如果得到的值是“至尊享受”就是正确的）
})

test('保健2  2000元', () => {
    expect(baojian2(2000)).toBe('双人服务')
})

/*
5.如何进行测试？
  * 要进行测试，我们可以打开package.json文件，然后把里边的scripts标签的值修改为jest.
  * 然后VSCode的终端窗口中输入yarn test 或者npm run test，就可以进行测试了，具体的测试输出结果我会在视频中进行讲解。
*/