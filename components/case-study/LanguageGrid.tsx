export function LanguageGrid({ languages }: { languages: string[] }) {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-5">
      {languages.map((language) => (
        <div
          key={language}
          className="flex items-center justify-center rounded-xl border border-border-subtle bg-surface/60 px-4 py-5 text-center"
        >
          <span className="text-base font-medium text-foreground">{language}</span>
        </div>
      ))}
    </div>
  );
}
