## vue-cli-plugin-coffeescript

CoffeeScript 2.x Plugin for [vue-cli@3.0](https://github.com/vuejs/vue-cli)

<br/>

### Usage

- just run: `vue add coffeescript`

- if you project is using JSX with CoffeeScript:

    1. add `babel.config.js` to your project root dir:
        ```
        // babel.config.js
        module.exports = {
          plugins: ['transform-vue-jsx']
        }
        ```

    2. install dependencies for JSX:
        ```
        npm i babel-plugin-syntax-jsx babel-plugin-transform-vue-jsx\
          babel-helper-vue-jsx-merge-props -D
        ```

<br/>

### Features

- parse CoffeeScript2 in your Vue project.

- support JSX in `.coffee`.

- support entry `main.coffee`.

<br/>

### LICENSE

[**MIT**](LICENSE)
