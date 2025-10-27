import Components from "@/components/components";
import Code from "@/components/code";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-items-center min-h-screen p-16 pb-20 gap-5 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <p className="text-4xl font-extrabold">shadcn/ui easy install</p>
      <span>One click to install all shadcn/ui components</span>
      <Components />
      <Code />
    </div>
  );
}
