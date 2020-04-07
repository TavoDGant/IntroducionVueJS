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