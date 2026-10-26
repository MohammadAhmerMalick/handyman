import { getTranslations } from 'next-intl/server'
import NotFoundScene from '@/components/sections/not-found/NotFoundScene'

const NotFound = async () => {
  const t = await getTranslations('NotFound')

  return (
    <NotFoundScene
      checks={t.raw('checks') as { label: string; value: string }[]}
      description={t('description')}
      eyebrow={t('eyebrow')}
      home={t('home')}
      imageAlt={t('imageAlt')}
      services={t('services')}
      ticket={t('ticket')}
      title={t('title')}
    />
  )
}

export default NotFound
