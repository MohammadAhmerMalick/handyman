/** Size from App Router `generateImageMetadata` image routes (`id` is a Promise in Next.js 16). */
export const resolveMetadataImageSize = async (
  id: Promise<string | number> | string | number,
  fallback = 32
) => {
  const resolved = await id

  if (typeof resolved === 'number' && Number.isFinite(resolved)) {
    return resolved
  }

  if (typeof resolved === 'string') {
    const match = resolved.match(/\d+/)
    return match ? Number(match[0]) : fallback
  }

  return fallback
}
