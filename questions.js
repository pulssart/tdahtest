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