import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export function Privacy() {
  return (
    <div className="min-h-screen bg-white text-brand-green-dark pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-6">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-brand-green hover:text-brand-green-dark font-medium mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>
        
        <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">Privacy Policy</h1>
        <p className="text-slate-600 mb-8 font-medium">Last Updated: February 2026</p>
        
        <div className="bg-slate-50 p-6 rounded-2xl mb-12 border border-slate-100">
          <h2 className="text-xl font-bold mb-4">Quick Navigation</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-brand-green font-medium">
            <li><a href="#who-we-are" className="hover:underline">Who We Are</a></li>
            <li><a href="#information-collected" className="hover:underline">Information Collected</a></li>
            <li><a href="#how-we-use" className="hover:underline">How We Use Information</a></li>
            <li><a href="#your-rights" className="hover:underline">Your Rights (POPIA)</a></li>
            <li><a href="#data-security" className="hover:underline">Data Security</a></li>
            <li><a href="#third-party" className="hover:underline">Third-Party Sharing</a></li>
            <li><a href="#cookies" className="hover:underline">Cookies</a></li>
            <li><a href="#contact-us" className="hover:underline">Contact Us</a></li>
          </ul>
        </div>

        <div className="space-y-12 text-lg leading-relaxed">
          <section id="who-we-are" className="scroll-mt-32">
            <h2 className="text-2xl font-bold mb-4">1. Who We Are</h2>
            <p className="mb-4">
              <strong>Touch Base Consulting</strong> is a digital marketing and web design agency. 
              We are committed to protecting your privacy and ensuring that your personal information is collected and used properly, lawfully, and transparently in accordance with the Protection of Personal Information Act (POPIA).
            </p>
            <p>
              <strong>Responsible Party Address:</strong><br />
              61 De Villiers Street, Sandbaai, 7200, Hermanus, South Africa.
            </p>
          </section>

          <section id="information-collected" className="scroll-mt-32">
            <h2 className="text-2xl font-bold mb-4">2. Information Collected</h2>
            <p className="mb-4">We may collect the following types of personal information when you interact with us:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Contact Information:</strong> Name, email address, phone number, and physical address.</li>
              <li><strong>Business Information:</strong> Company name, website URL, and business goals.</li>
              <li><strong>Technical Information:</strong> IP address, browser type, operating system, and website usage data collected via cookies.</li>
              <li><strong>Communication Records:</strong> Records of your correspondence with us via email, WhatsApp, or contact forms.</li>
            </ul>
          </section>

          <section id="how-we-use" className="scroll-mt-32">
            <h2 className="text-2xl font-bold mb-4">3. How We Use Information</h2>
            <p className="mb-4">Your personal information is used for the following purposes:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>To provide and deliver our web design, SEO, and digital marketing services.</li>
              <li>To communicate with you regarding your project, inquiries, or support requests.</li>
              <li>To send administrative information, such as updates to our terms, conditions, and policies.</li>
              <li>To improve our website, services, and customer experience.</li>
              <li>To comply with legal and regulatory obligations.</li>
            </ul>
          </section>

          <section id="your-rights" className="scroll-mt-32">
            <h2 className="text-2xl font-bold mb-4">4. Your Rights (POPIA)</h2>
            <p className="mb-4">Under the Protection of Personal Information Act (POPIA), you have the right to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Access:</strong> Request a copy of the personal information we hold about you.</li>
              <li><strong>Correction:</strong> Request that we correct or update any inaccurate or incomplete information.</li>
              <li><strong>Deletion:</strong> Request the deletion of your personal information, subject to legal retention requirements.</li>
              <li><strong>Objection:</strong> Object to the processing of your personal information for direct marketing purposes.</li>
              <li><strong>Complaint:</strong> Lodge a complaint with the Information Regulator of South Africa if you believe your rights have been violated.</li>
            </ul>
          </section>

          <section id="data-security" className="scroll-mt-32">
            <h2 className="text-2xl font-bold mb-4">5. Data Security</h2>
            <p>
              We implement appropriate technical and organizational security measures to protect your personal information against accidental or unlawful destruction, loss, alteration, unauthorized disclosure, or access. However, please note that no method of transmission over the internet or electronic storage is 100% secure.
            </p>
          </section>

          <section id="third-party" className="scroll-mt-32">
            <h2 className="text-2xl font-bold mb-4">6. Third-Party Sharing</h2>
            <p>
              We do not sell, trade, or rent your personal information to third parties. We may share your information with trusted third-party service providers who assist us in operating our website, conducting our business, or servicing you, provided that those parties agree to keep this information confidential and comply with POPIA.
            </p>
          </section>

          <section id="cookies" className="scroll-mt-32">
            <h2 className="text-2xl font-bold mb-4">7. Cookies</h2>
            <p>
              Our website uses cookies to enhance your browsing experience, analyze site traffic, and understand where our audience comes from. You can choose to accept or decline cookies through your browser settings. Declining cookies may prevent you from taking full advantage of the website.
            </p>
          </section>

          <section id="contact-us" className="scroll-mt-32">
            <h2 className="text-2xl font-bold mb-4">8. Contact Us</h2>
            <p className="mb-4">If you have any questions about this Privacy Policy or how we handle your personal information, please contact us:</p>
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
              <p className="mb-3">
                <strong>Email:</strong>{' '}
                <a href="mailto:customerservice@touchbaseconsulting.co.za" rel="noopener noreferrer" className="text-brand-green hover:underline font-medium">
                  customerservice@touchbaseconsulting.co.za
                </a>
              </p>
              <p className="mb-3">
                <strong>WhatsApp:</strong>{' '}
                <a href="https://wa.me/27750908984" target="_blank" rel="noopener noreferrer" className="text-brand-green hover:underline font-medium">
                  +27 75 090 8984
                </a>
              </p>
              <p>
                <strong>Address:</strong>{' '}
                61 De Villiers Street, Sandbaai, 7200, Hermanus, South Africa.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
