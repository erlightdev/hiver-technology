import { ArrowRight, ArrowUpRight, Zap } from "lucide-react";

import { Button } from "@Hiver-Technology/ui/components/button";
import ShaderBackground from "@/components/shader-background";

export default function HomePage() {
  return (
    <section className="relative -mt-16 overflow-hidden sm:-mt-20 lg:-mt-24">
      <ShaderBackground className="-z-20 opacity-35 dark:opacity-60" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-background/95 via-background/70 to-background dark:from-black/80 dark:via-black/50 dark:to-black/80" />

      <div className="container mx-auto flex min-h-[72vh] max-w-5xl flex-col items-center justify-center px-4 pb-20 pt-24 text-center sm:pt-28 lg:pt-32">
        <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/40 bg-amber-500/10 px-3 py-1 text-xs font-medium text-amber-800 dark:text-amber-100">
          <span className="inline-flex items-center gap-1 rounded-full bg-amber-600 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-amber-50">
            <Zap className="size-3" />
            Update
          </span>
          <span className="text-amber-900/80 dark:text-amber-100/80">
            Next-Gen Digital Solutions
          </span>
        </div>

        <div className="mt-8 space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-amber-900/70 dark:text-amber-100/70">
            Growth of your business
          </p>
          <h1 className="text-balance font-semibold text-4xl leading-tight text-foreground drop-shadow-[0_8px_30px_rgba(0,0,0,0.35)] dark:text-amber-50 dark:drop-shadow-[0_8px_30px_rgba(0,0,0,0.75)] md:text-6xl">
            <span className="block text-4xl font-semibold tracking-tight text-amber-900 dark:text-amber-100 md:text-6xl">
              The Agency Behind
            </span>
            <span className="block text-3xl font-normal font-serif italic text-amber-900/80 dark:text-amber-100 md:text-5xl">
              Your Next Big Win
            </span>
          </h1>
          <p className="mx-auto max-w-2xl text-pretty text-base text-muted-foreground dark:text-amber-100/70 md:text-lg">
            We design and deliver high-impact experiences that help ambitious
            teams win their market.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <button
            type="button"
            className="group inline-flex h-[52px] min-w-[160px] items-center justify-center gap-3 rounded-xl bg-amber-600 px-6 text-sm font-semibold text-amber-50 shadow-[0_12px_30px_rgba(245,158,11,0.3)] transition hover:bg-amber-700"
          >
            Get started
            <span className="relative flex size-9 items-center justify-center overflow-hidden rounded-md bg-neutral-900 text-amber-50">
              <ArrowRight className="size-4 transition-all duration-200 group-hover:-translate-x-2 group-hover:opacity-0" />
              <ArrowUpRight className="absolute size-4 translate-x-2 translate-y-1 opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100" />
            </span>
          </button>
          <Button
            size="lg"
            variant="outline"
            className="h-[52px] min-w-[160px] rounded-full border border-amber-600/40 bg-amber-600/5 px-6 text-sm font-semibold text-amber-900/90 hover:bg-amber-700/15 dark:text-amber-100"
          >
            View work
          </Button>
        </div>
      </div>
    </section>
  );
}
