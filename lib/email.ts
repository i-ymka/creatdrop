import { Resend } from "resend";

let resend: Resend | null = null;
function getResend(): Resend {
  if (!resend) resend = new Resend(process.env.RESEND_API_KEY);
  return resend;
}

export async function sendBuyerDownloadLink({
  buyerEmail,
  productName,
  downloadUrl,
}: {
  buyerEmail: string;
  productName: string;
  downloadUrl: string;
}) {
  const from = process.env.RESEND_FROM_EMAIL ?? "onboarding@resend.dev";

  await getResend().emails.send({
    from,
    to: buyerEmail,
    subject: `Your download is ready — ${productName}`,
    html: `
      <h2>Your purchase is confirmed!</h2>
      <p>Thank you for buying <strong>${productName}</strong>.</p>
      <p>
        <a href="${downloadUrl}" style="display:inline-block;padding:12px 24px;background:#7c3aed;color:#fff;border-radius:8px;text-decoration:none;font-weight:bold;">
          Download your file
        </a>
      </p>
      <p style="color:#888;font-size:12px;">
        Save this email — the link works for 60 days.
      </p>
    `,
  });
}

export async function sendWaitlistConfirmation({
  toEmail,
  name,
  currentPosition,
  referralLink,
}: {
  toEmail: string;
  name: string | null;
  currentPosition: number;
  referralLink: string;
}) {
  const from = "hello@creatdrop.com";
  const greeting = name ? `<p>Hi ${name},</p>` : "";

  await getResend().emails.send({
    from,
    to: toEmail,
    subject: `You're on the waitlist! You're #${currentPosition}`,
    html: `
      <h2>You made it!</h2>
      ${greeting}
      <p>You're <strong>#${currentPosition}</strong> on the waitlist.</p>
      <p>Want to move up? Share your link to jump ahead:</p>
      <p>
        <a href="${referralLink}" style="display:inline-block;padding:12px 24px;background:#7c3aed;color:#fff;border-radius:8px;text-decoration:none;font-weight:bold;">
          Share to move up
        </a>
      </p>
      <p style="color:#888;font-size:12px;">${referralLink}</p>
    `,
  });
}

export async function sendWaitlistPositionUpdate({
  toEmail,
  newPosition,
  referralCount,
  referralLink,
}: {
  toEmail: string;
  newPosition: number;
  referralCount: number;
  referralLink: string;
}) {
  const from = "hello@creatdrop.com";

  await getResend().emails.send({
    from,
    to: toEmail,
    subject: `Someone signed up through your link! You're now #${newPosition}`,
    html: `
      <h2>Your referral worked!</h2>
      <p>Someone joined through your link. You've now referred <strong>${referralCount}</strong> ${referralCount === 1 ? "person" : "people"}.</p>
      <p>Your current position: <strong>#${newPosition}</strong></p>
      <p>Keep sharing to move up faster:</p>
      <p>
        <a href="${referralLink}" style="display:inline-block;padding:12px 24px;background:#7c3aed;color:#fff;border-radius:8px;text-decoration:none;font-weight:bold;">
          Share your link
        </a>
      </p>
      <p style="color:#888;font-size:12px;">${referralLink}</p>
    `,
  });
}

export async function sendSaleNotification({
  creatorEmail,
  productName,
  buyerEmail,
  amountPaid, // in cents
}: {
  creatorEmail: string;
  productName: string;
  buyerEmail: string;
  amountPaid: number;
}) {
  const amount = (amountPaid / 100).toFixed(2);
  const from = process.env.RESEND_FROM_EMAIL ?? "onboarding@resend.dev";

  await getResend().emails.send({
    from,
    to: creatorEmail,
    subject: "You made a sale on Creatdrop!",
    html: `
      <h2>You made a sale!</h2>
      <p><strong>Product:</strong> ${productName}</p>
      <p><strong>Amount:</strong> $${amount}</p>
      <p><strong>Buyer:</strong> ${buyerEmail}</p>
      <hr />
      <p><a href="https://creatdrop.com/dashboard">View your dashboard</a></p>
    `,
  });
}
