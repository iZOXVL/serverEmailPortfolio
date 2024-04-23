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
  import avllogo from "../../public/avllogo.png"
  
  interface VercelInviteUserEmailProps {
    nombre?: string;
  }
  
  const baseUrl = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "";
  
  export const VercelInviteUserEmail = ({
    nombre,
  }: VercelInviteUserEmailProps) => {
    const previewText = `Hola ${nombre}, He recibido tu mensaje pronto me pondré en contacto contigo.`;
  
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
              Gracias por contactarme<strong> {nombre} </strong>❤️
              </Heading>
              <Text className="text-black text-[14px] leading-[24px]">
                Hola <strong>{nombre}</strong>,
              </Text>
              <Text className="text-black text-[14px] leading-[24px]">
              Gracias por <strong>contactarme</strong>❤️<br />
                He recibido tu mensaje, <strong>pronto</strong> me pondré en contacto
                <strong> contigo</strong>.
              </Text>
              <Section className="text-center mt-[32px] mb-[32px]">
                <Button
                  className="bg-[#000000] rounded text-white text-[12px] font-semibold no-underline text-center px-5 py-3"
                  href="https://wa.me/525653408970"
                >
                  Enviar whatsapp
                </Button>
              </Section>
              <Text className="text-black text-[14px] leading-[24px]">
                o copia y pega esto en tu navegador:{" "}
                <Link href="https://wa.me/525653408970" className="text-blue-600 no-underline">
                https://wa.me/525653408970
                </Link>
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
  
  export default VercelInviteUserEmail;
  