import { useTranslations } from 'next-intl';
import firiji from "../../../assets/images/feriji_logo.png"
import gec from "../../../assets/images/Couverture (1).png"
import spell from "../../../assets/images/spell.jpg"
export function GetBlogPosts() {
  const tt = useTranslations('blogPosts');

  return [
    {
      id: 'niLabBlog001',
      title: tt('niLabBlog001.title'),
      description: tt('niLabBlog001.description'),
      link:"https://huggingface.co/spaces/Mamadou2727/Feriji_Translator",
      imageSrc: firiji,
    },
    {
      id: 'niLabBlog002',
      title: tt('niLabBlog002.title'),
      description: tt('niLabBlog002.description'),
      link: "https://huggingface.co/spaces/Mamadou2727/correction-zarma",
      imageSrc: spell,
    },
    {
      id: 'niLabBlog003',
      title: tt('niLabBlog003.title'),
      description: tt('niLabBlog003.description'),
      link: "https://sites.google.com/view/feriji-site/accueil",
      imageSrc: gec,
      
    },
   
  ];
}
export default GetBlogPosts;