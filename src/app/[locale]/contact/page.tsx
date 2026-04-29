"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Phone, Mail, MapPin, Clock, MessageCircle, Send } from "lucide-react";

const WHATSAPP_NUMBER = "212600000000";

export default function ContactPage() {
  const t = useTranslations("contact");
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    await new Promise((r) => setTimeout(r, 1200));
    setSending(false);
    setSent(true);
    setForm({ name: "", phone: "", email: "", message: "" });
  };

  const contacts = [
    { icon: MapPin, label: t("addressLabel"), value: t("addressValue"), href: null },
    { icon: Phone, label: t("phoneLabel"), value: "+212 6 00 00 00 00", href: "tel:+212600000000" },
    { icon: Mail, label: t("emailLabel"), value: "contact@propanel.ma", href: "mailto:contact@propanel.ma" },
    { icon: Clock, label: t("hoursLabel"), value: t("hoursValue"), href: null },
  ];

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="py-20 bg-gradient-to-br from-neutral-50 to-white border-b border-neutral-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block mb-4 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-widest">
              Contact
            </span>
            <h1 className="text-4xl md:text-5xl font-black text-neutral-900 mb-4">
              {t("title")}
            </h1>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">{t("subtitle")}</p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Form */}
            <div className="lg:col-span-3">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-2xl font-black text-neutral-900 mb-8">{t("formTitle")}</h2>

                {sent ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center"
                  >
                    <div className="text-4xl mb-3">✅</div>
                    <p className="text-green-800 font-semibold text-lg">{t("success")}</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-semibold text-neutral-700 mb-2">
                          {t("name")} *
                        </label>
                        <input
                          type="text"
                          required
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          placeholder={t("namePlaceholder")}
                          className="w-full px-4 py-3 rounded-xl border border-neutral-200 bg-neutral-50 text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/10 transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-neutral-700 mb-2">
                          {t("phone")}
                        </label>
                        <input
                          type="tel"
                          value={form.phone}
                          onChange={(e) => setForm({ ...form, phone: e.target.value })}
                          placeholder={t("phonePlaceholder")}
                          className="w-full px-4 py-3 rounded-xl border border-neutral-200 bg-neutral-50 text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/10 transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-neutral-700 mb-2">
                        {t("email")} *
                      </label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder={t("emailPlaceholder")}
                        className="w-full px-4 py-3 rounded-xl border border-neutral-200 bg-neutral-50 text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/10 transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-neutral-700 mb-2">
                        {t("message")} *
                      </label>
                      <textarea
                        required
                        rows={5}
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        placeholder={t("messagePlaceholder")}
                        className="w-full px-4 py-3 rounded-xl border border-neutral-200 bg-neutral-50 text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/10 transition-all resize-none"
                      />
                    </div>

                    <motion.button
                      type="submit"
                      disabled={sending}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-accent text-white rounded-xl font-semibold text-sm hover:bg-accent-dark transition-colors disabled:opacity-60 disabled:cursor-not-allowed shadow-lg shadow-accent/30"
                    >
                      {sending ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          {t("sending")}
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          {t("send")}
                        </>
                      )}
                    </motion.button>
                  </form>
                )}
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-2 space-y-6">
              {/* Contact info */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-neutral-50 rounded-2xl p-6 border border-neutral-100"
              >
                <h3 className="font-bold text-neutral-900 mb-5">Informations de contact</h3>
                <div className="space-y-4">
                  {contacts.map(({ icon: Icon, label, value, href }) => (
                    <div key={label} className="flex items-start gap-3">
                      <div className="w-9 h-9 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                        <Icon className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-0.5">
                          {label}
                        </p>
                        {href ? (
                          <a href={href} className="text-sm font-medium text-neutral-700 hover:text-primary transition-colors">
                            {value}
                          </a>
                        ) : (
                          <p className="text-sm font-medium text-neutral-700">{value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* WhatsApp CTA */}
              <motion.a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Bonjour PRO PANEL, je souhaite obtenir un devis.")}`}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-3 bg-[#25D366] text-white rounded-2xl p-5 shadow-lg shadow-green-500/20 hover:shadow-xl"
              >
                <MessageCircle className="w-8 h-8 fill-white stroke-none shrink-0" />
                <div>
                  <p className="font-bold">{t("whatsapp")}</p>
                  <p className="text-white/75 text-xs">Réponse rapide garantie</p>
                </div>
              </motion.a>

              {/* Map placeholder */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-primary/5 rounded-2xl border border-primary/10 overflow-hidden h-48 flex items-center justify-center"
              >
                <div className="text-center">
                  <MapPin className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="text-sm font-semibold text-primary">Tanger, Maroc</p>
                  <p className="text-xs text-neutral-500 mt-1">Carte interactive bientôt disponible</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
