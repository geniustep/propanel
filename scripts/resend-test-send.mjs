/**
 * Usage: node --env-file=.env.local scripts/resend-test-send.mjs <to-email>
 */
const to = process.argv[2];
const key = process.env.RESEND_API_KEY;
const from = process.env.MAIL_FROM;

if (!to) {
  console.error("Usage: node --env-file=.env.local scripts/resend-test-send.mjs <email>");
  process.exit(1);
}
if (!key || !from) {
  console.error("Missing RESEND_API_KEY or MAIL_FROM (.env.local)");
  process.exit(1);
}

const res = await fetch("https://api.resend.com/emails", {
  method: "POST",
  headers: {
    Authorization: `Bearer ${key}`,
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    from,
    to: [to],
    subject: "[PROPANEL] Test Resend",
    text: "Message de test envoyé depuis scripts/resend-test-send.mjs",
    html: "<p>Message de test envoyé depuis <code>scripts/resend-test-send.mjs</code></p>",
  }),
});

const body = await res.json().catch(() => ({}));
console.log("HTTP", res.status);
console.log(JSON.stringify(body, null, 2));
process.exit(res.ok ? 0 : 1);
