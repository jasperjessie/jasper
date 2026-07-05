import type { Service } from "@/data/services";

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <div className="group rounded-2xl border border-black/5 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-white/10 dark:bg-white/5">
      <div className="mb-4 text-3xl">{service.icon}</div>
      <h3 className="mb-2 font-serif text-lg font-semibold">{service.title}</h3>
      <p className="text-sm leading-relaxed text-ink/65 dark:text-paper/65">
        {service.description}
      </p>
    </div>
  );
}
