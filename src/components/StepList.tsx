export type Step = {
  title: string;
  children: React.ReactNode;
};

/** Numbered diagnostic steps, repair-manual style. */
export default function StepList({ steps }: { steps: Step[] }) {
  return (
    <ol className="my-6 flex flex-col gap-0">
      {steps.map((step, i) => (
        <li
          key={step.title}
          className="flex gap-4 border-b border-border-default py-5 first:pt-0 last:border-b-0 last:pb-0"
        >
          <span
            className="step-marker flex h-9 w-9 shrink-0 items-center justify-center rounded-sm bg-forest text-base font-semibold text-white"
            aria-hidden="true"
          >
            {i + 1}
          </span>
          <div className="min-w-0">
            <h3 className="font-heading text-lg font-semibold text-forest">
              {step.title}
            </h3>
            <div className="mt-1 space-y-2 text-[0.975rem] leading-relaxed text-foreground">
              {step.children}
            </div>
          </div>
        </li>
      ))}
    </ol>
  );
}
