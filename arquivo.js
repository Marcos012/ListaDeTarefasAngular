$(document).ready(function(){

    $('#btnAdicionar').click(function(){


        var tarefa = $("#inputTarefa").val();

        adicionaTarefa(tarefa);

        $('.btnEditar').click(function(){
            editTarefa(this);
            
        })

        $('.btnExcluir').click(function(){
            excluiTarefa(this);
            

        })

         $('.btnConcluir').click(function(){
            concluirTarefa(this);
            

        })

        console.log(this);
    })

   
})

    function adicionaTarefa(tarefa) {
        //constroiId
        var id = constroiID();

        //controi linha a ser adicionada
        var elementoTarefa = "<tr>";
            elementoTarefa += "<td class='idTarefa'>"+ id +"</td>";
            elementoTarefa += "<td class='textoTarefa'>"+ tarefa +"</td>";
            elementoTarefa += "<td><button type='button' class='btn btn-default btnEditar'><span class='glyphicon glyphicon-pencil' aria-hidden='true'></span></button></td>";
            elementoTarefa += "<td><button type='button' class='btn btn-default btnExcluir'><span class='glyphicon glyphicon-remove' aria-hidden='true'></span></button></td>";
            elementoTarefa += "<td><button type='button' class='btn btn-default btnConcluir'><span class='glyphicon glyphicon-ok' aria-hidden='true'></span></button></td>";
            elementoTarefa += "</tr>";

        //adiciona linha na tabela
        $("Body table").append(elementoTarefa);
        //configura o ultimo id
        $('#ultimoId').val(id);
    
    }
    function editTarefa(botaoEditar) {

        var idTarefaEditada = $('#idTarefaEditada').val();

        if (idTarefaEditada > 0)
            return;

        var textoTarefa = $(botaoEditar).parents("tr").children(".textoTarefa").text();
        var idTarefa = $(botaoEditar).parents("tr").children(".idTarefa").text();

        $("#inputTarefa").val(textoTarefa);

        $("#idTarefaEditada").val(idTarefa);

        excluiTarefa(botaoEditar);
             
    }

    function excluiTarefa(botaoExcluir) {
        $(botaoExcluir).parents("tr").remove();
    }

    function constroiID() {
        var idTarefaEditada= $("#idTarefaEditada").val();

        if(idTarefaEditada > 0){
            $("#idTarefaEditada").val(0);
            return idTarefaEditada;
        }

        var id = parseInt($('#ultimoId').val()) + 1;
        return id;
    }

    function concluirTarefa(botaoConcluir){
        $('.textoTarefa').css('text-decoration', 'line-through')


}