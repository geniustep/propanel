"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { CheckCircle, Upload, Send } from "lucide-react";

export default function DevisPage() {
  const t = useTranslations("quote");

  const [form, setForm] = useState({
    service: "",
    dimensions: "",
    location: "",
    budget: "",
    details: "",
    file: null as File | null,
  });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const services = [
    "signaletique",
    "logo3d",
    "logoInox",
    "totem",
    "facade",
    "palissade",
    "impression",
    "menuiserie",
    "maintenance",
    "other",
  ] as const;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    await new Promise((r) => setTimeout(r, 1400));
    setSending(false);
    setSent(true);
  };

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-white border-b border-neutral-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block mb-4 px-4 py-1.5 rounded-full bg-accent/10 text-accent text-xs font-semibold uppercase tracking-widest">
              {t("note")}
            </span>
            <h1 className="text-4xl md:text-5xl font-black text-neutral-900 mb-4">{t("title")}</h1>
            <p className="text-lg text-neutral-600">{t("subtitle")}</p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          {sent ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-green-50 border-2 border-green-200 rounded-3xl p-12 text-center"
            >
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-5" />
              <h2 className="text-2xl font-black text-green-800 mb-3">Demande Envoyée !</h2>
              <p className="text-green-700 text-lg">{t("success")}</p>
            </motion.div>
          ) : (
            <motion.form
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              {/* Service */}
              <div>
                <label className="block text-sm font-semibold text-neutral-700 mb-2">
                  {t("service")} *
                </label>
                <select
                  required
                  value={form.service}
                  onChange={(e) => setForm({ ...form, service: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-neutral-200 bg-neutral-50 text-neutral-900 focus:outline-none focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/10 transition-all appearance-none"
                >
                  <option value="">{t("servicePlaceholder")}</option>
                  {services.map((s) => (
                    <option key={s} value={s}>
                      {t(`services.${s}`)}
                    </option>
                  ))}
                </select>
              </div>

              {/* Dimensions + Location */}
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold text-neutral-700 mb-2">
                    {t("dimensions")}
                  </label>
                  <input
                    type="text"
                    value={form.dimensions}
                    onChange={(e) => setForm({ ...form, dimensions: e.target.value })}
                    placeholder={t("dimensionsPlaceholder")}
                    className="w-full px-4 py-3 rounded-xl border border-neutral-200 bg-neutral-50 text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/10 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-neutral-700 mb-2">
                    {t("location")} *
                  </label>
                  <input
                    type="text"
                    required
                    value={form.location}
                    onChange={(e) => setForm({ ...form, location: e.target.value })}
                    placeholder={t("locationPlaceholder")}
                    className="w-full px-4 py-3 rounded-xl border border-neutral-200 bg-neutral-50 text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/10 transition-all"
                  />
                </div>
              </div>

              {/* File upload */}
              <div>
                <label className="block text-sm font-semibold text-neutral-700 mb-2">
                  {t("files")}
                </label>
                <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-neutral-200 rounded-xl cursor-pointer bg-neutral-50 hover:bg-neutral-100 hover:border-primary/40 transition-all">
                  <Upload className="w-6 h-6 text-neutral-400 mb-2" />
                  <span className="text-sm text-neutral-500">
                    {form.file ? form.file.name : "Cliquez pour télécharger un fichier"}
                  </span>
                  <span className="text-xs text-neutral-400 mt-1">{t("filesHelp")}</span>
                  <input
                    type="file"
                    className="hidden"
                    accept=".pdf,.jpg,.jpeg,.png,.ai,.eps"
                    onChange={(e) => setForm({ ...form, file: e.target.files?.[0] ?? null })}
                  />
                </label>
              </div>

              {/* Budget */}
              <div>
                <label className="block text-sm font-semibold text-neutral-700 mb-2">
                  {t("budget")}
                </label>
                <input
                  type="text"
                  value={form.budget}
                  onChange={(e) => setForm({ ...form, budget: e.target.value })}
                  placeholder={t("budgetPlaceholder")}
                  className="w-full px-4 py-3 rounded-xl border border-neutral-200 bg-neutral-50 text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/10 transition-all"
                />
              </div>

              {/* Details */}
              <div>
                <label className="block text-sm font-semibold text-neutral-700 mb-2">
                  {t("details")}
                </label>
                <textarea
                  rows={5}
                  value={form.details}
                  onChange={(e) => setForm({ ...form, details: e.target.value })}
                  placeholder={t("detailsPlaceholder")}
                  className="w-full px-4 py-3 rounded-xl border border-neutral-200 bg-neutral-50 text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/10 transition-all resize-none"
                />
              </div>

              <motion.button
                type="submit"
                disabled={sending}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full flex items-center justify-center gap-2.5 px-8 py-4 bg-accent text-white rounded-xl font-bold text-base hover:bg-accent-dark transition-colors disabled:opacity-60 disabled:cursor-not-allowed shadow-lg shadow-accent/30"
              >
                {sending ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    {t("submitting")}
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    {t("submit")}
                  </>
                )}
              </motion.button>

              <p className="text-center text-sm text-neutral-500 flex items-center justify-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-green-500" />
                {t("note")}
              </p>
            </motion.form>
          )}
        </div>
      </section>
    </div>
  );
}
