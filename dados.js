let dados = [
    {
        sentimento: "ansiedade",
        solucoes: [
            {
                titulo: "Meditação",
                descricao: "A meditação pode ajudar a reduzir a ansiedade e trazer mais clareza mental. Práticas diárias podem ser muito benéficas.",
                link: "https://www.youtube.com/watch?v=D8VIhuXP3z4"  // Meditação guiada para iniciantes
            },
            {
                titulo: "Terapia Cognitivo-Comportamental",
                descricao: "A Terapia Cognitivo-Comportamental (TCC) é eficaz para tratar a ansiedade, ajudando a identificar e mudar padrões de pensamento negativos.",
                link: "https://www.youtube.com/watch?v=X_a8Xx88rog"  // Introdução à TCC
            },
            {
                titulo: "Exercícios Físicos",
                descricao: "A prática regular de exercícios físicos pode reduzir a ansiedade e melhorar o bem-estar geral.",
                link: "https://www.youtube.com/watch?v=tMUxywaEg18"  // Benefícios dos exercícios físicos para saúde mental
            }
        ]
    },
    {
        sentimento: "tristeza",
        solucoes: [
            {
                titulo: "Atividades Criativas",
                descricao: "Engajar-se em atividades criativas como pintura, escrita ou música pode ajudar a melhorar o humor e expressar emoções.",
                link: "https://www.youtube.com/watch?v=reaqjXAM0aI"  // Como a criatividade ajuda na saúde mental
            },
            {
                titulo: "Terapia de Suporte",
                descricao: "A terapia de suporte pode ajudar a lidar com a tristeza e oferecer um espaço seguro para explorar e entender os sentimentos.",
                link: "https://www.youtube.com/watch?v=mIDAFq-lZas"  // Como a terapia pode ajudar na tristeza
            },
            {
                titulo: "Apoio Social",
                descricao: "Conversar com amigos e familiares pode oferecer conforto e apoio emocional durante períodos de tristeza.",
                link: "https://www.youtube.com/watch?v=EGrHmeDSIQs"  // Importância do apoio social
            }
        ]
    },
    {
        sentimento: "estresse",
        solucoes: [
            {
                titulo: "Técnicas de Relaxamento",
                descricao: "Práticas como respiração profunda e yoga podem ajudar a reduzir os níveis de estresse e promover um estado de calma.",
                link: "https://www.youtube.com/watch?v=WUP3Fmxhm5k"  // Técnicas de relaxamento para estresse
            },
            {
                titulo: "Gerenciamento de Tempo",
                descricao: "Melhorar as habilidades de gerenciamento de tempo pode reduzir o estresse causado por sobrecarga de tarefas.",
                link: "https://www.youtube.com/watch?v=VcFK4u1IOZQ"  // Dicas de gerenciamento de tempo
            },
            {
                titulo: "Atividades Recreativas",
                descricao: "Participar de atividades recreativas e hobbies pode ajudar a aliviar o estresse e proporcionar um tempo para relaxar.",
                link: "https://www.youtube.com/watch?v=Gnh3dwps_jE"  // Benefícios das atividades recreativas
            }
        ]
    },
    {
        sentimento: "raiva",
        solucoes: [
            {
                titulo: "Técnicas de Respiração",
                descricao: "Exercícios de respiração profunda podem ajudar a controlar a raiva e promover um estado de calma.",
                link: "https://www.youtube.com/watch?v=kiEmbhvv7Fo"  // Técnicas de respiração para controle da raiva
            },
            {
                titulo: "Atividade Física",
                descricao: "A prática de esportes ou exercícios físicos pode ser uma maneira eficaz de liberar a tensão e a raiva acumulada.",
                link: "https://www.youtube.com/watch?v=njtKH6XcBKg"  // Atividade física para liberar raiva
            },
            {
                titulo: "Diário de Emoções",
                descricao: "Manter um diário onde você expressa seus sentimentos pode ajudar a processar e entender melhor a sua raiva.",
                link: "https://www.youtube.com/watch?v=faICRNW8kt4"  // Benefícios de um diário de emoções
            }
        ]
    },
    {
        sentimento: "solidão",
        solucoes: [
            {
                titulo: "Participação em Grupos",
                descricao: "Juntar-se a grupos ou clubes pode ajudar a reduzir a solidão, proporcionando conexões sociais e novas amizades.",
                link: "https://www.youtube.com/watch?v=voJ1_NN0Ig4"  // Como grupos ajudam a combater a solidão
            },
            {
                titulo: "Voluntariado",
                descricao: "Participar de atividades voluntárias pode ajudar a criar um sentido de pertencimento e reduzir sentimentos de solidão.",
                link: "https://www.youtube.com/watch?v=K8jSXfP7bhU"  // Benefícios do voluntariado
            },
            {
                titulo: "Hobbies e Interesses",
                descricao: "Encontrar hobbies ou atividades que você gosta pode oferecer uma sensação de realização e conexão com outras pessoas com interesses semelhantes.",
                link: "https://www.youtube.com/watch?v=XiCr6WyV1AI"  // Como hobbies ajudam na solidão
            }
        ]
    },
    {
        sentimento: "depressão",
        solucoes: [
            {
                titulo: "Terapia Psicológica",
                descricao: "A terapia psicológica pode ser extremamente eficaz no tratamento da depressão, ajudando a identificar e tratar os problemas subjacentes.",
                link: "https://www.youtube.com/watch?v=4PbJ2lU5_7E"  // Terapia para depressão
            },
            {
                titulo: "Medicação",
                descricao: "Em alguns casos, medicamentos antidepressivos podem ser necessários para ajudar a equilibrar os químicos do cérebro e melhorar o humor.",
                link: "https://www.youtube.com/watch?v=I_tzpjdBFQc"  // Medicação para depressão
            },
            {
                titulo: "Rotina Saudável",
                descricao: "Manter uma rotina saudável com sono adequado, alimentação balanceada e atividades físicas pode ajudar no tratamento da depressão.",
                link: "https://www.youtube.com/watch?v=x2Z6yf9zSSY"  // Criando uma rotina saudável para combater a depressão
            }
        ]
    },
    {
        sentimento: "apatia",
        solucoes: [
            {
                titulo: "Envolvimento em Atividades",
                descricao: "Participar de atividades que lhe interessam pode ajudar a combater a apatia e trazer um novo propósito.",
                link: "https://www.youtube.com/watch?v=Pocp3RWvspM"  // Superando a apatia através de atividades
            },
            {
                titulo: "Estabelecimento de Metas",
                descricao: "Definir e alcançar pequenas metas pode ajudar a aumentar a motivação e combater a apatia.",
                link: "https://www.youtube.com/watch?v=4D8nkE4n8Ao"  // Como definir metas para vencer a apatia
            }
        ]
    },
    {
        sentimento: "irritabilidade",
        solucoes: [
            {
                titulo: "Técnicas de Relaxamento",
                descricao: "Técnicas de relaxamento, como respiração profunda e meditação, podem ajudar a reduzir a irritabilidade.",
                link: "https://www.youtube.com/watch?v=WUP3Fmxhm5k&t=19s"  // Técnicas de relaxamento para irritabilidade
            },
            {
                titulo: "Identificação de Gatilhos",
                descricao: "Identificar e lidar com os gatilhos da irritabilidade pode ajudar a controlá-la mais eficazmente.",
                link: "https://www.youtube.com/watch?v=IgO1pA1BppU"  // Lidando com gatilhos da irritabilidade
            }
        ]
    },
    {
        sentimento: "sensibilidade",
        solucoes: [
            {
                titulo: "Autocuidado",
                descricao: "Práticas de autocuidado, como descanso e atividades relaxantes, podem ajudar a gerenciar a sensibilidade emocional.",
                link: "https://www.youtube.com/watch?v=E6Fe7M5qKmI"  // Técnicas de autocuidado para sensibilidade
            },
            {
                titulo: "Expressão Criativa",
                descricao: "Expressar emoções através da arte ou escrita pode ajudar a lidar com a sensibilidade.",
                link: "https://www.youtube.com/watch?v=Z8Su7zmx3_g"  // Expressão criativa para lidar com sensibilidade
            }
        ]
    },
    {
        sentimento: "nada",
        solucoes: [
            {
                titulo: "Busca por Significado",
                descricao: "Buscar atividades ou metas que tragam um senso de propósito pode ajudar a combater a sensação de 'nada'.",
                link: "https://www.youtube.com/watch?v=TOl4lGEDdVE"  // Encontrando propósito em atividades
            }
        ]
    },
    {
        sentimento: "vazio",
        solucoes: [
            {
                titulo: "Conexões Sociais",
                descricao: "Fortalecer conexões sociais e buscar suporte de amigos e familiares pode ajudar a preencher a sensação de vazio.",
                link: "https://www.youtube.com/watch?v=ufQ3LJzSdsc"  // Conexões sociais para combater o vazio
            },
            {
                titulo: "Exploração Pessoal",
                descricao: "Explorar novos interesses e atividades pode ajudar a preencher o vazio interior.",
                link: "https://www.youtube.com/watch?v=LhLTk8KFcyE"  // Explorando novos interesses
            }
        ]
    },
    {
        sentimento: "culpa",
        solucoes: [
            {
                titulo: "Autoaceitação",
                descricao: "Práticas de autoaceitação e perdão podem ajudar a lidar com a culpa e promover uma autoimagem positiva.",
                link: "https://www.youtube.com/shorts/fsQ6CClUUr0"  // Autoaceitação e superação da culpa
            },
            {
                titulo: "Terapia",
                descricao: "A terapia pode ajudar a entender e trabalhar a culpa, oferecendo estratégias para lidar com ela.",
                link: "https://www.youtube.com/watch?v=QzW7GsTHCYE"  // Lidando com a culpa através da terapia
            }
        ]
    },
    {
        sentimento: "vergonha",
        solucoes: [
            {
                titulo: "Construção da Autoestima",
                descricao: "Trabalhar na construção da autoestima e no autoaceitação pode ajudar a reduzir a vergonha.",
                link: "https://www.youtube.com/watch?v=6EggPqc2dd8"  // Construindo autoestima para superar vergonha
            },
            {
                titulo: "Discussão com Profissional",
                descricao: "Conversar com um profissional pode ajudar a lidar com sentimentos de vergonha e promover a cura.",
                link: "https://www.youtube.com/watch?v=6BtCq1NJJrg"  // Terapia para lidar com vergonha
            }
        ]
    },
    {
        sentimento: "medo",
        solucoes: [
            {
                titulo: "Técnicas de Enfrentamento",
                descricao: "Aprender técnicas de enfrentamento e relaxamento pode ajudar a gerenciar e reduzir o medo.",
                link: "https://www.youtube.com/watch?v=VgEd9id-bpI"  // Técnicas para enfrentar o medo
            },
            {
                titulo: "Exposição Gradual",
                descricao: "A exposição gradual a situações temidas pode ajudar a reduzir o medo e aumentar a confiança.",
                link: "https://www.youtube.com/watch?v=dB8Ftnt2Qsg"  // Exposição gradual para superar medos
            }
        ]
    },
    {
        sentimento: "frustração",
        solucoes: [
            {
                titulo: "Resolução de Problemas",
                descricao: "Desenvolver habilidades de resolução de problemas pode ajudar a lidar com a frustração e encontrar soluções eficazes.",
                link: "https://www.youtube.com/watch?v=zzKg7rDB8gQ"  // Técnicas de resolução de problemas
            },
            {
                titulo: "Gerenciamento do Estresse",
                descricao: "Gerenciar o estresse e a ansiedade pode ajudar a reduzir a frustração e promover uma sensação de controle.",
                link: "https://www.youtube.com/watch?v=WUP3Fmxhm5k&t=19s"  // Gerenciamento do estresse para reduzir frustração
            }
        ]
    },
    {
        sentimento: "desesperança",
        solucoes: [
            {
                titulo: "Busca por Suporte",
                descricao: "Buscar suporte de amigos, familiares ou profissionais pode ajudar a combater a desesperança e promover uma visão positiva.",
                link: "https://www.youtube.com/watch?v=eSJr9FodHBk"  // Encontrando suporte em tempos de desesperança
            },
            {
                titulo: "Definição de Objetivos",
                descricao: "Definir e trabalhar para alcançar pequenos objetivos pode ajudar a criar um senso de esperança e propósito.",
                link: "https://www.youtube.com/watch?v=dzRjOnJ0Ndw"  // Definição de objetivos para superar desesperança
            }
        ]
    },
    {
        sentimento: "baixa autoestima",
        solucoes: [
            {
                titulo: "Trabalho com a Autoimagem",
                descricao: "Trabalhar com a autoimagem e praticar a autoaceitação pode ajudar a melhorar a autoestima.",
                link: "https://www.youtube.com/watch?v=6EggPqc2dd8"  // Melhorando a autoestima e a autoimagem
            },
            {
                titulo: "Terapia e Autoajuda",
                descricao: "A terapia e a autoajuda podem ser eficazes para tratar a baixa autoestima e promover o bem-estar.",
                link: "https://www.youtube.com/watch?v=AWpXhVNkIF4"  // Terapia para baixa autoestima
            }
        ]
    },
    {
        sentimento: "desamparo",
        solucoes: [
            {
                titulo: "Fortalecimento da Resiliência",
                descricao: "Trabalhar na resiliência e buscar apoio social pode ajudar a lidar com o desamparo.",
                link: "https://www.youtube.com/watch?v=0KmetnWRt9Y"  // Fortalecendo a resiliência para lidar com desamparo
            },
            {
                titulo: "Estratégias de Enfrentamento",
                descricao: "Desenvolver estratégias de enfrentamento eficazes pode ajudar a lidar com sentimentos de desamparo.",
                link: "https://www.youtube.com/watch?v=LG8PVA0_uTA"  // Estratégias de enfrentamento para desamparo
            }
        ]
    },
    {
        sentimento: "confusão",
        solucoes: [
            {
                titulo: "Clareza Mental",
                descricao: "Práticas para clareza mental, como meditação e organização, podem ajudar a lidar com a confusão.",
                link: "https://www.youtube.com/watch?v=_I3EeJWJ1L0"  // Técnicas para clareza mental
            },
            {
                titulo: "Organização e Planejamento",
                descricao: "Organizar e planejar pode ajudar a reduzir a confusão e aumentar o senso de controle.",
                link: "https://www.youtube.com/watch?v=dT-UGCSGNTI"  // Organizando a vida para reduzir confusão
            }
        ]
    },
    {
        sentimento: "insegurança",
        solucoes: [
            {
                titulo: "Construção da Confiança",
                descricao: "Trabalhar na construção da confiança pessoal e buscar apoio pode ajudar a reduzir a insegurança.",
                link: "https://www.youtube.com/watch?v=SHvXNLiC3Ds"  // Construindo confiança para superar insegurança
            },
            {
                titulo: "Desenvolvimento Pessoal",
                descricao: "Investir no desenvolvimento pessoal e em habilidades pode ajudar a melhorar a sensação de segurança.",
                link: "https://www.youtube.com/watch?v=iWa9dE-Tkjw"  // Desenvolvimento pessoal para aumentar a segurança
            }
        ]
    },
    {
        sentimento: "sobrecarga",
        solucoes: [
            {
                titulo: "Gerenciamento de Tarefas",
                descricao: "Desenvolver habilidades de gerenciamento de tarefas e delegação pode ajudar a aliviar a sobrecarga.",
                link: "https://www.youtube.com/watch?v=PzUZsoyMXuY"  // Gerenciamento de tarefas para reduzir sobrecarga
            },
            {
                titulo: "Autocuidado",
                descricao: "Práticas de autocuidado e descanso são importantes para lidar com a sobrecarga e manter o bem-estar.",
                link: "https://www.youtube.com/watch?v=bJ2gMq-HzZY"  // Autocuidado para gerenciar sobrecarga
            }
        ]
    },
    {
        sentimento: "desmotivação",
        solucoes: [
            {
                titulo: "Estabelecimento de Metas",
                descricao: "Estabelecer metas claras e realistas pode ajudar a aumentar a motivação e combater a desmotivação.",
                link: "https://www.youtube.com/watch?v=c7JeU0ty_UU"  // Como estabelecer metas para combater desmotivação
            },
            {
                titulo: "Envolvimento em Atividades",
                descricao: "Envolver-se em atividades que você gosta pode ajudar a aumentar a motivação e superar a desmotivação.",
                link: "https://www.youtube.com/watch?v=1Bleu2EINBw"  // Encontrando motivação através de atividades
            }
        ]
    },
    {
        sentimento: "desconfiança",
        solucoes: [
            {
                titulo: "Desenvolvimento da Confiança",
                descricao: "Trabalhar no desenvolvimento da confiança nas relações e em si mesmo pode ajudar a reduzir a desconfiança.",
                link: "https://www.youtube.com/watch?v=5_PQ-bXn4rI"  // Construindo confiança para superar desconfiança
            },
            {
                titulo: "Comunicação Aberta",
                descricao: "Práticas de comunicação aberta e honesta podem ajudar a reduzir a desconfiança e fortalecer relações.",
                link: "https://www.youtube.com/watch?v=WSBSyc7G0T4"  // Comunicação aberta para reduzir desconfiança
            }
        ]
    },
    {
        sentimento: "inquietação",
        solucoes: [
            {
                titulo: "Técnicas de Relaxamento",
                descricao: "Técnicas de relaxamento, como respiração profunda e meditação, podem ajudar a reduzir a inquietação.",
                link: "https://www.youtube.com/watch?v=iCPt9AZUmRg"  // Técnicas de relaxamento para inquietação
            },
            {
                titulo: "Mindfulness",
                descricao: "Práticas de mindfulness podem ajudar a acalmar a mente e reduzir a inquietação.",
                link: "https://www.youtube.com/watch?v=mLOCYir6bnI"  // Introdução ao mindfulness para inquietação
            }
        ]
    },
    {
        sentimento: "autocrítica",
        solucoes: [
            {
                titulo: "Desenvolvimento da Autoaceitação",
                descricao: "Trabalhar na autoaceitação e reduzir a autocrítica pode ajudar a melhorar o bem-estar emocional.",
                link: "https://www.youtube.com/watch?v=Cgvyna80NiU"  // Superando a autocrítica
            },
            {
                titulo: "Terapia Cognitiva",
                descricao: "A terapia cognitiva pode ajudar a mudar padrões de pensamento autocríticos e promover uma visão mais positiva.",
                link: "https://www.youtube.com/watch?v=WPJm_xuvIWc"  // Terapia para lidar com a autocrítica
            }
        ]
    }
];
