import Components from "@/components/components";
import Code from "@/components/code";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <p className="text-4xl font-extrabold">Shadcn-easy-install</p>
      <Components />
      <Code />
    </div>
  );
}
