import { Resend } from "resend";
import { EmailTemplate } from "../../components/form/email-template";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const { username, email, phone, projectType, budget, message } =
      await req.json();

    const { data, error } = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>", // TODO: update with the client's address
      to: ["contact@cascadestudio.fr"], // TODO: update with the client's address
      subject: `Nouvelle demande de devis sur votre site : ${username}`,
      react: EmailTemplate({
        username,
        email,
        phone,
        projectType,
        budget,
        message,
      }),
    });

    if (error) {
      return new Response(JSON.stringify({ error }), { status: 400 });
    }

    return new Response(JSON.stringify(data), { status: 200 });
  } catch (error) {
    return new Response(
      JSON.stringify({ error: "Le message n'a pas pu être envoyé" }),
      {
        status: 500,
      }
    );
  }
}
