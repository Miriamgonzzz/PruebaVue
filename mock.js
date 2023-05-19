const express = require('express')
const corss = require('cors')
const app = express()
const port = 8081

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.use(corss())
app.use(express.json())

// Middleware to intercept the response body, adding to locals so we can log later.
app.use((req, res, next) => {
  const oldJson = res.json
  res.json = (body) => {
    res.locals.body = body
    return oldJson.call(res, body)
  }
  next()
})

// Middleware to log in console the request and body response.
app.use(function (req, res, next) {
  if (req.url !== '/') {
    res?.on('finish', () => {
      const response = res.locals.body
      const details = {
        method: req?.method,
        url: req?.path,
        status: res.statusCode,
        code: res.statusMessage,
        body: response || {}
      }
      console.log(details)
    })
  }
  next()
})

app.post('/user/login', (req, res) => {
  const user = req.body
  if (user.username === 'Miriam' && user.password === '1234') {
    res.send(true)
  } else {
    res.status(404).send({ data: 'User not found!' })
  }
})
app.get('/newReleases/getAll', (req, res) => {
  const response = [
    {
      id: '1',
      title: 'The Ancient Magus Bride 2Seson',
      type: 'TV',
      episodes: '12',
      image_url: 'https://cdn.myanimelist.net/images/anime/1302/127665l.jpg',
      fechaEstreno: '6/4/2023'
    },
    {
      id: '2',
      title: 'Edens Zero 2Seson',
      type: 'TV',
      episodes: 'Unknown',
      image_url: 'https://cdn.myanimelist.net/images/anime/1347/127064l.jpg',
      fechaEstreno: '11/3/2023'
    },
    {
      id: '3',
      title: 'Feast of Amrita',
      type: 'Movie',
      episodes: '1',
      image_url: 'https://cdn.myanimelist.net/images/anime/1960/135589l.jpg',
      fechaEstreno: '26/5/2023'
    },
    {
      id: '4',
      title: 'LIVE 4bit BEYOND THE PERiOD',
      type: 'Movie',
      episodes: '1',
      image_url: 'https://cdn.myanimelist.net/images/anime/1503/132452l.jpg',
      fechaEstreno: '20/5/2023'
    },
    {
      id: '5',
      title: 'Collar×Malice -deep cover-',
      type: 'Movie',
      episodes: '2',
      image_url: 'https://cdn.myanimelist.net/images/anime/1535/133157l.jpg',
      fechaEstreno: '26/5/2023'
    },
    {
      id: '6',
      title: 'Pretty Guardians Sailor Moon Cosmos the Movie',
      type: 'Movie',
      episodes: '2',
      image_url: 'https://cdn.myanimelist.net/images/anime/1388/133092l.jpg',
      fechaEstreno: '9/6/2023'
    }
  ]
  res.send(response)
})
app.get('/products/getAll', (req, res) => {
  const response = [
    {
      mal_id: '1',
      title: 'Cowboy Bebop',
      type: 'TV',
      episodes: '26',
      status: 'Finished',
      score: '8.75',
      Themes: 'Space,Adult Cast',
      url: 'https://myanimelist.net/anime/1/Cowboy_Bebop',
      image_url: 'https://cdn.myanimelist.net/images/anime/1952/121242l.jpg',
      synopsis:
        "Crime is timeless. By the year 2071, humanity has expanded across the galaxy, filling the surface of other planets with settlements like those on Earth. These new societies are plagued by murder, drug use, and theft, and intergalactic outlaws are hunted by a growing number of tough bounty hunters.\n\nSpike Spiegel and Jet Black pursue criminals throughout space to make a humble living. Beneath his goofy and aloof demeanor, Spike is haunted by the weight of his violent past. Meanwhile, Jet manages his own troubled memories while taking care of Spike and the Bebop, their ship. The duo is joined by the beautiful con artist Faye Valentine, odd child Edward Wong Hau Pepelu Tivrusky IV, and Ein, a bioengineered Welsh Corgi.\n\nWhile developing bonds and working to catch a colorful cast of criminals, the Bebop crew's lives are disrupted by a menace from Spike's past. As a rival's maniacal plot continues to unravel, Spike must choose between life with his newfound family or revenge for his old wounds.\n\n[Written by MAL Rewrite]",
      background:
        'When Cowboy Bebop first aired in spring of 1998 on TV Tokyo, only episodes 2, 3, 7-15, and 18 were broadcast, it was concluded with a recap special known as Yose Atsume Blues. This was due to anime censorship having increased following the big controversies over Evangelion, as a result most of the series was pulled from the air due to violent content. Satellite channel WOWOW picked up the series in the fall of that year and aired it in its entirety uncensored. Cowboy Bebop was not a ratings hit in Japan, but sold over 19,000 DVD units in the initial release run, and 81,000 overall. Protagonist Spike Spiegel won Best Male Character, and Megumi Hayashibara won Best Voice Actor for her role as Faye Valentine in the 1999 and 2000 Anime Grand Prix, respectively. Cowboy Bebop\'s biggest influence has been in the United States, where it premiered on Adult Swim in 2001 with many reruns since. The show\'s heavy Western influence struck a chord with American viewers, where it became a "gateway drug" to anime aimed at adult audiences.',
      youtube: 'https://www.youtube.com/watch?v=qig4KOK2R2g'
    },
    {
      mal_id: '2',
      title: 'Cowboy Bebop',
      type: 'Movie',
      episodes: '1',
      status: 'Finished',
      score: '8.38',
      Themes: 'Space,Adult Cast',
      url: 'https://myanimelist.net/anime/5/Cowboy_Bebop__Tengoku_no_Tobira',
      image_url: 'https://cdn.myanimelist.net/images/anime/6/14331l.jpg',
      synopsis:
        'Another day, another bounty\u2014such is the life of the often unlucky crew of the Bebop. However, this routine is interrupted when Faye, who is chasing a fairly worthless target on Mars, witnesses an oil tanker suddenly explode, causing mass hysteria. As casualties mount due to a strange disease spreading through the smoke from the blast, a whopping three hundred million woolong price is placed on the head of the supposed perpetrator.\n\nWith lives at stake and a solution to their money problems in sight, the Bebop crew springs into action. Spike, Jet, Faye, and Edward, followed closely by Ein, split up to pursue different leads across Alba City. Through their individual investigations, they discover a cover-up scheme involving a pharmaceutical company, revealing a plot that reaches much further than the ragtag team of bounty hunters could have realized.\n\n[Written by MAL Rewrite]',
      youtube: 'https://www.youtube.com/watch?v=hc7IxJ93jtM'
    },
    {
      mal_id: '3',
      title: 'Trigun',
      type: 'TV',
      episodes: '26',
      status: 'Finished',
      score: '8.22',
      Themes: 'Adult Cast',
      url: 'https://myanimelist.net/anime/6/Trigun',
      image_url: 'https://cdn.myanimelist.net/images/anime/10/20473l.jpg',
      synopsis:
        "Vash the Stampede is the man with a $$60,000,000,000 bounty on his head. The reason: he's a merciless villain who lays waste to all those that oppose him and flattens entire cities for fun, garnering him the title The Humanoid Typhoon. He leaves a trail of death and destruction wherever he goes, and anyone can count themselves dead if they so much as make eye contact\u2014or so the rumors say. In actuality, Vash is a huge softie who claims to have never taken a life and avoids violence at all costs.\n\nWith his crazy doughnut obsession and buffoonish attitude in tow, Vash traverses the wasteland of the planet Gunsmoke, all the while followed by two insurance agents, Meryl Stryfe and Milly Thompson, who attempt to minimize his impact on the public. But soon, their misadventures evolve into life-or-death situations as a group of legendary assassins are summoned to bring about suffering to the trio. Vash's agonizing past will be unraveled and his morality and principles pushed to the breaking point.\n\n[Written by MAL Rewrite]",
      youtube: 'https://www.youtube.com/watch?v=bJVyIXeUznY'
    },
    {
      mal_id: '4',
      title: 'Witch Hunter Robin',
      type: 'TV',
      episodes: '26',
      status: 'Finished',
      score: '7.25',
      Themes: 'Detective',
      url: 'https://myanimelist.net/anime/7/Witch_Hunter_Robin',
      image_url: 'https://cdn.myanimelist.net/images/anime/1338/106905l.jpg',
      synopsis:
        "Robin Sena is a powerful craft user drafted into the STNJ\u2014a group of specialized hunters that fight deadly beings known as Witches. Though her fire power is great, she's got a lot to learn about her powers and working with her cool and aloof partner, Amon. But the truth about the Witches and herself will leave Robin on an entirely new path that she never expected!\n\n(Source: Funimation)",
      youtube: 'https://www.youtube.com/watch?v=7UkaILjPk8M","embed_url'
    },
    {
      mal_id: '5',
      title: 'Oshi no Ko',
      type: 'TV',
      episodes: '11',
      status: 'Currently Airing',
      score: '0.3',
      Themes: 'Reincarnation, Showbiz',
      url: 'https://myanimelist.net/anime/52034/Oshi_no_Ko',
      image_url: 'https://cdn.myanimelist.net/images/anime/1812/134736l.jpg',
      synopsis:
        "Sixteen-year-old Ai Hoshino is a talented and beautiful idol who is adored by her fans. She is the personification of a pure, young maiden. But all that glitters is not gold.\n\nGorou Amemiya is a countryside gynecologist and a big fan of Ai. So when the pregnant idol shows up at his hospital, he is beyond bewildered. Gorou promises her a safe delivery. Little does he know, an encounter with a mysterious figure would result in his untimely death—or so he thought.\n\nOpening his eyes in the lap of his beloved idol, Gorou finds that he has been reborn as Aquamarine Hoshino—Ai's newborn son! With his world turned upside down, Gorou soon learns that the world of showbiz is paved with thorns, where talent does not always beget success. Will he manage to protect Ai's smile that he loves so much with the help of an eccentric and unexpected ally?\n\n[Written by MAL Rewrite]",
      youtube: 'https://youtu.be/1yXa8MAmocQ'
    },
    {
      mal_id: '6',
      title: 'Fullmetal Alchemist',
      type: 'TV',
      episodes: '64',
      status: 'Finished',
      score: '9.10',
      Themes: 'Military',
      url: 'https://myanimelist.net/anime/5114/Fullmetal_Alchemist__Brotherhood',
      image_url: 'https://cdn.myanimelist.net/images/anime/1208/94745l.jpg',
      synopsis:
        "After a horrific alchemy experiment goes wrong in the Elric household, brothers Edward and Alphonse are left in a catastrophic new reality. Ignoring the alchemical principle banning human transmutation, the boys attempted to bring their recently deceased mother back to life. Instead, they suffered brutal personal loss: Alphonse's body disintegrated while Edward lost a leg and then sacrificed an arm to keep Alphonse's soul in the physical realm by binding it to a hulking suit of armor.\n\nThe brothers are rescued by their neighbor Pinako Rockbell and her granddaughter Winry. Known as a bio-mechanical engineering prodigy, Winry creates prosthetic limbs for Edward by utilizing 'automail,' a tough, versatile metal used in robots and combat armor. After years of training, the Elric brothers set off on a quest to restore their bodies by locating the Philosopher's Stone—a powerful gem that allows an alchemist to defy the traditional laws of Equivalent Exchange.\n\nAs Edward becomes an infamous alchemist and gains the nickname 'Fullmetal,'' the boys' journey embroils them in a growing conspiracy that threatens the fate of the world.",
      youtube: 'https://youtu.be/--IcmZkvL0Q'
    },
    {
      mal_id: '7',
      title: 'Bleach: Thousand-Year',
      type: 'TV',
      episodes: '13',
      status: 'Finished',
      score: '9.08',
      Themes: 'Action, Adventure, Fantasy',
      url: 'https://myanimelist.net/anime/41467/Bleach__Sennen_Kessen-hen',
      image_url: 'https://cdn.myanimelist.net/images/anime/1764/126627l.jpg',
      synopsis:
        "Substitute Soul Reaper Ichigo Kurosaki spends his days fighting against Hollows, dangerous evil spirits that threaten Karakura Town. Ichigo carries out his quest with his closest allies: Orihime Inoue, his childhood friend with a talent for healing; Yasutora Sado, his high school classmate with superhuman strength; and Uryuu Ishida, Ichigo's Quincy rival.\n\nIchigo's vigilante routine is disrupted by the sudden appearance of Asguiaro Ebern, a dangerous Arrancar who heralds the return of Yhwach, an ancient Quincy king. Yhwach seeks to reignite the historic blood feud between Soul Reaper and Quincy, and he sets his sights on erasing both the human world and the Soul Society for good.\n\nYhwach launches a two-pronged invasion into both the Soul Society and Hueco Mundo, the home of Hollows and Arrancar. In retaliation, Ichigo and his friends must fight alongside old allies and enemies alike to end Yhwach's campaign of carnage before the world itself comes to an end.",
      youtube: 'https://youtu.be/e8YBesRKq_U'
    },
    {
      mal_id: '8',
      title: 'Shingeki no Kyojin',
      type: 'Special',
      episodes: '2',
      status: 'Currently Airing',
      score: '9.08',
      Themes: 'Gore, Military, Survival',
      url: 'https://myanimelist.net/anime/51535/Shingeki_no_Kyojin__The_Final_Season_-_Kanketsu-hen',
      image_url: 'https://cdn.myanimelist.net/images/anime/1361/130998l.jpg',
      synopsis:
        "In the wake of Eren Yeager's cataclysmic actions, his friends and former enemies form an alliance against his genocidal rampage. Though once bitter foes, Armin Arlert, Mikasa Ackerman, and the remaining members of the Scout Regiment join forces with Reiner Braun and the survivors of the Marleyan military. Their meager united front sets out on a mission to stop Eren's wrath and—if possible—save their old comrade in the process.",
      youtube: 'https://youtu.be/r7MosyoAUhQ'
    },
    {
      mal_id: '9',
      title: 'HUNTER×HUNTER',
      type: 'TV',
      episodes: '148',
      status: 'Finished',
      score: '9.04',
      Themes: ' Action, Adventure, Fantasy',
      url: 'https://myanimelist.net/anime/11061/Hunter_x_Hunter_2011',
      image_url: 'https://cdn.myanimelist.net/images/anime/1337/99013l.jpg',
      synopsis:
        "Hunters devote themselves to accomplishing hazardous tasks, all from traversing the world's uncharted territories to locating rare items and monsters. Before becoming a Hunter, one must pass the Hunter Examination—a high-risk selection process in which most applicants end up handicapped or worse, deceased.",
      youtube: 'https://youtu.be/D9iTQRB4XRk'
    },
    {
      mal_id: '10',
      title: 'CLANNAD〜AFTER STORY〜',
      type: 'TV',
      episodes: '24',
      status: 'Finished',
      score: '8.93',
      Themes: 'Drama, Romance, Supernatural',
      url: 'https://myanimelist.net/anime/4181/Clannad__After_Story',
      image_url: 'https://cdn.myanimelist.net/images/anime/1299/110774l.jpg',
      synopsis:
        "Clannad: After Story, the sequel to the critically acclaimed slice-of-life series Clannad, begins after Tomoya Okazaki and Nagisa Furukawa graduate from high school. Together, they experience the emotional rollercoaster of growing up. Unable to decide on a course for his future, Tomoya learns the value of a strong work ethic and discovers the strength of Nagisa's support. Through the couple's dedication and unity of purpose, they push forward to confront their personal problems, deepen their old relationships, and create new bonds.",
      youtube: 'https://youtu.be/WiTwXIAcm5Q'
    },
    {
      mal_id: '11',
      title: 'Your Name',
      type: 'Movie',
      episodes: '1',
      status: 'Finished',
      score: '8.85',
      Themes: 'Romantic Subtext',
      url: 'https://myanimelist.net/anime/32281/Kimi_no_Na_wa',
      image_url: 'https://cdn.myanimelist.net/images/anime/5/87048l.jpg',
      synopsis:
        'Mitsuha Miyamizu, a high school girl, yearns to live the life of a boy in the bustling city of Tokyo—a dream that stands in stark contrast to her present life in the countryside. Meanwhile in the city, Taki Tachibana lives a busy life as a high school student while juggling his part-time job and hopes for a future in architecture.',
      youtube: 'https://youtu.be/3KR8_igDs1Y'
    },
    {
      mal_id: '12',
      title: 'Demon Slayer',
      type: 'TV',
      episodes: '11',
      status: 'Finished',
      score: '8.81',
      Themes: 'Historical',
      url: 'https://myanimelist.net/anime/47778/Kimetsu_no_Yaiba__Yuukaku-hen',
      image_url: 'https://cdn.myanimelist.net/images/anime/1908/120036l.jpg',
      synopsis:
        "The devastation of the Mugen Train incident still weighs heavily on the members of the Demon Slayer Corps. Despite being given time to recover, life must go on, as the wicked never sleep: a vicious demon is terrorizing the alluring women of the Yoshiwara Entertainment District. The Sound Pillar, Tengen Uzui, and his three wives are on the case. However, when he soon loses contact with his spouses, Tengen fears the worst and enlists the help of Tanjirou Kamado, Zenitsu Agatsuma, and Inosuke Hashibira to infiltrate the district's most prominent houses and locate the depraved Upper Rank demon.",
      youtube: 'https://youtu.be/QwvWdnd2Ktg'
    },
    {
      mal_id: '13',
      title: 'El Castillo Ambulante',
      type: 'Movie',
      episodes: '1',
      status: 'Finished',
      score: '8.66',
      Themes: 'Adventure, Award Winning, Drama, Fantasy, Romance',
      url: 'https://myanimelist.net/anime/431/Howl_no_Ugoku_Shiro',
      image_url: 'https://cdn.myanimelist.net/images/anime/1977/127396l.jpg',
      synopsis:
        "That jumbled piece of architecture, that cacophony of hissing steam and creaking joints, with smoke billowing from it as it moves on its own... That castle is home to the magnificent wizard Howl, infamous for both his magical prowess and for being a womanizer—or so the rumor goes in Sophie Hatter's small town. Sophie, as the plain daughter of a hatmaker, does not expect much from her future and is content with working hard in the shop.",
      youtube: 'https://youtu.be/iwROgK94zcM'
    },
    {
      mal_id: '14',
      title: 'Gekijouban Fairy Tail: Dragon Cry',
      type: 'Movie',
      episodes: '1',
      status: 'Finished',
      score: '7.54',
      Themes: 'Action, Adventure, Fantasy',
      url: 'https://myanimelist.net/anime/30778/Fairy_Tail_Movie_2__Dragon_Cry',
      image_url: 'https://cdn.myanimelist.net/images/anime/13/85391l.jpg',
      synopsis:
        'Dragon Cry is a magical artifact of deadly power, formed into a staff by the fury and despair of dragons long gone. Now, this power has been stolen from the hands of the Fiore kingdom by the nefarious traitor Zash Caine, who flees with it to the small island nation of Stella. Frightened that the power has fallen into the wrong hands, the King of Fiore hastily sends Fairy Tail to retrieve the staff. But this task proves frightening as a shadowy secret lies in the heart of the kingdom of Stella. Dragon Cry follows their story as they muster up all their strength to recover the stolen staff and save both kingdoms.',
      youtube: 'https://youtu.be/9Yk5cBOTcZ8'
    },
    {
      mal_id: '15',
      title: 'La Tumba de las Luciérnagas',
      type: 'Movie',
      episodes: '1',
      status: 'Finished',
      score: '8.51',
      Themes: 'Historical',
      url: 'https://myanimelist.net/anime/578/Hotaru_no_Haka',
      image_url: 'https://cdn.myanimelist.net/images/anime/10/35821l.jpg',
      synopsis:
        'As World War II reaches its conclusion in 1945, Japan faces widespread destruction in the form of American bombings, devastating city after city. Hotaru no Haka, also known as Grave of the Fireflies, is the story of Seita and his sister Setsuko, two Japanese children whose lives are ravaged by the brutal war. They have lost their mother, their father, their home, and the prospect of a bright future—all tragic consequences of the war.',
      youtube: 'https://youtu.be/4vPeTSRd580'
    },
    {
      mal_id: '16',
      title: 'Mi Vecino Totoro',
      type: 'Movie',
      episodes: '1',
      status: 'Finished',
      score: '8.25',
      Themes: 'Adventure, Award Winning, Supernatural',
      url: 'https://myanimelist.net/anime/523/Tonari_no_Totoro',
      image_url: 'https://cdn.myanimelist.net/images/anime/12/13453l.jpg',
      synopsis:
        "In 1950s Japan, Tatsuo Kusakabe relocates himself and his two daughters, Satsuki and Mei, to the countryside to be closer to their mother, who is hospitalized due to long-term illness. As the girls grow acquainted with rural life, Mei encounters a small, bunny-like creature in the yard one day. Chasing it into the forest, she finds 'Totoro'—a giant, mystical forest spirit whom she soon befriends. Before long, Satsuki too meets Totoro, and the two girls suddenly find their lives filled with magical adventures in nature and fantastical creatures of the woods.",
      youtube: 'https://youtu.be/92a7Hj0ijLs'
    },
    {
      mal_id: '17',
      title: 'Gintama',
      type: 'Movie',
      episodes: '1',
      status: 'Finished',
      score: '8.92',
      Themes: 'Gag Humor, Historical, Parody, Samurai, Time Travel',
      url: 'https://myanimelist.net/anime/15335/Gintama_Movie_2__Kanketsu-hen_-_Yorozuya_yo_Eien_Nare',
      image_url: 'https://cdn.myanimelist.net/images/anime/8/47621l.jpg',
      synopsis:
        "When Gintoki apprehends a movie pirate at a premiere, he checks the camera's footage and finds himself transported to a bleak, post-apocalyptic version of Edo, where a mysterious epidemic called the 'White Plague' has ravished the world's population. It turns out that the movie pirate wasn't a pirate after all—it was an android time machine, and Gintoki has been hurtled five years into the future! Shinpachi and Kagura, his Yorozuya cohorts, have had a falling out and are now battle-hardened solo vigilantes and he himself has been missing for years, disappearing without a trace after scribbling a strange message in his journal.",
      youtube: 'https://youtu.be/UhJM5rVqaF8'
    },
    {
      mal_id: '18',
      title: 'Violet Evergarden: La película',
      type: 'Movie',
      episodes: '1',
      status: 'Finished',
      score: '8.90',
      Themes: 'Award Winning, Drama, Fantasy',
      url: 'https://myanimelist.net/anime/37987/Violet_Evergarden_Movie',
      image_url: 'https://cdn.myanimelist.net/images/anime/1825/110716l.jpg',
      synopsis:
        "Several years have passed since the end of The Great War. As the radio tower in Leidenschaftlich continues to be built, telephones will soon become more relevant, leading to a decline in demand for 'Auto Memory Dolls.' Even so, Violet Evergarden continues to rise in fame after her constant success with writing letters. However, sometimes the one thing you long for is the one thing that does not appear.",
      youtube: 'https://youtu.be/NSIzsFOfd8M'
    },
    {
      mal_id: '19',
      title: 'Owarimonogatari Second Season',
      type: 'TV',
      episodes: '7',
      status: 'Finished',
      score: '8.88',
      Themes: 'Vampire',
      url: 'https://myanimelist.net/anime/35247/Owarimonogatari_2nd_Season',
      image_url: 'https://cdn.myanimelist.net/images/anime/2/89401l.jpg',
      synopsis:
        'Following an encounter with oddity specialist Izuko Gaen, third-year high school student Koyomi Araragi wakes up in a strange, deserted void only to be greeted by a joyfully familiar face in an alarmingly unfamiliar place.Araragi, with the help of his girlfriend Hitagi Senjougahara, maneuvers through the webs of his past and the perplexities of the present in search of answers. However, fate once again delivers him to the eccentric transfer student Ougi Oshino, who brings forth an unexpected proposal that may unearth the very foundation to which he is anchored. As Araragi peels back the layers of mystery surrounding an apparition, he discovers a truth not meant to be revealed.',
      youtube: 'https://youtu.be/7WdyIcDlK2o'
    },
    {
      mal_id: '20',
      title: 'El viaje de Chihiro',
      type: 'Movie',
      episodes: '1',
      status: 'Finished',
      score: '8.78',
      Themes: 'Mythology',
      url: 'https://myanimelist.net/anime/199/Sen_to_Chihiro_no_Kamikakushi',
      image_url: 'https://cdn.myanimelist.net/images/anime/1127/116848l.jpg',
      synopsis:
        'Stubborn, spoiled, and naïve, 10-year-old Chihiro Ogino is less than pleased when she and her parents discover an abandoned amusement park on the way to their new house. Cautiously venturing inside, she realizes that there is more to this place than meets the eye, as strange things begin to happen once dusk falls. Ghostly apparitions and food that turns her parents into pigs are just the start—Chihiro has unwittingly crossed over into the spirit world. Now trapped, she must summon the courage to live and work amongst spirits, with the help of the enigmatic Haku and the cast of unique characters she meets along the way.',
      youtube: 'https://youtu.be/ByXuk9QqQkk'
    }
  ]
  res.send(response)
})
