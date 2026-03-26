export const menu = {
  open: {
    width: '220px',
    height: '280px',
    top: '-10px',
    right: '-10px',
    borderRadius: '16px',
    transition: { duration: 0.6, type: 'tween', ease: [0.76, 0, 0.24, 1] },
  },
  closed: {
    width: '44px',
    height: '44px',
    top: '0px',
    right: '0px',
    borderRadius: '12px',
    transition: {
      duration: 0.6,
      delay: 0.3,
      type: 'tween',
      ease: [0.76, 0, 0.24, 1],
    },
  },
};

export const links = [
  { url: '/', linkTo: 'Accueil' },
  { url: '/services', linkTo: 'Services' },
  { url: '/work', linkTo: 'Notre travail' },
  { url: '/insights', linkTo: 'Actualités' },
];