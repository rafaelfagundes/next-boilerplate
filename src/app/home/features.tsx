"use client";

import FeaturesList from "@/components/features-list";
import SectionTitle from "@/components/ui/section-title";

function Features() {
  return (
    <section className="min-h-[700px] w-full bg-sky-50 bg-[url('/img/features-bg.svg')] bg-cover bg-center bg-no-repeat pt-32 dark:bg-violet-950 dark:from-sky-900 dark:to-gray-900">
      <div className="container mx-auto px-4">
        <SectionTitle className="mb-20">Powerful Features</SectionTitle>
        <FeaturesList></FeaturesList>
      </div>
    </section>
  );
}

export default Features;
