type ImageRowItem = { src: string; alt: string };

export default function ImageRow({ images }: { images: ImageRowItem[] }) {
  return (
    <div className="not-prose my-6 flex flex-wrap gap-4">
      {images.map((img) => (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          key={img.src}
          src={img.src}
          alt={img.alt}
          className="min-w-[260px] flex-1 rounded-lg border border-black/5 object-contain dark:border-white/10"
        />
      ))}
    </div>
  );
}
