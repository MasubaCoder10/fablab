import { useTranslations } from "next-intl";

export function OngoingProjectsFar() {
    const tt = useTranslations('ongoingProjectFar');
  
    return [
      
          {
              id: 1000,
              title: tt('Feriji_1000.title'),
              date: tt('Feriji_1000.date'),
            authors: ['Mamadou Keita', 'Elysabhete Ibrahim', ' Habibatou Alfari', 'Christopher Homan'],
            publisher: ['Association for Computational Linguistics'],
            researchTopics: ['NLP', 'Low-Resource', 'Zarma'],
            description: tt('Feriji_1000.description'),
            
          },
  
      
    ]
   }

export default OngoingProjectsFar;