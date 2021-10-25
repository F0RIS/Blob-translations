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
    }
    // uk: {},
    // ar: {},
    // es: {},
    // fr: {},
    // tr: {},
    // pt: {},
    // de:{},
}


var BOOSTERS_NAMES = {
    en: {
        [CellType.SPEED_BOOSTER]: strData("Speed booster", "You move faster!"),
        [CellType.MAGNET_BOOSTER]: strData("Magnet booster!", "You have bigger eating range!"),
        [CellType.MASS_BOOSTER]: strData("Mass booster!", "You grow faster when you eat food!"),
        [CellType.CONTROL_BOOSTER]: strData("Control booster!", "You have lower turn radius!"),
        [CellType.VISION_BOOSTER]: strData("Vision booster!", "You see more!"),
        [CellType.GHOST_BOOSTER]: strData("Ghost booster!", "Activate it to go through other snakes!"),
    },
    ru: {
        [CellType.SPEED_BOOSTER]: strData("Бустер скорости!", "Ты двигаешься быстрее!"),
        [CellType.MAGNET_BOOSTER]: strData("Бустер магнитизма!", "У тебя больше радиус поедания!"),
        [CellType.MASS_BOOSTER]: strData("Бустер массы!", "Ты растешь быстрее от еды!"),
        [CellType.CONTROL_BOOSTER]: strData("Бустер контроля!", "У тебя меньше радиус поворота!"),
        [CellType.VISION_BOOSTER]: strData("Бустер дальновидности!", "Ты видишь больше!"),
        [CellType.GHOST_BOOSTER]: strData("Бустер призрака!", "Активируй его чтобы проходить через других змеек!"),
    },
    // uk: {},
    // ar: {},
    // es: {},
    // fr: {},
    // tr: {},
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
    var lang = LOC_STRINGS[locale] || Strings["en"]
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
