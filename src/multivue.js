import Vue from 'vue';

/**
 * Creates an instance for each occurence of the given query selector.
 *
 * @param {String} querySelector
 * @param {Object} vueComponent
 * @return {Array}
 */
export default function(querySelector, vueComponent) {
    const appElements = Array.from(document.querySelectorAll(querySelector));
    const instances = [];
  
    if (appElements.length === 0) {
      return instances;
    }
  
    for (const appEl of appElements) {
      const vueData = Object.assign({
        el: appEl,
      }, vueComponent);
  
      instances.push(new Vue(vueData));
    }
  
    return instances;
  }
  