//* Tags para usar o EJS

/*
    _Notas_
    _   <% Controle de fluxo (if, for ...) %> 
    _   <%= Imprime escapando caracteres  %> 
    _   <%- Imprime sem escapar caracteres %> 
    _   <%# Comentários %> 
    _   <%- include('caminho/arquivo') %> 

    ?   |       Exemplo de controle de fluxo |
    ?
    ?   <% if(algumaCoisa){%> 
    ?       <%= exibe alguma coisa %> 
    ?   <%} else{%> 
    ?       <%= exibe outra coisa %> 
    ?   <% } %> 
    ?
    ?
    ?   |       Exemplo de dados |
    ?
    ?   res.render('index',{
    ?       titulo: 'este será o título',
    ?       titulo2: 'este será o título2',
    ?       numeros: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    ?   });
    ?

    _ Se enviado a partir de uma rota, estará disponível 
    _ somente para aquila rota, mas se for passado para
    _ um middleware global, todas as rotas terão acesso.
*/
