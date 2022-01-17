const path = require('path');

module.exports ={
    entry: './sources/index.js',
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: 'main.js',
    },
    resolve:{
        extensions: [".js"]
    }

    
}
