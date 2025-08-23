import PageHeader from "../components/PageHeader";
import Reveal from "../components/Reveal";

export default function About() {
  return (
    <div>
      <PageHeader title="About Us" />
      <section className="container mx-auto px-6 md:px-8 py-14 md:py-16">
        <div className="grid gap-12 lg:grid-cols-3 items-start">
          <div className="lg:col-span-2 space-y-5 leading-relaxed">
            <h2 className="text-2xl md:text-3xl font-extrabold">
              Letter from the President
            </h2>
            <Reveal>
              <p>
                On behalf of the brothers of the Alpha Gamma Chapter of Alpha
                Kappa Psi at the University of Virginia, I would like to extend
                you a warm welcome to our website. We greatly appreciate your
                interest in our organization and invite you to explore our
                website to learn more about our members and why you may want to
                consider becoming a part of our Brotherhood.
              </p>
            </Reveal>
            <Reveal delay={0.05}>
              <p>
                As the country’s largest and oldest business fraternity, Alpha
                Kappa Psi has long been recognized as the premier developer of
                principled business leaders. Our fraternity strives to grow
                students professionally, philanthropically, and socially through
                opportunities such as our mentorship program, mock interviews,
                and career workshops. This rich tradition has produced our vast
                network of successful students and alumni, including former U.S.
                Presidents, Fortune 500 CEOs, and student leaders.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <p>
                The Alpha Gamma Chapter has established itself as a leading
                student organization at the University of Virginia, consistently
                attracting some of the best and brightest minds on Grounds. A
                McIntire-affiliated organization and UVA’s only co-ed
                professional fraternity, our chapter strives to uphold the
                highest levels of excellence within the McIntire School of
                Commerce and the greater UVA community. We are proud to call
                some of the most accomplished leaders on Grounds our own,
                including presidents and executive board members of various
                business organizations and other clubs.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <p>
                Additionally, the Alpha Gamma Chapter values philanthropic work
                as well as the social aspects of a college experience. Our
                brothers demonstrate their commitment to one another through
                weekly social events, and regularly participate in philanthropy
                events throughout the Charlottesville area to positively impact
                the community and become well-rounded students and future
                leaders.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <p>
                I am wholeheartedly grateful for my brothers, who have become my
                best friends, and for all the other opportunities that Alpha
                Kappa Psi has provided me. Thank you again for your interest.
                Please feel free to contact me with any questions regarding the
                Alpha Gamma Chapter and don’t forget to attend our Rush events
                at the beginning of the semester!
              </p>
              <p className="pt-2 font-medium">Warm regards,</p>
              <p className="font-semibold">Spencer Howe</p>
              <p>rqn3dp@virginia.edu</p>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <div className="lg:col-span-1">
              <img
                src="/images/fall2022/NewSpencer.jpg"
                alt="President"
                className="w-full rounded"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-neutral-50">
        <div className="container mx-auto px-6 md:px-8 py-14 md:py-16">
          <div className="text-center mb-10">
            <h3 className="text-2xl md:text-3xl font-extrabold">
              Why Rush <span className="text-inherit">Alpha Kappa Psi</span>
            </h3>
          </div>
          <div className="grid gap-8 sm:grid-cols-3 text-center">
            <p className="font-semibold">Professional Development</p>
            <p className="font-semibold">Tight Community</p>
            <p className="font-semibold">Leadership Opportunities</p>
          </div>
          <p className="mt-8 max-w-5xl mx-auto text-center leading-relaxed">
            As the largest and oldest business fraternity in the United States,
            and the only one at the University of Virginia, Alpha Kappa Psi
            offers endless opportunities. As a brother of such a vast, diverse,
            and successful organization, you will join a network with hundreds
            of alumni that are willing to help you reach your career goals. With
            over 75 active brothers in the organization, you will get to know
            everyone on a more personal level and foster lifelong friendships.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-6 md:px-8 py-14 md:py-16 space-y-16">
        <Reveal>
          <div className="grid gap-8 md:grid-cols-5 items-start">
            <img
              src="/images/misc/about-professional.jpg"
              alt="Professional Development"
              className="md:col-span-2 rounded"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).src =
                  "/images/misc/placeholder.jpg";
              }}
            />
            <div className="md:col-span-3">
              <h3 className="text-2xl font-bold">Professional Development</h3>
              <p className="mt-3 leading-relaxed">
                As the premier business fraternity on Grounds, Alpha Kappa Psi
                strongly emphasizes professional development and growth for all
                its members. We start developing our members as soon as they
                start pledging, with our older members serving as mentors that
                help and assist our younger pledges in becoming the world’s
                future business leaders. During their time in Alpha Kappa Psi at
                the University of Virginia, members enjoy many opportunities to
                grow and hone their business skills through mock interviews,
                resume critiques, career workshops, and much more. When our
                members graduate, they join the business world ready for
                success.
              </p>
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.05}>
          <div className="grid gap-8 md:grid-cols-5 items-start">
            <div className="md:col-span-3 order-2 md:order-1">
              <h3 className="text-2xl font-bold">Brotherhood</h3>
              <p className="mt-3 leading-relaxed">
                At the core of our organization is our deep friendships. We push
                each other to work hard and play harder. But outside of our
                day-to-day relationships, we also preserve lasting traditions,
                from football game tailgates to Foxfield races to spring
                formals. Alpha Chapter is defined by our closeness, between
                class years and through our alumni network. The people you meet
                will go on to be your closest friends, roommates, study buddies,
                and everything in between.
              </p>
            </div>
            <img
              src="/images/misc/about-brotherhood.jpg"
              alt="Brotherhood"
              className="md:col-span-2 order-1 md:order-2 rounded"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).src =
                  "/images/misc/placeholder.jpg";
              }}
            />
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="grid gap-8 md:grid-cols-5 items-start">
            <img
              src="/images/misc/about-leadership.jpg"
              alt="Leadership"
              className="md:col-span-2 rounded"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).src =
                  "/images/misc/placeholder.jpg";
              }}
            />
            <div className="md:col-span-3">
              <h3 className="text-2xl font-bold">Leadership</h3>
              <p className="mt-3 leading-relaxed">
                As brothers of Alpha Kappa Psi, we are united by our passion for
                business, commitment to brotherhood, and dedication to the
                community. Through the resources available exclusively to AKPsi
                brothers and the invaluable support we provide to one another,
                we count among our membership leaders of other campus
                organizations, members of Deans' Lists, successful
                entrepreneurs, and valued members of the community. As a
                brother, you'll also learn these leadership skills that you'll
                be able to take and apply to a wide variety of circumstances
                whether academic or professional.
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-extrabold">
              Our Alumni Network Expands Across{" "}
              <span className="inline-block align-baseline bg-blue-600 text-white px-2 rounded">
                Finance
              </span>
            </h3>
            <p className="mt-2 opacity-90">
              Hundreds of alumni are working at the top of every industry
            </p>
          </div>
        </Reveal>

        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {[
            { name: "Goldman Sachs", file: "goldman.png" },
            { name: "Bain", file: "bain.png" },
            { name: "McKinsey", file: "mckinsey.png" },
            { name: "JPMorgan", file: "jpmorgan.png" },
            { name: "Evercore", file: "evercore.png" },
            { name: "Google", file: "google.png" },
            { name: "Morgan Stanley", file: "morganstanley.png" },
            { name: "Blackstone", file: "blackstone.png" },
            { name: "Deloitte", file: "deloitte.png" },
            { name: "Microsoft", file: "microsoft.png" },
            { name: "BCG", file: "bcg.png" },
            { name: "Oliver Wyman", file: "oliverwyman.png" },
          ].map((c, i) => (
            <Reveal key={c.name} delay={i * 0.03}>
              <div className="flex items-center justify-center border rounded-md bg-white py-8 px-6">
                <img
                  src={`/images/misc/logos/${c.file}`}
                  alt={c.name}
                  className="max-h-10 object-contain"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src =
                      "/images/misc/placeholder.jpg";
                  }}
                />
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="text-center">
            <h3 className="text-2xl font-bold">Interested in Joining?</h3>
            <p className="mt-3">We look forward to getting to know you.</p>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
