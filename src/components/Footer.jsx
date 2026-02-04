import { Link } from "react-router-dom";
import logo from "../assets/logo.jpg";
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  MapPin,
  Phone,
  Mail,
  ArrowRight,
} from "lucide-react";
import { useLanguage } from "./LanguageContext";
import { getText } from "../data/i18n";

function Footer() {
  const { language } = useLanguage();
  const rightsText = getText(language, "footer_rights").replace(
    "{year}",
    new Date().getFullYear()
  );

  return (
    <footer className="relative overflow-hidden bg-slate-950 text-gray-300">
      <div className="absolute inset-0 opacity-40">
        <div className="absolute -top-24 right-[-15%] h-72 w-72 rounded-full bg-emerald-500/20 blur-3xl" />
        <div className="absolute bottom-[-12rem] left-[-10%] h-80 w-80 rounded-full bg-teal-400/20 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-4">
              <Link to="/" className="flex items-center space-x-3 group">
                <div className="relative">
                  <div className="absolute inset-0 bg-emerald-500 rounded-full blur-md opacity-50 group-hover:opacity-75 transition-opacity"></div>
                  <img
                    src={logo}
                    alt={getText(language, "footer_brand_name")}
                    className="h-12 w-12 rounded-full relative z-10"
                  />
                </div>
                <span className="text-2xl font-bold text-white group-hover:text-emerald-300 transition-colors">
                  {getText(language, "footer_brand_name")}
                </span>
              </Link>
              <p className="mt-6 text-gray-400 leading-relaxed max-w-sm">
                {getText(language, "footer_tagline")}
              </p>
              <div className="mt-6 flex space-x-3">
                {[Facebook, Twitter, Linkedin, Instagram].map((Icon, idx) => (
                  <a
                    key={idx}
                    href="#"
                    className="p-2 rounded-full bg-white/5 text-gray-300 hover:bg-emerald-500 hover:text-white transition-all duration-300"
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>

            <div className="lg:col-span-4">
              <h3 className="text-sm uppercase tracking-[0.3em] text-white/80 mb-6">
                {getText(language, "footer_get_in_touch")}
              </h3>
              <div className="space-y-4 text-sm">
                <div className="flex items-start space-x-3">
                  <MapPin className="text-emerald-400 mt-1 flex-shrink-0" size={18} />
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-white/60">
                      {getText(language, "footer_village_label")}
                    </p>
                    <p className="text-gray-300">
                      {getText(language, "footer_village_address")}
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="text-emerald-400 mt-1 flex-shrink-0" size={18} />
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-white/60">
                      {getText(language, "footer_office_label")}
                    </p>
                    <p className="text-gray-300">
                      {getText(language, "footer_office_address")}
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Phone className="text-emerald-400 mt-1 flex-shrink-0" size={18} />
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-white/60">
                      {getText(language, "footer_phone_label")}
                    </p>
                    <p className="text-gray-300">
                      {getText(language, "footer_phone_numbers")}
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Mail className="text-emerald-400 mt-1 flex-shrink-0" size={18} />
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-white/60">
                      {getText(language, "footer_email_label")}
                    </p>
                    <a
                      href="mailto:universityofnature65@gmail.com"
                      className="text-gray-300 hover:text-emerald-300 transition-colors"
                    >
                      universityofnature65@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2">
              <h3 className="text-sm uppercase tracking-[0.3em] text-white/80 mb-6">
                {getText(language, "footer_explore")}
              </h3>
              <div className="space-y-3 text-sm">
                {[
                  [getText(language, "nav_home"), "/"],
                  [getText(language, "footer_about"), "/about"],
                  [getText(language, "nav_programs"), "/programs"],
                  [getText(language, "nav_faculty"), "/faculty"],
                  [getText(language, "nav_gallery"), "/gallery"],
                  [getText(language, "nav_contact"), "/contact"],
                ].map(([label, path]) => (
                  <Link
                    key={path}
                    to={path}
                    className="flex items-center text-gray-400 hover:text-emerald-300 transition-colors group"
                  >
                    <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-x-2 group-hover:translate-x-0" />
                    {label}
                  </Link>
                ))}
              </div>
            </div>

            <div className="lg:col-span-2">
              <h3 className="text-sm uppercase tracking-[0.3em] text-white/80 mb-6">
                {getText(language, "footer_newsletter")}
              </h3>
              <p className="text-sm text-gray-400 mb-4">
                {getText(language, "footer_newsletter_desc")}
              </p>
              <div className="flex flex-col gap-3">
                <input
                  type="email"
                  placeholder={getText(language, "footer_subscribe_placeholder")}
                  className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-emerald-400 text-white placeholder-gray-500 transition-colors"
                />
                <button className="px-4 py-2.5 bg-emerald-500 text-white rounded-xl hover:bg-emerald-600 transition-colors">
                  {getText(language, "footer_subscribe_button")}
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0 text-sm">
            <p className="text-gray-400">{rightsText}</p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-emerald-300 transition-colors">
                {getText(language, "footer_privacy")}
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-300 transition-colors">
                {getText(language, "footer_terms")}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
