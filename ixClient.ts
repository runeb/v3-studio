import sanityClient from '@sanity/client'

const ixTemplateReadToken =
  'skVECUDXKd779S6bWC38wnNZeSAA7TeqXOWSYlLZamfX2rvwJp9fhq19lKdXUxM32uLp2dlFTaJoxFmZIGzQ92beuJI10L89k8hAzVRS2R7dcMIgjhcdHgykDtPZL9wXC0AVRHCVLsRodYa7j46yBbv2nIcgLghUFl8Ft4B3jPWG162AfikH'

const ixClient = sanityClient({
  projectId: '0op0oqxf',
  dataset: 'rune-dev',
  token: ixTemplateReadToken,
  apiVersion: '2023-01-01',
  useCdn: false,
})

// runeb/v3-studio template. This is different for every template, obviously
const templateId = '28e0a3c7-9ae0-4a33-8a32-7f29c8b34947'

export const template = async () => {
  return ixClient.fetch('*[_id == $id][0]', {id: templateId})
}
