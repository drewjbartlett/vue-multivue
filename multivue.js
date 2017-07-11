import Vue from 'vue';

export default function (querySelector, vueComponent) {
    const appElements = Array.from(document.querySelectorAll(querySelector));

    for (let appEl of appElements) {
        let vueData = Object.assign({
            el: appEl
        }, vueComponent);

        new Vue(vueData);
    }
}
