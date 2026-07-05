import { services } from "@/data/services";
import { site } from "@/data/site";
import ServiceCard from "@/components/ServiceCard";

export const metadata = { title: `Services — ${site.name}` };

export default function ServicesPage() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-20">
      <h1 className="mb-10 font-serif text-3xl font-semibold">Services</h1>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s) => (
          <ServiceCard key={s.title} service={s} />
        ))}
      </div>
    </section>
  );
}
