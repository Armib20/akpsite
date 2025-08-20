import { useMemo, useState } from "react";
import PageHeader from "../components/PageHeader";

type CohortKey =
  | "show-all"
  | "fall-2024"
  | "spring-2024"
  | "fall-2023"
  | "spring-2023"
  | "fall-2022";

type Brother = {
  name: string;
  image: string; // public path under /images
  cohort: Exclude<CohortKey, "show-all">;
};

const tabs: { key: CohortKey; label: string }[] = [
  { key: "show-all", label: "Show All" },
  { key: "fall-2024", label: "Fall 2024" },
  { key: "spring-2024", label: "Spring 2024" },
  { key: "fall-2023", label: "Fall 2023" },
  { key: "spring-2023", label: "Spring 2023" },
  { key: "fall-2022", label: "Fall 2022" },
];

// Data is mapped to actual filenames inside public/images
const brothers: Brother[] = [
  // Fall 2024
  {
    name: "Andrew Kohl",
    image: "/images/fall2024/AndrewKohl.jpg",
    cohort: "fall-2024",
  },
  {
    name: "Ani Nangia",
    image: "/images/fall2024/AniNangia.jpg",
    cohort: "fall-2024",
  },
  {
    name: "Artin Sadaat",
    image: "/images/fall2024/ArtinSadaat.jpg",
    cohort: "fall-2024",
  },
  {
    name: "Caroline Jamison",
    image: "/images/fall2024/CarolineJamison.jpg",
    cohort: "fall-2024",
  },
  {
    name: "Christian Min",
    image: "/images/fall2024/ChristianMin.jpg",
    cohort: "fall-2024",
  },
  {
    name: "Eliot Scheri",
    image: "/images/fall2024/EliotScheri.jpg",
    cohort: "fall-2024",
  },
  {
    name: "Frazier Brantwain",
    image: "/images/fall2024/FrazierBrantwain.jpg",
    cohort: "fall-2024",
  },
  {
    name: "Ismoil Parpiev",
    image: "/images/fall2024/IsmoilParpiev.jpg",
    cohort: "fall-2024",
  },
  {
    name: "Ivan So",
    image: "/images/fall2024/IvanSo.jpg",
    cohort: "fall-2024",
  },
  {
    name: "Kelly Neuner",
    image: "/images/fall2024/KellyNeuner.jpg",
    cohort: "fall-2024",
  },
  {
    name: "Kelly Pan",
    image: "/images/fall2024/KellyPan.jpg",
    cohort: "fall-2024",
  },
  {
    name: "Luca Marques",
    image: "/images/fall2024/LucaMarques.jpg",
    cohort: "fall-2024",
  },
  {
    name: "Mana Iyer",
    image: "/images/fall2024/ManaIyer.jpg",
    cohort: "fall-2024",
  },
  {
    name: "Ned Tower",
    image: "/images/fall2024/NedTower.jpg",
    cohort: "fall-2024",
  },
  {
    name: "Sam Fuller",
    image: "/images/fall2024/SamFuller.jpg",
    cohort: "fall-2024",
  },
  {
    name: "Teddy Ingold",
    image: "/images/fall2024/TeddyIngold.jpg",
    cohort: "fall-2024",
  },

  // Spring 2024
  {
    name: "Aadil Anand",
    image: "/images/spring2024/Aadil.jpg",
    cohort: "spring-2024",
  },
  {
    name: "Ben Tran",
    image: "/images/spring2024/Ben.jpg",
    cohort: "spring-2024",
  },
  {
    name: "Bomi Ayandipo",
    image: "/images/spring2024/Bomi.jpg",
    cohort: "spring-2024",
  },
  {
    name: "Imran Rahmizai",
    image: "/images/spring2024/Imran.jpg",
    cohort: "spring-2024",
  },
  {
    name: "Julia Yu",
    image: "/images/spring2024/Julia.jpg",
    cohort: "spring-2024",
  },
  {
    name: "Kriti Bhabu",
    image: "/images/spring2024/Kriti.jpg",
    cohort: "spring-2024",
  },
  {
    name: "Lynn Rizk",
    image: "/images/spring2024/Lynn.jpg",
    cohort: "spring-2024",
  },
  {
    name: "Nick Steinhilber",
    image: "/images/spring2024/Nick.jpg",
    cohort: "spring-2024",
  },
  {
    name: "Sonith Sunku",
    image: "/images/spring2024/Sonith.jpg",
    cohort: "spring-2024",
  },
  {
    name: "Tina Gao",
    image: "/images/spring2024/Tina.jpg",
    cohort: "spring-2024",
  },
  {
    name: "Veer Subandh",
    image: "/images/spring2024/Veer.JPG",
    cohort: "spring-2024",
  },
  {
    name: "Zahaan Bafna",
    image: "/images/spring2024/Zahaan.jpg",
    cohort: "spring-2024",
  },

  // Fall 2023
  {
    name: "Angel Lu",
    image: "/images/fall2023/Angel.jpg",
    cohort: "fall-2023",
  },
  {
    name: "Bahadir Turhan",
    image: "/images/fall2023/Baha.jpg",
    cohort: "fall-2023",
  },
  {
    name: "Colin Herbert",
    image: "/images/fall2023/Colin.jpg",
    cohort: "fall-2023",
  },
  {
    name: "Erin Aroneo",
    image: "/images/fall2023/Erin.jpg",
    cohort: "fall-2023",
  },
  {
    name: "Ivan Gupta",
    image: "/images/fall2023/Ivan.jpg",
    cohort: "fall-2023",
  },
  {
    name: "Jackson Manderfield",
    image: "/images/fall2023/Jackson.jpg",
    cohort: "fall-2023",
  },
  {
    name: "Katie Hui",
    image: "/images/fall2023/Katie.jpg",
    cohort: "fall-2023",
  },
  {
    name: "Marina Martinez-Cid",
    image: "/images/fall2023/Marina.jpg",
    cohort: "fall-2023",
  },
  {
    name: "May Liang",
    image: "/images/fall2023/May.jpeg",
    cohort: "fall-2023",
  },
  {
    name: "Molly Crawford",
    image: "/images/fall2023/Molly.jpg",
    cohort: "fall-2023",
  },
  {
    name: "Rohan Misra",
    image: "/images/fall2023/DECARohan.jpg",
    cohort: "fall-2023",
  },
  {
    name: "Sagar Murthy",
    image: "/images/fall2023/Sagar.jpg",
    cohort: "fall-2023",
  },
  {
    name: "Viswa Subramanian",
    image: "/images/fall2023/Viswa.jpg",
    cohort: "fall-2023",
  },
  {
    name: "Zach Marshall",
    image: "/images/fall2023/Zach.jpg",
    cohort: "fall-2023",
  },

  // Spring 2023
  {
    name: "Aaron Chen",
    image: "/images/spring2023/Aaron Chen.jpg",
    cohort: "spring-2023",
  },
  {
    name: "Abby Robinson",
    image: "/images/spring2023/Abby.jpg",
    cohort: "spring-2023",
  },
  {
    name: "Akon Awok",
    image: "/images/spring2023/Akon.jpg",
    cohort: "spring-2023",
  },
  {
    name: "Ali Rizwan",
    image: "/images/spring2023/Ali.jpg",
    cohort: "spring-2023",
  },
  {
    name: "Amanda Galle",
    image: "/images/spring2023/Amanda.jpeg",
    cohort: "spring-2023",
  },
  {
    name: "Anousha Ahmed",
    image: "/images/spring2023/Anousha.jpeg",
    cohort: "spring-2023",
  },
  {
    name: "Carly Appel",
    image: "/images/spring2023/Carly.jpg",
    cohort: "spring-2023",
  },
  {
    name: "Felipe Wiebusch",
    image: "/images/spring2023/Felipe.jpg",
    cohort: "spring-2023",
  },
  {
    name: "Henry Haywood",
    image: "/images/spring2023/Henry.jpeg",
    cohort: "spring-2023",
  },
  {
    name: "Janelle N'Dri",
    image: "/images/spring2023/Janelle.jpg",
    cohort: "spring-2023",
  },
  {
    name: "Kendall Freese",
    image: "/images/spring2023/Kendall.jpg",
    cohort: "spring-2023",
  },
  {
    name: "Larina Yu",
    image: "/images/spring2023/Larina.jpeg",
    cohort: "spring-2023",
  },
  {
    name: "Marianne Jayaraj",
    image: "/images/spring2023/Marianne.jpeg",
    cohort: "spring-2023",
  },
  {
    name: "Paul Gallagher",
    image: "/images/spring2023/Paul.jpg",
    cohort: "spring-2023",
  },
  {
    name: "Reena Wang",
    image: "/images/spring2023/Reena.jpeg",
    cohort: "spring-2023",
  },
  {
    name: "Rohan Suri",
    image: "/images/spring2023/Rohan.jpg",
    cohort: "spring-2023",
  },

  // Fall 2022
  {
    name: "Adnan Rahimzai",
    image: "/images/fall2022/Adnan.JPG",
    cohort: "fall-2022",
  },
  {
    name: "Chloe Barbosa",
    image: "/images/fall2022/Chloe.JPEG",
    cohort: "fall-2022",
  },
  {
    name: "Jackie Eng",
    image: "/images/fall2022/Jackie.jpeg",
    cohort: "fall-2022",
  },
  {
    name: "Jessica Dziedzic",
    image: "/images/fall2022/Jessica.jpg",
    cohort: "fall-2022",
  },
  {
    name: "Katherine Walldorf",
    image: "/images/fall2022/Katherine.jpg",
    cohort: "fall-2022",
  },
  {
    name: "Leonardo Goco",
    image: "/images/fall2022/Leo.JPG",
    cohort: "fall-2022",
  },
  {
    name: "Lexie Mae Hydrick",
    image: "/images/fall2022/Lexie.JPEG",
    cohort: "fall-2022",
  },
  {
    name: "Martin Ma",
    image: "/images/fall2022/Martin.JPG",
    cohort: "fall-2022",
  },
  {
    name: "Natalie Benitez",
    image: "/images/fall2022/Natalie.jpeg",
    cohort: "fall-2022",
  },
  {
    name: "Samuel Honigblum",
    image: "/images/fall2022/Sam.JPG",
    cohort: "fall-2022",
  },
  {
    name: "Sami Adam",
    image: "/images/fall2022/Sami.JPG",
    cohort: "fall-2022",
  },
  {
    name: "Yusuf Sharif",
    image: "/images/fall2022/Sharif.jpg",
    cohort: "fall-2022",
  },
  {
    name: "Shiloh Gelnett",
    image: "/images/fall2022/Shiloh.jpg",
    cohort: "fall-2022",
  },
  {
    name: "Sophie Tabet",
    image: "/images/fall2022/Sophie.jpg",
    cohort: "fall-2022",
  },
  {
    name: "Spencer Howe",
    image: "/images/fall2022/Spencer.JPG",
    cohort: "fall-2022",
  },
  {
    name: "William Walker",
    image: "/images/fall2022/Walker.jpeg",
    cohort: "fall-2022",
  },
];

export default function Brothers() {
  const [active, setActive] = useState<CohortKey>("show-all");

  const visible = useMemo(() => {
    if (active === "show-all") return brothers;
    return brothers.filter((b) => b.cohort === active);
  }, [active]);

  return (
    <div>
      <PageHeader title="Meet Our Brothers" subtitle="Alpha Kappa Psi" />

      <section className="container mx-auto px-6 py-10">
        <div className="flex flex-wrap items-center gap-6 text-sm">
          {tabs.map((t) => (
            <button
              key={t.key}
              onClick={() => setActive(t.key)}
              className={
                "relative pb-2 transition-colors" +
                (active === t.key
                  ? " text-blue-600"
                  : " text-gray-600 hover:text-gray-900")
              }
            >
              {t.label}
              {active === t.key && (
                <span className="absolute left-0 right-0 -bottom-[2px] h-[2px] bg-blue-600" />
              )}
            </button>
          ))}
        </div>

        <div className="mt-8 grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {visible.map((brother) => (
            <article key={brother.name} className="group">
              <div className="overflow-hidden rounded-md border bg-white shadow-sm">
                <img
                  src={encodeURI(brother.image)}
                  alt={brother.name}
                  className="aspect-[3/4] w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                  loading="lazy"
                />
              </div>
              <h3 className="mt-3 text-center text-sm font-medium">
                {brother.name}
              </h3>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
