"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Send, CheckCircle } from "lucide-react"

export function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", subject: "", message: "" })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })
      const result = await response.json()
      if (!response.ok) throw new Error(result.error || "Failed to send message")
      setIsSubmitted(true)
      setTimeout(() => {
        setIsSubmitted(false)
        setFormData({ name: "", email: "", phone: "", subject: "", message: "" })
      }, 5000)
    } catch (err) {
      setError(err instanceof Error ? err.message : "An unexpected error occurred")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (field: string, value: string) =>
    setFormData((prev) => ({ ...prev, [field]: value }))

  const inputClass =
    "bg-background border-border text-foreground placeholder:text-foreground/40 focus:border-church-gold focus:ring-0 focus-visible:ring-0 focus-visible:border-church-gold h-11"

  const labelClass = "font-cinzel text-xs tracking-[0.2em] uppercase text-foreground/85"

  if (isSubmitted) {
    return (
      <div className="bg-background border border-church-gold/30 rounded-lg p-10 text-center">
        <div className="flex justify-center mb-4">
          <CheckCircle className="h-12 w-12 text-church-gold" />
        </div>
        <h3 className="font-cinzel text-lg tracking-wider text-foreground mb-2">Message Sent</h3>
        <p className="text-foreground/80 text-base leading-relaxed">
          Thank you for reaching out. We&rsquo;ll get back to you very soon.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="name" className={labelClass}>Full Name <span className="text-church-gold">*</span></Label>
          <Input id="name" type="text" value={formData.name} onChange={(e) => handleChange("name", e.target.value)} required className={inputClass} placeholder="Your full name" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email" className={labelClass}>Email <span className="text-church-gold">*</span></Label>
          <Input id="email" type="email" value={formData.email} onChange={(e) => handleChange("email", e.target.value)} required className={inputClass} placeholder="your@email.com" />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="phone" className={labelClass}>Phone</Label>
          <Input id="phone" type="tel" value={formData.phone} onChange={(e) => handleChange("phone", e.target.value)} className={inputClass} placeholder="(080) 000-0000" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="subject" className={labelClass}>Subject <span className="text-church-gold">*</span></Label>
          <Select value={formData.subject} onValueChange={(value) => handleChange("subject", value)} required>
            <SelectTrigger className={inputClass}>
              <SelectValue placeholder="Select a subject" />
            </SelectTrigger>
            <SelectContent className="bg-card border-border">
              {[
                ["general", "General Inquiry"],
                ["visit",   "Planning a Visit"],
                ["prayer",  "Prayer Request"],
                ["ministry","Ministry Information"],
                ["pastoral","Pastoral Care"],
                ["other",   "Other"],
              ].map(([val, label]) => (
                <SelectItem key={val} value={val} className="text-foreground focus:bg-church-gold/10 focus:text-church-gold">
                  {label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message" className={labelClass}>Message <span className="text-church-gold">*</span></Label>
        <Textarea id="message" value={formData.message} onChange={(e) => handleChange("message", e.target.value)} required rows={5} className={`${inputClass} h-auto resize-none`} placeholder="Your message, questions, or prayer requests…" />
      </div>

      {error && (
        <div className="p-4 bg-church-red/10 border border-church-red/40 rounded text-church-red text-base">
          {error}
        </div>
      )}

      <Button type="submit" disabled={isSubmitting} className="w-full bg-church-gold hover:bg-church-gold/90 text-background font-cinzel tracking-[0.15em] uppercase text-xs h-12 shadow-[0_0_24px_oklch(0.82_0.16_64/0.25)]">
        {isSubmitting ? (
          <span className="flex items-center gap-2">
            <div className="w-4 h-4 border-2 border-background border-t-transparent rounded-full animate-spin" />
            Sending…
          </span>
        ) : (
          <span className="flex items-center gap-2">
            <Send className="h-4 w-4" />
            Send Message
          </span>
        )}
      </Button>

      <p className="text-center text-muted-foreground text-sm">
        * Required. We respect your privacy and will never share your information.
      </p>
    </form>
  )
}
