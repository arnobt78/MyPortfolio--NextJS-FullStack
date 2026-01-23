"use client";

const PrivacyPage = () => {
  return (
    <section
      className="py-6 animate-ease-in-out"
    >
      <div className="container mx-auto">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-center xl:text-left">
            Privacy Policy
          </h1>

          <div className="bg-[#27272c] rounded-xl p-6 sm:p-10 space-y-6">
            <div>
              <p className="text-white/60 text-sm sm:text-base mb-6">
                Last updated:{" "}
                {new Date().toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            </div>

            <div>
              <h2 className="h2 mb-4 text-accent">Introduction</h2>
              <p className="text-white/60 text-md sm:text-lg leading-relaxed mb-4">
                This Privacy Policy describes how this personal portfolio
                website collects, uses, and protects your personal information
                when you visit or interact with the site.
              </p>
            </div>

            <div className="border-t border-white/10 pt-6">
              <h2 className="h2 mb-4 text-accent">Information We Collect</h2>
              <p className="text-white/60 text-md sm:text-lg leading-relaxed mb-4">
                When you use the contact form on this website, we collect the
                following information:
              </p>
              <ul className="list-disc list-inside text-white/60 text-md sm:text-lg space-y-2 ml-4">
                <li>Your name</li>
                <li>Your email address</li>
                <li>Your message content</li>
              </ul>
            </div>

            <div className="border-t border-white/10 pt-6">
              <h2 className="h2 mb-4 text-accent">
                How We Use Your Information
              </h2>
              <p className="text-white/60 text-md sm:text-lg leading-relaxed mb-4">
                The information you provide through the contact form is used
                solely for the purpose of responding to your inquiries and
                communicating with you about potential projects or
                opportunities.
              </p>
            </div>

            <div className="border-t border-white/10 pt-6">
              <h2 className="h2 mb-4 text-accent">Data Protection</h2>
              <p className="text-white/60 text-md sm:text-lg leading-relaxed mb-4">
                We take reasonable measures to protect your personal
                information. However, please note that no method of transmission
                over the internet or electronic storage is 100% secure.
              </p>
            </div>

            <div className="border-t border-white/10 pt-6">
              <h2 className="h2 mb-4 text-accent">Third-Party Services</h2>
              <p className="text-white/60 text-md sm:text-lg leading-relaxed mb-4">
                This website may use third-party services such as analytics
                tools and hosting providers. These services may collect
                information about your visit to this website in accordance with
                their own privacy policies.
              </p>
            </div>

            <div className="border-t border-white/10 pt-6">
              <h2 className="h2 mb-4 text-accent">
                Cookies and Tracking Technologies
              </h2>
              <p className="text-white/60 text-md sm:text-lg leading-relaxed mb-4">
                This website uses cookies and similar tracking technologies to
                enhance your browsing experience, analyze site traffic, and
                understand where our visitors are coming from. Cookies are small
                data files stored on your device that help us improve our
                website functionality and user experience.
              </p>
              <p className="text-white/60 text-md sm:text-lg leading-relaxed mb-4">
                We use Google Analytics to collect anonymous usage statistics.
                This helps us understand how visitors interact with our website,
                which pages are most popular, and how we can improve our content
                and services. You can control cookie preferences through your
                browser settings, though disabling cookies may affect website
                functionality.
              </p>
            </div>

            <div className="border-t border-white/10 pt-6">
              <h2 className="h2 mb-4 text-accent">Data Retention</h2>
              <p className="text-white/60 text-md sm:text-lg leading-relaxed mb-4">
                We retain your personal information only for as long as
                necessary to fulfill the purposes outlined in this Privacy
                Policy, unless a longer retention period is required or
                permitted by law. Contact form submissions are typically
                retained for up to one year to ensure we can respond to
                follow-up inquiries and maintain communication records.
              </p>
            </div>

            <div className="border-t border-white/10 pt-6">
              <h2 className="h2 mb-4 text-accent">Your Rights</h2>
              <p className="text-white/60 text-md sm:text-lg leading-relaxed mb-4">
                Under applicable data protection laws, including the General
                Data Protection Regulation (GDPR) if you are located in the
                European Economic Area, you have several rights regarding your
                personal information:
              </p>
              <ul className="list-disc list-inside text-white/60 text-md sm:text-lg space-y-2 ml-4 mb-4">
                <li>The right to access your personal data</li>
                <li>The right to rectify inaccurate or incomplete data</li>
                <li>
                  The right to erasure (&quot;right to be forgotten&quot;)
                </li>
                <li>The right to restrict processing of your data</li>
                <li>The right to data portability</li>
                <li>The right to object to processing</li>
              </ul>
              <p className="text-white/60 text-md sm:text-lg leading-relaxed mb-4">
                If you wish to exercise any of these rights, please contact us
                through the contact form on this website. We will respond to
                your request within a reasonable timeframe and in accordance
                with applicable data protection laws.
              </p>
            </div>

            <div className="border-t border-white/10 pt-6">
              <h2 className="h2 mb-4 text-accent">
                Changes to This Privacy Policy
              </h2>
              <p className="text-white/60 text-md sm:text-lg leading-relaxed mb-4">
                We may update this Privacy Policy from time to time to reflect
                changes in our practices, technology, legal requirements, or
                other factors. When we make changes, we will update the
                &quot;Last updated&quot; date at the top of this page. We
                encourage you to review this Privacy Policy periodically to stay
                informed about how we are protecting your information.
              </p>
            </div>

            <div className="border-t border-white/10 pt-6">
              <h2 className="h2 mb-4 text-accent">Contact</h2>
              <p className="text-white/60 text-md sm:text-lg leading-relaxed">
                If you have any questions, concerns, or requests regarding this
                Privacy Policy or our data practices, please contact us through
                the contact form on this website. We are committed to addressing
                your inquiries promptly and transparently.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPage;
