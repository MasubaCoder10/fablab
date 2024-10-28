// teamMembersData.js
import { useTranslations } from 'next-intl';
import imKeita from '../../../assets/images/MK.jpg'
import imSofiane from '../../../assets/images/sofiane.jpg'

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
      name: 'Sofianou Abdoulaye Hamani',
      position: tt('maya.position'),
      bio: tt('maya.bio'),
      story: tt('maya.story'),
      quote: tt('maya.quote'),
      linkFacebook: "#",
      linkLinkdin: "#",
      linkTwitter: "#",
      image: imSofiane,
    },
    {
      id: 3,
      name: 'Christopher Homan',
      position: tt('Christopher.position'),
      bio: tt('Christopher.bio'),
      story: tt('Christopher.story'),
      quote: tt('Christopher.quote'),
      linkFacebook: "#",
      linkLinkdin: "#",
      linkTwitter: "#",
      image: "https://claws.rit.edu/photos/getphotoid.php?Client=Marketing&UN=cmhvcs&HASH=fb1896f953e4d5e3b6f0a10b58c93179c47c6c21&T=1730072666",
    },
    {
      id: 3,
      name: 'Seydou Diallo',
      position: tt('ali.position'),
      bio: tt('ali.bio'),
      story: tt('ali.story'),
      quote: tt('ali.quote'),
      linkFacebook: "#",
      linkLinkdin: "#",
      linkTwitter: "#",
      image: ""
       }
  ];
}

export default GetTeamMembers;