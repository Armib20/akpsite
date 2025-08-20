type Executive = {
  name: string;
  role: string;
  image: string;
  bio: string;
};

const executives: Executive[] = [
  {
    name: "Spencer Howe",
    role: "President",
    image: "/images/fall2022/NewSpencer.jpg",
    bio: "Spencer is a 3rd year student from Fort Lauderdale, FL. Outside of academics, Spencer enjoys tennis, traveling, and F1.",
  },
  {
    name: "Carly Appel",
    role: "VP of Membership",
    image: "/images/spring2023/Carly.jpg",
    bio: "Carly is a 3rd year double majoring in Commerce and Statistics. She enjoys spin classes, long walks, and country music.",
  },
];

import PageHeader from "../components/PageHeader";

export default function Executives() {
  return (
    <div>
      <PageHeader title="Executives" />
      <section className="container mx-auto px-6 py-12">
        <div className="space-y-10">
          {executives.map((ex, idx) => (
            <div
              key={ex.name}
              className="grid gap-6 md:grid-cols-5 items-start"
            >
              {idx % 2 === 0 ? (
                <>
                  <div className="md:col-span-3 order-2 md:order-1">
                    <h2 className="text-2xl font-bold">{ex.name}</h2>
                    <p className="text-blue-700 font-semibold mt-1">
                      {ex.role}
                    </p>
                    <p className="mt-4 leading-relaxed">{ex.bio}</p>
                  </div>
                  <img
                    src={ex.image}
                    alt={ex.name}
                    className="md:col-span-2 order-1 md:order-2 rounded"
                  />
                </>
              ) : (
                <>
                  <img
                    src={ex.image}
                    alt={ex.name}
                    className="md:col-span-2 rounded"
                  />
                  <div className="md:col-span-3">
                    <h2 className="text-2xl font-bold">{ex.name}</h2>
                    <p className="text-blue-700 font-semibold mt-1">
                      {ex.role}
                    </p>
                    <p className="mt-4 leading-relaxed">{ex.bio}</p>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
