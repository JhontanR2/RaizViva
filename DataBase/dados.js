//-------------------------------------------------------
// 01 - frases motivacionais 
//-------------------------------------------------------
const frasesMotivacionais = [
    {
      id: 1,
      frase: "O fracasso é apenas uma oportunidade para recomeçar com mais sabedoria.",
      autor: "Henry Ford",
      tema: "resiliência",
      data: "2023-01-15"
    },
    {
      id: 2,
      frase: "Se você pode sonhar, pode realizar. A imaginação é o primeiro passo da criação.",
      autor: "Walt Disney",
      tema: "sonhos",
      data: "2023-02-20"
    },
    {
      id: 3,
      frase: "A disciplina é a ponte entre metas e realizações.",
      autor: "Jim Rohn",
      tema: "produtividade",
      data: "2023-03-10"
    },
    {
      id: 4,
      frase: "Sua única limitação é a que você impõe a si mesmo.",
      autor: "Autor Desconhecido",
      tema: "superação",
      data: "2023-04-05"
    },
    {
      id: 5,
      frase: "Grandes coisas nunca vêm de zonas de conforto. Arrisque-se hoje!",
      autor: "Autor Desconhecido",
      tema: "coragem",
      data: "2023-05-12"
    },
    {
      id: 6,
      frase: "O sucesso é a soma de pequenos esforços repetidos dia após dia.",
      autor: "Robert Collier",
      tema: "persistência",
      data: "2023-06-18"
    },
    {
      id: 7,
      frase: "Você não precisa ser perfeito, apenas precisa começar.",
      autor: "Autor Desconhecido",
      tema: "progresso",
      data: "2023-07-22"
    },
    {
      id: 8,
      frase: "Acredite no processo. Seu tempo está chegando.",
      autor: "Autor Desconhecido",
      tema: "paciência",
      data: "2023-08-30"
    },
    {
      id: 9,
      frase: "O que você faz hoje pode melhorar todos os seus amanhãs.",
      autor: "Ralph Marston",
      tema: "futuro",
      data: "2023-09-14"
    },
    {
      id: 10,
      frase: "Dificuldades preparam pessoas comuns para destinos extraordinários.",
      autor: "C.S. Lewis",
      tema: "crescimento",
      data: "2023-10-05"
    },
    {
      id: 11,
      frase: "Sua mente é poderosa. Quando você a preenche com positividade, sua vida muda.",
      autor: "Autor Desconhecido",
      tema: "mentalidade",
      data: "2023-11-11"
    },
    {
      id: 12,
      frase: "Progresso, não perfeição. Celebre cada pequena vitória!",
      autor: "Autor Desconhecido",
      tema: "evolução",
      data: "2023-12-03"
    },
    {
      id: 13,
      frase: "O talento vence jogos, mas só o trabalho em equipe ganha campeonatos.",
      autor: "Michael Jordan",
      tema: "colaboração",
      data: "2024-01-25"
    },
    {
      id: 14,
      frase: "Quando você quer algo, todo o universo conspira para que você realize.",
      autor: "Paulo Coelho",
      tema: "determinação",
      data: "2024-02-14"
    },
    {
      id: 15,
      frase: "A persistência transforma o 'não' em 'ainda não'.",
      autor: "Autor Desconhecido",
      tema: "resiliência",
      data: "2024-03-08"
    },
    {
      id: 16,
      frase: "Sua jornada tem valor. Compare-se apenas com quem você era ontem.",
      autor: "Autor Desconhecido",
      tema: "autoconhecimento",
      data: "2024-04-17"
    },
    {
      id: 17,
      frase: "Encontre oportunidades onde outros veem obstáculos.",
      autor: "Albert Einstein",
      tema: "oportunidade",
      data: "2024-05-21"
    },
    {
      id: 18,
      frase: "A ação é o fundamento básico para todo sucesso.",
      autor: "Pablo Picasso",
      tema: "execução",
      data: "2024-06-09"
    },
    {
      id: 19,
      frase: "O otimismo é a fé que leva à realização.",
      autor: "Helen Keller",
      tema: "positividade",
      data: "2024-07-30"
    },
    {
      id: 20,
      frase: "Você é mais forte do que suas desculpas. Levante-se e faça acontecer!",
      autor: "Autor Desconhecido",
      tema: "atitude",
      data: "2024-08-12"
    },
    {
      id: 21,
      frase: "Nada pode parar você, exceto o medo que você alimenta.",
      autor: "Autor Desconhecido",
      tema: "coragem",
      data: "2024-09-05"
    },
    {
      id: 22,
      frase: "A criatividade é inteligência se divertindo.",
      autor: "Albert Einstein",
      tema: "inovação",
      data: "2024-10-18"
    },
    {
      id: 23,
      frase: "Você nunca é velho demais para definir um novo objetivo ou sonhar um novo sonho.",
      autor: "C.S. Lewis",
      tema: "reinvenção",
      data: "2024-11-22"
    },
    {
      id: 24,
      frase: "O conhecimento é poder, mas só a prática traz resultados.",
      autor: "Tony Robbins",
      tema: "ação",
      data: "2024-12-10"
    },
    {
      id: 25,
      frase: "Seja a mudança que você deseja ver no mundo.",
      autor: "Mahatma Gandhi",
      tema: "liderança",
      data: "2025-01-15"
    }
  ];
  
  //-------------------------------------------------------
  // 02 - Catálogo de filmes e séries
  //-------------------------------------------------------
  const catalogoFilmesSeries = [
    {
      id: 1,
      titulo: "O Último Reino",
      genero: ["Ação", "Drama Histórico"],
      sinopse: "Um jovem nobre busca recuperar seu legado durante a invasão viking na Inglaterra do século IX.",
      anoLancamento: 2015,
      imagem: "https://picsum.photos/400/300?random=101",
      classificacao: "16+",
      duracao: "50min/episódio",
      temporadas: 5
    },
    {
      id: 2,
      titulo: "Interestelar",
      genero: ["Ficção Científica", "Drama"],
      sinopse: "Um grupo de astronautas viaja através de um buraco de minhoca em busca de um novo lar para a humanidade.",
      anoLancamento: 2014,
      imagem: "https://picsum.photos/400/300?random=102",
      classificacao: "12+",
      duracao: "2h49min",
      oscar: true
    },
    {
      id: 3,
      titulo: "Stranger Things",
      genero: ["Terror", "Ficção Científica"],
      sinopse: "Crianças enfrentam criaturas sobrenaturais e conspirações governamentais em uma pequena cidade dos anos 80.",
      anoLancamento: 2016,
      imagem: "https://picsum.photos/400/300?random=103",
      classificacao: "14+",
      temporadas: 4,
      emAndamento: true
    },
    {
      id: 4,
      titulo: "Parasita",
      genero: ["Thriller", "Drama"],
      sinopse: "Uma família pobre infiltra-se na casa de uma família rica, desencadeando eventos inesperados.",
      anoLancamento: 2019,
      imagem: "https://picsum.photos/400/300?random=104",
      classificacao: "16+",
      duracao: "2h12min",
      oscar: true
    },
    {
      id: 5,
      titulo: "The Witcher",
      genero: ["Fantasia", "Aventura"],
      sinopse: "Um caçador de monstros mutante protege uma jovem com poderes especiais em um mundo cheio de magia.",
      anoLancamento: 2019,
      imagem: "https://picsum.photos/400/300?random=105",
      classificacao: "18+",
      temporadas: 3
    },
    {
      id: 6,
      titulo: "Duna",
      genero: ["Ficção Científica", "Aventura"],
      sinopse: "Um jovem nobre lidera uma rebelião no planeta desértico Arrakis, fonte da substância mais valiosa do universo.",
      anoLancamento: 2021,
      imagem: "https://picsum.photos/400/300?random=106",
      classificacao: "12+",
      duracao: "2h35min"
    },
    {
      id: 7,
      titulo: "La Casa de Papel",
      genero: ["Crime", "Drama"],
      sinopse: "Um grupo de criminosos planeja o maior assalto à Casa da Moeda da Espanha.",
      anoLancamento: 2017,
      imagem: "https://picsum.photos/400/300?random=107",
      classificacao: "16+",
      temporadas: 5
    },
    {
      id: 8,
      titulo: "O Gambito da Rainha",
      genero: ["Drama"],
      sinopse: "Uma órfã prodígio do xadrez enfrenta vícios e preconceitos nos anos 60 durante a Guerra Fria.",
      anoLancamento: 2020,
      imagem: "https://picsum.photos/400/300?random=108",
      classificacao: "14+",
      temporadas: 1,
      minisserie: true
    },
    {
      id: 9,
      titulo: "Vingadores: Ultimato",
      genero: ["Ação", "Ficção Científica"],
      sinopse: "Os heróis restantes tentam reverter o estrago causado por Thanos no universo.",
      anoLancamento: 2019,
      imagem: "https://picsum.photos/400/300?random=109",
      classificacao: "12+",
      duracao: "3h01min",
      bilheteria: "US$ 2.798 bilhões"
    },
    {
      id: 10,
      titulo: "The Crown",
      genero: ["Drama Histórico"],
      sinopse: "A vida da Rainha Elizabeth II e os eventos que moldaram o século XX.",
      anoLancamento: 2016,
      imagem: "https://picsum.photos/400/300?random=110",
      classificacao: "14+",
      temporadas: 6,
      emmy: true
    },
    {
      id: 11,
      titulo: "Matrix",
      genero: ["Ficção Científica", "Ação"],
      sinopse: "Um hacker descobre que a realidade é uma simulação controlada por máquinas inteligentes.",
      anoLancamento: 1999,
      imagem: "https://picsum.photos/400/300?random=111",
      classificacao: "14+",
      duracao: "2h16min",
      cult: true
    },
    {
      id: 12,
      titulo: "Breaking Bad",
      genero: ["Drama", "Crime"],
      sinopse: "Um professor de química transforma-se em um poderoso traficante de metanfetamina após diagnóstico de câncer.",
      anoLancamento: 2008,
      imagem: "https://picsum.photos/400/300?random=112",
      classificacao: "18+",
      temporadas: 5,
      notaIMDb: 9.5
    },
    {
      id: 13,
      titulo: "Titanic",
      genero: ["Romance", "Drama"],
      sinopse: "Um romance proibido entre passageiros de classes sociais diferentes no navio mais luxuoso do mundo.",
      anoLancamento: 1997,
      imagem: "https://picsum.photos/400/300?random=113",
      classificacao: "12+",
      duracao: "3h14min",
      oscar: true
    },
    {
      id: 14,
      titulo: "Black Mirror",
      genero: ["Ficção Científica", "Distopia"],
      sinopse: "Episódios independentes exploram os lados sombrios da tecnologia e seus impactos na sociedade.",
      anoLancamento: 2011,
      imagem: "https://picsum.photos/400/300?random=114",
      classificacao: "16+",
      temporadas: 6,
      antologia: true
    },
    {
      id: 15,
      titulo: "O Poderoso Chefão",
      genero: ["Crime", "Drama"],
      sinopse: "A saga da família Corleone e seu império do crime em Nova York nos anos 40-50.",
      anoLancamento: 1972,
      imagem: "https://picsum.photos/400/300?random=115",
      classificacao: "16+",
      duracao: "2h55min",
      oscar: true
    }
  ];
  
  
  //-------------------------------------------------------
  // 03 - Poemas
  //-------------------------------------------------------
  const poemas = [
    {
      id: 1,
      titulo: "Canção do Exílio",
      autor: "Gonçalves Dias",
      texto: `Minha terra tem palmeiras Onde canta o Sabiá As aves que aqui gorjeiam Não gorjeiam como lá.`,
      estilo: "Romantismo",
      ano: 1843,
      imagem: "https://picsum.photos/400/300?random=201",
      tema: "saudade"
    },
    {
      id: 2,
      titulo: "No Meio do Caminho",
      autor: "Carlos Drummond de Andrade",
      texto: `No meio do caminho tinha uma pedra tinha uma pedra no meio do caminho tinha uma pedra no meio do caminho tinha uma pedra.`,
      estilo: "Modernismo",
      ano: 1928,
      imagem: "https://picsum.photos/400/300?random=202",
      tema: "obstáculos"
    },
    {
      id: 3,
      titulo: "Soneto de Fidelidade",
      autor: "Vinicius de Moraes",
      texto: `De tudo, ao meu amor serei atento Antes, e com tal zelo, e sempre, e tanto Que mesmo em face do maior encanto Dele se encante mais meu pensamento.`,
      estilo: "Soneto",
      ano: 1957,
      imagem: "https://picsum.photos/400/300?random=203",
      tema: "amor"
    },
    {
      id: 4,
      titulo: "Poema em Linha Reta",
      autor: "Álvaro de Campos",
      texto: `Nunca conheci quem tivesse levado porrada. Todos os meus conhecidos têm sido campeões em tudo.`,
      estilo: "Futurismo",
      ano: 1914,
      imagem: "https://picsum.photos/400/300?random=204",
      tema: "ironia"
    },
    {
      id: 5,
      titulo: "Os Sapos",
      autor: "Manuel Bandeira",
      texto: `Enfunando os papos, Saem da penumbra, Aos pulos, os sapos. A luz os deslumbra.`,
      estilo: "Modernismo",
      ano: 1919,
      imagem: "https://picsum.photos/400/300?random=205",
      tema: "sátira"
    },
    {
      id: 6,
      titulo: "Navio Negreiro",
      autor: "Castro Alves",
      texto: `'Stamos em pleno mar... Doudo no espaço Brinca o luar — dourada borboleta; E as vagas após ele correm... cansam Como turba de infantes inquieta.`,
      estilo: "Condoreirismo",
      ano: 1869,
      imagem: "https://picsum.photos/400/300?random=206",
      tema: "liberdade"
    },
    {
      id: 7,
      titulo: "Quadrilha",
      autor: "João Cabral de Melo Neto",
      texto: `João amava Teresa que amava Raimundo que amava Maria que amava Joaquim que amava Lili que não amava ninguém.`,
      estilo: "Concretismo",
      ano: 1950,
      imagem: "https://picsum.photos/400/300?random=207",
      tema: "amor não correspondido"
    },
    {
      id: 8,
      titulo: "Poética",
      autor: "Manuel Bandeira",
      texto: `Estou farto do lirismo comedido Do lirismo bem comportado Do lirismo funcionário público com livro de ponto`,
      estilo: "Modernismo",
      ano: 1930,
      imagem: "https://picsum.photos/400/300?random=208",
      tema: "revolta"
    },
    {
      id: 9,
      titulo: "O Operário em Construção",
      autor: "Vinicius de Moraes",
      texto: `Era ele que erguia casas Onde antes só havia chão. Como um pássaro sem asas Ele subia com as asas Que lhe brotavam da mão.`,
      estilo: "Poesia Social",
      ano: 1956,
      imagem: "https://picsum.photos/400/300?random=209",
      tema: "trabalho"
    },
    {
      id: 10,
      titulo: "Retrato",
      autor: "Cecília Meireles",
      texto: `Eu não tinha este rosto de hoje, Assim calmo, assim triste, assim magro, Nem estes olhos tão vazios, Nem o lábio amargo.`,
      estilo: "Lírico",
      ano: 1939,
      imagem: "https://picsum.photos/400/300?random=210",
      tema: "identidade"
    },
    {
      id: 11,
      titulo: "A Máquina do Mundo",
      autor: "Carlos Drummond de Andrade",
      texto: `E eis que perto de mim aquela máquina ró-se-lhe a terra para ser tragada na dentada incansável de sua boca de aço.`,
      estilo: "Filosófico",
      ano: 1951,
      imagem: "https://picsum.photos/400/300?random=211",
      tema: "existência"
    },
    {
      id: 12,
      titulo: "Poema Sujo",
      autor: "Ferreira Gullar",
      texto: `trago-te flores — restos do dia colhidas no lixo — trago-te flores`,
      estilo: "Neoconcretismo",
      ano: 1976,
      imagem: "https://picsum.photos/400/300?random=212",
      tema: "cotidiano"
    },
    {
      id: 13,
      titulo: "O Lutador",
      autor: "Augusto dos Anjos",
      texto: `A mão que afaga é a mesma que apedreja. Não há amor sem dor, não há prazer sem pejo E a vida é um combate que a alma não deseja.`,
      estilo: "Parnasianismo",
      ano: 1912,
      imagem: "https://picsum.photos/400/300?random=213",
      tema: "dualidade"
    },
    {
      id: 14,
      titulo: "O Bicho",
      autor: "Manuel Bandeira",
      texto: `Vi ontem um bicho Na imundície do pátio Catando comida entre os detritos.`,
      estilo: "Poesia Social",
      ano: 1947,
      imagem: "https://picsum.photos/400/300?random=214",
      tema: "miséria"
    },
    {
      id: 15,
      titulo: "Motivo",
      autor: "Cecília Meireles",
      texto: `Eu canto porque o instante existe e a minha vida está completa. Não sou alegre nem sou triste: sou poeta.`,
      estilo: "Lírico",
      ano: 1938,
      imagem: "https://picsum.photos/400/300?random=215",
      tema: "poesia"
    },
    {
      id: 16,
      titulo: "Psicologia de um Vencido",
      autor: "Augusto dos Anjos",
      texto: `Eu, filho do carbono e do amoníaco, Monstro de escuridão e rutilância, Sofro, desde a epigênese da infância, A influência má dos signos do zodíaco.`,
      estilo: "Cientificista",
      ano: 1912,
      imagem: "https://picsum.photos/400/300?random=216",
      tema: "angústia"
    },
    {
      id: 17,
      titulo: "Construção",
      autor: "Chico Buarque",
      texto: `Amou daquela vez como se fosse o último Beijou sua mulher como se fosse o último E cada filho seu como se fosse o único.`,
      estilo: "Música-Poesia",
      ano: 1971,
      imagem: "https://picsum.photos/400/300?random=217",
      tema: "morte"
    },
    {
      id: 18,
      titulo: "Vou-me Embora pra Pasárgada",
      autor: "Manuel Bandeira",
      texto: `Vou-me embora pra Pasárgada Lá sou amigo do rei Lá tenho a mulher que eu quero Na cama que escolherei`,
      estilo: "Modernismo",
      ano: 1930,
      imagem: "https://picsum.photos/400/300?random=218",
      tema: "escapismo"
    },
    {
      id: 19,
      titulo: "Ode ao Burguês",
      autor: "Mário de Andrade",
      texto: `Eu insulto o burguês! O burguês-níquel, o burguês-burguês! A digestão bem feita de São Paulo! O homem-curva! o homem-nádegas!`,
      estilo: "Modernismo",
      ano: 1922,
      imagem: "https://picsum.photos/400/300?random=219",
      tema: "crítica social"
    },
    {
      id: 20,
      titulo: "Ismália",
      autor: "Alphonsus de Guimaraens",
      texto: `Quando Ismália enlouqueceu, Pôs-se na torre a sonhar... Viu uma lua no céu, Viu outra lua no mar.`,
      estilo: "Simbolismo",
      ano: 1899,
      imagem: "https://picsum.photos/400/300?random=220",
      tema: "loucura"
    }
  ];
  
  
  //-------------------------------------------------------
  // 04 - Galeria de fotos
  //-------------------------------------------------------
  const galeriaFotos = [
    {
      id: 1,
      titulo: "Aurora Boreal na Noruega",
      descricao: "Captura noturna das luzes do norte sobre fiordes congelados",
      imagem: "https://picsum.photos/800/600?random=301",
      localizacao: "Tromsø, Noruega",
      data: "2023-02-15",
      equipamento: "Canon EOS R5, lente 24-70mm f/2.8",
      tags: ["natureza", "aurora", "noite"],
      likes: 1243,
      licenca: "CC BY-NC-ND"
    },
    {
      id: 2,
      titulo: "Retrato Urbano em Preto e Branco",
      descricao: "Idoso fumando cachimbo em beco de paralelepípedos",
      imagem: "https://picsum.photos/800/600?random=302",
      localizacao: "Lisboa, Portugal",
      data: "2022-09-03",
      equipamento: "Sony A7III, 85mm f/1.4",
      tags: ["retrato", "rua", "PB"],
      likes: 892,
      licenca: "CC BY-SA"
    },
    // ... (continuando com os outros 18 registros)
    {
      id: 3,
      titulo: "Cerimônia do Chá no Japão",
      descricao: "Mãos idosas preparando matcha em tradicional casa de chá",
      imagem: "https://picsum.photos/800/600?random=303",
      localizacao: "Quioto, Japão",
      data: "2023-04-22",
      equipamento: "Fujifilm X-T4, 56mm f/1.2",
      tags: ["cultura", "tradição", "close"],
      likes: 1567,
      licenca: "All Rights Reserved"
    },
    {
      id: 4,
      titulo: "Arranha-Céus de Dubai",
      descricao: "Vista aérea noturna do Burj Khalifa e arredores",
      imagem: "https://picsum.photos/800/600?random=304",
      localizacao: "Dubai, EAU",
      data: "2023-01-10",
      equipamento: "Drone DJI Mavic 3",
      tags: ["cidade", "arquitetura", "aérea"],
      likes: 2105,
      licenca: "CC BY"
    },
    {
      id: 5,
      titulo: "Café da Manhã Minimalista",
      descricao: "Composição com pães, frutas e café em luz natural",
      imagem: "https://picsum.photos/800/600?random=305",
      localizacao: "Estúdio Fotográfico",
      data: "2022-11-17",
      equipamento: "Nikon D850, 100mm macro",
      tags: ["comida", "still", "minimalismo"],
      likes: 743,
      licenca: "CC BY-NC"
    },
    {
      id: 6,
      titulo: "Crianças no Festival Holi",
      descricao: "Meninos brincando com pó colorido durante celebração",
      imagem: "https://picsum.photos/800/600?random=306",
      localizacao: "Jaipur, Índia",
      data: "2023-03-08",
      equipamento: "Sony A9II, 35mm f/1.8",
      tags: ["cultura", "cores", "alegria"],
      likes: 1982,
      licenca: "Editorial"
    },
    {
      id: 7,
      titulo: "Vida Marinha em Noronha",
      descricao: "Tartaruga verde nadando entre corais",
      imagem: "https://picsum.photos/800/600?random=307",
      localizacao: "Fernando de Noronha, Brasil",
      data: "2022-12-05",
      equipamento: "GoPro Hero11 + housing",
      tags: ["natureza", "mergulho", "vida marinha"],
      likes: 2256,
      licenca: "CC BY-ND"
    },
    {
      id: 8,
      titulo: "Casario de Santorini",
      descricao: "Vista icônica das casas brancas e cúpulas azuis",
      imagem: "https://picsum.photos/800/600?random=308",
      localizacao: "Santorini, Grécia",
      data: "2023-06-18",
      equipamento: "Canon 5D Mark IV, 16-35mm",
      tags: ["viagem", "arquitetura", "paisagem"],
      likes: 3102,
      licenca: "CC BY-SA"
    },
    {
      id: 9,
      titulo: "Show de Rock",
      descricao: "Momento de pico com pirotecnia e luzes estroboscópicas",
      imagem: "https://picsum.photos/800/600?random=309",
      localizacao: "São Paulo, Brasil",
      data: "2023-05-12",
      equipamento: "Sony A7SIII, 70-200mm f/2.8",
      tags: ["música", "show", "ação"],
      likes: 1678,
      licenca: "All Rights Reserved"
    },
    {
      id: 10,
      titulo: "Macacos na Floresta",
      descricao: "Família de macacos-pregos interagindo nas árvores",
      imagem: "https://picsum.photos/800/600?random=310",
      localizacao: "Bonito, Brasil",
      data: "2022-10-30",
      equipamento: "Canon R6, 100-400mm",
      tags: ["animais", "natureza", "selva"],
      likes: 1321,
      licenca: "CC BY-NC-ND"
    },
    {
      id: 11,
      titulo: "Mercado Flutuante",
      descricao: "Vendedores em barcos típicos na Tailândia",
      imagem: "https://picsum.photos/800/600?random=311",
      localizacao: "Bangkok, Tailândia",
      data: "2023-01-25",
      equipamento: "Leica Q2",
      tags: ["cultura", "comércio", "água"],
      likes: 1876,
      licenca: "CC BY"
    },
    {
      id: 12,
      titulo: "Moda Editorial Inverno",
      descricao: "Modelo em casaco de pele sintética em estúdio",
      imagem: "https://picsum.photos/800/600?random=312",
      localizacao: "Estúdio Fotográfico",
      data: "2022-08-14",
      equipamento: "Phase One XF, 80mm",
      tags: ["moda", "estúdio", "retrato"],
      likes: 945,
      licenca: "Editorial"
    },
    {
      id: 13,
      titulo: "Deserto do Atacama",
      descricao: "Formações rochosas sob céu estrelado",
      imagem: "https://picsum.photos/800/600?random=313",
      localizacao: "San Pedro de Atacama, Chile",
      data: "2023-07-22",
      equipamento: "Nikon Z7II, 14-24mm",
      tags: ["paisagem", "natureza", "astrofotografia"],
      likes: 2543,
      licenca: "CC BY-SA"
    },
    {
      id: 14,
      titulo: "Arte de Rua em Berlim",
      descricao: "Mural político no East Side Gallery",
      imagem: "https://picsum.photos/800/600?random=314",
      localizacao: "Berlim, Alemanha",
      data: "2022-07-19",
      equipamento: "Fujifilm X100V",
      tags: ["arte", "urbano", "mural"],
      likes: 1120,
      licenca: "CC BY-NC"
    },
    {
      id: 15,
      titulo: "Café Colheita Manual",
      descricao: "Trabalhador colhendo grãos em fazenda montanhosa",
      imagem: "https://picsum.photos/800/600?random=315",
      localizacao: "Minas Gerais, Brasil",
      data: "2023-08-03",
      equipamento: "Sony A6400, 50mm",
      tags: ["trabalho", "agricultura", "close"],
      likes: 876,
      licenca: "Documentary"
    },
    {
      id: 16,
      titulo: "Carnaval de Veneza",
      descricao: "Casais com máscaras tradicionais em piazza",
      imagem: "https://picsum.photos/800/600?random=316",
      localizacao: "Veneza, Itália",
      data: "2023-02-28",
      equipamento: "Leica M11, 35mm",
      tags: ["cultura", "festival", "traje"],
      likes: 2987,
      licenca: "CC BY-ND"
    },
    {
      id: 17,
      titulo: "Surfe no Pipeline",
      descricao: "Atleta pegando onda tubular no Hawaii",
      imagem: "https://picsum.photos/800/600?random=317",
      localizacao: "Oahu, Hawaii",
      data: "2022-12-20",
      equipamento: "Canon 1DX III, 400mm",
      tags: ["esporte", "água", "ação"],
      likes: 3421,
      licenca: "All Rights Reserved"
    },
    {
      id: 18,
      titulo: "Biblioteca Histórica",
      descricao: "Prateleiras de livros antigos em luz lateral",
      imagem: "https://picsum.photos/800/600?random=318",
      localizacao: "Praga, República Tcheca",
      data: "2023-05-05",
      equipamento: "Pentax 645Z, 45mm",
      tags: ["arquitetura", "livros", "interior"],
      likes: 1543,
      licenca: "CC BY-NC-SA"
    },
    {
      id: 19,
      titulo: "Festa Junina Nordestina",
      descricao: "Dançadores de quadrilha em traje típico",
      imagem: "https://picsum.photos/800/600?random=319",
      localizacao: "Campina Grande, Brasil",
      data: "2023-06-24",
      equipamento: "Sony A7IV, 24-70mm",
      tags: ["cultura", "festival", "tradição"],
      likes: 1320,
      licenca: "Editorial"
    },
    {
      id: 20,
      titulo: "Reflexos Urbanos",
      descricao: "Edifícios espelhados após chuva no asfalto",
      imagem: "https://picsum.photos/800/600?random=320",
      localizacao: "Chicago, EUA",
      data: "2022-10-12",
      equipamento: "Nikon Z9, 70-200mm",
      tags: ["cidade", "reflexo", "chuva"],
      likes: 2109,
      licenca: "CC BY"
    }
  ];
  
  
  //-------------------------------------------------------
  // 05 -  Noticias
  //-------------------------------------------------------
  const noticias = [
    {
      titulo: "Avanço da Inteligência Artificial preocupa especialistas",
      categoria: "Tecnologia",
      resumo: "A rápida evolução da inteligência artificial tem gerado debates entre especialistas sobre seus impactos a longo prazo. Questões éticas, como o uso responsável dos algoritmos e a substituição da força de trabalho humana, são pontos centrais das discussões. Muitos defendem a criação urgente de regulamentações internacionais para evitar abusos e garantir que a tecnologia seja usada de forma segura e benéfica para a sociedade.",
      autor: "Mariana Silva",
      dataPublicacao: "2025-06-01",
      imagem: "https://picsum.photos/400/300?random=101"
    },
    {
      titulo: "Novo tratamento para diabetes tipo 2 é aprovado",
      categoria: "Saúde",
      resumo: "Após anos de pesquisa, uma nova medicação para o controle do diabetes tipo 2 foi aprovada por agências reguladoras de saúde. O medicamento promete melhorar significativamente a qualidade de vida dos pacientes, com menos efeitos colaterais e maior eficácia na regulação da glicose. Especialistas comemoram a novidade e ressaltam a importância de políticas públicas que facilitem o acesso ao tratamento para populações de baixa renda.",
      autor: "Dr. Ricardo Lima",
      dataPublicacao: "2025-06-03",
      imagem: "https://picsum.photos/400/300?random=102"
    },
    {
      titulo: "Cinema nacional ganha destaque em festival europeu",
      categoria: "Cultura",
      resumo: "O cinema brasileiro brilhou em um dos maiores festivais de cinema da Europa, levando prêmios nas categorias de melhor roteiro e direção. O longa-metragem premiado aborda temas sociais relevantes, com uma narrativa envolvente e fotografia elogiada pela crítica internacional. A vitória reacende o interesse do público estrangeiro pelo audiovisual nacional e abre portas para novos talentos brasileiros no exterior.",
      autor: "Luciana Ribeiro",
      dataPublicacao: "2025-06-02",
      imagem: "https://picsum.photos/400/300?random=103"
    },
    {
      titulo: "Mercado financeiro fecha semana em alta",
      categoria: "Economia",
      resumo: "Após a divulgação de indicadores positivos e o anúncio de medidas fiscais pelo governo, o mercado financeiro reagiu com otimismo. O índice Bovespa fechou em alta de 3,2%, impulsionado pelas ações de setores como energia, tecnologia e bancos. Economistas alertam, no entanto, que o cenário ainda exige cautela, principalmente devido à instabilidade internacional e à inflação persistente em alguns setores.",
      autor: "Carlos Menezes",
      dataPublicacao: "2025-06-07",
      imagem: "https://picsum.photos/400/300?random=104"
    },
    {
      titulo: "Chuvas intensas causam transtornos no sul do país",
      categoria: "Clima",
      resumo: "Fortes chuvas atingiram os estados do sul do Brasil nesta semana, provocando enchentes, deslizamentos e a interrupção de serviços essenciais. Em várias cidades, famílias foram retiradas de suas casas e declarada situação de emergência. As autoridades pedem que a população evite áreas de risco e reforçam a importância do planejamento urbano para enfrentar eventos climáticos extremos que têm se tornado cada vez mais frequentes.",
      autor: "Fernanda Costa",
      dataPublicacao: "2025-06-06",
      imagem: "https://picsum.photos/400/300?random=105"
    },
    {
      titulo: "Nova geração de consoles será lançada ainda este ano",
      categoria: "Games",
      resumo: "As principais fabricantes de videogames anunciaram oficialmente o lançamento de uma nova geração de consoles até o fim de 2025. Os aparelhos prometem revolucionar a experiência dos jogadores, com gráficos ultra-realistas, menor tempo de carregamento e maior integração com realidade virtual. A expectativa do mercado é alta, com pré-vendas esgotadas em diversas regiões e milhares de fãs aguardando ansiosamente o lançamento.",
      autor: "Thiago Lopes",
      dataPublicacao: "2025-06-05",
      imagem: "https://picsum.photos/400/300?random=106"
    }
  ];
  
  
  
  //-------------------------------------------------------
  // 06 - Eventos
  //-------------------------------------------------------
  
  const eventos = [
    {
      nome: "Festival de Jazz São Paulo",
      local: "Auditório Ibirapuera",
      data: "2025-07-10",
      horario: "20:00",
      tipo: "Música",
      imagem: "https://picsum.photos/400/300?random=201"
    },
    {
      nome: "Mostra de Teatro Experimental",
      local: "Teatro Oficina",
      data: "2025-07-12",
      horario: "19:30",
      tipo: "Teatro",
      imagem: "https://picsum.photos/400/300?random=202"
    },
    {
      nome: "Palestra: Inteligência Artificial e Ética",
      local: "Centro de Convenções Rebouças",
      data: "2025-07-15",
      horario: "18:00",
      tipo: "Palestra",
      imagem: "https://picsum.photos/400/300?random=203"
    },
    {
      nome: "Show Tributo a Legião Urbana",
      local: "Casa Natura Musical",
      data: "2025-07-17",
      horario: "21:00",
      tipo: "Música",
      imagem: "https://picsum.photos/400/300?random=204"
    },
    {
      nome: "Feira Literária da Liberdade",
      local: "Praça da Liberdade",
      data: "2025-07-20",
      horario: "10:00",
      tipo: "Palestra",
      imagem: "https://picsum.photos/400/300?random=205"
    },
    {
      nome: "Espetáculo de Dança Contemporânea",
      local: "Theatro Municipal de SP",
      data: "2025-07-22",
      horario: "20:00",
      tipo: "Teatro",
      imagem: "https://picsum.photos/400/300?random=206"
    },
    {
      nome: "Festival de Rock Independente",
      local: "Estádio do Canindé",
      data: "2025-07-24",
      horario: "16:00",
      tipo: "Música",
      imagem: "https://picsum.photos/400/300?random=207"
    },
    {
      nome: "Ciclo de Debates Filosóficos",
      local: "MASP - Auditório",
      data: "2025-07-25",
      horario: "14:00",
      tipo: "Palestra",
      imagem: "https://picsum.photos/400/300?random=208"
    },
    {
      nome: "Musical: A Noviça Rebelde",
      local: "Teatro Renault",
      data: "2025-07-27",
      horario: "20:30",
      tipo: "Teatro",
      imagem: "https://picsum.photos/400/300?random=209"
    },
    {
      nome: "Sarau de Poesia Marginal",
      local: "Centro Cultural da Juventude",
      data: "2025-07-28",
      horario: "19:00",
      tipo: "Palestra",
      imagem: "https://picsum.photos/400/300?random=210"
    },
    {
      nome: "Show de MPB com Ana Paula Costa",
      local: "Sesc Pompeia",
      data: "2025-07-29",
      horario: "20:00",
      tipo: "Música",
      imagem: "https://picsum.photos/400/300?random=211"
    },
    {
      nome: "Teatro Infantil: O Mundo Mágico de Oz",
      local: "Teatro Bradesco",
      data: "2025-07-30",
      horario: "15:00",
      tipo: "Teatro",
      imagem: "https://picsum.photos/400/300?random=212"
    },
    {
      nome: "Encontro de Escritores Independentes",
      local: "Biblioteca Mário de Andrade",
      data: "2025-08-01",
      horario: "11:00",
      tipo: "Palestra",
      imagem: "https://picsum.photos/400/300?random=213"
    },
    {
      nome: "Festival de Música Brasileira",
      local: "Parque Villa-Lobos",
      data: "2025-08-03",
      horario: "13:00",
      tipo: "Música",
      imagem: "https://picsum.photos/400/300?random=214"
    },
    {
      nome: "Peça Clássica: Romeu e Julieta",
      local: "Teatro Sérgio Cardoso",
      data: "2025-08-05",
      horario: "20:00",
      tipo: "Teatro",
      imagem: "https://picsum.photos/400/300?random=215"
    }
  ];
  
  
  
  //-------------------------------------------------------
  // 07 - Lista de fotos
  //-------------------------------------------------------
  const listaFotos = [
    {
      nome: "Aurora Boreal na Noruega",
      imagem: "https://picsum.photos/800/600?random=301"
    },
    {
      nome: "Retrato Urbano em Preto e Branco",
      imagem: "https://picsum.photos/800/600?random=302"
    },
    {
      nome: "Cerimônia do Chá no Japão",
      imagem: "https://picsum.photos/800/600?random=303"
    },
    {
      nome: "Arranha-Céus de Dubai",
      imagem: "https://picsum.photos/800/600?random=304"
    },
    {
      nome: "Café da Manhã Minimalista",
      imagem: "https://picsum.photos/800/600?random=305"
    },
    {
      nome: "Crianças no Festival Holi",
      imagem: "https://picsum.photos/800/600?random=306"
    },
    {
      nome: "Vida Marinha em Noronha",
      imagem: "https://picsum.photos/800/600?random=307"
    },
    {
      nome: "Casario de Santorini",
      imagem: "https://picsum.photos/800/600?random=308"
    },
    {
      nome: "Show de Rock",
      imagem: "https://picsum.photos/800/600?random=309"
    },
    {
      nome: "Macacos na Floresta",
      imagem: "https://picsum.photos/800/600?random=310"
    },
    {
      nome: "Mercado Flutuante",
      imagem: "https://picsum.photos/800/600?random=311"
    },
    {
      nome: "Moda Editorial Inverno",
      imagem: "https://picsum.photos/800/600?random=312"
    },
    {
      nome: "Deserto do Atacama",
      imagem: "https://picsum.photos/800/600?random=313"
    },
    {
      nome: "Arte de Rua em Berlim",
      imagem: "https://picsum.photos/800/600?random=314"
    },
    {
      nome: "Café Colheita Manual",
      imagem: "https://picsum.photos/800/600?random=315"
    },
    {
      nome: "Carnaval de Veneza",
      imagem: "https://picsum.photos/800/600?random=316"
    },
    {
      nome: "Surfe no Pipeline",
      imagem: "https://picsum.photos/800/600?random=317"
    },
    {
      nome: "Biblioteca Histórica",
      imagem: "https://picsum.photos/800/600?random=318"
    },
    {
      nome: "Festa Junina Nordestina",
      imagem: "https://picsum.photos/800/600?random=319"
    },
    {
      nome: "Reflexos Urbanos",
      imagem: "https://picsum.photos/800/600?random=320"
    }
  ];
  
  
  
  //-------------------------------------------------------
  // 08 -  Artigos
  //-------------------------------------------------------
  
  const artigos = [
    {
      titulo: "Os Benefícios da Meditação Diária",
      paragrafo01: "A meditação tem sido praticada por milênios como forma de alcançar clareza mental e equilíbrio emocional. Estudos recentes comprovam que apenas 15 minutos diários podem reduzir significativamente os níveis de cortisol, o hormônio do estresse.",
      paragrafo02: "Além dos benefícios psicológicos, a prática regular de meditação está associada à melhoria da pressão arterial e do sistema imunológico. Neurocientistas observaram aumento na densidade da massa cinzenta em áreas do cérebro relacionadas à memória e tomada de decisões.",
      paragrafo03: "Para iniciantes, recomenda-se começar com sessões guiadas de 5 a 10 minutos, preferencialmente no mesmo horário e local. A consistência é mais importante que a duração quando se está começando nesta jornada de autoconhecimento."
    },
    {
      titulo: "A Revolução da Energia Solar",
      paragrafo01: "Nos últimos dez anos, a capacidade global de energia solar fotovoltaica aumentou mais de 800%, tornando-se a fonte de energia que mais cresce no mundo. Essa expansão foi impulsionada por avanços tecnológicos e reduções dramáticas nos custos de produção.",
      paragrafo02: "Painéis solares modernos convertem cerca de 22-23% da luz solar em eletricidade, comparado aos meros 15% da década passada. Novas tecnologias como células perovskitas prometem eficiências acima de 30% nos próximos anos.",
      paragrafo03: "O armazenamento continua sendo o maior desafio, mas baterias de íon-lítio combinadas com sistemas inteligentes de gestão energética estão transformando a energia solar em uma fonte confiável 24 horas por dia."
    },
    {
      titulo: "Inteligência Artificial na Medicina",
      paragrafo01: "Sistemas de IA já superam radiologistas humanos na detecção precoce de certos tipos de câncer em exames de imagem. Algoritmos de deep learning analisam padrões sutis que muitas vezes escapam ao olho humano.",
      paragrafo02: "Na pandemia, modelos preditivos ajudaram a antecipar surtos e otimizar a alocação de recursos hospitalares. Agora, essas tecnologias estão sendo adaptadas para monitorar outras doenças infecciosas em tempo real.",
      paragrafo03: "Os maiores desafios éticos envolvem privacidade de dados e a necessidade de manter o julgamento humano em decisões críticas. A IA deve ser vista como ferramenta, não como substituição dos profissionais de saúde."
    },
    {
      titulo: "O Futuro do Trabalho Remoto",
      paragrafo01: "A pandemia acelerou em anos a adoção do trabalho remoto, e muitas empresas descobriram que a produtividade pode até aumentar com esse modelo. Estima-se que 30% da força de trabalho global continuará remotamente de forma permanente.",
      paragrafo02: "Novas tecnologias como realidade virtual estão transformando reuniões online, criando espaços de trabalho virtuais imersivos. Plataformas de colaboração evoluíram para integrar gestão de projetos, comunicação e métricas de desempenho.",
      paragrafo03: "Os desafios incluem manter a cultura corporativa, evitar burnout e garantir equidade entre funcionários remotos e presenciais. Muitas empresas estão adotando modelos híbridos flexíveis como solução permanente."
    },
    {
      titulo: "Agricultura Urbana Sustentável",
      paragrafo01: "Fazendas verticais usando hidroponia e LED estão produzindo vegetais dentro de centros urbanos com 95% menos água que a agricultura tradicional. Esses sistemas podem produzir o ano todo, independentemente do clima.",
      paragrafo02: "Além de reduzir a pegada de carbono dos transportes, essas fazendas urbanas estão revitalizando edifícios abandonados e criando empregos locais. Algumas operam com energia solar e sistemas fechados de nutrientes.",
      paragrafo03: "O próximo passo é integrar essas fazendas com sistemas de gestão de resíduos urbanos, criando ciclos completos onde o lixo orgânico vira composto para a produção de alimentos dentro da própria cidade."
    },
    {
      titulo: "A Ciência do Sono",
      paragrafo01: "Pesquisas recentes revelam que o sono não é um estado passivo, mas um processo ativo essencial para a consolidação da memória e a regulação emocional. Durante o sono REM, o cérebro reprocessa experiências do dia.",
      paragrafo02: "A privação crônica de sono está ligada a maior risco de Alzheimer, pois é durante o sono profundo que o cérebro remove toxinas acumuladas. Apenas uma noite mal dormida pode prejudicar o julgamento tanto quanto a embriaguez.",
      paragrafo03: "Higiene do sono inclui manter horários regulares, evitar telas antes de dormir e controlar a temperatura do quarto. A luz azul de dispositivos eletrônicos suprime a melatonina, atrasando o início do sono."
    },
    {
      titulo: "Blockchain Além das Criptomoedas",
      paragrafo01: "Enquanto as criptomoedas dominam as manchetes, a tecnologia blockchain está revolucionando setores como cadeia de suprimentos, saúde e direitos autorais. Seu sistema descentralizado e imutável oferece transparência sem precedentes.",
      paragrafo02: "Na logística, blockchains rastreiam produtos do campo ao consumidor, combatendo falsificações. Na saúde, permitem compartilhar registros médicos com segurança entre hospitais. Artistas estão usando NFTs para provar autenticidade de obras digitais.",
      paragrafo03: "Os desafios incluem escalabilidade e consumo energético. Novas gerações de blockchains como Ethereum 2.0 prometem reduzir o gasto energético em 99%, tornando a tecnologia mais sustentável."
    },
    {
      titulo: "Neuroplasticidade e Aprendizado",
      paragrafo01: "Ao contrário do que se acreditava, o cérebro adulto mantém a capacidade de se reorganizar e formar novas conexões. Essa neuroplasticidade pode ser estimulada através de aprendizagem ativa e desafios cognitivos.",
      paragrafo02: "Idiomas e instrumentos musicais são especialmente eficazes para criar novas vias neurais. Até mesmo 15 minutos diários de prática podem produzir mudanças mensuráveis na estrutura cerebral em poucas semanas.",
      paragrafo03: "Fatores como exercício físico, sono adequado e dieta rica em ômega-3 potencializam a neuroplasticidade. O segredo está na consistência e no gradual aumento de dificuldade dos desafios mentais."
    },
    {
      titulo: "A Ascensão dos Veículos Elétricos",
      paragrafo01: "A indústria automotiva vive sua maior transformação desde a linha de montagem de Henry Ford. Até 2030, estima-se que 50% dos carros novos vendidos serão elétricos, impulsionados por regulamentações ambientais e avanços tecnológicos.",
      paragrafo02: "Baterias de estado sólido prometem dobrar a autonomia e reduzir o tempo de recarga para minutos. Simultaneamente, redes de carregamento ultrarrápido estão se expandindo globalmente, eliminando a ansiedade de autonomia.",
      paragrafo03: "O desafio agora é tornar os veículos elétricos acessíveis e desenvolver sistemas de reciclagem para baterias. A eletrificação de frotas comerciais e transporte público será o próximo marco na descarbonização do setor."
    },
    {
      titulo: "Microbioma Humano",
      paragrafo01: "Cada pessoa abriga cerca de 38 trilhões de microrganismos, superando o número de células humanas. Essa comunidade microbiana influencia desde a digestão até o humor e o sistema imunológico.",
      paragrafo02: "Pesquisas revelam conexões entre desequilíbrios no microbioma intestinal e condições como depressão, obesidade e doenças autoimunes. Probióticos específicos estão sendo testados como tratamentos complementares.",
      paragrafo03: "Manter um microbioma saudável requer dieta diversificada rica em fibras, redução de antibióticos desnecessários e contato regular com a natureza. O futuro da medicina pode incluir transplantes fecais personalizados como terapia padrão."
    },
    {
      titulo: "Realidade Aumentada no Varejo",
      paragrafo01: "Lojas físicas estão usando AR para criar experiências imersivas que combinam o melhor do online e offline. Clientes podem visualizar móveis em suas casas ou experimentar roupas virtualmente antes de comprar.",
      paragrafo02: "Tecnologias como espelhos inteligentes analisam medidas corporais para sugerir peças que melhor se ajustam. Em lojas de cosméticos, aplicativos permitem testar maquiagens digitalmente em tempo real.",
      paragrafo03: "Essas inovações reduzem devoluções e aumentam a satisfação do cliente, enquanto coletam dados valiosos sobre preferências. O próximo passo são lojas totalmente virtuais acessíveis via óculos AR."
    },
    {
      titulo: "Cidades Inteligentes",
      paragrafo01: "Sensores IoT e análise de dados estão transformando a gestão urbana. Sistemas inteligentes otimizam fluxo de tráfego, consumo energético e até a coleta de lixo com rotas dinâmicas baseadas em necessidade real.",
      paragrafo02: "Singapura lidera com seu 'digital twin', um modelo virtual da cidade que simula o impacto de políticas antes da implementação. Barcelona reduziu custos com iluminação pública em 30% usando LEDs conectados.",
      paragrafo03: "Os desafios incluem privacidade de dados e inclusão digital. Cidades verdadeiramente inteligentes devem priorizar pessoas, usando tecnologia para melhorar qualidade de vida de todos os cidadãos, não apenas dos mais ricos."
    },
    {
      titulo: "Edição Genética CRISPR",
      paragrafo01: "A técnica CRISPR-Cas9 revolucionou a biologia ao permitir edição precisa de DNA. Já foi usada para criar culturas resistentes a pragas e no desenvolvimento de terapias genéticas para doenças como anemia falciforme.",
      paragrafo02: "Em 2020, CRISPR foi usado pela primeira vez para editar genes dentro do corpo humano, tratando uma condição genética rara que causa cegueira. Dezenas de ensaios clínicos estão em andamento para outras doenças.",
      paragrafo03: "Questões éticas permanecem, especialmente sobre edição de linhagem germinativa (herdável). Enquanto muitos países impõem moratórias, a necessidade de regulamentação global se torna cada vez mais urgente."
    },
    {
      titulo: "Turismo Espacial",
      paragrafo01: "Empresas como SpaceX, Blue Origin e Virgin Galactic estão tornando o espaço acessível para civis. Embora os preços ainda sejam proibitivos (US$ 250.000+), a concorrência deve reduzi-los significativamente nesta década.",
      paragrafo02: "Voos suborbitais oferecem alguns minutos de microgravidade e vistas espetaculares da Terra. Estações espaciais comerciais estão em desenvolvimento para hospedar turistas por dias ou semanas.",
      paragrafo03: "Os impactos ambientais são preocupantes - um único lançamento emite tanto carbono quanto um voo transatlântico. Empresas estão desenvolvendo combustíveis mais limpos e sistemas de lançamento reutilizáveis para mitigar esse problema."
    },
    {
      titulo: "Envelhecimento Reversível",
      paragrafo01: "Pesquisas com senolíticos - drogas que eliminam células senescentes - mostraram potencial para rejuvenescer tecidos em animais. Em humanos, os primeiros ensaios clínicos estão em andamento para condições relacionadas à idade.",
      paragrafo02: "Outra abordagem promissora envolve reprogramação celular parcial, usando fatores Yamanaka para redefinir relógios epigenéticos sem apagar a identidade celular. Camundongos tratados viveram 30% mais com melhor saúde.",
      paragrafo03: "Especialistas alertam que o objetivo não é a imortalidade, mas sim 'healthspan' - prolongar os anos de vida saudável. Intervenções como restrição calórica e exercícios já demonstraram retardar marcadores de envelhecimento."
    },
    {
      titulo: "Oceano de Plástico",
      paragrafo01: "A cada ano, 8 milhões de toneladas de plástico entram nos oceanos, formando 'ilhas' de lixo maiores que países. Microplásticos já foram encontrados no Ártico, em águas profundas e até em placentas humanas.",
      paragrafo02: "Soluções inovadoras incluem barcos coletores movidos a energia solar, bactérias que digerem plástico e sistemas de filtragem em rios. Mas a redução na fonte é essencial - 40% do plástico produzido é para embalagens descartáveis.",
      paragrafo03: "Mudanças políticas como proibições de plásticos de uso único e esquemas de depósito para reciclagem estão ganhando força. Consumidores podem fazer diferença optando por reutilizáveis e apoiando empresas com embalagens sustentáveis."
    },
    {
      titulo: "Futuro da Educação",
      paragrafo01: "Modelos personalizados de aprendizagem adaptativa usam IA para ajustar conteúdo ao ritmo e estilo de cada aluno. Plataformas como Khan Academy já demonstram que essa abordagem melhora significativamente os resultados.",
      paragrafo02: "Realidade virtual está transformando aulas de história em experiências imersivas e permitindo simulações seguras em cursos de medicina e engenharia. Estudantes podem 'visitar' o Coliseu romano ou dissecar corpos virtuais.",
      paragrafo03: "O maior desafio é a equidade digital - garantir acesso à tecnologia para todos. Escolas estão se reinventando como espaços de colaboração, onde o conteúdo é consumido online e o tempo presencial é para discussão e aplicação prática."
    },
    {
      titulo: "Carne Cultivada em Laboratório",
      paragrafo01: "Produzida a partir de células animais sem abate, a carne cultivada pode reduzir em até 90% o uso de terra e água comparado à pecuária tradicional. Singapura foi o primeiro país a aprovar sua venda em 2020.",
      paragrafo02: "Startups estão trabalhando para reduzir custos e melhorar textura. Enquanto hambúrgueres cultivados custavam US$ 300.000 em 2012, hoje o preço caiu para cerca de US$ 10 por unidade em escala piloto.",
      paragrafo03: "A aceitação do consumidor é o próximo desafio. Educar sobre o processo e destacar benefícios ambientais será crucial. Produtos híbridos, que combinam carne cultivada com vegetais, podem facilitar a transição."
    },
    {
      titulo: "Privacidade na Era Digital",
      paragrafo01: "Com vazamentos de dados frequentes e vigilância generalizada, a privacidade se tornou commodity valiosa. Novas regulamentações como o GDPR europeu dão aos usuários mais controle sobre suas informações pessoais.",
      paragrafo02: "Tecnologias como criptografia de ponta a ponta, redes VPN e navegadores focados em privacidade estão entrando no mainstream. Até o Google e Apple estão implementando medidas para limitar rastreamento entre apps e sites.",
      paragrafo03: "O futuro pode ver o surgimento de modelos de negócios baseados em assinatura que não dependam de publicidade direcionada. Educar usuários sobre configurações de privacidade e hábitos seguros online é igualmente importante."
    },
    {
      titulo: "Biodiversidade em Crise",
      paragrafo01: "O relatório IPBES alerta que 1 milhão de espécies estão ameaçadas de extinção, muitas dentro de décadas. A taxa atual de perda é 100 a 1000 vezes maior que a natural, com ecossistemas inteiros à beira do colapso.",
      paragrafo02: "Iniciativas como o projeto '30x30' buscam proteger 30% da terra e oceanos até 2030. Corredores ecológicos estão reconectando habitats fragmentados, permitindo que espécies se movam e se adaptem às mudanças climáticas.",
      paragrafo03: "Soluções baseadas na natureza - como restaurar manguezais para proteção costeira - oferecem benefícios triplos: conservação, mitigação climática e resiliência comunitária. Cada indivíduo pode ajudar através de escolhas de consumo conscientes."
    }
  ];
  