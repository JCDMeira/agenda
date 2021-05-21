// const HomeModel = require('../models/HomeModel');

// HomeModel.create({
//     titulo: 'Um título de testes',
//     descricao: 'Uma descrição de testes'
// })
//     .then(dados => console.log(dados))
//     .catch(e => console.log(e));

// HomeModel.find()
//     .then(dados => console.log(dados))
//     .catch(e => console.log(e));

exports.paginaInicial = (req, res, next) =>{
    // req.session.usuario = {nome:"jean", logado:true}
    // console.log(req.session.usuario)
    // req.flash('info', 'Olá mundo')
    // req.flash('error', 'Olá')
    // req.flash('success', 'só mundo')
    // console.log(req.flash('error'),req.flash('success'),req.flash('info') );
    res.render('index',{
        titulo: 'este será o título',
        // titulo2: 'este será o título2',
        numeros: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    });
}
exports.formulario = (req, res, next) =>{
        console.log(req.body);
        res.send(`O nome que você enviou foi: ${req.body.cliente}
        <br>
        <br>
        <form action="/" method="get">
            <button>Voltar</button>
            </form>
        `);
    }
    