import Toast from './Toast'

const obj = {}

obj.install = function(Vue){
    //1.创建组件构造器
    const toastContruster = Vue.extend(Toast)

    //2.根据组件构造器创建组件对象
    const toast = new toastContruster()

    //3.将创建的组件对象手动挂在到一个元素
    toast.$mount(document.createElement('div'))

    //4.将挂在后的元素挂载到body
    document.body.appendChild(toast.$el)

    Vue.prototype.$toast = toast
}

export default obj