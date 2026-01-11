import React from "react";

type SectionHeadingProps = {
  children: React.ReactNode;
};

export default function SectionHeading({
  children,
}: {
  children: React.ReactNode;
}) {
  const isSpecialHeading = children === "Vamos Conversar";

  return (
    <h2
      className={`text-3xl font-bold mb-8 ${
        isSpecialHeading
          ? "bg-gradient-custom bg-clip-text text-transparent animate-gradient-x bg-[length:200%_200%]"
          : "text-salmao"
      }`}
    >
      {children}
    </h2>
  );
}