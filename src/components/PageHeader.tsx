type PageHeaderProps = {
  title: string;
  subtitle?: string;
  image?: string;
};

export default function PageHeader({
  title,
  subtitle = "Alpha Kappa Psi",
  image = "/images/banner.jpg",
}: PageHeaderProps) {
  return (
    <section
      className="relative h-[42vh] min-h-[280px] w-full overflow-hidden"
      style={{
        backgroundImage: `url('${image}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 flex h-full items-center">
        <div className="mx-auto w-full max-w-screen-xl px-6">
          <div className="text-center text-white">
            <p className="text-[11px] tracking-[0.2em] uppercase opacity-80">
              {subtitle}
            </p>
            <h1 className="mt-1 text-3xl md:text-4xl font-extrabold">
              {title}
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}
