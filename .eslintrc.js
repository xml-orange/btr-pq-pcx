module.exports = {
    parser:  '@typescript-eslint/parser',
    extends: [
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended'
    ],
    plugins: ['@typescript-eslint'],
    env:{
        browser: true,
        node: true,
    },
    //自动发现React的版本，从而进行规范react代码
    settings: {
        "react": {
            "pragma": "React",
            "version": "detect"
        }
    },
    //指定ESLint可以解析JSX语法
      parserOptions: {
        "ecmaVersion": 2019,
        "sourceType": 'module',
        "ecmaFeatures":{
            jsx:true
        }
    },
    rules: {
        "indent": [2, 2], //缩进风格
        "no-extra-semi":0,
    }
}
