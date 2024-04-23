import { Resend } from "resend";
import { NextResponse } from "next/server";
import VercelInviteUserEmail from "@/emails/contact";
import ContactoEmail from "@/emails/welcome";

const resend = new Resend('re_Yxm2KxeK_38Lkp6RcZfVToVY8PJb8Eexo');


export async function POST(request:Request, response:Response){
    const {nombre, email, asunto, mensaje} = await request.json();
    console.log(nombre, email, asunto, mensaje);
    await resend.emails.send({
        from: 'contacto@armandovl.dev',
        to: [email],
        subject: "Mensaje recibido",
        react: VercelInviteUserEmail({ nombre }),
      });

      await resend.emails.send({
        from: 'contacto@armandovl.dev',
        to: ['armvillagr@gmail.com'],
        subject: asunto,
        react: ContactoEmail({ nombre, email, asunto, mensaje}),
      });

    return NextResponse.json({ success: true});
}
