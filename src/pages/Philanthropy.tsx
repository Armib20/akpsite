import PageHeader from "../components/PageHeader";

export default function Philanthropy() {
  return (
    <div>
      <PageHeader title="Philanthropy" />
      <section className="container mx-auto px-6 py-12">
        <p className="max-w-3xl">
          The Alpha Gamma Chapter is committed to giving back to the UVA and
          Charlottesville community.
        </p>
        <div className="mt-10 grid gap-10">
          <div className="grid gap-6 md:grid-cols-2 items-start">
            <img
              src="/images/events/dumpling.jpg"
              alt="Dumpling Contest"
              className="rounded"
            />
            <div>
              <h2 className="text-xl font-semibold">
                AKPsi First Annual Dumpling Eating Contest
              </h2>
              <p className="mt-2">
                Raised hundreds of dollars for Meals on Wheels.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
