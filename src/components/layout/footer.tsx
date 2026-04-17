import { Link, useNavigate } from "react-router-dom"
import { useTranslation } from "react-i18next"

import LogoMarketing from "@/assets/images/logo-marketing.jpeg"
import { BUSINESS_INFO, CONTACT_INFO, getServiceLinks, getNavLinks } from "@/config/constants"

export const Footer: React.FC = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const { PHONE_DISPLAY, PHONE_CALL, EMAIL, SOCIAL, WHATSAPP_URL, AGENCY_URL, AGENCY_NAME } = CONTACT_INFO;

  // Pre-computed link arrays
  const navLinks = getNavLinks(t);
  const serviceLinks = getServiceLinks(t);

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault()
    navigate("/contact")
    setTimeout(() => {
      const el = document.getElementById("contact")
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" })
      }
    }, 100)
  }

  return (
    <footer className="bg-(--color-bg-dark) text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
          <div className="sm:col-span-2 lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-6 transition-transform hover:scale-[1.02] duration-300">
              <div className="bg-(--color-bg-light) w-10 h-10 sm:w-12 sm:h-12 rounded-xl shadow-lg border border-(--color-primary)/20 p-1.5 overflow-hidden transition-all">
                <img
                  src={BUSINESS_INFO.LOGO}
                  alt={`${BUSINESS_INFO.NAME} Logo`}
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <span className="font-body font-black text-lg sm:text-xl text-white tracking-tight">
                  {BUSINESS_INFO.NAME.split(' ')[0]}
                </span>
                <span className="block text-xs text-(--color-primary) font-bold font-body uppercase tracking-[0.3em] -mt-1">
                  {t("business.tagline")}
                </span>
              </div>
            </Link>
            <p className="text-white/80 text-sm leading-relaxed mb-6">
              {t("footer.about")}
            </p>
            <div className="flex items-center gap-3">
              <a
                href={SOCIAL.INSTAGRAM}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-(--color-bg-surface) hover:bg-(--color-primary)/20 flex items-center justify-center transition-colors hover:text-(--color-primary)"
                aria-label="Instagram"
              >
                 <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 0 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
              <a
                href={SOCIAL.FACEBOOK}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-(--color-bg-surface) hover:bg-(--color-primary)/20 flex items-center justify-center transition-colors hover:text-(--color-primary)"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-(--color-bg-surface) hover:bg-(--color-primary)/20 flex items-center justify-center transition-colors hover:text-(--color-primary)"
                aria-label="WhatsApp"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4 text-sm sm:text-base">{t("footer.quick_links.title")}</h3>
            <ul className="space-y-2 sm:space-y-3">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-white/70 hover:text-white transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4 text-sm sm:text-base">{t("footer.services.title")}</h3>
            <ul className="space-y-2 sm:space-y-3">
              {serviceLinks.map(service => (
                <li key={service.key}>
                  <Link to="/services" onClick={handleContactClick} className="text-white/70 hover:text-white transition-colors text-sm">
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4 text-sm sm:text-base">{t("footer.contact.title")}</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <a href={PHONE_CALL} className="text-white/70 hover:text-white transition-colors text-sm">
                  {PHONE_DISPLAY}
                </a>
              </li>
              <li>
                 <a href={`mailto:${EMAIL}`} className="text-white/70 hover:text-white transition-colors text-sm break-all">
                  {EMAIL}
                </a>
              </li>
            </ul>
            <div className="mt-4 sm:mt-6 pt-4 border-t border-(--color-border-dark)">
              <ul className="space-y-2 sm:space-y-3">
                <li>
                  <a href="#" className="text-white/70 hover:text-white transition-colors text-sm">
                    {t("footer.legal.privacy")}
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/70 hover:text-white transition-colors text-sm">
                    {t("footer.legal.terms")}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-(--color-border-dark) text-center">
           <div className="mb-6 flex justify-center">
             <a
               href={AGENCY_URL}
               target="_blank"
               rel="noopener noreferrer"
               className="group flex flex-col items-center gap-2"
             >
               <img
                 src={LogoMarketing}
                 alt="CDM Marketing"
                 className="h-14 w-14 rounded-full object-cover opacity-70 transition-opacity group-hover:opacity-100"
               />
               <span className="text-xs text-white/60 transition-colors group-hover:text-white/80">
                {t("footer.marketing_by", { agency: AGENCY_NAME })}
              </span>
             </a>
           </div>
          <p className="text-white/70 text-xs sm:text-sm">
            &copy; {BUSINESS_INFO.COPYRIGHT_YEAR} {BUSINESS_INFO.NAME}. {t("footer.copyright_rights")}
          </p>
        </div>
      </div>
    </footer>
  );
};