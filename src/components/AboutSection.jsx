"use client";
import { useLanguage } from '../context/LanguageContext';

export default function AboutSection() {
  const { t } = useLanguage();

  return (
    <section id="about" className="w-full bg-custom-light text-custom-navy py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row gap-10 md:gap-20">
          <div className="md:w-1/2">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-custom-navy mb-6">
              {t("aboutTitle1")}
              <span className="text-custom-blue">
                {' '}{t("aboutTitleHighlight")}{' '}
              </span>
              <br className="hidden md:block" />
              {t("aboutTitle2")}
            </h2>
            <div className="w-24 h-1 bg-custom-blue rounded-full mb-10" />
            <p className="text-lg font-medium text-custom-navy opacity-80 leading-relaxed mb-10">
              {t("aboutDesc")}
            </p>
          </div>
          
          <div className="md:w-1/2 space-y-8">
            <div className="soft-panel p-8 rounded-3xl relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-1 h-full bg-custom-navy group-hover:w-2 transition-all" />
              <h4 className="font-bold uppercase text-xs tracking-widest text-custom-blue mb-2">
                {t("aboutVisionTitle")}
              </h4>
              <p className="font-medium text-lg text-custom-navy">
                {t("aboutVisionDesc")}
              </p>
            </div>
            
            <div className="soft-panel p-8 rounded-3xl relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-1 h-full bg-custom-blue group-hover:w-2 transition-all" />
              <h4 className="font-bold uppercase text-xs tracking-widest text-custom-blue mb-2">
                {t("aboutFocusTitle")}
              </h4>
              <p className="font-medium text-lg text-custom-navy">
                {t("aboutFocusDesc")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}