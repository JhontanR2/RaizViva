// ---------------------------- INDEX SCRIPT

document.addEventListener('DOMContentLoaded', function () {


    const subtituloHero = document.getElementById('subtitulo-hero');
    if (subtituloHero) {

        const fraseEscolhida = frasesMotivacionais[13];
        subtituloHero.textContent = `"${fraseEscolhida.frase}"`;
    }



    const noticiasContainer = document.getElementById('noticias-container');

    if (noticiasContainer) {

        const destaquesDaHome = [
            { artigoIndex: 4, fotoIndex: 14 },
            { artigoIndex: 5, fotoIndex: 0 },
            { artigoIndex: 7, fotoIndex: 2 }
        ];

        let todosOsCardsHTML = '';

        for (let i = 0; i < destaquesDaHome.length; i++) {

            const destaque = destaquesDaHome[i];

            const artigoEscolhido = artigos[destaque.artigoIndex];
            const fotoEscolhida = galeriaFotos[destaque.fotoIndex];

            if (artigoEscolhido && fotoEscolhida) {

                const resumoArtigo = artigoEscolhido.paragrafo01.substring(0, 100) + '...';

                todosOsCardsHTML += `
                    <div class="col-12 col-md-6 col-lg-4 d-flex align-items-stretch">
                        <div class="card shadow-sm h-100">
                            <img src="${fotoEscolhida.imagem}" class="card-img-top" alt="${artigoEscolhido.titulo}"> 
                            <div class="card-body d-flex flex-column">
                                <h5 class="card-title">${artigoEscolhido.titulo}</h5>
                                <p class="card-text">${resumoArtigo}</p>
                                <a href="Pages/artigos.html" class="btn btn-leia-mais mt-auto">Leia Mais</a>
                            </div>
                        </div>
                    </div>
                `;
            }
        }

        noticiasContainer.innerHTML = todosOsCardsHTML;
    }
});

// ------ baixo artigoss ------



document.addEventListener('DOMContentLoaded', function () {




    const menuArtigos = document.getElementById('menu-artigos');
    const displayArtigo = document.getElementById('display-artigo');



    if (menuArtigos && displayArtigo) {


        const subtituloEl = document.getElementById('subtitulo-pagina');

        subtituloEl.textContent = `"${frasesMotivacionais[2].frase}"`;


        const palavrasChave = [
            "Meditação",
            "Energia Solar",
            "Medicina",
            "Agricultura",
            "Sono",
            "Microbioma",
            "Sustentáveis",
            "Biodiversidade",
            "Carne Cultivada"
        ];


        const artigosFiltrados = artigos.filter(artigo => {

            return palavrasChave.some(palavra => artigo.titulo.includes(palavra));
        });


        artigosFiltrados.forEach(artigo => {

            const collapseId = "artigo" + artigo.titulo.replace(/\s/g, '');

            const accordionItemHTML = `
                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#${collapseId}">
                            ${artigo.titulo}
                        </button>
                    </h2>
                    <div id="${collapseId}" class="accordion-collapse collapse" data-bs-parent="#menu-artigos">
                        <div class="accordion-body">
                            <button class="btn btn-sm btn-leia-mais w-100 carregar-artigo" data-titulo="${artigo.titulo}">
                                Ler Artigo Completo
                            </button>
                        </div>
                    </div>
                </div>
            `;
            menuArtigos.innerHTML += accordionItemHTML;
        });


        const botoesCarregar = document.querySelectorAll('.carregar-artigo');

        botoesCarregar.forEach(botao => {
            botao.addEventListener('click', function () {
                const artigoTitulo = this.getAttribute('data-titulo');


                const artigoSelecionado = artigos.find(art => art.titulo === artigoTitulo);

                if (artigoSelecionado) {
                    const artigoCompletoHTML = `
                        <div class="p-4 bg-light rounded-4 border">
                            <h2 class="fw-bold mb-3">${artigoSelecionado.titulo}</h2>
                            <p>${artigoSelecionado.paragrafo01}</p>
                            <p>${artigoSelecionado.paragrafo02}</p>
                            <p>${artigoSelecionado.paragrafo03}</p>
                        </div>
                    `;
                    displayArtigo.innerHTML = artigoCompletoHTML;
                }
            });
        });
    }
});


// ----------------- PRODUTOS --------

document.addEventListener('DOMContentLoaded', function () {
    const catalogoContainer = document.getElementById('catalogo-container');
    const filtrosContainer = document.getElementById('filtros-container');
    const searchInput = document.getElementById('search-input');
    const productCount = document.getElementById('product-count');

    let todosProdutos = catalogoFilmesSeries;

    
    const renderProdutos = (produtos) => {
        catalogoContainer.innerHTML = '';
        if (produtos.length === 0) {
            catalogoContainer.innerHTML = `<p class="col-12 text-center text-muted">Nenhuma cesta encontrada.</p>`;
            productCount.textContent = '0 resultados';
            return;
        }

        produtos.forEach(produto => {
            catalogoContainer.innerHTML += `
                <div class="col">
                    <div class="card card-produto h-100">
                        <img src="${produto.imagem}" class="card-img-top p-3" alt="${produto.titulo}">
                        <div class="card-body d-flex flex-column">
                            <h5 class="card-title">${produto.titulo}</h5>
                            <p class="card-text small text-muted">${produto.genero.join(', ')}</p>
                            <div class="d-flex justify-content-between align-items-center mt-auto">
                                <span class="card-price">R$${produto.anoLancamento}</span>
                                <a href="#" class="btn btn-view">COMPRAR</a>
                            </div>
                        </div>
                    </div>
                </div>`;
        });
        productCount.textContent = `${produtos.length} resultados`;
    };

    
    const renderFiltros = () => {
        const todasCategorias = new Set(todosProdutos.flatMap(p => p.genero));
        filtrosContainer.innerHTML = `<a href="#" class="list-group-item list-group-item-action filter-item active" data-filter="*">Todas as Categorias</a>`;
        todasCategorias.forEach(cat => {
            filtrosContainer.innerHTML += `<a href="#" class="list-group-item list-group-item-action filter-item" data-filter="${cat}">${cat}</a>`;
        });
    };

    
    searchInput.addEventListener('input', () => {
        const searchTerm = searchInput.value.toLowerCase();
        const produtosFiltrados = todosProdutos.filter(p => p.titulo.toLowerCase().includes(searchTerm));
        renderProdutos(produtosFiltrados);
    });

    filtrosContainer.addEventListener('click', e => {
        e.preventDefault();
        if (e.target.matches('.filter-item')) {
            document.querySelector('.filter-item.active').classList.remove('active');
            e.target.classList.add('active');
            const filtro = e.target.dataset.filter;
            const produtosFiltrados = (filtro === '*') 
                ? todosProdutos
                : todosProdutos.filter(p => p.genero.includes(filtro));
            renderProdutos(produtosFiltrados);
        }
    });

    // SectIONN 2 de produtos
    const carouselInner = document.getElementById('carousel-inner-container');
    const kits = todosProdutos.slice(0, 6); 
    let carouselHTML = '';
    for (let i = 0; i < kits.length; i += 3) {
        const activeClass = (i === 0) ? 'active' : '';
        carouselHTML += `<div class="carousel-item ${activeClass}"><div class="row">`;
        kits.slice(i, i + 3).forEach(kit => {
            carouselHTML += `
                <div class="col-md-4 mb-3">
                    <div class="card h-100">
                         <img src="${kit.imagem}" class="card-img-top p-3" alt="${kit.titulo}">
                         <div class="card-body text-center">
                            <h5 class="card-title">${kit.titulo}</h5>
                            <p class="card-price">R$${kit.anoLancamento + 50}</p>
                         </div>
                    </div>
                </div>`;
        });
        carouselHTML += `</div></div>`;
    }
    carouselInner.innerHTML = carouselHTML;


    // section 3 aqui
    const depoimentosContainer = document.getElementById('depoimentos-container');
    const depoimentos = frasesMotivacionais.slice(0, 3); 
    depoimentos.forEach(depo => {
        depoimentosContainer.innerHTML += `
            <div class="col-lg-4">
                <div class="card-depoimento shadow-sm">
                    <p class="fst-italic">"${depo.frase}"</p>
                    <footer class="blockquote-footer text-end">
                        <strong class="autor">${depo.autor}</strong>, cliente Raiz Viva
                    </footer>
                </div>
            </div>`;
    });

    
    renderFiltros();
    renderProdutos(todosProdutos);
});

// -------------------------eventos-------------------------



document.addEventListener('DOMContentLoaded', function () {
    
     // alertzinho 
    const eventoAlertContainer = document.getElementById('evento-alert-container');

    
    const proximoEvento = eventos[0];

    if (proximoEvento) {
        
        const mensagem = `<strong>Próximo Evento:</strong> Não perca o "${proximoEvento.nome}" no dia ${new Date(proximoEvento.data).toLocaleDateString('pt-BR')}!`;

        
        const alertHTML = `
            <div class="alert alert-warning alert-dismissible fade show" role="alert">
                <i class="bi bi-calendar-event me-2"></i> ${mensagem}
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
        `;

        
        eventoAlertContainer.innerHTML = alertHTML;
    }
    
    // fim d alert

   
    const timelineContainer = document.getElementById('timeline-container');
    const offcanvasEl = document.getElementById('offcanvasEvento');
    const bsOffcanvas = new bootstrap.Offcanvas(offcanvasEl);

const subtituloAgenda = document.getElementById('agenda-subtitulo');
    subtituloAgenda.textContent = frasesMotivacionais[8].frase; 

    eventos.forEach((evento, index) => {
        const side = index % 2 === 0 ? 'left' : 'right';
        const item = document.createElement('div');
        item.className = `timeline-item ${side}`;

        const dataFormatada = new Date(evento.data).toLocaleDateString('pt-BR', { day: '2-digit', month: 'long' });

        item.innerHTML = `
            <div class="timeline-content">
                <h3>${evento.nome}</h3>
                <time>${dataFormatada} às ${evento.horario}</time>
                <p class="mt-2">Local: ${evento.local}</p>
                <button class="btn btn-sm btn-outline-dark" data-evento-id="${index}">Ver Detalhes</button>
            </div>
        `;
        timelineContainer.appendChild(item);
    });

    
    timelineContainer.addEventListener('click', function(e) {
        if (e.target && e.target.matches('button[data-evento-id]')) {
            const eventoId = e.target.getAttribute('data-evento-id');
            const evento = eventos[eventoId];

            
            document.getElementById('offcanvasEventoLabel').textContent = evento.nome;
            document.getElementById('offcanvas-img').src = evento.imagem;
            document.getElementById('offcanvas-img').alt = evento.nome;
            document.getElementById('offcanvas-local').textContent = evento.local;
            document.getElementById('offcanvas-data').textContent = new Date(evento.data).toLocaleDateString('pt-BR');
            document.getElementById('offcanvas-horario').textContent = evento.horario;
            
            document.getElementById('offcanvas-descricao').textContent = `Descrição: ${catalogoFilmesSeries[eventoId] ? catalogoFilmesSeries[eventoId].sinopse : 'Venha descobrir as maravilhas do cultivo orgânico conosco!'}`;

            bsOffcanvas.show();
        }
    });

    // section 2 aqui
    const beneficiosContainer = document.getElementById('beneficios-container');
    
    document.getElementById('beneficios-subtitulo').textContent = `Por que participar de nossas Feiras e ${eventos[2].tipo}s ?`;

    
    const beneficiosData = [
        { icon: 'bi-people-fill', title: 'Conecte-se', text: poemas[0].texto },
        { icon: 'bi-book-half', title: 'Aprenda', text: poemas[1].texto },
        { icon: 'bi-egg-fried', title: 'Deguste', text: poemas[2].texto }
    ];

    beneficiosData.forEach(beneficio => {
        const col = document.createElement('div');
        col.className = 'col-md-4 beneficio-item';
        col.innerHTML = `
            <i class="${beneficio.icon}"></i>
            <h4 class="my-3 fw-bold">${beneficio.title}</h4>
            <p class="text-muted">"${beneficio.text}"</p>
        `;
        beneficiosContainer.appendChild(col);
    });
});


// --------- ccontato--------


document.addEventListener('DOMContentLoaded', function() {
    
    const tituloEl = document.getElementById('titulo-contato');
    const subtituloEl = document.getElementById('subtitulo-contato');
    
    
    tituloEl.textContent = "Fale Conosco"; 
    
    
    if (noticias && noticias.length > 0) {
        subtituloEl.textContent = `${noticias[0].resumo.substring(0, 63)}`;
    }
});

// ----------------- sobre nos ---------------

document.addEventListener('DOMContentLoaded', function () {
    
    // section 1
    
    const artigoMissao = artigos.find(a => a.titulo === "Agricultura Urbana Sustentável");
    if (artigoMissao) {
        document.getElementById('missao-titulo').textContent = artigoMissao.titulo;
        document.getElementById('missao-paragrafo1').textContent = artigoMissao.paragrafo01;
        
        document.getElementById('missao-header').style.backgroundImage = `url(${galeriaFotos[14].imagem})`;
    }

    // section 2
    
    const equipeContainer = document.getElementById('equipe-container');
    const equipe = noticias.slice(0, 4);

    equipe.forEach(membro => {
        equipeContainer.innerHTML += `
            <div class="col-lg-3 col-md-6">
                <div class="card-equipe">
                    <img src="${membro.imagem}" class="rounded-circle" alt="Foto de ${membro.autor}">
                    <h5 class="nome">${membro.autor}</h5>
                    <p class="cargo">${membro.categoria}</p>
                </div>
            </div>
        `;
    });

    // -----------------section 3 ------ 3
    
    const valoresContainer = document.getElementById('valores-container');
    
    const valores = [frasesMotivacionais[12], frasesMotivacionais[24], frasesMotivacionais[9]]; 
    const icones = ['bi-people-fill', 'bi-patch-check-fill', 'bi-graph-up-arrow'];

    valores.forEach((valor, index) => {
        valoresContainer.innerHTML += `
            <div class="col-md-4">
                <div class="card-valor">
                    <i class="${icones[index]}"></i>
                    <h5 class="valor-titulo">${valor.tema}</h5>
                    <p class="text-white-50 small fst-italic">"${valor.frase}"</p>
                </div>
            </div>
        `;
    });
});


// produtores------------------


document.addEventListener('DOMContentLoaded', function () {
    const produtoresContainer = document.getElementById('produtores-container');
    const filtrosContainer = document.getElementById('filtros-container');
    const subtituloProdutores = document.getElementById('subtitulo-produtores');
    
    
    if (frasesMotivacionais && frasesMotivacionais.length > 15) {
        subtituloProdutores.textContent = frasesMotivacionais[15].frase;
    }

    
    const todosProdutores = galeriaFotos;

    const renderProdutores = (filtro = '*') => {
        produtoresContainer.innerHTML = '';
        const produtoresFiltrados = (filtro === '*')
            ? todosProdutores
            : todosProdutores.filter(p => p.tags.includes(filtro));

        produtoresFiltrados.forEach(produtor => {
            const col = document.createElement('div');
            col.className = 'col';

            
            col.innerHTML = `
                <div class="flip-card-container">
                    <div class="flip-card-inner">
                        <div class="card-frente" style="background-image: url('${produtor.imagem}')">
                            <div class="card-frente-content">
                                <h3>${produtor.titulo}</h3>
                            </div>
                        </div>
                        <div class="card-verso">
                            <h4 class="mb-2">${produtor.titulo}</h4>
                            <p class="bio fst-italic">"${produtor.descricao}"</p>
                            <p class="mb-2"><strong class="location-icon"><i class="bi bi-geo-alt-fill"></i></strong> ${produtor.localizacao}</p>
                            <div class="tags">
                                ${produtor.tags.map(tag => `<span class="badge me-1">${tag}</span>`).join('')}
                            </div>
                        </div>
                    </div>
                </div>
            `;
            produtoresContainer.appendChild(col);
        });
    };

    const renderFiltros = () => {
        const todasTags = new Set(todosProdutores.flatMap(p => p.tags));
        filtrosContainer.innerHTML = `<button class="btn btn-filtro active" data-filter="*">Todos</button>`;
        todasTags.forEach(tag => {
            filtrosContainer.innerHTML += `<button class="btn btn-filtro" data-filter="${tag}">${tag.charAt(0).toUpperCase() + tag.slice(1)}</button>`;
        });
    };

    filtrosContainer.addEventListener('click', e => {
        if (e.target.matches('.btn-filtro')) {
            document.querySelector('.btn-filtro.active').classList.remove('active');
            e.target.classList.add('active');
            renderProdutores(e.target.dataset.filter);
        }
    });

    renderFiltros();
    renderProdutores();
});


