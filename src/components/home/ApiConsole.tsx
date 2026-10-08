type Token = { t: string; c?: "key" | "str" | "num" | "bool" | "punct" | "method" | "ok" | "dim" };
export type ConsoleLine = Token[];

const color: Record<NonNullable<Token["c"]>, string> = {
  key: "text-[#9FB7D4]",
  str: "text-[#FFB38A]",
  num: "text-[#F0EEE9]",
  bool: "text-[#E76F3C]",
  punct: "text-[#6B7F95]",
  method: "text-[#E76F3C] font-semibold",
  ok: "text-[#7FD1A8]",
  dim: "text-[#6B7F95]",
};

/**
 * Consola que "responde" una petición con datos reales del perfil, línea por línea.
 * Animación solo con CSS (retardos escalonados): arranca en el primer pintado, sin JS.
 * Es decorativa: la misma información está en el texto de la página.
 */
export function ApiConsole({ lines, title }: { lines: ConsoleLine[]; title: string }) {
  const step = 90;
  const start = 350;

  return (
    <div
      aria-hidden="true"
      className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#071626]/90 shadow-[0_40px_80px_-30px_rgb(0_0_0/0.6)] backdrop-blur-xl"
    >
      <div className="flex items-center gap-2 border-b border-white/10 px-5 py-3">
        <span className="size-3 rounded-full bg-[#E76F3C]" />
        <span className="size-3 rounded-full bg-[#F0EEE9]/30" />
        <span className="size-3 rounded-full bg-[#F0EEE9]/30" />
        <span className="ml-3 font-mono text-xs text-[#6B7F95]">{title}</span>
      </div>
      <pre className="min-h-[22rem] overflow-x-auto px-5 py-5 font-mono text-xs leading-6 sm:text-sm">
        {lines.map((line, i) => (
          <div key={i} className="animate-rise" style={{ animationDelay: `${start + i * step}ms` }}>
            {line.length === 0
              ? " "
              : line.map((tok, j) => (
                  <span key={j} className={tok.c ? color[tok.c] : "text-[#F0EEE9]"}>
                    {tok.t}
                  </span>
                ))}
            {i === lines.length - 1 && (
              <span className="ml-0.5 inline-block h-4 w-2 translate-y-0.5 animate-caret bg-[#E76F3C]" />
            )}
          </div>
        ))}
      </pre>
    </div>
  );
}
