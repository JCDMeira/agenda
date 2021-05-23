const Contato = require('../models/ContatoModel');

exports.index = (req, res) =>{
    res.render('contato')
};
exports.register = async(req, res) =>{
    try{
        const contato = new Contato(req.body);
    await contato.register();

    if(contato.errors.length > 0){
        req.flash('errors', contato.errors);
        req.session.save(()=> res.redirect('/contato/index'));
        return
    }

    req.flash('success', "Contato registrado com sucesso");
        req.session.save(()=> res.redirect(`/contato/index/${contato.contato._id}`));
        return
    }catch(e){
        console.log(e);
        return req.render('404');
    }
};
