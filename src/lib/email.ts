import { Resend } from "resend";

function getResend() {
  const key = process.env.RESEND_API_KEY;
  if (!key) throw new Error("RESEND_API_KEY requis");
  return new Resend(key);
}

export type SendMailInput = {
  to: string;
  subject: string;
  text?: string;
  html?: string;
  replyTo?: string | string[];
};

export async function sendMail({ to, subject, text, html, replyTo }: SendMailInput) {
  const from = process.env.MAIL_FROM;
  if (!from) throw new Error("MAIL_FROM requis (ex: PROPANEL <contact@votredomaine.com>)");

  if (html == null && text == null) {
    throw new Error("html ou text requis pour l'envoi");
  }

  const extra = replyTo != null ? { replyTo } : {};

  let result: Awaited<ReturnType<Resend["emails"]["send"]>>;
  if (html != null && text != null) {
    result = await getResend().emails.send({
      from,
      to: [to],
      subject,
      html,
      text,
      ...extra,
    });
  } else if (html != null) {
    result = await getResend().emails.send({
      from,
      to: [to],
      subject,
      html,
      ...extra,
    });
  } else {
    result = await getResend().emails.send({
      from,
      to: [to],
      subject,
      text: text!,
      ...extra,
    });
  }

  if (result.error) throw new Error(result.error.message);
  return result.data;
}

export type ContactPayload = {
  name: string;
  phone?: string;
  email: string;
  message: string;
};

/** Notification formulaire contact vers MAIL_TO (Resend). */
export async function sendContactNotification(payload: ContactPayload) {
  const to = process.env.MAIL_TO;
  if (!to) throw new Error("MAIL_TO requis comme destinataire");

  const { name, phone, email, message } = payload;
  const text = [
    "Nouveau message depuis le site PROPANEL",
    "",
    `Nom : ${name}`,
    phone ? `Téléphone : ${phone}` : null,
    `Email : ${email}`,
    "",
    "Message :",
    message,
  ]
    .filter(Boolean)
    .join("\n");

  const safe = (s: string) =>
    s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

  const html = `<p>Nouveau message depuis le site PROPANEL</p>
<ul>
<li><strong>Nom :</strong> ${safe(name)}</li>
${phone ? `<li><strong>Téléphone :</strong> ${safe(phone)}</li>` : ""}
<li><strong>Email :</strong> ${safe(email)}</li>
</ul>
<p><strong>Message :</strong></p>
<pre style="white-space:pre-wrap;font-family:inherit">${safe(message)}</pre>`;

  return sendMail({
    to,
    subject: `[PROPANEL Contact] ${name}`,
    text,
    html,
    replyTo: email,
  });
}
