import PageHeader from "../components/PageHeader";

export default function Contact() {
  return (
    <div>
      <PageHeader title="Contact Us" />
      <section className="container mx-auto px-6 py-12">
        <ul className="space-y-2">
          <li>
            General Inquiries:{" "}
            <a className="underline" href="mailto:rqn3dp@virginia.edu">
              rqn3dp@virginia.edu
            </a>
          </li>
          <li>
            Corporate Relations:{" "}
            <a className="underline" href="mailto:zjk5gh@virginia.edu">
              zjk5gh@virginia.edu
            </a>
          </li>
          <li>
            Alumni Relations:{" "}
            <a className="underline" href="mailto:xnq2ng@virginia.edu">
              xnq2ng@virginia.edu
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
}
