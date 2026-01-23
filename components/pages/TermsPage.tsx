"use client";

const TermsPage = () => {
  return (
    <section className="py-6 animate-ease-in-out" style={{ scrollbarGutter: 'stable' }}>
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <h1 className="h1 mb-8 text-center xl:text-left">Terms of Use</h1>
          
          <div className="bg-[#27272c] rounded-xl p-6 sm:p-10 space-y-6">
            <div>
              <p className="text-white/60 text-sm sm:text-base mb-6">
                Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            </div>

            <div>
              <h2 className="h2 mb-4 text-accent">Acceptance of Terms</h2>
              <p className="text-white/60 text-md sm:text-lg leading-relaxed mb-4">
                By accessing and using this personal portfolio website, you accept and agree to 
                be bound by the terms and provision of this agreement.
              </p>
            </div>

            <div className="border-t border-white/10 pt-6">
              <h2 className="h2 mb-4 text-accent">Use License</h2>
              <p className="text-white/60 text-md sm:text-lg leading-relaxed mb-4">
                Permission is granted to temporarily view the materials on this website for 
                personal, non-commercial transitory viewing only. This is the grant of a license, 
                not a transfer of title, and under this license you may not:
              </p>
              <ul className="list-disc list-inside text-white/60 text-md sm:text-lg space-y-2 ml-4">
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose or for any public display</li>
                <li>Attempt to decompile or reverse engineer any software contained on this website</li>
                <li>Remove any copyright or other proprietary notations from the materials</li>
              </ul>
            </div>

            <div className="border-t border-white/10 pt-6">
              <h2 className="h2 mb-4 text-accent">Disclaimer</h2>
              <p className="text-white/60 text-md sm:text-lg leading-relaxed mb-4">
                The materials on this website are provided on an 'as is' basis. We make no warranties, 
                expressed or implied, and hereby disclaim and negate all other warranties including, 
                without limitation, implied warranties or conditions of merchantability, fitness for 
                a particular purpose, or non-infringement of intellectual property or other violation 
                of rights.
              </p>
            </div>

            <div className="border-t border-white/10 pt-6">
              <h2 className="h2 mb-4 text-accent">Limitations</h2>
              <p className="text-white/60 text-md sm:text-lg leading-relaxed mb-4">
                In no event shall the website owner or its suppliers be liable for any damages 
                (including, without limitation, damages for loss of data or profit, or due to 
                business interruption) arising out of the use or inability to use the materials 
                on this website.
              </p>
            </div>

            <div className="border-t border-white/10 pt-6">
              <h2 className="h2 mb-4 text-accent">Accuracy of Materials</h2>
              <p className="text-white/60 text-md sm:text-lg leading-relaxed mb-4">
                The materials appearing on this website could include technical, typographical, 
                or photographic errors. We do not warrant that any of the materials on its website 
                are accurate, complete, or current.
              </p>
            </div>

            <div className="border-t border-white/10 pt-6">
              <h2 className="h2 mb-4 text-accent">Links</h2>
              <p className="text-white/60 text-md sm:text-lg leading-relaxed mb-4">
                This website may contain links to external websites. We are not responsible for 
                the contents of any such linked site. The inclusion of any link does not imply 
                endorsement by us of the site.
              </p>
            </div>

            <div className="border-t border-white/10 pt-6">
              <h2 className="h2 mb-4 text-accent">Modifications</h2>
              <p className="text-white/60 text-md sm:text-lg leading-relaxed mb-4">
                We may revise these terms of use at any time without notice. By using this website 
                you are agreeing to be bound by the then current version of these terms of use.
              </p>
            </div>

            <div className="border-t border-white/10 pt-6">
              <h2 className="h2 mb-4 text-accent">Contact</h2>
              <p className="text-white/60 text-md sm:text-lg leading-relaxed">
                If you have any questions about these Terms of Use, please contact us through 
                the contact form on this website.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TermsPage;
