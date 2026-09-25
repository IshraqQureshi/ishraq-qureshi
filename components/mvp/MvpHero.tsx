import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { ApplyButton } from "@/components/qualification/ApplyButton";
import { ctaMicrocopy, primaryCtaLabel } from "@/content/mvp-config";
import { mvpHero } from "@/content/mvp";
import styles from "@/components/mvp/MvpHero.module.css";

export function MvpHero() {
  const [beforeAccent, afterAccent] = mvpHero.headline.split(mvpHero.accentWords);
  const [beforeEmphasis, afterEmphasis] = mvpHero.sub.split(mvpHero.subEmphasis);

  return (
    <section className={styles.hero}>
      <div className={styles.photo}>
        <Image src="/ishraq/hero-image.jpeg" alt={mvpHero.photoAlt} fill priority sizes="100vw" />
      </div>
      <div className={styles.shade} aria-hidden="true" />

      <Container className={styles.inner}>
        <div className={styles.copy}>
          <span className={styles.eyebrow}>{mvpHero.eyebrow}</span>

          <h1 className={styles.heading}>
            {beforeAccent}
            <span className={styles.accent}>{mvpHero.accentWords}</span>
            {afterAccent}
          </h1>

          <p className={styles.lede}>
            {beforeEmphasis}
            <strong>{mvpHero.subEmphasis}</strong>
            {afterEmphasis}
          </p>

          <ul className={styles.facts}>
            {mvpHero.facts.map((fact) => (
              <li key={fact.label}>
                <span className={styles.factLabel}>{fact.label}</span>
                <span className={styles.factValue}>{fact.value}</span>
              </li>
            ))}
          </ul>

          <div className={styles.ctaRow}>
            <ApplyButton location="hero" variant="primary" className={`${styles.applyButton} px-7 py-3.5 text-base`}>
              {primaryCtaLabel}
              <span className={styles.arrow} aria-hidden="true">
                →
              </span>
            </ApplyButton>
            <span className={styles.ctaNote}>{ctaMicrocopy}</span>
          </div>
        </div>
      </Container>

      <div className={styles.photoTag}>
        <span className={styles.dot} aria-hidden="true" />
        {mvpHero.locationTag}
      </div>
    </section>
  );
}
