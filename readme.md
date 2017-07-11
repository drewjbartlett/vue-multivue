# MultiVue for Vue.js

Use multiple vue apps of the same class on the same page.

## Vue support

Supports only Vue >= 2

## Installation

    $ npm install vue-multivue --save

## JS & Vue

```js
// AwesomeComponent.vue
<template>
    <div>
        <button @click="doSomethingCool"></button>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                isDoingSomethingCool: false
            }
        },

        methods: {
            doSomethingCool () {
                this.isDoingSomethingCool = true;
            }
        }
    }
</script>

// app.js
import MultiVue from 'vue-multivue';
import AwesomeComponent from './Components/AwesomeComponent.vue';

new MultiVue('.my-app', {
    components: {
        AwesomeComponent
    }
});
```

## HTML

Now you can use your app with the `.my-app` selector multiple times on a single page.

```html
<html>
    <body>
        <div class="wrap">
            <div class="my-app">
                <awesome-component></awesome-component>
            </div>

            <div class="some-other-div">...</div>

            <div class="my-app another-class">
                <awesome-component></awesome-component>
            </div>

            <div class="some-other-div-again">...</div>

            <div class="my-app some-other-class">
                <awesome-component></awesome-component>
            </div>
        </div>
    </body>
</html>
```
