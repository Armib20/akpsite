import PageHeader from "../components/PageHeader";
import Reveal from "../components/Reveal";

export default function Philanthropy() {
  return (
    <div>
      <PageHeader title="Philanthropy" />
      <section className="container mx-auto px-6 md:px-8 py-14 md:py-16">
        <div className="max-w-4xl leading-relaxed">
          <h2 className="text-2xl font-bold">
            Attend an Upcoming Service Event
          </h2>
          <Reveal>
            <p className="mt-3">
              The Alpha Gamma Chapter is committed to giving back to the UVA and
              greater Charlottesville community. Each year, our chapter sponsors
              philanthropy events and participates in service activities with
              other organizations. The past couple of semesters, we have been
              particularly involved with the Boys and Girls Clubs of
              Charlottesville. Last spring, we held a March Madness Bracket
              fundraiser raising over $600 for the Boys and Girls Clubs of
              Charlottesville. We are always looking for opportunities to better
              our impact in Charlottesville, so if you have any questions,
              concerns, or suggestions, please do not hesitate to reach out.
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <p className="mt-4">
              Best,
              <br />
              <strong>Bomi Ayandipo</strong>
              <br />
              Vice President of Internal Development
              <br />
              gmh3ar@virginia.edu
            </p>
          </Reveal>
        </div>

        <div className="mt-12 space-y-12">
          <Reveal>
            <div>
              <h3 className="text-xl font-semibold">
                AKPsi First Annual Dumpling Eating Contest
              </h3>
              <p className="mt-3 max-w-3xl">
                Our chapter hosted the first annual Dumpling Eating Contest in
                the amphitheater on Wednesday March 23rd. Teams of three
                participants competed to finish 20 dumplings in the fastest
                time. This event had over 60 participants and raised hundreds of
                dollars for Meals on Wheels. Please stay tuned for details on
                next year's competition!
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.05}>
            <div>
              <h3 className="text-xl font-semibold">
                Fall 2016 Master of Service
              </h3>
              <p className="mt-3 max-w-3xl">
                Winnie has accumulated the most service hours this semester out
                of any brother, attending events including Challah for Hunger,
                Pancakes for Parkinson, and a lemonade stand supporting Meals on
                Wheels. Congratulations, Winnie, and thanks for your
                contributions!
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
