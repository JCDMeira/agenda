exports.teste = (req, res) =>{
    console.log(req.params);
    console.log(req.query);
    res.send(`Adicione algo na URL params  após testes,  exemplo : /testes/123
    <br>
    <br>
    o resultado aparecerá aqui --> ${req.params.idUsuario}
    <br>
    <br>
    <form action="/" method="get">
        <button>Voltar</button>
        </form>
    `)
}