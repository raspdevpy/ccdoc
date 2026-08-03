/**
 * Port of the VuePress `Arg.vue` single-file component. Marks a function
 * argument as required (no default) or optional (with its default value),
 * with a CSS-only hover tooltip.
 */
export function Arg({
  name = 'Argument',
  default: defaultValue = '',
  code = false,
}: {
  name?: string;
  default?: string;
  code?: string | boolean;
}) {
  const isRequired = defaultValue === '';
  const isCode = code === 'true' || code === true;

  return (
    <span
      className={`group relative my-[3px] inline-flex w-fit items-center gap-1.5 rounded-lg border px-2 py-1 align-middle text-xs font-semibold ${
        isRequired
          ? 'border-rose-400/20 bg-rose-400/15 text-rose-400'
          : 'border-indigo-400/20 bg-indigo-400/15 text-indigo-400'
      }`}
    >
      <span className="relative flex cursor-pointer items-center">
        <span
          role="tooltip"
          className="pointer-events-none invisible absolute z-20 flex w-[150px] -translate-x-2.5 flex-col items-center justify-center rounded-lg border border-fd-border bg-fd-popover p-[5px_10px] text-center font-semibold text-fd-popover-foreground opacity-0 transition-[opacity,visibility,transform] duration-200 group-hover:visible group-hover:translate-x-0 group-hover:opacity-100 max-md:top-6 max-md:left-0 md:right-full md:mr-2"
        >
          {isRequired ? (
            'Required Argument'
          ) : (
            <>
              Optional Argument
              <span>
                Default:{' '}
                {isCode ? <code className="font-mono">{defaultValue}</code> : defaultValue}
              </span>
            </>
          )}
        </span>
        <svg xmlns="http://www.w3.org/2000/svg" width="1rem" height="1rem" viewBox="0 0 24 24">
          <title>Tooltip</title>
          <path
            fill="currentColor"
            d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2m0 14a1 1 0 1 0 0 2a1 1 0 0 0 0-2m0-9.5a3.625 3.625 0 0 0-3.625 3.625a1 1 0 1 0 2 0a1.625 1.625 0 1 1 2.23 1.51c-.676.27-1.605.962-1.605 2.115V14a1 1 0 1 0 2 0c0-.244.05-.366.261-.47l.087-.04A3.626 3.626 0 0 0 12 6.5"
          />
        </svg>
      </span>
      <span>{name}</span>
    </span>
  );
}
