import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSearchParams } from 'react-router-dom';
import { CONTACT_INFO, APP_SERVICES, getServiceOptions } from '@/config/constants';
import { TestimonialsSection } from './testimonials-section';

const MapWidget: React.FC = () => (
  <div className="w-full h-full min-h-75 bg-(--color-bg-light) flex items-center justify-center text-(--color-text-muted)">
    Placeholder Map Widget
  </div>
);

export const ContactSection: React.FC<{ isHomePage?: boolean }> = ({ isHomePage = false }) => {
  const { t } = useTranslation();
  const [searchParams] = useSearchParams();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  useEffect(() => {
    const serviceParam = searchParams.get('service');
    if (serviceParam) {
      const match = APP_SERVICES.find(s => s.key === serviceParam);
      if (match) {
        setFormData(prev => ({
          ...prev,
          service: match.key,
        }));
      }
    }
  }, [searchParams]);

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  // Service options from centralized config
  const serviceOptions = getServiceOptions(t);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const subject = encodeURIComponent(`${t('contact.form.service')}: ${formData.service || t('contact.title')}`);
      const bodyText = `
${t('contact.form.name')}: ${formData.name}
${t('contact.form.email')}: ${formData.email}
${t('contact.form.phone')}: ${formData.phone}
${t('contact.form.service')}: ${formData.service}

--- ${t('contact.form.message')} ---
${formData.message}
      `.trim();

      const body = encodeURIComponent(bodyText);
      const mailtoUrl = `mailto:${CONTACT_INFO.EMAIL}?subject=${subject}&body=${body}`;

      window.open(mailtoUrl, '_blank');

      setStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: '',
      });
      setTimeout(() => setStatus('idle'), 3000);
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  if (isHomePage) {
    return (
      <section id="contact" className="relative w-full bg-(--color-bg-light) py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-b from-transparent to-(--color-primary)/5"></div>
        
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
            <div className="lg:col-span-7">
              <form onSubmit={handleSubmit} className="flex flex-col gap-5 bg-white rounded-3xl p-6 md:p-10 shadow-xl border border-(--color-primary)/10 relative overflow-hidden h-full">
                <div className="absolute top-0 right-0 w-32 h-32 bg-(--color-primary)/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
                
                <h3 className="text-2xl font-bold text-(--color-bg-dark) mb-2">
                  {t('contact.form.heading') || 'Envíanos un mensaje'}
                </h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-4">
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="block text-sm font-semibold text-(--color-text-muted)">{t('contact.form.name')}</label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder={t('contact.form.name_placeholder')}
                      required
                      className="w-full px-4 py-3.5 bg-(--color-bg-light) border-transparent rounded-xl text-sm text-(--color-bg-dark) outline-none transition-all focus:bg-white focus:ring-2 focus:ring-(--color-primary)/30 focus:border-(--color-primary) placeholder-(--color-text-muted)"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="phone" className="block text-sm font-semibold text-(--color-text-muted)">{t('contact.form.phone')}</label>
                    <input
                      id="phone"
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder={t('contact.form.phone_placeholder')}
                      required
                      className="w-full px-4 py-3.5 bg-(--color-bg-light) border-transparent rounded-xl text-sm text-(--color-bg-dark) outline-none transition-all focus:bg-white focus:ring-2 focus:ring-(--color-primary)/30 focus:border-(--color-primary) placeholder-(--color-text-muted)"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="email" className="block text-sm font-semibold text-(--color-text-muted)">{t('contact.form.email')}</label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={t('contact.form.email_placeholder')}
                    required
                    className="w-full px-4 py-3.5 bg-(--color-bg-light) border-transparent rounded-xl text-sm text-(--color-bg-dark) outline-none transition-all focus:bg-white focus:ring-2 focus:ring-(--color-primary)/30 focus:border-(--color-primary) placeholder-(--color-text-muted)"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="service" className="block text-sm font-semibold text-(--color-text-muted)">{t('contact.form.service')}</label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3.5 bg-(--color-bg-light) border-transparent rounded-xl text-sm text-(--color-bg-dark) outline-none transition-all focus:bg-white focus:ring-2 focus:ring-(--color-primary)/30 focus:border-(--color-primary) cursor-pointer appearance-none bg-no-repeat bg-right"
                    style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%236b7280'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`, backgroundPosition: 'right 1rem center', backgroundSize: '1.25rem 1.25rem' }}
                  >
                    <option value="">{t('contact.form.service_placeholder')}</option>
                    {serviceOptions.map((opt) => (
                      <option key={opt.value} value={opt.value}>{opt.label}</option>
                    ))}
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="message" className="block text-sm font-semibold text-(--color-text-muted)">{t('contact.form.message')}</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={t('contact.form.message_placeholder')}
                    required
                    rows={4}
                    className="w-full px-4 py-3.5 bg-(--color-bg-light) border-transparent rounded-xl text-sm text-(--color-bg-dark) outline-none transition-all focus:bg-white focus:ring-2 focus:ring-(--color-primary)/30 focus:border-(--color-primary) placeholder-(--color-text-muted) resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="mt-auto inline-flex items-center justify-center gap-3 rounded-xl bg-(--color-primary) px-8 py-4 text-base font-bold text-white transition-all duration-300 hover:bg-(--color-primary-hover) hover:shadow-lg hover:shadow-(--color-primary)/30 hover:-translate-y-1 disabled:opacity-50 disabled:translate-y-0 disabled:cursor-not-allowed w-full"
                >
                  <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                  </svg>
                  {status === 'loading' ? t('contact.form.sending') : t('contact.form.submit')}
                </button>
              </form>
            </div>

            <div className="lg:col-span-5 flex flex-col gap-6">
              <div className="bg-(--color-bg-dark) text-white rounded-3xl p-6 md:p-8 shadow-xl relative overflow-hidden flex-1">
                <div className="absolute top-0 right-0 w-32 h-32 bg-(--color-primary)/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
                
                <h3 className="text-xl font-bold mb-6 relative z-10">
                  {t('contact.info.title')}
                </h3>

                <div className="space-y-5 relative z-10">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-(--color-primary)/20 flex items-center justify-center text-(--color-primary) shrink-0">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-(--color-text-light)/60">{t('contact.info.location_title')}</p>
                      <p className="text-white mt-0.5 leading-relaxed">{CONTACT_INFO.LOCATION}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-(--color-primary)/20 flex items-center justify-center text-(--color-primary) shrink-0">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-(--color-text-light)/60">{t('contact.info.contact_title')}</p>
                      <a href={CONTACT_INFO.PHONE_CALL} target="_blank" rel="noopener noreferrer" className="text-white hover:text-(--color-primary) font-medium mt-0.5 inline-block transition-colors">{CONTACT_INFO.PHONE_DISPLAY}</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-(--color-primary)/20 flex items-center justify-center text-(--color-primary) shrink-0">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-(--color-text-light)/60">{t('contact.info.email_title')}</p>
                      <a href={`mailto:${CONTACT_INFO.EMAIL}`} target="_blank" rel="noopener noreferrer" className="text-white hover:text-(--color-primary) font-medium mt-0.5 inline-block break-all transition-colors">{CONTACT_INFO.EMAIL}</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-(--color-primary)/20 flex items-center justify-center text-(--color-primary) shrink-0">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-(--color-text-light)/60">{t('contact.info.hours_title')}</p>
                      <p className="text-white mt-0.5 whitespace-pre-line">{CONTACT_INFO.HOURS}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex-1 rounded-3xl overflow-hidden shadow-lg border border-(--color-primary)/10 min-h-50 relative">
                <MapWidget />
              </div>
            </div>
          </div>

          <div className="w-full pt-6">
            <TestimonialsSection showTitle={false} fullWidth />
          </div>
        </div>

        {(status === 'success' || status === 'error') && (
          <div 
            className={`fixed bottom-8 right-8 z-100 flex items-center gap-3 px-6 py-4 rounded-2xl shadow-2xl border transition-all duration-500 animate-in fade-in slide-in-from-bottom-5 ${
              status === 'success' 
                ? 'bg-white border-green-100 text-green-800' 
                : 'bg-white border-red-100 text-red-800'
            }`}
          >
            <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
              status === 'success' ? 'bg-green-50' : 'bg-red-50'
            }`}>
              {status === 'success' ? (
                <svg className="w-6 h-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              ) : (
                <svg className="w-6 h-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </div>
            <div className="flex flex-col">
              <p className="font-bold text-sm">
                {status === 'success' ? t('contact.form.success') : t('contact.form.error')}
              </p>
            </div>
            <button 
              onClick={() => setStatus('idle')}
              className="ml-2 text-(--color-text-muted) hover:text-(--color-bg-dark)"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        )}
      </section>
    );
  }

  return (
    <section id="contact" className="relative w-full bg-(--color-bg-light) py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-b from-transparent to-(--color-primary)/5"></div>
      
      <div className="max-w-5xl mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-(--color-bg-dark)">
            {t('contact.title') || 'Contacto'}
          </h2>
          <p className="text-(--color-text-muted) mt-3 max-w-2xl mx-auto">
            {t('contact.subtitle') || '¿Tienes preguntas? Estamos aquí para ayudarte.'}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          <div className="bg-white rounded-2xl p-5 shadow-lg border border-(--color-primary)/10 text-center hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-(--color-primary)/10 flex items-center justify-center text-(--color-primary)">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
            </div>
            <h3 className="font-bold text-(--color-bg-dark) text-sm">{t('contact.info.contact_title')}</h3>
            <a href={CONTACT_INFO.PHONE_CALL} target="_blank" rel="noopener noreferrer" className="text-(--color-primary) text-sm font-medium hover:underline">{CONTACT_INFO.PHONE_DISPLAY}</a>
          </div>

          <div className="bg-white rounded-2xl p-5 shadow-lg border border-(--color-primary)/10 text-center hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-(--color-primary)/10 flex items-center justify-center text-(--color-primary)">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
            </div>
            <h3 className="font-bold text-(--color-bg-dark) text-sm">{t('contact.info.email_title')}</h3>
            <a href={`mailto:${CONTACT_INFO.EMAIL}`} target="_blank" rel="noopener noreferrer" className="text-(--color-primary) text-sm font-medium hover:underline break-all">{CONTACT_INFO.EMAIL}</a>
          </div>

          <div className="bg-white rounded-2xl p-5 shadow-lg border border-(--color-primary)/10 text-center hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-(--color-primary)/10 flex items-center justify-center text-(--color-primary)">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
            </div>
            <h3 className="font-bold text-(--color-bg-dark) text-sm">{t('contact.info.location_title')}</h3>
            <p className="text-(--color-text-muted) text-sm">{CONTACT_INFO.LOCATION}</p>
          </div>

          <div className="bg-(--color-background) rounded-2xl p-5 shadow-lg border border-(--color-primary)/10 text-center hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-(--color-primary)/10 flex items-center justify-center text-(--color-primary)">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="font-bold text-(--color-bg-dark) text-sm">{t('contact.info.hours_title')}</h3>
            <p className="text-(--color-text-muted) text-sm whitespace-pre-line">{CONTACT_INFO.HOURS}</p>
          </div>
        </div>

        <div className="bg-white rounded-3xl p-6 md:p-10 shadow-xl border border-(--color-primary)/10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-(--color-primary)/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
          
          <h3 className="text-xl font-bold text-(--color-bg-dark) mb-6 text-center">
            {t('contact.form.heading') || 'Envíanos un mensaje'}
          </h3>
          
          <div className="grid md:grid-cols-2 gap-4">
            <input
              id="name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder={t('contact.form.name')}
              required
              className="w-full px-4 py-3 bg-(--color-bg-light) border-transparent rounded-xl text-sm text-(--color-bg-dark) outline-none transition-all focus:bg-white focus:ring-2 focus:ring-(--color-primary)/30 focus:border-(--color-primary) placeholder-[rgb(150,148,142)]"
            />

            <input
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder={t('contact.form.email')}
              required
              className="w-full px-4 py-3 bg-(--color-bg-light) border-transparent rounded-xl text-sm text-(--color-bg-dark) outline-none transition-all focus:bg-white focus:ring-2 focus:ring-(--color-primary)/30 focus:border-(--color-primary) placeholder-[rgb(150,148,142)]"
            />

            <input
              id="phone"
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder={t('contact.form.phone')}
              required
              className="w-full px-4 py-3 bg-(--color-bg-light) border-transparent rounded-xl text-sm text-(--color-bg-dark) outline-none transition-all focus:bg-white focus:ring-2 focus:ring-(--color-primary)/30 focus:border-(--color-primary) placeholder-[rgb(150,148,142)]"
            />

            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-(--color-bg-light) border-transparent rounded-xl text-sm text-(--color-bg-dark) outline-none transition-all focus:bg-white focus:ring-2 focus:ring-(--color-primary)/30 focus:border-(--color-primary) cursor-pointer appearance-none bg-no-repeat bg-right"
              style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%236b7280'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`, backgroundPosition: 'right 1rem center', backgroundSize: '1rem 1rem' }}
            >
              <option value="">{t('contact.form.service_placeholder')}</option>
              {serviceOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>

            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder={t('contact.form.message')}
              required
              rows={4}
              className="md:col-span-2 w-full px-4 py-3 bg-(--color-bg-light) border-transparent rounded-xl text-sm text-(--color-bg-dark) outline-none transition-all focus:bg-white focus:ring-2 focus:ring-(--color-primary)/30 focus:border-(--color-primary) placeholder-[rgb(150,148,142)] resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={status === 'loading'}
            className="mt-6 inline-flex items-center justify-center gap-2 rounded-xl bg-(--color-primary) px-8 py-4 text-base font-bold text-white transition-all duration-300 hover:bg-(--color-primary-hover) hover:shadow-lg hover:shadow-(--color-primary)/30 hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed w-full"
          >
            {status === 'loading' ? t('contact.form.sending') : t('contact.form.submit')}
          </button>
        </div>

        <div className="mt-10 bg-white rounded-3xl overflow-hidden shadow-xl border border-(--color-primary)/10">
          <MapWidget />
        </div>

        <div className="mt-10 w-full">
          <TestimonialsSection showTitle={false} fullWidth />
        </div>
      </div>

      {(status === 'success' || status === 'error') && (
        <div 
          className={`fixed bottom-8 right-8 z-100 flex items-center gap-3 px-6 py-4 rounded-2xl shadow-2xl border transition-all duration-500 animate-in fade-in slide-in-from-bottom-5 ${  // eslint-disable-line tailwindcss/enforces-shorthand
            status === 'success' 
              ? 'bg-white border-green-100 text-green-800' 
              : 'bg-white border-red-100 text-red-800'
          }`}
        >
          <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
            status === 'success' ? 'bg-green-50' : 'bg-red-50'
          }`}>
            {status === 'success' ? (
              <svg className="w-6 h-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            ) : (
              <svg className="w-6 h-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
              </svg>
            )}
          </div>
          <div className="flex flex-col">
            <p className="font-bold text-sm">
              {status === 'success' ? t('contact.form.success') : t('contact.form.error')}
            </p>
          </div>
          <button 
            onClick={() => setStatus('idle')}
            className="ml-2 text-gray-400 hover:text-gray-600"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      )}
    </section>
  );
};
