(function () {
  'use strict';

  const COMMON_KEYS = {
    'home.hero_badge': {
      en: 'Universal Ecosystem',
      lg: 'Ebyuma Byonna',
      lus: 'Ebyuma Byona',
      sw: 'Mfumo Wote Wa Vifaa',
      fr: 'Écosystème Universel',
      ar: 'منظومة شاملة',
      pt: 'Ecossistema Universal',
      es: 'Ecosistema Universal',
      hi: 'सार्वभौमिक पारिस्थितिकी तंत्र'
    },
    'home.hero_title': {
      en: 'Your world, connected.',
      lg: 'Ensi yo, egattiddwa.',
      lus: 'Eisialo lyo, ligaitibwa.',
      sw: 'Ulimwengu wako, umeunganishwa.',
      fr: 'Votre monde, connecté.',
      ar: 'عالمك، متصل.',
      pt: 'Seu mundo, conectado.',
      es: 'Tu mundo, conectado.',
      hi: 'आपकी दुनिया, जुड़ी हुई।'
    },
    'about.hero_title': {
      en: 'Connecting Media, Entertainment & Devices Worldwide',
      lg: 'Okugatta Emikutu, Ekisanyuzo n\'Ebyuma Mu Nsi Yonna',
      lus: 'Okugaita Emikutu, Ekisanyuzo n\'Ebyuma Mu Eisialo Lyona',
      sw: 'Kuunganisha Vyombo vya Habari, Burudani na Vifaa Duniani Kote',
      fr: 'Connecter les médias, le divertissement et les appareils dans le monde entier',
      ar: 'ربط الوسائط والترفيه والأجهزة في جميع أنحاء العالم',
      pt: 'Conectando mídia, entretenimento e dispositivos em todo o mundo',
      es: 'Conectando medios, entretenimiento y dispositivos en todo el mundo',
      hi: 'दुनिया भर में मीडिया, मनोरंजन और उपकरणों को जोड़ना'
    },
    'about.hero_lead': {
      en: 'sanyuhub is a browser-first digital entertainment platform engineered to bring seamless playback of movies, live TV, music, and concerts to every screen without forced native app installations.',
      lg: 'sanyuhub kyiko ky\'omulembe ekigatta firimu, TV, oyimba n\'amasanyu ku buli skuleeni nga tewali kupakira pulogulaamu.',
      lus: 'sanyuhub kifo ky\'omulembe ekigaita firimu, TV, oyimba n\'amasanyu ku buli skuleeni nga tewali kupakira pulogulaamu.',
      sw: 'sanyuhub ni jukwaa la kidijitali linaloleta filamu, TV, muziki na tamasha kwenye kila skrini bila kulazimisha kupakua programu.',
      fr: 'sanyuhub est une plateforme de divertissement numérique conçue pour offrir une lecture fluide de films, TV en direct, musique et concerts sur chaque écran sans installation.',
      ar: 'sanyuhub هي منصة ترفيهية رقمية مصممة لتوفير تشغيل سلس للأفلام والبث المباشر والموسيقى والحفلات على كل شاشة دون تثبيت تطبيقات.',
      pt: 'O sanyuhub é uma plataforma de entretenimento digital projetada para oferecer reprodução de filmes, TV ao vivo, música e shows em qualquer tela sem instalações.',
      es: 'sanyuhub es una plataforma de entretenimiento digital diseñada para ofrecer reproducción fluida de películas, TV en vivo, música y conciertos en cualquier pantalla sin instalaciones.',
      hi: 'sanyuhub एक डिजिटल मनोरंजन प्लेटफॉर्म है जो बिना ऐप इंस्टॉल किए हर स्क्रीन पर फिल्में, लाइव टीवी, संगीत और संगीत कार्यक्रम लाता है।'
    },
    'terms.hero_title': {
      en: 'Terms of Service',
      lg: 'Emateeka n\'Ebikwata ku Kukoresa',
      lus: 'Ebibikiro by\'Okozesa',
      sw: 'Vigezo na Masharti ya Huduma',
      fr: 'Conditions d\'utilisation',
      ar: 'شروط الخدمة',
      pt: 'Termos de Serviço',
      es: 'Términos del Servicio',
      hi: 'सेवा की शर्तें'
    },
    'terms.hero_lead': {
      en: 'Please review these Terms of Service ("Terms") carefully before using sanyuhub web applications, device portals, or connected media services.',
      lg: 'Soma emateeka gano n\'obwegendereza obukulu nga tonnakoresa emikutu gya sanyuhub.',
      lus: 'Soma emateeka gano n\'obwegendereza obukulu nga tonnakozesa emikutu gya sanyuhub.',
      sw: 'Tafadhali kagua Vigezo hivi vya Huduma kwa makini kabla ya kutumia huduma za sanyuhub.',
      fr: 'Veuillez lire attentivement ces conditions d\'utilisation avant d\'utiliser les services web sanyuhub.',
      ar: 'يرجى مراجعة شروط الخدمة هذه بعناية قبل استخدام تطبيقات ومواقع sanyuhub.',
      pt: 'Por favor, leia estes Termos de Serviço cuidadosamente antes de usar os serviços do sanyuhub.',
      es: 'Por favor, revisa estos Términos de Servicio detenidamente antes de usar los servicios de sanyuhub.',
      hi: 'कृपया sanyuhub वेब सेवाओं का उपयोग करने से पहले इन सेवा शर्तों को ध्यान से पढ़ें।'
    },
    'privacy.hero_title': {
      en: 'Privacy Policy',
      lg: 'Nkola y\'Ekyama',
      lus: 'Eisaza ly\'Ekiyama',
      sw: 'Sera ya Faragha',
      fr: 'Politique de confidentialité',
      ar: 'سياسة الخصوصية',
      pt: 'Política de Privacidade',
      es: 'Política de Privacidad',
      hi: 'गोपनीयता नीति'
    },
    'privacy.hero_lead': {
      en: 'Learn how sanyuhub collects, protects, utilizes, and respects user data, local browser preferences, and digital privacy across all connected device experiences.',
      lg: 'Soma engeri sanyuhub gyeekuuma ekyama n\'ebyfayo eby\'ebyuma byo.',
      lus: 'Soma engeri sanyuhub gyeekuuma ekyama n\'ebyfayo eby\'ebyuma byo.',
      sw: 'Jifunze jinsi sanyuhub inavyokusanya, kulinda na kuheshimu faragha ya data ya watumiaji kwenye vifaa vyote.',
      fr: 'Découvrez comment sanyuhub protège, utilise et respecte les données des utilisateurs et la vie privée numérique.',
      ar: 'تعرف على كيفية جمع sanyuhub لبيانات المستخدم وحمايتها واحترام الخصوصية الرقمية عبر جميع الأجهزة.',
      pt: 'Saiba como o sanyuhub coleta, protege e respeita os dados do usuário e a privacidade digital em todos os dispositivos.',
      es: 'Aprende cómo sanyuhub recopila, protege y respeta los datos de los usuarios y la privacidad digital en todos los dispositivos.',
      hi: 'जानें कि sanyuhub उपयोगकर्ता के डेटा और डिजिटल गोपनीयता की रक्षा कैसे करता है।'
    },
    'accessibility.hero_title': {
      en: 'Accessibility Statement',
      lg: 'Ekiwandiiko kyo\'Lukusa lwa Buli Muntu',
      lus: 'Ekiwandiiko kyo\'Empereza ya Buli Muntu',
      sw: 'Taarifa ya Ufikiaji',
      fr: 'Déclaration d\'accessibilité',
      ar: 'بيان إمكانية الوصول',
      pt: 'Declaração de Acessibilidade',
      es: 'Declaración de Accesibilidad',
      hi: 'सुगम्यता विवरण'
    },
    'accessibility.hero_lead': {
      en: 'sanyuhub is committed to ensuring digital accessibility for all users, including individuals with visual, hearing, motor, or cognitive impairments.',
      lg: 'sanyuhub eweebwa kukuuma obukuumi bw\'omukutu ku buli muntu.',
      lus: 'sanyuhub eweebwa kukuuma obukuumi bw\'omukutu ku buli muntu.',
      sw: 'sanyuhub imejitolea kuhakikisha ufikiaji wa kidijitali kwa watumiaji wote.',
      fr: 'sanyuhub s\'engage à garantir l\'accessibilité numérique à tous les utilisateurs.',
      ar: 'تلتزم sanyuhub بضمان إمكانية الوصول الرقمي لجميع المستخدمين.',
      pt: 'O sanyuhub está comprometido em garantir acessibilidade digital para todos os usuários.',
      es: 'sanyuhub se compromete a garantizar la accesibilidad digital para todos los usuarios.',
      hi: 'sanyuhub सभी उपयोगकर्ताओं के लिए डिजिटल पहुंच सुनिश्चित करने के लिए प्रतिबद्ध है।'
    },
    'help.hero_title': {
      en: 'Troubleshooting & Solutions',
      lg: 'Okugolola Obuzibu & Obuyambi',
      lus: 'Okugolola Obuzibu & Obuyambi',
      sw: 'Utatuzi wa Matatizo na Majibu',
      fr: 'Dépannage & Solutions',
      ar: 'استكشاف الأخطاء وإصلاحها',
      pt: 'Solução de Problemas & Respostas',
      es: 'Solución de Problemas y Respuestas',
      hi: 'समस्या निवारण और समाधान'
    },
    'help.hero_lead': {
      en: 'Find instant step-by-step solutions for any issue you might experience on sanyuhub across video playback, casting, mobile PWA setup, network connectivity, and browser settings without contacting support.',
      lg: 'Laba obuyambi obw\'amangu ku buzibu bw\'omukutu, okwolesa ku TV, n\'amasimu gyo.',
      lus: 'Laba obuyambi obw\'amangu ku buzibu bw\'omukutu, okwolesa ku TV, n\'emasimu gyo.',
      sw: 'Pata miongozo ya haraka ya kutatua changamoto za video, casting, PWA ya simu na mtandao.',
      fr: 'Trouvez des solutions instantanées étape par étape pour la lecture vidéo, le casting et la connexion réseau.',
      ar: 'اعثر على حلول خطوة بخطوة لأي مشكلة في تشغيل الفيديو والبث وتكاد إعدادات الشبكة.',
      pt: 'Encontre soluções passo a passo instantâneas para reprodução de vídeo, transmissão e rede.',
      es: 'Encuentra soluciones paso a paso instantáneas para reproducción de video, transmisión y red.',
      hi: 'वीडियो प्लेबैक, कास्टिंग और नेटवर्क के लिए त्वरित चरण-दर-चरण समाधान खोजें।'
    },
    'device.supported_devices': {
      en: 'Supported Devices',
      lg: 'Ebyuma Bisoboka',
      lus: 'Ebyuma Bisoboka',
      sw: 'Vifaa Vinavyoungwa Mkono',
      fr: 'Appareils pris en charge',
      ar: 'الأجهزة المدعومة',
      pt: 'Dispositivos Suportados',
      es: 'Dispositivos Compatibles',
      hi: 'समर्थित उपकरण'
    },
    'device.system_req': {
      en: 'System Requirements & Prerequisites',
      lg: 'Ebisaanyizo by\'Ekyuma',
      lus: 'Ebisaanyizo by\'Ekyuma',
      sw: 'Mahitaji ya Mfumo',
      fr: 'Configuration requise',
      ar: 'متطلبات النظام',
      pt: 'Requisitos do Sistema',
      es: 'Requisitos del Sistema',
      hi: 'सिस्टम आवश्यकताएं'
    },
    'device.installation_guide': {
      en: 'Step-by-Step Installation',
      lg: 'Eby\'Okukola Omutwe ku Mutwe',
      lus: 'Eby\'Okukola Omutwe ku Mutwe',
      sw: 'Mwongozo wa Hatua kwa Hatua',
      fr: 'Instructions étape par étape',
      ar: 'دليل التثبيت خطوة بخطوة',
      pt: 'Guia Passo a Passo',
      es: 'Guía Paso a Passo',
      hi: 'चरण-दर-चरण गाइड'
    },
    'device.configuration_support': {
      en: 'Configuration & Support',
      lg: 'Okuteresaza & Obuyambi',
      lus: 'Okuteresaza & Obuyambi',
      sw: 'Uwekaji Mipangilio na Msaada',
      fr: 'Configuration & Support',
      ar: 'التهيئة والدعم',
      pt: 'Configuração & Suporte',
      es: 'Configuración y Soporte',
      hi: 'कॉन्फ़िगरेशन और सहायता'
    },
    'device.faqs': {
      en: 'Frequently Asked Questions',
      lg: 'Ebibuuzo Ebibuuzibwa Ennyo',
      lus: 'Ebibuuzo Ebibuuzibwa Ennyo',
      sw: 'Maswali Yanayoulizwa Mara Kwa Mara',
      fr: 'Foire Aux Questions',
      ar: 'الأسئلة الشائعة',
      pt: 'Perguntas Frequentes',
      es: 'Preguntas Frecuentes',
      hi: 'अक्सर पूछे जाने वाले प्रश्न'
    },
    'device.explore_other': {
      en: 'Explore Other Devices',
      lg: 'Laba Ebyuma Ebirala',
      lus: 'Laba Ebyuma Ebirala',
      sw: 'Chunguza Vifaa Vingine',
      fr: 'Explorer d\'autres appareils',
      ar: 'استكشف أجهزة أخرى',
      pt: 'Explorar Outros Dispositivos',
      es: 'Explorar Otros Dispositivos',
      hi: 'अन्य डिवाइस एक्सप्लोर करें'
    },
    'home.hero_lead': {
      en: 'sanyuhub seamlessly connects your smartphone, computer, smart TV, and streaming devices in one elegant experience.',
      lg: 'sanyuhub egatta essimu yo, kompyuta, TV ey\'amagezi, n\'ebyuma ebyolesa mu kaseera ka wano.',
      lus: 'sanyuhub egaita eisimu lyo, kompyuta, TV ey\'amagezi, n\'ebyuma ebyolesa mu kaseera gano.',
      sw: 'sanyuhub inaunganisha simu yako, kompyuta, Smart TV na vifaa vya kutiririsha kwa uzoefu mmoja.',
      fr: 'sanyuhub connecte de manière transparente votre smartphone, ordinateur, Smart TV et appareils de streaming.',
      ar: 'يربط sanyuhub بكل سلاسة بين هاتفك الذكي، جهاز الكمبيوتر، التلفزيون الذكي وأجهزة البث.',
      pt: 'O sanyuhub conecta perfeitamente seu smartphone, computador, Smart TV e dispositivos de streaming.',
      es: 'sanyuhub conecta sin problemas tu teléfono inteligente, computadora, Smart TV y dispositivos de transmisión.',
      hi: 'sanyuhub आपके स्मार्टफोन, कंप्यूटर, स्मार्ट टीवी और स्ट्रीमिंग डिवाइस को एक साथ जोड़ता है।'
    },
    'home.btn_launch': {
      en: 'Explore Web Client',
      lg: 'Laba Omukutu',
      lus: 'Laba Omukutu',
      sw: 'Tazama Tovuti',
      fr: 'Explorer le Web Client',
      ar: 'استكشف موقع الويب',
      pt: 'Explorar Cliente Web',
      es: 'Explorar Cliente Web',
      hi: 'वेब क्लाइंट देखें'
    },
    'home.btn_choose_device': {
      en: 'Choose Your Device',
      lg: 'Londa Ekyuma Kyo',
      lus: 'Londa Ekyuma Kyo',
      sw: 'Chagua Kifaa Chako',
      fr: 'Choisir votre appareil',
      ar: 'اختر جهازك',
      pt: 'Escolha seu Dispositivo',
      es: 'Elige tu Dispositivo',
      hi: 'अपना डिवाइस चुनें'
    },
    'home.about_heading': {
      en: 'What is sanyuhub?',
      lg: 'sanyuhub kiki?',
      lus: 'sanyuhub kiki?',
      sw: 'sanyuhub ni nini?',
      fr: 'Qu\'est-ce que sanyuhub ?',
      ar: 'ما هو sanyuhub؟',
      pt: 'O que é o sanyuhub?',
      es: '¿Qué es sanyuhub?',
      hi: 'sanyuhub क्या है?'
    },
    'home.about_text_1': {
      en: 'sanyuhub is a modern cross-platform hub that unites digital media, device connectivity, and interactive services across all your daily screens.',
      lg: 'sanyuhub kifo ky\'omulembe ekigatta emikutu gy\'ebifananyi, obuyungi bwo ku mikutu n\'amasimu gayo.',
      lus: 'sanyuhub kifo ky\'omulembe ekigaita emikutu gy\'ebifananyi n\'amasimu gayo.',
      sw: 'sanyuhub ni kituo cha kisasa kinachounganisha vyombo vya habari vya dijiti na vifaa vyako vyote.',
      fr: 'sanyuhub est un hub multiplateforme moderne qui réunit vos médias numériques et la connectivité de vos appareils.',
      ar: 'sanyuhub هو مركز حديث متعدد المنصات يجمع بين الوسائط الرقمية واقتران الأجهزة.',
      pt: 'O sanyuhub é um hub moderno multiplataforma que une mídias digitais e conectividade entre dispositivos.',
      es: 'sanyuhub es un centro multiplataforma moderno que une medios digitales y conectividad entre dispositivos.',
      hi: 'sanyuhub एक आधुनिक क्रॉस-प्लेटफॉर्म हब है जो डिजिटल मीडिया और डिवाइस कनेक्टिविटी को एकजुट करता है।'
    },
    'home.about_text_2': {
      en: 'Whether on an iPhone, Android device, Windows PC, Mac, or 4K Smart TV, sanyuhub provides instant browser-based accessibility with zero forced installs.',
      lg: 'Kuba ku iPhone, Android, Windows, Mac oba Smart TV, sanyuhub ekuwa okukoresa mu kaseera ka wano.',
      lus: 'Kuba ku iPhone, Android, Windows, Mac oba Smart TV, sanyuhub ekuwa okukozesa mu kaseera gano.',
      sw: 'Iwe kwenye iPhone, Android, Windows, Mac au Smart TV, sanyuhub inatoa fursa kupitia kivinjari mara moja.',
      fr: 'Que ce soit sur iPhone, Android, Windows, Mac ou Smart TV, sanyuhub offre un accès navigateur instantané.',
      ar: 'سواء كنت تستخدم iPhone أو Android أو Windows أو Mac أو Smart TV، يوفر sanyuhub وصولاً فورياً عبر المتصفح.',
      pt: 'Seja no iPhone, Android, Windows, Mac ou Smart TV, o sanyuhub oferece acesso instantâneo via navegador.',
      es: 'Ya sea en iPhone, Android, Windows, Mac o Smart TV, sanyuhub ofrece acceso instantáneo basado en navegador.',
      hi: 'चाहे iPhone हो, Android हो, Windows हो, Mac हो या Smart TV, sanyuhub तुरंत वेब एक्सेस प्रदान करता है।'
    },
    'home.how_heading': {
      en: 'How sanyuhub Works',
      lg: 'sanyuhub Ekola Etya',
      lus: 'sanyuhub Ekola Etya',
      sw: 'Jinsi sanyuhub Inavyofanya Kazi',
      fr: 'Comment fonctionne sanyuhub',
      ar: 'كيف يعمل sanyuhub',
      pt: 'Como o sanyuhub Funciona',
      es: 'Cómo funciona sanyuhub',
      hi: 'sanyuhub कैसे काम करता है'
    },
    'home.how_sub': {
      en: 'Get started in seconds on any hardware with zero hassle.',
      lg: 'Tandika mu buseke obutono ku kyo kyonna.',
      lus: 'Tandika mu buseke obutono ku kyo kyona.',
      sw: 'Anza kwa sekunde chache kwenye kifaa chochote.',
      fr: 'Commencez en quelques secondes sur n\'importe quel matériel.',
      ar: 'ابدأ في ثوانٍ على أي جهاز دون عناء.',
      pt: 'Comece em segundos em qualquer dispositivo sem complicações.',
      es: 'Comienza en segundos en cualquier dispositivo sin complicaciones.',
      hi: 'बिना किसी परेशानी के किसी भी डिवाइस पर कुछ ही सेकंड में शुरू करें।'
    },
    'home.step1_title': {
      en: 'Select Your Device',
      lg: 'Londa Ekyuma Kyo',
      lus: 'Londa Ekyuma Kyo',
      sw: 'Chagua Kifaa Chako',
      fr: 'Sélectionnez votre appareil',
      ar: 'اختر جهازك',
      pt: 'Selecione seu Dispositivo',
      es: 'Selecciona tu Dispositivo',
      hi: 'अपना डिवाइस चुनें'
    },
    'home.step1_desc': {
      en: 'Browse our verified device catalog for tailored instructions for mobile, desktop, TV, or consoles.',
      lg: 'Laba ekyuma kyo ku lukalala lw\'amasimu, kompyuta n\'eTivvi.',
      lus: 'Laba ekyuma kyo ku lukalala lw\'emasimu, kompyuta n\'eTivvi.',
      sw: 'Kagua orodha yetu ya vifaa kwa maelekezo ya simu, kompyuta na TV.',
      fr: 'Parcourez notre catalogue d\'appareils vérifiés pour mobile, ordinateur ou TV.',
      ar: 'تصفح كتالوج الأجهزة المعتمد للحصول على إرشادات للهواتف والكمبيوتر والتلفزيون.',
      pt: 'Navegue pelo nosso catálogo de dispositivos verificados para instruções de celular, PC ou TV.',
      es: 'Explora nuestro catálogo de dispositivos verificados para instrucciones en móvil, PC o TV.',
      hi: 'मोबाइल, डेस्कटॉप या टीवी के लिए हमारे सत्यापित डिवाइस गाइड देखें।'
    },
    'home.step2_title': {
      en: 'Launch Web App',
      lg: 'Gulawo Omukutu',
      lus: 'Gulawo Omukutu',
      sw: 'Fungua Tovuti',
      fr: 'Lancer l\'application Web',
      ar: 'افتح تطبيق الويب',
      pt: 'Iniciar Aplicativo Web',
      es: 'Iniciar Aplicación Web',
      hi: 'वेब ऐप चालू करें'
    },
    'home.step2_desc': {
      en: 'Open sanyuhub directly in your web browser. No complex setup or software installers required.',
      lg: 'Gulawo sanyuhub mu munnyonnyosi w\'omukutu gwo ekyo kyonka.',
      lus: 'Gulawo sanyuhub mu munnyonnyosi w\'omukutu gwo ekyo kyonka.',
      sw: 'Fungua sanyuhub moja kwa moja kwenye kivinjari chako cha mtandao.',
      fr: 'Ouvrez sanyuhub directement dans votre navigateur web sans installation.',
      ar: 'افتح sanyuhub مباشرة في متصفح الويب الخاص بك دون الحاجة للتثبيت.',
      pt: 'Abra o sanyuhub diretamente no seu navegador web sem instalações.',
      es: 'Abre sanyuhub directamente en tu navegador web sin instalaciones.',
      hi: 'अपने वेब ब्राउज़र में सीधे sanyuhub खोलें।'
    },
    'home.step3_title': {
      en: 'Connect & Enjoy',
      lg: 'Gatta & Nyumirwa',
      lus: 'Gaita & Nyumirwa',
      sw: 'Unganisha na Ufurahie',
      fr: 'Connectez et profitez',
      ar: 'اتصل واستمتع',
      pt: 'Conecte e Aproveite',
      es: 'Conéctate y Disfruta',
      hi: 'जुड़ें और आनंद लें'
    },
    'home.step3_desc': {
      en: 'Sync your preferences, stream media, and cast seamlessly between all your personal devices.',
      lg: 'Nyumirwa emikutu gyonna ku masimu n\'ebyuma byo.',
      lus: 'Nyumirwa emikutu gyona ku masimu n\'ebyuma byo.',
      sw: 'Furahia maudhui yako kwenye vifaa vyako vyote kwa urahisi.',
      fr: 'Synchronisez vos préférences et diffusez sur tous vos appareils.',
      ar: 'قم ببت الوسائط بسلاسة بين جميع أجهزتك الشخصية.',
      pt: 'Sincronize suas preferências e transmita entre todos os seus dispositivos.',
      es: 'Sincroniza tus preferencias y transmite entre todos tus dispositivos.',
      hi: 'अपने सभी व्यक्तिगत उपकरणों के बीच आसानी से मीडिया स्ट्रीम करें।'
    },
    'home.directory_title': {
      en: 'Explore Device Guides',
      lg: 'Laba Ebyuma Ebirala',
      lus: 'Laba Ebyuma Ebirala',
      sw: 'Gundua Miongozo ya Vifaa',
      fr: 'Explorer les guides d\'appareils',
      ar: 'استكشف أدلة الأجهزة',
      pt: 'Explorar Guia de Dispositivos',
      es: 'Explorar Guías de Dispositivos',
      hi: 'डिवाइस गाइड एक्सप्लोर करें'
    },
    'home.directory_sub': {
      en: 'Select your device category below to view specific requirements and setup guides.',
      lg: 'Londa ekitundu ky\'ekyuma kyo wano wansi.',
      lus: 'Londa ekitundu ky\'ekyuma kyo wano wansi.',
      sw: 'Chagua aina ya kifaa chako hapa chini ili kuona maelekezo.',
      fr: 'Sélectionnez votre catégorie d\'appareil ci-dessous.',
      ar: 'اختر فئة جهازك أدناه لعرض المتطلبات الإرشادية.',
      pt: 'Selecione a categoria do seu dispositivo abaixo.',
      es: 'Selecciona tu categoría de dispositivo a continuación.',
      hi: 'विशिष्ट आवश्यकताओं को देखने के लिए नीचे अपनी डिवाइस श्रेणी चुनें।'
    },
    'home.cta_title': {
      en: 'Ready to connect?',
      lg: 'Oweeredde okugatta?',
      lus: 'Oweeredde okugaita?',
      sw: 'Uko tayari kuunganisha?',
      fr: 'Prêt à vous connecter ?',
      ar: 'جاهز للاتصال؟',
      pt: 'Pronto para conectar?',
      es: '¿Listo para conectarte?',
      hi: 'क्या आप जुड़ने के लिए तैयार हैं?'
    },
    'home.cta_lead': {
      en: 'Launch the sanyuhub web client now and experience seamless device integration.',
      lg: 'Gulawo omukutu gwa sanyuhub kati onyumirwe okugatta ebyuma.',
      lus: 'Gulawo omukutu gwa sanyuhub kati onyumirwe okugaita ebyuma.',
      sw: 'Fungua tovuti ya sanyuhub sasa na ufurahie muunganiko wa vifaa.',
      fr: 'Lancez le client web sanyuhub dès maintenant.',
      ar: 'افتح موقع sanyuhub الآن واستمتع بتكامل الأجهزة.',
      pt: 'Inicie o cliente web sanyuhub agora e experimente a integração.',
      es: 'Inicia el cliente web sanyuhub ahora y experimenta la integración.',
      hi: 'अब sanyuhub वेब क्लाइंट चालू करें और निर्बाध कनेक्टिविटी का अनुभव करें।'
    },
    'home.cta_btn': {
      en: 'Launch sanyuhub Now',
      lg: 'Gulawo sanyuhub Kati',
      lus: 'Gulawo sanyuhub Kati',
      sw: 'Fungua sanyuhub Sasa',
      fr: 'Lancer sanyuhub maintenant',
      ar: 'افتح sanyuhub الآن',
      pt: 'Iniciar sanyuhub Agora',
      es: 'Iniciar sanyuhub Ahora',
      hi: 'sanyuhub अभी चालू करें'
    },
    'home.features_title': {
      en: 'Built for Every Display',
      lg: 'Ikolera ku Buli Skuleeni',
      lus: 'Iikolera ku Buli Skuleeni',
      sw: 'Imeundwa kwa Kila Skrini',
      fr: 'Conçu pour tous les écrans',
      ar: 'مصمم لكل شاشة',
      pt: 'Construído para Todas as Telas',
      es: 'Construido para Cada Pantalla',
      hi: 'हर डिस्प्ले के लिए निर्मित'
    },
    'home.features_sub': {
      en: 'Engineered to deliver high performance without forcing app installations or proprietary stores.',
      lg: 'Yatondebwa okuwa obukugu obwa waggulu nga tewali kukaka kupakira pulogulaamu.',
      lus: 'Yatondobwa okuwa obukugu obwa waggulu nga tewali kukiika kupakira pulogulaamu.',
      sw: 'Imeundwa kutoa utendaji wa juu bila kulazimisha usakinishaji wa programu.',
      fr: 'Conçu pour offrir des performances élevées sans imposer d\'installation.',
      ar: 'تم تصميمها لتقديم أداء عالٍ دون فرض تثبيت التطبيقات.',
      pt: 'Projetado para oferecer alto desempenho sem forçar instalações de aplicativos.',
      es: 'Diseñado para ofrecer un alto rendimiento sin forzar instalaciones de aplicaciones.',
      hi: 'बिना किसी ऐप इंस्टॉल के उच्च प्रदर्शन देने के लिए इंजीनियर।'
    },
    'home.feat1_title': {
      en: 'Zero App Downloads Needed',
      lg: 'Tewetaagisa Kupakira Pulogulaamu',
      lus: 'Tewetaagisa Kupakira Pulogulaamu',
      sw: 'Hakuna Kupakua Programu',
      fr: 'Aucun téléchargement requis',
      ar: 'لا يلزم تنزيل أي تطبيق',
      pt: 'Nenhum Download Necessário',
      es: 'Sin Descargas de Aplicaciones',
      hi: 'किसी ऐप डाउनलोड की आवश्यकता नहीं'
    },
    'home.feat1_desc': {
      en: 'Access sanyuhub directly through standard web browsers (Chrome, Safari, Edge, Firefox). No APKs, installers, or native app store downloads are required.',
      lg: 'Ingira sanyuhub obuterevu mu munnyonnyosi w\'omukutu gwo. Tewali APK oba pulogulaamu zewetaaga kupakira.',
      lus: 'Ingira sanyuhub obuterevu mu munnyonnyosi w\'omukutu gwo. Tewali APK oba pulogulaamu zewetaaga kupakira.',
      sw: 'Fikia sanyuhub moja kwa moja kupitia vivinjari vya mtandao. Hakuna haja ya APK au kupakua programu.',
      fr: 'Accédez à sanyuhub directement depuis votre navigateur. Aucun fichier APK ou installateur requis.',
      ar: 'احصل على sanyuhub مباشرة عبر متصفحات الويب القياسية دون الحاجة لتنزيل أي ملفات.',
      pt: 'Acesse o sanyuhub diretamente nos navegadores web padrão. Nenhum APK ou instalador necessário.',
      es: 'Accede a sanyuhub directamente a través de navegadores web estándar. Sin necesidad de APK o instaladores.',
      hi: 'मानक वेब ब्राउज़र के माध्यम से सीधे sanyuhub तक पहुंचें। किसी APK या इंस्टॉलर की आवश्यकता नहीं है।'
    },
    'home.feat2_title': {
      en: 'Smart TV & Casting Support',
      lg: 'Ewagira TV za Amagezi n\'Okwolesa',
      lus: 'Ewagira TV sya Amagezi n\'Okwolesa',
      sw: 'Usaidizi wa Smart TV na Casting',
      fr: 'Support Smart TV & Casting',
      ar: 'دعم التلفزيون الذكي والبث',
      pt: 'Suporte para Smart TV e Transmissão',
      es: 'Soporte para Smart TV y Transmisión',
      hi: 'स्मार्ट टीवी और कास्टिंग सपोर्ट'
    },
    'home.feat2_desc': {
      en: 'Seamlessly mirror or cast sanyuhub to Samsung Tizen, LG webOS, Android TV, Apple TV, and Chromecast devices from your phone or PC.',
      lg: 'Olesa sanyuhub mu bwangu ku Samsung, LG, Android TV oba Chromecast okuva ku ssimu oba kompyuta yo.',
      lus: 'Olesa sanyuhub mu bwangu ku Samsung, LG, Android TV oba Chromecast okuva ku ssimu oba kompyuta yo.',
      sw: 'Rusha sanyuhub kwa urahisi kwenye Samsung Tizen, LG webOS, Android TV na Chromecast kutoka kwenye simu yako.',
      fr: 'Diffusez facilement sanyuhub sur Samsung Tizen, LG webOS, Android TV, Apple TV et Chromecast.',
      ar: 'قم ببت sanyuhub بسلاسة إلى أجهزة Samsung Tizen و LG webOS و Android TV و Chromecast.',
      pt: 'Transmita o sanyuhub para Samsung Tizen, LG webOS, Android TV e Chromecast a partir do seu celular ou PC.',
      es: 'Transmite sanyuhub fácilmente a Samsung Tizen, LG webOS, Android TV y Chromecast desde tu teléfono o PC.',
      hi: 'अपने फोन या पीसी से सीधे सैमसंग, एलजी, एंड्रॉइड टीवी और क्रोमकास्ट पर sanyuhub कास्ट करें।'
    },
    'home.feat3_title': {
      en: 'Progressive Web App (PWA)',
      lg: 'Pulogulaamu y\'Omukutu eya PWA',
      lus: 'Pulogulaamu y\'Omukutu eya PWA',
      sw: 'Programu ya Mtandao wa PWA',
      fr: 'Application Web Progressive (PWA)',
      ar: 'تطبيق الويب التقدمي (PWA)',
      pt: 'Aplicativo Web Progressivo (PWA)',
      es: 'Aplicación Web Progresiva (PWA)',
      hi: 'प्रोग्रेसिव वेब ऐप (PWA)'
    },
    'home.feat3_desc': {
      en: 'Add sanyuhub to your iPhone or Android home screen for full-screen app-like launching with low data usage.',
      lg: 'Teka sanyuhub ku skuleeni y\'essimu yo okusobola okuyingirirawo mu bwangu nga okozesa data mutono.',
      lus: 'Teka sanyuhub ku skuleeni y\'essimu yo okusobola okuyingirirawo mu bwangu nga okozesa data mutono.',
      sw: 'Ongeza sanyuhub kwenye skrini ya simu yako kwa ufunguzi wa haraka na matumizi madogo ya data.',
      fr: 'Ajoutez sanyuhub à l\'écran d\'accueil de votre smartphone pour un accès instantané et économe en données.',
      ar: 'أضف sanyuhub إلى الشاشة الرئيسية لهاتفك للحصول على تشغيل سريع واستهلاك منخفض للبيانات.',
      pt: 'Adicione o sanyuhub à tela inicial do seu smartphone para inicialização rápida e baixo consumo de dados.',
      es: 'Agrega sanyuhub a la pantalla de inicio de tu teléfono para un acceso rápido y bajo consumo de datos.',
      hi: 'कम डेटा उपयोग के साथ त्वरित पहुंच के लिए अपने होम स्क्रीन पर sanyuhub जोड़ें।'
    },
    'home.faq_title': {
      en: 'Frequently Asked Questions',
      lg: 'Ebibuuzo Ebibuuzibwa Ennyo',
      lus: 'Ebibuuzo Ebibuuzibwa Ennyo',
      sw: 'Maswali Yanayoulizwa Mara Kwa Mara',
      fr: 'Foire Aux Questions',
      ar: 'الأسئلة الشائعة',
      pt: 'Perguntas Frequentes',
      es: 'Preguntas Frecuentes',
      hi: 'अक्सर पूछे जाने वाले प्रश्न'
    },
    'nav.about_desc': {
      en: 'sanyuhub is designed to bring seamless device connectivity and unified streaming across Africa and worldwide.',
      lg: 'sanyuhub yakolwa okugatta amasimu n\'ebyuma mu Afrika n\'ensi yonna.',
      lus: 'sanyuhub yakolwa okugaita emasimu n\'ebyuma mu Afrika n\'eisiialo lyona.',
      sw: 'sanyuhub imeundwa kuleta muunganiko wa vifaa na utiririshaji Barani Afrika na kote duniani.',
      fr: 'sanyuhub est conçu pour offrir une connectivité fluide des appareils en Afrique et dans le monde.',
      ar: 'تم تصميم sanyuhub للربط بين الأجهزة والبث الموحد في أفريقيا وحول العالم.',
      pt: 'O sanyuhub foi projetado para conectar dispositivos e transmissão unificada na África e no mundo.',
      es: 'sanyuhub está diseñado para brindar conectividad perfecta de dispositivos y transmisión unificada.',
      hi: 'sanyuhub को अफ्रीका और दुनिया भर में निर्बाध डिवाइस कनेक्टिविटी लाने के लिए डिज़ाइन किया गया है।'
    },
    'nav.blog_desc': {
      en: 'Read updates, tech insights, and multi-device setup news from the sanyuhub team.',
      lg: 'Soma ebipya n\'amagezi g\'amasaawe oku ku sanyuhub.',
      lus: 'Soma ebipya n\'amagezi g\'amasaawe oku ku sanyuhub.',
      sw: 'Soma habari za hivi karibuni na mbinu za kiufundi kutoka kwa timu ya sanyuhub.',
      fr: 'Lisez les mises à jour et articles techniques de l\'équipe sanyuhub.',
      ar: 'اقرأ التحديثات والرؤى التقنية من فريق sanyuhub.',
      pt: 'Leia atualizações e notícias de tecnologia da equipe sanyuhub.',
      es: 'Lee actualizaciones y noticias tecnológicas del equipo de sanyuhub.',
      hi: 'sanyuhub टीम से नए अपडेट और तकनीकी जानकारी पढ़ें।'
    },
    'nav.careers_desc': {
      en: 'Join sanyuhub in connecting people and devices across borders.',
      lg: 'Egatte ku sanyuhub mugatte abantu n\'amasimu.',
      lus: 'Egatte ku sanyuhub mugaite abantu n\'emasimu.',
      sw: 'Jiunge na sanyuhub katika kuunganisha watu na vifaa mipaka yote.',
      fr: 'Rejoignez sanyuhub pour connecter les personnes et les appareils.',
      ar: 'انضم إلى sanyuhub لربط الناس والأجهزة عبر الحدود.',
      pt: 'Junte-se ao sanyuhub para conectar pessoas e dispositivos.',
      es: 'Únete a sanyuhub para conectar personas y dispositivos.',
      hi: 'सीमाओं के पार लोगों और उपकरणों को जोड़ने में sanyuhub से जुड़ें।'
    },
    'nav.partnerships_desc': {
      en: 'Partner with sanyuhub for device integration, streaming distribution, and telecom synergy.',
      lg: 'Kwatagana na sanyuhub mu by\'emikutu n\'amasimu.',
      lus: 'Kwatagana na sanyuhub mu by\'emikutu n\'emasimu.',
      sw: 'Shirikiana na sanyuhub kwa muunganiko wa vifaa na mawasiliano.',
      fr: 'Devenez partenaire de sanyuhub pour l\'intégration d\'appareils.',
      ar: 'شترك مع sanyuhub لتكامل الأجهزة والتوزيع.',
      pt: 'Seja parceiro do sanyuhub para integração de dispositivos.',
      es: 'Asóciate con sanyuhub para la integración de dispositivos.',
      hi: 'डिवाइस एकीकरण के लिए sanyuhub के साथ साझेदारी करें।'
    },
    'nav.help_desc': {
      en: 'Need assistance? Browse troubleshooting guides, browser compatibility specs, or contact support.',
      lg: 'Oyagala obuyambi? Laba eby\'okukola n\'okuteresaza wano.',
      lus: 'Oyagala obuyambi? Laba eby\'okukola n\'okuteresaza wano.',
      sw: 'Unahitaji msaada? Kagua miongozo ya utatuzi au wasiliana nasi.',
      fr: 'Besoin d\'aide ? Consultez nos guides de dépannage ou contactez le support.',
      ar: 'هل تحتاج إلى مساعدة؟ تصفح أدلة استكشاف الأخطاء وإصلاحها.',
      pt: 'Precisa de ajuda? Consulte nossos guias de solução de problemas.',
      es: '¿Necesitas ayuda? Consulta nuestras guías de solución de problemas.',
      hi: 'सहायता की आवश्यकता है? समस्या निवारण गाइड देखें या समर्थन से संपर्क करें।'
    },
    'nav.contact_desc': {
      en: 'Get in touch with the sanyuhub team for inquiries, feedback, or support.',
      lg: 'Tukwatagane n\'ateemu ya sanyuhub mu mboozi z\'obuyambi.',
      lus: 'Tuwuliziganye n\'ateemu ya sanyuhub mu mboozi z\'obuyambi.',
      sw: 'Wasiliana na timu ya sanyuhub kwa maswali au maoni.',
      fr: 'Contactez l\'équipe sanyuhub pour toute question ou remarque.',
      ar: 'تواصل مع فريق sanyuhub للاستفسارات واللاحظات.',
      pt: 'Entre em contato com a equipe sanyuhub para dúvidas ou comentários.',
      es: 'Ponte en contacto con el equipo de sanyuhub para consultas o comentarios.',
      hi: 'पूछताछ या प्रतिक्रिया के लिए sanyuhub टीम से संपर्क करें।'
    },
    'nav.accessibility_desc': {
      en: 'sanyuhub is committed to ensuring digital accessibility for all users, including reduced-motion support.',
      lg: 'sanyuhub eweebwa kukuuma obukuumi bw\'omukutu ku buli muntu.',
      lus: 'sanyuhub eweebwa kukuuma obukuumi bw\'omukutu ku buli muntu.',
      sw: 'sanyuhub imejitolea kuhakikisha ufikiaji wa kidijitali kwa watumiaji wote.',
      fr: 'sanyuhub s\'engage à garantir l\'accessibilité numérique pour tous.',
      ar: 'تلتزم sanyuhub بضمان إمكانية الوصول الرقمي لجميع المستخدمين.',
      pt: 'O sanyuhub está comprometido com a acessibilidade digital para todos.',
      es: 'sanyuhub se compromete a garantizar la accesibilidad digital para todos.',
      hi: 'sanyuhub सभी उपयोगकर्ताओं के लिए डिजिटल पहुंच सुनिश्चित करने के लिए प्रतिबद्ध है।'
    },
    'nav.privacy_desc': {
      en: 'Learn how sanyuhub protects user data, local device storage preferences, and privacy.',
      lg: 'Soma engeri sanyuhub gyeekuuma ekyama ky\'ebyuma byo.',
      lus: 'Soma engeri sanyuhub gyeekuuma ekyama ky\'ebyuma byo.',
      sw: 'Jifunze jinsi sanyuhub inavyolinda faragha na data ya watumiaji.',
      fr: 'Découvrez comment sanyuhub protège la vie privée et vos données.',
      ar: 'تعرف على كيفية حماية sanyuhub لبيانات المستخدم وخصوصيته.',
      pt: 'Saiba como o sanyuhub protege seus dados e sua privacidade.',
      es: 'Aprende cómo sanyuhub protege los datos de los usuarios y su privacidad.',
      hi: 'जानें कि sanyuhub उपयोगकर्ता के डेटा और गोपनीयता की रक्षा कैसे करता है।'
    },
    'nav.terms_desc': {
      en: 'Terms of Use governing access to sanyuhub web services, platforms, and connected features.',
      lg: 'Emateeka n\'ebikwata ku kukoresa emikutu gya sanyuhub.',
      lus: 'Emateeka n\'ebikwata ku kukozesa emikutu gya sanyuhub.',
      sw: 'Vigezo na masharti yanayotawala matumizi ya huduma za sanyuhub.',
      fr: 'Conditions d\'utilisation régissant l\'accès aux services sanyuhub.',
      ar: 'شروط الاستخدام التي تحكم الوصول إلى خدمات sanyuhub.',
      pt: 'Termos de uso que regem o acesso aos serviços do sanyuhub.',
      es: 'Términos de uso que rigen el acceso a los servicios de sanyuhub.',
      hi: 'sanyuhub सेवाओं और सुविधाओं की उपयोग की शर्तें।'
    },
    'nav.back_home': {
      en: 'Return to Home',
      lg: 'Ddayo Awaka',
      lus: 'Ddayo Eka',
      sw: 'Rudi Mwanzo',
      fr: 'Retour à l\'accueil',
      ar: 'العودة إلى الرئيسية',
      pt: 'Voltar ao Início',
      es: 'Volver al Inicio',
      hi: 'होम पर वापस जाएं'
    }
,
    'contact.page_title': { en: 'Contact Us & Support', lg: 'Tukwatagane & Obuyambi', lus: 'Tuwuliziganye & Obuyambi', sw: 'Wasiliana Nasi na Msaada', fr: 'Contactez-nous & Support', ar: 'اتصل بنا والدعم', pt: 'Fale Conosco & Suporte', es: 'Contáctenos y Soporte', hi: 'संपर्क करें और सहायता' },
    'contact.header_lead': { en: 'How can we help you?', lg: 'Tuyinza tutya okukuyamba?', lus: 'Tusobola tutya okukuyamba?', sw: 'Tunawezaje kukusaidia?', fr: 'Comment pouvons-nous vous aider ?', ar: 'كيف يمكننا مساعدتك؟', pt: 'Como podemos ajudar você?', es: '¿Cómo podemos ayudarte?', hi: 'हम आपकी क्या सहायता कर सकते हैं?' },
    'contact.sub_intro': { en: 'Choose a support topic from the list below or send a direct message to our support team.', lg: 'Londa ekitundu kyo wano wansi oba osumese obubaka obuterevu.', lus: 'Londa ekitundu kyo wano wansi oba osumese obubaka obuterevu.', sw: 'Chagua mada ya msaada hapa chini au tuma ujumbe wa moja kwa moja.', fr: 'Choisissez un sujet d\'assistance ci-dessous ou envoyez un message direct.', ar: 'اختر موضوع الدعم من القائمة أدناه أو أرسل رسالة مباشرة.', pt: 'Escolha um tópico de suporte abaixo ou envie uma mensagem direta.', es: 'Elige un tema de soporte a continuación o envía un mensaje directo.', hi: 'नीचे दी गई सूची में से एक सहायता विषय चुनें या सीधा संदेश भेजें।' },
    'contact.field_country': { en: 'Country', lg: 'Ensi', lus: 'Eilei', sw: 'Nchi', fr: 'Pays', ar: 'البلد', pt: 'País', es: 'País', hi: 'देश' },
    'contact.field_email': { en: 'Email Address', lg: 'E-meyiro', lus: 'E-meyiro', sw: 'Barua Pepe', fr: 'Adresse email', ar: 'البريد الإلكتروني', pt: 'Endereço de e-mail', es: 'Correo electrónico', hi: 'ईमेल पता' },
    'contact.field_topic': { en: 'Topic', lg: 'Omutwe', lus: 'Omutwe', sw: 'Mada', fr: 'Sujet', ar: 'الموضوع', pt: 'Tópico', es: 'Tema', hi: 'विषय' },
    'contact.field_message': { en: 'Message', lg: 'Obubaka', lus: 'Obubaka', sw: 'Ujumbe', fr: 'Message', ar: 'الرسالة', pt: 'Mensagem', es: 'Mensaje', hi: 'संदेश' },
    'contact.btn_send': { en: 'Send Message', lg: 'Sindiika Obubaka', lus: 'Sindiika Obubaka', sw: 'Tuma Ujumbe', fr: 'Envoyer le message', ar: 'إرسال الرسالة', pt: 'Enviar Mensagem', es: 'Enviar Mensaje', hi: 'संदेश भेजें' },
    'contact.btn_sending': { en: 'Sending Message...', lg: 'Esaasaanya Obubaka...', lus: 'Esaasaanya Obubaka...', sw: 'Inatuma Ujumbe...', fr: 'Envoi du message...', ar: 'جاري إرسال الرسالة...', pt: 'Enviando Mensagem...', es: 'Enviando Mensaje...', hi: 'संदेश भेजा जा रहा है...' },
    'contact.btn_back_categories': { en: 'Back to Support Topics', lg: 'Ddayo ku Mutwe gwa Support', lus: 'Ddayo ku Mutwe gwa Support', sw: 'Rudi kwenye Mada za Msaada', fr: 'Retour aux sujets d\'assistance', ar: 'العودة إلى مواضيع الدعم', pt: 'Voltar aos Tópicos de Suporte', es: 'Volver a Temas de Soporte', hi: 'सहायता विषयों पर वापस जाएं' },
    'contact.btn_continue_dm': { en: 'Continue to Direct Message', lg: 'Genda ku Bubaka Obuterevu', lus: 'Genda ku Bubaka Obuterevu', sw: 'Endelea hadi Ujumbe wa Moja kwa Moja', fr: 'Continuer vers le message direct', ar: 'المتابعة إلى الرسالة المباشرة', pt: 'Continuar para Mensagem Direta', es: 'Continuar a Mensaje Directo', hi: 'सीधे संदेश पर जारी रखें' },
    'contact.err_country_req': { en: 'Please select a country.', lg: 'Londa ensi.', lus: 'Londa eilei.', sw: 'Tafadhali chagua nchi.', fr: 'Veuillez sélectionner un pays.', ar: 'يرجى اختيار بلد.', pt: 'Por favor selecione um país.', es: 'Por favor selecciona un país.', hi: 'कृपया एक देश चुनें।' },
    'contact.err_email_invalid': { en: 'Please enter a valid email address.', lg: 'Ingiza e-meyiro entuufu.', lus: 'Ingiza e-meyiro entuufu.', sw: 'Tafadhali weka barua pepe halali.', fr: 'Veuillez saisir une adresse email valide.', ar: 'يرجى إدخال بريد إلكتروني صالحة.', pt: 'Por favor insira um e-mail válido.', es: 'Por favor ingresa un correo válido.', hi: 'कृपया एक वैध ईमेल पता दर्ज करें।' },
    'contact.err_topic_req': { en: 'Please select a valid topic.', lg: 'Londa omutwe umutuufu.', lus: 'Londa omutwe umutuufu.', sw: 'Tafadhali chagua mada halali.', fr: 'Veuillez sélectionner un sujet valide.', ar: 'يرجى اختيار موضوع صالح.', pt: 'Por favor selecione um tópico válido.', es: 'Por favor selecciona un tema válido.', hi: 'कृपया एक वैध विषय चुनें।' },
    'contact.err_msg_req': { en: 'Please enter a message (at least 5 characters).', lg: 'Ingiza obubaka (obukye 5).', lus: 'Ingiza obubaka (obukye 5).', sw: 'Tafadhali weka ujumbe (angalau herufi 5).', fr: 'Veuillez saisir un message (au moins 5 caractères).', ar: 'يرجى إدخال رسالة (5 أحرف على الأقل).', pt: 'Por favor insira uma mensagem (pelo menos 5 caracteres).', es: 'Por favor ingresa un mensaje (al menos 5 caracteres).', hi: 'कृपया एक संदेश दर्ज करें (कम से कम 5 अक्षर)।' }
  };

  const TRANSLATIONS = {
    en: { dir: 'ltr', name: 'English', translations: {} },
    lg: { dir: 'ltr', name: 'Luganda', translations: {} },
    lus: { dir: 'ltr', name: 'Lusoga', translations: {} },
    sw: { dir: 'ltr', name: 'Swahili', translations: {} },
    fr: { dir: 'ltr', name: 'French', translations: {} },
    ar: { dir: 'rtl', name: 'Arabic', translations: {} },
    pt: { dir: 'ltr', name: 'Portuguese', translations: {} },
    es: { dir: 'ltr', name: 'Spanish', translations: {} },
    hi: { dir: 'ltr', name: 'Hindi', translations: {} }
  };

  // Base labels across all languages
  const BASE_LABELS = {
    'brand.tagline': { en: 'Your world, connected.', lg: 'Ensi yo, egattiddwa.', lus: 'Eisialo lyo, ligaitibwa.', sw: 'Ulimwengu wako, umeunganishwa.', fr: 'Votre monde, connecté.', ar: 'عالمك، متصل.', pt: 'Seu mundo, conectado.', es: 'Tu mundo, conectado.', hi: 'आपकी दुनिया, जुड़ी हुई।' },
    'selector.country': { en: 'COUNTRY / REGION', lg: 'ENSI / EKITUNDU', lus: 'EILEI / EKITUNDU', sw: 'NCHI / ENALEO', fr: 'PAYS / RÉGION', ar: 'البلد / المنطقة', pt: 'PAÍS / REGIÃO', es: 'PAÍS / REGIÓN', hi: 'देश / क्षेत्र' },
    'selector.language': { en: 'LANGUAGE', lg: 'OLULIMI', lus: 'OLULIMI', sw: 'LUGHA', fr: 'LANGUE', ar: 'اللغة', pt: 'IDIOMA', es: 'IDIOMA', hi: 'भाषा' },
    'footer.company': { en: 'Company', lg: 'KAMPUNI', lus: 'EKAMPUNI', sw: 'Kampuni', fr: 'Entreprise', ar: 'الشركة', pt: 'Empresa', es: 'Empresa', hi: 'कंपनी' },
    'footer.support': { en: 'Support', lg: 'OBUYAMBI', lus: 'OBUYAMBI', sw: 'Msaada', fr: 'Support', ar: 'الدعم', pt: 'Suporte', es: 'Soporte', hi: 'सहायता' },
    'footer.legal': { en: 'Legal', lg: 'EBY\'AMATEEKA', lus: 'EBY\'AMATEEKA', sw: 'Kisheria', fr: 'Mentions légales', ar: 'قانوني', pt: 'Jurídico', es: 'Legal', hi: 'कानूनी' },
    'footer.rights': { en: 'All rights reserved.', lg: 'Eby\'obugagga byonna ebibikiddwa.', lus: 'Eby\'obutaka byona ebibiikilwe.', sw: 'Haki zote zimehifadhiwa.', fr: 'Tous droits réservés.', ar: 'جميع الحقوق محفوظة.', pt: 'Todos os direitos reservados.', es: 'Todos los derechos reservados.', hi: 'सर्वाधिकार सुरक्षित।' },

    'category.home': { en: 'Home', lg: 'Awaka', lus: 'Eka', sw: 'Mwanzo', fr: 'Accueil', ar: 'الرئيسية', pt: 'Início', es: 'Inicio', hi: 'होम' },
    'category.mobile': { en: 'Mobile', lg: 'Amasimu', lus: 'Emasimu', sw: 'Simu za Mkononi', fr: 'Mobile', ar: 'الهاتف المحمول', pt: 'Móvel', es: 'Móvil', hi: 'मोबाइल' },
    'category.android': { en: 'Android', lg: 'Android', lus: 'Android', sw: 'Android', fr: 'Android', ar: 'أندرويد', pt: 'Android', es: 'Android', hi: 'एंड्रॉइड' },
    'category.ios': { en: 'iOS', lg: 'iOS', lus: 'iOS', sw: 'iOS', fr: 'iOS', ar: 'آي أو إس', pt: 'iOS', es: 'iOS', hi: 'आईओएस' },
    'category.desktop': { en: 'Desktop', lg: 'Kompyuta y\'omumeesa', lus: 'Kompyuta y\'Olukoba', sw: 'Karakana / Kompyuta', fr: 'Ordinateur', ar: 'أجهزة الكمبيوتر', pt: 'Computadores', es: 'Escritorio', hi: 'डेस्कटॉप' },
    'category.smart_tv': { en: 'Smart TV', lg: 'Tivvi za Amagezi', lus: 'Tivvi sya Amagezi', sw: 'Smart TV', fr: 'Téléviseur Connecté', ar: 'التلفزيون الذكي', pt: 'Smart TV', es: 'Smart TV', hi: 'स्मार्ट टीवी' },
    'category.gaming_consoles': { en: 'Gaming Consoles', lg: 'Ebyuma by\'Emizannyo', lus: 'Ebyuma by\'Emizannyo', sw: 'Konsonzi za Michezo', fr: 'Consoles de Jeux', ar: 'أجهزة الألعاب', pt: 'Consoles de Videogame', es: 'Consolas de Juegos', hi: 'गेमिंग कंसोल' },
    'category.streaming_devices': { en: 'Streaming Devices', lg: 'Ebyuma by\'Okwolesa', lus: 'Ebyuma by\'Okusakira', sw: 'Vifaa vya Kutiririsha', fr: 'Passerelles Multimédias', ar: 'أجهزة البث', pt: 'Dispositivos de Streaming', es: 'Dispositivos de Streaming', hi: 'स्ट्रीमing डिवाइस' },
    'category.set_top_boxes': { en: 'Set-top Boxes', lg: 'Bbokisi z\'eTivvi', lus: 'Emboxi sya Tivvi', sw: 'Dekoda za TV', fr: 'Décodeurs TV', ar: 'أجهزة الاستقبال', pt: 'Receptores de TV', es: 'Decodificadores de TV', hi: 'सेट-टॉप बॉक्स' },

    'device.website': { en: 'Website', lg: 'Omukutu', lus: 'Omukutu', sw: 'Tovuti', fr: 'Site web', ar: 'الموقع الإلكتروني', pt: 'Website', es: 'Sitio web', hi: 'वेबसाइट' },
    'device.android_phones': { en: 'Android Phones', lg: 'Amasimu ga Android', lus: 'Emasimu g\'Android', sw: 'Simu za Android', fr: 'Téléphones Android', ar: 'هواتف أندرويد', pt: 'Celulares Android', es: 'Teléfonos Android', hi: 'एंड्रॉइड फोन' },
    'device.android_tablets': { en: 'Android Tablets', lg: 'Ttabulete za Android', lus: 'Amatablet g\'Android', sw: 'Tableti za Android', fr: 'Tablettes Android', ar: 'أجهزة أندرويد اللوحية', pt: 'Tablets Android', es: 'Tabletas Android', hi: 'एंड्रॉइड टैबलेट' },
    'device.iphone': { en: 'iPhone', lg: 'iPhone', lus: 'iPhone', sw: 'iPhone', fr: 'iPhone', ar: 'آيفون', pt: 'iPhone', es: 'iPhone', hi: 'आईफोन' },
    'device.ipad': { en: 'iPad', lg: 'iPad', lus: 'iPad', sw: 'iPad', fr: 'iPad', ar: 'آيباد', pt: 'iPad', es: 'iPad', hi: 'आईपैड' },
    'device.windows': { en: 'Windows', lg: 'Windows', lus: 'Windows', sw: 'Windows', fr: 'Windows', ar: 'ويندوز', pt: 'Windows', es: 'Windows', hi: 'विंडोज' },
    'device.macos': { en: 'macOS', lg: 'macOS', lus: 'macOS', sw: 'macOS', fr: 'macOS', ar: 'ماك أو إس', pt: 'macOS', es: 'macOS', hi: 'मैकओएस' },
    'device.linux': { en: 'Linux', lg: 'Linux', lus: 'Linux', sw: 'Linux', fr: 'Linux', ar: 'لينكس', pt: 'Linux', es: 'Linux', hi: 'लिनक्स' },
    'device.chromebook': { en: 'Chromebook', lg: 'Chromebook', lus: 'Chromebook', sw: 'Chromebook', fr: 'Chromebook', ar: 'كروم بوك', pt: 'Chromebook', es: 'Chromebook', hi: 'क्रोमबुक' },
    'device.samsung_smart_tv': { en: 'Samsung Smart TV', lg: 'Smart TV ya Samsung', lus: 'Smart TV ya Samsung', sw: 'Samsung Smart TV', fr: 'Samsung Smart TV', ar: 'سامسونج سمارت تي في', pt: 'Samsung Smart TV', es: 'Samsung Smart TV', hi: 'सैमसंग स्मार्ट टीवी' },
    'device.lg_smart_tv': { en: 'LG Smart TV', lg: 'Smart TV ya LG', lus: 'Smart TV ya LG', sw: 'LG Smart TV', fr: 'LG Smart TV', ar: 'إل جي سمارت تي في', pt: 'LG Smart TV', es: 'LG Smart TV', hi: 'एलजी स्मार्ट टीवी' },
    'device.android_tv': { en: 'Android TV', lg: 'Android TV', lus: 'Android TV', sw: 'Android TV', fr: 'Android TV', ar: 'أندرويد تي في', pt: 'Android TV', es: 'Android TV', hi: 'एंड्रॉइड टीवी' },
    'device.google_tv': { en: 'Google TV', lg: 'Google TV', lus: 'Google TV', sw: 'Google TV', fr: 'Google TV', ar: 'جوجل تي في', pt: 'Google TV', es: 'Google TV', hi: 'गूगल टीवी' },
    'device.hisense_smart_tv': { en: 'Hisense Smart TV', lg: 'Smart TV ya Hisense', lus: 'Smart TV ya Hisense', sw: 'Hisense Smart TV', fr: 'Hisense Smart TV', ar: 'هايسنس سمارت تي في', pt: 'Hisense Smart TV', es: 'Hisense Smart TV', hi: 'हायसेंस स्मार्ट टीवी' },
    'device.playstation': { en: 'PlayStation', lg: 'PlayStation', lus: 'PlayStation', sw: 'PlayStation', fr: 'PlayStation', ar: 'بلايستيشن', pt: 'PlayStation', es: 'PlayStation', hi: 'प्लेस्टेशन' },
    'device.xbox': { en: 'Xbox', lg: 'Xbox', lus: 'Xbox', sw: 'Xbox', fr: 'Xbox', ar: 'إكس بوكس', pt: 'Xbox', es: 'Xbox', hi: 'एक्सबॉक्स' },
    'device.apple_tv': { en: 'Apple TV', lg: 'Apple TV', lus: 'Apple TV', sw: 'Apple TV', fr: 'Apple TV', ar: 'أبل تي في', pt: 'Apple TV', es: 'Apple TV', hi: 'एप्पल टीवी' },
    'device.amazon_fire_tv': { en: 'Amazon Fire TV', lg: 'Amazon Fire TV', lus: 'Amazon Fire TV', sw: 'Amazon Fire TV', fr: 'Amazon Fire TV', ar: 'أمازون فاير تي في', pt: 'Amazon Fire TV', es: 'Amazon Fire TV', hi: 'अमेज़न फायर टीवी' },
    'device.chromecast': { en: 'Chromecast', lg: 'Chromecast', lus: 'Chromecast', sw: 'Chromecast', fr: 'Chromecast', ar: 'كروم كاست', pt: 'Chromecast', es: 'Chromecast', hi: 'क्रोमकास्ट' },
    'device.roku': { en: 'Roku', lg: 'Roku', lus: 'Roku', sw: 'Roku', fr: 'Roku', ar: 'روكو', pt: 'Roku', es: 'Roku', hi: 'रोकू' },
    'device.android_tv_boxes': { en: 'Android TV Boxes', lg: 'Android TV Boxes', lus: 'Android TV Boxes', sw: 'Android TV Boxes', fr: 'Boîtiers Android TV', ar: 'صناديق أندرويد تي في', pt: 'Caixas Android TV', es: 'Cajas Android TV', hi: 'एंड्रॉइड टीवी बॉक्स' },
    'device.compatible_cable_boxes': { en: 'Compatible Cable Boxes', lg: 'Bbokisi za Kkebezi Ezifaanaana', lus: 'Emboxi sya Kebuli Ezikkirizibwa', sw: 'Dekoda Zinazopatana', fr: 'Décodeurs Câble Compatibles', ar: 'أجهزة الكابل المتوافقة', pt: 'Receptores de Cabo Compatíveis', es: 'Sintonizadores de Cable Compatibles', hi: 'संगत केबल बॉक्स' },

    'nav.about': { en: 'About sanyuhub', lg: 'Ebikwata ku sanyuhub', lus: 'Ebikwata ku sanyuhub', sw: 'Kuhusu sanyuhub', fr: 'À propos de sanyuhub', ar: 'عن sanyuhub', pt: 'Sobre o sanyuhub', es: 'Acerca de sanyuhub', hi: 'sanyuhub के बारे में' },
    'nav.blog': { en: 'Blog', lg: 'Bbulogu', lus: 'Bbulogu', sw: 'Blogu', fr: 'Blog', ar: 'المدونة', pt: 'Blog', es: 'Blog', hi: 'ब्लॉग' },
    'nav.careers': { en: 'Careers', lg: 'Emirimu', lus: 'Emirimo', sw: 'Nafasi za Kazi', fr: 'Carrières', ar: 'الوظائف', pt: 'Carreiras', es: 'Empleos', hi: 'करियर' },
    'nav.partnerships': { en: 'Partnerships', lg: 'Enkolagana', lus: 'Eimuganya / Enkolagana', sw: 'Ushirikiano', fr: 'Partenariats', ar: 'الشراكات', pt: 'Parcerias', es: 'Asociaciones', hi: 'साझेदारी' },
    'nav.help': { en: 'Help & Support', lg: 'Obuyambi & Okuwagira', lus: 'Obuyambi & Okwelinda', sw: 'Msaada na Usaidizi', fr: 'Aide & Support', ar: 'المساعدة والدعم', pt: 'Ajuda & Suporte', es: 'Ayuda y Soporte', hi: 'सहायता और समर्थन' },
    'nav.contact': { en: 'Contact Us', lg: 'Tukwatagane', lus: 'Tuwuliziganye', sw: 'Wasiliana Nasi', fr: 'Contactez-nous', ar: 'اتصل بنا', pt: 'Fale Conosco', es: 'Contáctenos', hi: 'संपर्क करें' },
    'nav.accessibility': { en: 'Accessibility', lg: 'Olukusa lwa Buli Muntu', lus: 'Empereza ya Buli Muntu', sw: 'Ufikiaji', fr: 'Accessibilité', ar: 'إمكانية الوصول', pt: 'Acessibilidade', es: 'Accesibilidad', hi: 'सुगम्यता' },
    'nav.privacy': { en: 'Privacy Policy', lg: 'Nkola y\'Ekyama', lus: 'Eisaza ly\'Ekiyama', sw: 'Sera ya Faragha', fr: 'Politique de confidentialité', ar: 'سياسة الخصوصية', pt: 'Política de Privacidade', es: 'Política de Privacidad', hi: 'गोपनीयता नीति' },
    'nav.terms': { en: 'Terms of Use', lg: 'Ebikwata ku Kukoresa', lus: 'Ebibikiro by\'Okozesa', sw: 'Vigezo vya Matumizi', fr: 'Conditions d\'utilisation', ar: 'شروط الاستخدام', pt: 'Termos de Uso', es: 'Términos de Uso', hi: 'उपयोग की शर्तें' },

    'page.home.title': { en: 'sanyuhub', lg: 'sanyuhub', lus: 'sanyuhub', sw: 'sanyuhub', fr: 'sanyuhub', ar: 'sanyuhub', pt: 'sanyuhub', es: 'sanyuhub', hi: 'sanyuhub' },
    'page.about.title': { en: 'About sanyuhub', lg: 'Ebikwata ku sanyuhub', lus: 'Ebikwata ku sanyuhub', sw: 'Kuhusu sanyuhub', fr: 'À propos de sanyuhub', ar: 'عن sanyuhub', pt: 'Sobre o sanyuhub', es: 'Acerca de sanyuhub', hi: 'sanyuhub के बारे में' },
    'page.blog.title': { en: 'Blog', lg: 'Bbulogu', lus: 'Bbulogu', sw: 'Blogu', fr: 'Blog', ar: 'المدونة', pt: 'Blog', es: 'Blog', hi: 'ब्लॉग' },
    'page.careers.title': { en: 'Careers', lg: 'Emirimu', lus: 'Emirimo', sw: 'Nafasi za Kazi', fr: 'Carrières', ar: 'الوظائف', pt: 'Carreiras', es: 'Empleos', hi: 'करियर' },
    'page.partnerships.title': { en: 'Partnerships', lg: 'Enkolagana', lus: 'Eimuganya / Enkolagana', sw: 'Ushirikiano', fr: 'Partenariats', ar: 'الشراكات', pt: 'Parcerias', es: 'Asociaciones', hi: 'साझेदारी' },
    'page.help.title': { en: 'Help & Support', lg: 'Obuyambi & Okuwagira', lus: 'Obuyambi & Okwelinda', sw: 'Msaada na Usaidizi', fr: 'Aide & Support', ar: 'المساعدة والدعم', pt: 'Ajuda & Suporte', es: 'Ayuda y Soporte', hi: 'सहायता और समर्थन' },
    'page.contact.title': { en: 'Contact Us', lg: 'Tukwatagane', lus: 'Tuwuliziganye', sw: 'Wasiliana Nasi', fr: 'Contactez-nous', ar: 'اتصل بنا', pt: 'Fale Conosco', es: 'Contáctenos', hi: 'संपर्क करें' },
    'page.accessibility.title': { en: 'Accessibility', lg: 'Olukusa lwa Buli Muntu', lus: 'Empereza ya Buli Muntu', sw: 'Ufikiaji', fr: 'Accessibilité', ar: 'إمكانية الوصول', pt: 'Acessibilidade', es: 'Accesibilidad', hi: 'सुगम्यता' },
    'page.privacy.title': { en: 'Privacy Policy', lg: 'Nkola y\'Ekyama', lus: 'Eisaza ly\'Ekiyama', sw: 'Sera ya Faragha', fr: 'Politique de confidentialité', ar: 'سياسة الخصوصية', pt: 'Política de Privacidade', es: 'Política de Privacidad', hi: 'गोपनीयता नीति' },
    'page.terms.title': { en: 'Terms of Use', lg: 'Ebikwata ku Kukoresa', lus: 'Ebibikiro by\'Okozesa', sw: 'Vigezo vya Matumizi', fr: 'Conditions d\'utilisation', ar: 'شروط الاستخدام', pt: 'Termos de Uso', es: 'Términos de Uso', hi: 'उपयोग की शर्तें' },

    'empty.oops': { en: 'Oops, nothing here', lg: 'Abo, tewali kintu wano', lus: 'Aii, tewali kintu wano', sw: 'Ole, hakuna kitu hapa', fr: 'Oups, rien ici', ar: 'عذراً، لا يوجد شيء هنا', pt: 'Ops, nada aqui', es: 'Ups, no hay nada aquí', hi: 'अरे, यहाँ कुछ नहीं है' },
    'empty.not_found_title': { en: 'Page Not Found', lg: 'Olupapula Lwabuze', lus: 'Orupapula Luze', sw: 'Ukurasa Haukupatikana', fr: 'Page non trouvée', ar: 'الصفحة غير موجودة', pt: 'Página Não Encontrada', es: 'Página No Encontrada', hi: 'पृष्ठ नहीं मिला' },
    'empty.not_found_text': { en: 'The page you are looking for does not exist.', lg: 'Olupapula lw\'onoonya luliko obuzibu obutasoboka.', lus: 'Orupapula lwoitiire eisyali luliku obusobya.', sw: 'Ukurasa unaotafuta haupo.', fr: 'La page que vous recherchez n\'existe pas.', ar: 'الصفحة التي تبحث عنها غير موجودة.', pt: 'A página que você está procurando não existe.', es: 'La página que estás buscando no existe.', hi: 'आप जिस पृष्ठ की तलाश कर रहे हैं वह मौजूद नहीं है।' },

    'country.UG': { en: 'Uganda', lg: 'Uganda', lus: 'Uganda', sw: 'Uganda', fr: 'Ouganda', ar: 'أوغندا', pt: 'Uganda', es: 'Uganda', hi: 'युगांडा' },
    'country.KE': { en: 'Kenya', lg: 'Kenya', lus: 'Kenya', sw: 'Kenya', fr: 'Kenya', ar: 'كينيا', pt: 'Quênia', es: 'Kenia', hi: 'केन्या' },
    'country.TZ': { en: 'Tanzania', lg: 'Tanzania', lus: 'Tanzania', sw: 'Tanzania', fr: 'Tanzanie', ar: 'تنزانيا', pt: 'Tanzânia', es: 'Tanzania', hi: 'तंजानिया' },
    'country.RW': { en: 'Rwanda', lg: 'Rwanda', lus: 'Rwanda', sw: 'Rwanda', fr: 'Rwanda', ar: 'رواندا', pt: 'Ruanda', es: 'Ruanda', hi: 'रवांडा' },
    'country.NG': { en: 'Nigeria', lg: 'Nigeria', lus: 'Nigeria', sw: 'Nigeria', fr: 'Nigéria', ar: 'نيجيريا', pt: 'Nigéria', es: 'Nigeria', hi: 'नाइजीरिया' },
    'country.ZA': { en: 'South Africa', lg: 'Afrika y\'Ebukaddyo', lus: 'Afrika y\'Ebumozi', sw: 'Afrika Kusini', fr: 'Afrique du Sud', ar: 'جنوب أفريقيا', pt: 'África do Sul', es: 'Sudáfrica', hi: 'दक्षिण अफ्रीका' },
    'country.US': { en: 'United States', lg: 'Amerika', lus: 'Amerika', sw: 'Marekani', fr: 'États-Unis', ar: 'الولايات المتحدة', pt: 'Estados Unidos', es: 'Estados Unidos', hi: 'संयुक्त राज्य अमेरिका' },
    'country.GB': { en: 'United Kingdom', lg: 'Bungereza', lus: 'Bungereza', sw: 'Uingereza', fr: 'Royaume-Uni', ar: 'المملكة المتحدة', pt: 'Reino Unido', es: 'Reino Unido', hi: 'यूनाइटेड किंगडम' },
    'country.IN': { en: 'India', lg: 'Buyindi', lus: 'Buyindi', sw: 'India', fr: 'Inde', ar: 'الهند', pt: 'Índia', es: 'India', hi: 'भारत' },
    'country.OTHER': { en: 'Other', lg: 'Ebirala', lus: 'Ebindi', sw: 'Nyingine', fr: 'Autre', ar: 'آخر', pt: 'Outro', es: 'Otro', hi: 'अन्य' },

    'aria.menu_toggle': { en: 'Toggle sidebar', lg: 'Kyusa emeesa y\'ebiteekebwa', lus: 'Hindula emeesa y\'esikomba', sw: 'Geuza menyu', fr: 'Basculer le menu latéral', ar: 'تبديل الشريط الجانبي', pt: 'Alternar barra lateral', es: 'Alternar barra lateral', hi: 'साइडबार टॉगल करें' },
    'aria.country': { en: 'Country or region', lg: 'Ensi oba ekitundu', lus: 'Eilei oba ekitundu', sw: 'Nchi au eneo', fr: 'Pays ou région', ar: 'البلد أو المنطقة', pt: 'País ou região', es: 'País o región', hi: 'देश या क्षेत्र' },
    'aria.language': { en: 'Language', lg: 'Olulimi', lus: 'Olulimi', sw: 'Lugha', fr: 'Langue', ar: 'اللغة', pt: 'Idioma', es: 'Idioma', hi: 'भाषा' },
    'aria.sidebar': { en: 'Devices', lg: 'Ebyuma', lus: 'Ebyuma', sw: 'Vifaa', fr: 'Appareils', ar: 'الأجهزة', pt: 'Dispositivos', es: 'Dispositivos', hi: 'डिवाइस' },
    'aria.footer_nav': { en: 'Footer navigation', lg: 'Eby\'omunsikonda', lus: 'Eby\'omunsi ly\'orupapula', sw: 'Urambazaji wa Chini', fr: 'Navigation de pied de page', ar: 'التنقل في التذييل', pt: 'Navegação de rodapé', es: 'Navegación de pie de página', hi: 'फुटर नेविगेशन' },
    'aria.homepage': { en: 'sanyuhub homepage', lg: 'Olupapula olukulu lwa sanyuhub', lus: 'Orupapula olunene rwa sanyuhub', sw: 'Ukurasa Mkuu wa sanyuhub', fr: 'Page d\'accueil sanyuhub', ar: 'الصفحة الرئيسية لـ sanyuhub', pt: 'Página inicial do sanyuhub', es: 'Página de inicio de sanyuhub', hi: 'sanyuhub होमपेज' }
  };

  // Build dictionary for each locale
  const locales = ['en', 'lg', 'lus', 'sw', 'fr', 'ar', 'pt', 'es', 'hi'];

  locales.forEach(loc => {
    Object.keys(BASE_LABELS).forEach(k => {
      TRANSLATIONS[loc].translations[k] = BASE_LABELS[k][loc] || BASE_LABELS[k].en;
    });
    Object.keys(COMMON_KEYS).forEach(k => {
      TRANSLATIONS[loc].translations[k] = COMMON_KEYS[k][loc] || COMMON_KEYS[k].en;
    });
  });

  let currentLang = 'en';

  function getSavedLanguage() {
    try {
      const saved = localStorage.getItem('sanyuhub-language');
      if (saved && TRANSLATIONS[saved]) {
        return saved;
      }
    } catch (e) {}
    return 'en';
  }

  function setLanguage(lang) {
    if (!TRANSLATIONS[lang]) {
      console.warn(`[i18n] Language "${lang}" not supported. Falling back to English.`);
      lang = 'en';
    }
    currentLang = lang;
    try {
      localStorage.setItem('sanyuhub-language', lang);
    } catch (e) {}

    const langConfig = TRANSLATIONS[lang];
    document.documentElement.lang = lang;
    document.documentElement.dir = langConfig.dir || 'ltr';

    updateDOM();

    if (typeof window.onLanguageChange === 'function') {
      window.onLanguageChange(lang);
    }
  }

  function getLanguage() {
    return currentLang;
  }

  function t(key) {
    const langObj = TRANSLATIONS[currentLang] || TRANSLATIONS.en;
    if (langObj.translations && langObj.translations[key] !== undefined) {
      return langObj.translations[key];
    }
    if (TRANSLATIONS.en.translations[key] !== undefined) {
      console.warn(`[i18n] Key "${key}" missing in language "${currentLang}". Falling back to English.`);
      return TRANSLATIONS.en.translations[key];
    }
    console.warn(`[i18n] Key "${key}" missing in all locales.`);
    return key;
  }

  function updateDOM() {
    // 1. Text elements with data-i18n
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (key) {
        el.textContent = t(key);
      }
    });

    // 2. Attributes with data-i18n-attr (format: "attrName:key,attrName2:key2")
    const attrElements = document.querySelectorAll('[data-i18n-attr]');
    attrElements.forEach(el => {
      const attrConfig = el.getAttribute('data-i18n-attr');
      if (attrConfig) {
        attrConfig.split(',').forEach(pair => {
          const [attr, key] = pair.split(':').map(s => s.trim());
          if (attr && key) {
            el.setAttribute(attr, t(key));
          }
        });
      }
    });

    // 3. Update select#language value if present
    const langSelect = document.getElementById('language');
    if (langSelect && langSelect.value !== currentLang) {
      langSelect.value = currentLang;
    }

    // 4. Trigger re-render of current route if renderPage exists
    if (typeof window.renderPage === 'function') {
      window.renderPage(window.location.pathname);
    }
  }

  // Init language early
  currentLang = getSavedLanguage();

  window.i18n = {
    TRANSLATIONS,
    getLanguage,
    setLanguage,
    t,
    updateDOM
  };

  document.addEventListener('DOMContentLoaded', () => {
    setLanguage(currentLang);
  });
})();
