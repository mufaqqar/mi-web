export default function SectionHeading({
  eyebrow,
  title,
  id,
  description,
  align = "left",
}) {
  const centered = align === "center";

  return (
    <div
      className={`cv-section-heading mb-10 md:mb-12 ${
        centered ? "mx-auto max-w-[760px] text-center" : ""
      }`}
    >
      {eyebrow ? (
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-bs_btn_bg">
          {eyebrow}
        </p>
      ) : null}
      <h2 id={id} className="text-2xl font-semibold text-title_color md:text-4xl">
        {title}
      </h2>
      <span
        aria-hidden="true"
        className={`mt-4 block h-1 w-16 rounded-full bg-bs_secondary ${
          centered ? "mx-auto" : ""
        }`}
      />
      {description ? (
        <p
          className={`mt-5 text-base font-normal text-slate-600 md:text-lg ${
            centered ? "mx-auto max-w-[720px]" : "max-w-[780px]"
          }`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
