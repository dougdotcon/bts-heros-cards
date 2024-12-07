$(document).ready(function() {
    // Garantir que o modal esteja oculto ao carregar a página
    $('#modal').hide();

    // Manipulação do Modal ao clicar em um cartão ou pressionar Enter/Space
    $('.card').on('click keypress', function(event) {
        // Permite abrir o modal ao clicar ou pressionar Enter/Space quando o cartão está focado
        if (event.type === 'click' || (event.type === 'keypress' && (event.which === 13 || event.which === 32))) {
            var name = $(this).find('.card-text').text();
            var description = '';

            // Defina descrições para cada membro
            switch(name) { 
                case 'Jungkook':
                    description = 'Jungkook, representado como o Homem de Ferro, é um gênio criativo e inovador. Ele combina sua determinação inabalável com tecnologia de ponta para proteger sua equipe. Assim como Tony Stark, Jungkook tem um espírito resiliente e um coração de ouro, sempre disposto a se sacrificar pelo bem maior.';
                    break;
                case 'RM':
                    description = 'RM, inspirado pelo Homem-Aranha, é o estrategista do grupo. Inteligente, perspicaz e de coração puro, ele se dedica a resolver os problemas com criatividade e empatia. Sua capacidade de liderança e o senso de responsabilidade fazem dele o herói que sempre busca a justiça, mesmo nas situações mais difíceis.';
                    break;
                case 'Suga':
                    description = 'Suga, assumindo o papel de Aquaman, é o guardião das profundezas. Sua conexão com a natureza e seu espírito independente o tornam um líder silencioso mas poderoso. Ele traz calma em momentos de turbulência e uma força surpreendente que emerge quando menos se espera.';
                    break;
                case 'Jin':
                    description = 'Jin, inspirado no Superman, é a personificação da força, coragem e compaixão. Ele é o protetor do grupo, sempre disposto a enfrentar qualquer desafio de frente. Sua presença transmite segurança e seu senso de humor único alivia as tensões em momentos difíceis.';
                    break;
                case 'J-Hope':
                    description = 'J-Hope, como Batman, é o mestre do planejamento e da execução. Apesar de sua energia alegre e otimista, ele possui um lado estratégico e focado, sempre analisando todos os detalhes para garantir o sucesso da missão. Ele é a luz que guia a equipe em meio à escuridão.';
                    break;
                case 'V':
                    description = 'V, inspirado pelo Flash, é a energia vibrante e impulsiva do grupo. Sua velocidade e habilidade de pensar rápido o tornam indispensável em momentos críticos. Ele é também um pilar de entusiasmo e criatividade, sempre inovando para ajudar o time a alcançar seus objetivos.';
                    break;
                case 'Jimin':
                    description = 'Jimin, assumindo o papel da Mulher Maravilha, é o símbolo de graça, agilidade e força. Ele combina sua determinação feroz com um coração gentil, sempre buscando equilibrar justiça e compaixão. Sua destreza em lidar com situações complexas é uma grande força para a equipe.';
                    break;
                default:
                    description = 'Informações não disponíveis.';
            }
            

            $('#modal-title').text(name);
            $('#modal-description').text(description);
            $('#modal').attr('aria-hidden', 'false').fadeIn();
        }
    });

    // Fechar o Modal ao clicar no botão de fechar
    $('.close').on('click', function() {
        $('#modal').attr('aria-hidden', 'true').fadeOut();
    });

    // Fechar o Modal ao clicar fora do conteúdo
    $(window).on('click', function(event) {
        if($(event.target).is('#modal')) {
            $('#modal').attr('aria-hidden', 'true').fadeOut();
        }
    });

    // Fechar o Modal ao pressionar a tecla Esc
    $(document).on('keyup', function(e) {
        if (e.key === "Escape") { // tecla Esc
            $('#modal').attr('aria-hidden', 'true').fadeOut();
        }
    });

    // Suavizar o scroll para âncoras
    $('a[href^="#"]').on('click', function(event) {
        var target = $(this.getAttribute('href'));
        if (target.length) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top - 70 // Ajuste conforme a altura da navbar
            }, 1000);
        }
    });
});
