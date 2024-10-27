// teamMembersData.js
import { useTranslations } from 'next-intl';
import imKeita from '../../../assets/images/MK.jpg'

export function GetTeamMembers() {
  const tt = useTranslations('teamMembers');

  return [
    {
      id: 1,
      name: 'Mamadou K. KEITA',
      position: tt('sofiane.position'),
      bio: tt('sofiane.bio'),
      story: tt('sofiane.story'),
      quote: tt('sofiane.quote'),
      linkFacebook: "#",
      linkLinkdin: "#",
      linkTwitter: "#",
      image: imKeita,
    },
    {
      id: 2,
      name: 'Mamadou K. KEITA',
      position: tt('maya.position'),
      bio: tt('maya.bio'),
      story: tt('maya.story'),
      quote: tt('maya.quote'),
      linkFacebook: "#",
      linkLinkdin: "#",
      linkTwitter: "#",
      image: imKeita,
    },
    {
      id: 3,
      name: 'Mamadou K. KEITA',
      position: tt('ali.position'),
      bio: tt('ali.bio'),
      story: tt('ali.story'),
      quote: tt('ali.quote'),
      linkFacebook: "#",
      linkLinkdin: "#",
      linkTwitter: "#",
      image: imKeita,
    },
    {
      id: 4,
      name: 'Mamadou K. KEITA',
      position: tt('ali.position'),
      bio: tt('ali.bio'),
      story: tt('ali.story'),
      quote: tt('ali.quote'),
      linkFacebook: "#",
      linkLinkdin: "#",
      linkTwitter: "#",
      image: imKeita,
    },
  ];
}

export default GetTeamMembers;