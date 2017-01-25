const babel = require('babel-core')

const result = babel.transformFileSync('./messages/example.js', {
    plugins: ['react-intl'],
})

console.log(result.metadata['react-intl'])
