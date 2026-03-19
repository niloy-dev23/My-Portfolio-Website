import { useState } from "react";
import { RiMailLine, RiGithubLine, RiLinkedinLine, RiCheckLine, RiFileCopyLine } from "react-icons/ri";

const EMAIL = "nafis.niloy@example.com";

function validate(data) {
  const errors = {};
  if (!data.name.trim()) errors.name = "Name is required.";
  if (!data.email.trim()) {
    errors.email = "Email is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = "Please enter a valid email address.";
  }
  if (!data.message.trim()) {
    errors.message = "Message is required.";
  } else if (data.message.trim().length < 10) {
    errors.message = "Message must be at least 10 characters.";
  }
  return errors;
}

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate(form);
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    const subject = encodeURIComponent(`Portfolio contact from ${form.name}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  const copyContact = async () => {
    const data = JSON.stringify(
      { name: "Nafis Sazzad Niloy", email: EMAIL, github: "github.com/nafis-niloy", linkedin: "linkedin.com/in/nafis-niloy" },
      null,
      2
    );
    try {
      await navigator.clipboard.writeText(data);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      const el = document.createElement("textarea");
      el.value = data;
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <main id="main-content" className="pt-16 bg-[#F8FAFC] dark:bg-[#0F172A] min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="mb-12">
          <p className="text-[#3B82F6] dark:text-[#60A5FA] text-sm font-semibold tracking-widest uppercase mb-3">
            Get In Touch
          </p>
          <h1 className="text-4xl font-bold text-[#1E293B] dark:text-[#F1F5F9] mb-4">
            Contact Me
          </h1>
          <p className="text-[#64748B] dark:text-[#94A3B8] text-lg max-w-xl leading-relaxed">
            I'm currently open to new opportunities. Whether you have a project in mind, a
            question, or just want to say hi — my inbox is always open.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-3">
            {submitted ? (
              <div
                role="alert"
                className="bg-white dark:bg-[#1E293B] rounded-2xl border border-[#1E293B]/10 dark:border-[#F1F5F9]/10 p-10 text-center shadow-sm"
              >
                <div className="w-14 h-14 rounded-full bg-[#3B82F6]/10 flex items-center justify-center mx-auto mb-5">
                  <RiCheckLine className="text-[#3B82F6] dark:text-[#60A5FA] text-3xl" aria-hidden="true" />
                </div>
                <h2 className="text-[#1E293B] dark:text-[#F1F5F9] font-bold text-xl mb-3">
                  Message sent!
                </h2>
                <p className="text-[#64748B] dark:text-[#94A3B8] leading-relaxed">
                  Your email client should have opened. If it didn't, feel free to reach out
                  directly at{" "}
                  <a
                    href={`mailto:${EMAIL}`}
                    className="text-[#3B82F6] dark:text-[#60A5FA] underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3B82F6] rounded"
                  >
                    {EMAIL}
                  </a>
                  .
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: "", email: "", message: "" }); }}
                  className="mt-6 text-sm text-[#64748B] dark:text-[#94A3B8] underline hover:text-[#3B82F6] dark:hover:text-[#60A5FA] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3B82F6] rounded"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                noValidate
                aria-label="Contact form"
                className="bg-white dark:bg-[#1E293B] rounded-2xl border border-[#1E293B]/10 dark:border-[#F1F5F9]/10 p-8 shadow-sm space-y-6"
              >
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-[#1E293B] dark:text-[#F1F5F9] mb-1.5"
                  >
                    Name <span aria-hidden="true" className="text-red-500">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    value={form.name}
                    onChange={handleChange}
                    aria-required="true"
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? "name-error" : undefined}
                    placeholder="Your full name"
                    className={`w-full px-4 py-3 rounded-xl border text-sm text-[#1E293B] dark:text-[#F1F5F9] bg-[#F8FAFC] dark:bg-[#0F172A] placeholder-[#94A3B8] transition-colors focus:outline-none focus:ring-2 focus:ring-[#3B82F6] dark:focus:ring-[#60A5FA] ${
                      errors.name
                        ? "border-red-500"
                        : "border-[#1E293B]/15 dark:border-[#F1F5F9]/15"
                    }`}
                  />
                  {errors.name && (
                    <p id="name-error" role="alert" className="mt-1.5 text-xs text-red-500">
                      {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-[#1E293B] dark:text-[#F1F5F9] mb-1.5"
                  >
                    Email <span aria-hidden="true" className="text-red-500">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={form.email}
                    onChange={handleChange}
                    aria-required="true"
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? "email-error" : undefined}
                    placeholder="you@example.com"
                    className={`w-full px-4 py-3 rounded-xl border text-sm text-[#1E293B] dark:text-[#F1F5F9] bg-[#F8FAFC] dark:bg-[#0F172A] placeholder-[#94A3B8] transition-colors focus:outline-none focus:ring-2 focus:ring-[#3B82F6] dark:focus:ring-[#60A5FA] ${
                      errors.email
                        ? "border-red-500"
                        : "border-[#1E293B]/15 dark:border-[#F1F5F9]/15"
                    }`}
                  />
                  {errors.email && (
                    <p id="email-error" role="alert" className="mt-1.5 text-xs text-red-500">
                      {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-[#1E293B] dark:text-[#F1F5F9] mb-1.5"
                  >
                    Message <span aria-hidden="true" className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    aria-required="true"
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? "message-error" : undefined}
                    placeholder="Tell me about your project or what's on your mind…"
                    className={`w-full px-4 py-3 rounded-xl border text-sm text-[#1E293B] dark:text-[#F1F5F9] bg-[#F8FAFC] dark:bg-[#0F172A] placeholder-[#94A3B8] transition-colors focus:outline-none focus:ring-2 focus:ring-[#3B82F6] dark:focus:ring-[#60A5FA] resize-y min-h-[120px] ${
                      errors.message
                        ? "border-red-500"
                        : "border-[#1E293B]/15 dark:border-[#F1F5F9]/15"
                    }`}
                  />
                  {errors.message && (
                    <p id="message-error" role="alert" className="mt-1.5 text-xs text-red-500">
                      {errors.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full py-3 px-6 rounded-xl bg-[#3B82F6] hover:bg-[#2563EB] dark:bg-[#60A5FA] dark:hover:bg-[#3B82F6] text-white dark:text-[#0F172A] font-semibold text-sm transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3B82F6] focus-visible:ring-offset-2"
                >
                  Send Message via Email
                </button>
              </form>
            )}
          </div>

          <aside className="lg:col-span-2 space-y-6" aria-label="Contact details">
            <div className="bg-white dark:bg-[#1E293B] rounded-2xl border border-[#1E293B]/10 dark:border-[#F1F5F9]/10 p-6 shadow-sm">
              <h2 className="text-[#1E293B] dark:text-[#F1F5F9] font-semibold mb-4">
                Direct links
              </h2>
              <ul className="space-y-3">
                {[
                  { Icon: RiMailLine, label: "Email", href: `mailto:${EMAIL}`, text: EMAIL },
                  { Icon: RiGithubLine, label: "GitHub", href: "https://github.com/nafis-niloy", text: "github.com/nafis-niloy" },
                  { Icon: RiLinkedinLine, label: "LinkedIn", href: "https://linkedin.com/in/nafis-niloy", text: "linkedin.com/in/nafis-niloy" },
                ].map(({ Icon, label, href, text }) => (
                  <li key={label}>
                    <a
                      href={href}
                      target={href.startsWith("mailto") ? undefined : "_blank"}
                      rel={href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                      aria-label={`${label}: ${text}`}
                      className="flex items-center gap-3 text-[#64748B] dark:text-[#94A3B8] hover:text-[#3B82F6] dark:hover:text-[#60A5FA] transition-colors text-sm group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3B82F6] rounded"
                    >
                      <Icon className="text-xl shrink-0 text-[#3B82F6] dark:text-[#60A5FA]" aria-hidden="true" />
                      <span className="group-hover:underline truncate">{text}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white dark:bg-[#1E293B] rounded-2xl border border-[#1E293B]/10 dark:border-[#F1F5F9]/10 p-6 shadow-sm">
              <h2 className="text-[#1E293B] dark:text-[#F1F5F9] font-semibold mb-2">
                Copy contact info
              </h2>
              <p className="text-[#64748B] dark:text-[#94A3B8] text-sm mb-4">
                Grab my details as a JSON snippet for your CRM or notes.
              </p>
              <button
                onClick={copyContact}
                aria-label={copied ? "Contact info copied!" : "Copy contact info as JSON"}
                className="inline-flex items-center gap-2 w-full justify-center py-2.5 px-4 rounded-xl border border-[#1E293B]/15 dark:border-[#F1F5F9]/15 text-sm font-medium text-[#1E293B] dark:text-[#F1F5F9] hover:bg-[#1E293B]/5 dark:hover:bg-[#F1F5F9]/5 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3B82F6]"
              >
                {copied ? (
                  <>
                    <RiCheckLine className="text-green-500 text-lg" aria-hidden="true" />
                    Copied!
                  </>
                ) : (
                  <>
                    <RiFileCopyLine className="text-lg" aria-hidden="true" />
                    Copy as JSON
                  </>
                )}
              </button>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
