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

// Função para verificar se um elemento está visível na viewport
function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Função para animar elementos quando eles entram na viewport
function handleScrollAnimations() {
  const elements = document.querySelectorAll('.animate-on-scroll');
  elements.forEach(element => {
    if (isElementInViewport(element)) {
      element.classList.add('visible');
    }
  });

  // Animar itens da timeline separadamente
  const timelineItems = document.querySelectorAll('.timeline-item');
  timelineItems.forEach(item => {
    if (isElementInViewport(item)) {
      item.classList.add('visible');
    }
  });
}

// Contador para estatísticas
function animateNumbers() {
  const stats = document.querySelectorAll('.stat-number');
  stats.forEach(stat => {
    const target = parseInt(stat.textContent);
    if (isNaN(target)) return;
    
    let current = 0;
    const increment = target / 50;
    const duration = 1500;
    const step = duration / 50;

    const counter = setInterval(() => {
      current += increment;
      if (current >= target) {
        clearInterval(counter);
        current = target;
      }
      stat.textContent = Math.floor(current);
    }, step);
  });
}

// Smooth scroll para links de navegação
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Event listeners
window.addEventListener('scroll', handleScrollAnimations);
window.addEventListener('load', () => {
  handleScrollAnimations();
  animateNumbers();
});

// Animação do menu mobile
const navItems = document.querySelectorAll('nav ul li');
navItems.forEach((item, index) => {
  item.style.animation = `fadeIn 0.5s ease forwards ${index * 0.1}s`;
});

// Efeito parallax suave no header
window.addEventListener('scroll', () => {
  const scrolled = window.pageYOffset;
  const header = document.querySelector('main');
  header.style.transform = `translateY(${scrolled * 0.4}px)`;
});

// Animação dos power cards
const powerCards = document.querySelectorAll('.power-card');
powerCards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.transform = 'translateY(-10px) scale(1.05)';
  });
  
  card.addEventListener('mouseleave', () => {
    card.style.transform = 'translateY(0) scale(1)';
  });
});

// Newsletter form
const newsletterForm = document.querySelector('.newsletter-form');
if (newsletterForm) {
  newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = newsletterForm.querySelector('input[type="email"]').value;
    // Aqui você pode adicionar a lógica para enviar o email para seu backend
    alert('Obrigado por se inscrever! Em breve você receberá nossas novidades.');
    newsletterForm.reset();
  });
}
