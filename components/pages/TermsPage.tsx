"use client";

const TermsPage = () => {
  return (
    <section
      className="py-6 animate-ease-in-out"
    >
      <div className="container mx-auto">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-center xl:text-left">
            Terms of Use
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
              <h2 className="h2 mb-4 text-accent">Acceptance of Terms</h2>
              <p className="text-white/60 text-md sm:text-lg leading-relaxed mb-4">
                By accessing and using this personal portfolio website, you
                accept and agree to be bound by the terms and provision of this
                agreement.
              </p>
            </div>

            <div className="border-t border-white/10 pt-6">
              <h2 className="h2 mb-4 text-accent">Use License</h2>
              <p className="text-white/60 text-md sm:text-lg leading-relaxed mb-4">
                Permission is granted to temporarily view the materials on this
                website for personal, non-commercial transitory viewing only.
                This is the grant of a license, not a transfer of title, and
                under this license you may not:
              </p>
              <ul className="list-disc list-inside text-white/60 text-md sm:text-lg space-y-2 ml-4">
                <li>Modify or copy the materials</li>
                <li>
                  Use the materials for any commercial purpose or for any public
                  display
                </li>
                <li>
                  Attempt to decompile or reverse engineer any software
                  contained on this website
                </li>
                <li>
                  Remove any copyright or other proprietary notations from the
                  materials
                </li>
              </ul>
            </div>

            <div className="border-t border-white/10 pt-6">
              <h2 className="h2 mb-4 text-accent">Disclaimer</h2>
              <p className="text-white/60 text-md sm:text-lg leading-relaxed mb-4">
                The materials on this website are provided on an 'as is' basis.
                We make no warranties, expressed or implied, and hereby disclaim
                and negate all other warranties including, without limitation,
                implied warranties or conditions of merchantability, fitness for
                a particular purpose, or non-infringement of intellectual
                property or other violation of rights.
              </p>
            </div>

            <div className="border-t border-white/10 pt-6">
              <h2 className="h2 mb-4 text-accent">Limitations</h2>
              <p className="text-white/60 text-md sm:text-lg leading-relaxed mb-4">
                In no event shall the website owner or its suppliers be liable
                for any damages (including, without limitation, damages for loss
                of data or profit, or due to business interruption) arising out
                of the use or inability to use the materials on this website.
              </p>
            </div>

            <div className="border-t border-white/10 pt-6">
              <h2 className="h2 mb-4 text-accent">Accuracy of Materials</h2>
              <p className="text-white/60 text-md sm:text-lg leading-relaxed mb-4">
                The materials appearing on this website could include technical,
                typographical, or photographic errors. We do not warrant that
                any of the materials on its website are accurate, complete, or
                current.
              </p>
            </div>

            <div className="border-t border-white/10 pt-6">
              <h2 className="h2 mb-4 text-accent">Links</h2>
              <p className="text-white/60 text-md sm:text-lg leading-relaxed mb-4">
                This website may contain links to external websites. We are not
                responsible for the contents of any such linked site. The
                inclusion of any link does not imply endorsement by us of the
                site.
              </p>
            </div>

            <div className="border-t border-white/10 pt-6">
              <h2 className="h2 mb-4 text-accent">
                Intellectual Property Rights
              </h2>
              <p className="text-white/60 text-md sm:text-lg leading-relaxed mb-4">
                All content on this website, including but not limited to text,
                graphics, logos, images, audio clips, digital downloads, and
                software, is the property of Arnob Mahmud or its content
                suppliers and is protected by international copyright,
                trademark, and other intellectual property laws.
              </p>
              <p className="text-white/60 text-md sm:text-lg leading-relaxed mb-4">
                You may not reproduce, distribute, modify, create derivative
                works of, publicly display, publicly perform, republish,
                download, store, or transmit any of the material on our website
                without prior written consent, except as permitted by applicable
                copyright laws.
              </p>
            </div>

            <div className="border-t border-white/10 pt-6">
              <h2 className="h2 mb-4 text-accent">User Conduct</h2>
              <p className="text-white/60 text-md sm:text-lg leading-relaxed mb-4">
                You agree to use this website only for lawful purposes and in a
                way that does not infringe the rights of, restrict, or inhibit
                anyone else&apos;s use and enjoyment of the website. Prohibited
                behavior includes harassing or causing distress or inconvenience
                to any person, transmitting obscene or offensive content, or
                disrupting the normal flow of dialogue within our website.
              </p>
            </div>

            <div className="border-t border-white/10 pt-6">
              <h2 className="h2 mb-4 text-accent">Indemnification</h2>
              <p className="text-white/60 text-md sm:text-lg leading-relaxed mb-4">
                You agree to indemnify, defend, and hold harmless Arnob Mahmud,
                its officers, directors, employees, agents, and third parties,
                for any losses, costs, liabilities, and expenses (including
                reasonable attorney&apos;s fees) relating to or arising out of
                your use of or inability to use the website or services, any
                user postings made by you, your violation of any terms of this
                agreement, or your violation of any rights of a third party.
              </p>
            </div>

            <div className="border-t border-white/10 pt-6">
              <h2 className="h2 mb-4 text-accent">Governing Law</h2>
              <p className="text-white/60 text-md sm:text-lg leading-relaxed mb-4">
                These Terms of Use shall be governed by and construed in
                accordance with the laws of Germany, without regard to its
                conflict of law provisions. Any disputes arising from or
                relating to these terms or the use of this website shall be
                subject to the exclusive jurisdiction of the courts located in
                Germany.
              </p>
            </div>

            <div className="border-t border-white/10 pt-6">
              <h2 className="h2 mb-4 text-accent">Modifications</h2>
              <p className="text-white/60 text-md sm:text-lg leading-relaxed mb-4">
                We reserve the right to revise these terms of use at any time
                without notice. By using this website, you are agreeing to be
                bound by the then current version of these terms of use. We
                encourage you to review these terms periodically to stay
                informed of any updates or changes.
              </p>
            </div>

            <div className="border-t border-white/10 pt-6">
              <h2 className="h2 mb-4 text-accent">Severability</h2>
              <p className="text-white/60 text-md sm:text-lg leading-relaxed mb-4">
                If any provision of these Terms of Use is found to be
                unenforceable or invalid under any applicable law, such
                unenforceability or invalidity shall not render these Terms of
                Use unenforceable or invalid as a whole. Such provisions shall
                be deleted without affecting the remaining provisions herein.
              </p>
            </div>

            <div className="border-t border-white/10 pt-6">
              <h2 className="h2 mb-4 text-accent">Contact</h2>
              <p className="text-white/60 text-md sm:text-lg leading-relaxed">
                If you have any questions, comments, or concerns about these
                Terms of Use, please contact us through the contact form on this
                website. We will make every effort to address your inquiries in
                a timely and professional manner.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TermsPage;
