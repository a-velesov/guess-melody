import React, { Component } from 'react';
import Quiz from './Quiz';


const songsData = {
  train: [
    {
      id: 1,
      stage: 'Top Youtube',
      name: 'Harry Styles',
      song: 'Watermelon Sugar',
      description: 'Гарри Эдвард Стайлс – английский певец и кумир миллионов подростков, один из участников бойз-бэнда One Direction. Коллектив объявил о творческой паузе и Гарри успешно занялся сольной карьерой.',
      image: 'https://lastfm.freetls.fastly.net/i/u/300x300/e9993673f22fe3a2e702e4d3b6ab3ab5.webp',
      audio: 'https://github.com/a-velesov/songbird/raw/songbird/src/assets/music/youtube/harry-styles-watermelon-sugar.mp3',
    },
    {
      id: 2,
      stage: 'Top Youtube',
      name: 'The Weeknd',
      song: 'Blinding Lights',
      description: 'Настоящее имя Абель Макконен Тесфайе, родился и вырос в Канаде. Чтобы избежать судебных разбирательств с канадской группой The Weekend, артист намеренно пропустил букву в своем псевдониме.',
      image: 'https://lastfm.freetls.fastly.net/i/u/300x300/43bbd58d53d1ad1a3ec66e5a98870894.webp',
      audio: 'https://github.com/a-velesov/songbird/raw/songbird/src/assets/music/youtube/the-weeknd-blinding-lights.mp3',
    },
    {
      id: 3,
      stage: 'Top Youtube',
      name: 'Justin Bieber',
      song: 'Yummy',
      description: 'Джастин Дрю Бибер - канадский поп-R&B-певец, автор песен, музыкант, актёр. Песни Бибера приобрели невероятную популярность по всему миру и помогли ему завоевать такие престижные награды, как «Грэмми» и American Music Awards.',
      image: 'https://lastfm.freetls.fastly.net/i/u/300x300/2d710d3d399b4a4311f5517b9eacd3f1.webp',
      audio: 'https://github.com/a-velesov/songbird/raw/songbird/src/assets/music/youtube/J_Bieber_Yummy.mp3',
    },
    {
      id: 4,
      stage: 'Top Youtube',
      name: 'Taylor Swift',
      song: 'Cardigan',
      description: 'Те́йлор Элисон Свифт - американская кантри-поп-исполнительница, автор песен, музыкальный продюсер, режиссёр и актрис, женщина десятилетия по версии Billboard.',
      image: 'http://lastfm.freetls.fastly.net/i/u/300x300/c2cc697063963288f9aaac346abdae31.webp',
      audio: 'https://github.com/a-velesov/songbird/raw/songbird/src/assets/music/youtube/Taylor_Swift_-_Cardigan.mp3',
    },
    {
      id: 5,
      stage: 'Top Youtube',
      name: 'Cardi B',
      song: 'WAP',
      description: 'Белкалис Марленис Альманзар - американская хип-хоп исполнительница, автор песен, актриса. Обрела популярность после публикаций юмористических скетчей в Vine и Instagram',
      image: 'https://lastfm.freetls.fastly.net/i/u/300x300/8b37090578c25aa95d72d6d678b0d638.webp',
      audio: 'https://github.com/a-velesov/songbird/raw/songbird/src/assets/music/youtube/Cardi_B-WAP_feat._Megan_Thee_Stallion.mp3',
    },
    {
      id: 6,
      stage: 'Top Youtube',
      name: 'Dua Lipa',
      song: 'Break My Heart',
      description: 'Восходящая звезда британского шоу-бизнеса, исполнительница песен в стиле дарк-поп стремительно завоевала место под солнцем. Композиции в ее исполнении звучат в эфирах мировых радиостанций, а часть песен задерживается в топе.',
      image: 'https://lastfm.freetls.fastly.net/i/u/300x300/f56557b7f2772b5f82e4cb9fe807a42a.webp',
      audio: 'https://github.com/a-velesov/songbird/raw/songbird/src/assets/music/youtube/DuaLipa_-_Break_My_Heart.mp3',
    },
  ],
  pop: [
    {
      id: 1,
      stage: 'Pop music',
      name: 'Pink',
      song: 'So what',
      description: 'Алиша Бет Мур (англ. Alecia Beth Moore, 8 сентября 1979, Дойлстаун, Пеннсильвания, США), более известная под псевдонимом Пинк (англ. P!nk) — американская певица, автор песен и актриса.',
      image: 'https://lastfm.freetls.fastly.net/i/u/300x300/65ded6ef9498d16a0358bbc2e483d2bc.webp',
      audio: 'https://github.com/a-velesov/songbird/raw/songbird/src/assets/music/pop/P!nk%20-%20So%20What.mp3',
    },
    {
      id: 2,
      stage: 'Pop music',
      name: 'Shakira',
      song: 'Whenever, Whenever',
      description: 'Шакира Исабель Мебарак Риполль, род. 2 февраля 1977, Барранкилья) — ливано-колумбийская певица, танцовщица, автор песен, композитор, музыкальный продюсер и филантроп. В 16 лет переехала в США, чтобы начать карьеру певицы.',
      image: 'https://lastfm.freetls.fastly.net/i/u/300x300/621acc94a58648479559b431de3bd5ea.webp',
      audio: 'https://github.com/a-velesov/songbird/raw/songbird/src/assets/music/pop/shakira-whenever-wherever.mp3',
    },
    {
      id: 3,
      stage: 'Pop music',
      name: 'Lady Gaga',
      song: 'Sour Candy',
      description: 'Стефани Джоанн Анжелина Джерманотта (Stefani Joanne Angelina Germanotta) родилась 28 марта 1986 года. Известная под сценическим именем Lady GaGa (Леди ГаГа), певица и автор песен из Америки.',
      image: 'https://lastfm.freetls.fastly.net/i/u/300x300/5fde755381b225f7ec00b4ae49702554.webp',
      audio: 'https://github.com/a-velesov/songbird/raw/songbird/src/assets/music/pop/Lady%20Gaga%2C%20BLACKPINK%20-%20Sour%20Candy.mp3',
    },
    {
      id: 4,
      stage: 'Pop music',
      name: 'Britney Spears',
      song: 'Toxic',
      description: 'Бритни Джин Спирс родилась 2 декабря 1981 года в Кенвуде, маленьком городе в Луизиане. Американская поп-певица, актриса, танцовщица, автор песен, обладательница премии «Грэмми».',
      image: 'https://lastfm.freetls.fastly.net/i/u/300x300/98b1262a77b13c1ea74dfcaca0f5ea38.webp',
      audio: 'https://github.com/a-velesov/songbird/raw/songbird/src/assets/music/pop/Britney%20Spears%20-%20Toxic.mp3',
    },
    {
      id: 5,
      stage: 'Pop music',
      name: 'Rihanna',
      song: 'Umbrella',
      description: 'Робин Рианна Фенти — барбадосская певица, актриса, музыкальный продюсер, модный дизайнер и филантроп. В 16 лет переехала в США, чтобы начать карьеру певицы, является одной из самых продаваемых артистов всех времён',
      image: 'https://lastfm.freetls.fastly.net/i/u/300x300/92f7745cbdc5a5d6e0c9e9c1dd00c1f6.webp',
      audio: 'https://github.com/a-velesov/songbird/raw/songbird/src/assets/music/pop/Rihanna_Umbrella-ft-JAY-Z.mp3',
    },
    {
      id: 6,
      stage: 'Pop music',
      name: 'Madonna',
      song: 'Hung Up',
      description: 'Мадонна Луиз Чикконе — американская автор-исполнительница, поп-певица, танцовщица, музыкальный продюсер, а также актриса, режиссёр и детская писательница.',
      image: 'https://lastfm.freetls.fastly.net/i/u/300x300/335759a7fa6c810b7e14e57f025eb551.webp',
      audio: 'https://github.com/a-velesov/songbird/raw/songbird/src/assets/music/pop/madonna-hung-up.mp3',
    },
  ],
  rock: [
    {
      id: 1,
      stage: 'Rock',
      name: 'Linkin Park',
      song: 'In the End',
      description: 'Linkin Park — популярная американская альтернативная рок-группа. Основана под названием SuperXero, в 1996 году была переименована в Xero, позже использовались названия Hybrid Theory и Linkin Park.',
      image: 'https://lastfm.freetls.fastly.net/i/u/300x300/bc2b94f044e249328f769d1bf3e23727.webp',
      audio: 'https://github.com/a-velesov/songbird/raw/songbird/src/assets/music/rock/linkin-park-in-the-end.mp3',
    },
    {
      id: 2,
      stage: 'Rock',
      name: 'AC/DC',
      song: 'Back in Black',
      description: 'AC/DC - (сокр. от англ. alternating current/direct current — переменный/постоянный ток) — австралийская рок-группа, сформированная в Сиднее, Австралия в ноябре 1973 года братьями Малькольмом и Ангусом Янгами.',
      image: 'https://lastfm.freetls.fastly.net/i/u/300x300/59a73cd6307323070398a6141c3e3274.webp',
      audio: 'https://github.com/a-velesov/songbird/blob/songbird/src/assets/music/rock/ac-dc-back-in-black.mp3',
    },
    {
      id: 3,
      stage: 'Rock',
      name: 'Nirvana',
      song: 'Smells Like Teen Spirit',
      description: 'Nirvana - американская рок-группа, созданная вокалистом и гитаристом Куртом Кобейном и басистом Кристом Новоселичем в Абердине, штат Вашингтон, в 1987 году.',
      image: 'https://lastfm.freetls.fastly.net/i/u/300x300/151972b1b5bb82380184f1104fb74d9f.webp',
      audio: 'https://github.com/a-velesov/songbird/raw/songbird/src/assets/music/rock/nirvana-smells_like_teen_spirit.mp3',
    },
    {
      id: 4,
      stage: 'Rock',
      name: 'Arctic Monkeys',
      song: 'R U Mine?',
      description: 'Молодой квартет Arctic Monkeys начал покорять Британию в начале 2006 года. Практически первыми добились успеха без поддержки традиционных СМИ, радио и телевидения, продемонстрировав эффективность Интернета, как способа продвижения.',
      image: 'https://lastfm.freetls.fastly.net/i/u/300x300/1a5ef2bb4fe3a89ee25f5a592ad5b49e.webp',
      audio: 'https://github.com/a-velesov/songbird/raw/songbird/src/assets/music/rock/Arctic%20Monkeys%20-%20R%20U%20Mine.mp3',
    },
    {
      id: 5,
      stage: 'Rock',
      name: 'The Rolling Stones',
      song: 'Paint It Black',
      description: 'The Rolling Stones (англ. Роллинг Стоунз, «Перекати-поле») — британская рок-группа, образовавшаяся в 1962 году.  Группа по сей день остаётся абсолютно оригинальной, узнаваемой с первых аккордов. ',
      image: 'https://lastfm.freetls.fastly.net/i/u/300x300/2408eaf8adb441de98b1e24648f0ce0b.webp',
      audio: 'https://github.com/a-velesov/songbird/raw/songbird/src/assets/music/rock/The%20Rolling%20Stones%20-%20Paint%20It%20Black.mp3',
    },
    {
      id: 6,
      stage: 'Rock',
      name: 'Foo Fighters',
      song: 'Everlong',
      description: 'Foo Fighters — американская пост-гранжевая рок-группа, образованная бывшим участником Nirvana Дейвом Гролом в 1995 году. Название позаимствовано из сленга американских лётчиков Второй мировой.',
      image: 'https://lastfm.freetls.fastly.net/i/u/300x300/d91769b38237c84fa0745fc18d5da361.webp',
      audio: 'https://github.com/a-velesov/songbird/raw/songbird/src/assets/music/rock/Foo%20Fighters%20-%20Everlong.mp3',
    },
  ],
  rap: [
    {
      id: 1,
      stage: 'Rap',
      name: 'Eminem',
      song: 'Godzilla',
      description: 'Настоящее имя - Маршалл Брюс Мэтерс III. Американский рэпер, музыкальный продюсер, композитор и актёр. Эминем является одним из самых продаваемых музыкальных артистов в мире, а также самым продаваемым артистом 2000-х',
      image: 'https://lastfm.freetls.fastly.net/i/u/300x300/95551c45f42b4ee8b59c20346e1ac4ff.webp',
      audio: 'https://github.com/a-velesov/songbird/raw/songbird/src/assets/music/rap/Eminem_feat_Juice_WRLD_-_Godzilla.mp3',
    },
    {
      id: 2,
      stage: 'Rap',
      name: 'Kanye West',
      song: 'Ghost Town',
      description: 'Канье Омари Уэст (род. 8 июня 1977 года в Атланте, штат Джорджия, США) - американский рэппер, певец и продюсер. Уэст выиграл 21 премию «Грэмми», благодаря чему он является одним из рекордсменов по числу выигранных номинаций',
      image: 'https://lastfm.freetls.fastly.net/i/u/300x300/68ce5e2c7e387298dae90a8ac3b8582f.webp',
      audio: 'https://github.com/a-velesov/songbird/raw/songbird/src/assets/music/rap/Kanye_West-ghost-town.mp3',
    },
    {
      id: 3,
      stage: 'Rap',
      name: 'Snoop Dogg',
      song: 'Young, Wild & Free',
      description: 'Настоящее имя Calvin Broadus, (родился 20 октября 1971 г.) — американский рэппер, продюсер и актер. Снуп хорошо известен за свой стиль исполнения — ленивый, подчеркнуто спокойный, с растянутыми словами и ритмичной лирикой.',
      image: 'https://lastfm.freetls.fastly.net/i/u/300x300/bf912d513f2548bd9ed21722fe14b9b1.webp',
      audio: 'https://github.com/a-velesov/songbird/raw/songbird/src/assets/music/rap/Snoop-Dogg-Wiz-Khalifa-feat-Bruno-Mars_-_Young-Wild.mp3',
    },
    {
      id: 4,
      stage: 'Rap',
      name: '2Pac',
      song: 'Changes',
      description: 'Настоящее имя - Тупак Амару Шакур. Большинство песен Шакура повествуют о тяжёлой жизни в гетто, бедности, расизме и проблемах современного общества.2Pac внесен в «Книгу Рекордов Гиннеса» как самый успешный рэппер всех времен.',
      image: 'https://lastfm.freetls.fastly.net/i/u/300x300/ba067de354c045c78b8376169ae1079e.webp',
      audio: 'https://github.com/a-velesov/songbird/raw/songbird/src/assets/music/rap/2Pac%E2%80%93Changes.mp3',
    },
    {
      id: 5,
      stage: 'Rap',
      name: 'Drake',
      song: 'Toosie Slide',
      description: 'Обри "Дрейк" Грэм (род. 24 октября 1986 года). Канадский рэпер, певец, автор песен, музыкальный продюсер, актёр и предприниматель. Большинство работ Дрейка включает в себя элементы как рэпа, так и пения, что сделало его уникальным как артиста.»',
      image: 'https://lastfm.freetls.fastly.net/i/u/300x300/1d4ccfe034d2f7b880146f5523f3987d.webp',
      audio: 'https://github.com/a-velesov/songbird/raw/songbird/src/assets/music/rap/Drake_-_Toosie_Slide.mp3',
    },
    {
      id: 6,
      stage: 'Rap',
      name: 'JAY-Z',
      song: 'Numb / Encore',
      description: 'Шон Кори Картер (род. 4 декабря 1969 года), американский рэпер, автор песен, музыкальный и исполнительный продюсер, предприниматель. В общей сложности он выиграл 22 премии «Грэмми».',
      image: 'https://lastfm.freetls.fastly.net/i/u/300x300/2a92cae2d2a144a5858447d50cfa62c0.webp',
      audio: 'https://github.com/a-velesov/songbird/raw/songbird/src/assets/music/rap/Jay-Z%26Linkin%20Park-Numb-Encore.mp3',
    },
  ],
  jazz: [
    {
      id: 1,
      stage: 'Jazz',
      name: 'Billie Holiday',
      song: 'Strange Fruit',
      description: 'Элеонора Фэгэн - американская певица, творчество которой составляет целую эпоху в истории джаза. Билли Холидей заставила считаться со своей индивидуальностью воротил шоу-бизнеса, что было в новинку, поскольку все певицы тогда считались взаимозаменяемыми.',
      image: 'https://lastfm.freetls.fastly.net/i/u/300x300/c9b6f38430f745c190ee287b3ac3ba04.webp',
      audio: 'https://github.com/a-velesov/songbird/raw/songbird/src/assets/music/jazz/Billie-holiday-strange-fruit.mp3',
    },
    {
      id: 2,
      stage: 'Jazz',
      name: 'Bill Evans',
      song: 'Skating in Central Park',
      description: 'Билл Эванс — американский джазовый пианист и композитор.Эванс оказал значительное влияние на развитие фортепианного трио и камерного джаза и внес уникальный творческий вклад — тонкие, изобретательные сольные импровизации.',
      image: 'https://lastfm.freetls.fastly.net/i/u/300x300/f57b8492fe3e408fc021bb5fbaa2bee1.webp',
      audio: 'https://github.com/a-velesov/songbird/raw/songbird/src/assets/music/jazz/Bill%20Evans%20and%20Jim%20Hall%20Skating%20In%20Central%20Park.mp3',
    },
    {
      id: 3,
      stage: 'Jazz',
      name: 'Miles Davis',
      song: 'Blue in green',
      description: 'Майлз Дэвис -  американский джазовый трубач и бэнд-лидер, оказавший значительнейшее влияние на развитие музыки XX века. Дэвис стоял у истоков множества стилей и направлений в джазе.',
      image: 'https://lastfm.freetls.fastly.net/i/u/300x300/77be9d4f51949813088eba8d87db8235.webp',
      audio: 'https://github.com/a-velesov/songbird/blob/songbird/src/assets/music/jazz/miles_davis-blue_in_green.mp3',
    },
    {
      id: 4,
      stage: 'Jazz',
      name: 'Ray Charles',
      song: 'Hit the Road Jack',
      description: 'Рэй Чарльз – американский музыкант, автор более 70 студийных альбомов, один из известнейших в мире исполнителей музыки в стилях соул, джаз и ритм-энд-блюз. Был награждён 13 премиями «Грэмми».',
      image: 'https://lastfm.freetls.fastly.net/i/u/300x300/6c85e46cffb04e9da74f0a9b10501e0d.webp',
      audio: 'https://github.com/a-velesov/songbird/blob/songbird/src/assets/music/jazz/ray_charles_-_hit_the_road_jack.mp3',
    },
    {
      id: 5,
      stage: 'Jazz',
      name: 'Louis Armstrong',
      song: 'What a Wonderful World',
      description: 'Армстронг Дэниел Луи - великий американский джазовый музыкант, трубач, руководитель оркестра, композитор. В своем творчестве он соединил несоединимое: индивидуальный тип самовыражения с беспредельной общедоступностью музыки.',
      image: 'https://lastfm.freetls.fastly.net/i/u/300x300/59b2c835ffff448f87499e062303260e.webp',
      audio: 'https://github.com/a-velesov/songbird/blob/songbird/src/assets/music/jazz/Louis_Armstrong_-_What_A_Wonderful_World.mp3',
    },
    {
      id: 6,
      stage: 'Jazz',
      name: 'Frank Sinatra',
      song: 'My Way',
      description: 'Францис Альберт Синатра - американский киноактёр, кинорежиссёр, продюсер, шоумен, певец (крунер). Одиннадцать раз становился лауреатом премии «Грэмми»[5]. Славился романтическим стилем исполнения песен и «бархатным» тембром голоса.',
      image: 'https://lastfm.freetls.fastly.net/i/u/300x300/964860a21da54503a17c741436905281.webp',
      audio: 'https://github.com/a-velesov/songbird/raw/songbird/src/assets/music/jazz/Frank_Sinatra_-_My_Way.mp3',
    },
  ],
  classic: [
    {
      id: 1,
      stage: 'Classic',
      name: 'Wolfgang Amadeus Mozart',
      song: 'Requiem, Lacrimosa',
      description: 'Вольфганг Амадей Моцарт (27 января 1756 — 5 декабря 1791) — один из величайших композиторов мира, один из основоположников классической музыки. Был также виртуозным скрипачом, клавесинистом, органистом, дирижёром.',
      image: 'https://lastfm.freetls.fastly.net/i/u/300x300/74e6ba453922f58083120109c68aa75e.webp',
      audio: 'https://github.com/a-velesov/songbird/raw/songbird/src/assets/music/classic/mocart_rekviem.mp3',
    },
    {
      id: 2,
      stage: 'Classic',
      name: 'Ludwig van Beethoven',
      song: 'Sonata No. 14',
      description: 'Людвиг ван Бетховен (17 декабря 1770 - 26 марта 1827)немецкий композитор, пианист и дирижёр, последний представитель «венской классической школы». Бетховен — ключевая фигура классической музыки в период между классицизмом и романтизмом,',
      image: 'https://lastfm.freetls.fastly.net/i/u/300x300/3cab989bfdb7440cb2d0235d706d3f47.webp',
      audio: 'https://github.com/a-velesov/songbird/raw/songbird/src/assets/music/classic/Beethoven-Sonata-No-14.mp3',
    },
    {
      id: 3,
      stage: 'Classic',
      name: 'Sebastian Bach',
      song: 'Cello Suite No.1',
      description: 'Иоганн Себастьян Бах - великий немецкий композитор XVIII века. При жизни композитор не получил заслуженного признания как сочинитель, но был известен как исполнитель и, особенно, как импровизатор.',
      image: 'https://lastfm.freetls.fastly.net/i/u/300x300/8f0a2d39b5f244689984e83f73b8b93e.webp',
      audio: 'https://github.com/a-velesov/songbird/raw/songbird/src/assets/music/classic/Symphoniacs%20-%20Bach%20Cello%20Suite%20No.1.mp3',
    },
    {
      id: 4,
      stage: 'Classic',
      name: 'Antonio Vivaldi',
      song: 'The Four Seasons',
      description: 'Анто́нио Лучо Вива́льди (4 марта 1678 — 28 июля 1741) — итальянский композитор, скрипач, педагог, дирижёр. Вивальди считается одним из крупнейших представителей итальянского скрипичного искусства XVIII века, при жизни получил широкое признание во всей Европе.',
      image: 'https://lastfm.freetls.fastly.net/i/u/300x300/6894210ca4d94bffa8245523e6241eda.webp',
      audio: 'https://github.com/a-velesov/songbird/raw/songbird/src/assets/music/classic/Antonio%20Vivaldi%20-%20Four%20Seasons.mp3',
    },
    {
      id: 5,
      stage: 'Classic',
      name: 'Johannes Brahms',
      song: 'Hungarian Dance No.4',
      description: 'Иога́ннес Брамс (1833 — 1897) — немецкий композитор и пианист, один из академических представителей романтизма, склонный к классицизму.',
      image: 'https://lastfm.freetls.fastly.net/i/u/300x300/4015e60b06084d3a9fec8f69ee849f90.webp',
      audio: 'https://github.com/a-velesov/songbird/raw/songbird/src/assets/music/classic/Johannes%20Brahms%20-%20Hungarian%20Dance%20No.4.mp3',
    },
    {
      id: 6,
      stage: 'Classic',
      name: 'Pyotr Tchaikovsky',
      song: 'Swan Lake',
      description: 'Пётр Ильич Чайковский (25 апреля 1840 — 25 октября 1893) — русский композитор, дирижёр, педагог, музыкально-общественный деятель. В музыке Чайковского нашли претворение глубокие процессы духовной жизни, сомнение, отчаяние и порыв к идеалу',
      image: 'https://lastfm.freetls.fastly.net/i/u/300x300/7642f34cea61092c54e525d35157523d.webp',
      audio: 'https://github.com/a-velesov/songbird/raw/songbird/src/assets/music/classic/pyotr-ilyich-tchaikovsky-swan-lake.mp3',
    },
  ],
};

const questionList = Object.keys(songsData);

class ActiveQuiz extends Component {

  state = {
    birds: songsData,
    activeQuestion: 0,
    isFinished: false,
  };

  onClickActiveQuestion = () => {
    const { activeQuestion } = this.state;
    if(activeQuestion + 1 < questionList.length) {
      this.setState({
        activeQuestion: this.state.activeQuestion + 1,
      });
    } else {
      this.isFinished();
    }
  };

  isFinished = () => {
    this.setState({
      isFinished: true,
    });
  };

  retryQuiz = () => {
    this.setState({
      activeQuestion: 0,
      isFinished: false,
    });
  };

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
        isFinished={ this.state.isFinished }
        retryQuiz={ this.retryQuiz }
        type={ questionList }
        birds={ this.state.birds }
      />
    );
  }
}

export default ActiveQuiz;