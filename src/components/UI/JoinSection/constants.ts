import { StaticImageData } from 'next/image';
import robert_fox from '../../../../public/images/robert_fox.png';
import cameron_williamson from '../../../../public/images/cameron_williamson.png';
import esther_howard from '../../../../public/images/esther_howard.png';

export type Props = {
  testimony: string;
  person: string;
  avatar: StaticImageData;
};

export const testimonials = [
  {
    testimony:
      'Afrolink a structuré notre stratégie sociale et produit des contenus qui ont fait exploser notre taux de rétention. Leur approche data-driven change tout.',
    person: 'Robert Fox',
    avatar: robert_fox,
  },
  {
    testimony:
      "Grâce à Afrolink, nous avons enfin une orchestration cohérente entre paid, owned et earned media. Les reportings hebdomadaires nous permettent d'itérer vite.",
    person: 'Cameron Williamson',
    avatar: cameron_williamson,
  },
  {
    testimony:
      "Leur studio interne a livré une campagne phygitale mémorable. Notre communauté s'est approprié l'expérience et les conversions ont suivi.",
    person: 'Esther Howard',
    avatar: esther_howard,
  },
  {
    testimony:
      "Grâce à Afrolink, nous avons enfin une orchestration cohérente entre paid, owned et earned media. Les reportings hebdomadaires nous permettent d'itérer vite.",
    person: 'Cameron Williamson',
    avatar: cameron_williamson,
  },
  {
    testimony:
      'Afrolink a structuré notre stratégie sociale et produit des contenus qui ont fait exploser notre taux de rétention. Leur approche data-driven change tout.',
    person: 'Robert Fox',
    avatar: robert_fox,
  },
];

export const desktopHeaderPhrase = [
  'Ils racontent leur collaboration',
  'avec Afrolink',
];
