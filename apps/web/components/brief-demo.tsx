"use client"

import * as React from "react"

import { Input } from "@krew/ui/components/input"
import { Label } from "@krew/ui/components/label"
import { StepForm } from "@krew/ui/components/step-form"

/** A three-question sample of the client brief (UX-17). */
export function BriefDemo() {
  const [date, setDate] = React.useState("")
  const [place, setPlace] = React.useState("")
  const [done, setDone] = React.useState(false)

  if (done) {
    return (
      <div className="flex flex-col gap-2 p-6">
        <p className="condensed text-2xl font-semibold">Brief sent to Riya</p>
        <p className="text-muted-foreground">She&apos;ll reply with a quote, usually within a day.</p>
      </div>
    )
  }

  return (
    <StepForm
      submitLabel="Send brief"
      onSubmit={() => setDone(true)}
      steps={[
        {
          id: "date",
          title: "When is the shoot?",
          canContinue: date.length > 0,
          content: (
            <div className="flex flex-col gap-2">
              <Label htmlFor="brief-date">Date</Label>
              <Input id="brief-date" type="date" value={date} onChange={(e) => setDate(e.target.value)} className="h-tap" />
            </div>
          ),
        },
        {
          id: "place",
          title: "Where will it be?",
          hint: "A venue name or area is enough.",
          canContinue: place.trim().length > 1,
          content: (
            <div className="flex flex-col gap-2">
              <Label htmlFor="brief-place">Place</Label>
              <Input
                id="brief-place"
                value={place}
                onChange={(e) => setPlace(e.target.value)}
                placeholder="Koregaon Park, Pune"
                className="h-tap"
              />
            </div>
          ),
        },
        {
          id: "refs",
          title: "Any photos you like?",
          hint: "Optional. Add a few references so Riya gets the look.",
          content: <Input type="file" multiple accept="image/*" className="h-tap" aria-label="Reference photos" />,
        },
      ]}
    />
  )
}
