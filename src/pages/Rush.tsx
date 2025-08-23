import PageHeader from "../components/PageHeader";
import Reveal from "../components/Reveal";

export default function Rush() {
  return (
    <div>
      <PageHeader title="Rush" />
      <section className="container mx-auto px-6 md:px-8 py-14 md:py-16">
        <div className="max-w-3xl leading-relaxed space-y-4">
          <h2 className="text-2xl font-bold">Dear Prospective Rushees</h2>
          <Reveal>
            <p>
              On behalf of the brotherhood, welcome to the 2025 Fall Rush of the
              University of Virginia’s chapter of Alpha Kappa Psi, the world’s
              largest and nation’s premier co-ed business fraternity. We are
              excited to get to know each one of you and hope you will join us
              for our open rush events. Alpha Kappa Psi is an organization of
              lifelong friends & highly esteemed individuals all with a common
              interest in business; we invite you to begin the process in
              joining our brotherhood.
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <p>
              Sincerely,
              <br />
              <span className="font-medium">Fall 2025 Rush Chairs</span>
              <br />
              rush.uva.akpsi@gmail.com
            </p>
          </Reveal>
          <div className="pt-2 space-x-3">
            <a
              className="inline-block bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 rounded"
              href="https://docs.google.com/forms/d/e/1FAIpQLSfdJcCMdnqObV0TOapnmi-fnCNTGUHZlj-9_ZfBPl017Yhzsw/viewform"
              target="_blank"
              rel="noreferrer"
            >
              Fill Out the Interest Form Here
            </a>
          </div>
        </div>

        <div className="mt-12 grid gap-10 md:grid-cols-2">
          <div>
            <h3 className="text-xl font-semibold">Info Sessions</h3>
            <Reveal>
              <ul className="list-disc ml-6 mt-3 space-y-1">
                <li>Info Session 1: Monday, 2/2 at 7:00 pm (RRH 120)</li>
                <li>Info Session 2: Tuesday, 2/3 at 6:00 pm (RRH 118)</li>
              </ul>
            </Reveal>
            <Reveal delay={0.05}>
              <p className="mt-3 text-sm opacity-90">
                Rushees must attend at least one info session or the DEI panel
                to be eligible, and may attend more in order to meet more
                Brothers.
              </p>
            </Reveal>
          </div>
          <div>
            <h3 className="text-xl font-semibold">DEI Event</h3>
            <Reveal>
              <p className="mt-3">
                The Resume Workshop event will be held on Thursday, 2/6 at 6:00
                pm in RRH 123. Rushees must attend this event or an info session
                in order to be eligible to apply.
              </p>
            </Reveal>
          </div>
        </div>

        <div className="mt-10 grid gap-10 md:grid-cols-2">
          <div>
            <h3 className="text-xl font-semibold">Coffee Chats</h3>
            <Reveal>
              <p className="mt-3">
                Coffee chats will be held from 2/7-2/9 for rushees to learn more
                about AKPsi and get to know our brothers.
              </p>
            </Reveal>
            <a
              className="mt-2 inline-block underline"
              href="https://docs.google.com/spreadsheets/d/1T4K4JwQHx7fJ13chKj_1shD4XEdt82fIFnQSeJ0enkc/edit?gid=0#gid=0"
              target="_blank"
              rel="noreferrer"
            >
              Click here for Coffee Chat signups!
            </a>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Internship Panel</h3>
            <Reveal>
              <p className="mt-3">
                Our Internship Panel will be held Wednesday, 2/5 at 7:00 pm (RRH
                123). Rushees will get the chance to hear about internships
                Brothers held this past summer in a variety of industries.
              </p>
            </Reveal>
          </div>
        </div>

        <div className="mt-14">
          <h3 className="text-2xl font-bold">Frequently Asked Questions</h3>
          <div className="mt-6 space-y-6 max-w-4xl">
            <div>
              <h4 className="font-semibold">What is Rush?</h4>
              <Reveal>
                <p className="mt-2">
                  Rush is our formal two week recruiting process where the
                  brothers are just trying to get to know you and determine
                  whether AKPsi is the best place for you. Through the
                  information sessions, we hope you get a sense of what our
                  brotherhood is all about. Even though it can seem intimidating
                  at first, don’t forget that at one point we all were rushees
                  just like you, and every brother would attest that they were
                  glad that they came out and rushed.
                </p>
              </Reveal>
            </div>
            <div>
              <h4 className="font-semibold">
                What kind of people is Alpha Kappa Psi looking for?
              </h4>
              <Reveal>
                <p className="mt-2">
                  Our ideal rushees are highly motivated, passionate,
                  intelligent candidates with an interest in pursuing a career
                  in business. We look for individuals who have had academic
                  success in the past, but also for those who possess the
                  potential to be leaders in the future. Most importantly, we
                  look for individuals who have desire to learn from current
                  brothers and contribute back to the brotherhood.
                </p>
              </Reveal>
            </div>
            <div>
              <h4 className="font-semibold">
                Do I have to be a Commerce major to rush?
              </h4>
              <Reveal>
                <p className="mt-2">
                  No. While AKPsi is a professional business fraternity, we are
                  very open-minded and are receptive to students from all major
                  programs. Our diverse ranks include brothers in engineering,
                  mathematics, politics, language and just about every other
                  major program.
                </p>
              </Reveal>
            </div>
            <div>
              <h4 className="font-semibold">
                Do I have to attend every single rush event?
              </h4>
              <Reveal>
                <p className="mt-2">
                  No. You do not have to attend every single rush event. You can
                  attend one of three the information sessions that will give a
                  background about our fraternity and the rush process.
                  Attendance at the mixer and invitation-only lawn social is
                  mandatory unless you have a conflict, in which case you need
                  to inform the rush chairs beforehand. The more chances you
                  have to interact with our brothers, the more likely it is you
                  will leave a lasting impression.
                </p>
              </Reveal>
            </div>
            <div>
              <h4 className="font-semibold">
                Can I pledge another fraternity/sorority in addition to Alpha
                Kappa Psi?
              </h4>
              <Reveal>
                <p className="mt-2">
                  Yes. You are welcome to pledge other fraternities/sororities
                  as long as they are not business-oriented. However, we do not
                  recommend pledging two fraternities in the same semester.
                </p>
              </Reveal>
            </div>
            <div>
              <h4 className="font-semibold">
                If I am not given a bid can I rush again?
              </h4>
              <Reveal>
                <p className="mt-2">
                  Yes. Past rushees are encouraged to rush again if they truly
                  want to join AKPsi. It reflects well on an individual if
                  he/she is willing to put in the time to go through the rush
                  process more than once. In fact, many of our brothers received
                  bids the second or third time they rushed.
                </p>
              </Reveal>
            </div>
            <div>
              <h4 className="font-semibold">
                Do you have any recommendations for rushing?
              </h4>
              <Reveal>
                <p className="mt-2">
                  You should meet as many brothers as you can and ask brothers
                  any questions you may have. Remember that we are a
                  professional business fraternity – take care in presenting
                  yourself at all functions and via all channels of
                  communication. First impressions are critical in business.
                </p>
              </Reveal>
            </div>
            <div>
              <h4 className="font-semibold">
                What is the pledge process like?
              </h4>
              <Reveal>
                <p className="mt-2">
                  The pledge process is designed to develop your personal and
                  professional skills. You will be involved in organizing
                  various social, professional and service events and given the
                  opportunity to network and hone your leadership abilities.
                  Most importantly, you will have a great time interacting with
                  the brothers and forming life long bonds with a great group of
                  people!
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
