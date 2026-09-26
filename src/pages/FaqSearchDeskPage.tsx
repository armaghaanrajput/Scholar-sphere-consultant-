import React, { useState } from 'react';
import { BrandLogo } from '../components/BrandLogo';
import { BRAND_CONTACT, OFFICIAL_COPY_STRINGS } from '../data/brandData';
import { CURRENT_SESSION } from '../utils/academicSession';
import {
  Search,
  ArrowLeft,
  ChevronDown,
  ChevronUp,
  Sparkles,
  Phone,
  HelpCircle,
  ExternalLink,
  ShieldCheck,
  Award,
  Building,
  GraduationCap,
  MessageCircle,
  CheckCircle2,
} from 'lucide-react';

interface FaqSearchDeskPageProps {
  onBackToHome: () => void;
}

interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'pwwf' | 'verification' | 'admissions' | 'location';
  badge: string;
}

const FAQS_MASTER: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'What is the PWWF Scholarship and who qualifies in Punjab?',
    answer: 'The Punjab Workers Welfare Fund (PWWF) provides 100% free higher education, full tuition fee reimbursement, university hostel charges, and examination dues to children of registered factory, textile mill, and industrial establishment workers. To qualify, the student must have secured admission on merit, and the father or mother must possess an active Punjab Employees Social Security Institution (PESSI) card or EOBI registration with minimum 3 years of service.',
    category: 'pwwf',
    badge: '100% Free Grant',
  },
  {
    id: 'faq-2',
    question: 'How do I verify if a nursing college is recognized by PNC (Pakistan Nursing Council)?',
    answer: 'Always verify on the official portal at pnmc.gov.pk under recognized institutions. Ensure the college has an attached 200–500 bed clinical teaching hospital. You can also visit our Pattoki office on Main Multan Road for 100% free database verification against unregistered and unchartered campuses.',
    category: 'verification',
    badge: 'Anti-Fraud',
  },
  {
    id: 'faq-3',
    question: 'What are the minimum marks required for BS Nursing and DPT admissions?',
    answer: 'For BS Nursing (Generic 4 Years), the minimum requirement is FSc Pre-Medical with at least 50% marks (550/1100). For Doctor of Physical Therapy (DPT) and Doctor of Pharmacy (Pharm-D), the minimum eligibility is 60% marks (660/1100) in FSc Pre-Medical.',
    category: 'admissions',
    badge: 'Eligibility',
  },
  {
    id: 'faq-4',
    question: 'Are Scholar Sphere Consultants counseling services free for students?',
    answer: 'Yes, 100% free! We operate under an absolute Zero Agent Commission Policy. We do not charge students or parents any consultation fees, registration charges, or hidden cuts. We assist from form submission to admission confirmation completely free of charge.',
    category: 'admissions',
    badge: 'Zero Fee',
  },
  {
    id: 'faq-5',
    question: 'Where is your physical office located in Pattoki?',
    answer: 'Our permanent head office is located at 1 KM Main Multan Road, Pattoki, Near Quaid-e-Azam Nursing College, District Kasur, Punjab. We are open Monday through Saturday from 9:00 AM to 6:00 PM for in-person parent and student counseling.',
    category: 'location',
    badge: 'Head Office',
  },
  {
    id: 'faq-6',
    question: 'Do you process student visas for foreign countries?',
    answer: 'No. Scholar Sphere Consultants operates strictly under a 100% No-Visa policy. We do not process foreign visas, study abroad files, or immigration claims. We focus exclusively on accredited universities, colleges, and medical programs inside Pakistan.',
    category: 'verification',
    badge: 'Legal Policy',
  },
  {
    id: 'faq-7',
    question: 'Can male students also apply for BS Nursing in Punjab colleges?',
    answer: 'Yes! While government public colleges primarily admit female candidates, multiple top PNC-recognized private nursing colleges and attached teaching hospitals in Lahore and Punjab offer dedicated BS Generic Nursing programs for both male and female candidates. We facilitate admissions for both genders.',
    category: 'admissions',
    badge: 'Male & Female',
  },
  {
    id: 'faq-8',
    question: 'Does PWWF cover hostel accommodation and mess food?',
    answer: 'Yes. The Punjab Workers Welfare Fund covers full hostel accommodation charges approved in the university charter. In addition, registered students receive a designated monthly subsistence allowance directly from the government into their bank accounts to help cover books and living expenses.',
    category: 'pwwf',
    badge: 'Hostel Coverage',
  },
];

export const FaqSearchDeskPage: React.FC<FaqSearchDeskPageProps> = ({ onBackToHome }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'pwwf' | 'verification' | 'admissions' | 'location'>('all');
  const [openFaqId, setOpenFaqId] = useState<string | null>('faq-1');
  const [customQuestion, setCustomQuestion] = useState('');
  const [askerName, setAskerName] = useState('');

  const filteredFaqs = FAQS_MASTER.filter((faq) => {
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
    const matchesSearch =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleFaq = (id: string) => {
    setOpenFaqId((prev) => (prev === id ? null : id));
  };

  const handleAskWhatsapp = (e: React.FormEvent) => {
    e.preventDefault();
    const query = customQuestion.trim();
    if (!query) return;

    const text = `*STUDENT ADMISSIONS INQUIRY — FAQ DESK*
📌 Academic Session: ${CURRENT_SESSION.slash}
Scholar Sphere Consultants — Pattoki

Asker Name: ${askerName || 'Prospective Student / Parent'}
Question:
"${query}"

Please provide verified academic guidance or confirm when I can visit the Pattoki head office.`;

    const url = `https://wa.me/923294403898?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="min-h-screen bg-slate-100 text-slate-900 pb-20">
      {/* Top Header Bar */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b-2 border-slate-200 px-4 sm:px-8 py-3.5 flex items-center justify-between shadow-xs print:hidden">
        <button
          onClick={onBackToHome}
          className="btn-3d btn-3d-white px-3.5 py-1.5 rounded-xl text-xs font-black flex items-center gap-2 cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4 text-[#FF7A00]" />
          <span>Back to Home</span>
        </button>

        <div className="flex items-center gap-2">
          <BrandLogo variant="full" size="sm" />
          <span className="hidden sm:inline-block text-xs font-extrabold text-[#0A2342] border-l border-slate-300 pl-2">
            Google Search &amp; FAQ Desk
          </span>
        </div>

        <div className="flex items-center gap-2">
          <a
            href="https://wa.me/923294403898"
            target="_blank"
            rel="noreferrer"
            className="btn-3d btn-3d-whatsapp px-3 py-1.5 rounded-xl text-xs font-black flex items-center gap-1.5 cursor-pointer"
          >
            <MessageCircle className="w-3.5 h-3.5 text-[#052e16] fill-current" />
            <span className="hidden sm:inline">WhatsApp Help</span>
          </a>
          <a
            href="tel:+923294403898"
            className="btn-3d btn-3d-amber px-3 py-1.5 rounded-xl text-xs font-black flex items-center gap-1.5 cursor-pointer text-slate-950"
          >
            <Phone className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Helpline</span>
          </a>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 pt-8 sm:pt-10">
        
        {/* Page Hero */}
        <div className="bg-white rounded-3xl border-2 border-slate-200 p-6 sm:p-8 shadow-sm mb-8 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-blue-950 text-xs font-black uppercase tracking-wider mb-2 border border-blue-300">
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              <span>Verified Knowledge Base • Session {CURRENT_SESSION.slash}</span>
            </div>
            <h1
              className="text-2xl sm:text-3xl font-black text-[#0A2342] tracking-tight"
              style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
            >
              Google Search &amp; FAQ Desk
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 mt-1.5 max-w-2xl leading-relaxed">
              Instant answers grounded in official Punjab Higher Education, PNC, and Workers Welfare Fund policies. Search questions below or access official government registries.
            </p>
          </div>

          <div className="shrink-0 p-4 rounded-2xl bg-slate-50 border-2 border-slate-200 text-center min-w-[170px]">
            <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">
              Verified FAQs
            </span>
            <div className="text-3xl sm:text-4xl font-black text-[#0A2342] mt-0.5">
              {FAQS_MASTER.length}+
            </div>
            <span className="inline-block mt-1 text-[10px] font-black px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-300">
              PNC &amp; HEC Aligned
            </span>
          </div>
        </div>

        {/* Live Search & Filter Bar */}
        <div className="bg-white rounded-3xl border-2 border-slate-200 p-6 shadow-sm mb-6 space-y-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search by topic, e.g. 'PWWF', 'BS Nursing', 'fee', 'PNC', 'Pattoki', 'fake colleges'..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full p-3.5 pl-11 rounded-2xl border-2 border-slate-300 focus:outline-none focus:border-[#FF7A00] text-sm font-bold text-slate-800 bg-slate-50/70"
            />
            <Search className="w-5 h-5 text-slate-400 absolute left-3.5 top-4" />
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 pt-1">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`tab-3d px-3 py-1.5 text-xs font-black rounded-lg cursor-pointer ${
                selectedCategory === 'all' ? 'tab-3d-active' : 'tab-3d-inactive'
              }`}
            >
              All Questions ({FAQS_MASTER.length})
            </button>
            <button
              onClick={() => setSelectedCategory('pwwf')}
              className={`tab-3d px-3 py-1.5 text-xs font-black rounded-lg cursor-pointer ${
                selectedCategory === 'pwwf' ? 'tab-3d-active' : 'tab-3d-inactive'
              }`}
            >
              PWWF Scholarship
            </button>
            <button
              onClick={() => setSelectedCategory('verification')}
              className={`tab-3d px-3 py-1.5 text-xs font-black rounded-lg cursor-pointer ${
                selectedCategory === 'verification' ? 'tab-3d-active' : 'tab-3d-inactive'
              }`}
            >
              Anti-Fraud &amp; PNC
            </button>
            <button
              onClick={() => setSelectedCategory('admissions')}
              className={`tab-3d px-3 py-1.5 text-xs font-black rounded-lg cursor-pointer ${
                selectedCategory === 'admissions' ? 'tab-3d-active' : 'tab-3d-inactive'
              }`}
            >
              Admission Criteria
            </button>
            <button
              onClick={() => setSelectedCategory('location')}
              className={`tab-3d px-3 py-1.5 text-xs font-black rounded-lg cursor-pointer ${
                selectedCategory === 'location' ? 'tab-3d-active' : 'tab-3d-inactive'
              }`}
            >
              Pattoki Head Office
            </button>
          </div>
        </div>

        {/* Official Google Search Registry Shortcuts */}
        <div className="bg-gradient-to-r from-[#0A2342] to-[#123966] text-white rounded-3xl p-5 sm:p-6 shadow-md mb-8 border border-slate-700">
          <div className="flex items-center gap-2 mb-3">
            <Search className="w-4 h-4 text-amber-400" />
            <span className="text-xs font-black text-amber-300 uppercase tracking-wider">
              Official Government Portals &amp; Direct Registries
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <a
              href="https://www.google.com/search?q=pnmc+recognized+institutions+punjab+nursing"
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 transition-all flex items-center justify-between text-xs"
            >
              <div>
                <strong className="block text-white font-bold">PNC Nursing Registry</strong>
                <span className="text-[10px] text-slate-300">pnmc.gov.pk</span>
              </div>
              <ExternalLink className="w-3.5 h-3.5 text-amber-400" />
            </a>

            <a
              href="https://www.google.com/search?q=e+registration+punjab+gov+pk+parents+corner"
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 transition-all flex items-center justify-between text-xs"
            >
              <div>
                <strong className="block text-white font-bold">Punjab e-Registration</strong>
                <span className="text-[10px] text-slate-300">College verification portal</span>
              </div>
              <ExternalLink className="w-3.5 h-3.5 text-amber-400" />
            </a>

            <a
              href="https://www.google.com/search?q=ddckasur+pk+district+education"
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 transition-all flex items-center justify-between text-xs"
            >
              <div>
                <strong className="block text-white font-bold">District Kasur Portal</strong>
                <span className="text-[10px] text-slate-300">ddckasur.pk</span>
              </div>
              <ExternalLink className="w-3.5 h-3.5 text-amber-400" />
            </a>
          </div>
        </div>

        {/* FAQs Accordion */}
        <div className="space-y-3 mb-8">
          {filteredFaqs.map((faq) => {
            const isOpen = openFaqId === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-white rounded-2xl border-2 border-slate-200 overflow-hidden shadow-xs transition-all"
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full p-4 sm:p-5 text-left flex items-start justify-between gap-4 cursor-pointer hover:bg-slate-50/60"
                >
                  <div className="flex-1">
                    <span className="inline-block text-[10px] font-black uppercase tracking-wider text-amber-800 bg-amber-100 px-2 py-0.5 rounded mb-1.5 border border-amber-300">
                      {faq.badge}
                    </span>
                    <h3 className="text-sm sm:text-base font-black text-[#0A2342]">
                      {faq.question}
                    </h3>
                  </div>

                  <div className="shrink-0 p-1.5 rounded-lg bg-slate-100 text-slate-600 mt-1">
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-slate-700 leading-relaxed border-t border-slate-100 pt-4 bg-slate-50/50">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}

          {filteredFaqs.length === 0 && (
            <div className="p-8 text-center bg-white rounded-3xl border-2 border-slate-200">
              <HelpCircle className="w-8 h-8 text-slate-400 mx-auto mb-2" />
              <h4 className="text-sm font-bold text-[#0A2342]">No matching question found</h4>
              <p className="text-xs text-slate-500 mt-1">
                You can ask your custom query below directly to Director Armaghaan Rajput.
              </p>
            </div>
          )}
        </div>

        {/* Ask Director Custom Question Form */}
        <div className="bg-white rounded-3xl border-2 border-slate-200 p-6 sm:p-8 shadow-sm">
          <div className="flex items-center gap-2 mb-2">
            <MessageCircle className="w-5 h-5 text-[#FF7A00]" />
            <h3 className="text-base font-black text-[#0A2342]">
              Have a Custom Question? Ask the Managing Director
            </h3>
          </div>
          <p className="text-xs text-slate-500 mb-4">
            Direct response from Armaghaan Rajput within minutes on WhatsApp.
          </p>

          <form onSubmit={handleAskWhatsapp} className="space-y-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <input
                type="text"
                value={askerName}
                onChange={(e) => setAskerName(e.target.value)}
                placeholder="Your Name (e.g. Tariq Mehmood)"
                className="w-full p-2.5 rounded-xl border border-slate-300 text-xs font-bold text-slate-800 focus:outline-none focus:border-[#FF7A00] bg-white"
              />
              <input
                type="text"
                disabled
                value="Response Channel: Official WhatsApp (+92 329 4403898)"
                className="w-full p-2.5 rounded-xl border border-slate-200 text-xs text-slate-500 bg-slate-100 font-mono"
              />
            </div>

            <textarea
              rows={3}
              value={customQuestion}
              onChange={(e) => setCustomQuestion(e.target.value)}
              placeholder="Type your question here (e.g. My father works in a sugar mill in Chunian, how do I apply for Pharm-D scholarship?)..."
              required
              className="w-full p-3 rounded-xl border border-slate-300 text-xs text-slate-800 focus:outline-none focus:border-[#FF7A00] bg-white"
            />

            <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
              <button
                type="submit"
                className="btn-3d btn-3d-whatsapp py-3 px-5 rounded-xl text-xs sm:text-sm font-black flex items-center justify-center gap-2 shadow-md cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 text-[#052e16] fill-current" />
                <span>Send Question to Director on WhatsApp</span>
              </button>

              <button
                type="button"
                onClick={onBackToHome}
                className="btn-3d btn-3d-white py-3 px-5 rounded-xl text-xs font-black cursor-pointer shadow-md"
              >
                Return to Home
              </button>
            </div>
          </form>
        </div>

      </main>
    </div>
  );
};
