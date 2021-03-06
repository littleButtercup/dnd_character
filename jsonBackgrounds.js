window.backgrounds = {
    Прислужник: { abilities: { characterSkillsDiscernment: true, characterSkillsReligion: true } },
    Шарлатан: { abilities: { characterSkillsPrestidigitation: true, characterSkillsDeceit: true } },
    Преступник: { abilities: { characterSkillsDeceit: true, characterSkillsStealth: true } },
    Артист: { abilities: { characterSkillsAcrobatics: true, characterSkillsPerformance: true } },
    'Народный герой': { abilities: { characterSkillsSurvival: true, characterSkillsCommunicationWithAnimals: true } },
    'Гильдейский ремесленник': { abilities: { characterSkillsDiscernment: true, characterSkillsConviction: true } },
    Отшельник: { abilities: { characterSkillsMedicine: true, characterSkillsReligion: true } },
    Благородный: { abilities: { characterSkillsHistory: true, characterSkillsConviction: true } },
    Чужеземец: { abilities: { characterSkillsAthletics: true, characterSkillsSurvival: true } },
    Мудрец: { abilities: { characterSkillsHistory: true, characterSkillsMagic: true } },
    Моряк: { abilities: { characterSkillsAthletics: true, characterSkillsPerception: true } },
    Солдат: { abilities: { characterSkillsAthletics: true, characterSkillsIntimidation: true } },
    Беспризорник: { abilities: { characterSkillsPrestidigitation: true, characterSkillsStealth: true } },
};

window.feature = {
    Прислужник: ['Я идеализирую конкретного героя своей веры и постоянно ссылаюсь на его поступки и свершения',
        'Я могу найти общую позицию даже у самых яростных врагов, сопереживая им, и всегда стремясь к примирению',
        'Я вижу знамения в каждом событии и поступке. Боги пытаются говорить с нами, нужно лишь прислушаться',
        'Ничто не может поколебать мой оптимизм',
        'При любой оказии я цитирую (или перевираю) священные тексты и притчи',
        'Я терпим (или нетерпим) к другим верованиям, и уважаю (или порицаю) поклонение другим богам',
        'Я люблю хорошую еду, выпивку и высокое общество представителей своего храма. Жизнь вдали от этого меня раздражает',
        'Я пробыл в храме слишком долго, и мне недостаёт опыта взаимодействия с людьми за его пределами'],

    Шарлатан: ['Я легко начинаю и разрываю романтические отношения, и постоянно нахожусь в поиске новой пассии',
        'У меня припасены шуточки на все случаи жизни, особенно на те, где юмор вообще неуместен',
        'Лесть — мой излюбленный способ добиться желаемого',
        'Я прирождённый игрок, и не могу удержаться от риска, если на кону стоит что-то стоящее',
        'Я постоянно вру, зачастую даже без малейшей на то причины',
        'Сарказм и оскорбления — мои излюбленные приёмы',
        'Я ношу с собой различные святые символы, и взываю к тем божествам, что лучше подходят для каждого конкретного случая',
        'Я тащу в карман всё, что плохо лежит и имеет хоть какую-то ценность'],

    Преступник: ['У меня всегда есть план на случай, если всё пойдёт не так как задумано',
        'Я всегда хладнокровен, несмотря ни на что. Я никогда не повышаю голоса и не позволяю эмоциям управлять мной',
        'На новом месте я первым делом подмечаю, где находятся различные ценности — или места, где они могут быть спрятаны',
        'Я предпочту обзавестись ещё один другом, нежели ещё одним врагом',
        'У меня проблемы с доверием. Те, кто выглядят самыми порядочными, зачастую скрывают множество грязных секретов',
        'Мне наплевать на риск. Никогда не говорите мне о возможных последствиях',
        'Наилучший способ заставить меня сделать что-то — сказать мне этого не делать',
        'Я срываюсь даже от малейшего оскорбления'],

    Артист: ['Для любой ситуации я найду подходящий рассказ',
        'Куда бы я ни пришёл, я начинаю собирать местные слухи и распространять сплетни',
        'Я безнадёжный романтик, всегда ищущий «кого-то особого»',
        'Никто не сердится на меня или возле меня подолгу, так как я могу разрядить любую напряжённую обстановку',
        'Мне нравятся оскорбления, даже если они направлены на меня',
        'Мне обидно, если я не нахожусь в центре внимания',
        'Превыше всего я ценю совершенство',
        'Моё настроение и намерения меняются так же быстро как ноты в музыке'],

    'Народный герой': ['Я сужу других по поступкам, а не словам',
        'Если кто-то в беде, я всегда готов прийти на помощь',
        'Задумав что-то, я прямолинейно иду к цели, невзирая на помехи',
        'У меня обострённое чувство справедливости, и в споре я всегда ищу самого честного решения',
        'Я уверен в своих способностях, и стараюсь внушить такую же уверенность в других',
        'Пусть думают другие. Я предпочитаю действовать',
        'Я неправильно произношу длинные слова, когда пытаюсь выглядеть умнее',
        'Я быстро устаю. Когда уже я найду свою судьб'],

    'Гильдейский ремесленник': ['Я считаю, что всё, что делается, должно делаться правильно. Ничего не могу с этим поделать — я перфекционист',
        'Я сноб, свысока смотрящий на тех, кто не может оценить изящное искусство',
        'Мне всегда нужно знать, как всё вокруг устроено, и как нужно обращаться с другими',
        'У меня много остроумных афоризмов и есть пословицы на любой случай',
        'Я груб с теми, у кого нет моей тяги к честному и справедливому труду',
        'О своей профессии я могу говорить часами',
        'Я не могу легко расставаться с деньгами, и могу сколь угодно долго торговаться',
        'Благодаря работе я прославился, и хочу, чтобы все это ценили. Меня всегда потрясает, когда другие говорят, что не слышали обо мне'],

    Отшельник: ['Я так много прожил в изоляции, что редко говорю, предпочитая жесты и редкое мычание',
        'Я абсолютно безмятежен, даже в самых ужасных ситуациях',
        'У лидера моей общины были высказывания для любой ситуации, и я стремлюсь поделиться этой мудростью',
        'Я ужасно сопереживаю всем, кто страдает',
        'Мне чужд этикет и общественные ожидания',
        'Я связываю всё, что происходит со мной, с грандиозным замыслом космического масштаба',
        'Я часто погружаюсь в свои мысли, отвлекаясь от окружения',
        'Я работаю над великой философской теорией и люблю тех, кто разделяет мои идеи'],

    Благородный: ['Я применяю так много лести, что все, с кем я разговариваю, чувствуют себя самыми чудесными и важными персонами в мире',
        'Обыватели любят меня за доброту и великодушие',
        'Один лишь взгляд на мои регалии заставляет перестать сомневаться в том, что я выше немытого отребья',
        'Я много трачу на то, чтобы выглядеть потрясающе, и по последнему слову моды',
        'Мне не нравится марать руки, и я не хочу умереть в каком-нибудь неподобающем месте',
        'Несмотря на благородное рождение, я не ставлю себя выше народа. У всех нас течёт одинаковая кровь',
        'Потеряв мою милость, обратно её не вернёшь',
        'Оскорбишь меня, и я сотру тебя в порошок, уничтожу твоё имя, и сожгу твои поля'],

    Чужеземец: ['Мной руководит жажда приключений, которая и увела меня из дома',
        'Я слежу за друзьями, как если бы они были слепыми котятами',
        'Однажды я пробежал 40 километров без остановки, чтобы предупредить свой клан о приближающейся орде орков. Если понадобится, я повторю это',
        'Для любой ситуации у меня есть уроки, извлечённые из наблюдений за природой',
        'Я не понимаю богатых и воспитанных. Деньги и хорошие манеры не спасут тебя от голодного волка',
        'Я всё время что-то беру в руки, рассеянно кручу и иногда ломаю',
        'Я гораздо комфортнее чувствую себя среди зверей, чем среди людей',
        'Меня действительно вырастили волки'],

    Мудрец: ['Я использую многосложные слова, создающие впечатление образованности',
        'Я прочитал все книги в величайших библиотеках мира — или, по крайней мере, говорю так',
        'Я привык помогать тем, кто не так умён как я, и терпеливо всем всё объясняю',
        'Больше всего на свете я люблю тайны',
        'Прежде чем принять решение, я выслушаю аргументы обеих спорящих сторон',
        'Я ... говорю ... медленно ... когда разговариваю ... с идиотами, ... то есть ... практически ... всегда',
        'В социальном взаимодействии я ужасно неуклюж',
        'Я убеждён, что остальные постоянно хотят украсть мои тайны'],

    Моряк: ['Друзья знают, что всегда могут на меня положиться',
        'Я усердно тружусь, чтобы потом можно было хорошо отдохнуть',
        'Мне нравится заходить в новые порты и находить друзей за кружечкой эля',
        'Я готов приврать, чтобы получился хороший рассказ',
        'Для меня драка в таверне — отличный способ познакомиться с новым городом',
        'Я никогда не откажусь от пари',
        'Я ругаюсь как банда орков',
        'Мне нравится, когда работа выполнена, особенно если её можно поручить другому'],

    Солдат: ['Я всегда вежлив и почтителен',
        'Меня терзают воспоминания о войне. Не могу забыть то насилие, что мне довелось увидеть',
        'Я потерял много друзей, и теперь с трудом завожу новых',
        'У меня много воодушевляющих и предостерегающих рассказов из военного прошлого, подходящих практически к любой боевой ситуации',
        'Я могу смотреть прямо на адскую гончую, не отводя глаз',
        'Мне нравится быть сильным и крушить вещи',
        'У меня грубое чувство юмора',
        'Я решаю проблемы прямолинейно. Простое решение — лучший путь к успеху'],

    Беспризорник: ['В моих карманах полно побрякушек и объедков',
        'Я задаю очень много вопросов',
        'Я часто забиваюсь в узкие закутки, где никто не сможет добраться до меня',
        'Я всегда сплю, прижавшись спиной к стене или дереву, сжимая узелок со всеми своими пожитками в руках',
        'Я не воспитан, и ем как свинья',
        'Я убеждён, что все, кто проявляют доброту ко мне, на самом деле скрывают злые намерения',
        'Я не люблю мыться',
        'Я прямо говорю о том, на что прочие предпочитают лишь намекнуть, или промолчать']
};

window.ideal = {
    Прислужник: {
        Традиции: { Характер: 'законный', Описание: 'Мы должны сохранить и защитить древние традиции богослужения и совершения священных таинств' },
        Милосердие: { Характер: 'добрый', Описание: 'Несмотря на затраченные усилия, я всегда пытаюсь помочь тем, кто в нужде' },
        Перемены: { Характер: 'хаотичный', Описание: 'Мы должны помогать привносить в мир перемены, которых наши божества постоянно жаждут' },
        Власть: { Характерж: 'законный', Описание: 'Я надеюсь однажды подняться на самую вершину своей религиозной иерархии' },
        Вера: { Харктер: 'законный', Описание: 'Я верю, что моё божество направляет меня. И что усердная работа всегда будет вознаграждена' },
        Стремление: { Характер: 'любой', Описание: 'Я ищу шанс доказать, что я достоин благословления своего божества, совершая деяния в соответствии с его учениями' }

    },
    Шарлатан: {
        Независимость: { Характер: 'хаотичный', Описание: 'Мы должны сохранить и защитить древние традиции богослужения и совершения священных таинств' },
        Честность: { Характер: 'законный', Описание: 'Я никогда не выберу своей жертвой людей, которые находятся в бедственном положении' },
        Милосердие: { Характер: 'добрый', Описание: 'Я распределяю добытые деньги между людьми, которые в них действительно нуждаются' },
        Креативность: { Характер: 'хаотичный', Описание: 'Я никогда не иду проторённой дорожкой' },
        Дружба: { Характер: 'добрый', Описание: 'Материальные блага приходят и уходят, а друзья остаются' },
        Стремление: { Характер: 'любой', Описание: 'Я собираюсь стать кем-то значимым в этой жизни' }
    },
    Преступник: {
        Честь: { Характер: 'законный', Описание: 'Я не краду у своих «коллег»' },
        Свобода: { Характер: 'хаотичный', Описание: 'Любые оковы должны быть сломлены, как и те, кто их выковал' },
        Милосердие: { Характер: 'добрый', Описание: 'Я краду у богачей, чтобы помочь людям в беде' },
        Жадность: { Характер: 'злой', Описание: 'Я сделаю всё что угодно, лишь бы разбогатеть' },
        Друзья: { Характер: 'нейтральный', Описание: 'Я верен не каким-то там идеалам, но своим друзьям. А все остальные могут катиться к чертям' },
        Искупление: { Характер: 'добрый', Описание: 'В каждом есть что-то хорошее' }
    },
    Артист: {
        Красота: { Характер: 'добрый', Описание: 'Выступая, я делаю мир лучше' },
        Традиции: { Характер: 'законный', Описание: 'Рассказы, легенды и песни прошлого не должны забываться, так как они учат нас тому, кто мы такие' },
        Творчество: { Характер: 'хаотичный', Описание: 'Миру нужны новые идеи и смелые действия' },
        Жадность: { Характер: 'злой', Описание: 'Я занимаюсь всем этим ради денег и славы' },
        Народ: { Характер: 'нейтральный', Описание: 'Мне нравится видеть улыбки на лицах во время выступления. В этом-то всё дело' },
        Честность: { Характер: 'любой', Описание: 'Искусство должно отражать душу; оно должно идти изнутри и показывать, чем мы являемся' }
    },
    'Народный герой': {
        Уважение: { Характер: 'добрый', Описание: 'Нужно относиться друг к другу с достоинством и уважением' },
        Справедливость: { Характер: 'законный', Описание: 'Закон не должен делать ни для кого исключений, и никто не может стать выше закона' },
        Свобода: { Характер: 'хаотичный', Описание: 'Тираны не должны угнетать народ' },
        Мощь: { Характер: 'злой', Описание: 'Если я стану сильным, я смогу брать то, что захочу — и я это заслуживаю' },
        Искренность: { Характер: 'нейтральный', Описание: 'Нет ничего хорошего в том, что ты притворяешься тем, кем не являешься' },
        Судьба: { Характер: 'любой', Описание: 'Никто и ничто не собьёт меня с пути к высшему призванию' }

    },
    'Гильдейский ремесленник': {
        Сообщество: { Характер: 'законный', Описание: 'Все цивилизованные народы обязаны укреплять сообщество и обеспечивать безопасность цивилизации' },
        Великодушие: { Характер: 'добрый', Описание: 'Талант был вручён мне, чтобы я использовал его на благо всего мира' },
        Свобода: { Характер: 'хаотичный', Описание: 'Все должны быть свободны, чтобы жить так, как хочется им' },
        Жадность: { Характер: 'злой', Описание: 'Я просто занимаюсь этим из-за денег' },
        Народ: { Характер: 'нейтральный', Описание: 'Я предан своему народу, а не идеям' },
        Стремление: { Характер: 'любой', Описание: 'Познаешь себя — познаешь всё вокруг' }

    },
    Отшельник: {
        'Всеобщее благо': { Характер: 'добрый', Описание: 'Мои дары предназначены для всех, я не должен использовать их в одиночку' },
        Логика: { Характер: 'законный', Описание: 'Эмоции не должны затмевать наше видение того, что истинно и справедливо, а также наше логическое мышление' },
        Свободомыслие: { Характер: 'хаотичный', Описание: 'Изыскания и любопытство — столпы прогресса' },
        Сила: { Характер: 'злой', Описание: 'Уединение и созерцание — путь к мистической и магической силе' },
        'Сам живи и другим не мешай': { Характер: 'нейтральный', Описание: 'Вмешиваясь в дела других, причиняешь одни лишь проблемы' },
        Самопознание: { Характер: 'любой', Описание: 'Познаешь себя — познаешь всё вокруг' }

    },
    Благородный: {
        Уважение: { Характер: 'добрый', Описание: 'Уважение — мой долг. Кем бы ты ни был, к другим нужно относиться с уважением, невзирая на их происхождение' },
        Ответственность: { Характер: 'законный', Описание: 'Я должен уважать тех, кто выше меня, а те, кто ниже меня, должны уважать меня' },
        Независимость: { Характер: 'хаотичный', Описание: 'Я должен доказать, что справлюсь и без заботы своей семьи' },
        Власть: { Характер: 'злой', Описание: ' Если соберу много власти, никто не посмеет указывать мне, что делать' },
        Семья: { Характер: 'любой', Описание: 'Настоящая кровь гуще' },
        'Благородный долг': { Характер: 'добрый', Описание: 'Я должен защищать тех, кто ниже меня, и заботиться о них' }
    },
    Чужеземец: {
        Перемены: { Характер: 'хаотичный', Описание: 'Жизнь как времена года, постоянно меняется, и мы должны меняться вместе с ней' },
        Процветание: { Характер: 'добрый', Описание: '. Каждый должен поступать так, чтобы всё племя было счастливо' },
        Честь: { Характер: 'законный', Описание: ' Если я обесчещу себя, я обесчещу весь свой клан' },
        Мощь: { Характер: 'злой', Описание: 'Самый сильный имеет право приказывать' },
        Природа: { Характер: 'нейтральный', Описание: 'Мир природы гораздо важнее построек цивилизации' },
        Слава: { Характер: 'любой', Описание: 'Я должен завоёвывать славу в сражениях, для себя и своего клана' }
    },
    Мудрец: {
        Знание: { Характер: 'нейтральный', Описание: 'Путь к силе и самосовершенствованию лежит в знаниях' },
        Красота: { Характер: 'добрый', Описание: 'Красота ведёт нас к тому, что истинно' },
        Логика: { Характер: 'законный', Описание: 'Эмоции не должны подавлять логическое мышление' },
        Свобода: { Характер: 'хаотичный', Описание: 'Ничто не должно сдерживать бесконечные варианты всех возможных исходов' },
        Власть: { Характер: 'злой', Описание: 'Знания — путь к власти и контролю' },
        Самосовершенствование: { Характер: 'любой', Описание: ' Цель жизни в познании — самосовершенствование' }

    },
    Моряк: {
        Уважение: { Характер: 'добрый', Описание: 'Корабль держится целым благодаря взаимному уважению капитана и экипажа' },
        Справедливость: { Характер: 'законный', Описание: 'Все мы делаем одно дело, и награду должны делить поровну' },
        Свобода: { Характер: 'хаотичный', Описание: 'Море это свобода — свобода идти куда угодно и делать что угодно' },
        Власть: { Характер: 'злой', Описание: 'Я хищник, а другие корабли в море — моя добыча' },
        Команда: { Характер: 'нейтральный', Описание: 'Я предан экипажу, а не идеалам' },
        Стремление: { Характер: 'любой', Описание: 'Когда-нибудь у меня будет свой корабль, и я проложу курс куда захочу' }
    },
    Солдат: {
        'Высшее благо': { Характер: 'хаотичный', Описание: 'Наш жребий — отдать свои жизни ради других' },
        Ответственность: { Характер: 'добрый', Описание: 'Я делаю что должен, и подчиняюсь вышестоящим' },
        Независимость: { Характер: 'законный', Описание: 'Если слепо следовать приказам, попадаешь под пяту тирании' },
        Мощь: { Характер: 'злой', Описание: 'В жизни и войне побеждает сильнейший' },
        'Живи и не мешай другим': { Характер: 'нейтральный', Описание: ' Идеалы не стоят того, чтобы ради них убивать или воевать' },
        Нация: { Характер: 'любой', Описание: 'Мой город, нация и народ — вот что самое главное' }

    },
    Беспризорник: {
        Уважение: { Характер: 'добрый', Описание: 'Все люди, богатые ли они, или бедные, достойны уважения' },
        Общность: { Характер: 'законный', Описание: 'Вы должны заботиться друг о друге, ведь никто другой этого не сделает' },
        Перемены: { Характер: 'хаотичный', Описание: 'Убогие возвысятся, а великие падут. Перемены в природе вещей' },
        Возмездие: { Характер: 'злой', Описание: 'Нужно показать богачам, чего стоит жизнь и смерть в трущобах' },
        Люди: { Характер: 'нейтральный', Описание: 'Я помогаю тем, кто помогает мне. Это позволяет нам выжить' },
        Устремление: { Характер: 'любой', Описание: 'Я готов доказать, что достоин лучшей жизни' }
    }
};

window.weakness = {
    Прислужник: ['Я не проявляю снисходительности к другим, но к себе я ещё более суров',
        'Я слишком доверяю тем, кто обладает властью в моей церковной иерархии',
        'Моя набожность зачастую приводит к тому, что я слепо верю всем, кто исповедует мою религию',
        'Я непреклонен в своих убеждениях',
        'Я настороженно отношусь к незнакомцам и всегда жду от них худшего',
        'Однажды выбрав цель, я становлюсь одержимым ею в ущерб всему прочему в своей жизни'],

    Шарлатан: ['Я не могу устоять перед смазливой мордашкой',
        'Я постоянно в долгах. Я трачу свои нечестно нажитые деньги быстрее, чем их добываю',
        'Я убеждён в том, что никто не сможет одурачить меня так, как я одурачиваю других',
        'Я слишком жаден до золота. И не могу противиться риску, если в этом замешаны деньги',
        'Я не могу устоять и не облапошить людей, стоящих гораздо выше, чем я',
        'Я ненавижу себя за это, но я сбегу, чтобы спасти свою собственную шкуру, если вдруг запахнет жареным'],

    Преступник: ['Когда я вижу что-то ценное, я не могу думать ни о чём другом, кроме мыслей о том, как это украсть',
        'Когда я становлюсь перед выбором между друзьями и деньгами, я обычно выбираю деньги',
        'Если есть какой-то план, я его наверняка забуду. А если не забуду, то попросту проигнорирую',
        'У меня есть привычка, которая выдаёт меня, когда я вру',
        'Я поджимаю хвост и убегаю, когда всё складывается плохо',
        'Невинный человек находится в тюрьме из-за преступления, что я совершил. Меня это не беспокоит'],

    Артист: ['Я пойду на всё ради славы и известности',
        'Не могу устоять перед смазливым личиком',
        'Я не могу вернуться домой из-за скандала. Неприятности такого рода словно преследуют меня',
        'Однажды я высмеял дворянина, который всё ещё хочет оторвать мне голову. Это была ошибка, но я могу повторить её ещё неоднократно',
        'Я не могу скрывать свои истинные чувства. Острый язык всегда приносит мне неприятности',
        'Я очень стараюсь исправиться, но друзьям не стоит на меня полагаться'],

    'Народный герой': ['Тиран, правящий моими землями, ни перед чем не остановится, лишь бы убить меня',
        'Я слепо верю в своё предназначение, и не замечаю ни своих недостатков, ни смертельных опасностей',
        'Те, кто знают меня молодым, знают и мою самую постыдную тайну, так что я никогда не вернусь домой',
        'Я беззащитен перед пороками большого города, особенно перед пьянством',
        'Я тайно считаю, что было бы хорошо стать тираном, правящим землями',
        'Я не доверяю союзникам'],

    'Гильдейский ремесленник': ['Я сделаю всё что угодно, чтобы заполучить что-то редкое или очень ценное',
        'Мне всегда кажется, что меня пытаются обжулить',
        'Никто не должен знать, что я однажды украл деньги из казны гильдии',
        'Мне всегда мало того, что у меня есть — всегда нужно больше',
        'Я готов убить ради получения благородного титула',
        'Я ужасно завидую тем, кто может превзойти мой труд. Куда бы я ни пошёл, меня окружают конкуренты'],

    Отшельник: ['Теперь, вернувшись в мир, я слишком сильно увлекаюсь его радостями',
        'Я скрываю тёмные, кровожадные мысли, не ушедшие ни после изоляции, ни после медитаций',
        'Я категоричен в мыслях и подходе к жизни',
        'Я позволяю жажде победить в споре становиться сильнее дружбы и гармонии',
        'Я слишком сильно рискую, стремясь найти утраченные частички знаний',
        'Мне нравится хранить тайны, и я ими ни с кем не делюс'],

    Благородный: ['Я втайне считаю всех ниже себя',
        'Я скрываю позорную тайну, которая может уничтожить мою семью',
        'Я слишком часто слышал завуалированные оскорбления и угрозы, и потому быстро впадаю в гнев',
        'У меня неустанная страсть к плотским удовольствиям',
        'Весь мир вращается вокруг меня',
        'Я часто навлекаю позор на свою семью словами и действиями'],

    Чужеземец: ['Я слишком пристрастен к элю, вину и прочим спиртным напиткам',
        'В жизни на полную катушку нет места осторожности',
        'Я помню все полученные оскорбления и таю злобу на всех обидчиков',
        'Я с трудом доверяю представителям других рас, племён и сообществ',
        'На любые неурядицы я почти всегда отвечаю насилием',
        'Не думайте, что я буду спасать тех, кто не может сам о себе позаботиться. Сильные должны процветать, а слабые погибают, и это нормально'],

    Мудрец: ['Меня легко отвлечь, пообещав информацию',
        'Увидев демона, большинство закричит и убежит. Я же остановлюсь и буду изучать его анатомию',
        'Для раскрытия древних тайн можно пожертвовать современной цивилизацией',
        'Я избегаю очевидных решений, пользуясь замысловатыми',
        'Я говорю, не обдумывая слова, чем часто оскорбляю других',
        'Ради спасения своей или чьей-либо ещё жизни я выболтаю любую тайн'],

    Моряк: ['Я выполняю приказы, даже если считаю, что они несправедливые',
        'Я наплету с три короба, лишь бы не делать лишнюю работу',
        'Когда кто-то бросает мне вызов, я никогда не отступлюсь, какой бы опасной не была ситуация',
        'Начав пить, я не могу остановиться',
        'Не могу ничего поделать, но деньги у меня не задерживаются',
        'Моя гордость меня когда-нибудь погубит'],

    Солдат: ['Одно чудовище, с которым мы когда-то сразились, до сих пор заставляет меня дрожать от страха',
        'Я мало уважаю тех, кто не доказал, что является достойным воителем',
        'В одном сражении я совершил ужасную ошибку, стоившую жизни многим — и я сделаю что угодно, лишь бы это оставалось в тайне',
        'Ярость к врагам ослепляет меня и делает безрассудным',
        'Я подчиняюсь закону, даже если закон вызывает страдания',
        'Я скорее съем свой доспех, чем признаюсь, что был неправ'],

    Беспризорник: ['Если я в меньшинстве, то я убегу из битвы',
        'Золото в любом виде выглядит для меня как большая куча денег, и я сделаю всё, чтобы его у меня стало больше',
        'Я никогда не доверяю полностью кому бы то ни было, кроме себя',
        'Я предпочту убить кого-нибудь во сне, нежели в честном поединке',
        'Это не воровство, если я взял то, в чём нуждаюсь больше, чем кто-либо другой',
        'Те, кто не могут позаботиться о себе, получат то, что заслужили']
};
