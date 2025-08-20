import PageHeader from "../components/PageHeader";

export default function About() {
  return (
    <div>
      <PageHeader title="About Us" />
      <section className="container mx-auto px-6 py-12">
        <div className="grid gap-8 md:grid-cols-3 items-start">
          <div className="md:col-span-2 space-y-4">
            <h2 className="text-2xl font-extrabold">
              Letter from the President
            </h2>
            <p>
              On behalf of the brothers of the Alpha Gamma Chapter of Alpha
              Kappa Psi at the University of Virginia, I would like to extend
              you a warm welcome to our website. We greatly appreciate your
              interest in our organization and invite you to explore our website
              to learn more about our members and why you may want to consider
              becoming a part of our Brotherhood.
            </p>
            <p>
              As the country’s largest and oldest business fraternity, Alpha
              Kappa Psi has long been recognized as the premier developer of
              principled business leaders. Our fraternity strives to grow
              students professionally, philanthropically, and socially through
              opportunities such as our mentorship program, mock interviews, and
              career workshops.
            </p>
            <p>
              The Alpha Gamma Chapter has established itself as a leading
              student organization at the University of Virginia, consistently
              attracting some of the best and brightest minds on Grounds.
            </p>
          </div>
          <div className="md:col-span-1">
            <img
              src="/images/fall2022/NewSpencer.jpg"
              alt="President"
              className="w-full rounded"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
