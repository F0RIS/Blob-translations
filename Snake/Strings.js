var CellType = require("../enum/CellTypeEnum");
var ClientIcons = require("../enum/ClientIcons");

//keys
var Strings = {
    kill_streak: 1,
    revenge: 2,
    ghost_activated: 3,

    headshot: 4,

    first_blood: 10,
    double_kill: 11,
    triple_kill: 12,
    monster_kill: 13,
    rampage: 14,

    //StartGuide
    sg_well_done: 16,
    sg_good_job: 17,
    sg_excellent: 18,
    sg_finish: 19,

    sg_welcome_intro: 20,
    sg_welcome_text: 21,

    sg_eat_food_intro: 22,
    sg_eat_food_text: 23,

    sg_speed_up_intro: 24,
    sg_speed_up_text: 25,
    sg_speed_up_info: 26,

    sg_kill_snake_intro: 27,
    sg_kill_snake_text: 28,

    sg_eat_remains_intro: 29,
    sg_eat_remains_text: 30,
    sg_eat_remains_outro: 31,

    friendsModeWelcome: 40,

    //partyCodes
    pcNoCode: 51,
    pcYourCodeIs: 52,
    pcXjoinedYourParty: 53,
    pcYouJoinedSomeParty: 54,

}

var LOC_STRINGS = {
    en: {
        [Strings.kill_streak]: "Kill streak!",
        [Strings.revenge]: "Revenge!",
        [Strings.ghost_activated]: "Ghost booster activated!",
        [Strings.headshot]: "Headshot!",
        [Strings.first_blood]: "First blood!",
        [Strings.double_kill]: "Double Kill!",
        [Strings.triple_kill]: "Triple Kill!",
        [Strings.monster_kill]: "Monster Kill!",
        [Strings.rampage]: "Rampage!",

        [Strings.sg_well_done]: "Well done!",
        [Strings.sg_good_job]: "Good job!",
        [Strings.sg_excellent]: "Excellent!",
        [Strings.sg_finish]: "Congratulations!\nYou finished the start guide!",

        [Strings.sg_welcome_intro]: "Welcome to Viper.io!",
        [Strings.sg_welcome_text]: "This is a start guide!\nRead these messages and do what they ask!",

        [Strings.sg_eat_food_intro]: "Let's learn how to grow!",
        [Strings.sg_eat_food_text]: "Eat food to grow",

        [Strings.sg_speed_up_intro]: "Let's learn how to move fast!",
        [Strings.sg_speed_up_text]: "Press and HOLD speed button 🚀\nSpeed up for",
        [Strings.sg_speed_up_info]: "When you speeding up you lose mass\nand become smaller faster!",

        [Strings.sg_kill_snake_intro]: "Let's learn how to defeat other snakes!⚔️",
        [Strings.sg_kill_snake_text]: "Make other snakes hit your tail",
        [Strings.sg_eat_remains_intro]: "Now eat remains of any snake!",
        [Strings.sg_eat_remains_text]: "Eat remains of any snake!\nRemains",
        [Strings.sg_eat_remains_outro]: "You grow really fast when you eat remains!",

        [Strings.friendsModeWelcome]: "You can't kill friends/teammates in this game mode!🤝",

        [Strings.pcNoCode]: "Your party code is empty. You are not in a team with anybody😟",
        [Strings.pcYourCodeIs]: "You party code is: ",
        [Strings.pcXjoinedYourParty]: " joined your party!👋",
        [Strings.pcYouJoinedSomeParty]: "You are in the party! It's members:\n",
    },
    ru: {
        [Strings.kill_streak]: "Череда убийств!",
        [Strings.revenge]: "Месть!",
        [Strings.ghost_activated]: "Бустер призрака активирован!",
        [Strings.headshot]: "Хедшот!",
        [Strings.first_blood]: "Первая кровь!",
        [Strings.double_kill]: "Двойное убийство!",
        [Strings.triple_kill]: "Тройное убийство!",
        [Strings.monster_kill]: "Монстр!",
        [Strings.rampage]: "Буйство!",

        [Strings.sg_well_done]: "Молодец!",
        [Strings.sg_good_job]: "Огонь!",
        [Strings.sg_excellent]: "Отлично!",
        [Strings.sg_finish]: "Поздравляем!\nТы закончил обучалку и готов к бою!",

        [Strings.sg_welcome_intro]: "Добро пожаловать в Viper.io!",
        [Strings.sg_welcome_text]: "Это стартовая обучалка\nЧитай эти сообщения и делай что в них просят!",

        [Strings.sg_eat_food_intro]: "Давай узнаем, как расти!",
        [Strings.sg_eat_food_text]: "Ешь еду, чтобы расти",

        [Strings.sg_speed_up_intro]: "Научимся быстро двигаться!",
        [Strings.sg_speed_up_text]: "Нажми и УДЕРЖИВАЙ кнопку скорости 🚀\nУскоряйся в течение",
        [Strings.sg_speed_up_info]: "Когда ты ускоряешься, ты теряешь массу \nи быстрее становишься меньше!",

        [Strings.sg_kill_snake_intro]: "Научимся побеждать других змеек!⚔️",
        [Strings.sg_kill_snake_text]: "Виляй так чтобы другие змейки \nударялись о твой хвост",
        [Strings.sg_eat_remains_intro]: "Теперь ешь остатки этой змейки!",
        [Strings.sg_eat_remains_text]: "Ешь остатки этой змейки!\nОстатки",
        [Strings.sg_eat_remains_outro]: "Ты растешь очень быстро когда ешь остатки!",

        [Strings.friendsModeWelcome]: "Ты не можешь убивать друзей/сокомандников\n в этом режиме игры!🤝",

        [Strings.pcNoCode]: "Ты не указал код команды. Ты сам по себе😟",
        [Strings.pcYourCodeIs]: "Вы вошли в игру с кодом команды: ",
        [Strings.pcXjoinedYourParty]: " примкнул к твоей команде!👋",
        [Strings.pcYouJoinedSomeParty]: "Вы в команде! Её состав:\n",
    },
    // uk: {},
    ar: {
        [Strings.kill_streak]: "سلسلة من القتلَات!",
        [Strings.revenge]: " تم الإنتقام!",
        [Strings.ghost_activated]: "تم تنشيط معزز الإختفاء!",
        [Strings.headshot]: "ضربة رأس!",
        [Strings.first_blood]: "الدم الأول!",
        [Strings.double_kill]: "قتله ثنائيه!",
        [Strings.triple_kill]: "قتله ثلاثيه!",
        [Strings.monster_kill]: "قتلة الوحش!",
        [Strings.rampage]: "الهيجان!",

        [Strings.sg_well_done]: "أحسنت!",
        [Strings.sg_good_job]: "أحسنت!",
        [Strings.sg_excellent]: "ممتاز!",
        [Strings.sg_finish]: "تهانينا!\n لقد انتهيت من دليل البدء!",

        [Strings.sg_welcome_intro]: "!Viper.io مرحبا بك في",
        [Strings.sg_welcome_text]: "هذا هو دليل البداية!",

        [Strings.sg_eat_food_intro]: "دعونا نتعلم كيف ننمو!",
        [Strings.sg_eat_food_text]: "تناول الطعام لتنمو",

        [Strings.sg_speed_up_intro]: "دعونا نتعلم كيف نتحرك بسرعة!",
        [Strings.sg_speed_up_text]: "اضغط مع الاستمرار على زر السرعة 🚀\nتسريع ل",
        [Strings.sg_speed_up_info]: "عندما تسرع تفقد الكتلة\n وتصبح أصغر بشكل أسرع!",

        [Strings.sg_kill_snake_intro]: "دعونا نتعلم كيفية هزيمة الثعابين الأخرى! ⚔️",
        [Strings.sg_kill_snake_text]: "اجعل ثعابين أخرى تضرب ذيلك",
        [Strings.sg_eat_remains_intro]: "الآن تأكل بقايا هذا الثعبان!",
        [Strings.sg_eat_remains_text]: "أكل بقايا هذا الثعبان!\nبقايا",
        [Strings.sg_eat_remains_outro]: "أنت تنمو بسرعة كبيرة عندما تأكل البقايا!",

        [Strings.friendsModeWelcome]: "لا يمكنك قتل الأصدقاء / زملائك في وضع اللعبة هذا!",

        [Strings.pcNoCode]: "رمز حزبك فارغ. أنت لست في فريق مع أي شخص",
        [Strings.pcYourCodeIs]: " أنت رمز الحزب هو ",
        [Strings.pcXjoinedYourParty]: " انضم إلى حزبك ",
        [Strings.pcYouJoinedSomeParty]: "أنت في الحفلة مع الأعضاء التاليين\n",
    },
    es: {
        [Strings.kill_streak]: "Racha de muertes!",
        [Strings.revenge]: "Venganza!",
        [Strings.ghost_activated]: "Potenciador fantasma activado!",
        [Strings.headshot]: "Disparo a la cabeza!",
        [Strings.first_blood]: "Primera sangre!",
        [Strings.double_kill]: "Doble matanza!",
        [Strings.triple_kill]: "Triple muerte!",
        [Strings.monster_kill]: "Matar monstruo!",
        [Strings.rampage]: "Alboroto!",

        [Strings.sg_well_done]: "¡Bien hecho!",
        [Strings.sg_good_job]: "¡Buen trabajo!",
        [Strings.sg_excellent]: "¡Excelente!",
        [Strings.sg_finish]: "¡Felicitaciones!\n¡Terminaste la guía de inicio!",


        [Strings.sg_welcome_intro]: "Bienvenido a Viper.io!",
        [Strings.sg_welcome_text]: "¡Esta es una guía de inicio!\nLee estos mensajes y haz lo que te piden.",

        [Strings.sg_eat_food_intro]: "¡Aprendamos a crecer!",
        [Strings.sg_eat_food_text]: "Come alimentos para crecer",

        [Strings.sg_speed_up_intro]: "¡Aprendamos a movernos rápido!",
        [Strings.sg_speed_up_text]: "Mantenga presionado el botón de velocidad 🚀\nAcelere durante",
        [Strings.sg_speed_up_info]: "¡Cuando acelera, pierde masa\ny se vuelve más pequeño más rápido!",

        [Strings.sg_kill_snake_intro]: "¡Aprendamos a derrotar a otras serpientes! ⚔️",
        [Strings.sg_kill_snake_text]: "Haz que otras serpientes golpeen tu cola",
        [Strings.sg_eat_remains_intro]: "¡Ahora come los restos de esa serpiente!",
        [Strings.sg_eat_remains_text]: "¡Come los restos de esa serpiente!\nPermanece",
        [Strings.sg_eat_remains_outro]: "¡Crece muy rápido cuando come restos!",

        [Strings.friendsModeWelcome]: "¡No puedes matar amigos / compañeros de equipo en este modo de juego!🤝",

        [Strings.pcNoCode]: "Su código de partido está vacío. No estás en un equipo con nadie😟",
        [Strings.pcYourCodeIs]: "Tu código de fiesta es: ",
        [Strings.pcXjoinedYourParty]: " ¡Únete a tu fiesta!👋",
        [Strings.pcYouJoinedSomeParty]: "Estás en el grupo con los siguientes miembros:\n",
    },
    fr: {
        [Strings.kill_streak]: "Série de meurtres!",
        [Strings.revenge]: "Venger!",
        [Strings.ghost_activated]: "Booster fantôme activé!",
        [Strings.headshot]: "Headshot!",
        [Strings.first_blood]: "Premier sang!",
        [Strings.double_kill]: "Double Tuer!",
        [Strings.triple_kill]: "Triple tuerie!",
        [Strings.monster_kill]: "Monstre Tuer!",
        [Strings.rampage]: "Carnage!",

        [Strings.sg_well_done]: "Bien fait!",
        [Strings.sg_good_job]: "Bon travail!",
        [Strings.sg_excellent]: "Excellent!",
        [Strings.sg_finish]: "Félicitations!\nVous avez terminé le guide de démarrage !",

        [Strings.sg_welcome_intro]: "Bienvenue en Viper.io!",
        [Strings.sg_welcome_text]: "Ceci est un guide de démarrage!\nLisez ces messages et faites ce qu'ils vous demandent !",

        [Strings.sg_eat_food_intro]: "Apprenons à grandir!",
        [Strings.sg_eat_food_text]: "Manger de la nourriture pour grandir",

        [Strings.sg_speed_up_intro]: "Apprenons à bouger vite !",
        [Strings.sg_speed_up_text]: "Appuyez et maintenez enfoncé le bouton de vitesse\nAccélérez pendant",
        [Strings.sg_speed_up_info]: "Lorsque vous accélérez, vous perdez de la masse\net devenez plus petit plus rapidement !",

        [Strings.sg_kill_snake_intro]: "Apprenons à vaincre d'autres serpents !⚔️",
        [Strings.sg_kill_snake_text]: "Faites en sorte que d'autres serpents frappent votre queue",
        [Strings.sg_eat_remains_intro]: "Maintenant, mange les restes de ce serpent !",
        [Strings.sg_eat_remains_text]: "Eat remains of that snake!\nRemains",
        [Strings.sg_eat_remains_outro]: "Vous grandissez très vite quand vous mangez des restes !",

        [Strings.friendsModeWelcome]: "Vous ne pouvez pas tuer des amis/coéquipiers dans ce mode de jeu!🤝",

        [Strings.pcNoCode]: "Votre code de parti est vide. Vous n'êtes dans une équipe avec personne😟",
        [Strings.pcYourCodeIs]: "Votre code de fête est: ",
        [Strings.pcXjoinedYourParty]: " a rejoint votre groupe!👋",
        [Strings.pcYouJoinedSomeParty]: "Vous êtes dans le groupe avec les prochains membres:\n",
    },
    tr: {
        [Strings.kill_streak]: "Öldürüş serisi!",
        [Strings.revenge]: "İntikam!",
        [Strings.ghost_activated]: "Hayalet takviyesi etkinleştirildi!",
        [Strings.headshot]: "Kafa Vuruşu!",
        [Strings.first_blood]: "İlk Kan!",
        [Strings.double_kill]: "Çifte Öldürüş!",
        [Strings.triple_kill]: "Üçlü Öldürüş!",
        [Strings.monster_kill]: "Canavar Öldürüş!",
        [Strings.rampage]: "Öfke!",

        [Strings.sg_well_done]: "Tebrikler!",
        [Strings.sg_good_job]: "Aferin!",
        [Strings.sg_excellent]: "Harika!",
        [Strings.sg_finish]: "Tebrikler!\naşlangıç kılavuzunu bitirdiniz!",

        [Strings.sg_welcome_intro]: "Viper.io'e hoşgeldiniz!",
        [Strings.sg_welcome_text]: "Bu bir başlangıç kılavuzudur!\nBu mesajları okuyun ve istediklerini yapın!",

        [Strings.sg_eat_food_intro]: "Nasıl büyüyeceğimizi öğrenelim!",
        [Strings.sg_eat_food_text]: "Büyümek için yemek yiyin",

        [Strings.sg_speed_up_intro]: "Hızlı hareket etmeyi öğrenelim!",
        [Strings.sg_speed_up_text]: "Hız düğmesine 🚀 basın ve BASILI TUTUN 🚀\nHızlandırın",
        [Strings.sg_speed_up_info]: "Hızlandıkça kütle kaybedersiniz\nve daha hızlı küçülürsünüz!",

        [Strings.sg_kill_snake_intro]: "Diğer yılanları nasıl yeneceğimizi öğrenelim!⚔️",
        [Strings.sg_kill_snake_text]: "Diğer yılanları kuyruğuna vur",
        [Strings.sg_eat_remains_intro]: "Şimdi o yılanın kalıntılarını ye!",
        [Strings.sg_eat_remains_text]: "O yılanın kalıntılarını ye!\nKalıntıları",
        [Strings.sg_eat_remains_outro]: "Kalıntıları yediğinizde çok hızlı büyürsünüz!",

        [Strings.friendsModeWelcome]: "Bu oyun modunda arkadaşlarınızı/takım arkadaşlarınızı öldüremezsiniz!🤝",

        [Strings.pcNoCode]: "Parti kodunuz boş. Kimseyle bir takımda değilsin😟",
        [Strings.pcYourCodeIs]: "Parti kodunuz: ",
        [Strings.pcXjoinedYourParty]: " partinize katıldı!👋",
        [Strings.pcYouJoinedSomeParty]: "Sıradaki üyelerin olduğu partidesiniz:\n",
    },
    pt: {
        [Strings.kill_streak]: "Sequência de matança!",
        [Strings.revenge]: "Vingança!",
        [Strings.ghost_activated]: "Ghost booster ativado!",
        [Strings.headshot]: "Tiros na Cabeça!",
        [Strings.first_blood]: "Primeiro sangue!",
        [Strings.double_kill]: "Matança Dupla!",
        [Strings.triple_kill]: "Morte Tripla!",
        [Strings.monster_kill]: "Monstro Mate!",
        [Strings.rampage]: "Raiva!",

        [Strings.sg_well_done]: "Bem feito!",
        [Strings.sg_good_job]: "Bom trabalho!",
        [Strings.sg_excellent]: "Excelente!",
        [Strings.sg_finish]: "Parabéns!\nVocê terminou o guia de início!",

        [Strings.sg_welcome_intro]: "Bem vindo a Viper.io!",
        [Strings.sg_welcome_text]: "Este é um guia de início!\nLeia essas mensagens e faça o que elas pedem!",

        [Strings.sg_eat_food_intro]: "Vamos aprender a crescer!",
        [Strings.sg_eat_food_text]: "Coma comida para crescer",

        [Strings.sg_speed_up_intro]: "Vamos aprender a andar rápido!",
        [Strings.sg_speed_up_text]: "Pressione e SEGURE o botão de velocidade 🚀\nAcelerar por",
        [Strings.sg_speed_up_info]: "Quando você acelera, você perde massa\ne fica menor mais rápido!",

        [Strings.sg_kill_snake_intro]: "Vamos aprender como derrotar outras cobras!⚔️",
        [Strings.sg_kill_snake_text]: "Faça outras cobras atingirem seu rabo",
        [Strings.sg_eat_remains_intro]: "Agora coma os restos daquela cobra!",
        [Strings.sg_eat_remains_text]: "O que resta daquela cobra!\nRestos",
        [Strings.sg_eat_remains_outro]: "Você cresce muito rápido quando você come restos!",

        [Strings.friendsModeWelcome]: "Você não pode matar amigos/companheiros de equipe neste modo de jogo!🤝",

        [Strings.pcNoCode]: "O código da sua festa está vazio. Você não está em uma equipe com ninguém😟",
        [Strings.pcYourCodeIs]: "O código da sua festa é: ",
        [Strings.pcXjoinedYourParty]: " entrou na sua festa!👋",
        [Strings.pcYouJoinedSomeParty]: "Você está no grupo com os próximos membros:\n",
    },
    de: {
        [Strings.kill_streak]: "Kill streak!",
        [Strings.revenge]: "Rache!",
        [Strings.ghost_activated]: "Geister booster aktiviert!",
        [Strings.headshot]: "Kopfschuss!",
        [Strings.first_blood]: "First blood!",
        [Strings.double_kill]: "Doppel Kill!",
        [Strings.triple_kill]: "Dreifach Kill!",
        [Strings.monster_kill]: "Monster Kill!",
        [Strings.rampage]: "Amoklauf!",

        [Strings.sg_well_done]: "Gut erledigt!",
        [Strings.sg_good_job]: "Gut gemacht!",
        [Strings.sg_excellent]: "Exzellent!",
        [Strings.sg_finish]: "Herzlichen Glückwunsch!\nSie haben die Startanleitung beendet!",

        [Strings.sg_welcome_intro]: "Willkommen zu Viper.io!",
        [Strings.sg_welcome_text]: "Dies ist eine Startanleitung!\nLesen Sie diese Nachrichten und tun Sie, was sie verlangen!",

        [Strings.sg_eat_food_intro]: "Lass uns lernen, wie man wächst!",
        [Strings.sg_eat_food_text]: "Essen Sie Nahrung, um zu wachsen",

        [Strings.sg_speed_up_intro]: "Lassen Sie uns lernen, sich schnell zu bewegen!",
        [Strings.sg_speed_up_text]: "Drücke und HALTE die Geschwindigkeitstaste 🚀\nBeschleunige für",
        [Strings.sg_speed_up_info]: "Wenn du schneller wirst, verlierst du Masse\nund wirst schneller kleiner!",

        [Strings.sg_kill_snake_intro]: "Lass uns lernen, wie man andere Schlangen besiegt!⚔️",
        [Strings.sg_kill_snake_text]: "Lass andere Schlangen deinen Schwanz schlagen",
        [Strings.sg_eat_remains_intro]: "Jetzt iss die Überreste dieser Schlange!",
        [Strings.sg_eat_remains_text]: "Iss die Überreste dieser Schlange!\nÜberreste",
        [Strings.sg_eat_remains_outro]: "Sie wachsen wirklich schnell, wenn Sie Reste essen!",

        [Strings.friendsModeWelcome]: "Du kannst in diesem Spielmodus keine Freunde/Teamkollegen töten!🤝",

        [Strings.pcNoCode]: "Ihr Partycode ist leer. Du bist mit niemandem in einem Team😟",
        [Strings.pcYourCodeIs]: "Ihr Partycode lautet: ",
        [Strings.pcXjoinedYourParty]: " ist deiner Party beigetreten!👋",
        [Strings.pcYouJoinedSomeParty]: "Du bist in der Party mit den nächsten Mitgliedern:\n",
    },
}


var BOOSTERS_NAMES = {
    en: {
        [CellType.SPEED_BOOSTER]: strData("Speed booster", "You move faster!"),
        [CellType.MAGNET_BOOSTER]: strData("Magnet booster!", "You have a bigger eating range!"),
        [CellType.MASS_BOOSTER]: strData("Mass booster!", "You grow faster when you eat food!"),
        [CellType.CONTROL_BOOSTER]: strData("Flex booster!", "You are more flexible!"),
        [CellType.VISION_BOOSTER]: strData("Vision booster!", "You see more!"),
        [CellType.GHOST_BOOSTER]: strData("Ghost booster!", "Activate it to go through other snakes!"),
    },
    ru: {
        [CellType.SPEED_BOOSTER]: strData("Бустер скорости!", "Ты двигаешься быстрее!"),
        [CellType.MAGNET_BOOSTER]: strData("Бустер магнитизма!", "У тебя больше зона поедания!"),
        [CellType.MASS_BOOSTER]: strData("Бустер массы!", "Ты растешь быстрее от еды!"),
        [CellType.CONTROL_BOOSTER]: strData("Бустер гибкости!", "Ты поворачиваешь резче!"),
        [CellType.VISION_BOOSTER]: strData("Бустер обзора!", "Ты видишь больше!"),
        [CellType.GHOST_BOOSTER]: strData("Бустер призрака!", "Активируй его чтобы проходить через других змеек!"),
    },
    // uk: {},
    ar: {
        [CellType.SPEED_BOOSTER]: strData("معزز السرعة",
            "أنت تتحرك بشكل أسرع!"),
        [CellType.MAGNET_BOOSTER]: strData("معزز المغناطٍيس!",
            "لديك نطاق أكل أكبر!"),
        [CellType.MASS_BOOSTER]: strData("معزز الكتله!",
            "أنت تنمو بشكل أسرع عندما تأكل الطعام!"),
        [CellType.CONTROL_BOOSTER]: strData("معزز التحكم!",
            "لديك نصف قطر دوران منخفض!"),
        [CellType.VISION_BOOSTER]: strData("معزز الرؤيه!",
            "يمكنك ان ترى لمسافات بعيده!"),
        [CellType.GHOST_BOOSTER]: strData("معزز الإختفاء!",
            "قم بتنشيطه للمرور من خلال الثعابين الأخرى دون الموت!"),
    },
    es: {
        [CellType.SPEED_BOOSTER]: strData("Aumentador de velocidad", "¡Te mueves más rápido!"),
        [CellType.MAGNET_BOOSTER]: strData("Aumentado de imán!", "!Tienes una mayor distancia para comer!"),
        [CellType.MASS_BOOSTER]: strData("Aumentador de masa!", "¡Creces más rápido cuando comes alimentos!"),
        [CellType.CONTROL_BOOSTER]: strData("Aumentador de flexibilidad!", "¡Tienes  más flexibilidad!"),
        [CellType.VISION_BOOSTER]: strData("Aumentador de visión!", "¡Puedes ver más!"),
        [CellType.GHOST_BOOSTER]: strData("Aumentador de fantasmas!", "¡Actívalo para atravesar otras serpientes!"),
    },
    fr: {
        [CellType.SPEED_BOOSTER]: strData("Boost de vitesse", "Tu bouges plus vite!"),
        [CellType.MAGNET_BOOSTER]: strData("Magnet booster!", "Vous avez une plus grande aire de restauration!"),
        [CellType.MASS_BOOSTER]: strData("Boost de masse!", "Tu grandis plus vite quand tu manges alimentaire!"),
        [CellType.CONTROL_BOOSTER]: strData("Flex booster!", "Vous êtes plus flexible!"),
        [CellType.VISION_BOOSTER]: strData("Boost de vision!", "Vous en voyez plus!"),
        [CellType.GHOST_BOOSTER]: strData("Ghost booster!", "Activez-le pour passer par d'autres serpents!"),
    },
    tr: {
        [CellType.SPEED_BOOSTER]: strData("Hız takviyesi", "Daha hızlı hareket ediyorsun!"),
        [CellType.MAGNET_BOOSTER]: strData("Mıknatıs takviyesi!", "Daha geniş yeme aralığınız var!"),
        [CellType.MASS_BOOSTER]: strData("Kitle takviyesi!", "Yemek yediğinizde daha hızlı büyürsünüz!"),
        [CellType.CONTROL_BOOSTER]: strData("Kontrol takviyesi!", "Daha düşük dönüş yarıçapınız var!"),
        [CellType.VISION_BOOSTER]: strData("Görme takviyesi!", "Daha fazlasını görüyorsunuz!"),
        [CellType.GHOST_BOOSTER]: strData("Hayalet takviyesi!", "Diğer yılanlardan ölmeksizin geçmek için etkinleştirin!"),
    },
    pt: {
        [CellType.SPEED_BOOSTER]: strData("Impulsionador de velocidade", "Você se move mais rápido!"),
        [CellType.MAGNET_BOOSTER]: strData("Impulsionador magnético!", "Você tem uma variedade maior de alimentação!"),
        [CellType.MASS_BOOSTER]: strData("Amplificador de massa!", "Você cresce mais rápido quando você come comida!"),
        [CellType.CONTROL_BOOSTER]: strData("Impulsionador de flex!", "Você é mais flexível!"),
        [CellType.VISION_BOOSTER]: strData("Intensificador de visão!", "Você vê mais!"),
        [CellType.GHOST_BOOSTER]: strData("Impulsionador fantasma!", "Ative-o para passar por outras cobras!"),
    },
    de: {
        [CellType.SPEED_BOOSTER]: strData("Geschwindigkeits booster", "Du bewegst dich schneller!"),
        [CellType.MAGNET_BOOSTER]: strData("Magnet booster!", "Du hast eine größer ess Reichweite!"),
        [CellType.MASS_BOOSTER]: strData("Masse booster!", "Du wächst schneller wenn du isst!"),
        [CellType.CONTROL_BOOSTER]: strData("Flexibilitäts booster!", "Du bist nun flexibler !"),
        [CellType.VISION_BOOSTER]: strData("Sicht booster!", "Du siehst jetzt mehr!"),
        [CellType.GHOST_BOOSTER]: strData("Geist booster!", "Aktiviere es um durch andere Schlangen zu gehen!"),
    },
}

function strData(name, desc) {
    return {
        name: name,
        desc: desc
    }
}


Strings.getString = function (key, locale) {
    if (!locale) {
        throw new TypeError("Pass locale argument for key: " + key);
    }

    var lang = LOC_STRINGS[locale] || LOC_STRINGS["en"]
    var item = lang[key];
    if (!item) {
        throw new TypeError("Localized string not found, key: " + key);
    }
    return item;
}

Strings.getBoosterName = function (id, locale) {
    var res = "No name";
    var lang = BOOSTERS_NAMES[locale] || BOOSTERS_NAMES["en"]
    var item = lang[id];
    if (item) {
        res = item.name;
    }
    return res;
}

Strings.getBoosterDescription = function (id, locale) {
    var res = "No desc";
    var lang = BOOSTERS_NAMES[locale] || BOOSTERS_NAMES["en"]
    var item = lang[id];
    if (item) {
        res = item.desc;
    }
    return "\n" + res;
}

function checkBoostersIntegrity() {
    var qcount = Object.keys(ClientIcons.BOOSTER_ICONS).length;
    for (var key in BOOSTERS_NAMES) {
        if (qcount != Object.keys(BOOSTERS_NAMES[key]).length) {
            throw new Error("BOOSTER_ICONS is inconsistent with BOOSTERS_NAMES. Strings or icon are missing!");
        }
    }
};

function checkTranslationsIntegrity() {
    for (var locale in LOC_STRINGS) {
        for (var strID in Strings) {
            if (!LOC_STRINGS[locale][Strings[strID]] && typeof (Strings[strID]) != "function") {
                throw new Error("No translation for " + strID + " in locale: " + locale);
            }
        }
    }
};

checkBoostersIntegrity();
checkTranslationsIntegrity();

module.exports = Strings;
