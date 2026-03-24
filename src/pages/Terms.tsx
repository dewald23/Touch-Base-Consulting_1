import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export function Terms() {
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
        
        <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">Terms of Service</h1>
        <p className="text-slate-600 mb-8 font-medium">Effective Date: February 2026</p>
        
        <div className="bg-slate-50 p-6 rounded-2xl mb-12 border border-slate-100">
          <h2 className="text-xl font-bold mb-4">Quick Navigation</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-brand-green font-medium">
            <li><a href="#services-overview" className="hover:underline">Services Overview</a></li>
            <li><a href="#engagement-payment" className="hover:underline">Engagement & Payment</a></li>
            <li><a href="#intellectual-property" className="hover:underline">Intellectual Property</a></li>
            <li><a href="#client-responsibilities" className="hover:underline">Client Responsibilities</a></li>
            <li><a href="#limitations-liability" className="hover:underline">Limitations of Liability</a></li>
            <li><a href="#governing-law" className="hover:underline">Governing Law</a></li>
            <li><a href="#contact-us" className="hover:underline">Contact Us</a></li>
          </ul>
        </div>

        <div className="space-y-12 text-lg leading-relaxed">
          <section id="services-overview" className="scroll-mt-32">
            <h2 className="text-2xl font-bold mb-4">1. Services Overview</h2>
            <p>
              Touch Base Consulting provides digital marketing services, including but not limited to AI-powered web design, Search Engine Optimization (SEO), and digital strategy consulting. The specific scope of services will be outlined in a separate proposal or statement of work provided to the client.
            </p>
          </section>

          <section id="engagement-payment" className="scroll-mt-32">
            <h2 className="text-2xl font-bold mb-4">2. Engagement & Payment</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Currency:</strong> All fees are quoted and payable in South African Rand (ZAR) unless otherwise agreed.</li>
              <li><strong>Deposit:</strong> A non-refundable deposit of 50% of the total project cost is required before any work commences.</li>
              <li><strong>Final Payment:</strong> The remaining 50% balance is due upon project completion and before the final website or deliverables are handed over or made live.</li>
              <li><strong>Late Payments:</strong> Touch Base Consulting reserves the right to suspend services or withhold deliverables if payments are not made according to the agreed schedule.</li>
            </ul>
          </section>

          <section id="intellectual-property" className="scroll-mt-32">
            <h2 className="text-2xl font-bold mb-4">3. Intellectual Property</h2>
            <p className="mb-4">
              Upon full and final payment, the client will own the rights to the final website design and content created specifically for their project. However, Touch Base Consulting retains the following rights:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Portfolio Rights:</strong> We reserve the right to showcase the completed project in our portfolio, on our website, and in marketing materials.</li>
              <li><strong>Underlying Code & AI Models:</strong> Any proprietary code, frameworks, or AI models used to develop the project remain the intellectual property of Touch Base Consulting or their respective licensors.</li>
            </ul>
          </section>

          <section id="client-responsibilities" className="scroll-mt-32">
            <h2 className="text-2xl font-bold mb-4">4. Client Responsibilities</h2>
            <p>
              The client agrees to provide all necessary content, materials, and feedback in a timely manner to ensure the project stays on schedule. Delays in providing required information may result in project timeline extensions. The client also guarantees that any text, graphics, photos, designs, trademarks, or other artwork provided to Touch Base Consulting are owned by the client or that the client has permission to use them.
            </p>
          </section>

          <section id="limitations-liability" className="scroll-mt-32">
            <h2 className="text-2xl font-bold mb-4">5. Limitations of Liability</h2>
            <p>
              Touch Base Consulting shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the services. Our total liability for any claims arising out of or relating to these terms or our services is limited to the amount you paid us for the specific services giving rise to the claim.
            </p>
          </section>

          <section id="governing-law" className="scroll-mt-32">
            <h2 className="text-2xl font-bold mb-4">6. Governing Law</h2>
            <p>
              These Terms of Service and any separate agreements whereby we provide you services shall be governed by and construed in accordance with the laws of the Republic of South Africa, specifically within the jurisdiction of the Western Cape.
            </p>
          </section>

          <section id="contact-us" className="scroll-mt-32">
            <h2 className="text-2xl font-bold mb-4">7. Contact Us</h2>
            <p className="mb-4">If you have any questions about these Terms of Service, please contact us:</p>
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
