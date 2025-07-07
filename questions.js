const questions = [
    {
        fr: {
            question: "Trouvez-vous que votre perception du temps varie considérablement selon votre intérêt pour l'activité ?",
            explanation: "La perception variable du temps, ou 'chronesthésie flexible', est une caractéristique subtile du TDAH. Une tâche de 5 minutes peut sembler durer des heures si elle n'est pas stimulante, tandis qu'une activité passionnante peut faire passer plusieurs heures comme quelques minutes."
        },
        en: {
            question: "Do you find that your perception of time varies considerably depending on your interest in the activity?",
            explanation: "Variable time perception, or 'flexible chronesthesia', is a subtle characteristic of ADHD. A 5-minute task can feel like hours if it's not stimulating, while an engaging activity can make several hours feel like minutes."
        }
    },
    {
        fr: {
            question: "Avez-vous tendance à remarquer des détails que les autres manquent, tout en ratant des éléments que tout le monde semble voir ?",
            explanation: "Le TDAH peut créer un mode d'attention particulier où certains détails mineurs captent intensément l'attention, tandis que des éléments plus évidents peuvent passer inaperçus. Ce n'est pas un manque d'attention, mais plutôt une différence dans son allocation."
        },
        en: {
            question: "Do you tend to notice details that others miss, while missing elements that everyone else seems to see?",
            explanation: "ADHD can create a unique attention pattern where minor details intensely capture attention, while more obvious elements might go unnoticed. It's not a lack of attention, but rather a difference in its allocation."
        }
    },
    {
        fr: {
            question: "Ressentez-vous parfois une fatigue intense après des interactions sociales, même agréables ?",
            explanation: "Le traitement constant des stimuli sociaux peut être particulièrement exigeant pour un cerveau TDAH. Cette 'fatigue sociale' n'est pas due à un manque d'appréciation des interactions, mais à l'effort cognitif nécessaire pour gérer simultanément la conversation, les signaux non-verbaux et l'environnement."
        },
        en: {
            question: "Do you sometimes feel intense fatigue after social interactions, even enjoyable ones?",
            explanation: "Constant processing of social stimuli can be particularly demanding for an ADHD brain. This 'social fatigue' isn't due to a lack of appreciation for interactions, but rather the cognitive effort required to simultaneously manage conversation, non-verbal cues, and environment."
        }
    },
    {
        fr: {
            question: "Avez-vous des moments de clarté mentale exceptionnelle qui surviennent de manière imprévisible ?",
            explanation: "Les personnes TDAH peuvent expérimenter des périodes de lucidité cognitive intense et imprévisible, parfois appelées 'moments de clarté'. Ces états peuvent survenir spontanément et sont différents de l'hyperfocus, représentant plutôt une synchronisation temporaire optimale des processus cognitifs."
        },
        en: {
            question: "Do you experience moments of exceptional mental clarity that occur unpredictably?",
            explanation: "People with ADHD may experience periods of intense and unpredictable cognitive lucidity, sometimes called 'clarity moments'. These states can occur spontaneously and are different from hyperfocus, rather representing a temporary optimal synchronization of cognitive processes."
        }
    },
    {
        fr: {
            question: "Trouvez-vous que votre niveau d'organisation varie drastiquement selon les domaines de votre vie ?",
            explanation: "Le TDAH peut créer des contrastes marqués dans les niveaux d'organisation : une personne peut être exceptionnellement organisée dans certains domaines tout en ayant des difficultés majeures dans d'autres, sans lien apparent avec l'importance relative de ces domaines."
        },
        en: {
            question: "Do you find that your level of organization varies drastically across different areas of your life?",
            explanation: "ADHD can create marked contrasts in organization levels: a person might be exceptionally organized in some areas while having major difficulties in others, with no apparent connection to the relative importance of these areas."
        }
    },
    {
        fr: {
            question: "Avez-vous développé des systèmes complexes pour gérer des tâches apparemment simples ?",
            explanation: "Les personnes TDAH créent souvent des systèmes élaborés pour gérer des tâches quotidiennes. Ces 'échafaudages cognitifs' peuvent sembler excessifs aux autres mais sont essentiels pour compenser les défis exécutifs sous-jacents."
        },
        en: {
            question: "Have you developed complex systems to manage apparently simple tasks?",
            explanation: "People with ADHD often create elaborate systems to manage daily tasks. These 'cognitive scaffoldings' might seem excessive to others but are essential to compensate for underlying executive challenges."
        }
    },
    {
        fr: {
            question: "Remarquez-vous que votre capacité à articuler vos pensées varie considérablement selon le contexte ?",
            explanation: "La fluence verbale dans le TDAH peut être très variable : excellente dans certains contextes et significativement réduite dans d'autres, indépendamment de la maîtrise du sujet. Cette variabilité est liée à la régulation de l'attention et au traitement des informations contextuelles."
        },
        en: {
            question: "Do you notice that your ability to articulate your thoughts varies considerably depending on the context?",
            explanation: "Verbal fluency in ADHD can be highly variable: excellent in some contexts and significantly reduced in others, regardless of subject mastery. This variability is related to attention regulation and contextual information processing."
        }
    },
    {
        fr: {
            question: "Ressentez-vous parfois une sensation de paralysie face à une tâche, même si vous savez exactement ce qu'il faut faire ?",
            explanation: "Cette 'paralysie de l'initiation' est distincte de la procrastination classique. C'est un état où la personne veut agir, comprend la tâche, mais rencontre un blocage neurologique dans le démarrage de l'action, malgré sa volonté et sa compréhension."
        },
        en: {
            question: "Do you sometimes experience a sense of paralysis when facing a task, even if you know exactly what needs to be done?",
            explanation: "This 'initiation paralysis' is distinct from classic procrastination. It's a state where the person wants to act, understands the task, but encounters a neurological block in starting the action, despite their willingness and understanding."
        }
    },
    {
        fr: {
            question: "Avez-vous remarqué que votre sensibilité aux stimuli (bruits, textures, lumières) varie fortement selon votre niveau de fatigue mentale ?",
            explanation: "La sensibilité sensorielle dans le TDAH n'est pas constante mais peut fluctuer significativement. Cette variabilité est souvent liée à l'épuisement des ressources attentionnelles, créant des périodes de sensibilité accrue qui peuvent surprendre par leur intensité."
        },
        en: {
            question: "Have you noticed that your sensitivity to stimuli (noises, textures, lights) varies greatly depending on your level of mental fatigue?",
            explanation: "Sensory sensitivity in ADHD isn't constant but can fluctuate significantly. This variability is often linked to the depletion of attentional resources, creating periods of increased sensitivity that can be surprising in their intensity."
        }
    },
    {
        fr: {
            question: "Vous arrive-t-il de ressentir un besoin urgent de réorganiser votre environnement au milieu d'une tâche importante ?",
            explanation: "Cette impulsion de réorganisation soudaine peut être une manifestation de la recherche de régulation sensorielle et cognitive. Le cerveau TDAH peut utiliser ces réorganisations comme moyen de réinitialiser son système attentionnel surchargé."
        },
        en: {
            question: "Do you sometimes feel an urgent need to reorganize your environment in the middle of an important task?",
            explanation: "This sudden reorganization impulse can be a manifestation of seeking sensory and cognitive regulation. The ADHD brain might use these reorganizations as a way to reset its overloaded attention system."
        }
    },
    {
        fr: {
            question: "Trouvez-vous que votre mémoire fonctionne de manière particulièrement associative plutôt que chronologique ?",
            explanation: "La mémoire TDAH fonctionne souvent par associations et connexions plutôt que par séquences temporelles. Les souvenirs peuvent être très détaillés mais difficiles à situer dans le temps, créant une expérience mémorielle plus thématique que chronologique."
        },
        en: {
            question: "Do you find that your memory works in a particularly associative rather than chronological way?",
            explanation: "ADHD memory often works through associations and connections rather than temporal sequences. Memories can be very detailed but difficult to place in time, creating a more thematic than chronological memory experience."
        }
    },
    {
        fr: {
            question: "Avez-vous remarqué que votre capacité à maintenir des habitudes varie selon des cycles imprévisibles ?",
            explanation: "La maintenance des habitudes dans le TDAH peut suivre des cycles non linéaires. Une habitude peut être parfaitement maintenue pendant des semaines puis inexplicablement difficile à suivre, indépendamment de sa valeur perçue ou de sa difficulté."
        },
        en: {
            question: "Have you noticed that your ability to maintain habits varies in unpredictable cycles?",
            explanation: "Habit maintenance in ADHD can follow non-linear cycles. A habit can be perfectly maintained for weeks then inexplicably difficult to follow, regardless of its perceived value or difficulty."
        }
    },
    {
        fr: {
            question: "Ressentez-vous parfois une forme de 'soif mentale' pour de nouvelles informations, même quand vous êtes fatigué(e) ?",
            explanation: "Cette 'soif cognitive' est liée au besoin de stimulation dopaminergique du cerveau TDAH. Elle peut persister même en état de fatigue, créant un état paradoxal où l'esprit recherche activement de nouvelles informations malgré l'épuisement."
        },
        en: {
            question: "Do you sometimes experience a kind of 'mental thirst' for new information, even when you're tired?",
            explanation: "This 'cognitive thirst' is related to the ADHD brain's need for dopaminergic stimulation. It can persist even in a state of fatigue, creating a paradoxical state where the mind actively seeks new information despite exhaustion."
        }
    },
    {
        fr: {
            question: "Avez-vous développé une conscience aiguë de vos cycles d'énergie et d'attention ?",
            explanation: "Les personnes TDAH développent souvent une métacognition sophistiquée de leurs états attentionnels, devenant expertes dans la lecture de leurs propres cycles d'énergie et de concentration, même si elles ne peuvent pas toujours les contrôler."
        },
        en: {
            question: "Have you developed an acute awareness of your energy and attention cycles?",
            explanation: "People with ADHD often develop sophisticated metacognition of their attentional states, becoming experts in reading their own energy and concentration cycles, even if they can't always control them."
        }
    },
    {
        fr: {
            question: "Remarquez-vous que votre créativité s'exprime différemment selon votre niveau de stress ?",
            explanation: "Le stress peut avoir un effet paradoxal sur la créativité TDAH, tantôt la stimulant de manière exceptionnelle, tantôt la bloquant complètement. Cette relation non-linéaire avec le stress est caractéristique du fonctionnement neurodivergent."
        },
        en: {
            question: "Do you notice that your creativity expresses itself differently depending on your stress level?",
            explanation: "Stress can have a paradoxical effect on ADHD creativity, sometimes stimulating it exceptionally, sometimes blocking it completely. This non-linear relationship with stress is characteristic of neurodivergent functioning."
        }
    },
    {
        fr: {
            question: "Avez-vous tendance à accumuler plusieurs projets inachevés qui vous passionnent tous autant ?",
            explanation: "Le cerveau TDAH est souvent attiré par le potentiel et les débuts de projets. Cette multiplicité d'intérêts simultanés reflète une curiosité naturelle et une capacité à voir les possibilités, même si cela peut mener à une accumulation de projets en cours."
        },
        en: {
            question: "Do you tend to accumulate several unfinished projects that all passion you equally?",
            explanation: "The ADHD brain is often attracted to potential and project beginnings. This multiplicity of simultaneous interests reflects a natural curiosity and ability to see possibilities, even if it can lead to an accumulation of ongoing projects."
        }
    },
    {
        fr: {
            question: "Ressentez-vous parfois une empathie si intense qu'elle devient presque envahissante ?",
            explanation: "L'hyperempathie est une caractéristique moins connue du TDAH. Cette sensibilité émotionnelle accrue peut être liée à une perception plus intense des signaux sociaux et émotionnels, créant parfois une surcharge empathique."
        },
        en: {
            question: "Do you sometimes feel empathy so intense it becomes almost overwhelming?",
            explanation: "Hyperempathy is a lesser-known characteristic of ADHD. This increased emotional sensitivity can be linked to more intense perception of social and emotional signals, sometimes creating empathic overload."
        }
    },
    {
        fr: {
            question: "Avez-vous remarqué que votre niveau de motivation peut changer radicalement en quelques minutes ?",
            explanation: "Les fluctuations rapides de motivation sont caractéristiques du TDAH, liées aux variations de dopamine. Une tâche peut passer d'extrêmement motivante à totalement inintéressante en peu de temps, indépendamment de son importance."
        },
        en: {
            question: "Have you noticed that your motivation level can change radically within minutes?",
            explanation: "Rapid motivation fluctuations are characteristic of ADHD, linked to dopamine variations. A task can go from extremely motivating to totally uninteresting in a short time, regardless of its importance."
        }
    },
    {
        fr: {
            question: "Trouvez-vous plus facile de maintenir votre attention dans des environnements en mouvement ?",
            explanation: "Certaines personnes TDAH se concentrent mieux dans des environnements dynamiques comme les cafés ou les transports. Ce paradoxe apparent s'explique par le fait que le bruit de fond peut aider à réguler le niveau de stimulation cognitive."
        },
        en: {
            question: "Do you find it easier to maintain your attention in moving environments?",
            explanation: "Some people with ADHD concentrate better in dynamic environments like cafes or transportation. This apparent paradox is explained by the fact that background noise can help regulate cognitive stimulation levels."
        }
    },
    {
        fr: {
            question: "Avez-vous développé des rituels complexes pour gérer vos transitions entre différentes activités ?",
            explanation: "Les transitions peuvent être particulièrement difficiles pour le cerveau TDAH. Développer des rituels de transition est une adaptation courante qui aide à gérer le changement de contexte et à maintenir un fil conducteur entre les activités."
        },
        en: {
            question: "Have you developed complex rituals to manage your transitions between different activities?",
            explanation: "Transitions can be particularly challenging for the ADHD brain. Developing transition rituals is a common adaptation that helps manage context switching and maintain a thread between activities."
        }
    },
    {
        fr: {
            question: "Remarquez-vous que votre écriture ou votre façon de parler change significativement selon votre niveau d'engagement ?",
            explanation: "La variabilité de l'expression, qu'elle soit écrite ou orale, est souvent liée au niveau d'engagement dans le TDAH. Cette fluctuation peut créer des contrastes marqués dans la qualité et le style de communication."
        },
        en: {
            question: "Do you notice that your writing or way of speaking changes significantly depending on your level of engagement?",
            explanation: "Variability in expression, whether written or oral, is often linked to engagement level in ADHD. This fluctuation can create marked contrasts in communication quality and style."
        }
    },
    {
        fr: {
            question: "Avez-vous une capacité particulière à remarquer des connexions inhabituelles entre des concepts différents ?",
            explanation: "La pensée associative divergente est une force du TDAH. Cette capacité à voir des liens non évidents peut mener à des insights créatifs uniques, même si elle peut parfois rendre la communication de ces idées plus complexe."
        },
        en: {
            question: "Do you have a particular ability to notice unusual connections between different concepts?",
            explanation: "Divergent associative thinking is a strength of ADHD. This ability to see non-obvious links can lead to unique creative insights, even if it can sometimes make communicating these ideas more complex."
        }
    },
    {
        fr: {
            question: "Ressentez-vous parfois le besoin de bouger ou de vous agiter pour mieux réfléchir ?",
            explanation: "Le mouvement peut stimuler les fonctions cognitives dans le TDAH. Cette 'pensée kinesthésique' où le mouvement facilite la réflexion est une adaptation naturelle qui améliore le traitement cognitif."
        },
        en: {
            question: "Do you sometimes feel the need to move or fidget to think better?",
            explanation: "Movement can stimulate cognitive functions in ADHD. This 'kinesthetic thinking' where movement facilitates reflection is a natural adaptation that improves cognitive processing."
        }
    },
    {
        fr: {
            question: "Avez-vous remarqué que votre sens du temps s'améliore dans des situations de pression positive ?",
            explanation: "La gestion du temps peut s'améliorer significativement sous une pression positive dans le TDAH. Ce phénomène est lié à l'augmentation de la dopamine dans des situations de défi stimulant."
        },
        en: {
            question: "Have you noticed that your sense of time improves in situations of positive pressure?",
            explanation: "Time management can improve significantly under positive pressure in ADHD. This phenomenon is linked to increased dopamine in stimulating challenge situations."
        }
    },
    {
        fr: {
            question: "Trouvez-vous plus facile de maintenir une routine quand vous la partagez avec d'autres ?",
            explanation: "La responsabilité partagée peut être un puissant stabilisateur pour les personnes TDAH. L'engagement social ajoute une dimension de motivation externe qui peut renforcer la maintenance des habitudes."
        },
        en: {
            question: "Do you find it easier to maintain a routine when you share it with others?",
            explanation: "Shared accountability can be a powerful stabilizer for people with ADHD. Social engagement adds an external motivation dimension that can strengthen habit maintenance."
        }
    },
    {
        fr: {
            question: "Avez-vous développé une sensibilité particulière aux incohérences dans votre environnement ?",
            explanation: "Le cerveau TDAH peut être particulièrement attentif aux détails qui 'ne collent pas'. Cette hypervigilance aux incohérences peut être à la fois un atout dans certaines situations et une source de distraction dans d'autres."
        },
        en: {
            question: "Have you developed a particular sensitivity to inconsistencies in your environment?",
            explanation: "The ADHD brain can be particularly attentive to details that 'don't fit'. This hypervigilance to inconsistencies can be both an asset in some situations and a source of distraction in others."
        }
    },
    {
        fr: {
            question: "Remarquez-vous que votre capacité à vous concentrer augmente significativement en présence d'une deadline imminente ?",
            explanation: "L'urgence peut déclencher une concentration intense chez les personnes TDAH. Ce phénomène, parfois appelé 'panic working', est lié à la libération d'adrénaline qui peut temporairement compenser les défis attentionnels."
        },
        en: {
            question: "Do you notice that your ability to focus increases significantly in the presence of an imminent deadline?",
            explanation: "Urgency can trigger intense concentration in people with ADHD. This phenomenon, sometimes called 'panic working', is linked to adrenaline release that can temporarily compensate for attentional challenges."
        }
    },
    {
        fr: {
            question: "Avez-vous tendance à absorber involontairement les émotions et l'énergie des personnes autour de vous ?",
            explanation: "La perméabilité émotionnelle est courante dans le TDAH. Cette sensibilité aux états émotionnels environnants peut être à la fois une force en termes d'intelligence sociale et un défi pour maintenir ses propres frontières émotionnelles."
        },
        en: {
            question: "Do you tend to involuntarily absorb the emotions and energy of people around you?",
            explanation: "Emotional permeability is common in ADHD. This sensitivity to surrounding emotional states can be both a strength in terms of social intelligence and a challenge for maintaining one's own emotional boundaries."
        }
    },
    {
        fr: {
            question: "Trouvez-vous que votre créativité s'exprime le mieux dans des situations improvisées ?",
            explanation: "L'improvisation peut stimuler particulièrement la créativité TDAH. La spontanéité et l'absence de contraintes préétablies permettent souvent une expression plus fluide des idées et des solutions innovantes."
        },
        en: {
            question: "Do you find that your creativity expresses itself best in improvised situations?",
            explanation: "Improvisation can particularly stimulate ADHD creativity. Spontaneity and the absence of pre-established constraints often allow for more fluid expression of ideas and innovative solutions."
        }
    },
    {
        fr: {
            question: "Ressentez-vous une hypersensibilité aux textures, aux sons ou aux sensations physiques qui affecte votre quotidien ?",
            explanation: "L'hypersensibilité sensorielle est une caractéristique fréquente du TDAH. Le cerveau TDAH peut traiter les informations sensorielles de manière plus intense, rendant certaines textures, sons, ou sensations physiques particulièrement envahissants ou inconfortables. Cette sensibilité accrue peut influencer les choix quotidiens, des vêtements portés aux environnements fréquentés."
        },
        en: {
            question: "Do you experience hypersensitivity to textures, sounds, or physical sensations that affects your daily life?",
            explanation: "Sensory hypersensitivity is a common characteristic of ADHD. The ADHD brain may process sensory information more intensely, making certain textures, sounds, or physical sensations particularly overwhelming or uncomfortable. This increased sensitivity can influence daily choices, from clothing worn to environments frequented."
        }
    },
    {
        fr: {
            question: "Vos émotions sont-elles ressenties de manière particulièrement intense, avec des réactions émotionnelles qui semblent disproportionnées pour les autres ?",
            explanation: "La dysrégulation émotionnelle et l'hypersensibilité affective sont des composantes centrales du TDAH. Les personnes TDAH peuvent ressentir les émotions avec une intensité démultipliée et avoir plus de difficultés à les réguler. Cette sensibilité accrue peut se manifester par des réactions émotionnelles plus vives, une difficulté à 'redescendre' après une émotion forte, et un impact plus profond des expériences émotionnelles sur le quotidien."
        },
        en: {
            question: "Do you experience emotions particularly intensely, with emotional reactions that might seem disproportionate to others?",
            explanation: "Emotional dysregulation and affective hypersensitivity are core components of ADHD. People with ADHD may experience emotions with multiplied intensity and have more difficulty regulating them. This increased sensitivity can manifest as more vivid emotional reactions, difficulty 'coming down' after strong emotions, and a deeper impact of emotional experiences on daily life."
        }
    },
    {
        fr: {
            question: "Remarquez-vous des variations importantes dans votre capacité à parler ou comprendre une langue étrangère selon votre niveau de fatigue ou de stress ?",
            explanation: "Les personnes TDAH peuvent expérimenter des fluctuations marquées dans leurs compétences linguistiques. Cette variabilité peut se manifester par une excellente maîtrise dans certains contextes (notamment lors d'interactions spontanées ou passionnantes) contrastant avec des difficultés significatives dans d'autres situations (comme lors de fatigue ou de stress). Cette particularité est liée à la façon dont le cerveau TDAH traite et accède aux informations linguistiques, fortement influencée par le niveau d'engagement et l'état émotionnel du moment."
        },
        en: {
            question: "Do you notice significant variations in your ability to speak or understand a foreign language depending on your level of fatigue or stress?",
            explanation: "People with ADHD may experience marked fluctuations in their language skills. This variability can manifest as excellent proficiency in certain contexts (particularly during spontaneous or exciting interactions) contrasting with significant difficulties in other situations (such as during fatigue or stress). This particularity is related to how the ADHD brain processes and accesses linguistic information, heavily influenced by the current level of engagement and emotional state."
        }
    }
];

const scoreRanges = [
    {
        min: 0,
        max: 25,
        fr: {
            explanation: "Votre profil montre peu de caractéristiques associées au TDAH. Si certains aspects de l'attention ou de l'organisation vous préoccupent, il peut être utile d'explorer d'autres facteurs qui pourraient influencer votre fonctionnement cognitif."
        },
        en: {
            explanation: "Your profile shows few characteristics associated with ADHD. If certain aspects of attention or organization concern you, it might be useful to explore other factors that could influence your cognitive functioning."
        }
    },
    {
        min: 26,
        max: 50,
        fr: {
            explanation: "Vous présentez certaines caractéristiques qui pourraient être associées au TDAH, bien que le profil ne soit pas typique. Ces traits peuvent être liés à d'autres facteurs ou représenter une expression légère de la neurodivergence."
        },
        en: {
            explanation: "You show some characteristics that might be associated with ADHD, although the profile isn't typical. These traits might be related to other factors or represent a mild expression of neurodivergence."
        }
    },
    {
        min: 51,
        max: 75,
        fr: {
            explanation: "Votre profil suggère plusieurs caractéristiques significatives du TDAH. La manière dont ces traits s'expriment dans votre vie quotidienne mériterait une exploration plus approfondie avec un professionnel spécialisé."
        },
        en: {
            explanation: "Your profile suggests several significant ADHD characteristics. How these traits express themselves in your daily life would merit further exploration with a specialized professional."
        }
    },
    {
        min: 76,
        max: 100,
        fr: {
            explanation: "Vous présentez de nombreuses caractéristiques fortement associées au TDAH. Une évaluation professionnelle pourrait vous aider à mieux comprendre votre fonctionnement cognitif et à développer des stratégies adaptées à votre profil neurologique."
        },
        en: {
            explanation: "You show many characteristics strongly associated with ADHD. A professional evaluation could help you better understand your cognitive functioning and develop strategies adapted to your neurological profile."
        }
    }
]; 