import { useTranslations } from "next-intl";
import imgGec from '../../../assets/images/GEC.jpg';
import imgTuring from '../../../assets/images/Turing.webp';
import imgCreativity from '../../../assets/images/Cretivity.png';

export const OngoingProjectsFar = () => {
    const tt = useTranslations('ongoingProjectFar');
  
    return [
      
        {
            id: 1000,
            title: tt('Feriji_1000.title'),
            date: tt('Feriji_1000.date'),
            authors: [
                'Mamadou Keita',
                'Elysabhete Ibrahim',
                'Habibatou Alfari',
                'Christopher Homan',
                "Abdoulaye Hamani Sofianou",
            ],
            publisher: ['Association for Computational Linguistics'],
            researchTopics: ['NLP', 'Low-Resource', 'Zarma'],
            description: tt('Feriji_1000.description'),
            
          },
    ];
};

export const OngoingProjects = () => {
    const t = useTranslations('ongoinProject');
  
    return [
        {
            id: 100,
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
            id: 101,
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
            id: 102,
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
};
