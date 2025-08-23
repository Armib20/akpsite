import PageHeader from "../components/PageHeader";
import Reveal from "../components/Reveal";

export default function CorporatePartners() {
  return (
    <div>
      <PageHeader title="Corporate Partners" />
      <section className="container mx-auto px-6 md:px-8 py-14 md:py-16">
        <div className="max-w-4xl leading-relaxed space-y-4">
          <h2 className="text-2xl font-bold">Become a Corporate Partner</h2>
          <Reveal>
            <p>
              Thank you for your interest in partnering with Alpha Kappa Psi, a
              distinguished professional business fraternity at the University
              of Virginia. As the largest student business organization on
              campus, Alpha Kappa Psi can serve as a unique liaison between your
              firm and the students of University of Virginia. We can help your
              company strengthen its presence at the University and assist in
              effectively finding the most qualified candidates for employment
              at your company. Our relationship can help you organize
              information sessions, career fairs, and various other events that
              involve University students. With our experience in a wide range
              of campus events, we can help you reach out to students through
              any method of your choice.
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <p>
              Feel free to contact the Vice President of Professional
              Development if you are interested in any of our sponsorship
              packages or have any questions.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <p>
              Sincerely,
              <br />
              <strong>Sreekar Kandlakunta</strong>
              <br />
              Vice President of Professional Development
              <br />
              sbk2hn@virginia.edu
            </p>
          </Reveal>
        </div>

        <hr className="my-12" />

        <div className="grid gap-8 md:grid-cols-5 items-start">
          <div className="md:col-span-2">
            <Reveal>
              <img
                src="/images/sponsor_logos/tpr.jpg"
                alt="The Princeton Review"
                className="rounded"
              />
            </Reveal>
          </div>
          <div className="md:col-span-3">
            <h3 className="text-xl font-semibold">Our Corporate Sponsors</h3>
            <Reveal>
              <p className="mt-3">
                <strong>The Princeton Review</strong> offers test preparation
                for standardized tests including SAT, ACT and graduate school
                entrance exams. The Princeton Review provides online and
                in-person tutoring and test prep from top-notch educators as
                well as more than 150 books that give test prep help to college
                admissions advice.
              </p>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}
