import React from "react";

type SectionHeadingProps = {
  children: React.ReactNode;
};

export default function SectionHeading({ children }: SectionHeadingProps) {
  const isSpecialHeading =
    children === "Vamos Conversar" || children === "Let's Talk";

  return (
    <h2
      className={`text-3xl font-bold mb-8 ${
        isSpecialHeading
          ? "bg-gradient-custom bg-clip-text text-transparent animate-gradient-x bg-[length:200%_200%]"
          : "bg-gradient-custom bg-clip-text text-transparent animate-gradient-x bg-[length:200%_200%]"
      }`}
    >
      {children}
    </h2>
  );
}