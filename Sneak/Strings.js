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
    },
    // es: {},
    // fr: {},
    tr: {
        [Strings.kill_streak]: "öldürüş serisi!",
        [Strings.revenge]: "İntikam!",
        [Strings.ghost_activated]: "Hayalet takviyesi etkinleştirildi!",
        [Strings.headshot]: "Headshot!",
        [Strings.first_blood]: "İlk kan!",
        [Strings.double_kill]: "Çifte Öldürüş!",
        [Strings.triple_kill]: "Üçlü Öldürüş!",
        [Strings.monster_kill]: "Canavar Öldürüş!",
        [Strings.rampage]: "Öfke!",
    },
    // pt: {},
    // de:{},
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
    // es: {},
    // fr: {},
    tr: {
        [CellType.SPEED_BOOSTER]: strData("Hız takviyesi", "Daha hızlı hareket ediyorsun!"),
        [CellType.MAGNET_BOOSTER]: strData("Mıknatıs takviyesi!", "Daha geniş yeme aralığınız var!"),
        [CellType.MASS_BOOSTER]: strData("Kitle takviyesi!", "Yemek yediğinizde daha hızlı büyürsünüz!"),
        [CellType.CONTROL_BOOSTER]: strData("Kontrol takviyesi!", "Daha düşük dönüş yarıçapınız var!"),
        [CellType.VISION_BOOSTER]: strData("Görme takviyesi!", "Daha fazlasını görüyorsunuz!"),
        [CellType.GHOST_BOOSTER]: strData("Hayalet takviyesi!", "Diğer yılanlardan ölmeksizin geçmek için etkinleştirin!"),
    },
    // pt: {},
    // de:{},
}

function strData(name, desc) {
    return {
        name: name,
        desc: desc
    }
}


Strings.getString = function (key, locale) {
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

function checkIntegrity() {
    var qcount = Object.keys(ClientIcons.BOOSTER_ICONS).length;
    for (var key in BOOSTERS_NAMES) {
        if (qcount != Object.keys(BOOSTERS_NAMES[key]).length) {
            throw new Error("BOOSTER_ICONS is inconsistent with BOOSTERS_NAMES. Strings or icon is missing!");
        }
    }
};
checkIntegrity();

module.exports = Strings;
