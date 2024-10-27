import imgGec from '../../../assets/images/GEC.jpg'; 
import imgTuring from '../../../assets/images/Turing.webp'; 
import imgCreativity from '../../../assets/images/Cretivity.png'; 
import { useTranslations } from 'next-intl';


export function OngoingProjects() {
  const t = useTranslations('ongoingProject');

  return [
    {
        id:100,
        title: t('GEC_ZARMA_100.title'),
        date: t('GEC_ZARMA_100.date'),
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
      description: t('GEC_ZARMA_100.description'),
      imageUrl: imgGec,
    },
    {
      id:101,
      title: t('Turing_101.title'),
      date: t('Turing_101.date'),
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
    description: t('Turing_101.description'),
    imageUrl: imgTuring,
  },
   
  {
    id:102,
    title: t('ASR_102.title'),
    date: t('ASR_102.date'),
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
  description: t('ASR_102.description'),
  imageUrl: imgCreativity,
},
];
}





  export default {OngoingProjects};