var app = new Vue({
    el: '#app',
    data: {
        mensaje: 'Hola!'
    }
})

var app2 = new Vue({
    el: '#app-2',
    data: {
        mensaje: 'Cargaste la pagina el ' + new Date().toLocaleString()
    }
})

var app3 = new Vue({
    el: '#app-3',
    data: {
        visto: true
    }
})

var app4 = new Vue({
    el: '#app-4',
    data: {
        todos: [
            {texto: 'Aprende'},
            {texto: 'Mucho a'},
            {texto: 'programar'}
        ]
    }
})

var app5 = new Vue({
    el: '#app-5',
    data: {
        mensaje: 'Hola :v'
    },
    methods: {
        alreves (){
            this.mensaje = this.mensaje.split('').reverse().join('')
        }
    }
})

var app6 = new Vue({
    el: '#app-6',
    data: {
        mensaje: 'Escribe algo'
    }
})

//----------------------------------Componentes
Vue.component('productos', {
    props: ['producto'],
    template: '<li>{{producto.text}}</li>'
})

var app7 = new Vue({
    el: '#app-7',
    data: {
        listaProductos: [
            {id: 0, text: 'Vegetales'},
            {id: 1, text: 'Queso'},
            {id: 2, text: 'Fruta'}
        ]
    }
})