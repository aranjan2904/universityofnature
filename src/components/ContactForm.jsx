import { useState } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { Mail, MapPin, Phone, Clock } from "lucide-react";
import { db } from "../firebase/config";
import { useLanguage } from "./LanguageContext";
import { getText } from "../data/i18n";

function ContactForm() {
  const { language } = useLanguage();
  const [status, setStatus] = useState({ type: "idle", message: "" });
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (submitting) return;

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: formData.get("name")?.toString().trim(),
      email: formData.get("email")?.toString().trim(),
      topic: formData.get("topic")?.toString().trim(),
      message: formData.get("message")?.toString().trim(),
      website: formData.get("website")?.toString().trim(),
    };

    if (payload.website) {
      setStatus({
        type: "error",
        message: getText(language, "contact_blocked"),
      });
      return;
    }

    if (!payload.name || !payload.email || !payload.message) {
      setStatus({
        type: "error",
        message: getText(language, "contact_required"),
      });
      return;
    }

    setSubmitting(true);
    setStatus({ type: "idle", message: "" });

    try {
      await addDoc(collection(db, "contactMessages"), {
        name: payload.name,
        email: payload.email,
        topic: payload.topic || getText(language, "contact_topic_other"),
        message: payload.message,
        createdAt: serverTimestamp(),
        source: "contact_form",
      });

      form.reset();
      setStatus({
        type: "success",
        message: getText(language, "contact_success"),
      });
    } catch (error) {
      setStatus({
        type: "error",
        message: error?.message || getText(language, "contact_error"),
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-b from-emerald-50 via-white to-slate-50 px-4 py-16 font-body">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-xs sm:text-sm uppercase tracking-[0.35em] text-emerald-700/80 mb-3">
            {getText(language, "contact_kicker")}
          </p>
          <h1 className="font-display text-4xl sm:text-5xl text-slate-900 mb-4">
            {getText(language, "contact_title")}
          </h1>
          <p className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto">
            {getText(language, "contact_desc")}
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr]">
          <div className="rounded-3xl border border-emerald-100 bg-white/90 p-8 shadow-sm">
            <h2 className="font-display text-2xl text-slate-900 mb-4">
              {getText(language, "contact_info_title")}
            </h2>
            <p className="text-sm text-slate-600 mb-6">
              {getText(language, "contact_info_desc")}
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                  <MapPin className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-slate-900">
                    {getText(language, "contact_campus_label")}
                  </p>
                  <p className="text-sm text-slate-600">
                    {getText(language, "contact_campus_value")}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                  <Mail className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-slate-900">
                    {getText(language, "contact_email_label")}
                  </p>
                  <p className="text-sm text-slate-600">
                    {getText(language, "contact_email_value")}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                  <Phone className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-slate-900">
                    {getText(language, "contact_phone_label")}
                  </p>
                  <p className="text-sm text-slate-600">
                    {getText(language, "contact_phone_value")}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                  <Clock className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-slate-900">
                    {getText(language, "contact_hours_label")}
                  </p>
                  <p className="text-sm text-slate-600">
                    {getText(language, "contact_hours_value")}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 rounded-2xl bg-emerald-50/80 p-4 text-sm text-emerald-800">
              {getText(language, "contact_partnership_note")}
            </div>
          </div>

          <div className="rounded-3xl border border-emerald-100 bg-white/95 p-8 shadow-lg">
            <h2 className="font-display text-2xl text-slate-900 mb-6">
              {getText(language, "contact_form_title")}
            </h2>
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2" htmlFor="name">
                  {getText(language, "contact_name")}
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder={getText(language, "contact_placeholder_name")}
                  className="w-full rounded-xl border border-emerald-100 bg-white px-4 py-3 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  required
                  disabled={submitting}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2" htmlFor="email">
                  {getText(language, "contact_email")}
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder={getText(language, "contact_placeholder_email")}
                  className="w-full rounded-xl border border-emerald-100 bg-white px-4 py-3 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  required
                  disabled={submitting}
                />
              </div>
              <input
                type="text"
                name="website"
                tabIndex="-1"
                autoComplete="off"
                className="hidden"
                aria-hidden="true"
              />
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2" htmlFor="topic">
                  {getText(language, "contact_topic")}
                </label>
                <select
                  id="topic"
                  name="topic"
                  className="w-full rounded-xl border border-emerald-100 bg-white px-4 py-3 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  disabled={submitting}
                >
                  <option>{getText(language, "contact_topic_admissions")}</option>
                  <option>{getText(language, "contact_topic_programs")}</option>
                  <option>{getText(language, "contact_topic_partnerships")}</option>
                  <option>{getText(language, "contact_topic_volunteer")}</option>
                  <option>{getText(language, "contact_topic_other")}</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2" htmlFor="message">
                  {getText(language, "contact_message")}
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder={getText(language, "contact_placeholder_message")}
                  className="w-full rounded-xl border border-emerald-100 bg-white px-4 py-3 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  rows="5"
                  required
                  disabled={submitting}
                ></textarea>
              </div>
              {status.message && (
                <p
                  className={`text-sm ${
                    status.type === "success" ? "text-emerald-700" : "text-red-600"
                  }`}
                >
                  {status.message}
                </p>
              )}
              <button
                type="submit"
                disabled={submitting}
                className="w-full rounded-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-semibold py-3 shadow-md hover:from-emerald-700 hover:to-teal-700 transition-all disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {submitting
                  ? getText(language, "contact_sending")
                  : getText(language, "contact_send")}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;
