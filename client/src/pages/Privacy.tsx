import { motion } from "framer-motion";
import { ChevronRight, Shield } from "lucide-react";
import { Link } from "wouter";

const sections = [
  {
    title: "Who We Are",
    body: [
      "PropertyShield UK Ltd provides roofing and exterior services in Darlington and surrounding areas.",
      "If you have questions about this privacy policy or how your personal data is used, contact propertyshield128@gmail.com or call 07753 351619.",
    ],
  },
  {
    title: "What We Collect",
    body: [
      "When you contact us through the website, we may collect your name, phone number, email address, property address, service required, preferred contact method, and the details of your enquiry.",
      "We also use essential website storage for security and cookie preferences. Optional analytics data is collected only if you accept analytics cookies.",
    ],
  },
  {
    title: "How We Use Your Information",
    body: [
      "We use enquiry information to respond to quote requests, arrange site visits, provide customer service, and keep records of enquiries sent to the business.",
      "Analytics data is used to understand website traffic and improve the website. We do not intentionally collect sensitive personal data for analytics.",
    ],
  },
  {
    title: "Legal Bases",
    body: [
      "We process enquiry information because it is necessary to respond to your request and take steps before entering into a contract.",
      "Optional analytics processing is based on consent, which you can accept or reject through the cookie banner.",
    ],
  },
  {
    title: "Third-Party Services",
    body: [
      "Website analytics are provided by Google Analytics when consent is given.",
      "Website hosting and infrastructure providers may process technical data needed to deliver the site securely.",
      "Enquiry data is stored in our website database so we can manage and respond to customer requests.",
    ],
  },
  {
    title: "Retention",
    body: [
      "We keep enquiry records only for as long as reasonably necessary to respond to enquiries, manage customer relationships, and meet any legal or accounting obligations.",
      "Cookie preferences remain stored until you clear them or change them using the cookie settings control.",
    ],
  },
  {
    title: "Your Rights",
    body: [
      "You may request access to your personal data, ask for inaccurate data to be corrected, ask for deletion where appropriate, object to certain processing, or request restriction of processing where applicable under UK data protection law.",
      "To make a privacy request, contact propertyshield128@gmail.com.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <div>
      <section
        className="relative py-32 pt-40 flex items-center overflow-hidden"
        style={{ background: "linear-gradient(135deg, #080a0d 0%, #111418 60%, #0d1018 100%)" }}
      >
        <div
          className="absolute top-0 left-0 right-0 h-1"
          style={{ background: "linear-gradient(90deg, transparent, #C9962A, #D4A843, #C9962A, transparent)" }}
        />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-6"
            style={{ borderColor: "rgba(201,150,42,0.35)", background: "rgba(201,150,42,0.08)" }}
          >
            <Shield className="w-4 h-4" style={{ color: "#C9962A" }} />
            <span className="text-sm font-semibold uppercase tracking-widest" style={{ color: "#C9962A" }}>
              Privacy Policy
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-4xl sm:text-5xl font-bold text-white mb-6"
          >
            Privacy Policy
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed"
          >
            This policy explains what information PropertyShield UK Ltd collects through the website, how it is used, and the choices available to you.
          </motion.p>
        </div>
      </section>

      <div className="bg-card border-b border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-foreground">Privacy Policy</span>
          </div>
        </div>
      </div>

      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {sections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: index * 0.03 }}
              className="rounded-2xl border border-border bg-card p-8"
            >
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">{section.title}</h2>
              <div className="space-y-4">
                {section.body.map((paragraph) => (
                  <p key={paragraph} className="text-muted-foreground leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}