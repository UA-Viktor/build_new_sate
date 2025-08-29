type Props = {
  text: string;
  author: string;
  role: string;
  avatar?: string;
};

export default function TestimonialCard({ text, author, role, avatar }: Props) {
  return (
    <blockquote className="p-6 rounded-2xl border bg-white shadow-sm">
      <p className="text-slate-700">“{text}”</p>
      <div className="mt-4 flex items-center gap-3">
        {avatar && <img src={avatar} alt={author} className="h-10 w-10 rounded-full object-cover" />}
        <div>
          <div className="font-semibold">{author}</div>
          <div className="text-sm text-slate-500">{role}</div>
        </div>
      </div>
    </blockquote>
  );
}
