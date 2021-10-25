var CONFIG_NAMES = {
    en: {
        "playerStartMass": strData(null, "Start mass of the player cell"),
        "playerMaxMass": strData(null, "Maximum size of the player cell"),
        "playerMaxCells": strData(null, "Max cells the player is allowed to have"),
        "playerSpeed": strData(null, "Player speed multiplier (1=normal speed, 2=twice faster)"),
        "playerDecayRate": strData(null, "Amount (percent) of player cell mass lost per second"),
        "playerRecombineTime": strData(null, "Base time in seconds before a cell is allowed to recombine"),
        "playerAutoSplit": strData(null, "1 - cell will be splitted if it reaches playerMaxMass"),
        "playerAimAutoSplit": strData(null, "Control AutoSplit direction"),
        "playerSplitDistance": strData(null, "Player cells splitting distance"),
        "playerBorderReflection": strData(null, "On/off player cells jumping back from the map border"),

        "mobilePhysics": strData(null, "Whether or not the server uses mobile first io game physics (faster splits)"),
        
        "ejectSize": strData(null, "Eject size"),
        "ejectSizeLoss": strData(null, "Eject size which will be substracted from player cell"),
        "ejectDistance": strData(null, "How far your eject goes after throw"),
        "ejectCooldown": strData(null, "Tick count until a player can eject mass again (1 tick = 40 ms)"),
        "ejectSelfEatCooldown": strData(null, "Tick count until a player can eat own eject (1 tick = 40 ms)"),

        "ejectBorderReflection": strData(null, "On/off ejects jumping back from the map border"),
        "ejectRandomizeAngle": strData(null, "Ejected Mass randomize angle"),
        "ejectCollision": strData(null, "0 - ejects will pass through ejects"),
        // "ejectMassMult": strData(null, "How much more mass eject will give when it was eaten"),
        "ejectSpeedSwitcher": strData(null, "Add Macro speed switch button"),
        "ejectMacroSpeed": strData(null, "How fast feed macro works"),
        
        "foodMinSize": strData(null, "Minimum food size"),
        "foodMinAmount": strData(null, "Minimum food cells on the map"),

        "virusMinSize": strData(null, "Minimum virus size"),
        "virusMinAmount": strData(null, "Minimum number of viruses on the map"),
        "virusDistance": strData(null, "Viruses splitting/shooting distance"),


        "speedBoosterMinAmount": strData(null, "Amount of speed PowerUps"),
        "speedBoosterTime": strData(null, "How much time it will work"),
        "speedBoosterValue": strData(null, "Multiplyer of speed (1.5 = 50% faster, 0.5 = 50% slower"),
        "speedBoosterSize": strData(null, "How big PowerUp is"),

        "mergeBoosterMinAmount": strData(null, "Amount of merge PowerUps"),
        "mergeBoosterTime": strData(null, "How much time it will work"),
        "mergeBoosterValue": strData(null, "Multiplyer of recombine time (0.5 = 50% faster, 1.5 = 50% slower)"),
        "mergeBoosterSize": strData(null, "How big PowerUp is"),

        "virusBoosterMinAmount": strData(null, "Amount of virus PowerUps"),
        "virusBoosterTime": strData(null, "How much time it will work"),
        "virusBoosterSize": strData(null, "How big PowerUp is"),

        "sizeBoosterMinAmount": strData(null, "Amount of size PowerUps"),
        "sizeBoosterTime": strData(null, "How much time it will work"),
    },
    ru: {
        "playerStartMass": strData("стартМасса", "Стартовая масса шара игрока"),
        "playerMaxMass": strData("максМасса", "Максимальная масса шара игрока"),
        "playerMaxCells": strData("максКолШаров", "Максимальное количество шаров которое игрок может иметь"),
        "playerSpeed": strData("скорДвижИгрока", "Множитель скорости игрока (1=стандартная, 2=в два раза быстрее)"),
        "playerDecayRate": strData("скорПотериМассы", "Скорость потерми массы игроком"),
        "playerRecombineTime": strData("скорСоедШаров", "Базовое время в секунда перед тем как шару позволяется соедениться"),
        "playerAutoSplit": strData("автоСплит", "1 = шар будет разделен когда он достигнет значения параметра максМасса"),
        "playerAimAutoSplit": strData("управлятьАвтоСплитом", "Управлять направлением автосплита"),
        "playerSplitDistance": strData("дальностьСплита", "Дальность сплита/деления игрока"),
        "playerBorderReflection": strData("отскОтГранейИгрока", "Вкл/выкл отскок шаров игрока от граней карты"),

        "mobilePhysics": strData("мобильнаяФизика", "Использовать ли мобильную физику (более быстрые спилты/деления)"),

        "ejectSize": strData("размЕджекта", "Размер еджекта"),
        "ejectSizeLoss": strData("ушербЕджекта", "Как много массы теряет игрок при бросании еджекта"),
        "ejectDistance": strData("дальнЕджекта", "Как далеко летит еджект после бросания"),
        "ejectCooldown": strData("откактЕджекта", "Кол-во тиков до того как игрок может опять бросать еджект (1 тик = 40 мс)"),
        "ejectSelfEatCooldown": strData("задежкаСъеданияЕджекта", "Задержка в тиках перед тем как игрок может съесть свои еджекты (1 тик = 40 мс)"),

        "ejectBorderReflection": strData("отскОтГранейЕджекта", "Вкл/выкл отскок еджектов от граней карты"),
        "ejectRandomizeAngle": strData("уголРазбрЕджектов", "Угол разброса выбрасывания еджектов"),
        "ejectCollision": strData("коллизияЕджектов", "0 = еджекты не будут сталкиваться друг с другом"),
        // "ejectMassMult": strData(null, "How much more mass eject will give when it was eaten"),
        "ejectMacroSpeed": strData("скорМакроКормления", "Как быстр работает макро фид"),
        "ejectSpeedSwitcher": strData("перекМакро", "Добавить кнопку переключеня скорости макро"),
       
        "foodMinSize": strData("минРазмЕды", "Минимальный размер еды"),
        "foodMinAmount": strData("минКолЕды", "Минимальное кол-во еды на карте"),
        "virusMinSize": strData("минРазмВируса", "Минимальный размер вируса"),
        "virusMinAmount": strData("минКолВирусов", "Минимальное количество вирусов на карте"),
        "virusDistance": strData("дальностьВируса", "Дальность деления/стрельобы вирусов"),

        "speedBoosterMinAmount": strData("минКолБустовСкор", "Кол-во бустеров(поверапов) скорости"),
        "speedBoosterTime": strData("длитДейстБустовСкор", "Длительность действия бустера скорости"),
        "speedBoosterValue": strData("силаБустаСкорости", "Множитель скорости (1.5 = на 50% быстрее, 0.5 = на 50% медленнее"),
        "speedBoosterSize": strData("размерБустаСкорости", "На сколько большой бустер скорости"),

        "mergeBoosterMinAmount": strData("минКолБустовСлияния", "Кол-во бустеров слияния/соединения"),
        "mergeBoosterTime": strData("длитДейстБустовСлияния", "Длительность действия бустера слияния"),
        "mergeBoosterValue": strData("силаБустаСлияния", "Множитель задержки соединения (1.5 = на 50% быстрее, 0.5 = на 50% медленнее"),
        "mergeBoosterSize": strData("размерБустаСлияния", "На сколько большой бустер слияния"),

        "virusBoosterMinAmount": strData("минКолБустовВируса", "Кол-во бустеров вируса (игрок становится колючкой)"),
        "virusBoosterTime": strData("длитДейстБустовВируса", "Длительность действия бустеров вируса (игрок становится колючкой)"),
        "virusBoosterSize": strData("размерБустаВируса", "На сколько большой бустер вируса"),

        "sizeBoosterMinAmount": strData("минКолБустовРазмера", "Кол-во бустеров размера (игрок растет сам по себе)"),
        "sizeBoosterTime": strData("длитДейстБустовРазмера", "Длительность действия бустера размера (игрок растет сам по себе)"),
    },
    // uk: {},
    ar: {
        "playerStartMass": strData("حجم بداية اللاعب", "حجم البداية"),
        "playerMaxMass": strData("playerMaxMass", "Maximum size of the player cell"),
        "playerMaxCells": strData("أكبر عدد من الخلايا المسموح بها لكل لاعب", "أكبر عدد خلايا"),
        "playerSpeed": strData("مضاعف سرعة اللاعب،2= سرعة مضاعفة، 1= سرعة عادية"),
        "playerDecayRate": strData("الحجم الذي يتم فقدانه كل ثانية", "معدل الصغر"),
        "playerRecombineTime": strData("الوقت الذي يحتاجه اللاعب قبل أن يتجمع", "وقت التجمع"),
        "playerAutoSplit": strData(null, "1 - cell will be splitted if it reaches playerMaxMass"),
        "playerAimAutoSplit": strData(null, "Control AutoSplit angle"),
        "playerSplitDistance": strData(null, "Player cells splitting distance  "),
        "playerBorderReflection": strData(null, "On/off player cells jumping back from the map border"),

        "mobilePhysics": strData(null, "Whether or not the server uses mobile first io game physics"),

        "ejectSize": strData("حجم الطعام", "حجم الطعام"),
        "ejectSizeLoss": strData("الحجم الذي سيتم فقدانه من اللاعب", "الحجم المفقود في التطعيم"),
        "ejectDistance": strData("مسافة التطعيم", "مسافة التطعيم"),
        "ejectCooldown": strData("المدة بعد كل تطعيم، 1= 40 جمث", "هدنة ما بعد التطعيم"),
        "ejectSelfEatCooldown": strData(null, "Tick count until a player can eat own eject (1 tick = 40 ms)"),

        "ejectBorderReflection": strData(null, "On/off ejects jumping back from the map border"),
        "ejectRandomizeAngle": strData(null, "Ejected Mass randomize angle"),
        "ejectCollision": strData(null, "0 = ejects will pass through ejects"),
        // "ejectMassMult": strData(null, "How much more mass eject will give when it was eaten"),
        "ejectMacroSpeed": strData(null, "How fast feed macro works"),
        "ejectSpeedSwitcher": strData(null, "Add Macro speed switch button"),
        
        "foodMinSize": strData("حجم الطعام", "حجم الطعام"),
        "foodMinAmount": strData("عدد خلايا الطعام", "كمية الطعام"),
        "virusMinSize": strData("حجم الفيروسات", "حجم الفيروسات"),
        "virusMinAmount": strData("عدد الفيروسات في الخريطة", "كمية الفيروسات"),
        "virusDistance": strData(null, "Viruses splitting/shooting distance"),

        "speedBoosterMinAmount": strData("كمية قوة السرعة", "كمية قوة السرعة"),
        "speedBoosterTime": strData("مدة اشتغال قوة السرعة", "مدة قوة السرعة"),
        "speedBoosterValue": strData("مضاعف السرعة، 1.5= ٪50 أسرع، 0.5= ٪50 أبطأ", "قيمة قوة السرعة"),
        "speedBoosterSize": strData("حجم رافع قوة السرعة", "حجم قوة السرعة"),
        "mergeBoosterMinAmount": strData("عدد رافع الطاقة للتجمع", "كمية قوة التجمع"),
        "mergeBoosterTime": strData("مدة قوة التجمع", "مدة قوة التجمع"),
        "mergeBoosterValue": strData("مضاعف وقت قوة التجمع، 0.5= ٪50 أسرع، 1.5= ٪50 أبطأ", "قيمة قوة التجمع"),
        "mergeBoosterSize": strData("كم حجم رافع الطاقة", "حجم قوة التجمع"),
        "virusBoosterMinAmount": strData("كمية قوة الفيروس", "كمية قوة الفيروس"),
        "virusBoosterTime": strData("مدة قوة الفيروس", "مدة قوة الفيروس"),
        "virusBoosterSize": strData("حجم قوة الفيروس", "حجم قوة الفيروس"),
        "sizeBoosterMinAmount": strData("كمية قوة زيادة الحجم", "كمية قوة زيادة الحجم"),
        "sizeBoosterTime": strData("مدة قوة زيادة الحجم", "مدة قوة زيادة الحجم"),
    },
    es: {
        "playerStartMass": strData("Masa Inicial", "Masa inicial del jugador"),
        "playerMaxMass": strData("TamañoMáximo", "Tamaño máximo de la celda del jugador"),
        "playerMaxCells": strData("Celdas", "Máximo de celdas que puede tener el jugador"),
        "playerSpeed": strData("Velocidad", "Multiplicador de la velocidad del jugador (1=velocidad normal, 2=más rápido)"),
        "playerDecayRate": strData("Pérdidas", "Tamaño que se pierde por segundo"),
        "playerDecayRate": strData("Disminución", "Cantidad (porcentaje) de masa perdida por segundo"),
        "playerRecombineTime": strData("Recombinación", "Tiempo base para que se una"),
        "playerAutoSplit": strData("Split", "1 - la celda se dividirá si alcanza el TamañoMáximo"),
        "playerAimAutoSplit": strData("Control", "Control automático de la dirección de división"),
        "playerSplitDistance": strData("Eyección", "Distancia de eyección"),
        "playerBorderReflection": strData("Reflection", "Activar/desactivar las celdas del jugador que regresan del borde del mapa"),

        "mobilePhysics": strData("Física", "Si el servidor utiliza o no la física del juego IO para dispositivos móviles (divisiones más rápidas)"),

        "ejectSize": strData("TamañoDivisión", "Tamaño de eyección"),
        "ejectSizeLoss": strData("Sustracción", "Tamaño de la expulsión que se tomará de la celda del jugador"),
        "ejectDistance": strData("Distancia", "Qué tan lejos llegará su eyección después de dividirse"),
        "ejectCooldown": strData("Enfriarse", "Elige el tiempo hasta que un jugador pueda volver a expulsar masa (1 tick = 40 ms)"),
        "ejectSelfEatCooldown": strData("Delay", "Elige el tiempo hasta que un jugador puede comer su propia masa (1 tick = 40 ms)"),

        "ejectBorderReflection": strData("Efecto", "Activar/desactivar el rebote de los blobs en el borde del mapa"),
        "ejectRandomizeAngle": strData("Ángulo", "Ángulo de aleatorización de la masa expulsada"),
        "ejectCollision": strData("Colisión", "0 - dividido pasará por dividido"),
        // "ejectMassMult": strData("Acumulación", "Cuánta más masa expulsada dará al comer"),
        "ejectSpeedSwitcher": strData("Botón", "Agregar botón de cambio de velocidad macro"),
        "ejectMacroSpeed": strData("Macro", "Cuán rápido funciona la alimentación de macros"),

        "foodMinSize": strData("Comida", "Tamaño mínimo de comida"),
        "foodMinAmount": strData("Alimentos", "Celdas mínimas de alimentos en el mapa"),

        "virusMinSize": strData("Virus", "Tamaño mínimo de los virus verdes"),
        "virusMinAmount": strData("Cantidad", "Cantidad mínima de los virus verdes en el mapa"),
        "virusDistancia": strData("Distancia", "Distancia que se juega el virus verde"),


        "speedBoosterMinAmount": strData("Speed", "Cantidad de la potencia de velocidad"),
        "speedBoosterTime": strData("Operación", "Durante cuánto tiempo estará activo"),
        "speedBoosterValue": strData("Ajuste", "Ajuste de la velocidad (1,5 = 50% rápido, 0,5 = 50% más lento"),
        "speedBoosterSize": strData("Tamaño", "Qué tamaño tendrá la potencia"),

        "mergeBoosterMinAmount": strData("Merge", "Cantidad de la potencia de unión"),
        "mergeBoosterTime": strData("Operación", "Qué tamaño tendrá"),
        "mergeBoosterValue": strData("Recombinación", "Velocidad de la unión (0,5 = 50% rápido, 1,5 = 50% más lento)"),
        "mergeBoosterSize": strData("Tamaño", "Qué tamaño tendrá"),

        "virusBoosterMinAmount": strData("VirusPurpura", "Cantidad mínima de los virus púrpura"),
        "virusBoosterTime": strData("Operación", "Durante cuánto tiempo estará activo"),
        "virusBoosterSize": strData("Tamaño", "Qué tamaño tendrá"),

        "sizeBoosterMinAmount": strData("SizePower", "Cantidad mínima de la potencia de tamaño"),
        "sizeBoosterTime": strData("Operación", "Durante cuánto tiempo estará activo"),
    },
    // fr: {},
    tr: {
        "playerStartMass": strData(null, "oyuncu başlangıç kütlesi"),
        "playerMaxMass": strData(null, "Maximum size of the player cell"),
        "playerMaxCells": strData(null, "oyuncu'nun parça limiti"),
        "playerSpeed": strData(null, "oyuncu'nun hızının katlanmsı (1=normal speed, 2=twice faster)"),
        "playerDecayRate": strData(null, "bır saniye içinde kaybedilen kütle"),
        "playerRecombineTime": strData(null, "parçanın yeniden birleşmesi için ayarlanan zaman"),
        "playerAutoSplit": strData(null, "1 - cell will be splitted if it reaches playerMaxMass"),
        "playerAimAutoSplit": strData(null, "Control AutoSplit angle"),
        "playerSplitDistance": strData(null, "Player cells splitting distance  "),
        "playerBorderReflection": strData(null, "On/off player cells jumping back from the map border"),

        "mobilePhysics": strData(null, "Whether or not the server uses mobile first io game physics"),
        
        "ejectSize": strData(null, "yem hacmi"),
        "ejectSizeLoss": strData(null, "oyuncudan eksilecek olan yem'in hacmi "),
        "ejectDistance": strData(null, "yemi'n fırlayacağı uzaklık"),
        "ejectCooldown": strData(null, "atılan yemlerin arasındakı zaman farkı (1 tick = 40 ms)"),
        "ejectSelfEatCooldown": strData(null, "Tick count until a player can eat own eject (1 tick = 40 ms)"),
        "ejectBorderReflection": strData(null, "On/off ejects jumping back from the map border"),
        "ejectRandomizeAngle": strData(null, "Ejected Mass randomize angle"),
        "ejectCollision": strData(null, "0 = ejects will pass through ejects"),
        // "ejectMassMult": strData(null, "How much more mass eject will give when it was eaten"),
        "ejectMacroSpeed": strData(null, "How fast feed macro works"),
        "ejectSpeedSwitcher": strData(null, "Add Macro speed switch button"),
        
        "foodMinSize": strData(null, "Minimum yemek hacmi "),
        "foodMinAmount": strData(null, "harita üzerinde dağılan Minimum yemek parçaları"),
        "virusMinSize": strData(null, "Minimum virüs hacmi"),
        "virusMinAmount": strData(null, "Minimum virüs sayısı"),
        "virusDistance": strData(null, "Viruses splitting/shooting distance"),
        
        "speedBoosterMinAmount": strData(null, "hız"),
        "speedBoosterTime": strData(null, "hız desteğinin zamanı"),
        "speedBoosterValue": strData(null, "hız desteğinin gücü (1.5 = 50% faster, 0.5 = 50% slower"),
        "speedBoosterSize": strData(null, "hız desteğinin hacmi"),
        "mergeBoosterMinAmount": strData(null, "merge desteğinin sayısı"),
        "mergeBoosterTime": strData(null, "merge desteğinin zamanı"),
        "mergeBoosterValue": strData(null, "merge desteğinin gücü (0.5 = 50% faster, 1.5 = 50% slower)"),
        "mergeBoosterSize": strData(null, "merge desteğinin hacmi"),
        "virusBoosterMinAmount": strData(null, "virüs desteğinin sayısı"),
        "virusBoosterTime": strData(null, "virüs desteğinin zamanı"),
        "virusBoosterSize": strData(null, "virüs desteğinin hacmi"),
        "sizeBoosterMinAmount": strData(null, "hacim desteğinin sayısı"),
        "sizeBoosterTime": strData(null, "hacim desteğinin zamanı"),
    },
    pt: {
        "playerStartMass": strData("Massa Inicial", "Massa inicial do jogador"),
        "playerMaxMass": strData("Tamanho Máximo", "Tamanho máximo da célula do jogador"),
        "playerMaxCells": strData("Células", "Máximo de células que o jogador pode ter"),
        "playerSpeed": strData("Velocidade", "Multiplicador da velocidade do jogador (1=velocidade normal, 2=mais rápido)"),
        "playerDecayRate": strData("Perdas", "Tamanho que se perde por segundo"),
        "playerDecayRate": strData("Diminuição", "Quantidade (porcentagem) de massa perdida por segundo"),
        "playerRecombineTime": strData("Recombinação", "Tempo base para que um blob possa se juntar"),
        "playerAutoSplit": strData("Divisão", "1 - a célula será dividida se atingir o TamanhoMáximo"),
        "playerAimAutoSplit": strData("Controle", "Controle de direção da divisão automática"),
        "playerSplitDistance": strData("Distância", "Divisão a distância"),
        "playerBorderReflection": strData("Reflexão", "Ligar/desligar células do jogador voltando da borda do mapa"),

        "mobilePhysics": strData("Física", "Se o servidor usa ou não a física de jogos IO para dispositivos móveis (divisões mais rápidas)"),

        "ejectSize": strData("Ejeção", "Tamanho da ejeção"),
        "ejectSizeLoss": strData("Subtração", "Tamanho da ejeção que será tirada da célula do jogador"),
        "ejectDistance": strData("Lonjura", "Quão longe sua ejeção vai após a divisão"),
        "ejectCooldown": strData("Contagem", "Escolha o tempo até que um jogador possa ejetar massa novamente (1 tick = 40 ms)"),
        "ejectSelfEatCooldown": strData("Atraso", "Escolha o tempo até que o jogador possa comer sua própria massa (1 tick = 40 ms)"),

        "ejectBorderReflection": strData("Efeito", "Ligar/desligar blob saltando da borda do mapa"),
        "ejectRandomizeAngle": strData("Ângulo", "Ângulo de randomização da massa ejetada"),
        "ejectCollision": strData("Ejeção", "0 - ejetados passarão por ejetados"),
        // "ejectMassMult": strData("Acréscimo", "Quanto a mais de massa ejetada vai dar quando for comido"),
        "ejectSpeedSwitcher": strData("Botão", "Adicionar botão de mudança da velocidade macro"),
        "ejectMacroSpeed": strData("Macro", "Como funciona a rápida alimentação macro"),

        "foodMinSize": strData("Comida", "Tamanho mínimo da comida"),
        "foodMinAmount": strData("Células", "Células alimentares mínimas no mapa"),

        "virusMinSize": strData("Vírus", "Tamanho mínimo dos vírus verdes"),
        "virusMinAmount": strData("Quantidade", "Quantidade mínima dos vírus verdes no mapa"),
        "virusDistance": strData("Distância”, "Distância que o vírus verde é jogado"),


        "speedBoosterMinAmount": strData("Quantidade", "Quantidade do poder de velocidade"),
        "speedBoosterTime": strData("Funcionamento", "Por quanto tempo ficará ativo"),
        "speedBoosterValue": strData("Velocidade", "Configuração de velocidade (1.5 = 50% rápido, 0.5 = 50% mais lento"),
        "speedBoosterSize": strData("Tamanho", "Quão grande será o tamanho do poder"),

        "mergeBoosterMinAmount": strData("Merge", "Quantidade do poder de junção"),
        "mergeBoosterTime": strData("Funcionamento", "Por quanto tempo ficará ativo"),
        "mergeBoosterValue": strData("Recombinação", "Velocidade da junção (0.5 = 50% rápido, 1.5 = 50% mais lento)"),
        "mergeBoosterSize": strData("Tamanho", "Quão grande será o tamanho do poder"),

        "virusBoosterMinAmount": strData("VírusRoxo", "Quantidade mínima dos vírus roxos"),
        "virusBoosterTime": strData("Funcionamento", "Por quanto tempo ficará ativo"),
        "virusBoosterSize": strData("Tamanho", "Quão grande será o tamanho do poder"),

        "sizeBoosterMinAmount": strData("Poder de Tamanho", "Quantidade mínima do poder de tamanho"),
        "sizeBoosterTime": strData("Funcionamento", "Por qunto tempo ficará ativo"),
    },
    // de: {},
}

function strData(name, desc) {
    return {
        n: name,
        d: desc
    }
}

module.exports = CONFIG_NAMES;
