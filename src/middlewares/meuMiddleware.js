exports.middlewareGlobal = (req, res, next)=>{
    // if(req.body.cliente){
    //     console.log('vi que você postou um cliente');
    //     next();
    // }
    // console.log();
    // console.log('Passei no midleware global');
    // console.log();

    res.locals.umaVariavelLocal ='este é o valor da variável local';
    next();
};
exports.outroMiddleware = (req, res, next)=>{

    next();
};
exports.checkCsrfError = (err, req, res, next)=>{
    if(err){
        return res.render('404');
    }
    next();
};
exports.csrfMiddleware = (req, res, next)=>{
    res.locals.csrfToken = req.csrfToken();
    next();
};
