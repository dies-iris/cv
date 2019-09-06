// à améliorer
const TEXTS = [
    //francais: 
    {
        button: "Continuer",
        first: 
            ["Bonjour,", "En quelle langue souhaitez-vous continuer?"]
        ,
        menu: [
            ["Introduction", "intro"], 
            ["Mes etudes", "formation"], 
            ["Mes expériences", "experiences"], 
            ["Superpouvoirs", "superpouvoirs"], 
            ["Mes passions", "passions"], 
            ["Contactez-moi", "contacts"]
        ],
        intro: [
            ["Je m'appelle Irina et je suis ravie de vous accueuillir sur ma page."],
            ["J'ai démenagé de Moscou à Rennes il y a 2,5 ans. Malgré les difficultés d'adaptation dans le nouveau pays, j'ai vraiment aimé la Bretagne et les gens."],
            ["En plus des activités habituelles, je devais changer de métier. La programmation est devenue ma nouvelle passion, où je peux appliquer ma créativité et ma logique."]
        ],
        formation: [
            ["J'ai fait mes etudes en psychologie à l'université de Moscou. Eh oui, je sais lire les gens, les analyser, tout ça..."],
            ["Je plaisante.","Les études m’ont préparé le mieux à la recherche, qui a été mon travail pendant 5 ans.", "En France, en raison de multiples problèmes burocratiques, j’ai réalisé que je devais vraiment commencer une nouvelle vie."],
            ["La recherche d'un nouveau sens n'a pas été facile, mais elle m'a finalement conduit là où je suis maintenant.", "Un cours de cinq mois sur le développement d'applications hybrides chez Buroscope m'a permis de voir un nouvel avenir pour moi."]
        ],
        experiences: [
            ["Après l'obtention de mon diplôme, j'ai été invité à travailler dans le laboratoire de génétique comportementale, où je suis resté 5 ans. C'était une excellente opportunité et j'étais honoré d'être coordinateur d'une étude à grande échelle sur le développement de l'enfant."]
             ["J'ai participé au projet à toutes les étapes, de l'élaboration du questionnaire à l'analyse des données, en passant par la préparation des articles (il y aura un lien)", "J'ai rencontré des gens incroyables et je suis très reconnaissante pour cette période de ma vie."],
             ["J'ai continué à travailler à distance pendant un an après avoir déménagé en France.", "Après avoir démissionné, j'ai travaillé dans un restaurant, ce qui m'a poussé davantage à trouver ce que je voulais vraiment faire."]
             ["Chez Buroscope, je me suis engagé dans le projet d’application pour un entraîneur de fitness.", "(Il y aura un lien ici)"]
        ],
        superpouvoirs: [
            ["En russe, nous avons l'expression 'étudiant éternel'.", "Je crois que je suis cela. Je sais comment étudier et je peux le faire rapidement et bien.", "(Il y aura plus de texte et d'animation ici)" ],
        ],
        passions: [
            ["Je suis une personne enthousiaste.", "Certains loisirs durent des années, d'autres s'épuisent, mais ma curiosité ne s'efface jamais."], ["Si vous regardez bien, vous les verrez ..."]
        ],
        contacts: [
            ["1er texte de 1er button", "2nd texte de 1er button"],
            ["1er text de 2nd button"]
        ]
    },
    //anglais: 
    {
        button: "Continue",
        first: [
            ["Hello,","In what language would you like to continue?"]
            ],
        menu: [
            ["Intro", "intro"], 
            ["My studies", "formation"], 
            ["My experience", "experiences"], 
            ["Superpowers", "superpouvoirs"], 
            ["My interests", "passions"], 
            ["Contact me", "contacts"]
        ],
        intro: [
            ["My name is Irina, welcome to my page"],
            ["I moved from Moscow to Rennes 2,5 years ago. Despite the difficulties of adaptation in a new country, I fell in love with Brittany and the locals."],
            ["Not only I have changed my habits, but also a profession. Programming has become my new passion which fully satisfies my creativity and complexity needs."]
        ],
        formation: [
            ["I got a masters degree in Psychology from Moscow State University. Yeah yeah, I see through people, analyze every step etc..."],
            ["Just kidding. The studies best prepared me for research, which was my job for 5 years.", "In France, due to multiple burocratic problems, I realized that I really had to start a new life."],
            ["The search of new sense was not easy but it finally got me to where I am now.", "A 5-month course Hybrid Applications Development at Buroscope helped me see a new future for myself."]
        ],
        experiences: [
            ["After graduation I was invited to work in the laboratory of behavioral genetics, where I stayed for 5 years. It was a great opportunity and I was honored to be a coordinator of a large-scale child development study."],
            ["I was engaged in the project at all stages, starting from questionnaire development to data analysis and <a href='#'>article</a> preparation", "I have met some incredible people and I am very grateful for this period of my life."],
            ["I continued working remotely for a year after having moved to France.","After I quit, I worked in a restaurant, which only pushed me further to find what I truly wanted to do."],
            ["At Buroscope I got engaged in the project of application for a fitness coach.","(there will be a link here)"]
        ],
        superpouvoirs: [
            ["In Russian we have an expression 'eternal student'.","I believe I am that. I know how to study and I can do it well and fast.", "(there will be more text and animation here)"],
        ],
        passions: [
            ["I am a keen person.", "Some hobbies last for years, others burn out, but my curiosity never fades away."], ["If you take a good look, you will see them ..."]
        ],
        contacts: [
            ["1st text of 1st button", "2nd text 1st button"],
            ["1st text 2nd button"]
        ]
    },
    //russe: 
    {
        button: "Продолжить",
        first: [
            [""]
        ],
        menu: [
            ["Обо мне", "intro"], 
            ["Моё обучение", "formation"], 
            ["Мой опыт", "experiences"], 
            ["Супер сила", "superpouvoirs"], 
            ["Мои ценности", "passions"], 
            ["Встретиться со мной", "contacts"]
        ],
        intro: [
            ["Меня зовут Ира, добро пожаловать на мою страницу!"],
            ["Я переехала из Москвы в Ренн два года назад. Несмотря на сложности адаптации в новой стране, я очень полюбила Бретань и местных людей."],
            ["Помимо привычных занятий, мне пришлось сменить и профессию. Программирование стало моим новым увлечением, в котором я могу применить свою креативность и логику."]
        ],
        formation: [
            ["Я получила степень магистра психологии в МГУ. Да-да, я вижу людей, анализирую каждый шаг и т.д."],
             ["Шучу. Исследования лучше всего подготовили меня к исследованиям, которые были моей работой в течение 5 лет", "Во Франции, из-за множества бюрократических проблем, я поняла, что действительно должен начать новую жизнь."],
             ["Поиск нового смысла был нелегким, но в конце концов он привел меня туда, где я сейчас нахожусь","5-месячный курс по разработке гибридных приложений в Buroscope помог мне увидеть новое будущее для себя."]
        ],
        experiences: [
            ["После окончания обучения меня пригласили работать в Лабораторию поведенческой генетики, где я пробыл 5 лет. Это была прекрасная возможность, и для меня была большая честь быть координатором исследования большой масштаб на развитие ребенка. "],
["Я принимал участие во всех аспектах проекта, от разработки вопросника до анализа данных, до подготовки <a href='#'> статьи </a>", " Я встретил невероятных людей, и я очень благодарен период моей жизни."],
["Я продолжал работать удаленно в течение года после переезда во Францию","После отставки я работал в ресторане, что сделало меня более заинтересованным в том, чтобы найти то, что я действительно хотел сделать."],
["В Buroscope я участвовал в проекте подачи заявки для тренера по фитнесу", "(здесь будет ссылка)"]
        ],
        superpouvoirs: [
            ["В русском языке у нас есть выражение 'вечный ученик'.", "Я верю, что я такой. Я знаю, как учиться, и я могу делать это быстро и хорошо.", "(здесь будет больше текста и анимации)"],
        ],
        passions: [
            ["Я - увлекающийся человек.", "Некоторые увлечения длятся годами, другие - перегорают, но мое любопытство никогда не угасает."],
            ["Если вы хорошенько присмотритесь, вы их увидите..."]
        ],
        contacts: [
            ["первый текст про первую кнопку", "второй текст"],
            ["первый текст про вторую кнопку"]
        ]
    }
]
var Icons = {
    formation: [], //['<img src="assets/logo-mgu.png">', '<img src="assets/logo-buroscope.png">'],
    experiences: ["2019", "2018", "2017"],
    superpouvoirs: ["HTML", "CSS", "JS"],
    passions: [],
    contacts: []

}
var Colors = {
    formation: '#FBA092',
    experiences: '#F67E7D',
    superpouvoirs: '#BA7C90',
    passions: '#7D7AA2',
    contacts: '#5B89A6'
}

export default TEXTS;