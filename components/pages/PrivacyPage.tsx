"use client";

const PrivacyPage = () => {
  return (
    <section className="py-6 animate-ease-in-out" style={{ scrollbarGutter: 'stable' }}>
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <h1 className="h1 mb-8 text-center xl:text-left">Privacy Policy</h1>
          
          <div className="bg-[#27272c] rounded-xl p-6 sm:p-10 space-y-6">
            <div>
              <p className="text-white/60 text-sm sm:text-base mb-6">
                Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            </div>

            <div>
              <h2 className="h2 mb-4 text-accent">Introduction</h2>
              <p className="text-white/60 text-md sm:text-lg leading-relaxed mb-4">
                This Privacy Policy describes how this personal portfolio website collects, uses, 
                and protects your personal information when you visit or interact with the site.
              </p>
            </div>

            <div className="border-t border-white/10 pt-6">
              <h2 className="h2 mb-4 text-accent">Information We Collect</h2>
              <p className="text-white/60 text-md sm:text-lg leading-relaxed mb-4">
                When you use the contact form on this website, we collect the following information:
              </p>
              <ul className="list-disc list-inside text-white/60 text-md sm:text-lg space-y-2 ml-4">
                <li>Your name</li>
                <li>Your email address</li>
                <li>Your message content</li>
              </ul>
            </div>

            <div className="border-t border-white/10 pt-6">
              <h2 className="h2 mb-4 text-accent">How We Use Your Information</h2>
              <p className="text-white/60 text-md sm:text-lg leading-relaxed mb-4">
                The information you provide through the contact form is used solely for the purpose 
                of responding to your inquiries and communicating with you about potential projects 
                or opportunities.
              </p>
            </div>

            <div className="border-t border-white/10 pt-6">
              <h2 className="h2 mb-4 text-accent">Data Protection</h2>
              <p className="text-white/60 text-md sm:text-lg leading-relaxed mb-4">
                We take reasonable measures to protect your personal information. However, please 
                note that no method of transmission over the internet or electronic storage is 
                100% secure.
              </p>
            </div>

            <div className="border-t border-white/10 pt-6">
              <h2 className="h2 mb-4 text-accent">Third-Party Services</h2>
              <p className="text-white/60 text-md sm:text-lg leading-relaxed mb-4">
                This website may use third-party services such as analytics tools and hosting 
                providers. These services may collect information about your visit to this website 
                in accordance with their own privacy policies.
              </p>
            </div>

            <div className="border-t border-white/10 pt-6">
              <h2 className="h2 mb-4 text-accent">Your Rights</h2>
              <p className="text-white/60 text-md sm:text-lg leading-relaxed mb-4">
                You have the right to request access to, correction of, or deletion of your 
                personal information. If you wish to exercise these rights, please contact us 
                through the contact form on this website.
              </p>
            </div>

            <div className="border-t border-white/10 pt-6">
              <h2 className="h2 mb-4 text-accent">Contact</h2>
              <p className="text-white/60 text-md sm:text-lg leading-relaxed">
                If you have any questions about this Privacy Policy, please contact us through 
                the contact form on this website.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPage;
