export function GitHubButton() {
  return (
    <button
      type="button"
      className="flex h-12.5 w-full cursor-pointer items-center justify-center gap-2.5 rounded-[14px] border border-graphite-700 bg-graphite-875 font-medium hover:text-white"
    >
      <svg
        aria-hidden="true"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-graphite-50"
      >
        <circle cx="6" cy="5.5" r="2.5" />
        <circle cx="6" cy="18.5" r="2.5" />
        <circle cx="18" cy="8" r="2.5" />
        <path d="M6 8v8" />
        <path d="M18 10.5c0 4.5-6.5 3.5-11 6" />
      </svg>
      Continue with GitHub
    </button>
  )
}
