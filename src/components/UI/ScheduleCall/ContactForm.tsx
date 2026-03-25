'use client';

import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

// ── Palette ──────────────────────────────────────────────────────────────────
const COLOR = {
  gradStart: '#e27c00',
  gradEnd:   '#ffa500',
  black:     '#000000',
  white:     '#ffffff',
  border:    '#cccccc',
  required:  '#e27c00',
  text:      '#333333',
  subtext:   '#555555',
};

// ── Section wrapper ───────────────────────────────────────────────────────────
const Section = styled.section`
  padding: 5rem 2rem;
  background: ${COLOR.white};
  text-align: center;
`;

// ── Hero heading ──────────────────────────────────────────────────────────────
const HeroTitle = styled.h2`
  font-size: clamp(1.6rem, 4vw, 2.6rem);
  font-weight: 900;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  background: linear-gradient(90deg, ${COLOR.gradStart}, ${COLOR.gradEnd});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 1rem;
`;

// ── Sub-heading ───────────────────────────────────────────────────────────────
const SubTitle = styled.p`
  font-size: 1rem;
  color: ${COLOR.subtext};
  max-width: 680px;
  margin: 0 auto 2.5rem;
  line-height: 1.7;
`;

// ── Form ──────────────────────────────────────────────────────────────────────
const StyledForm = styled(motion.form)`
  max-width: 900px;
  margin: 0 auto;
  text-align: left;
  display: flex;
  flex-direction: column;
  gap: 1.4rem;
`;

// ── Two-column row ────────────────────────────────────────────────────────────
const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.4rem;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

// ── Field wrapper ─────────────────────────────────────────────────────────────
const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
`;

// ── Label ─────────────────────────────────────────────────────────────────────
const Label = styled.label`
  font-size: 0.85rem;
  font-weight: 600;
  color: ${COLOR.black};

  span.req {
    color: ${COLOR.required};
    margin-left: 2px;
  }
`;

// ── Shared input styles ───────────────────────────────────────────────────────
const inputBase = `
  padding: 0.65rem 0;
  border: none;
  border-bottom: 1.5px solid ${COLOR.border};
  background: transparent;
  font-size: 1rem;
  color: ${COLOR.black};
  outline: none;
  transition: border-color 0.25s;

  &:focus {
    border-bottom-color: ${COLOR.gradEnd};
  }

  &::placeholder {
    color: #aaa;
  }
`;

const Input = styled.input`${inputBase}`;

const TextArea = styled.textarea`
  ${inputBase}
  min-height: 80px;
  resize: vertical;
`;

// ── RGPD block ────────────────────────────────────────────────────────────────
const RgpdBlock = styled.div`
  font-size: 0.78rem;
  color: ${COLOR.subtext};
  line-height: 1.6;
`;

// ── Checkbox label ────────────────────────────────────────────────────────────
const CheckLabel = styled.label`
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  font-size: 0.82rem;
  color: ${COLOR.text};
  cursor: pointer;
  margin-top: 0.4rem;

  input[type='checkbox'] {
    margin-top: 2px;
    accent-color: ${COLOR.gradEnd};
    flex-shrink: 0;
  }

  span.req {
    color: ${COLOR.required};
  }
`;

// ── Legal text ────────────────────────────────────────────────────────────────
const LegalText = styled.p`
  font-size: 0.78rem;
  color: ${COLOR.subtext};
  margin-top: 0.5rem;
  line-height: 1.6;
`;

// ── Required note ─────────────────────────────────────────────────────────────
const RequiredNote = styled.p`
  font-size: 0.78rem;
  font-weight: 700;
  color: ${COLOR.black};
`;

// ── Submit button ─────────────────────────────────────────────────────────────
const SubmitWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
`;

const Button = styled.button`
  padding: 0.85rem 3rem;
  background: ${COLOR.black};
  color: ${COLOR.white};
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  letter-spacing: 0.04em;
  transition: background 0.3s, transform 0.15s;

  &:hover {
    background: #222;
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }
`;

// ── Component ─────────────────────────────────────────────────────────────────
const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName:   '',
    lastName:    '',
    email:       '',
    phone:       '',
    message:     '',
    acceptComms: false,
    acceptAdvisor: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const target = e.target as HTMLInputElement;
    setFormData({
      ...formData,
      [target.name]: target.type === 'checkbox' ? target.checked : target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
<Section>
  {/* Hero heading */}
  <HeroTitle>Planifiez un appel avec nous&nbsp;!</HeroTitle>

  <SubTitle>
    Un message rapide, une idée de projet ou une question en tête ? 💡<br />
    Partagez-la avec AfroLink via le formulaire ci-dessous, et nous vous répondrons
    rapidement avec clarté et créativité 😊
  </SubTitle>

  <StyledForm
    onSubmit={handleSubmit}
    initial={{ opacity: 0, y: 24 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
  >
    {/* Row 1 – Prénom / Nom */}
    <Row>
      <Field>
        <Label htmlFor="firstName">
          Prénom<span className="req">*</span>
        </Label>
        <Input
          id="firstName"
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          required
        />
      </Field>

      <Field>
        <Label htmlFor="lastName">
          Nom<span className="req">*</span>
        </Label>
        <Input
          id="lastName"
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          required
        />
      </Field>
    </Row>

    {/* Row 2 – Email / Téléphone */}
    <Row>
      <Field>
        <Label htmlFor="email">
          E-mail<span className="req">*</span>
        </Label>
        <Input
          id="email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </Field>

      <Field>
        <Label htmlFor="phone">Numéro de téléphone</Label>
        <Input
          id="phone"
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
        />
      </Field>
    </Row>

    {/* Message */}
    <Field>
      <Label htmlFor="message">
        Votre message<span className="req">*</span>
      </Label>
      <TextArea
        id="message"
        name="message"
        value={formData.message}
        onChange={handleChange}
        required
      />
    </Field>

    {/* Protection des données */}
    <RgpdBlock>
      AfroLink s’engage à protéger et à respecter votre vie privée. Nous utiliserons
      vos données personnelles uniquement pour traiter votre demande et vous fournir
      les services adaptés à vos besoins.
    </RgpdBlock>

    <CheckLabel>
      <input
        type="checkbox"
        name="acceptComms"
        checked={formData.acceptComms}
        onChange={handleChange}
      />
      J’accepte de recevoir des communications de la part d’AfroLink.
    </CheckLabel>

    <CheckLabel>
      <input
        type="checkbox"
        name="acceptAdvisor"
        checked={formData.acceptAdvisor}
        onChange={handleChange}
      />
      J’accepte d’être contacté par un conseiller AfroLink pour une réponse.
      <span className="req">*</span>
    </CheckLabel>

    <LegalText>
      Vous pouvez vous désabonner de ces communications à tout moment.
    </LegalText>

    <LegalText>
      En cliquant sur « Envoyer » ci-dessous, vous autorisez AfroLink à stocker
      et traiter les données personnelles soumises afin de vous fournir le contenu demandé.
    </LegalText>

    <RequiredNote>* champs obligatoires</RequiredNote>

    {/* Submit */}
    <SubmitWrapper>
      <Button type="submit">Envoyer</Button>
    </SubmitWrapper>
  </StyledForm>
</Section>
  );
};

export default ContactForm;