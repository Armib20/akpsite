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
    bio: "Spencer is a 3rd year student from Fort Lauderdale, Florida and intends to major in Finance and Mathematics. Beyond AKPsi, Spencer is involved in Global Markets Group, McIntire Investment Institute, Virginia Venture Fund, and his social fraternity. Outside of academics, Spencer enjoys playing tennis, traveling, and watching Formula 1.",
  },
  {
    name: "Carly Appel",
    role: "VP of Membership",
    image: "/images/spring2023/Carly.jpg",
    bio: "Carly is a 3rd year student from Atlanta, GA double majoring in Commerce, with a Finance Concentration, and Statistics. Beyond AKPsi, she is also involved on grounds as President of SEED Consulting and Program Director of SOCA Madison House. She is a McIntire Ambassador, TA for Intro to Management Consulting and Strategic Decision-Making, Investigator/Counsel for UVA Honor, and a member of Kappa Kappa Gamma sorority. She is looking forward to this upcoming summer where she will be interning at Bain & Company in New York. Carly also enjoys spin classes, long walks with friends, and country music.",
  },
  {
    name: "Shiloh Gelnett",
    role: "VP of Administration",
    image: "/images/fall2022/Shiloh.jpg",
    bio: "Shiloh is a 3rd year from Leesburg, Virginia double majoring in Economics and Statistics with a minor in Religious Studies. Shiloh is currently working for OakHeart Financial Group and this upcoming summer she will be working for Deloitte in Rosslyn, DC. In her free time she enjoys reading, weight lifting, and snowboarding.",
  },
  {
    name: "Paul Gallagher",
    role: "VP of Professional Development",
    image: "/images/spring2023/Paul.jpg",
    bio: "Paul is a 3rd year student majoring in Commerce and has worked at Draper Asset Management conducting equity research for the past two summers. This summer, he will be an Investment Banking Summer Analyst at Evercore in New York. Outside of AKPsi, Paul is involved in GMG, CSO, and Housing and Residence Life. In his free time, he enjoys listening to new music, watching MMA, and playing board games.",
  },
  {
    name: "Bahadir Turhan",
    role: "VP of Finance",
    image: "/images/fall2023/Baha.jpg",
    bio: "Bahadir is a 2nd year from Oakton, VA majoring in Statistics with a minor in Computer Science. Beyond AKPsi, he serves as the Director of Reapportionment for the UVA Community Food Pantry, and is an Associate in the Global Markets Group. Outside of school, Bahadir enjoys reading, cooking, and playing card games.",
  },
  {
    name: "Bomi Ayandipo",
    role: "VP of Internal Development",
    image: "/images/spring2024/Bomi.jpg",
    bio: "Bomi is a second-year student from Ashburn, VA, intending to major in Commerce and Political Philosophy, Policy, and Law. Beyond Alpha Kappa Psi, she is involved in Enactus and the Advertising and Marketing Association. This summer, Bomi will be joining Boston Consulting Group as a Sophomore Associate in Washington, DC. Outside of school, she enjoys traveling, taking long walks, and practicing yoga.",
  },
  {
    name: "Viswa Subramanian",
    role: "VP of Technology",
    image: "/images/fall2023/Viswa.jpg",
    bio: "Viswa is a second-year student intending to study Finance and Computer Science. He is from Richmond, Virginia and joined AKPsi during his first semester year at UVA. He is currently working as a Financial Restructuring Analyst at Asgaard Capital. Viswa is involved with the McIntire Investment Institute, SEED Consulting, and Credit and Restructuring Club. In his free time, he enjoys being a coach for a youth soccer team, playing poker, reading, and playing spikeball.",
  },
  {
    name: "Rohan Misra",
    role: "VP of Alumni Relations",
    image: "/images/fall2023/Rohan.jpg",
    bio: "Rohan Misra is a 2nd year from Ashburn, VA and intends to major in Commerce (Finance) and Government. Beyond AKPsi, Rohan is involved in SEED Consulting, Technology Strategy Group, and VISAS. Outside of academics, Rohan enjoys swimming, playing guitar, playing pickleball, and traveling.",
  },
  {
    name: "Ivan Gupta",
    role: "VP of Diversity, Equity, and Inclusion",
    image: "/images/fall2023/Ivan.jpg",
    bio: "Ivan is a second-year student from Ridgefield, CT, intending to major in Commerce and Economics. Beyond AKPsi, he is involved in 180 Degrees Consulting as the Vice President of Finance, SEED Consulting as a Project Leader, and Global Markets Group as an Analyst. Outside of academics, Ivan enjoys watching soccer, listening to Spanish music, and spending time with friends.",
  },
  {
    name: "Nick Steinhilber",
    role: "Secretary",
    image: "/images/spring2024/Nick.jpg",
    bio: "Nick is a 2nd year from Gurnee, IL intending to double major in statistics and commerce. Beyond AKPsi, he is also involved on grounds as Director of Membership for SEED Consulting and a member of the Sports Analytics and Statistics Laboratory. In 2026, Nick will be working at Evercore in their M&A Generalist Program. Outside of class, Nick enjoys golfing and making dinner with friends.",
  },
  {
    name: "Larina Yu",
    role: "Master of Rituals",
    image: "/images/spring2023/Larina.jpeg",
    bio: "Larina is a third year from Ashburn, VA studying Commerce (Finance concentration), Computer Science, and Studio Art. Beyond AKPsi, she is also involved in GMG, UPC, and various arts clubs. In her free time, she enjoys hiking, painting, and is currently learning to play the guitar!",
  },
];

import PageHeader from "../components/PageHeader";
import Reveal from "../components/Reveal";

export default function Executives() {
  return (
    <div>
      <PageHeader title="Executives" />
      <section className="container mx-auto px-6 md:px-8 py-14 md:py-16">
        <div className="space-y-14">
          {executives.map((ex, idx) => (
            <Reveal key={ex.name}>
              <div
                key={ex.name}
                className="grid gap-8 md:grid-cols-5 items-start"
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
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).src =
                          "/images/misc/placeholder.jpg";
                      }}
                    />
                  </>
                ) : (
                  <>
                    <img
                      src={ex.image}
                      alt={ex.name}
                      className="md:col-span-2 rounded"
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).src =
                          "/images/misc/placeholder.jpg";
                      }}
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
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
