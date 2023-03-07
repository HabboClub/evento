$(document).ready(function() {
    indexRanking(6);
    //Rádio
    player();
});

$(".menu-toggle").click(function() {
    $(".menu-toggle").toggleClass('open');
    $(".menu-round").toggleClass('open');
    $(".menu-line").toggleClass('open');
});

const inputModeTheme = document.querySelector('#chk');
const rootElement = document.documentElement

const lightTheme = {
	'--corPadrao': '#FF7A00',
	'--corBranca': '#FFF',
	'--bg': 'url(../img/bg.png)',
	'--header': 'url(../img/header.png)',
	'--colunas': 'url(../img/galeriabg.png)'

}
const darkTheme = {
	'--corPadrao': '#202529',
	'--corBranca': '#4C555C',
	'--bg': 'url(../img/bgD.png)',
	'--header': 'url(../img/headerD.png)',
	'--colunas': 'url(../img/galeriabgD.png)'
}

/*
inputModeTheme.addEventListener('change', function(){
	const isChecked = inputModeTheme.checked
	isChecked ? changeThema(darkTheme) : changeThema(lightTheme)
})

function changeThema(theme){
	changeProperty('--corPadrao', )

	for(let prop in theme){
		rootElement.style.setProperty(prop, theme[prop])
	}
}

function changeProperty(property, value){
	rootElement.style.setProperty(property, value)
}
*/
function voltarTopo() {
    $('html, body').animate({ scrollTop: 0 }, 'slow');
}


function refreshAll() {
    setTimeout(function() {
        window.location.reload();
    }, 4000)

}

function menuResp(type) {

    if (type == 0) {
        $(".mainResp").fadeIn("slow", function() {
            $(".mainResp").toggleClass("ativado")
        })
    } else {
        $(".mainResp").fadeOut("slow", function() {
            $(".mainResp").toggleClass("ativado")
        })
    }

}

function popup(status, msg) {
    if (status == "true") { var type = "alert-success"; var icon = "check"; }
    if (status == "false") { var type = "alert-danger"; var icon = "error"; }

    $("#alertapop label").html(msg);
    $("#alertapop i").html(icon);
    $("#alertapop").toggleClass('show ' + type + '');


    setTimeout(function() {
        $("#alertapop").fadeOut("slow", function() {
            $("#alertapop").toggleClass('show ' + type + '');
        })
    }, 4000)
}

function loginOff() {
    const status = "false";
    const msg = "Faça seu login para ter acesso.";
    popup(status, msg);


}

function fucDesativado() {
    const status = "false";
    const msg = "Função será liberada em breve.";
    popup(status, msg);
}

function btnGeral(type) {
    window.location.href = "./" + type + "";
}

$(document).ready(function() {
    $("#nickUsuarioLogin").keyup(function() {

        var nickCampo = $("#nickUsuarioLogin").val();

        if (nickCampo == "") { var avatarGerador = "LightHabboFS" } else { var avatarGerador = nickCampo }

        var img = document.querySelector("#avatarLogin");

        img.setAttribute('src', 'https://www.habbo.com.br/habbo-imaging/avatarimage?user=' + avatarGerador + '&size=m&direction=4&head_direction=3&gesture=sml&t=');

    });

    $("#nickUsuarioRegistro").keyup(function() {

        var nickCampo = $("#nickUsuarioRegistro").val();

        if (nickCampo == "") { var avatarGerador = "LightHabboFS" } else { var avatarGerador = nickCampo }

        var img = document.querySelector("#avatarRegistro");

        img.setAttribute('src', 'https://www.habbo.com.br/habbo-imaging/avatarimage?user=' + avatarGerador + '&size=m&direction=4&head_direction=3&gesture=sml&t=');

    });

    $("#nickUsuarioRegistroR").keyup(function() {

        var nickCampo = $("#nickUsuarioRegistroR").val();

        if (nickCampo == "") { var avatarGerador = "LightHabboFS" } else { var avatarGerador = nickCampo }

        var img = document.querySelector("#avatarRegistroR");

        img.setAttribute('src', 'https://www.habbo.com.br/habbo-imaging/avatarimage?user=' + avatarGerador + '&size=m&direction=4&head_direction=3&gesture=sml&t=');

    });
});

function abrir (url){
    window.location.href = `${url}`
}

function login(type) {
    var nickSession = document.getElementById("nickUsuarioLogin").value;
    var codeSession = document.getElementById("pUsuarioLogin").value;

    $.ajax({
        url: './ajax/session',
        type: 'POST',
        data: { nickSession: nickSession, type: type, codeSession: codeSession },
        success: function(data) {
            var response = $.parseJSON(data);
            popup(response.status, response.message)
            if (response.status == "true") { if (response.status == "true") { refreshAll() } }
        }
    });
}

//Registro
function registro(type) {
    var nickRegistre = document.getElementById("nickUsuarioRegistro").value;
    var codeRegistre = document.getElementById("pUsuarioRegistro").value;
    var codeRegistreC = document.getElementById("pUsuarioRegistroC").value;
    var motto = document.getElementById("confirmpUsuarioRegistro").value;

    $.ajax({
        url: './ajax/session',
        type: 'POST',
        data: { nickRegistre: nickRegistre, motto: motto, type: type, codeRegistre: codeRegistre, codeRegistreC: codeRegistreC },
        success: function(data) {
            var response = $.parseJSON(data);
            popup(response.status, response.message)
            if (response.status == "true") { refreshAll() }
        }
    });
}

//Recuperar
function recuperar(type) {
    var nickRegistre = document.getElementById("nickUsuarioRegistroR").value;
    var codeRegistre = document.getElementById("pUsuarioRegistroR").value;
    var codeRegistreC = document.getElementById("pUsuarioRegistroCR").value;
    var motto = document.getElementById("confirmpUsuarioRegistroR").value;

    $.ajax({
        url: './ajax/session',
        type: 'POST',
        data: { nickRegistre: nickRegistre, motto: motto, type: type, codeRegistre: codeRegistre, codeRegistreC: codeRegistreC },
        success: function(data) {
            var response = $.parseJSON(data);

            popup(response.status, response.message)
            if (response.status == "true") { refreshAll() }
        }
    });
}


//Logout
function logout(type) {
    $.ajax({
        url: './ajax/session',
        type: 'POST',
        data: { type: type },
        success: function(data) {
            var response = $.parseJSON(data);
            popup(response.status, response.message)
            window.location.href = "./";
        }
    });
}

function seguir(type, session) {

    $.ajax({
        url: './ajax/follow',
        type: 'POST',
        data: { nickSession: session, type: type },
        success: function(data) {
            var response = $.parseJSON(data);
            popup(response.status, response.message)

            $("#seguidores_" + type + " label small").html("");
            $("#seguidores_" + type + " label small").append(response.desc);

            $("#seguidores_" + type + " label span").html("");
            $("#seguidores_" + type + " label span").append(response.qtd);
        }
    });
}

//Fixar Barra
function fixarBarra(e) {
    $("header .navbar").toggleClass('fixed');
    $("header .topbg").toggleClass('ajuste-mp-fixed');
}

//Marcar Presença
function marcarPresenca(type) {
    var codigoPresenca = document.getElementById("codigoPresenca").value;

    $.ajax({
        url: './ajax/processInfo',
        type: 'POST',
        data: { codigoPresenca: codigoPresenca, type: type },
        success: function(data) {
            var response = $.parseJSON(data);
            popup(response.status, response.message)
            if (response.status == "true") { refreshAll() }
        }
    });
}

//Fazer pedido
function fazerPedido(type) {
    var categoriaPedido = 0;
    var textoPedido = document.getElementById("textoPedido").value;

    $.ajax({
        url: './ajax/processInfo',
        type: 'POST',
        data: { categoriaPedido: categoriaPedido, textoPedido: textoPedido, type: type },
        success: function(data) {
            var response = $.parseJSON(data);
            popup(response.status, response.message)
            if (response.status == "true") { refreshAll() }
        }
    });
}

//Gerar moeda
function geraMoeda(type) {
    var gerar = document.getElementById("valorGerarMoeda").value;
    $.ajax({
        url: './ajax/processInfo',
        type: 'POST',
        data: { gerar: gerar, type: type },
        success: function(data) {
            var response = $.parseJSON(data);
            popup(response.status, response.message)
            if (response.status == "true") { refreshAll() }
        }
    });
}

//Horário
function horario(dia) {
    $.ajax({
        url: './ajax/horarios',
        type: 'POST',
        data: { dia: dia },
        success: function(data) {
            var response = $.parseJSON(data);
            $('#horariosBox').html("");
            $('#horariosBox').fadeOut(500);

            for (let h = 0; h < response.total; h++) {
                let boxHorario = `<div class="col-lg-4 col-md-6 col-sm-12 col-12">
                                        <div class="box-membro">
                                            <div class="avatar">
                                                <img src="https://www.habbo.com.br/habbo-imaging/avatarimage?user=${response.data[h].locutor}&gesture=sml&,wav&direction=3&head_direction=3&img_format=png&headonly=0&size=m&dance=0&frame_num=0&effect=" alt="">
                                            </div>
                                            <div class="informacoes">
                                                <label for="">${response.data[h].locutor}</label>
                                                <span class="">${response.data[h].programa}</span>

                                                <div class="hora-radio">
                                                    <label for="">${response.data[h].horaInicio}<span>às</span>${response.data[h].horaFinal}</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>`;

                $('.boxs-membros #horariosBox').fadeIn(500);
                $('.boxs-membros #horariosBox').append(boxHorario);
            }
        }
    });

}

//Equipe
function equipe(cargo) {
    $.ajax({
        url: './ajax/equipe',
        type: 'POST',
        data: { cargo: cargo },
        success: function(data) {
            var response = $.parseJSON(data);
            $('.boxs-membros #boxsEquipe').html("");

            for (let e = 0; e < response.total; e++) {
                let boxEquipe = `<div class="col-lg-4 col-md-6 col-sm-12 col-12">
                                    <div class="box-membro">
                                        <div class="avatar" style="background-image:url(${response.data[e].fundo})">
                                            <img src="https://www.habbo.com.br/habbo-imaging/avatarimage?user=${response.data[e].nick}&gesture=sml&,wav&direction=3&head_direction=3&img_format=png&headonly=0&size=m&dance=0&frame_num=0&effect=" alt="">
                                        </div>
                                        <div class="informacoes">
                                            <label for="">${response.data[e].cargo}</label>
                                            <span class="">${response.data[e].nick}</span>
                                            <!-- <p>${response.data[e].nick} na equipe</p> -->

                                            <div class="redes-sociais">
                                                <a href="./perfil/${response.data[e].nick}" class="social light">
                                                   <img src="./assets/img/icons/light.png">
                                                </a>
                                                <a href="https://www.twitter.com.br/${response.data[e].twitter}" class="social twitter">
                                                    <img src="./assets/img/icons/twitter.png">
                                                </a>
                                                <a title="${response.data[e].discord}" class="social discord">
                                                    <img src="./assets/img/icons/discord.png">
                                                </a>
                                                <a href="https://habbo.com.br/profile/${response.data[e].habbo}" class="social habbo">
                                                    <img src="./assets/img/icons/habbo.png">
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>`;
                $('.boxs-membros #boxsEquipe').append(boxEquipe);
            }
        }
    });

}

//Postar Arte
async function postarArte() {
    var tituloArte = document.getElementById("tituloArte").value;
    var categoriaArte = document.getElementById("categoriaArte").value;
    var editor = document.getElementById("textoEditor").innerHTML;
    $("#descricaoArte").html(editor)
    var descricaoArte = document.getElementById("descricaoArte").value;
    var photo = document.getElementById("photoUserConfig").value;

    if (photo != "") {
        var imagemArte = photoUserConfig.files[0].name;
        let formData = new FormData();
        formData.append("file", photoUserConfig.files[0]);
        await fetch('./Controllers/ajax/upload.php', { method: "POST", body: formData });
    }

    $.ajax({
        url: './ajax/postarArte',
        type: 'POST',
        data: { tituloArte: tituloArte, categoriaArte: categoriaArte, imagemArte: imagemArte, descricaoArte: descricaoArte },
        success: function(data) {
            var response = $.parseJSON(data);
            popup(response.status, response.message)
            if (response.status == "true") { refreshAll() }
        }
    });

}

var $input = document.getElementById('photoUserConfig');

if ($input) {
    var $fileName = document.getElementById('photoUserConfigName');
    $input.addEventListener('change', function() {
        $fileName.textContent = this.files[0].name;
    });
}

async function config(type) {
    var name = document.getElementById("nameUserConfig").value;
    var codeUser = document.getElementById("codeUserConfig").value;
    var motto = document.getElementById("mottoUserConfig").value;
    var editor = document.getElementById("textoEditor").innerHTML;
    $("#assinaturaUser").html(editor)
    var assinatura = document.getElementById("assinaturaUser").value;
    var photo = document.getElementById("photoUserConfig").value;

    if (photo != "") {
        var photo = photoUserConfig.files[0].name;
        let formData = new FormData();
        formData.append("file", photoUserConfig.files[0]);
        await fetch('./Controllers/ajax/upload.php', { method: "POST", body: formData });
    }

    $.ajax({
        url: './ajax/processInfo',
        type: 'POST',
        data: { name: name, motto: motto, type: type, photo: photo, codeUser: codeUser, assinatura: assinatura },
        success: function(data) {
            var response = $.parseJSON(data);
            popup(response.status, response.message)
            if (response.status == "true") { refreshAll() }

        }
    });
}


function comentar(type, news) {
    var comment = document.getElementById("textoEditor").innerHTML;
    $.ajax({
        url: './ajax/noticia',
        type: 'POST',
        data: { comment: comment, type: type, news: news },
        success: function(data) {
            var response = $.parseJSON(data);
            popup(response.status, response.message)
            if (response.status == "true") { refreshAll() }
        }
    });
}

function comentarC(type, news) {
    var comment = document.getElementById("textoEditor").innerHTML;
    $.ajax({
        url: './ajax/coluna',
        type: 'POST',
        data: { comment: comment, type: type, news: news },
        success: function(data) {
            var response = $.parseJSON(data);
            popup(response.status, response.message)
            if (response.status == "true") { refreshAll() }
        }
    });
}

function comentarA(type, arte) {

    var comment = document.getElementById("textoEditor").innerHTML;
    $.ajax({
        url: './ajax/arte',
        type: 'POST',
        data: { comment: comment, type: type, arte: arte },
        success: function(data) {
            var response = $.parseJSON(data);
            popup(response.status, response.message)
            if (response.status == "true") { refreshAll() }

        }
    });
}

function deletarC(type, c) {
    $.ajax({
        url: './ajax/noticia',
        type: 'POST',
        data: { comment: c, type: type },
        success: function(data) {
            var response = $.parseJSON(data);
            popup(response.status, response.message)
            if (response.status == "true") { refreshAll() }

        }
    });
}

function deletarA(type, a) {
    $.ajax({
        url: './ajax/arte',
        type: 'POST',
        data: { comment: a, type: type },
        success: function(data) {
            var response = $.parseJSON(data);
            popup(response.status, response.message)
            if (response.status == "true") { refreshAll() }

        }
    });
}

function deletarCo(type, a) {
    $.ajax({
        url: './ajax/coluna',
        type: 'POST',
        data: { comment: a, type: type },
        success: function(data) {
            var response = $.parseJSON(data);
            popup(response.status, response.message)
            if (response.status == "true") { refreshAll() }

        }
    });
}
function loja(type, passar) {
    var pag = document.getElementById("paginaLoja").value;

    $.ajax({
        url: './ajax/processInfo',
        type: 'POST',
        data: { pagina: pag, type: type, passar: passar },
        success: function(data) {
            var response = $.parseJSON(data);
            if (response.status == "true") {

                document.getElementById('paginaLoja').value = response.pag;

                $('.boxs-loja #lojaItens').html("").fadeOut(0)

                for (let p = 0; p < response.total; p++) {
                    let loja = `<div class="col-lg-6 col-md-6 col-sm-6 col-6">
                                    <div class="item-loja">
                                        <a href="./comprar/${response.data[p].id}/${response.data[p].link}" class="icon">
                                            <img src="${response.data[p].imagem}" alt="">
                                            <i class="material-icons">reply</i>
                                        </a>
                                        <div class="informacoes">
                                            <div class="descricao">
                                                ${response.data[p].nome}
                                            </div>
                                            <div class="info">
                                                <div class="valor"><i class="material-icons">
                                                    emoji_objects </i> <span>${response.data[p].valor}</span> lights</div>
                                                <div class="quantitativo"><i class="material-icons">
                                                    sell
                                                    </i> ${response.data[p].qtd}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div`;

                    $('.boxs-loja #lojaItens').append(loja)
                    $('.boxs-loja #lojaItens').fadeIn(1000)
                }
            }

        }
    });
}


function itemFree(type, passar) {
    var pag = document.getElementById("paginaItemFree").value;

    $.ajax({
        url: './ajax/processInfo',
        type: 'POST',
        data: { pagina: pag, type: type, passar: passar },
        success: function(data) {
            var response = $.parseJSON(data);
            if (response.status == "true") {

                document.getElementById('paginaItemFree').value = response.pag;

                $('.boxs-gratis #boxs-gratis').html("").fadeOut(0)

                for (let p = 0; p < response.total; p++) {
                    let itemFree = ` <div class="col">
                                <div class="box-gratis" data-bs-toggle="tooltip" data-bs-placement="top" title="${response.data[p].id}"><img src="${response.data[p].id}" ></div>
                            </div>`;

                    $('.boxs-gratis #boxs-gratis').append(itemFree)
                    $('.boxs-gratis #boxs-gratis').fadeIn(1000)
                }
            }

        }
    });
}

function comprar(type, item) {
    $.ajax({
        url: './ajax/processInfo',
        type: 'POST',
        data: { item: item, type: type },
        success: function(data) {
            var response = $.parseJSON(data);
            popup(response.status, response.message)

            if (response.status == "true") { refreshAll() }

        }
    });
}



if (typeof(document.getElementById("pesquisarAssunto")) != "undefined" && document.getElementById("pesquisarAssunto") !== null) {
    document.getElementById("pesquisarAssunto").addEventListener("keypress", function(e) {
        if (e.key === "Enter" && document.getElementById("pesquisarAssunto").value != "") { buscarPesquisa() }
    });
}


//Busca
function buscarPesquisa() {
    var busca = document.getElementById("pesquisarAssunto").value;
    $.ajax({
        url: './ajax/search',
        type: 'POST',
        data: { busca: busca },
        success: function(data) {
            var response = $.parseJSON(data);
            $('.boxs-conteudo #resultadosPesquisa').html("");
            $('.boxs-conteudo #countResultado').html("");
            $('.boxs-conteudo #countResultado').append(response.message);
            for (let p = 0; p < response.total; p++) {

                if (response.data.autor != "null") {
                    let box = `<div class="col-12">
                                <a href="${response.data[p].link}">
                                        <div class="box-resultado">
                                            <div class="img" style="background:url(${response.data[p].img})">
                                                <img src="https://www.habbo.com.br/habbo-imaging/avatarimage?user=${response.data[p].autor}&gesture=sml&,wav&direction=3&head_direction=3&img_format=png&headonly=0&size=m&dance=0&frame_num=0&effect=" alt="">
                                            </div>
                                            <div class="textos">
                                                <div class="titulos">
                                                    <label for="">${response.data[p].type}</label>
                                                    
                                                    <label for="">${response.data[p].criacao}</label>
                                                </div>
                                                <p>${response.data[p].titulo}</p>
                                            </div>
                                        </div></a>
                                    </div>`;

                    $('.boxs-conteudo #resultadosPesquisa').append(box);
                }
            }


            popup(response.status, response.message)
        }
    });
}

function pesquisar() {
    var pesquisa = document.getElementById("assuntoPesquisa").value;
    window.location.href = "pesquisa/" + pesquisa + "";
}

if (typeof(document.getElementById("assuntoPesquisa")) != "undefined" && document.getElementById("assuntoPesquisa") !== null) {
    document.getElementById("assuntoPesquisa").addEventListener("keypress", function(e) {
        if (e.key === "Enter" && document.getElementById("assuntoPesquisa").value != "") { pesquisar() }
    });
}

function categoria(type, cat) {
    $.ajax({
        url: './ajax/categoria',
        type: 'POST',
        data: { cat: cat, type: type },
        success: function(data) {
        console.debug(data)
            var response = $.parseJSON(data);
            if (response.status.type == "true") {

switch (type) {
  case 1:
    noticia(response.total, response.data, cat)
    break;
  case 2:
    galeria(response.total, response.data, cat)
    break;  
  case 3:
    coluna(response.total, response.data, cat)
    break;  

}
            } else {
                popup(response.status.type, response.status.message)
            }

        }
    });
}

function passar(type, passar) {


switch (type) {
  case 1:
    var c = "catNoticia"; 
    var p = "paginaNoticia";
    break;
  case 2:
    var c = "catGaleria"; 
    var p = "paginaGaleria";
    break;  
  case 3:
    var c = "catColuna"; 
    var p = "paginaColuna";
    break;  

}

    var cat = document.getElementById(c).value;
    var pagina = document.getElementById(p).value;

    $.ajax({
        url: './ajax/passar',
        type: 'POST',
        data: { cat: cat, type: type, passar: passar, pagina: pagina },
        success: function(data) {
            console.debug(data)
            var response = $.parseJSON(data);
            if (response.status == "true") {

switch (type) {
  case 1:
    noticia(response.total, response.data, cat)
    break;
  case 2:
    galeria(response.total, response.data, cat)
    break;  
  case 3:
    coluna(response.total, response.data, cat)
    break;  

}
                document.getElementById(c).value = cat;
                document.getElementById(p).value = response.pag;
            }

        }
    });
}


//Index
function indexRanking(type) {
    $.ajax({
        url: './ajax/processInfo',
        type: 'POST',
        data: { type: type },
        success: function(data) {
            var response = $.parseJSON(data);
            $('.tabela-ranking .tabela .row').html("");
            var r = 0;
            for (let e = 0; e < response.total; e++) {
                r++;
                if (r == 1) { var cor = 'var(--corOuro)'; var direction = 3 } else if (r == 2) { var cor = 'var(--corPrata)'; var direction = 2 } else if (r == 3) { var cor = 'var(--corBronze)'; var direction = 4 } else { var cor = 'var(--corPrata-2)' }

                let ranking = `<div class="col-lg-12">
                                    <div class="rank">
                                        <div class="posicao" style="background-color: ${cor};">
                                            <label for="">${r} º</label>
                                        </div>
                                        <div class="ganhador">
                                            <label for=""><a href="./perfil/${response.data[e].Nick}">${response.data[e].Nick}</a></label>
                                            <span>${response.data[e].Quantidade} mensagens</span>
                                        </div>
                                    </div>
                                </div>`;

                $('.tabela-ranking .tabela .row').append(ranking);

                if (r < 4) {
                    $('.podio-ranking').html();
                    $(".avatar_" + r).attr("src", `https://www.habbo.com.br/habbo-imaging/avatarimage?user=${response.data[e].Nick}&gesture=sml&,wav&direction=${direction}&head_direction=3&img_format=png&headonly=0&size=m&dance=0&frame_num=0&effect=`);
                }

            }

        }
    });
}

function ranking(type, rank) {
    $.ajax({
        url: './ajax/processInfo',
        type: 'POST',
        data: { type: type, rank: rank },
        success: function(data) {
            var response = $.parseJSON(data);
            $('.tabela-ranking .tabela .row').html("");

            var r = 0;
            for (let e = 0; e < response.total; e++) {
                r++;
                if (r == 1) { var cor = 'var(--corOuro)'; var direction = 3 } else if (r == 2) { var cor = 'var(--corPrata)'; var direction = 2 } else if (r == 3) { var cor = 'var(--corBronze)'; var direction = 4 } else { var cor = 'var(--corPrata-2)' }

                if (response.type == 1) {
                    var msg = "mensagens"


                } else if (response.type == 2) {
                    var msg = "seguidores"

                } else if (response.type == 3) {
                    var msg = "Lightcoins"

                }

                let ranking = `<div class="col-lg-12">
                                    <div class="rank">
                                        <div class="posicao" style="background-color: ${cor};">
                                            <label for="">${r} º</label>
                                        </div>
                                        <div class="ganhador">
                                            <label for=""><a href="./perfil/${response.data[e].Nick}">${response.data[e].Nick}</a></label>
                                            <span>${response.data[e].Quantidade} ${msg}</span>
                                        </div>
                                    </div>
                                </div>`;

                $('.tabela-ranking .tabela .row').append(ranking);

                if (r < 4) {
                    $('.podio-ranking').html();
                    $(".avatar_" + r).attr("src", `https://www.habbo.com.br/habbo-imaging/avatarimage?user=${response.data[e].Nick}&gesture=sml&,wav&direction=${direction}&head_direction=3&img_format=png&headonly=0&size=m&dance=0&frame_num=0&effect=`);
                }

            }

        }
    });
}

function tela() {
    var altura = window.screen.height;
    var largura = window.screen.width;
    console.log(altura, largura);
}

function noticia(count, news, cat) {
    document.getElementById('paginaNoticia').value = 0;
    document.getElementById('catNoticia').value = cat;

    $('#categoriaNoticia').modal('hide');

    $('.noticias-extras #noticiasExtras').html("").fadeOut(0)

    for (let p = 0; p < count; p++) {

        let noticia = `<div class="col-lg-3 col-6">
                            <div class="box-noticia-extras">
                                <div class="thumb">
                                    <img src="${news[p].img}" alt="">
                                    <div class="dados-noticia">
                                        <div class="views-comment">
                                            <label for=""> <i class="material-icons-outlined">
                                                visibility
                                                </i> <span>${news[p].views}</span>&nbsp; </label>
                                            <label for=""> <i class="material-icons-outlined">
                                                chat
                                                </i><span>${news[p].comentarios}</span>&nbsp; </label>
                                        </div>
                                        <a class="ir-noticia" href = "./noticia/${news[p].id}/${news[p].link}">
                                            <i class="material-icons-outlined">reply</i> 
                                        </a>
                                        <div class="categoria"></div>
                                    </div>
                                </div>
                                <div class="informacoes">
                                    <div class="titulacao">
                                        <div class="titulo" for="">${news[p].titulo}</div>
                                        <div class="subtitulo">${news[p].descricao}</div>
                                    </div>
                                    <div class="descricao">
                                        <div class="publicado">
                                            <label for=""> <i class="material-icons">edit</i> ${news[p].data}</label>
                                        </div>
                                        <div id="t1">
                                            <div class="autor">
                                                <img src="https://www.habbo.com.br/habbo-imaging/avatarimage?user=${news[p].autor}&size=m&direction=3&head_direction=3&headonly=1" alt="">
                                                <label for="">por &nbsp;<span> ${news[p].autor}</span></label>
                                            </div>
                                            <div class="reacoes">
                                                <img src="assets/img/emojis/core.png" alt="" >
                                                <img src="assets/img/emojis/espanto.png" alt="" >
                                                <img src="assets/img/emojis/love.png" alt="" >
                                                <img src="assets/img/emojis/riso.png" alt="" >
                                                <label>${news[p].reagir}</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>`;

        $('.noticias-extras #noticiasExtras').append(noticia)
        $('.noticias-extras #noticiasExtras').fadeIn(1000)
    }

}

function coluna(count, news, cat) {
    document.getElementById('paginaColuna').value = 0;
    document.getElementById('catColuna').value = cat;

    $('#categoriaColuna').modal('hide');

    $('.colunas-extras #colunasExtras').html("").fadeOut(0)

    for (let p = 0; p < count; p++) {

        let coluna = `<div class="col-lg-3 col-6">
                            <div class="box-coluna-extras">
                                <div class="thumb">
                                    <img src="${news[p].img}" alt="">
                                    <div class="dados-coluna">
                                        <div class="views-comment">
                                            <label for=""> <i class="material-icons-outlined">
                                                visibility
                                                </i> <span>${news[p].views}</span>&nbsp; </label>
                                            <label for=""> <i class="material-icons-outlined">
                                                chat
                                                </i><span>${news[p].comentarios}</span>&nbsp; </label>
                                        </div>
                                        <a class="ir-coluna" href = "./coluna/${news[p].id}/${news[p].link}">
                                            <i class="material-icons-outlined">reply</i> 
                                        </a>
                                        <div class="categoria"></div>
                                    </div>
                                </div>
                                <div class="informacoes">
                                    <div class="titulacao">
                                        <div class="titulo" for="">${news[p].titulo}</div>
                                        <div class="subtitulo">${news[p].descricao}</div>
                                    </div>
                                    <div class="descricao">
                                        <div class="publicado">
                                            <label for=""> <i class="material-icons">edit</i> ${news[p].data}</label>
                                        </div>
                                        <div id="t1">
                                            <div class="autor">
                                                <img src="https://www.habbo.com.br/habbo-imaging/avatarimage?user=${news[p].autor}&size=m&direction=3&head_direction=3&headonly=1" alt="">
                                                <label for="">por &nbsp;<span> ${news[p].autor}</span></label>
                                            </div>
                                            <div class="reacoes">
                                                <img src="assets/img/emojis/core.png" alt="" >
                                                <img src="assets/img/emojis/espanto.png" alt="" >
                                                <img src="assets/img/emojis/love.png" alt="" >
                                                <img src="assets/img/emojis/riso.png" alt="" >
                                                <label>${news[p].reagir}</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>`;

        $('.colunas-extras #colunasExtras').append(coluna)
        $('.colunas-extras #colunasExtras').fadeIn(1000)
    }

}

function galeria(count, news, cat) {
    document.getElementById('paginaGaleria').value = 0;
    document.getElementById('catGaleria').value = cat;

    $('#categoriaGaleria').modal('hide');

    $('.boxs-galeria #boxsGaleria').html("").fadeOut(0)

    for (let p = 0; p < count; p++) {

        let arte = `<div class="col-lg-3 col-6">
                        <div class="box-galeria">
                            <div class="thumb">
                                <img src="${news[p].img}" alt="">
                                <div class="dados-noticia">
                                    <a class="ir-arte" href="./arte/${news[p].id}/${news[p].link}">
                                        <i class="material-icons-outlined">reply</i> 
                                    </a>

                                    <div class="titulo-galeria">
                                        <label for="">${news[p].titulo}</label>
                                    </div>
                                    <div class="views-comment">
                                        <label for=""> <i class="material-icons-outlined">
                                            visibility
                                            </i> <span>${news[p].views}</span>&nbsp;
                                        </label> &nbsp; &nbsp;
                                        <label for=""> <i class="material-icons-outlined">
                                            chat
                                            </i>
                                            <span>${news[p].comentarios}</span>&nbsp; </label>
                                    </div>
                                </div>
                            </div>
                            <div class="informacoes">
                                <div class="descricao">
                                    <div id="t1">
                                        <div class="autor">
                                            <img src="https://www.habbo.com.br/habbo-imaging/avatarimage?user=${news[p].autor}&size=m&direction=3&head_direction=3&headonly=1" alt="">
                                            <label for="">por &nbsp;<span> ${news[p].autor}</span></label>
                                        </div>
                                        <div class="reacoes">
                                            <img src="assets/img/emojis/core.png" alt="" >
                                            <img src="assets/img/emojis/espanto.png" alt="" >
                                            <img src="assets/img/emojis/love.png" alt="" >
                                            <img src="assets/img/emojis/riso.png" alt="" >
                                            <label>${news[p].reagir}</label>
                                        </div>
                                    </div>
                                    <div class="publicado">
                                        <label for=""> <i class="material-icons">imagesearch_roller</i>${news[p].data}</label>
                                        <!-- <label id="like" for=""> <i class="material-icons">thumb_up</i>100</label> -->
                                        <!-- <label id="deslike" for=""> <i class="material-icons-outlined">thumb_up</i>100</label>-->
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>`;

        $('.boxs-galeria #boxsGaleria').append(arte)
        $('.boxs-galeria #boxsGaleria').fadeIn(1000)
    }

}

function reagir(type, emoji, post, user) {
    $.ajax({
        url: './ajax/reagir',
        type: 'POST',
        data: { type: type, emoji: emoji, post: post, user: user },
        success: function(data) {
            var response = $.parseJSON(data);
            popup(response.status, response.message)
            if (response.status == 'true') {
                $('.emoji #emoji_Count_' + emoji).html("").fadeOut(0)
                $('.emoji #emoji_Count_' + emoji).append(response.qtd).fadeIn(500)
            }
        }
    });
}

function submenuresp(type, sub) {
    $("#menuResp").toggleClass("d-none");
    $("#closeSubMenu").toggleClass("d-none");
    $("#closeMenu").toggleClass("d-none");
    $("#submenuResp #sub_" + sub).toggleClass("d-none");
    $("#submenuResp").toggleClass("d-none");

    $(".mainResp .tituloSub label").html("").fadeOut(0);
    $(".mainResp .tituloSub label").append(type).fadeIn(500);
    $('#closeSubMenu').attr("onclick", "backmenuResp(" + sub + ")");
}

function backmenuResp(sub) {
    $("#submenuResp").toggleClass("d-none");
    $("#sub_" + sub).toggleClass("d-none");
    $(".mainResp .tituloSub label").html("").fadeOut(500);
    $("#closeSubMenu").toggleClass("d-none");
    $("#menuResp").toggleClass("d-none");
    $("#closeMenu").toggleClass("d-none");
}

function compartilhar() {
    var modalRecorde = document.getElementById('modalCompartilhar')
    modalRecorde.addEventListener('show.bs.modal', function(event) {

        var button = event.relatedTarget
        var link = button.getAttribute('data-bs-whatever')

        document.querySelector("#sFacebook").href = "http://www.facebook.com/sharer.php?u=" + link;
        document.querySelector("#sTwitter").href = "https://twitter.com/share?url=" + link;
        document.querySelector("#sLinkedin").href = "http://www.linkedin.com/shareArticle?mini=true&url=" + link;
        document.querySelector("#sTumblr").href = "http://www.tumblr.com/share/link?url=" + link;

    })
}

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})