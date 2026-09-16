/** Small square logo mark: a wrench crossed with a liquid drop, plus the wordmark. */
export default function Logo() {
  return (
    <span className="inline-flex items-center gap-2">
      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-sm bg-forest">
        <svg
          viewBox="0 0 24 24"
          width="18"
          height="18"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M12 3c-1.8 2.4-4 5.6-4 8a4 4 0 0 0 8 0c0-2.4-2.2-5.6-4-8Z"
            fill="#F0F1EE"
          />
          <path
            d="M18.5 13a2.5 2.5 0 0 0-2.4 1.8l-1.2-.4a.75.75 0 0 0-.9.4l-.5 1a.75.75 0 0 0 .3 1l1 .6-.6 1a.75.75 0 0 0 .1 1l.8.8a.75.75 0 0 0 1 .1l1-.6.6 1a.75.75 0 0 0 1 .3l1-.5a.75.75 0 0 0 .4-.9l-.4-1.2A2.5 2.5 0 1 0 18.5 13Z"
            fill="#F0F1EE"
          />
        </svg>
      </span>
      <span className="font-heading text-lg font-semibold uppercase tracking-wide text-forest">
        Steady Vape
      </span>
    </span>
  );
}
