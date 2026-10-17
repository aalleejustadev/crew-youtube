import Link from "next/link"

export function Logo() {
  return (
    <Link href='/' className="flex flex-none items-center gap-2.5 hover:text-white">
      <svg
        aria-hidden="true"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        className="text-ember-400"
      >
        <path d="M12 6.5 6.5 16.5h11z" strokeOpacity="0.45" />
        <circle cx="12" cy="6.5" r="3" fill="currentColor" />
        <circle cx="6.5" cy="16.5" r="3" fill="currentColor" />
        <circle cx="17.5" cy="16.5" r="3" fill="currentColor" />
      </svg>
      <span className="font-heading text-[19px] font-bold tracking-[-0.03em]">
        Crew
      </span>
    </Link>
  )
}