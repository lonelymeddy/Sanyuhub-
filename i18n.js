(function () {
  'use strict';

  const TRANSLATIONS = {
    en: {
      dir: 'ltr',
      name: 'English',
      translations: {
        'brand.tagline': 'Your world, connected.',
        'selector.country': 'COUNTRY / REGION',
        'selector.language': 'LANGUAGE',
        'footer.company': 'Company',
        'footer.support': 'Support',
        'footer.legal': 'Legal',
        'footer.rights': 'All rights reserved.',

        'category.android': 'Android',
        'category.ios': 'iOS',
        'category.desktop': 'Desktop',
        'category.smart_tv': 'Smart TV',
        'category.gaming_consoles': 'Gaming Consoles',
        'category.streaming_devices': 'Streaming Devices',
        'category.set_top_boxes': 'Set-top Boxes',

        'device.android_phones': 'Android Phones',
        'device.android_tablets': 'Android Tablets',
        'device.iphone': 'iPhone',
        'device.ipad': 'iPad',
        'device.windows': 'Windows',
        'device.macos': 'macOS',
        'device.linux': 'Linux',
        'device.chromebook': 'Chromebook',
        'device.samsung_smart_tv': 'Samsung Smart TV',
        'device.lg_smart_tv': 'LG Smart TV',
        'device.android_tv': 'Android TV',
        'device.google_tv': 'Google TV',
        'device.hisense_smart_tv': 'Hisense Smart TV',
        'device.playstation': 'PlayStation',
        'device.xbox': 'Xbox',
        'device.apple_tv': 'Apple TV',
        'device.amazon_fire_tv': 'Amazon Fire TV',
        'device.chromecast': 'Chromecast',
        'device.roku': 'Roku',
        'device.android_tv_boxes': 'Android TV Boxes',
        'device.compatible_cable_boxes': 'Compatible Cable Boxes',

        'nav.about': 'About sanyuhub',
        'nav.blog': 'Blog',
        'nav.careers': 'Careers',
        'nav.partnerships': 'Partnerships',
        'nav.help': 'Help & Support',
        'nav.contact': 'Contact Us',
        'nav.accessibility': 'Accessibility',
        'nav.privacy': 'Privacy Policy',
        'nav.terms': 'Terms of Use',

        'page.home.title': 'sanyuhub',
        'page.about.title': 'About sanyuhub',
        'page.blog.title': 'Blog',
        'page.careers.title': 'Careers',
        'page.partnerships.title': 'Partnerships',
        'page.help.title': 'Help & Support',
        'page.contact.title': 'Contact Us',
        'page.accessibility.title': 'Accessibility',
        'page.privacy.title': 'Privacy Policy',
        'page.terms.title': 'Terms of Use',

        'empty.oops': 'Oops, nothing here',
        'empty.not_found_title': 'Page Not Found',
        'empty.not_found_text': 'The page you are looking for does not exist.',

        'country.UG': 'Uganda',
        'country.KE': 'Kenya',
        'country.TZ': 'Tanzania',
        'country.RW': 'Rwanda',
        'country.NG': 'Nigeria',
        'country.ZA': 'South Africa',
        'country.US': 'United States',
        'country.GB': 'United Kingdom',
        'country.IN': 'India',
        'country.OTHER': 'Other',

        'aria.menu_toggle': 'Toggle sidebar',
        'aria.country': 'Country or region',
        'aria.language': 'Language',
        'aria.sidebar': 'Devices',
        'aria.footer_nav': 'Footer navigation',
        'aria.homepage': 'sanyuhub homepage'
      }
    },

    lg: {
      dir: 'ltr',
      name: 'Luganda',
      translations: {
        'brand.tagline': 'Ensi yo, egattiddwa.',
        'selector.country': 'ENSI / EKITUNDU',
        'selector.language': 'OLULIMI',
        'footer.company': 'KAMPUNI',
        'footer.support': 'OBUYAMBI',
        'footer.legal': 'EBY\'AMATEEKA',
        'footer.rights': 'Eby\'obugagga byonna ebibikiddwa.',

        'category.android': 'Android',
        'category.ios': 'iOS',
        'category.desktop': 'Kompyuta y\'omumeesa',
        'category.smart_tv': 'Tivvi za Amagezi',
        'category.gaming_consoles': 'Ebyuma by\'Emizannyo',
        'category.streaming_devices': 'Ebyuma by\'Okwolesa',
        'category.set_top_boxes': 'Bbokisi z\'eTivvi',

        'device.android_phones': 'Amasimu ga Android',
        'device.android_tablets': 'Ttabulete za Android',
        'device.iphone': 'iPhone',
        'device.ipad': 'iPad',
        'device.windows': 'Windows',
        'device.macos': 'macOS',
        'device.linux': 'Linux',
        'device.chromebook': 'Chromebook',
        'device.samsung_smart_tv': 'Smart TV ya Samsung',
        'device.lg_smart_tv': 'Smart TV ya LG',
        'device.android_tv': 'Android TV',
        'device.google_tv': 'Google TV',
        'device.hisense_smart_tv': 'Smart TV ya Hisense',
        'device.playstation': 'PlayStation',
        'device.xbox': 'Xbox',
        'device.apple_tv': 'Apple TV',
        'device.amazon_fire_tv': 'Amazon Fire TV',
        'device.chromecast': 'Chromecast',
        'device.roku': 'Roku',
        'device.android_tv_boxes': 'Android TV Boxes',
        'device.compatible_cable_boxes': 'Bbokisi za Kkebezi Ezifaanaana',

        'nav.about': 'Ebikwata ku sanyuhub',
        'nav.blog': 'Bbulogu',
        'nav.careers': 'Emirimu',
        'nav.partnerships': 'Enkolagana',
        'nav.help': 'Obuyambi & Okuwagira',
        'nav.contact': 'Tukwatagane',
        'nav.accessibility': 'Olukusa lwa Buli Muntu',
        'nav.privacy': 'Nkola y\'Ekyama',
        'nav.terms': 'Ebikwata ku Kukoresa',

        'page.home.title': 'sanyuhub',
        'page.about.title': 'Ebikwata ku sanyuhub',
        'page.blog.title': 'Bbulogu',
        'page.careers.title': 'Emirimu',
        'page.partnerships.title': 'Enkolagana',
        'page.help.title': 'Obuyambi & Okuwagira',
        'page.contact.title': 'Tukwatagane',
        'page.accessibility.title': 'Olukusa lwa Buli Muntu',
        'page.privacy.title': 'Nkola y\'Ekyama',
        'page.terms.title': 'Ebikwata ku Kukoresa',

        'empty.oops': 'Abo, tewali kintu wano',
        'empty.not_found_title': 'Olupapula Lwabuze',
        'empty.not_found_text': 'Olupapula lw\'onoonya luliko obuzibu obutasoboka.',

        'country.UG': 'Uganda',
        'country.KE': 'Kenya',
        'country.TZ': 'Tanzania',
        'country.RW': 'Rwanda',
        'country.NG': 'Nigeria',
        'country.ZA': 'Afrika y\'Ebukaddyo',
        'country.US': 'Amerika',
        'country.GB': 'Bungereza',
        'country.IN': 'Buyindi',
        'country.OTHER': 'Ebirala',

        'aria.menu_toggle': 'Kyusa emeesa y\'ebiteekebwa',
        'aria.country': 'Ensi oba ekitundu',
        'aria.language': 'Olulimi',
        'aria.sidebar': 'Ebyuma',
        'aria.footer_nav': 'Eby\'omunsikonda',
        'aria.homepage': 'Olupapula olukulu lwa sanyuhub'
      }
    },

    lud: {
      dir: 'ltr',
      name: 'Ludoga',
      translations: {
        'brand.tagline': 'Eisialo lyo, ligaitibwa.',
        'selector.country': 'EILEI / EKITUNDU',
        'selector.language': 'OLULIMI',
        'footer.company': 'EKAMPUNI',
        'footer.support': 'OBUYAMBI',
        'footer.legal': 'EBY\'AMATEEKA',
        'footer.rights': 'Eby\'obutaka byona ebibiikilwe.',

        'category.android': 'Android',
        'category.ios': 'iOS',
        'category.desktop': 'Kompyuta y\'Olukoba',
        'category.smart_tv': 'Tivvi sya Amagezi',
        'category.gaming_consoles': 'Ebyuma by\'Emizannyo',
        'category.streaming_devices': 'Ebyuma by\'Okusakira',
        'category.set_top_boxes': 'Emboxi sya Tivvi',

        'device.android_phones': 'Emasimu g\'Android',
        'device.android_tablets': 'Amatablet g\'Android',
        'device.iphone': 'iPhone',
        'device.ipad': 'iPad',
        'device.windows': 'Windows',
        'device.macos': 'macOS',
        'device.linux': 'Linux',
        'device.chromebook': 'Chromebook',
        'device.samsung_smart_tv': 'Smart TV ya Samsung',
        'device.lg_smart_tv': 'Smart TV ya LG',
        'device.android_tv': 'Android TV',
        'device.google_tv': 'Google TV',
        'device.hisense_smart_tv': 'Smart TV ya Hisense',
        'device.playstation': 'PlayStation',
        'device.xbox': 'Xbox',
        'device.apple_tv': 'Apple TV',
        'device.amazon_fire_tv': 'Amazon Fire TV',
        'device.chromecast': 'Chromecast',
        'device.roku': 'Roku',
        'device.android_tv_boxes': 'Android TV Boxes',
        'device.compatible_cable_boxes': 'Emboxi sya Kebuli Ezikkirizibwa',

        'nav.about': 'Ebikwata ku sanyuhub',
        'nav.blog': 'Bbulogu',
        'nav.careers': 'Emirimo',
        'nav.partnerships': 'Eimuganya / Enkolagana',
        'nav.help': 'Obuyambi & Okwelinda',
        'nav.contact': 'Tuwuliziganye',
        'nav.accessibility': 'Empereza ya Buli Muntu',
        'nav.privacy': 'Eisaza ly\'Ekiyama',
        'nav.terms': 'Ebibikiro by\'Okozesa',

        'page.home.title': 'sanyuhub',
        'page.about.title': 'Ebikwata ku sanyuhub',
        'page.blog.title': 'Bbulogu',
        'page.careers.title': 'Emirimo',
        'page.partnerships.title': 'Eimuganya / Enkolagana',
        'page.help.title': 'Obuyambi & Okwelinda',
        'page.contact.title': 'Tuwuliziganye',
        'page.accessibility.title': 'Empereza ya Buli Muntu',
        'page.privacy.title': 'Eisaza ly\'Ekiyama',
        'page.terms.title': 'Ebibikiro by\'Okozesa',

        'empty.oops': 'Aii, tewali kintu wano',
        'empty.not_found_title': 'Orupapula Luze',
        'empty.not_found_text': 'Orupapula lwoitiire eisyali luliku obusobya.',

        'country.UG': 'Uganda',
        'country.KE': 'Kenya',
        'country.TZ': 'Tanzania',
        'country.RW': 'Rwanda',
        'country.NG': 'Nigeria',
        'country.ZA': 'Afrika y\'Ebumozi',
        'country.US': 'Amerika',
        'country.GB': 'Bungereza',
        'country.IN': 'Buyindi',
        'country.OTHER': 'Ebindi',

        'aria.menu_toggle': 'Hindula emeesa y\'esikomba',
        'aria.country': 'Eilei oba ekitundu',
        'aria.language': 'Olulimi',
        'aria.sidebar': 'Ebyuma',
        'aria.footer_nav': 'Eby\'omunsi ly\'orupapula',
        'aria.homepage': 'Orupapula olunene rwa sanyuhub'
      }
    },

    sw: {
      dir: 'ltr',
      name: 'Swahili',
      translations: {
        'brand.tagline': 'Ulimwengu wako, umeunganishwa.',
        'selector.country': 'NCHI / ENALEO',
        'selector.language': 'LUGHA',
        'footer.company': 'Kampuni',
        'footer.support': 'Msaada',
        'footer.legal': 'Kisheria',
        'footer.rights': 'Haki zote zimehifadhiwa.',

        'category.android': 'Android',
        'category.ios': 'iOS',
        'category.desktop': 'Karakana / Kompyuta',
        'category.smart_tv': 'Smart TV',
        'category.gaming_consoles': 'Konsonzi za Michezo',
        'category.streaming_devices': 'Vifaa vya Kutiririsha',
        'category.set_top_boxes': 'Dekoda za TV',

        'device.android_phones': 'Simu za Android',
        'device.android_tablets': 'Tableti za Android',
        'device.iphone': 'iPhone',
        'device.ipad': 'iPad',
        'device.windows': 'Windows',
        'device.macos': 'macOS',
        'device.linux': 'Linux',
        'device.chromebook': 'Chromebook',
        'device.samsung_smart_tv': 'Samsung Smart TV',
        'device.lg_smart_tv': 'LG Smart TV',
        'device.android_tv': 'Android TV',
        'device.google_tv': 'Google TV',
        'device.hisense_smart_tv': 'Hisense Smart TV',
        'device.playstation': 'PlayStation',
        'device.xbox': 'Xbox',
        'device.apple_tv': 'Apple TV',
        'device.amazon_fire_tv': 'Amazon Fire TV',
        'device.chromecast': 'Chromecast',
        'device.roku': 'Roku',
        'device.android_tv_boxes': 'Android TV Boxes',
        'device.compatible_cable_boxes': 'Dekoda Zinazopatana',

        'nav.about': 'Kuhusu sanyuhub',
        'nav.blog': 'Blogu',
        'nav.careers': 'Nafasi za Kazi',
        'nav.partnerships': 'Ushirikiano',
        'nav.help': 'Msaada na Usaidizi',
        'nav.contact': 'Wasiliana Nasi',
        'nav.accessibility': 'Ufikiaji',
        'nav.privacy': 'Sera ya Faragha',
        'nav.terms': 'Vigezo vya Matumizi',

        'page.home.title': 'sanyuhub',
        'page.about.title': 'Kuhusu sanyuhub',
        'page.blog.title': 'Blogu',
        'page.careers.title': 'Nafasi za Kazi',
        'page.partnerships.title': 'Ushirikiano',
        'page.help.title': 'Msaada na Usaidizi',
        'page.contact.title': 'Wasiliana Nasi',
        'page.accessibility.title': 'Ufikiaji',
        'page.privacy.title': 'Sera ya Faragha',
        'page.terms.title': 'Vigezo vya Matumizi',

        'empty.oops': 'Ole, hakuna kitu hapa',
        'empty.not_found_title': 'Ukurasa Haukupatikana',
        'empty.not_found_text': 'Ukurasa unaotafuta haupo.',

        'country.UG': 'Uganda',
        'country.KE': 'Kenya',
        'country.TZ': 'Tanzania',
        'country.RW': 'Rwanda',
        'country.NG': 'Nigeria',
        'country.ZA': 'Afrika Kusini',
        'country.US': 'Marekani',
        'country.GB': 'Uingereza',
        'country.IN': 'India',
        'country.OTHER': 'Nyingine',

        'aria.menu_toggle': 'Geuza menyu',
        'aria.country': 'Nchi au eneo',
        'aria.language': 'Lugha',
        'aria.sidebar': 'Vifaa',
        'aria.footer_nav': 'Urambazaji wa Chini',
        'aria.homepage': 'Ukurasa Mkuu wa sanyuhub'
      }
    },

    fr: {
      dir: 'ltr',
      name: 'French',
      translations: {
        'brand.tagline': 'Votre monde, connecté.',
        'selector.country': 'PAYS / RÉGION',
        'selector.language': 'LANGUE',
        'footer.company': 'Entreprise',
        'footer.support': 'Support',
        'footer.legal': 'Mentions légales',
        'footer.rights': 'Tous droits réservés.',

        'category.android': 'Android',
        'category.ios': 'iOS',
        'category.desktop': 'Ordinateur',
        'category.smart_tv': 'Téléviseur Connecté',
        'category.gaming_consoles': 'Consoles de Jeux',
        'category.streaming_devices': 'Passerelles Multimédias',
        'category.set_top_boxes': 'Décodeurs TV',

        'device.android_phones': 'Téléphones Android',
        'device.android_tablets': 'Tablettes Android',
        'device.iphone': 'iPhone',
        'device.ipad': 'iPad',
        'device.windows': 'Windows',
        'device.macos': 'macOS',
        'device.linux': 'Linux',
        'device.chromebook': 'Chromebook',
        'device.samsung_smart_tv': 'Samsung Smart TV',
        'device.lg_smart_tv': 'LG Smart TV',
        'device.android_tv': 'Android TV',
        'device.google_tv': 'Google TV',
        'device.hisense_smart_tv': 'Hisense Smart TV',
        'device.playstation': 'PlayStation',
        'device.xbox': 'Xbox',
        'device.apple_tv': 'Apple TV',
        'device.amazon_fire_tv': 'Amazon Fire TV',
        'device.chromecast': 'Chromecast',
        'device.roku': 'Roku',
        'device.android_tv_boxes': 'Boîtiers Android TV',
        'device.compatible_cable_boxes': 'Décodeurs Câble Compatibles',

        'nav.about': 'À propos de sanyuhub',
        'nav.blog': 'Blog',
        'nav.careers': 'Carrières',
        'nav.partnerships': 'Partenariats',
        'nav.help': 'Aide & Support',
        'nav.contact': 'Contactez-nous',
        'nav.accessibility': 'Accessibilité',
        'nav.privacy': 'Politique de confidentialité',
        'nav.terms': 'Conditions d\'utilisation',

        'page.home.title': 'sanyuhub',
        'page.about.title': 'À propos de sanyuhub',
        'page.blog.title': 'Blog',
        'page.careers.title': 'Carrières',
        'page.partnerships.title': 'Partenariats',
        'page.help.title': 'Aide & Support',
        'page.contact.title': 'Contactez-nous',
        'page.accessibility.title': 'Accessibilité',
        'page.privacy.title': 'Politique de confidentialité',
        'page.terms.title': 'Conditions d\'utilisation',

        'empty.oops': 'Oups, rien ici',
        'empty.not_found_title': 'Page non trouvée',
        'empty.not_found_text': 'La page que vous recherchez n\'existe pas.',

        'country.UG': 'Ouganda',
        'country.KE': 'Kenya',
        'country.TZ': 'Tanzanie',
        'country.RW': 'Rwanda',
        'country.NG': 'Nigéria',
        'country.ZA': 'Afrique du Sud',
        'country.US': 'États-Unis',
        'country.GB': 'Royaume-Uni',
        'country.IN': 'Inde',
        'country.OTHER': 'Autre',

        'aria.menu_toggle': 'Basculer le menu latéral',
        'aria.country': 'Pays ou région',
        'aria.language': 'Langue',
        'aria.sidebar': 'Appareils',
        'aria.footer_nav': 'Navigation de pied de page',
        'aria.homepage': 'Page d\'accueil sanyuhub'
      }
    },

    ar: {
      dir: 'rtl',
      name: 'Arabic',
      translations: {
        'brand.tagline': 'عالمك، متصل.',
        'selector.country': 'البلد / المنطقة',
        'selector.language': 'اللغة',
        'footer.company': 'الشركة',
        'footer.support': 'الدعم',
        'footer.legal': 'قانوني',
        'footer.rights': 'جميع الحقوق محفوظة.',

        'category.android': 'أندرويد',
        'category.ios': 'آي أو إس',
        'category.desktop': 'أجهزة الكمبيوتر',
        'category.smart_tv': 'التلفزيون الذكي',
        'category.gaming_consoles': 'أجهزة الألعاب',
        'category.streaming_devices': 'أجهزة البث',
        'category.set_top_boxes': 'أجهزة الاستقبال',

        'device.android_phones': 'هواتف أندرويد',
        'device.android_tablets': 'أجهزة أندرويد اللوحية',
        'device.iphone': 'آيفون',
        'device.ipad': 'آيباد',
        'device.windows': 'ويندوز',
        'device.macos': 'ماك أو إس',
        'device.linux': 'لينكس',
        'device.chromebook': 'كروم بوك',
        'device.samsung_smart_tv': 'سامسونج سمارت تي في',
        'device.lg_smart_tv': 'إل جي سمارت تي في',
        'device.android_tv': 'أندرويد تي في',
        'device.google_tv': 'جوجل تي في',
        'device.hisense_smart_tv': 'هايسنس سمارت تي في',
        'device.playstation': 'بلايستيشن',
        'device.xbox': 'إكس بوكس',
        'device.apple_tv': 'أبل تي في',
        'device.amazon_fire_tv': 'أمازون فاير تي في',
        'device.chromecast': 'كروم كاست',
        'device.roku': 'روكو',
        'device.android_tv_boxes': 'صناديق أندرويد تي في',
        'device.compatible_cable_boxes': 'أجهزة الكابل المتوافقة',

        'nav.about': 'عن sanyuhub',
        'nav.blog': 'المدونة',
        'nav.careers': 'الوظائف',
        'nav.partnerships': 'الشراكات',
        'nav.help': 'المساعدة والدعم',
        'nav.contact': 'اتصل بنا',
        'nav.accessibility': 'إمكانية الوصول',
        'nav.privacy': 'سياسة الخصوصية',
        'nav.terms': 'شروط الاستخدام',

        'page.home.title': 'sanyuhub',
        'page.about.title': 'عن sanyuhub',
        'page.blog.title': 'المدونة',
        'page.careers.title': 'الوظائف',
        'page.partnerships.title': 'الشراكات',
        'page.help.title': 'المساعدة والدعم',
        'page.contact.title': 'اتصل بنا',
        'page.accessibility.title': 'إمكانية الوصول',
        'page.privacy.title': 'سياسة الخصوصية',
        'page.terms.title': 'شروط الاستخدام',

        'empty.oops': 'عذراً، لا يوجد شيء هنا',
        'empty.not_found_title': 'الصفحة غير موجودة',
        'empty.not_found_text': 'الصفحة التي تبحث عنها غير موجودة.',

        'country.UG': 'أوغندا',
        'country.KE': 'كينيا',
        'country.TZ': 'تنزانيا',
        'country.RW': 'رواندا',
        'country.NG': 'نيجيريا',
        'country.ZA': 'جنوب أفريقيا',
        'country.US': 'الولايات المتحدة',
        'country.GB': 'المملكة المتحدة',
        'country.IN': 'الهند',
        'country.OTHER': 'آخر',

        'aria.menu_toggle': 'تبديل الشريط الجانبي',
        'aria.country': 'البلد أو المنطقة',
        'aria.language': 'اللغة',
        'aria.sidebar': 'الأجهزة',
        'aria.footer_nav': 'التنقل في التذييل',
        'aria.homepage': 'الصفحة الرئيسية لـ sanyuhub'
      }
    },

    pt: {
      dir: 'ltr',
      name: 'Portuguese',
      translations: {
        'brand.tagline': 'Seu mundo, conectado.',
        'selector.country': 'PAÍS / REGIÃO',
        'selector.language': 'IDIOMA',
        'footer.company': 'Empresa',
        'footer.support': 'Suporte',
        'footer.legal': 'Jurídico',
        'footer.rights': 'Todos os direitos reservados.',

        'category.android': 'Android',
        'category.ios': 'iOS',
        'category.desktop': 'Computadores',
        'category.smart_tv': 'Smart TV',
        'category.gaming_consoles': 'Consoles de Videogame',
        'category.streaming_devices': 'Dispositivos de Streaming',
        'category.set_top_boxes': 'Receptores de TV',

        'device.android_phones': 'Celulares Android',
        'device.android_tablets': 'Tablets Android',
        'device.iphone': 'iPhone',
        'device.ipad': 'iPad',
        'device.windows': 'Windows',
        'device.macos': 'macOS',
        'device.linux': 'Linux',
        'device.chromebook': 'Chromebook',
        'device.samsung_smart_tv': 'Samsung Smart TV',
        'device.lg_smart_tv': 'LG Smart TV',
        'device.android_tv': 'Android TV',
        'device.google_tv': 'Google TV',
        'device.hisense_smart_tv': 'Hisense Smart TV',
        'device.playstation': 'PlayStation',
        'device.xbox': 'Xbox',
        'device.apple_tv': 'Apple TV',
        'device.amazon_fire_tv': 'Amazon Fire TV',
        'device.chromecast': 'Chromecast',
        'device.roku': 'Roku',
        'device.android_tv_boxes': 'Caixas Android TV',
        'device.compatible_cable_boxes': 'Receptores de Cabo Compatíveis',

        'nav.about': 'Sobre o sanyuhub',
        'nav.blog': 'Blog',
        'nav.careers': 'Carreiras',
        'nav.partnerships': 'Parcerias',
        'nav.help': 'Ajuda & Suporte',
        'nav.contact': 'Fale Conosco',
        'nav.accessibility': 'Acessibilidade',
        'nav.privacy': 'Política de Privacidade',
        'nav.terms': 'Termos de Uso',

        'page.home.title': 'sanyuhub',
        'page.about.title': 'Sobre o sanyuhub',
        'page.blog.title': 'Blog',
        'page.careers.title': 'Carreiras',
        'page.partnerships.title': 'Parcerias',
        'page.help.title': 'Ajuda & Suporte',
        'page.contact.title': 'Fale Conosco',
        'page.accessibility.title': 'Acessibilidade',
        'page.privacy.title': 'Política de Privacidade',
        'page.terms.title': 'Termos de Uso',

        'empty.oops': 'Ops, nada aqui',
        'empty.not_found_title': 'Página Não Encontrada',
        'empty.not_found_text': 'A página que você está procurando não existe.',

        'country.UG': 'Uganda',
        'country.KE': 'Quênia',
        'country.TZ': 'Tanzânia',
        'country.RW': 'Ruanda',
        'country.NG': 'Nigéria',
        'country.ZA': 'África do Sul',
        'country.US': 'Estados Unidos',
        'country.GB': 'Reino Unido',
        'country.IN': 'Índia',
        'country.OTHER': 'Outro',

        'aria.menu_toggle': 'Alternar barra lateral',
        'aria.country': 'País ou região',
        'aria.language': 'Idioma',
        'aria.sidebar': 'Dispositivos',
        'aria.footer_nav': 'Navegação de rodapé',
        'aria.homepage': 'Página inicial do sanyuhub'
      }
    },

    es: {
      dir: 'ltr',
      name: 'Spanish',
      translations: {
        'brand.tagline': 'Tu mundo, conectado.',
        'selector.country': 'PAÍS / REGIÓN',
        'selector.language': 'IDIOMA',
        'footer.company': 'Empresa',
        'footer.support': 'Soporte',
        'footer.legal': 'Legal',
        'footer.rights': 'Todos los derechos reservados.',

        'category.android': 'Android',
        'category.ios': 'iOS',
        'category.desktop': 'Escritorio',
        'category.smart_tv': 'Smart TV',
        'category.gaming_consoles': 'Consolas de Juegos',
        'category.streaming_devices': 'Dispositivos de Streaming',
        'category.set_top_boxes': 'Decodificadores de TV',

        'device.android_phones': 'Teléfonos Android',
        'device.android_tablets': 'Tabletas Android',
        'device.iphone': 'iPhone',
        'device.ipad': 'iPad',
        'device.windows': 'Windows',
        'device.macos': 'macOS',
        'device.linux': 'Linux',
        'device.chromebook': 'Chromebook',
        'device.samsung_smart_tv': 'Samsung Smart TV',
        'device.lg_smart_tv': 'LG Smart TV',
        'device.android_tv': 'Android TV',
        'device.google_tv': 'Google TV',
        'device.hisense_smart_tv': 'Hisense Smart TV',
        'device.playstation': 'PlayStation',
        'device.xbox': 'Xbox',
        'device.apple_tv': 'Apple TV',
        'device.amazon_fire_tv': 'Amazon Fire TV',
        'device.chromecast': 'Chromecast',
        'device.roku': 'Roku',
        'device.android_tv_boxes': 'Cajas Android TV',
        'device.compatible_cable_boxes': 'Sintonizadores de Cable Compatibles',

        'nav.about': 'Acerca de sanyuhub',
        'nav.blog': 'Blog',
        'nav.careers': 'Empleos',
        'nav.partnerships': 'Asociaciones',
        'nav.help': 'Ayuda y Soporte',
        'nav.contact': 'Contáctenos',
        'nav.accessibility': 'Accesibilidad',
        'nav.privacy': 'Política de Privacidad',
        'nav.terms': 'Términos de Uso',

        'page.home.title': 'sanyuhub',
        'page.about.title': 'Acerca de sanyuhub',
        'page.blog.title': 'Blog',
        'page.careers.title': 'Empleos',
        'page.partnerships.title': 'Asociaciones',
        'page.help.title': 'Ayuda y Soporte',
        'page.contact.title': 'Contáctenos',
        'page.accessibility.title': 'Accesibilidad',
        'page.privacy.title': 'Política de Privacidad',
        'page.terms.title': 'Términos de Uso',

        'empty.oops': 'Ups, no hay nada aquí',
        'empty.not_found_title': 'Página No Encontrada',
        'empty.not_found_text': 'La página que estás buscando no existe.',

        'country.UG': 'Uganda',
        'country.KE': 'Kenia',
        'country.TZ': 'Tanzania',
        'country.RW': 'Ruanda',
        'country.NG': 'Nigeria',
        'country.ZA': 'Sudáfrica',
        'country.US': 'Estados Unidos',
        'country.GB': 'Reino Unido',
        'country.IN': 'India',
        'country.OTHER': 'Otro',

        'aria.menu_toggle': 'Alternar barra lateral',
        'aria.country': 'País o región',
        'aria.language': 'Idioma',
        'aria.sidebar': 'Dispositivos',
        'aria.footer_nav': 'Navegación de pie de página',
        'aria.homepage': 'Página de inicio de sanyuhub'
      }
    },

    hi: {
      dir: 'ltr',
      name: 'Hindi',
      translations: {
        'brand.tagline': 'आपकी दुनिया, जुड़ी हुई।',
        'selector.country': 'देश / क्षेत्र',
        'selector.language': 'भाषा',
        'footer.company': 'कंपनी',
        'footer.support': 'सहायता',
        'footer.legal': 'कानूनी',
        'footer.rights': 'सर्वाधिकार सुरक्षित।',

        'category.android': 'एंड्रॉइड',
        'category.ios': 'आईओएस',
        'category.desktop': 'डेस्कटॉप',
        'category.smart_tv': 'स्मार्ट टीवी',
        'category.gaming_consoles': 'गेमिंग कंसोल',
        'category.streaming_devices': 'स्ट्रीमिंग डिवाइस',
        'category.set_top_boxes': 'सेट-टॉप बॉक्स',

        'device.android_phones': 'एंड्रॉइड फोन',
        'device.android_tablets': 'एंड्रॉइड टैबलेट',
        'device.iphone': 'आईफोन',
        'device.ipad': 'आईपैड',
        'device.windows': 'विंडोज',
        'device.macos': 'मैकओएस',
        'device.linux': 'लिनक्स',
        'device.chromebook': 'क्रोमबुक',
        'device.samsung_smart_tv': 'सैमसंग स्मार्ट टीवी',
        'device.lg_smart_tv': 'एलजी स्मार्ट टीवी',
        'device.android_tv': 'एंड्रॉइड टीवी',
        'device.google_tv': 'गूगल टीवी',
        'device.hisense_smart_tv': 'हायसेंस स्मार्ट टीवी',
        'device.playstation': 'प्लेस्टेशन',
        'device.xbox': 'एक्सबॉक्स',
        'device.apple_tv': 'एप्पल टीवी',
        'device.amazon_fire_tv': 'अमेज़न फायर टीवी',
        'device.chromecast': 'क्रोमकास्ट',
        'device.roku': 'रोकू',
        'device.android_tv_boxes': 'एंड्रॉइड टीवी बॉक्स',
        'device.compatible_cable_boxes': 'संगत केबल बॉक्स',

        'nav.about': 'sanyuhub के बारे में',
        'nav.blog': 'ब्लॉग',
        'nav.careers': 'करियर',
        'nav.partnerships': 'साझेदारी',
        'nav.help': 'सहायता और समर्थन',
        'nav.contact': 'संपर्क करें',
        'nav.accessibility': 'सुगम्यता',
        'nav.privacy': 'गोपनीयता नीति',
        'nav.terms': 'उपयोग की शर्तें',

        'page.home.title': 'sanyuhub',
        'page.about.title': 'sanyuhub के बारे में',
        'page.blog.title': 'ब्लॉग',
        'page.careers.title': 'करियर',
        'page.partnerships.title': 'साझेदारी',
        'page.help.title': 'सहायता और समर्थन',
        'page.contact.title': 'संपर्क करें',
        'page.accessibility.title': 'सुगम्यता',
        'page.privacy.title': 'गोपनीयता नीति',
        'page.terms.title': 'उपयोग की शर्तें',

        'empty.oops': 'अरे, यहाँ कुछ नहीं है',
        'empty.not_found_title': 'पृष्ठ नहीं मिला',
        'empty.not_found_text': 'आप जिस पृष्ठ की तलाश कर रहे हैं वह मौजूद नहीं है।',

        'country.UG': 'युगांडा',
        'country.KE': 'केन्या',
        'country.TZ': 'तंजानिया',
        'country.RW': 'रवांडा',
        'country.NG': 'नाइजीरिया',
        'country.ZA': 'दक्षिण अफ्रीका',
        'country.US': 'संयुक्त राज्य अमेरिका',
        'country.GB': 'यूनाइटेड किंगडम',
        'country.IN': 'भारत',
        'country.OTHER': 'अन्य',

        'aria.menu_toggle': 'साइडबार टॉगल करें',
        'aria.country': 'देश या क्षेत्र',
        'aria.language': 'भाषा',
        'aria.sidebar': 'डिवाइस',
        'aria.footer_nav': 'फुटर नेविगेशन',
        'aria.homepage': 'sanyuhub होमपेज'
      }
    }
  };

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

    // Notify listeners if any
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
