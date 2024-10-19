import imgGec from '../../../assets/images/GEC.jpg'; 
import imgTuring from '../../../assets/images/Turing.webp'; 
import imgCreativity from '../../../assets/images/Cretivity.png'; 

export const ongoingProjects = [
    {
        id:100,
      title: 'GEC ZARMA',
      date: "Octobre, 2024",
      authors: [
        "MamadouK.KEITA",
        "Christopher Homan",
        "Abdoulaye Hamani Sofianou",
        "Adwoa Bremang",
        "Marcos Zampieri",
        "Habibatou Abdoulaye Alfari",
        "Elysabhete Amadou Ibrahim",
        "Dennis Owusu"
      ],
      publisher: [
        "NILab",
        "Ashesi University",
        "Rochester Institute of Technology",
        "George Mason University"
      ],
      researchTopics: [
        "NLP, low research language, Error correction"
      ],
      description: " Grammatical error correction (GEC) is important for improving written materials but remains challenging for low-resource languages like Zarma—spoken by over 5 million people in West Africa. This study compares rule-based methods, machine translation (MT) models, and large language models (LLMs) for GEC in Zarma. We evaluate each approach’s effective ness on our built dataset of over 250,000 examples using synthetic and human-annotated data. Our experiments show that the MT-based approach using the M2M100 model outperforms others, achieving a detection rate of 95.82% and a suggestion accuracy of 78.90% in automatic evaluations, and scoring 3.0 out of 5.0 in logical/grammar error correction during manual evaluations by native speakers.The rule-based method achieved perfect detection (100%) and high suggestion accuracy (96.27%) for spelling corrections but struggled with context-level errors. LLMs like MT5 small showed moderate performance with a detection rate of 90.62% and a suggestion accuracy of 57.15%. Our work highlights the potential of MT models to enhance GEC in low-resource languages, paving the way for more inclusive NLP tools.",
      imageUrl: imgGec,
    },
    {
      id:101,
    title: ' Evaluating Human and AI Detection of AI-Generated Poetry: A Turing-like Test',
    date: "Octobre, 2024",
    authors: [
      "MamadouK.KEITA",
      "Christopher Homan",
      "Abdoulaye Hamani Sofianou",
      "Adwoa Bremang",
      "Marcos Zampieri",
      "Habibatou Abdoulaye Alfari",
      "Elysabhete Amadou Ibrahim",
      "Dennis Owusu"
    ],
    publisher: [
      "NILab",
      "Ashesi University",
      "Rochester Institute of Technology",
      "George Mason University"
    ],
    researchTopics: [
      "NLP, low research language, Error correction"
    ],
    description: "As artificial intelligence (AI) models become increasingly proficient in generating human-like text, particularly in creative domains like poetry, concerns arise about distinguishing between human and machine-authored works. In this study, we conduct a Turing-like test to evaluate whether human evaluators can reliably differentiate between human-written and AI-generated poetry. Our findings reveal that human evaluators achieved high identification accuracy—over 95%—with strong confidence levels, effectively distinguishing AI-generated poetry even when advanced models like GPT-4 produced sophisticated completions. In contrast, AI detection tools such as GPTZero and GPTID demonstrated limited effectiveness, with identification accuracies below 60%. These results highlight the challenges faced by AI detection tools in creative contexts and highlight the importance of human judgment in poetry writing.",
    imageUrl: imgTuring,
  },
   
  {
    id:102,
  title: 'ASR dataset for Niger Languages',
  date: "Octobre, 2024",
  authors: [
    "MamadouK.KEITA",
    "Christopher Homan",
    "Abdoulaye Hamani Sofianou",
    "Adwoa Bremang",
    "Marcos Zampieri",
    "Habibatou Abdoulaye Alfari",
    "Elysabhete Amadou Ibrahim",
    "Dennis Owusu"
  ],
  publisher: [
    "NILab",
    "Ashesi University",
    "Rochester Institute of Technology",
    "George Mason University"
  ],
  researchTopics: [
    "NLP, low research language, Error correction"
  ],
  description: " We aim to develop an ASR dataset of up to 20 hours long for 5 Niger languages.",
  imageUrl: imgCreativity,
},
    
  ];

  export const ongoingProjectFar = [
    
        {
            id: 1000,
          title: 'Feriji: A French-Zarma Parallel Corpus, Glossary & Translator',
          authors: ['Mamadou Keita', 'Elysabhete Ibrahim', ' Habibatou Alfari', 'Christopher Homan'],
          publisher: 'Association for Computational Linguistics',
          researchTopics: ['NLP', 'Low-Resource', 'Zarma'],
          description: 'Machine translation (MT) is a rapidly expanding field that has experienced significant advancements in recent years with the development of models capable of translating multiple languages with remarkable accuracy. However, the representation of African languages in this field still needs improvement due to linguistic complexities and limited resources. This applies to the Zarma language, a dialect of Songhay (of the Nilo-Saharan language family) spoken by over 5 million people across Niger and neighboring countries (Lewis et al., 2016). This paper introduces Feriji, the first robust French-Zarma parallel corpus and glossary designed for MT. The corpus, containing 61,085 sentences in Zarma and 42,789 in French, and a glossary of 4,062 words represents a significant step in addressing the need for more resources for Zarma. We fine-tune three large language models on our dataset, obtaining a BLEU score of 30.06 on the best-performing model. We further evaluate the models on human judgments of fluency, comprehension, and readability and the importance and impact of the corpus and models. Our contributions help to bridge a significant language gap and promote an essential and overlooked indigenous African language.',
          date: 'August, 2024',
        },

    
  ]


const projectExports = { ongoingProjects, ongoingProjectFar };


export default projectExports;