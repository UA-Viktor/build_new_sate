type Props = {
  value: string;              // 'All' | 'Retail' | 'Food' | 'Services'
  onChange: (v: string) => void;
  options?: string[];
};

export default function CaseFilters({ value, onChange, options = ["All","Retail","Food","Services"] }: Props) {
  return (
    <div className="flex flex-wrap gap-2">
      {options.map(opt => {
        const active = value === opt;
        return (
          <button
            key={opt}
            onClick={() => onChange(opt)}
            className={`px-3 py-1.5 rounded border text-sm ${active ? "bg-black text-white border-black" : ""}`}
          >
            {opt}
          </button>
        );
      })}
    </div>
  );
}
