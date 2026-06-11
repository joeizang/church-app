import type { ComponentPropsWithoutRef } from "react"

import { cn } from "@/lib/utils"

const socialLinks = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61581513236523",
    Icon: FacebookIcon,
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@courtyardoftruth",
    Icon: TikTokIcon,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/courtyardoftruth/",
    Icon: InstagramIcon,
  },
]

type SocialLinksProps = {
  className?: string
  linkClassName?: string
  showLabels?: boolean
}

export function SocialLinks({ className, linkClassName, showLabels = false }: SocialLinksProps) {
  return (
    <div className={cn("flex flex-wrap items-center gap-3", className)}>
      {socialLinks.map(({ label, href, Icon }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noreferrer"
          aria-label={`Follow Courtyard of Truth on ${label}`}
          className={cn(
            "inline-flex h-10 items-center justify-center gap-2 rounded-md border border-church-gold/25 px-3 text-foreground/80 transition-colors hover:border-church-gold hover:text-church-gold",
            showLabels ? "min-w-28" : "w-10",
            linkClassName,
          )}
        >
          <Icon className="h-4 w-4" aria-hidden="true" />
          {showLabels && <span className="text-sm">{label}</span>}
        </a>
      ))}
    </div>
  )
}

type IconProps = ComponentPropsWithoutRef<"svg">

function FacebookIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M14 8.25h2V5h-2.5C10.46 5 9 6.79 9 9.5v1.75H6.5V14.5H9V22h3.5v-7.5h2.75l.5-3.25H12.5V9.5c0-.84.29-1.25 1.5-1.25Z" />
    </svg>
  )
}

function InstagramIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <rect width="16" height="16" x="4" y="4" rx="4" />
      <circle cx="12" cy="12" r="3.5" />
      <circle cx="16.75" cy="7.25" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}

function TikTokIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M15.5 3c.35 2.23 1.73 3.56 4 3.7v3.1a7.1 7.1 0 0 1-4-1.24v6.24c0 4.3-4.66 6.93-8.32 4.62-3.24-2.05-3.15-6.92.15-8.83a6.04 6.04 0 0 1 3.17-.78v3.25c-.33-.05-.64-.04-.93.03-1.61.34-2.37 2.16-1.48 3.5.94 1.43 3.41 1.24 3.88-.56.08-.29.12-.6.12-.92V3h3.41Z" />
    </svg>
  )
}
