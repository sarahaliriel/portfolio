import React from "react";
import { FaPaperPlane } from "react-icons/fa";
import { experimental_useFormStatus as useFormStatus } from "react-dom";
import { useLanguage } from "@/context/language-context";

export default function SubmitBtn() {
  const { pending } = useFormStatus();
  const { t } = useLanguage();

  return (
    <button
      type="submit"
      className="group w-full flex items-center justify-center gap-2 h-14 rounded-2xl bg-gray-900 text-white outline-none transition-all focus:scale-[1.01] hover:scale-[1.01] hover:bg-gray-950 active:scale-[0.99] dark:bg-white/10 dark:hover:bg-white/15 disabled:scale-100 disabled:opacity-70"
      disabled={pending}
    >
      {pending ? (
        <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
      ) : (
        <>
          {t("submit.send")}
          <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
        </>
      )}
    </button>
  );
}