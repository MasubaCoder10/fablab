import ContactForm from "../../components/ContactForm";
import { useTranslations } from 'next-intl';


export default function page() {
  const t = useTranslations('ContactUsPage');
  return (
    <main>
        <div className=" text-center pt-44 mb-12">
        <h2 className=" text-4xl font-bold text-[#064f32]">{t('title')}</h2>
        </div>
        
      <ContactForm/>
      
      
    </main>
  );
}
