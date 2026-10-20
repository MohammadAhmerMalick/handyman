'use client'

import { useTranslations } from 'next-intl'
import type { ReactNode } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

const fieldClassName = 'h-12 px-4 text-base md:text-base'

const helpOptions = [
  'helpCommercial',
  'helpResidential',
  'helpIndividual',
  'helpCleaning',
  'helpElectrical',
  'helpAssembly',
] as const

const ContactForm = () => {
  const t = useTranslations('Contact')

  return (
    <Card className="p-0">
      <CardContent className="p-6 sm:p-8">
        <h2 className="font-semibold text-xl">{t('formTitle')}</h2>
        <p className="mt-2 text-muted-foreground text-sm">{t('formNote')}</p>

        <form
          className="mt-8 grid gap-5"
          noValidate
          onSubmit={(event) => event.preventDefault()}
        >
          <Field id="name" label={t('formName')}>
            <Input
              autoComplete="name"
              className={fieldClassName}
              id="name"
              name="lastName"
              placeholder={t('formPlaceholderName')}
              type="text"
            />
          </Field>

          <Field id="email" label={t('formEmail')}>
            <Input
              autoComplete="email"
              className={fieldClassName}
              id="email"
              name="email"
              placeholder={t('formPlaceholderEmail')}
              type="email"
            />
          </Field>

          <Field id="phone" label={t('formPhone')}>
            <Input
              autoComplete="tel"
              className={fieldClassName}
              id="phone"
              name="phone"
              placeholder={t('formPlaceholderPhone')}
              type="tel"
            />
          </Field>

          <fieldset className="grid gap-3">
            <legend className="mb-2 font-medium text-heading text-sm">
              {t('formHelp')}
            </legend>
            <div className="flex flex-wrap gap-3">
              {helpOptions.map((option) => {
                const id = `help-${option}`

                return (
                  <label
                    className="flex cursor-pointer items-center gap-2 rounded-lg bg-input/50 px-3 py-1"
                    htmlFor={id}
                    key={option}
                  >
                    <Checkbox
                      id={id}
                      name="help"
                      value={option}
                      className="border-primary bg-white"
                    />
                    {t(option)}
                  </label>
                )
              })}
            </div>
          </fieldset>

          <Field id="details" label={t('formDetails')}>
            <Textarea
              className="min-h-40 px-4 py-3 text-base md:text-base"
              id="details"
              name="details"
              placeholder={t('formPlaceholderDetails')}
              rows={6}
            />
          </Field>

          <Button className="h-12 w-full text-base" size="lg" type="submit">
            {t('formSubmit')}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}

type FieldProps = {
  children: ReactNode
  id: string
  label: string
}

const Field = ({ children, id, label }: FieldProps) => {
  return (
    <div className="grid gap-2">
      <label className="font-medium text-heading text-sm" htmlFor={id}>
        {label}
      </label>
      {children}
    </div>
  )
}

export default ContactForm
