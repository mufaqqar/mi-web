import { FaCheckCircle } from "react-icons/fa";

export default function ExperienceTimeline({ items }) {
  return (
    <ol className="cv-timeline relative ml-2 space-y-8 border-l-2 border-slate-200 md:ml-3 md:space-y-10">
      {items.map((job, index) => (
        <li
          key={`${job.company}-${job.start}`}
          className="cv-print-avoid relative pl-7 md:pl-10"
        >
          <span
            aria-hidden="true"
            className={`absolute -left-[9px] top-6 h-4 w-4 rounded-full ring-4 ring-white ${
              index === 0 ? "bg-bs_secondary" : "bg-title_color"
            }`}
          />
          <article className="cv-card rounded-2xl border border-slate-200/80 bg-white p-6 shadow-3xl md:p-7">
            <div className="mb-3 flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
              <div>
                <h3 className="text-lg font-semibold text-title_color md:text-xl">
                  {job.role}
                </h3>
                <p className="mt-1 text-sm font-medium text-bs_btn_bg md:text-base">
                  {job.company}
                  <span className="font-normal text-slate-500">
                    {" "}
                    · {job.location}
                  </span>
                </p>
              </div>
              <span className="inline-flex w-fit shrink-0 items-center rounded-full bg-[#afd2e9]/40 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-title_color">
                {job.start} – {job.end}
              </span>
            </div>

            {job.summary ? (
              <p className="mb-4 text-sm text-slate-600 md:text-base">
                {job.summary}
              </p>
            ) : null}

            <ul className="space-y-2.5">
              {job.achievements.map((achievement) => (
                <li
                  key={achievement}
                  className="flex gap-2.5 text-sm text-slate-700 md:text-base"
                >
                  <FaCheckCircle
                    aria-hidden="true"
                    className="mt-1 shrink-0 text-xs text-bs_secondary"
                  />
                  <span>{achievement}</span>
                </li>
              ))}
            </ul>

            {job.stack?.length ? (
              <ul className="mt-5 flex flex-wrap gap-2">
                {job.stack.map((tech) => (
                  <li
                    key={tech}
                    className="cv-chip rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-[0.7rem] font-medium uppercase tracking-[0.08em] text-slate-600"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            ) : null}
          </article>
        </li>
      ))}
    </ol>
  );
}
