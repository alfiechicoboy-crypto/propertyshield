import { motion } from "framer-motion";
import { Shield, ChevronRight } from "lucide-react";
import { Link } from "wouter";

const sections = [
  {
    number: "1",
    title: "Quotations",
    content: [
      "All quotations remain valid for 30 days unless otherwise stated.",
      "Quotations are based upon visual inspection only. Roofing structures often contain hidden defects not visible until work begins.",
      "If additional issues are discovered including but not limited to rotten timbers, failing rafters, structural defects, damaged battens, hidden water damage, chimney instability, or poor previous workmanship — the Contractor reserves the right to revise the quotation and adjust the contract price accordingly before continuing work.",
    ],
  },
  {
    number: "2",
    title: "Scope of Work",
    content: [
      "The quotation covers only the work specifically stated.",
      "Any additional work requested by the Customer or required due to hidden defects will be treated as a variation to the contract and charged separately.",
      "No additional work will be undertaken without informing the Customer of the additional cost.",
    ],
  },
  {
    number: "3",
    title: "Deposit & Payment Structure",
    content: [
      "Deposit — required upon acceptance of quotation.",
      "Stage/Progress Payments — payable as work progresses.",
      "Final Payment — payable immediately upon completion.",
      "Completion means the works have been carried out according to the quotation. The final balance must be paid immediately upon completion before the Contractor leaves site, unless agreed otherwise in writing.",
    ],
  },
  {
    number: "4",
    title: "Non-Withholding of Payment",
    content: [
      "Payment may not be withheld for minor defects or snagging items.",
      "If minor issues arise, the Contractor must be given the opportunity to rectify them within a reasonable time.",
      "Full payment remains due regardless of any minor issues.",
    ],
  },
  {
    number: "5",
    title: "Late Payment",
    content: [
      "Any overdue invoices will incur interest in accordance with the Late Payment of Commercial Debts (Interest) Act 1998.",
      "Interest will be charged at 8% above Bank of England base rate.",
      "Statutory compensation fees apply: £40 for debts under £1,000; £70 for debts £1,000–£9,999; £100 for debts above £10,000.",
      "The Customer will also be responsible for all legal recovery costs and collection fees.",
    ],
  },
  {
    number: "6",
    title: "Retention of Title (Material Ownership)",
    content: [
      "All materials supplied and installed by PropertyShield Roofing remain the property of the Contractor until full payment has been received.",
      "Ownership of materials does not pass to the Customer until the contract is paid in full.",
      "If payment is not received, the Contractor reserves the right to reclaim materials, remove materials from site, and suspend guarantees.",
      "This right applies even if materials have been installed.",
    ],
  },
  {
    number: "7",
    title: "Suspension of Work",
    content: [
      "The Contractor reserves the right to suspend or cease works immediately if payments are not made as agreed, unsafe working conditions arise, the Customer interferes with works, abuse or threatening behaviour occurs, or access to the property is restricted.",
      "Any delays caused by suspension may result in additional labour or re-scheduling charges.",
    ],
  },
  {
    number: "8",
    title: "Access to Property",
    content: [
      "The Customer must provide safe, clear and unrestricted access to the work area.",
      "Failure to provide access may result in labour charges for lost time, re-scheduling fees, and project delays.",
      "The Contractor will not be liable for delays caused by access restrictions.",
    ],
  },
  {
    number: "9",
    title: "Weather Conditions",
    content: [
      "Roofing works are weather dependent.",
      "Work may be delayed or paused due to high winds, heavy rain, snow or frost, or unsafe conditions.",
      "The Contractor will not be liable for delays caused by weather conditions.",
    ],
  },
  {
    number: "10",
    title: "Customer Responsibilities",
    content: [
      "The Customer must ensure the work area is accessible, vehicles are moved where required, valuables are removed from affected areas, and loft spaces are cleared where necessary.",
      "The Contractor accepts no responsibility for dust entering loft spaces or minor debris during construction works.",
    ],
  },
  {
    number: "11",
    title: "Third-Party Interference",
    content: [
      "Only PropertyShield Roofing is authorised to alter, repair, or modify work carried out by the Contractor.",
      "If any other contractor, tradesperson, or individual interferes with the work, all guarantees will be void immediately.",
      "The Contractor accepts no liability for defects arising after third-party interference.",
    ],
  },
  {
    number: "12",
    title: "Guarantees",
    content: [
      "Workmanship guarantees apply only to the specific work carried out by PropertyShield Roofing.",
      "Guarantees do not cover storm damage, structural movement, lack of maintenance, third-party alterations, customer interference, or issues unrelated to the original work.",
      "The Contractor must be given the opportunity to inspect and repair any alleged defect.",
    ],
  },
  {
    number: "13",
    title: "Pre-Existing Defects",
    content: [
      "The Contractor cannot be held responsible for defects caused by existing structural issues, rotten timbers outside the quoted works, previous poor workmanship, or age-related deterioration.",
    ],
  },
  {
    number: "14",
    title: "Customer-Supplied Materials",
    content: [
      "Where materials are supplied by the Customer, the Contractor accepts no responsibility for material failure.",
      "No guarantees will apply to those materials.",
      "Additional labour charges may apply if materials are unsuitable.",
    ],
  },
  {
    number: "15",
    title: "Damage Disclaimer",
    content: [
      "Roofing works involve removal of existing materials.",
      "Whilst every care is taken, the Contractor cannot be held responsible for fragile tiles breaking during removal, existing gutters failing, old rendering cracking, or structural movement or deterioration.",
    ],
  },
  {
    number: "16",
    title: "Scaffolding",
    content: [
      "Where scaffolding is required, it may incur additional costs unless included in the quotation.",
      "Customers must ensure unauthorised persons do not access the scaffolding.",
      "The Contractor accepts no liability for misuse of scaffolding.",
    ],
  },
  {
    number: "17",
    title: "Parking & Permits",
    content: [
      "Where parking permits or parking fees are required, these will be the responsibility of the Customer unless agreed otherwise.",
    ],
  },
  {
    number: "18",
    title: "Waste Removal",
    content: [
      "Waste generated during works will be removed unless otherwise agreed.",
      "If a skip is required, it will be positioned in a suitable location agreed with the Customer.",
    ],
  },
  {
    number: "19",
    title: "Aborted Visits",
    content: [
      "If the Contractor attends site but cannot proceed due to lack of access, customer absence, or site obstruction, a call-out or aborted visit charge may apply.",
    ],
  },
  {
    number: "20",
    title: "Cancellation",
    content: [
      "If a confirmed booking is cancelled, deposits may be non-refundable if materials have been ordered or labour scheduled.",
      "Short notice cancellations may incur additional charges.",
    ],
  },
  {
    number: "21",
    title: "Photography",
    content: [
      "The Contractor may take photographs of works for project documentation, warranty evidence, and marketing purposes.",
      "No personal identifying information will be shared without consent.",
    ],
  },
  {
    number: "22",
    title: "Limitation of Liability",
    content: [
      "The Contractor's liability is limited to the value of the contract price.",
      "The Contractor will not be liable for indirect losses, consequential losses, or delays beyond reasonable control.",
    ],
  },
  {
    number: "23",
    title: "Dispute Procedure",
    content: [
      "Any concerns must be raised within 7 days of completion.",
      "The Contractor must be given the opportunity to inspect and rectify issues before third parties are engaged.",
    ],
  },
  {
    number: "24",
    title: "Legal Jurisdiction",
    content: [
      "These Terms & Conditions are governed by the laws of England and Wales.",
      "Any disputes shall be handled within the courts of England and Wales.",
    ],
  },
  {
    number: "25",
    title: "Acceptance of Terms",
    content: [
      "Acceptance of the quotation, payment of deposit, or instruction to commence work constitutes full acceptance of these Terms & Conditions.",
    ],
  },
];

export default function TermsPage() {
  return (
    <div>
      {/* Hero */}
      <section
        className="relative py-32 pt-40 flex items-center overflow-hidden"
        style={{ background: "linear-gradient(135deg, #080a0d 0%, #111418 60%, #0d1018 100%)" }}
      >
        {/* Gold accent bar */}
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
              Legal Documentation
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-4xl sm:text-5xl font-bold text-white mb-6"
          >
            Terms &amp; Conditions
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed"
          >
            These Terms &amp; Conditions apply to all work undertaken by PropertyShield Roofing. Acceptance of a quotation, payment of a deposit, or instruction to commence works constitutes full acceptance of these Terms &amp; Conditions.
          </motion.p>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="bg-card border-b border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-foreground">Terms &amp; Conditions</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Table of contents quick links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-border bg-card p-6 mb-14"
          >
            <h2 className="font-serif text-xl font-bold text-foreground mb-4">Contents</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-6">
              {sections.map((s) => (
                <a
                  key={s.number}
                  href={`#section-${s.number}`}
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors py-0.5"
                >
                  <span
                    className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0"
                    style={{ background: "rgba(201,150,42,0.15)", color: "#C9962A" }}
                  >
                    {s.number}
                  </span>
                  {s.title}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Sections */}
          <div className="space-y-10">
            {sections.map((section, i) => (
              <motion.div
                key={section.number}
                id={`section-${section.number}`}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.03 }}
                className="scroll-mt-32"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold shrink-0"
                    style={{ background: "rgba(201,150,42,0.15)", color: "#C9962A", border: "1px solid rgba(201,150,42,0.3)" }}
                  >
                    {section.number}
                  </div>
                  <h2 className="font-serif text-xl font-bold text-foreground">
                    {section.title}
                  </h2>
                </div>
                <div className="pl-14 space-y-3">
                  {section.content.map((para, j) => (
                    <p key={j} className="text-muted-foreground leading-relaxed text-sm">
                      {para}
                    </p>
                  ))}
                </div>
                {i < sections.length - 1 && (
                  <div className="gold-divider mt-10 opacity-30" />
                )}
              </motion.div>
            ))}
          </div>

          {/* Footer note */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-16 rounded-2xl p-8 text-center"
            style={{ background: "rgba(201,150,42,0.07)", border: "1px solid rgba(201,150,42,0.25)" }}
          >
            <Shield className="w-8 h-8 mx-auto mb-4" style={{ color: "#C9962A" }} />
            <h3 className="font-serif text-xl font-bold text-foreground mb-2">
              Questions About These Terms?
            </h3>
            <p className="text-muted-foreground text-sm mb-6">
              If you have any questions about our Terms &amp; Conditions before accepting a quote, please get in touch and we'll be happy to clarify.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm transition-all"
              style={{ background: "linear-gradient(135deg, #D4A843, #C9962A)", color: "#0d0f14" }}
            >
              Contact Us
            </Link>
          </motion.div>

        </div>
      </section>
    </div>
  );
}
