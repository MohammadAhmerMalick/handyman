'use client'

import type { ReactNode } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

const fieldClassName = 'h-12 px-4 text-base md:text-base'

const helpOptions = [
  'Commercial',
  'Residential',
  'Individual',
  'Cleaning',
  'Electrical',
  'Assembly',
] as const

const ContactForm = () => {
  return (
    <Card className="p-0">
      <CardContent className="p-6 sm:p-8">
        <h2 className="font-semibold text-xl">Send a message</h2>
        <p className="mt-2 text-muted-foreground text-sm">
          This form does not send yet. Call or WhatsApp for a reply.
        </p>

        <form
          className="mt-8 grid gap-5"
          noValidate
          onSubmit={(event) => event.preventDefault()}
        >
          <Field id="name" label="Name">
            <Input
              autoComplete="name"
              className={fieldClassName}
              id="name"
              name="lastName"
              placeholder="Name"
              type="text"
            />
          </Field>

          <Field id="email" label="Email">
            <Input
              autoComplete="email"
              className={fieldClassName}
              id="email"
              name="email"
              placeholder="you@example.com"
              type="email"
            />
          </Field>

          <Field id="phone" label="Phone">
            <Input
              autoComplete="tel"
              className={fieldClassName}
              id="phone"
              name="phone"
              placeholder="+971 …"
              type="tel"
            />
          </Field>

          <fieldset className="grid gap-3">
            <legend className="mb-2 font-medium text-heading text-sm">
              How can we help?
            </legend>
            <div className="flex flex-wrap gap-3">
              {helpOptions.map((option) => {
                const id = `help-${option.toLowerCase()}`

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
                    {option}
                  </label>
                )
              })}
            </div>
          </fieldset>

          <Field id="details" label="Details">
            <Textarea
              className="min-h-40 px-4 py-3 text-base md:text-base"
              id="details"
              name="details"
              placeholder="Tell us a bit more"
              rows={6}
            />
          </Field>

          <Button className="h-12 w-full text-base" size="lg" type="submit">
            Send inquiry
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
