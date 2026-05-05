import { ImapFlow } from "imapflow";

export type InboxMessagePreview = {
  uid: number;
  seq: number;
  subject?: string;
  from?: string;
  date?: Date;
};

function getAuth() {
  const user = process.env.GMAIL_USER;
  const pass = process.env.GMAIL_APP_PASSWORD?.replace(/\s/g, "");
  if (!user || !pass) {
    throw new Error("Variables GMAIL_USER et GMAIL_APP_PASSWORD requises pour IMAP");
  }
  return { user, pass };
}

function createImapClient() {
  const { user, pass } = getAuth();
  return new ImapFlow({
    host: "imap.gmail.com",
    port: 993,
    secure: true,
    auth: { user, pass },
    logger: false,
  });
}

/**
 * Lit les derniers messages de la boîte INBOX via IMAP (pas SMTP).
 * Gmail : « Mot de passe d\'application » comme pour l\'envoi SMTP.
 */
export async function fetchRecentInboxMessages(limit = 10): Promise<InboxMessagePreview[]> {
  const client = createImapClient();
  await client.connect();

  try {
    const lock = await client.getMailboxLock("INBOX");
    try {
      const mbox = client.mailbox;
      if (!mbox || mbox.exists === 0) return [];

      const total = mbox.exists;
      const start = Math.max(1, total - limit + 1);
      const range = `${start}:${total}`;
      const out: InboxMessagePreview[] = [];

      for await (const msg of client.fetch(range, { envelope: true, uid: true })) {
        const env = msg.envelope;
        const fromAddr = env?.from?.[0];
        const from =
          fromAddr?.name && fromAddr?.address
            ? `${fromAddr.name} <${fromAddr.address}>`
            : fromAddr?.address ?? fromAddr?.name;

        out.push({
          uid: msg.uid,
          seq: msg.seq,
          subject: env?.subject ?? undefined,
          from,
          date: env?.date instanceof Date ? env.date : env?.date ? new Date(env.date) : undefined,
        });
      }

      return out;
    } finally {
      lock.release();
    }
  } finally {
    await client.logout();
  }
}
