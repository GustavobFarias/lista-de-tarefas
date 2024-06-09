$(document).ready(function() { 
    $('form').on('submit', function(e) {
        e.preventDefault();
        const listaDeTarefas = $('#nome-tarefa').val();
        const novaLista = $(`<li style= "display: block"></li>`);
      $(`<li><p>${listaDeTarefas}</p></li>
        `).appendTo(novaLista);
        $(novaLista).appendTo('ul');
        $('#nome-tarefa').val('');
    })

    $(document).on('click', 'p', function() {
      $(this).toggleClass('complet');
    })

})

