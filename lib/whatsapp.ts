/**
 * Builds a wa.me link with a pre-filled message.
 *
 * @param phone E.164 without "+" — e.g. "5562000000000" (placeholder; real number from env in Phase 3)
 * @param message pt-BR message to pre-fill the chat
 * @returns "https://wa.me/<phone>?text=<encoded message>"
 */
export function buildWhatsAppLink(opts: { phone: string; message: string }): string {
  const cleanPhone = opts.phone.replace(/\D/g, "");
  const encoded = encodeURIComponent(opts.message);
  return `https://wa.me/${cleanPhone}?text=${encoded}`;
}
