import NextHead from "next/head";

interface HeadProps {
  title: string;
}

export function Head({ title }: HeadProps) {
  return (
    <NextHead>
      <title>{title}</title>
    </NextHead>
  );
}
