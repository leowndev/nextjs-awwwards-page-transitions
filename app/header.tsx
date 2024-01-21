import { TransitionLink } from "@/components/TransitionLink";
import Link from "next/link";

export default function Header() {
  return (
    <header className="container p-12">
      <nav>
        <ul className="flex gap-8">
          <li>
            <TransitionLink href="/" label="Home" />
          </li>

          <li>
            <TransitionLink href="/about" label="About" />
          </li>

          <li>
            <TransitionLink href="/contact" label="Contact" />
          </li>
        </ul>
      </nav>
    </header>
  );
}
