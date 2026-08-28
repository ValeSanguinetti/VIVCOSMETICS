function LocationInfo() {
  return (
    <section className="py-stack-lg border-y border-white/10 bg-surface-dim px-margin-mobile md:px-margin-desktop text-center">

      <div className="flex flex-col md:flex-row justify-center items-center gap-gutter font-label-lg text-label-lg uppercase tracking-widest text-on-surface-variant">

        <span className="flex items-center gap-2">
          <span className="material-symbols-outlined text-primary text-sm">
            location_on
          </span>
          Paysandú, Uruguay
        </span>

        <span className="hidden md:block w-1 h-1 bg-white/20 rounded-full" />

        <span className="flex items-center gap-2">
          <span className="material-symbols-outlined text-primary text-sm">
            location_on
          </span>
          Salto, Uruguay
        </span>

      </div>
    </section>
  );
}

export default LocationInfo;