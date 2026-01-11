"use client";

import React from "react";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import toast from "react-hot-toast";
import SectionHeading from "./section-heading";
import SubmitBtn from "./submit-btn";
import { FaDiscord, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Contact() {
  const { ref } = useSectionInView("Contato");

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="py-24 translate-y-4 transition-all duration-500 opacity-0"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-4 text-center">
        <SectionHeading>Vamos Conversar</SectionHeading>

        <p className="text-gray-700 -mt-6 dark:text-white/80">
          Entre em contato comigo por este formulário ou através das minhas redes sociais.
        </p>

        <div className="flex flex-col gap-6 mt-10 max-w-3xl mx-auto">

          <motion.div
  className="bg-white dark:bg-white/10 p-4 rounded-lg shadow-lg flex flex-col items-center"
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
>

  <div className="flex gap-4">
    <a
      href="https://www.instagram.com/chazinhodociel/"
      className="w-10 h-10 bg-gray-100 dark:bg-white/10 rounded-full flex items-center justify-center hover:scale-110 transition"
    >
      <FaInstagram className="text-xl" />
    </a>

    <a
      href="https://www.linkedin.com/in/sarah-dumitrache/"
      className="w-10 h-10 bg-gray-100 dark:bg-white/10 rounded-full flex items-center justify-center hover:scale-110 transition"
    >
      <FaLinkedin className="text-xl" />
    </a>

    <a
      href="https://discord.com/users/942126894478950530"
      className="w-10 h-10 bg-gray-100 dark:bg-white/10 rounded-full flex items-center justify-center hover:scale-110 transition"
    >
      <FaDiscord className="text-xl" />
    </a>
  </div>
</motion.div>


          <div className="lg:col-span-2">
            <form
              className="bg-white dark:bg-white/10 p-8 rounded-lg shadow-lg mt-6 flex flex-col dark:text-black"
              action={async (formData: FormData) => {
                const { data, error } = await sendEmail(formData);
                if (error) {
                  toast.error(error);
                  return;
                }
                toast.success("E-mail enviado com sucesso!");
              }}
            >
              <input
                type="text"
                name="name"
                placeholder="Seu Nome"
                required
                maxLength={100}
                className="h-10 px-4 rounded-lg borderBlack dark:bg-white/80 dark:focus:bg-white transition-all dark:outline-none mb-3"
              />

              <input
                className="h-10 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none mb-3"
                name="senderEmail"
                type="email"
                required
                maxLength={500}
                placeholder="Seu E-mail"
              />
              
              <textarea
                className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
                name="message"
                placeholder="Sua Mensagem"
                required
                maxLength={5000}
              />
              <SubmitBtn />
            </form>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
