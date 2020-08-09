import React, { Component } from 'react';
import Quiz from './Quiz';


const birdsData = {
  train: [
    {
      id: 1,
      stage: 'Разминка',
      name: 'Ворон',
      species: 'Corvus corax',
      description: 'Ворон – крупная птица. Длина тела достигает 70 сантиметров, размах крыльев – до полутора метров. Вороны населяют окрестности Тауэра. В Англии бытует поверье, что в день, когда черные вороны улетят от Тауэра, монархия рухнет.',
      image: 'https://live.staticflickr.com//65535//49298804222_474cfe8682.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/XIQVMQVUPP/XC518684-Grands%20corbeaux%2009012020%20Suzon.mp3',
    },
    {
      id: 2,
      stage: 'Разминка',
      name: 'Журавль',
      species: 'Grus grus',
      description: 'Звуки, издаваемые журавлем, похожи на звонкое «кур-лы – кур-лы». Журавли чаще всего поют дуэтом – одна птица начинает запев со слога «кур», а вторая подхватывает «лы». Если птица поёт одна, то она издает только звук «кур».',
      image: 'https://live.staticflickr.com/65535/49221158846_b0b69a58f1.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/BLMSIUFTFU/XC512582-190604_1087_Grus_tok.mp3',
    },
    {
      id: 3,
      stage: 'Разминка',
      name: 'Ласточка',
      species: 'Delichon urbicum',
      description: 'Для ласточек характерно негромкое щебетание. Песни ласточек не смолкают на протяжении всего лета. Исследователи различают у птиц до 6 щебечущих звуков: «вит», «ви-вит», «чивит», «чиривит» и т.п. Ласточки любят петь дуэтом.',
      image: 'https://live.staticflickr.com//65535//48539007512_5029d2a9a0.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/VOLIQOYWKG/XC489247-190724_09.10h_huiszwaluw_biesbosch_amaliahoeve_roep_100%2Bex_fouragerend_gezien_%20%282%29.mp3',
    },
    {
      id: 4,
      stage: 'Разминка',
      name: 'Козодой',
      species: 'Caprimulgus europaeus',
      description: 'Козодой – неприметная птица, известная благодаря своему голосу. Песня козодоя звучит как монотонная трель похожая на тарахтение мотоцикла. Такое дребезжание слышно от заката до рассвета, его тональность, частота и громкость изменяются. ',
      image: 'https://live.staticflickr.com/65535/48456345286_dbc8530027.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/VOLIQOYWKG/XC486956-190623_22.37h_nachtzwaluw_rechte%20heide_zang_ad%20_2ex_gezien_.mp3',
    },
    {
      id: 5,
      stage: 'Разминка',
      name: 'Кукушка',
      species: 'Cuculus canorus',
      description: 'Кукушку назвали так из-за особенностей ее песен. Звонкое «ку-ку» не спутать ни с какой другой птицей. Кукушки не строят гнезда, их потомство выращивают другие виды пернатых, которым кукушки подбрасывают свои яйца.',
      image: 'https://live.staticflickr.com/65535/48377838151_e15f430ec1.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/VOLIQOYWKG/XC501461-190616_08.13h_koekoek_brabantse%20biesbosch%20jantjesplaat_roep_1%20ex_ad%20m_ter%20plaatse%20zingend_gezien_.mp3',
    },
    {
      id: 6,
      stage: 'Разминка',
      name: 'Синица',
      species: 'Parus major',
      description: 'В щебетании синиц различают более 40 различных звуковых сочетаний. Поют они практически круглый год, немного затихая только зимой. Синицы настоящие санитары леса. Одна пара синиц в период гнездования оберегает от вредителей десятки деревьев.',
      image: 'https://live.staticflickr.com//65535//49366042493_c48c81d58d.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/RFGQDPLDEC/XC518417-Kj%C3%B8ttmeis%20XC%20Helg%C3%B8ya%20Elias%20A.%20Ryberg20200108133922_079.mp3',
    },
  ],
  pop: [
    {
      id: 1,
      stage: 'Pop music',
      name: 'Pink',
      species: 'So what',
      description: 'Алиша Бет Мур (англ. Alecia Beth Moore, 8 сентября 1979, Дойлстаун, Пеннсильвания, США), более известная под псевдонимом Пинк (англ. P!nk) — американская певица, автор песен и актриса.',
      image: 'https://lastfm.freetls.fastly.net/i/u/300x300/65ded6ef9498d16a0358bbc2e483d2bc.webp',
      audio: 'https://github.com/a-velesov/songbird/raw/songbird/src/assets/music/pop/P!nk%20-%20So%20What.mp3',
    },
    {
      id: 2,
      stage: 'Pop music',
      name: 'Shakira',
      species: 'Whenever, Whenever',
      description: 'Шаки́ра, полное имя Шаки́ра Исабе́ль Меба́рак Рипо́лль, род. 2 февраля 1977, Барранкилья) — ливано-колумбийская певица, танцовщица, автор песен, композитор, музыкальный продюсер и филантроп. В 16 лет переехала в США, чтобы начать карьеру певицы.',
      image: 'https://lastfm.freetls.fastly.net/i/u/300x300/621acc94a58648479559b431de3bd5ea.webp',
      audio: 'https://github.com/a-velesov/songbird/raw/songbird/src/assets/music/pop/shakira-whenever-wherever.mp3',
    },
    {
      id: 3,
      stage: 'Pop music',
      name: 'Lady Gaga',
      species: 'Sour Candy',
      description: 'Стефани Джоанн Анжелина Джерманотта (Stefani Joanne Angelina Germanotta) родилась 28 марта 1986 года. Известная под сценическим именем Lady GaGa (Леди ГаГа), певица и автор песен из Америки.',
      image: 'https://lastfm.freetls.fastly.net/i/u/300x300/5fde755381b225f7ec00b4ae49702554.webp',
      audio: 'https://github.com/a-velesov/songbird/raw/songbird/src/assets/music/pop/Lady%20Gaga%2C%20BLACKPINK%20-%20Sour%20Candy.mp3',
    },
    {
      id: 4,
      stage: 'Pop music',
      name: 'Britney Spears',
      species: 'Toxic',
      description: 'Бритни Джин Спирс родилась 2 декабря 1981 года в Кенвуде, маленьком городе в Луизиане. Американская поп-певица, актриса, танцовщица, автор песен, обладательница премии «Грэмми».',
      image: 'https://lastfm.freetls.fastly.net/i/u/300x300/98b1262a77b13c1ea74dfcaca0f5ea38.webp',
      audio: 'https://github.com/a-velesov/songbird/raw/songbird/src/assets/music/pop/Britney%20Spears%20-%20Toxic.mp3',
    },
    {
      id: 5,
      stage: 'Pop music',
      name: 'Rihanna',
      species: 'Umbrella',
      description: 'Риа́нна; полное имя — Ро́бин Риа́нна Фе́нти — барбадосская певица, актриса, музыкальный продюсер, модный дизайнер и филантроп.',
      image: 'https://lastfm.freetls.fastly.net/i/u/300x300/92f7745cbdc5a5d6e0c9e9c1dd00c1f6.webp',
      audio: 'https://github.com/a-velesov/songbird/raw/songbird/src/assets/music/pop/Rihanna_Umbrella-ft-JAY-Z.mp3',
    },
    {
      id: 6,
      stage: 'Pop music',
      name: 'Madonna',
      species: 'Hung Up',
      description: 'Мадо́нна Луи́з Чикко́не — американская автор-исполнительница, поп-певица, танцовщица, музыкальный продюсер, а также актриса, режиссёр и детская писательница.',
      image: 'https://lastfm.freetls.fastly.net/i/u/300x300/335759a7fa6c810b7e14e57f025eb551.webp',
      audio: 'https://github.com/a-velesov/songbird/raw/songbird/src/assets/music/pop/madonna-hung-up.mp3',
    },
  ],
  eurovision: [
    {
      id: 1,
      stage: 'Евровидение',
      name: 'Представитель России',
      species: 'Сергей Лазарев',
      description: 'В дикой природе насчитывается 450 видов зябликов. Зимой зяблики ведут стайный образ жизни. Иногда в их семьях можно увидеть воробьев. Запевают зяблики весной, с наступлением брачного периода. Их пение – это заливистые многоминутные рулады.',
      image: 'https://live.staticflickr.com/65535/49143150817_2d3a2f6c1e.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC512407-150622_03%20zi%C4%99ba%20%282%29.mp3',
    },
    {
      id: 2,
      stage: 'Евровидение',
      name: 'Представитель Белоруссии',
      species: 'Loxia curvirostra',
      description: 'Клестов называют «рождественскими» птицами. В естественных условиях они дают потомство зимой – в январе. Эти птицы утепляют свои гнезда мхом и шерстью животных, потому птенцам не холодно. В поисках шишек клесты могут улетать за 3500 км от гнезда.',
      image: 'https://live.staticflickr.com//65535//49365470123_f2de66bb35.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/OTVUCEGYZN/XC495381-Kruisbek%20roep%20NHD%20290619.mp3',
    },
    {
      id: 3,
      stage: 'Евровидение',
      name: 'Представитель Украины',
      species: 'Melovin',
      description: 'Горлица обитает в смешанных и широколиственных лесах, а также в городских парках и поселках. Птицы часто выбирают места жизни рядом с человеком и легко привыкают к людям.',
      image: 'https://live.staticflickr.com/65535/48063004977_84252f9ceb.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC324106-Turkawka_Streptopelia_turtur_Poland_Jarek_Matusiak_2011625_07.mp3',
    },
    {
      id: 4,
      stage: 'Евровидение',
      name: 'Представитель Нидерландов',
      species: 'Duncan Laurence',
      description: 'Дятел – заметная и шумная птица, часто живет рядом с человеком. С середины января до конца июня можно услышать «барабанную дробь» дятлов – трель от вибрации веток под быстрыми ударами клюва птицы. В хорошую погоду дробь слышна в радиусе 1,5 км.',
      image: 'https://live.staticflickr.com/65535/49339376578_e933426455.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC518928-AB-017%20dzi%C4%99cio%C5%82%20du%C5%BCy%20agresja%20%282%29.mp3',
    },
    {
      id: 5,
      stage: 'Евровидение',
      name: 'Представитель Швеции',
      species: 'Loreen',
      description: 'Удоды предпочитают жить на открытых ландшафтах с отдельными деревьями или рощами. Наиболее удобными для птицы являются лесостепь и саванна. Удод может выбирать места жительства рядом с человеком: пастбища, виноградники, фруктовые сады.',
      image: 'https://live.staticflickr.com//65535//49226383598_6f8be86a06.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC477326-dudek%20%282%29.mp3',
    },
    {
      id: 6,
      stage: 'Евровидение',
      name: 'Представитель Норвегии',
      species: 'Александр Рыбак',
      description: 'Стрижа можно увидеть практически в каждом уголке планеты. Они обитают как в лесных зонах, так и на открытых местностях. Живут стрижи крупными стаями. Большие колонии этих птиц можно увидеть в городах или на прибрежных скалах.',
      image: 'https://live.staticflickr.com//65535//48386150031_7b749df74b.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/TMUAWSDHDJ/XC511871-G.mp3',
    },
  ],
  rock: [
    {
      id: 1,
      stage: 'Rock',
      name: 'Linkin Park',
      species: 'In the End',
      description: 'Linkin Park — популярная американская альтернативная рок-группа. Основана под названием SuperXero, в 1996 году была переименована в Xero, позже использовались названия Hybrid Theory и Linkin Park.',
      image: 'https://lastfm.freetls.fastly.net/i/u/300x300/bc2b94f044e249328f769d1bf3e23727.webp',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC462158-Skowronek_Alauda_arvensis_Poland_Jarek_Matusiak_%20-006%20skowronek%20%282%29.mp3',
    },
    {
      id: 2,
      stage: 'Rock',
      name: 'AC/DC',
      species: 'Back in Black',
      description: 'AC/DC - (сокр. от англ. alternating current/direct current — переменный/постоянный ток) — австралийская рок-группа, сформированная в Сиднее, Австралия в ноябре 1973 года братьями Малькольмом и Ангусом Янгами.',
      image: 'https://lastfm.freetls.fastly.net/i/u/300x300/59a73cd6307323070398a6141c3e3274.webp',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/HILVWSADVL/XC513809-R07_0052%20Thrush%20Nightingale%20Snipe.mp3',
    },
    {
      id: 3,
      stage: 'Rock',
      name: 'Nirvana',
      species: 'Smells Like Teen Spirit',
      description: 'Nirvana - американская рок-группа, созданная вокалистом и гитаристом Куртом Кобейном и басистом Кристом Новоселичем в Абердине, штат Вашингтон, в 1987 году.',
      image: 'https://lastfm.freetls.fastly.net/i/u/300x300/151972b1b5bb82380184f1104fb74d9f.webp',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/GYAUIPUVNM/XC515519-2020.01.01_17.24_01.MP3',
    },
    {
      id: 4,
      stage: 'Rock',
      name: 'Arctic Monkeys',
      species: 'R U Mine?',
      description: 'Молодой квартет Arctic Monkeys взял ничего не подозревавшую Британию штурмом в начале 2006 года. Практически первыми добились крупного успеха без поддержки традиционных СМИ, радио и телевидения, продемонстрировав эффективность Интернета, как способа продвижения новой музыки',
      image: 'https://lastfm.freetls.fastly.net/i/u/300x300/1a5ef2bb4fe3a89ee25f5a592ad5b49e.webp',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/GYAUIPUVNM/XC491801-2019.07.07_06.28_01.mp3',
    },
    {
      id: 5,
      stage: 'Rock',
      name: 'The Rolling Stones',
      species: 'Paint It Black',
      description: 'The Rolling Stones (англ. Роллинг Стоунз, «Перекати-поле») — британская рок-группа, образовавшаяся в 1962 году.  Группа по сей день остаётся абсолютно оригинальной, узнаваемой с первых аккордов. ',
      image: 'https://lastfm.freetls.fastly.net/i/u/300x300/2408eaf8adb441de98b1e24648f0ce0b.webp',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC517421-AB-004%20%282%29%20jemio%C5%82uszka.mp3',
    },
    {
      id: 6,
      stage: 'Rock',
      name: 'Foo Fighters',
      species: 'Everlong',
      description: 'Foo Fighters — американская пост-гранжевая рок-группа, образованная бывшим участником Nirvana Дейвом Гролом в 1995 году. Название позаимствовано из сленга американских лётчиков Второй мировой войны, которые называли так (foo-истребители) неопознанные летающие объекты.',
      image: 'https://lastfm.freetls.fastly.net/i/u/300x300/d91769b38237c84fa0745fc18d5da361.webp',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/VOLIQOYWKG/XC489265-190724_07.58h_putter_biesbosch_%20boompjes%20langs%20open%20water_zang_1ex_ad_niet%20gezien_.mp3',
    },
  ],
  classic: [
    {
      id: 1,
      stage: 'Classic',
      name: 'Wolfgang Amadeus Mozart',
      species: 'Requiem, Lacrimosa',
      description: 'Вольфганг Амадей Моцарт (27 января 1756 — 5 декабря 1791) — один из величайших композиторов мира, один из основоположников классической музыки. Был также виртуозным скрипачом, клавесинистом, органистом, дирижёром.',
      image: 'https://lastfm.freetls.fastly.net/i/u/300x300/74e6ba453922f58083120109c68aa75e.webp',
      audio: 'https://github.com/a-velesov/songbird/raw/songbird/src/assets/music/classic/mocart_rekviem.mp3',
    },
    {
      id: 2,
      stage: 'Classic',
      name: 'Ludwig van Beethoven',
      species: 'Sonata No. 14',
      description: 'Людвиг ван Бетховен (17 декабря 1770 - 26 марта 1827)немецкий композитор, пианист и дирижёр, последний представитель «венской классической школы». Бетховен — ключевая фигура классической музыки в период между классицизмом и романтизмом,',
      image: 'https://lastfm.freetls.fastly.net/i/u/300x300/3cab989bfdb7440cb2d0235d706d3f47.webp',
      audio: 'https://github.com/a-velesov/songbird/raw/songbird/src/assets/music/classic/Beethoven-Sonata-No-14.mp3',
    },
    {
      id: 3,
      stage: 'Classic',
      name: 'Sebastian Bach',
      species: 'Cello Suite No.1',
      description: 'Иоганн Себастьян Бах - великий немецкий композитор XVIII века. При жизни композитор не получил заслуженного признания как сочинитель, но был известен как исполнитель и, особенно, как импровизатор.',
      image: 'https://lastfm.freetls.fastly.net/i/u/300x300/8f0a2d39b5f244689984e83f73b8b93e.webp',
      audio: 'https://github.com/a-velesov/songbird/raw/songbird/src/assets/music/classic/Symphoniacs%20-%20Bach%20Cello%20Suite%20No.1.mp3',
    },
    {
      id: 4,
      stage: 'Classic',
      name: 'Antonio Vivaldi',
      species: 'The Four Seasons',
      description: 'Анто́нио Лучо Вива́льди (4 марта 1678 — 28 июля 1741) — итальянский композитор, скрипач, педагог, дирижёр. Вивальди считается одним из крупнейших представителей итальянского скрипичного искусства XVIII века, при жизни получил широкое признание во всей Европе.',
      image: 'https://lastfm.freetls.fastly.net/i/u/300x300/6894210ca4d94bffa8245523e6241eda.webp',
      audio: 'https://github.com/a-velesov/songbird/raw/songbird/src/assets/music/classic/Antonio%20Vivaldi%20-%20Four%20Seasons.mp3',
    },
    {
      id: 5,
      stage: 'Classic',
      name: 'Johannes Brahms',
      species: 'Hungarian Dance No.4',
      description: 'Иога́ннес Брамс (1833 — 1897) — немецкий композитор и пианист, один из академических представителей романтизма, склонный к классицизму.',
      image: 'https://lastfm.freetls.fastly.net/i/u/300x300/4015e60b06084d3a9fec8f69ee849f90.webp',
      audio: 'https://github.com/a-velesov/songbird/raw/songbird/src/assets/music/classic/Johannes%20Brahms%20-%20Hungarian%20Dance%20No.4.mp3',
    },
    {
      id: 6,
      stage: 'Classic',
      name: 'Pyotr Tchaikovsky',
      species: 'Swan Lake',
      description: 'Пётр Ильич Чайковский (25 апреля 1840 — 25 октября 1893) — русский композитор, дирижёр, педагог, музыкально-общественный деятель. В музыке Чайковского нашли претворение глубокие процессы духовной жизни, сомнение, отчаяние и порыв к идеалу',
      image: 'https://lastfm.freetls.fastly.net/i/u/300x300/7642f34cea61092c54e525d35157523d.webp',
      audio: 'https://github.com/a-velesov/songbird/raw/songbird/src/assets/music/classic/pyotr-ilyich-tchaikovsky-swan-lake.mp3',
    },
  ],
  rap: [
    {
      id: 1,
      stage: 'Rap',
      name: 'Eminem',
      species: 'Godzilla',
      description: 'Настоящее имя - Маршалл Брюс Мэтерс III. Американский рэпер, музыкальный продюсер, композитор и актёр. Эминем является одним из самых продаваемых музыкальных артистов в мире, а также самым продаваемым артистом 2000-х',
      image: 'https://lastfm.freetls.fastly.net/i/u/300x300/95551c45f42b4ee8b59c20346e1ac4ff.webp',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/WOEAFQRMUD/XC293087-Diomedea%20exulans151120_T254.mp3',
    },
    {
      id: 2,
      stage: 'Rap',
      name: 'Kanye West',
      species: 'Ghost Town',
      description: 'Канье Омари Уэст (род. 8 июня 1977 года в Атланте, штат Джорджия, США) - американский рэппер, певец и продюсер. Уэст выиграл 21 премию «Грэмми», благодаря чему он является одним из рекордсменов по числу выигранных номинаций',
      image: 'https://lastfm.freetls.fastly.net/i/u/300x300/68ce5e2c7e387298dae90a8ac3b8582f.webp',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/YHKQPPJDVP/XC411507-171217_1491%20BF%20Booby%205ft%20IDLP%201230%20mp3%20amp.mp3',
    },
    {
      id: 3,
      stage: 'Rap',
      name: 'Snoop Dogg',
      species: 'Young, Wild & Free',
      description: 'Настоящее имя Calvin Broadus, (родился 20 октября 1971 г.) — американский рэппер, продюсер и актер. Снуп хорошо известен за свой стиль исполнения — ленивый, подчеркнуто спокойный, с растянутыми словами и ритмичной лирикой.',
      image: 'https://lastfm.freetls.fastly.net/i/u/300x300/bf912d513f2548bd9ed21722fe14b9b1.webp',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/XQEVNREHJY/SHEARWATER%20Christmas%20Island_04_Motu_Isla%20de%20Pascua-Easter%20Island_CH_4MAR03_Alvaro%20Jaramillo.mp3',
    },
    {
      id: 4,
      stage: 'Rap',
      name: '2Pac',
      species: 'Changes',
      description: 'Тупак Амару Шакур(16 июня 1971 — 13 сентября 1996). Большинство песен Шакура повествуют о тяжёлой жизни в гетто, бедности, расизме и проблемах современного общества.2Pac внесен в «Книгу Рекордов Гиннеса» как самый успешный рэппер всех времен',
      image: 'https://lastfm.freetls.fastly.net/i/u/300x300/ba067de354c045c78b8376169ae1079e.webp',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/XAMHIHFTZG/XC331138-call1.mp3',
    },
    {
      id: 5,
      stage: 'Rap',
      name: 'Drake',
      species: 'Toosie Slide',
      description: 'Обри "Дрейк" Грэм (род. 24 октября 1986 года). Канадский рэпер, певец, автор песен, музыкальный продюсер, актёр и предприниматель. Большинство работ Дрейка включает в себя элементы как рэпа, так и пения, что сделало его уникальным как артиста.»',
      image: 'https://lastfm.freetls.fastly.net/i/u/300x300/1d4ccfe034d2f7b880146f5523f3987d.webp',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/OOECIWCSWV/XC449827-LS100829%20King%20Penguin%20call%20A.mp3',
    },
    {
      id: 6,
      stage: 'Rap',
      name: 'JAY-Z',
      species: 'Numb / Encore',
      description: 'Шон Кори Картер (род. 4 декабря 1969 года), американский рэпер, автор песен, музыкальный и исполнительный продюсер, предприниматель. В общей сложности он выиграл 22 премии «Грэмми».',
      image: 'https://lastfm.freetls.fastly.net/i/u/300x300/2a92cae2d2a144a5858447d50cfa62c0.webp',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/VOLIQOYWKG/XC501190-190801_06.50h_zilvermeeuw_duinen%20van%20goeree_roep_2ex_overvliegend_gezien_.mp3',
    },
  ],
};

const questionList = Object.keys(birdsData);

class ActiveQuiz extends Component {

  state = {
    birds: birdsData,
    activeQuestion: 0,
    isFinished: false,
  };

  onClickActiveQuestion = () => {
    const {activeQuestion} = this.state
    if(activeQuestion + 1 < questionList.length){
    this.setState({
      activeQuestion: this.state.activeQuestion + 1,
    });
    } else {
      this.isFinished()
    }
  };

  isFinished = () => {
      this.setState({
        isFinished: true,
      });
    }

  retryQuiz = () => {
    this.setState({
      activeQuestion: 0,
      isFinished: false
    });
  }

  render() {
    let idx = Math.floor(Math.random() * 6);
    const questions = this.state.birds[questionList[this.state.activeQuestion]];

    console.log('Правильный ответ:', questions[idx].name);
    return (
        <Quiz
              questions={ questions }
              question={ questions[idx] }
              onClickActiveQuestion={ this.onClickActiveQuestion }
              activeQuestion={ this.state.activeQuestion }
              isFinished={this.state.isFinished}
              retryQuiz={this.retryQuiz}
              type={questionList}
              birds={this.state.birds}
            />
    )
  }
}

export default ActiveQuiz;