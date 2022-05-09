module.exports = {
    root: true,
    env: {
        node: true,
    },
    extends: [
        'plugin:vue/essential'
    ],
    parserOptions: {
        parser: 'babel-eslint',
    },
    rules: {
        'template-curly-spacing': 'off',
        'arrow-parens': 0,
        'eqeqeq': 0,
        'spaced-comment': 0,
        'indent': 'off',
        // "indent": ["error", 4, { "SwitchCase": 1 }],
        // allow async-await
        'no-dupe-args': 2, // 函数参数不能重复
        'no-duplicate-case': 2, // switch中的case标签不能重复
        'no-else-return': 2, // 如果if语句里面有return,后面不能跟else语句
        'no-inline-comments': 0, // 禁止行内备注
        'no-mixed-spaces-and-tabs': 2, // 禁止混用tab和空格
        // 'no-unused-vars': [1, {vars: 'all', args: 'after-used'}], //不能有声明后未被使用的变量或参数
        // 'no-unused-vars': [1, {vars: 'all', args: 'none'}], //不能有声明后未被使用的变量或参数
        // 最常出现的错误
        'no-unused-vars': 'off',
        // 最常出现的错误
        'vue/no-use-v-if-with-v-for': ['error', {
            'allowUsingIterationVar': true,
        }],
        'generator-star-spacing': 'off',
        'object-curly-spacing': 0, // 要求或禁止在下列情况下的花括号之间有空格
        'prefer-const': 0, // 如果一个变量不会被重新赋值，最好使用const进行声明。
        'quote-props': 0, // 对象字面量的属性名称可以用两种方式进行定义：使用文本或字符串 。
        'comma-dangle': 0, // 根据 ES5规范，对象字面量中的拖尾逗号是合法的。然而，在 IE8（非 IE8 文档模式）下，当在 JavaScript 出现拖尾逗号，以下情况下将抛出错误。
        'space-before-function-paren': [0, 'always'], // 函数定义时括号前面要不要有空格
        'no-use-before-define': 2, // 未定义前不能使用
        'no-var': 0, // 禁用var，用let和const代替
        'no-tabs': 0, // 不允许使用制表符字符，包括在注释中
        'semi': 0, // 语句强制分号结尾
        'semi-spacing': [0, {before: false, after: true}], // 分号前后空格
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    }
}
