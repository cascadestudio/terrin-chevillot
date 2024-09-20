import { Resend } from "resend";
import { EmailTemplate } from "../../components/form/email-template";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const { firstName } = await req.json();

    const { data, error } = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: ["contact@cascadestudio.fr"],
      subject: "Welcome to Our Service!",
      react: EmailTemplate({ firstName }),
    });

    if (error) {
      return new Response(JSON.stringify({ error }), { status: 400 });
    }

    return new Response(JSON.stringify(data), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Email could not be sent" }), {
      status: 500,
    });
  }
}
