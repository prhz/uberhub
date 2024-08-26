import { event, orderOption, vacancy } from "@/app/_lib/definitions";

export const vacancies: vacancy[] = [
    {
        id: 1,
        featured_tier: 3,
        visit_count: 106,
        reports: [],
        has_image: true,
        advertiser: 'Valecard',
        link: 'https://valecard.gupy.io',
        date: new Date(2024, 8, 10),
        limit_date: new Date(2024, 8, 21),
        vacancies: [
            'Especialista Dev Mobile - Fluter',
            'Especialista de TI',
            'Analista de Dados',
            'Customer Success Manager',
        ],
        tags: [
            'Mobile',
            'Fluter',
            'TI',
            'Análise',
            'Gerenciamento'
        ],
        state: 'accepted'
    },
    {
        id: 2,
        featured_tier: 1,
        visit_count: 184,
        reports: [],
        has_image: true,
        advertiser: 'Nagro',
        link: 'https://bit.ly/4cU9oPm',
        date: new Date(2024, 8, 11), 
        limit_date: undefined,
        vacancies: [
            'Estagiário de RevOps',
            'Tech Lead',
            'Engenheiro de Software Back-end SR',
            'Analista de Pré Venda (SDR)',
        ],
        tags: [
            'Estágio',
            'RevOps',
            'back-end',
            'Análise',
            'Software'
        ],
        state: 'accepted'
    },
    {
        id: 3,
        featured_tier: 1,
        visit_count: 141,
        reports: [],
        has_image: true,
        advertiser: 'GAIO DataOS',
        link: 'https://www.linkedin.com/jobs/view/3987039124/?eBP=BUDGET_EXHAUSTED_JOB&refId=/6psPwxbfV6Fmuc0jBrP6g%3D%3D&trackingId=hwQcmYYSx5SFh/lCLNpqiQ%3D%3D&trk=flagship3_search_srp_jobs',
        date: new Date(2024, 8, 12),
        limit_date: undefined,
        vacancies: [
            'Dev Pleno Full Stack ReactJS'
        ],
        tags: [
            'Dev',
            'Pleno',
            'full-stack',
            'ReactJS'
        ],
        state: 'accepted'
    },
    {
        id: 4,
        featured_tier: 3,
        visit_count: 289,
        reports: [],
        has_image: true,
        advertiser: 'Sankhya',
        link: 'https://sankhya.gupy.io',
        date: new Date(2024, 8, 13),
        limit_date: new Date(2024, 8, 14),
        vacancies: [
            'Dev(a) Devops (Remoto)',
            'Dev(a) Front End - Sênior (remoto)',
            'Dev(a) Full Stack Java - Sênior',
            'Dev(a) Full Stack Java/React',
            'Dev(a) Full Stack React/Python',
            'Gerente de Segurança da Informação',
            'Group Project Manager',
            'Product Manager - Logística',
            'Analista de Infraestrutura Cloud III',
            'Analista de Customer Experience',
            'Analista de Desenvolvimento (Java, Javascript, Python) - [NEPPO]',
            'Analista de Live Marketing',
            'Analista de Requisitos [NEPPO]',
            'Analista de testes Automatizados',
            'Assistente de Prospecção (SDR)',
            'Consultor(a) de Suporte (Documentos Eletrônicos)'
        ],
        tags: [
            'Dev',
            'Remoto',
            'front-end',
            'Sênior',
            'Java',
            'React',
            'Python',
            'Segurança',
            'Análise',
            'Javascript',
            'NEPPO',
            'Consultoria',
            'full-stack'
        ],
        state: 'accepted'
    },
    {
        id: 5,
        featured_tier: 1,
        visit_count: 121,
        reports:[],
        has_image: true,
        advertiser: 'Chave7',
        link: 'https://www.linkedin.com/jobs/view/3985683177/?eBP=CwEAAAGRBYSdud5x3d53UNwwcTaV09J9AWfY2Aa6lRuKlcq83FoXT7To_OatdZdHHgamfQlLfJdsXajyp-bBKxdwPhcYvQl8haIi_TuvP5RWSLZdMkajClr4NuAyraB9OxrImYteM_vvKkA2PVRI8XQKiGLxLY8zbuxiDg0AV0f4bIV8uPaiwf5ri4Qtx6o4kVJysKSLUvaKbZrxBm_DIKYyp-3il6ohTUtXV2uzyJqtFFNaHFFIdCtwCN59fGOCUyyXrAvO_elHiDkDF2k9i9Ltcr2PB0dLGn76veSYUdLHJAtpoZfSNfHccFnLYbbUUcDA8tMEje2KRARTqOvqMwlQsxI9jqtgiW-QfNLgH_16960T-neZbfL4EuaU61M8nRcqBnAhnoD6ICqQE1a0jCJ1Kys6WWnz4G4JNOwGIxtKYGXxLzHiLYM9pyUqbl5xKln7gIgPOiljFE6T5zMXkMSNZjtfJErLqe6CEGwIHHT0Exiv&refId=nh%2B39uopB7w9BGDVoGL7nw%3D%3D&trackingId=U0oyCW7Spz2wlSuBQTibzw%3D%3D&trk=flagship3_search_srp_jobs&original_referer=',
        date: new Date(2024, 8, 14),
        limit_date: undefined,
        vacancies: [
            'Dev Mobile Sênior (Android e iOS)'
        ],
        tags: [
            'Dev',
            'Mobile',
            'Sênior',
            'Android',
            'iOS'
        ],
        state: 'accepted'
    },
    {
        id: 6,
        featured_tier: 1,
        visit_count: 89,
        reports:[],
        has_image: true,
        advertiser: 'Autus',
        link: 'https://www.glassdoor.com.br/job-listing/est%C3%A1gio-autus-chevrolet-JV_IC2508060_KO0,7_KE8,23.htm?jl=1009378927299&cs=1_702e9fc8&s=58&t=SR&pos=325&src=GD_JOB_AD&guid=00000191055ed8b6b603da06f80943a9&jobListingId=1009378927299&ea=1&ao=1136043&vt=w&jrtk=5-yul1-0-1i42ltm95ir14800-0a2a402545a6c514&cb=1722371987994&ctt=1722372011418',
        date: new Date(2024, 8, 15),
        limit_date: undefined,
        vacancies: [
            'Estágio de TI'
        ],
        tags: [
            'Estágio',
            'TI'
        ],
        state: 'accepted'
    },
    {
        id: 7,
        featured_tier: 1,
        visit_count: 76,
        reports:[],
        has_image: true,
        advertiser: 'Codenato',
        link: 'https://www.linkedin.com/posts/codenato_vem-pra-codenato-ugcPost-7223770505823084544-gHlw/?utm_source=share&utm_medium=member_desktop',
        date: new Date(2024, 8, 16),
        limit_date: undefined,
        vacancies: [
            'Dev Fullstack'
        ],
        tags: [
            'Dev',
            'full-stack'
        ],
        state: 'accepted'
    },
    {
        id: 8,
        featured_tier: 1,
        visit_count: 341,
        reports: [],
        has_image: true,
        advertiser: 'Zup',
        link: 'https://www.linkedin.com/posts/codenato_vem-pra-codenato-ugcPost-7223770505823084544-gHlw/?utm_source=share&utm_medium=member_desktop',
        date: new Date(2024, 8, 17),
        limit_date: undefined,
        vacancies: [
            'Product Manager',
            'Engenheira de Software Staff | StackSpot',
            'Analista de Governança',
            'Dev Back-end (Java e AWS)',
            'Dev Back-end Pleno (Java/Kotlin)',
            'Dev Front-end Especialista',
            'Dev Full-stack',
            'Cloud Solution Architect Especialist (Architect Cloud)',
            'Especialista em Desenvolvimento Back-end (GoLang)',
            'Dev Backend Java - Especialista',
            'Dev Backend Java Pleno',
            'Dev Backend Java Sênior',
            'Dev Back-End (.Net Core)',
            'Dev Back-End Sênior (GoLang)',
            'Dev Back-End Sênior (Java)',
            'Dev Dynamics',
            'Dev Front-End Sênior (Angular)',
            'Dev Fullstack(Java/Angular) Senior',
            'Dev Java/AWS Sênior',
            'Dev Python Senior',
            'Devops / SRE - Pleno/Senior',
            'Devops / SRE - Senior/ Especialista',
            'Engenheira de Dados e AWS cloud Sênior',
            'QA Automatizadora Fullstack Senior',
            'QA Automatizadora Senior',
            'Profissional de Devops / SRE (DevOp/SRE)- Infraestrutura) Sênior',
            'SRE / DevSecOps Senior',
            'Senior Technical Writing',
            'Cloud Solution Architect',
            'Data Engineer Pleno',
            'DevOps - AWS - Specialist',
            'Engenheiro de Dados Sênior',
            'Dev backend Java Pleno / Senior',
            'Dev Backend Java - Spec',
            'Dev Java PL - Vaga afirmativa para pessoas de recortes sociais diversos',
            'Product Owner (PO) - Vaga Afirmativa para Mulheres Pretas',
            'Software Solution Architect (Back-end - Java)',
            'Tech Lead - Fullstack Backend (Java/Mobile Nativo)',
            'Tech Lead .Net'
        ],
        tags: [
            'PO',
            'StackSpot',
            'Analista',
            'Java',
            'AWS',
            'Kotlin',
            'back-end',
            'front-end',
            'Dev',
            'Architect Cloud',
            'GoLang',
            '.NET',
            'Dynamics',
            'Angular',
            'Python',
            'Devops',
            'SRE',
            'QA',
            'Automação',
            'Cloud Solution Architect',
            'Engenharia de Dados',
            'Pleno',
            'Vagas Afirmativas'
        ],
        state: 'accepted'
    },
    {
        id: 9,
        featured_tier: 1,
        visit_count: 66,
        reports: [],
        has_image: true,
        advertiser: 'Azship',
        link: 'https://www.glassdoor.com.br/job-listing/analista-de-sucesso-do-cliente-azship-tecnologia-em-log%C3%ADstica-JV_IC2508060_KO0,30_KE31,61.htm?jl=1009385825760&src=GD_JOB_AD&ao=1110586&jrtk=5-yul1-0-1i42lsoigmskr800-e13e394b577d65ed---6NYlbfkN0DCjnmxLZI0d3IpbamVgiJdHzipXUalC_P_gNqWnl9wb8lLQfOX-ugwmjYLDbjulCnodBOov0Ij0qlETN54kpJiG7tRBc7SqHD69Iznjs5xLx3pXFy0XoMO8rWQdIADxfXhMZq6DeLQ__tTxTxtwdheNa5P6JnUMeWrZRIpsPX7q8xxXEqlEmOWv8PP03bUL2Dk04Uxtt2htEm1HnUY381AOwU6U-YHkeFrbHTOoio163HnTS23lWU7msrZZu06Urdwth41tsOE_bkJj-smT3hs0tsMi8UlWvS3Qy1zm7dG5lm3aNT0C0F-j6BqFtVp9dBqJ-F6EUePt1aD7JjNCJeIMsJT01ZVzlG4mL9HjrP3KwzI6b3krcOqcYDjO2BSIPdBYJHkxFqGl-zcFu8Q7PX_KjoXT3q5GyyJKMGElaLqj5rVa5kfIn_KydrOD1lzf9wZJdYL6lq7UTTtmDPbLyMa_m4jX0g5gSPf6miphEopUQR4PWseZ1R2cEStZV1cRNDDUqGLD53JINghdU3uoty61GMpwAGEzuTJ6xNPCNmWUcYYM7RIQJ1EhmA_HQ12j9Q2PIzcb2PAEcvJP_GIvIGwYImIhaxa-MyQLLG7up7mDy9V-En3ySxx&cs=1_af80f508&s=58&t=SR&pos=201&cpc=FB7E4A1762AE5BEC&guid=00000191055e6217b600ddd445b50e41&jobListingId=1009385825760&ea=1&vt=w&cb=1722371957636&ctt=1722371961434',
        date: new Date(2024, 8, 18),
        limit_date: undefined,
        vacancies: [
            'Analista de Sucesso do Cliente'
        ],
        tags: [
            'Análise'
        ],
        state: 'accepted'
    },
    {
        id: 10,
        featured_tier: 1,
        visit_count: 113,
        reports: [],
        has_image: true,
        advertiser: 'TQI',
        link: 'https://www.linkedin.com/jobs/view/3995012913/?refId=g5m0SwiJgbxZYkkvo415EQ%3D%3D&trackingId=g5m0SwiJgbxZYkkvo415EQ%3D%3D',
        date: new Date(2024, 8, 19),
        limit_date: undefined,
        vacancies: [
            'Dev back-end PL (java, kotlin)',
            'Dev back-end SR (java, kotlin, python)',
            'iOS SR',
            'Analista de dados SR (databricks)',
            'Dev fullstack pl (java / react)',
            'Dev front-end (angular)',
            'SRE SR',
            'Dev back-end PL (java, kotlin)',
        ],
        tags: [
            'Dev',
            'back-end',
            'front-end',
            'full-stack',
            'Java',
            'Kotlin',
            'Python',
            'Databricks',
            'React',
            'Angular',
            'SRE',
            'Pleno',
            'Sênior',
        ],
        state: 'accepted'
    },
]

export const events: event[] = [
    {
        id: 1,
        featured_tier: 2,
        visit_count: 132,
        reports: [],
        date: new Date(2024, 8, 10),
        has_image: true,
        advertiser: 'UberHub',
        link: 'https://www.youtube.com/watch?v=w8VheDdkCuQ',
        tags: [
            'Podcast',
            'UberHub',
            'X-ECOMM'
        ],
        state: 'accepted',
        name: 'UberHub Podcast com organizadores do evento X-ECOMM',
        days: [
            {
                start: new Date(2024, 8, 13, 17, 30, 0, 0),
                end: undefined
            }
        ],
        type: 'online',
        adress: ''
    },
    {
        id: 2,
        featured_tier: 1,
        visit_count: 91,
        reports: [],
        date: new Date(2024, 8, 11),
        has_image: true,
        advertiser: 'ACIUB',
        link: 'https://eventos.superasistemas.com.br/e/checkout/kdqA5vm2oCUD#!',
        tags: [
            'Conexão',
            'Negócios',
            'Aciub'

        ],
        state: 'accepted',
        name: '3ª edição Conexão de Negócios - Aciub Jovem',
        days: [
            {
                start: new Date(2024, 7, 21, 7, 30, 0, 0),
                end: undefined
            }
        ],
        type: 'presencial',
        adress: 'ACIUB'
    },
    {
        id: 3,
        featured_tier: 2,
        visit_count: 312,
        reports: [],
        date: new Date(2024, 8, 12),
        has_image: true,
        advertiser: 'Sankhya',
        link: 'https://sankhyaconnection.com.br',
        tags: [
            'Gestão Corporativa',
            'Tecnologia',
            'Negócios',
            'Recursos Humanos',
            'Vendas',
            'Indústria',
            'Serviços',
            'Logística'

        ],
        state: 'accepted',
        name: 'Sankhya Connection 2024',
        days: [
            {
                start: new Date(2024, 8, 24, 8, 0, 0, 0),
                end: new Date(2024, 8, 24, 22, 0, 0, 0)
            }
        ],
        type: 'presencial',
        adress: 'Transamerica Expo Center'
    },
    {
        id: 4,
        featured_tier: 1,
        visit_count: 105,
        reports: [],
        date: new Date(2024, 8, 13),
        has_image: false,
        advertiser: 'Andrey Ferraz',
        link: 'https://ia-marketing-8qiwyio.gamma.site',
        tags: [
            'palestra',
            'IA generativa',
            'IA',
            'marketing',
            'vendas'
        ],
        state: 'accepted',
        name: 'O impacto da IA generativa nas estratégias de marketing e vendas',
        days: [
            {
                start: new Date(2024, 7, 26, 19, 0, 0, 0),
                end: undefined
            }
        ],
        type: 'presencial',
        adress: 'Átrio Business Center'
    },
    {
        id: 5,
        featured_tier: 3,
        visit_count: 240,
        reports: [],
        date: new Date(2024, 8, 14),
        has_image: true,
        advertiser: 'X-ECOMM',
        link: 'https://docs.google.com/forms/d/e/1FAIpQLScGLb9RaXjR8TMQ9TKv5f1Tg7iOPz7at-bUunOMJknEkEqEGw/viewform?pli=',
        tags: [
            'encontro',
            'X-ECOMM',
            'marketplace',
            'vendas'
        ],
        state: 'accepted',
        name: 'X-ECOMM Marketplaces - tudo que você precisa saber para vender nos marketplaces',
        days: [
            {
                start: new Date(2024, 7, 27, 18, 30, 0, 0),
                end: undefined
            }
        ],
        type: 'presencial',
        adress: 'R. Izaú Rangel de Mendonça, 20 - Santa Mônica, Uberlândia - MG, 38408-136, Brasil'
    },
    {
        id: 6,
        featured_tier: 1,
        visit_count: 194,
        reports: [],
        date: new Date(2024, 8, 14),
        has_image: true,
        advertiser: 'MB Summit Brazil',
        link: 'https://doity.com.br/devfest-triangulo-2024',
        tags: [
            'Congresso',
            'Imobiliário',
            'Inovação',
            'tecnologia'
        ],
        state: 'accepted',
        name: 'MB Summit Uberlândia 2024',
        days: [
            {
                start: new Date(2024, 9, 24, 8, 0, 0, 0),
                end: new Date(2024, 9, 24, 20, 0, 0, 0)
            }
        ],
        type: 'presencial',
        adress: 'Condomínio Edifício Ilha Bella Residence'
    },
    {
        id: 7,
        featured_tier: 1,
        visit_count: 176,
        reports: [],
        date: new Date(2024, 8, 14),
        has_image: true,
        advertiser: 'GDG Uberlândia',
        link: 'https://doity.com.br/devfest-triangulo-2024',
        tags: [
            'troca de experiências',
            'aprendizado',
            'networking',
            'tecnologia'
        ],
        state: 'accepted',
        name: 'Google Devfest Uberlândia',
        days: [
            {
                start: new Date(2024, 10, 2, 8, 0, 0, 0),
                end: new Date(2024, 10, 2, 18, 0, 0, 0)
            }
        ],
        type: 'presencial',
        adress: 'Gaudium Hall'
    },
]

export const vacancy_tags: string[] = [...new Set(vacancies.map((a) => a.tags).flat())].sort()
export const event_tags: string[] = [...new Set(events.map((a) => a.tags).flat())].sort()

export const vacOrderOptions: orderOption[] = [
    {
        name: 'em destaque',
        value: 'featured_tier'
    },
    {
        name: 'data',
        value: 'date'
    }
]

export const eventOrderOptions: orderOption[] = [
    {
        name: 'em destaque',
        value: 'featured_tier'
    },
    {
        name: 'data',
        value: 'date'
    }
]

export const event_types: string[] = ['presencial', 'online']

export const advertisers: string[] = [...new Set(vacancies.map((a) => a.advertiser))].sort()