import React from 'react';

function TermsAndServices() {
  return (
    <section className="bg-white my-[50px] md:my-[60px] leading-8">
      <div className="max-w-[1440px] mx-auto text-[#696969] text-[18px] px-[15px]">
        <div className="mb-8 text-center">
          <h1 className="text-[37px] text-black font-bold">Terms of Service</h1>
        </div>

        <div className="space-y-6 leading-8">
          <p className='leading-8'>
            This website is operated by Spiru Swastha. Throughout the site, the terms “we,” “us,” and “our” refer to Spiru Swastha. Spiru Swastha offers this website, including all information, tools, and services available from this site to you, the user, conditioned upon your acceptance of all terms, conditions, policies, and notices stated here.
          </p>

          <p>
            By accessing, browsing, or making a purchase on our website, you agree to these Terms of Use and the associated Privacy Policy, Shipping Policy, and Refund Policy. If you do not agree to these Terms, please discontinue use of the website. We may modify these Terms at any time. Continued use constitutes acceptance of the changes.
          </p>

          <h2 className="text-[29px] text-black font-semibold mb-2">1. Eligibility</h2>
          <p>
            You must be at least the age of majority in your state or province of residence. Minors may use the site only under parental or guardian supervision. You confirm your information is accurate upon registration.
          </p>

          <h2 className="text-[29px] text-black font-semibold mb-2">2. Account Management</h2>
          <p>
            You are responsible for keeping your account credentials confidential. Notify us of unauthorized activity. We reserve the right to suspend or terminate accounts.
          </p>

          <h2 className="text-[29px] text-black font-semibold mb-2">3. Use of the Website</h2>
          <p>You may not:</p>
          <ul className="list-disc pl-[17px]">
            <li>Engage in illegal or unauthorized activities.</li>
            <li>Interfere with security features of the site.</li>
            <li>Upload or transmit harmful or unlawful content.</li>
            <li>Violate any law.</li>
          </ul>

          <h2 className="text-[29px] text-black font-semibold mb-2">4. Pricing and Product Information</h2>
          <p>
            Products are subject to availability. We do not guarantee all descriptions or prices are error-free. Seasonal changes may affect appearance but not nutrition.
          </p>

          <h2 className="text-[29px] text-black font-semibold mb-2">5. Coupons and Promotions</h2>
          <ul className="list-disc pl-[17px]">
            <li>Subject to specific terms and exclusions.</li>
            <li>Not valid on sale items or with other offers.</li>
            <li>Can be modified or withdrawn any time.</li>
            <li>Discount caps may apply.</li>
            <li>BOGO limited to one free item per customer.</li>
          </ul>

          <h2 className="text-[29px] text-black font-semibold mb-2">6. Loyalty Program</h2>
          <ul className="list-disc pl-[17px]">
            <li>Cashback is capped per invoice.</li>
            <li>Expires in six months unless stated.</li>
            <li>Refunds exclude cashback credits.</li>
          </ul>

          <h2 className="text-[29px] text-black font-semibold mb-2">7. Shipping and Delivery</h2>
          <p>
            Delivery times are estimated. We’re not responsible for delays outside our control. Refer to our Shipping Policy.
          </p>

          <h2 className="text-[29px] text-black font-semibold mb-2">8. Returns, Refunds, and Cancellations</h2>
          <ul className="list-disc pl-[17px]">
            <li>Orders may be canceled before dispatch.</li>
            <li>Returns and exchanges follow our Refund Policy.</li>
            <li>Refunds go to the original payment method.</li>
          </ul>

          <h2 className="text-[29px] text-black font-semibold mb-2">9. User-Generated Content</h2>
          <ul className="list-disc pl-[17px]">
            <li>You give us rights to use and modify your content.</li>
            <li>Do not submit unlawful or abusive material.</li>
          </ul>

          <h2 className="text-[29px] text-black font-semibold mb-2">10. Third-Party Links</h2>
          <p>
            We are not responsible for external content. Use third-party websites at your own risk.
          </p>

          <h2 className="text-[29px] text-black font-semibold mb-2">11. Intellectual Property</h2>
          <p>
            All site content is owned by Spiru Swastha. Reproduction or distribution without permission is prohibited.
          </p>

          <h2 className="text-[29px] text-black font-semibold mb-2">12. Limitation of Liability</h2>
          <ul className="list-disc pl-[17px]">
            <li>We are not liable for errors in product info.</li>
            <li>We are not responsible for reliance on our content.</li>
            <li>Unauthorized account activity is your responsibility.</li>
            <li>We’re not liable for third-party services.</li>
          </ul>

          <h2 className="text-[29px] text-black font-semibold mb-2">13. Indemnification</h2>
          <p>
            You agree to defend and indemnify us for any claims from your violation of these terms.
          </p>

          <h2 className="text-[29px] text-black font-semibold mb-2">14. Governing Law and Jurisdiction</h2>
          <p>
            These Terms are governed by Indian law. Disputes will be resolved in Surat, Gujarat.
          </p>

          <h2 className="text-[29px] text-black font-semibold mb-2">15. Modifications to Terms of Use</h2>
          <p>
            We may update these Terms at any time. Continued use of the site confirms your acceptance.
          </p>

          <h2 className="text-[29px] text-black font-semibold mb-2">16. Contact Information</h2>
          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto:info@spiruswastha.com" className="underline text-black">
              info@spiruswastha.com
            </a>
          </p>
          <p>
            <strong>Address:</strong><br />
            2nd Floor, Flat No. A/203,<br />
            Dev Prayag Residency, Opp. Shraddhadip Society,<br />
            Causeway Singanpor Road, Singanpor, Surat, Gujarat, 395004
          </p>

          <p className="mt-6">
            By using our website, you agree to these Terms of Use.
          </p>
        </div>
      </div>
    </section>
  );
}

export default TermsAndServices;
