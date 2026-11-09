export default function SkillGroup({ title, icon: Icon, skills }) {
  return (
    <div className="cv-card cv-print-avoid rounded-2xl border border-slate-200/80 bg-white p-6 shadow-3xl md:p-7">
      <div className="mb-5 flex items-center gap-3">
        <span className="cv-icon flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-title_color text-lg text-white">
          <Icon aria-hidden="true" />
        </span>
        <h3 className="text-lg font-semibold text-title_color md:text-xl">{title}</h3>
      </div>
      <ul className="space-y-4">
        {skills.map((skill) => (
          <li key={skill.name}>
            <div className="mb-1.5 flex items-baseline justify-between gap-3">
              <span className="text-sm font-medium text-title_color md:text-base">
                {skill.name}
              </span>
              <span className="shrink-0 text-[0.65rem] font-semibold uppercase tracking-[0.15em] text-slate-500">
                {skill.level}
              </span>
            </div>
            <div className="h-1.5 w-full overflow-hidden rounded-full bg-slate-100">
              <div
                className="cv-skill-fill h-full rounded-full bg-bs_secondary"
                style={{ width: `${skill.value}%` }}
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
