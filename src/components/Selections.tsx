function Selections() {
  return (
    <section
      id="shop"
      className="py-section-padding px-margin-mobile md:px-margin-desktop max-w-[1280px] mx-auto"
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">

        {/* Section title */}
        <div className="md:col-span-12 mb-stack-lg text-center md:text-left border-b border-white/10 pb-stack-md">
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary">
            Curated Selections
          </h2>
        </div>

        {/* Combos */}
        <div className="md:col-span-8 group relative overflow-hidden bg-surface-container-low border border-white/10 min-h-[400px] md:min-h-[600px] flex flex-col justify-end p-stack-md">

          <img
            className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-70 transition-opacity duration-700"
            alt="High-end cosmetic bundles"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCXav4CvPGNr_RoVg0lDMUOGs2EiCkNcqiyySW3MOdLirNy0oZSwG3DsOU559fjX6XE4iKK919_fr6cdQw6WJfXVoBunuUA81i_YaGZR_WwnXefviPQuyB9TJlkvykmhuj49VmRclgw9ewp6LO3qZEaQvbvOa-N_N_Wz-I4GZeb_7Jx63moC9JxZ5DFQWDV5aDMSzFsVy-ZGBp4fqjp2eJoUPYs5Rcq8-ZmVPzfE253G_zkeuqXTBVbXA"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />

          <div className="relative z-10">

            <span className="inline-block px-3 py-1 bg-primary text-background font-label-sm text-label-sm uppercase mb-stack-sm">
              Bundles
            </span>

            <h3 className="font-headline-md text-headline-md text-primary mb-stack-sm">
              Vuestros Combos
            </h3>

            <p className="font-body-md text-body-md text-on-surface-variant mb-stack-md max-w-md">
              Expertly paired essentials for a complete editorial look.
            </p>

            <a
              className="inline-flex items-center font-label-lg text-label-lg uppercase tracking-widest text-primary hover:text-on-surface-variant transition-colors group/link"
              href="#"
            >
              Shop Combos

              <span className="material-symbols-outlined ml-2 group-hover/link:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </a>

          </div>
        </div>

        {/* Courses */}
        <div className="md:col-span-4 group relative overflow-hidden bg-surface-container-low border border-white/10 min-h-[400px] md:min-h-[600px] flex flex-col justify-end p-stack-md">

          <img
            className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-70 transition-opacity duration-700"
            alt="Professional makeup artist applying eyeliner"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAQeIr3KayNwK_Oa4iKmgMVKB0CnW-9z88GR0tm4RnVTyG0-ao8hJaGJTMBTZ-yzMSDm_qe32it3YY16wUkfJkDjClaUrL-0mETwjUBiHjY1Y3-4DL3gSwOEh4WwcrSoa9FOClafwOhzQU14aMdX8STgzioFMdnKJSqxB8xTr4y6o_GcGYBwImHZnFieY7W5pLaxlFLvwZMRRZ_ff-IZfnYu9r1ujoxuj4K6oXKmYgxkL6QqbvJkv25dA"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />

          <div className="relative z-10">

            <h3 className="font-headline-md text-headline-md text-primary mb-stack-sm">
              Cursos de Auto Maquillaje
            </h3>

            <p className="font-body-md text-body-md text-on-surface-variant mb-stack-md">
              Master the art of inner vision.
            </p>

            <a
              className="inline-flex items-center font-label-lg text-label-lg uppercase tracking-widest text-primary border-b border-primary/30 pb-1 hover:border-primary transition-colors"
              href="#"
            >
              Book Now
            </a>

          </div>
        </div>

        {/* Skincare */}
        <div className="md:col-span-12 group relative overflow-hidden border border-white/10 min-h-[300px] flex items-center p-stack-lg mt-gutter bg-surface-container-lowest">

          <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-background via-background/90 to-transparent z-10 hidden md:block" />

          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent z-10 md:hidden" />

          <img
            className="absolute inset-0 w-full h-full object-cover opacity-40"
            alt="Luxury dark glass serum bottle"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBWsVSeyyyTy5fkBZgQTW-4pshSUjQYrHEl40d7XIt5s4kLp9p_czwlktwcK6MJeodKBYXKPX0ZWdiM975eBZpWqei5JvnPD77PTLhcXqhuAznf1LOTbRACADdUOWJEcqcjYb3fsZf7zjYRGlzfzAhMGYc8F4BaukQp1XvZ0Z6XUHwCNM7ByV8BWIyW6zVJqYiOmDYP9XisT1zNTdCmPprpGiSg-BhPP4z3lectjas8qTijhpqbo9a5pg"
          />

          <div className="relative z-20 flex flex-col md:flex-row items-start md:items-center justify-between w-full">

            <div className="max-w-xl">

              <span className="inline-block px-3 py-1 border border-white/20 text-primary font-label-sm text-label-sm uppercase mb-stack-md">
                New In
              </span>

              <h3 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary mb-stack-sm leading-tight">
                Skincare Essentials
              </h3>

              <p className="font-body-lg text-body-lg text-on-surface-variant mb-stack-md md:mb-0">
                Purify and prepare the canvas.
              </p>

            </div>

            <a
              className="px-6 py-3 border border-white/30 text-primary font-label-lg text-label-lg uppercase tracking-widest hover:bg-white hover:text-black transition-colors shrink-0"
              href="#"
            >
              View Range
            </a>

          </div>
        </div>

      </div>
    </section>
  );
}

export default Selections;