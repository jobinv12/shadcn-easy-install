import Link from "next/link";
import { Button } from "./ui/button";

export default function Footer() {
  const githubUrl = process.env.URL;

  return (
    <footer className="text-white justify-center text-center bg-black fixed inset-x-0 bottom-0 p-4">
      Contribute on
      <Button variant="link" className="text-white">
        <Link href={githubUrl ?? "#"} target="_blank" rel="noopener noreferrer">
          Github
        </Link>
      </Button>
    </footer>
  );
}
