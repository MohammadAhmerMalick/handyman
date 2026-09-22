'use client'

import type { ReactNode } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

const fieldClassName = 'h-12 px-4 text-base md:text-base'

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
          <Field id="first-name" label="First name">
            <Input
              autoComplete="given-name"
              className={fieldClassName}
              id="first-name"
              name="firstName"
              placeholder="First name"
              type="text"
            />
          </Field>
          <Field id="last-name" label="Last name">
            <Input
              autoComplete="family-name"
              className={fieldClassName}
              id="last-name"
              name="lastName"
              placeholder="Last name"
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

          <Field id="details" label="Details">
            <Textarea
              className="min-h-40 px-4 py-3 text-base md:text-base"
              id="details"
              name="details"
              placeholder="How can we help?"
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
