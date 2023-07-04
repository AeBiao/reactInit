module.exports = {
    extends: ['airbnb', 'airbnb/hooks', 'prettier'],
    parser: '@typescript-eslint/parser', // ESLint默认使用esprima作为其解析器，也可以在配置文件中指定一个不同的解析器（它必须是一个Node模块，且它必须符合parserinterface）
    env: {
        // 要在配置文件里指定环境，使用env关键字指定你想启用的环境，并设置它们为true
        browser: true,
        node: true,
        mocha: true,
        es6: true,
        commonjs: true
    },
    globals: {
        // 要在配置文件中配置全局变量,对于每个全局变量键，将对应的值设置为"writable"以允许重写变量，或"readonly"不允许重写变量
        // "Babel":"writable",
        // "React":"writable"
    },
    plugins: [
        // 在配置文件里配置插件时,可以使用plugins关键字来存放插件名字的列表。插件名称可以省略eslint-plugin-前缀。

        'react',

        'jsx-a11y',

        'react-hooks',

        'import',

        'prettier'
    ],

    rules: {
        // indent: ['error', 4],
        semi: [
            'error',
            'always',
            {
                omitLastInOneLineBlock: true
            }
        ],
        'react/jsx-indent': ['error', 4],
        'no-use-before-define': 'off',
        'linebreak-style': ['off', 'windows'],
        'react/jsx-filename-extension': [
            'error',
            {
                extensions: ['.js', '.jsx', '.ts', '.tsx']
            }
        ],
        'class-methods-use-this': 'off',
        'import/extensions': 'off',
        'import/no-unresolved': 'off'
        // 'prettier/prettier': [
        //     'error',
        //     {
        //         trailingComma: 'es5',
        //         singleQuote: true,
        //         printWidth: 100,
        //         tabWidth: 4,
        //         semi: true,
        //         endOfLine: 'auto',
        //     },
        // ],
    }
};
