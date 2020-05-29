import Vue from 'vue';
import Button from './button.vue';
import Icon from './icon.vue';
import ButtonGroup from './button-group.vue';

Vue.component('v-button', Button);
Vue.component('v-icon', Icon);
Vue.component('v-button-group', ButtonGroup);

new Vue({
    el: '#app',
    data: {
        loading1:false
    }
})

import chai from 'chai'
import spies from 'chai-spies'
chai.use(spies)
const expect = chai.expect
{
    const constructor = Vue.extend(Button);
    const vm = new constructor({
        propsData:{
            icon: 'i-setting'
        }
    });
    vm.$mount()
    let useElement = vm.$el.querySelector('use')
    let href = useElement.getAttribute('xlink:href')
    expect(href).to.eq('#i-setting')
    vm.$el.remove()
    vm.$destroy()
}
{
    const constructor = Vue.extend(Button);
    const button = new constructor({
        propsData:{
            icon: 'i-setting',
            loading:true
        }
    });
    button.$mount()
    let useElement = button.$el.querySelector('use')
    let href = useElement.getAttribute('xlink:href')
    expect(href).to.eq('#i-loading')
    button.$el.remove()
    button.$destroy()
}
{
    const div = document.createElement('div')
    document.body.appendChild(div)
    const constructor = Vue.extend(Button);
    const button = new constructor({
        propsData:{
            icon: 'i-setting',
            loading:true
        }
    });
    button.$mount(div)
    let svg = button.$el.querySelector('svg')
    let {order} = window.getComputedStyle(svg)
    expect(order).to.eq("1")
    button.$el.remove()
    button.$destroy()
}
{
    const constructor = Vue.extend(Button);
    const vm = new constructor({
        propsData:{
            icon: 'i-setting',
        }
    });
    vm.$mount()
    let spy = chai.spy(function(){})
    vm.$on('click', spy)
    let button = vm.$el
    button.click()
    expect(spy).to.have.been.called()
}