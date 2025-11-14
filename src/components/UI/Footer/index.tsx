import Image from 'next/image';
import raft_footer_logo from '../../../../public/svgs/logo_Afrolink-removebg-preview.png';
import qr_code from '../../../../public/svgs/qr_code.svg';
import ic_google_playstore from '../../../../public/svgs/ic_google_playstore.svg';
import ic_baseline_apple from '../../../../public/svgs/ic_baseline_apple.svg';
import ic_chevron_down from '../../../../public/svgs/ic_chevron_down.svg';
import ic_copyright from '../../../../public/svgs/ic_copyright.svg';

const linksArr = [
  {
    title: 'Agence',
    links: ['Notre mission', 'Équipe', 'Recrutement'],
  },
  {
    title: 'Expertises',
    links: ['Stratégie digitale', 'Production créative', 'Activation média'],
  },
  {
    title: 'Ressources',
    links: ['Contact', 'FAQ', 'Blog'],
  },
];

import {
  Wrapper,
  Inner,
  FooterLogo,
  FooterMainContent,
  FooterMiddle,
  QRContainer,
  QRImageCtn,
  TextCtn,
  IconCtn,
  FooterNavigation,
  GridColumn,
  LinksContainer,
  FooterBottom,
  Translator,
  CopyRight,
} from './styles';

const Footer = () => {
  return (
    <Wrapper>
      <Inner>
        <FooterLogo>
          {/* Image : logo Afrolink en pied de page - remplacez le SVG pour actualiser l'identité */}
          <Image src={raft_footer_logo} alt="Logo Afrolink en pied de page" />
        </FooterLogo>
        <FooterMainContent>
          <FooterMiddle>
            <QRContainer>
              <QRImageCtn>
                {/* Image : QR code de téléchargement - mettez à jour ce visuel si le lien change */}
                <Image src={qr_code} alt="QR code de téléchargement" />
              </QRImageCtn>
              <TextCtn>
                <p>Scannez pour accéder à notre board de ressources et aux kits média.</p>
                <IconCtn>
                  {/* Image : badge Google Play - remplacez le SVG pour actualiser le bouton */}
                  <Image src={ic_google_playstore} alt="Accès ressources via Google Play" />
                  {/* Image : badge Apple - remplacez le SVG pour actualiser le bouton */}
                  <Image src={ic_baseline_apple} alt="Accès ressources via Apple" />
                </IconCtn>
              </TextCtn>
            </QRContainer>
            <FooterNavigation>
              {linksArr.map((l, i) => (
                <GridColumn key={i}>
                  <h3>{l.title}</h3>
                  <LinksContainer>
                    {l.links.map((link, i) => (
                      <li key={i}>{link}</li>
                    ))}
                  </LinksContainer>
                </GridColumn>
              ))}
            </FooterNavigation>
          </FooterMiddle>
          <FooterBottom>
            <Translator>
              <h3>Français (Civ)</h3>
              {/* Image : flèche du sélecteur de langue - modifiez le SVG pour changer l'icône */}
              <Image src={ic_chevron_down} alt="Sélection de langue" />
            </Translator>
            <CopyRight>
              {/* Image : pictogramme copyright - remplacez le SVG si la charte évolue */}
              <Image src={ic_copyright} alt="Symbole copyright" />
              Afrolink Studio · 2025
            </CopyRight>
          </FooterBottom>
        </FooterMainContent>
      </Inner>
    </Wrapper>
  );
};

export default Footer;
