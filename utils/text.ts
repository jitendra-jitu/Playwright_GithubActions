export function extractLeadingNumber(text?: string | null): number | null {
  if (!text) return null;
  const match = text.trim().match(/\d+/);
  return match ? parseInt(match[0], 10) : null;
}
