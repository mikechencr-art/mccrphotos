import { ReactNode } from "react";

type PageHeadingProps = {
  title: string;
  subline: string;
  children?: ReactNode;
};

export function PageHeading({ title, subline, children }: PageHeadingProps) {
  return (
    <header className="mb-10">
      <h1 className="font-sans text-3xl font-bold tracking-editorial text-ink sm:text-4xl">{title}</h1>
      <p className="mt-2 font-sans text-lg italic text-ink/75">{subline}</p>
      {children ? <div className="mt-6">{children}</div> : null}
    </header>
  );
}
