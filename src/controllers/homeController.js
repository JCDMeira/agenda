const Contato = require('../models/ContatoModel');

exports.index = async (req, res, next) =>{
    const contatos = await Contato.buscaContatos();
    res.render('index',{contatos});
}
