import PageHeader from "../components/PageHeader";

export default function Rush() {
  return (
    <div>
      <PageHeader title="Rush" />
      <section className="container mx-auto px-6 py-12">
        <p className="max-w-3xl">
          Welcome to Spring 2025 Rush. Join us at our open rush events and info
          sessions.
        </p>
        <div className="mt-6 space-y-3">
          <a
            className="inline-block bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 rounded"
            href="https://docs.google.com/forms/d/e/1FAIpQLSfdJcCMdnqObV0TOapnmi-fnCNTGUHZlj-9_ZfBPl017Yhzsw/viewform"
            target="_blank"
            rel="noreferrer"
          >
            Fill Out the Interest Form
          </a>
          <a
            className="block underline"
            href="https://docs.google.com/spreadsheets/d/1T4K4JwQHx7fJ13chKj_1shD4XEdt82fIFnQSeJ0enkc/edit?gid=0#gid=0"
            target="_blank"
            rel="noreferrer"
          >
            Coffee Chat Signups
          </a>
        </div>
        <div className="mt-10 grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-xl font-semibold">Info Sessions</h2>
            <ul className="list-disc ml-6 mt-2">
              <li>Info Session 1: Monday, 2/2 at 7:00 pm (RRH 120)</li>
              <li>Info Session 2: Tuesday, 2/3 at 6:00 pm (RRH 118)</li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-semibold">DEI Event</h2>
            <p className="mt-2">
              Resume Workshop: Thursday, 2/6 at 6:00 pm in RRH 123.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
