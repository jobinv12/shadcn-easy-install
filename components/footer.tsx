import Link from "next/link";

export default function Footer() {
  const githubUrl = process.env.URL;

  return (
    <footer className="text-white justify-center text-center bg-black fixed inset-x-0 bottom-0 p-4">
      Contribute on{" "}
      <Link href={githubUrl ?? "#"} target="_blank" rel="noopener noreferrer">
        Github
      </Link>
    </footer>
  );
}
