import FadeIn from "./animations/fadeIn";

export default function Template({ children }: { children: React.ReactNode }) {
  return <FadeIn>{children}</FadeIn>;
}
