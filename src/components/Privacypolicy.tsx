import React from 'react';

const PrivacyPolicyPage = () => {
  return (
    <section className="bg-[#f7f4ee] py-20 lg:py-28">
      <div className="container-content grid md:grid-cols-2 gap-12 items-start font-sans text-gray-800">
        
        
        <div>
          <h1 className="text-4xl lg:text-5xl font-serif font-semibold text-gray-900 mb-8 leading-tight">
            Privacy Policy
          </h1>

          <h2 className="text-xl font-semibold mb-2 font-serif">Contact Us</h2>
          <p className="text-base leading-relaxed mb-8">
            If you have any questions or concerns about this privacy policy, please contact me at{' '}
            <a
              href="mailto:jennifer@drjenniferhahm.com"
              className="text-blue-800 underline hover:text-blue-600"
            >
              serena@blakepsychology.com
            </a>.
          </p>
        </div>

        
        <div className="space-y-10">
          
          
          <div>
            <h2 className="text-xl font-semibold font-serif mb-2">For Website Visitors</h2>
            <p className="text-base leading-relaxed mb-4">
              This website is hosted by Squarespace. Squarespace collects personal data when you visit this website, including:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Information about your browser, network and device</li>
              <li>Web pages you visited prior to coming to this website</li>
              <li>Your IP address</li>
            </ul>
            <p className="mt-4">
              Squarespace needs the data to run this website, and to protect and improve its platform and services. Squarespace analyzes the data in a de-personalized form.
            </p>
          </div>

          
          <div>
            <h2 className="text-xl font-semibold font-serif mb-2">Cookies</h2>
            <p className="text-base leading-relaxed mb-4">
              This website uses cookies and similar technologies, which are small files or pieces of text that download to a device when a visitor accesses a website or app. For information about viewing the cookies dropped on your device, visit{' '}
              <a
                href="https://support.squarespace.com/hc/en-us/articles/360001264507"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-800 underline hover:text-blue-600"
              >
                The cookies Squarespace uses
              </a>.
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>
                These functional and required cookies are always used, which allow Squarespace, our hosting platform, to securely serve this website to you.
              </li>
              <li>
                These analytics and performance cookies are used on this site, as described below, only when you acknowledge our cookie banner. We use analytics cookies to view site traffic, activity, and other data.
              </li>
            </ul>
          </div>

          
          <div>
            <h2 className="text-xl font-semibold font-serif mb-2">Fonts</h2>
            <p className="text-base leading-relaxed mb-4">
              This website uses font files from Google Fonts and Adobe Fonts. To properly display this site to you, servers where the font files are stored may receive personal information about you, including:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Information about your browser, network, or device</li>
              <li>Your IP address</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicyPage;
