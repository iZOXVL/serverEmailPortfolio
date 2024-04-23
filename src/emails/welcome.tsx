import {
  Body,
  Button,
  Container,
  Column,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Text,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";
import * as React from "react";

interface ContactoEmailProps {
  nombre?: string;
  email?: string;
  asunto?: string;
  mensaje?: string;
}

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "";

export const ContactoEmail = ({
  nombre,
  email,
  asunto,
  mensaje
}: ContactoEmailProps) => {
  const previewText = `Alguien te quiere contactar`;

  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>
      <Tailwind>
        <Body className="bg-white my-auto mx-auto font-sans px-2">
          <Container className="border border-solid border-[#eaeaea] rounded my-[25px] mx-auto p-[20px] max-w-[465px]">
            <Section className="mt-[32px]">
              <Img
                src="https://imgur.com/8LojwgJ.png"
                width="90"
                height="90"
                alt="Logo Armando VL"
                className="my-0 mx-auto"
              />
            </Section>
            <Heading className="text-black text-[24px] font-normal text-center p-0 my-[30px] mx-0">
            Te quiere contactar<strong> {nombre} </strong>
            </Heading>
            <Text className="text-black text-[14px] leading-[24px]">
            <strong>Mensaje: </strong>{mensaje}<br />
            </Text>
            <Text className="text-black text-[14px] leading-[24px]">
           <strong>Asunto: </strong>{asunto}<br />
            </Text>
            <Text className="text-black text-[14px] leading-[24px]">
           <strong>Contacto: </strong>{email}<br />
            </Text>
            <Hr className="border border-solid border-[#eaeaea] my-[26px] mx-0 w-full" />
            <Text className="text-[#666666] text-[12px] leading-[24px]">
             Este correo ha sido generado de forma automatica, por favor no responder a este correo.
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default ContactoEmail;
