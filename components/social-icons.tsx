const iconClass = "block h-4 w-4";

type SocialIconsProps = {
  compact?: boolean;
};

export function SocialIcons({ compact = false }: SocialIconsProps) {
  void compact;

  return (
    <div className="flex items-center justify-start gap-4">
      <a
        href="https://www.linkedin.com"
        target="_blank"
        rel="noreferrer"
        aria-label="LinkedIn"
        className="inline-flex h-6 w-6 items-center justify-center text-ink/70 hover:text-accent"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" className={iconClass} aria-hidden="true">
          <path d="M4.98 3.5C4.98 4.88 3.86 6 2.48 6S0 4.88 0 3.5 1.12 1 2.48 1s2.5 1.12 2.5 2.5ZM.25 8h4.5v15.75H.25V8ZM8.25 8h4.31v2.15h.06c.6-1.14 2.07-2.34 4.26-2.34 4.56 0 5.4 3 5.4 6.9v9.04h-4.5v-8.01c0-1.91-.04-4.36-2.66-4.36-2.67 0-3.08 2.09-3.08 4.23v8.14h-4.5V8Z" />
        </svg>
      </a>
      <a
        href="https://www.instagram.com/mccrphotos"
        target="_blank"
        rel="noreferrer"
        aria-label="Instagram"
        className="inline-flex h-6 w-6 items-center justify-center text-ink/70 hover:text-accent"
      >
        <svg viewBox="0 0 24 24" fill="none" className={`${iconClass} relative top-[0.5px]`} aria-hidden="true">
          <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="1.8" />
          <circle cx="12" cy="12" r="4.6" stroke="currentColor" strokeWidth="1.8" />
          <circle cx="17.4" cy="6.6" r="1.2" fill="currentColor" />
        </svg>
      </a>
    </div>
  );
}
