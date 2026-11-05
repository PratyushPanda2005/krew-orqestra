import { Split } from "@/components/marketing/split"

/** Guide heading and button. The first panel of the sideways row (page.tsx). */
export function GuideIntro() {
  return (
    <div id="steps" data-guide-section="true" data-job-panel className="w-full bg-surface pb-10">
      <div className="max-w-[1080px] mx-auto px-5 min-[476px]:px-8 min-[768px]:px-6 flex flex-col items-center text-center">
        <h2 id="steps-title" data-job-title className="job-title m-0 text-[28px] min-[767px]:text-[32px] min-[1000px]:text-[40px] font-normal leading-[115%]">
          <span className="text-ink" style={{ filter: "url(#headline-inner-shadow-dark)" }}>
            <Split text="How a job runs in Krew" scatter />
          </span>
        </h2>
        <p className="m-0 text-[15px] font-[460] leading-[140%] tracking-[0.15px] mt-4 w-full max-w-[360px] text-ink-muted">
          Follow Riya, a photographer in Pune, from the first message to the last payment. She’s an example.
        </p>
        <a className="group relative inline-flex items-center justify-center no-underline whitespace-nowrap cursor-pointer h-[41px] px-3 rounded-[8px] cta-btn-dark mt-6" href="#">
          <span aria-hidden="true" className="pointer-events-none absolute inset-0 transition-opacity rounded-[8px] btn-dark-hover opacity-0 duration-200 ease-out group-hover:opacity-100" />
          <span className="relative z-10 inline-flex items-center justify-center gap-[6px]">
            <span className="text-[15px] font-[460] tracking-[0.15px] text-on-dark">See the steps</span>
          </span>
        </a>
      </div>
    </div>
  )
}
