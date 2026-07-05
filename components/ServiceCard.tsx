import Link from "next/link";
import type { ServiceMeta } from "@/lib/services";

export default function ServiceCard({ service }: { service: ServiceMeta }) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className="group block rounded-2xl border border-black/5 bg-white p-6 shadow-sm transition duration-300 ease-out hover:-translate-y-1 hover:shadow-md dark:border-white/10 dark:bg-white/5"
    >
      <div className="mb-4 text-3xl">{service.icon}</div>
      <h3 className="mb-2 font-serif text-lg font-semibold group-hover:text-accent dark:group-hover:text-gold">
        {service.title}
      </h3>
      <p className="text-sm leading-relaxed text-ink/65 dark:text-paper/65">
        {service.summary}
      </p>
      <span className="mt-4 inline-block text-sm font-medium text-accent dark:text-gold">
        Learn more →
      </span>
    </Link>
  );
}
