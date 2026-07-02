const QUESTIONS_PER_GAME = 10;

const allQuestions = [
    {
        prompt: "What should be the foundation of a meat or show rabbit's daily diet?",
        options: [
            "High-sugar treats",
            "Unlimited grass hay with balanced pellets",
            "Only fresh garden greens",
        ],
        correctIndex: 1,
        fact:
            "Hay plus measured pellets keeps teeth worn and growth steady for meat and show stock.",
    },
    {
        prompt: "How often should working breeders plan to trim nails on their herd?",
        options: [
            "Whenever a show judge mentions it",
            "About every 4–6 weeks",
            "Only before kindling",
        ],
        correctIndex: 1,
        fact:
            "Routine trims prevent broken toes in wire cages and keep poses square on the table.",
    },
    {
        prompt: "What housing detail keeps rabbits comfortable on wire floors?",
        options: [
            "Skip wire so they never clean cages",
            "Provide resting mats or tiles on the wire",
            "Use solid wood floors that stay damp",
        ],
        correctIndex: 1,
        fact:
            "Wire keeps waste away, but resting boards let rabbits get off the mesh to protect hocks.",
    },
    {
        prompt: "When should you place a nest box for a pregnant doe?",
        options: [
            "The day breeding happens",
            "About 3–4 days before the due date",
            "After you see kits born",
        ],
        correctIndex: 1,
        fact:
            "A box lined with hay right before kindling keeps kits warm and prevents scattered litters.",
    },
    {
        prompt:
            "Both parents are black but carry the recessive chinchilla gene (Cc). What percent of kits do you expect to be chinchilla (cc)?",
        options: ["25%", "50%", "75%"],
        correctIndex: 0,
        fact:
            "A simple Punnett square for two carriers predicts one out of four kits showing the recessive color.",
    },
    {
        prompt: "How does a kit receive its coat-color genes?",
        options: [
            "Both copies come from the buck",
            "One allele comes from each parent",
            "Whichever grandparent had the darkest coat",
        ],
        correctIndex: 1,
        fact:
            "Every kit inherits two alleles per locus—one from each parent—so pedigrees pair up genes.",
    },
    {
        prompt:
            "If a heterozygous agouti (Aa) is bred to a self-colored recessive (aa), what percent of kits show the dominant agouti pattern?",
        options: ["0%", "25%", "50%"],
        correctIndex: 2,
        fact:
            "Half the kits receive the dominant A from the heterozygous parent, so about 50% present agouti.",
    },
    {
        prompt: "What is the safest way to lift a show rabbit onto the table?",
        options: [
            "Grab ears only",
            "Support chest while cradling hindquarters",
            "Scoop from the belly and swing",
        ],
        correctIndex: 1,
        fact:
            "Always support the back end to avoid powerful kicks that can injure the spine.",
    },
    {
        prompt: "Which daily observation tells you the herd is thriving?",
        options: [
            "Even feed intake and manure output",
            "How loudly they thump",
            "How much they chew cage bars",
        ],
        correctIndex: 0,
        fact:
            "Consistent appetite and droppings reveal gut health long before a rabbit shows sickness.",
    },
    {
        prompt:
            "On a 1–5 body condition scale, what score do breeders target for a show-ready rabbit?",
        options: ["2 (too lean)", "3 (ideal)", "5 (overweight)"],
        correctIndex: 1,
        fact:
            "A score of 3 means the loin feels smooth with a slight layer of flesh—ideal for posing on the table.",
    },
    {
        prompt: "What is the single most critical nutrient to keep available at all times?",
        options: ["Pellets", "Fresh water", "Salt wheels"],
        correctIndex: 1,
        fact:
            "Rabbits can skip a meal briefly, but lack of water stops digestion and milk production almost immediately.",
    },
    {
        prompt: "At how many days post-breeding can you gently palpate to confirm pregnancy?",
        options: ["5–7 days", "10–14 days", "25–30 days"],
        correctIndex: 1,
        fact:
            "Around day 12 the embryos feel like grapes or walnuts, giving breeders an early read on conception.",
    },
    {
        prompt: "When should medium-breed kits typically be weaned?",
        options: ["3 weeks", "6–7 weeks", "10 weeks"],
        correctIndex: 1,
        fact:
            "Weaning at six weeks lets kits eat pellets well while still benefiting from the doe's immunity.",
    },
    {
        prompt: "Which ventilation practice best limits ammonia buildup in a rabbitry?",
        options: [
            "Keep every window shut",
            "Use fans to pull in fresh air and exhaust stale air",
            "Spray cages with water daily",
        ],
        correctIndex: 1,
        fact:
            "Constant airflow whisks away moisture and ammonia so respiratory systems stay clear.",
    },
    {
        prompt: "How many generations must appear on a pedigree for ARBA registration?",
        options: ["Two", "Three", "Five"],
        correctIndex: 1,
        fact:
            "Registration requires a three-generation pedigree showing parents, grandparents, and great-grandparents.",
    },
    {
        prompt: "Why does ARBA require a permanent tattoo in the rabbit's left ear?",
        options: [
            "It is decorative",
            "It is the official identification that matches show paperwork",
            "It shows the rabbit's variety",
        ],
        correctIndex: 1,
        fact:
            "The tattoo number ties the rabbit to its entry card and pedigree during shows and registrations.",
    },
    {
        prompt:
            "A homozygous agouti buck (AA) bred to a self-colored doe (aa) will produce kits with which genotype?",
        options: ["All Aa, showing agouti", "All aa, showing self", "Half Aa and half aa"],
        correctIndex: 0,
        fact:
            "Agouti (A) is dominant, so every kit from AA × aa turns out agouti while carrying the recessive self gene.",
    },
    {
        prompt:
            "What phenotype results from pairing two homozygous recessive self rabbits (aa × aa)?",
        options: ["All kits agouti", "All kits self-colored", "Half agouti and half self"],
        correctIndex: 1,
        fact:
            "With only recessive alleles available, every kit receives aa and expresses the self color.",
    },
    {
        prompt: "What is a common early sign of rabbit pasteurella (snuffles)?",
        options: ["Bright clear eyes", "Sneezing with white nasal discharge", "Blue tongue"],
        correctIndex: 1,
        fact:
            "Snuffles often leaves thick white mucus on the forepaws where the rabbit wipes its nose.",
    },
    {
        prompt: "How can breeders reduce the risk of RHDV2 entering their rabbitry?",
        options: [
            "Share water crocks between barns",
            "Quarantine new or returning rabbits for 30+ days",
            "Allow visitors to handle rabbits freely",
        ],
        correctIndex: 1,
        fact:
            "Dedicated equipment and strict quarantine help keep rabbit hemorrhagic disease outside your herd.",
    },
    {
        prompt: "What is the recommended response when you suspect a contagious disease in your herd?",
        options: [
            "Sell the rabbits quickly",
            "Isolate symptomatic rabbits and call a rabbit-savvy vet",
            "Ignore it until show season",
        ],
        correctIndex: 1,
        fact:
            "Immediate isolation, sanitation, and veterinary guidance slow outbreaks and protect the colony.",
    },
    {
        prompt:
            "Which fur type features short guard hairs about half the length of normal coats, creating a plush texture?",
        options: ["Satin", "Rex", "Wool"],
        correctIndex: 1,
        fact:
            "Rex fur stands upright with very short guard hairs, so it feels like velvet when brushed backward.",
    },
    {
        prompt: "What ARBA body type describes meat breeds like the New Zealand or Californian?",
        options: ["Semi-arch", "Commercial", "Compact"],
        correctIndex: 1,
        fact:
            "Commercial body types are deep and rounded for efficient muscling and meat production.",
    },
    {
        prompt: "Flemish Giants are placed in which body type category?",
        options: ["Semi-arch", "Full-arch", "Compact"],
        correctIndex: 0,
        fact:
            "Semi-arch breeds rise slowly behind the shoulders and peak over the hips, just like the Flemish.",
    },
    {
        prompt:
            "Which ARBA grouping highlights primarily pet or fancy breeds such as Dutch or Holland Lops?",
        options: ["Commercial", "Fancy", "Meat pen"],
        correctIndex: 1,
        fact:
            "Fancy breeds are prized for their markings and personality rather than production traits.",
    },
    {
        prompt: "What does the term 'moon eye' describe in rabbit judging?",
        options: [
            "A desirable blue sheen",
            "A milky white spot or film on the eye",
            "A copper-colored iris",
        ],
        correctIndex: 1,
        fact:
            "Moon eye is a fault or disqualification caused by scarring, leaving a white opaque corneal patch.",
    },
    {
        prompt: "Which gene is required to produce blue-eyed white (BEW) rabbits?",
        options: ["Vienna gene", "Agouti gene", "Steel gene"],
        correctIndex: 0,
        fact:
            "BEW color expresses the Vienna (V) gene, while REW rabbits result from the recessive c series.",
    },
    {
        prompt: "Which of the following is recognized as a giant breed by ARBA?",
        options: ["Netherland Dwarf", "Flemish Giant", "Dutch"],
        correctIndex: 1,
        fact:
            "Flemish Giants regularly exceed 14 pounds, placing them squarely in the giant breed class.",
    },
    {
        prompt: "Which breed consistently ranks among the most popular show entries in the U.S.?",
        options: ["Holland Lop", "Silver Marten", "Belgian Hare"],
        correctIndex: 0,
        fact:
            "Holland Lops top ARBA registration lists due to their small size and friendly nature.",
    },
    {
        prompt:
            "How should you properly pose a full-arch breed like a Tan or Checkered Giant?",
        options: [
            "Press the belly to the table",
            "Let it stand naturally showing daylight under the body",
            "Stretch it flat like a rug",
        ],
        correctIndex: 1,
        fact:
            "Full-arch breeds are posed on their feet with minimal handling so the arch is visible from shoulders to hips.",
    },
    {
        prompt: "What is a 'charlie' in broken patterned rabbits?",
        options: [
            "A rabbit with no markings",
            "A broken pattern with less than 10% color",
            "Any rabbit with blue eyes",
        ],
        correctIndex: 1,
        fact:
            "Charlies have two copies of the broken gene, so they show only tiny bits of color on ears or nose.",
    },
    {
        prompt: "Which description best matches the broken pattern?",
        options: [
            "Solid coat with ticking",
            "White base with patches of color and a butterfly nose marking",
            "Only agouti banding",
        ],
        correctIndex: 1,
        fact:
            "Broken rabbits display white fur and colored patches, ideally with a butterfly marking on the muzzle.",
    },
    {
        prompt: "How should a Harlequin rabbit's color be arranged?",
        options: [
            "Random splashes everywhere",
            "Alternating bars or blocks of two colors on the face, body, and feet",
            "Solid body with colored ears",
        ],
        correctIndex: 1,
        fact:
            "Harlequins look best with alternating orange and black (or blue/chocolate/lilac) sections like a checkerboard.",
    },
    {
        prompt: "What does 'brindling' mean when judging coat color?",
        options: [
            "Evenly mixed guard hairs and undercolor",
            "Random streaks of two colors mixed together",
            "A solid self color",
        ],
        correctIndex: 1,
        fact:
            "Brindling is when two colors streak together, often seen in Harlequins and sometimes faulted if too heavy.",
    },
    {
        prompt: "Which marking error will fault a Dutch rabbit?",
        options: [
            "Straight saddle",
            "Uneven stop markings on the back feet",
            "Clean blaze",
        ],
        correctIndex: 1,
        fact:
            "Dutch stops should be even; a longer white foot on one side drops the score.",
    },
    {
        prompt: "What happens when a rabbit carries only one copy of the Vienna gene (Vv)?",
        options: [
            "It becomes albino",
            "It shows Vienna marks like white paws or nose",
            "It turns rex coated",
        ],
        correctIndex: 1,
        fact:
            "Vienna carriers often have white mittens or a snip even though they are not full blue-eyed whites.",
    },
    {
        prompt: "What does the rufus modifier add to a rabbit's coat?",
        options: ["Extra blue shading", "Warm red/orange richness", "White ticking"],
        correctIndex: 1,
        fact:
            "Rufus deepens the rusty orange tone, giving breeds like New Zealands a rich, warm color.",
    },
    {
        prompt: "Which grooming tool lifts shed undercoat during a heavy molt without breaking guard hairs?",
        options: [
            "Slicker brush with sharp wires",
            "Wide-tooth metal comb or rake",
            "Scissors to trim the coat",
        ],
        correctIndex: 1,
        fact:
            "A wide-tooth rake reaches through the topcoat and teases out loose wool while leaving guard hairs intact.",
    },
    {
        prompt: "At what temperature should breeders begin emergency cooling steps such as frozen bottles or fans?",
        options: [
            "65°F (18°C)",
            "75°F (24°C)",
            "85°F (29°C)",
        ],
        correctIndex: 2,
        fact:
            "Once air temps climb into the mid-80s, rabbits struggle to dump heat, so active cooling prevents heat stress.",
    },
    {
        prompt: "What is the average gestation length for domestic rabbits?",
        options: ["21 days", "31 days", "42 days"],
        correctIndex: 1,
        fact:
            "Most does kindle at 31 days give or take a day, so nest boxes go in around day 28.",
    },
    {
        prompt: "Which absorbent material works best in a drop pan under wire cages?",
        options: [
            "Single layer of newspaper",
            "Kiln-dried pine pellets or shavings",
            "Clay-based cat litter",
        ],
        correctIndex: 1,
        fact:
            "Pine pellets or shavings soak urine and control odor while remaining safe if chewed.",
    },
    {
        prompt: "How often should you scrub crocks or water bottles to prevent biofilm build-up?",
        options: ["Monthly", "Weekly", "Daily or every other day"],
        correctIndex: 2,
        fact:
            "Biofilm forms fast; frequent washing keeps bacteria from colonizing drinking equipment.",
    },
    {
        prompt: "What is the safest first step when a rabbit shows signs of overheating?",
        options: [
            "Immerse the rabbit in ice water",
            "Move it to a cool area and mist the ears with tepid water",
            "Feed chilled fruit treats",
        ],
        correctIndex: 1,
        fact:
            "Cooling the ears with room-temperature water and airflow drops body temperature without shocking the rabbit.",
    },
    {
        prompt: "How long should new or returning rabbits remain in quarantine before joining the herd?",
        options: ["7 days", "14 days", "30 days"],
        correctIndex: 2,
        fact:
            "A full 30-day quarantine lets hidden respiratory or GI issues appear before exposing the barn.",
    },
    {
        prompt: "What crude protein percentage do quality grower pellets supply for fryers and juniors?",
        options: ["12%", "16%", "22%"],
        correctIndex: 1,
        fact:
            "Most breeders feed a balanced 16% pellet to support muscle growth without making rabbits overly fat.",
    },
    {
        prompt: "ARBA meat-pen fryers are typically shown at what individual weight range?",
        options: [
            "3.0–3.5 lb (1.4–1.6 kg)",
            "4.5–5.5 lb (2.0–2.5 kg)",
            "6.5–7.0 lb (3.0–3.2 kg)",
        ],
        correctIndex: 1,
        fact:
            "Uniform fryers around five pounds show prime muscling and dress out efficiently.",
    },
    {
        prompt: "How should you store bagged pellets to keep nutrients intact?",
        options: [
            "Leave the bag open near the cages",
            "Seal them in a metal bin away from heat and sunlight",
            "Keep them beside lawn chemicals",
        ],
        correctIndex: 1,
        fact:
            "A sealed metal bin in a cool, dry spot keeps pellets from absorbing moisture or odors.",
    },
    {
        prompt: "How often should you check nest boxes during the first few days after kindling?",
        options: ["Once a week", "Once each day", "Only if you hear noise"],
        correctIndex: 1,
        fact:
            "Daily checks let you remove dead kits, add hay, and ensure everyone is warm and fed.",
    },
    {
        prompt: "What information belongs on a breeding record card to plan future pairings?",
        options: [
            "Only the doe's name",
            "Breeding date, buck used, due date, and litter results",
            "A full pedigree for every ancestor",
        ],
        correctIndex: 1,
        fact:
            "Recording dates, mates, and litter notes helps you spot productive crosses and schedule rebreeds.",
    },
    // Breeding Rabbit Project - Juniors
    {
        prompt: "Rabbits are known as 'prey animals.' What does that mean?",
        options: [
            "They hunt other animals",
            "They are hunted by other animals",
            "They only eat meat",
            "They live underground",
        ],
        correctIndex: 1,
        fact: "Prey animals are hunted by predators, making rabbits naturally cautious and easily stressed.",
    },
    {
        prompt: "When should the nest box be placed in the hutch?",
        options: [
            "At birth",
            "At 10 days old",
            "A few days before kindling",
            "After kits open their eyes",
        ],
        correctIndex: 2,
        fact: "Placing the nest box 2-3 days before kindling gives the doe time to prepare it with fur and hay.",
    },
    {
        prompt: "What does gestation mean?",
        options: [
            "Nursing young",
            "Pregnancy period",
            "Eye opening",
            "Pedigree recording",
        ],
        correctIndex: 1,
        fact: "Gestation is the period from conception to birth, averaging 31 days in rabbits.",
    },
    {
        prompt: "How old are rabbits when they first open their eyes?",
        options: [
            "3–4 days",
            "7–10 days",
            "14–16 days",
            "21 days",
        ],
        correctIndex: 1,
        fact: "Newborn kits open their eyes around 7-10 days old as their eyelids develop.",
    },
    {
        prompt: "What is kindling?",
        options: [
            "Rabbit pregnancy",
            "Rabbit giving birth",
            "Rabbit nursing",
            "Rabbit tattooing",
        ],
        correctIndex: 1,
        fact: "Kindling is the term used when a doe gives birth to a litter of kits.",
    },
    {
        prompt: "What is a pedigree?",
        options: [
            "A rabbit tattoo",
            "A family record of ancestry",
            "A type of fur",
            "A feeding program",
        ],
        correctIndex: 1,
        fact: "A pedigree documents the ancestry of a rabbit, showing parents, grandparents, and great-grandparents.",
    },
    {
        prompt: "What is a male rabbit called? What is a female rabbit called? What is a newborn called?",
        options: [
            "Buck, Doe, Kit",
            "Ram, Ewe, Lamb",
            "Bull, Cow, Calf",
            "Drake, Hen, Chick",
        ],
        correctIndex: 0,
        fact: "Buck is the male, doe is the female, and kit is the newborn rabbit.",
    },
    {
        prompt: "According to ARBA, how many breeds of rabbits are there? Name the most recent breed.",
        options: [
            "20, Lionhead",
            "50, Lionhead",
            "50+, Lionhead",
            "100, Flemish Giant",
        ],
        correctIndex: 2,
        fact: "ARBA recognizes over 50 breeds, with Lionhead being one of the more recently accepted breeds.",
    },
    {
        prompt: "What is ARBA?",
        options: [
            "American Rabbit Breeders Association",
            "Animal Rescue Bureau of America",
            "Association of Rabbit Breeding Agencies",
            "American Rodent Breeders Association",
        ],
        correctIndex: 0,
        fact: "ARBA is the American Rabbit Breeders Association, the primary organization for rabbit breeders and shows.",
    },
    {
        prompt: "What is the range of gestation for rabbits?",
        options: [
            "10–15 days",
            "20–25 days",
            "28–32 days",
            "40–45 days",
        ],
        correctIndex: 2,
        fact: "Rabbit gestation typically ranges from 28-32 days, with most does kindling around day 31.",
    },
    {
        prompt: "What is the most important nutrient for rabbits?",
        options: [
            "Protein",
            "Carbohydrates",
            "Water",
            "Fiber",
        ],
        correctIndex: 2,
        fact: "Water is critical for all body functions; rabbits can survive longer without food than without water.",
    },
    {
        prompt: "Name a breed that is a 4-class rabbit and a breed that is a 6-class rabbit.",
        options: [
            "Mini Rex (4-class), New Zealand (6-class)",
            "Flemish Giant (4-class), Netherland Dwarf (6-class)",
            "Lop (4-class), Angora (6-class)",
            "Rex (4-class), Californian (6-class)",
        ],
        correctIndex: 0,
        fact: "Rabbit classes are determined by weight; Mini Rex are lighter and Flemish Giants are larger.",
    },
    {
        prompt: "What is a disqualification?",
        options: [
            "A rabbit removed from show for not meeting standards",
            "A rabbit that wins a show",
            "A rabbit that is pedigreed",
            "A rabbit that is tattooed",
        ],
        correctIndex: 0,
        fact: "A disqualification removes a rabbit from competition for serious deviations from breed standards.",
    },
    {
        prompt: "What is the 4-H Motto?",
        options: [
            "To Make the Best Better",
            "Always Do Your Best",
            "Learning by Doing",
            "Grow with 4-H",
        ],
        correctIndex: 0,
        fact: "The 4-H motto 'To Make the Best Better' reflects the organization's commitment to improvement.",
    },
    {
        prompt: "Name one reason you would quarantine a rabbit.",
        options: [
            "To prevent disease spread",
            "To increase weight",
            "To improve fur",
            "To train for shows",
        ],
        correctIndex: 0,
        fact: "Quarantine isolates sick or new rabbits for 30+ days to prevent contagious diseases from spreading.",
    },
    {
        prompt: "Rabbits are naturally nervous and subject to stress. Name one thing people can do to avoid frightening them.",
        options: [
            "Loud noises",
            "Sudden movements",
            "Gentle handling",
            "Bright lights",
        ],
        correctIndex: 2,
        fact: "Gentle, calm handling reduces stress and prevents injuries from frightened rabbits kicking or jumping.",
    },
    {
        prompt: "What does lactate mean?",
        options: [
            "To produce milk",
            "To give birth",
            "To tattoo",
            "To eat cecotropes",
        ],
        correctIndex: 0,
        fact: "Lactate means to produce milk; lactation in does is essential for kit survival.",
    },
    // Breeding Rabbit Project - Intermediates
    {
        prompt: "When should the nesting box be removed from the cage?",
        options: [
            "At birth",
            "At 2 weeks",
            "At 4 weeks",
            "At 8 weeks",
        ],
        correctIndex: 2,
        fact: "Remove the nest box at 3-4 weeks when kits are weaned and eating pellets independently.",
    },
    {
        prompt: "What is a disqualification and name three examples.",
        options: [
            "Wrong color, missing toenail, malocclusion",
            "Tattoo, pedigree, weight",
            "Fur type, feed, cage",
            "Ear length, whiskers, tail",
        ],
        correctIndex: 0,
        fact: "Disqualifications include serious faults like wrong body color, malocclusion (buck teeth), and missing claws.",
    },
    {
        prompt: "What causes mastitis?",
        options: [
            "Dirty nest box",
            "Bacterial infection in mammary glands",
            "Poor ventilation",
            "Vitamin deficiency",
        ],
        correctIndex: 1,
        fact: "Mastitis is a painful bacterial infection of the udder, often caused by dirty conditions or injury.",
    },
    {
        prompt: "What is a sire?",
        options: [
            "Female rabbit",
            "Male rabbit used for breeding",
            "Newborn rabbit",
            "Pedigree record",
        ],
        correctIndex: 1,
        fact: "A sire is a male rabbit selected for breeding; the term is also used for a pedigree ancestor.",
    },
    {
        prompt: "Name a rabbit breed used for wool production.",
        options: [
            "Angora",
            "Rex",
            "Lop",
            "Californian",
        ],
        correctIndex: 0,
        fact: "Angoras are famous for their soft, long wool, which is harvested for yarn and textiles.",
    },
    {
        prompt: "What are the four breeding programs?",
        options: [
            "Line breeding, inbreeding, outcrossing, crossbreeding",
            "Tattooing, feeding, grooming, showing",
            "Agouti, self, shaded, tan",
            "Junior, intermediate, senior, market",
        ],
        correctIndex: 0,
        fact: "These four programs control how genetics are managed to improve breed qualities and health.",
    },
    {
        prompt: "What is 'finish' in rabbit judging?",
        options: [
            "The condition of fur and body",
            "The end of gestation",
            "The tattoo process",
            "The pedigree record",
        ],
        correctIndex: 0,
        fact: "Finish refers to how well-groomed and conditioned a rabbit appears, affecting show scores.",
    },
    {
        prompt: "What is the treatment for Vent Disease?",
        options: [
            "Penicillin",
            "Vitamin C",
            "Tattooing",
            "Quarantine only",
        ],
        correctIndex: 0,
        fact: "Vent Disease (spirochetosis) is treated with penicillin injections; affected rabbits may be culled.",
    },
    {
        prompt: "Why should you tattoo a rabbit?",
        options: [
            "Identification",
            "Fur quality",
            "Pedigree",
            "Feeding program",
        ],
        correctIndex: 0,
        fact: "Tattoos permanently identify rabbits and link them to registration papers and show entries.",
    },
    {
        prompt: "What are the four types of fur found in recognized rabbit breeds?",
        options: [
            "Normal, Rex, Satin, Wool",
            "Short, Long, Curly, Straight",
            "Agouti, Self, Shaded, Tan",
            "Guard, Undercoat, Wool, Satin",
        ],
        correctIndex: 0,
        fact: "These four fur types are officially recognized by ARBA for different breeds and effects.",
    },
    {
        prompt: "What is coprophagy?",
        options: [
            "Eating cecotropes",
            "Eating hay",
            "Eating pellets",
            "Eating fur",
        ],
        correctIndex: 0,
        fact: "Coprophagy is the rabbit's natural behavior of eating cecotropes to extract nutrients.",
    },
    {
        prompt: "What is VCPR?",
        options: [
            "Veterinary Client Patient Relationship",
            "Very Clean Pen Routine",
            "Verified Care Program for Rabbits",
            "Veterinary Care for Pet Rabbits",
        ],
        correctIndex: 0,
        fact: "VCPR is required before using prescription medications; it establishes a legal vet-owner relationship.",
    },
    {
        prompt: "Name two causes of losses in newborn litters.",
        options: [
            "Chilling, starvation",
            "Tattooing, grooming",
            "Pedigree, fur type",
            "Cage size, feed type",
        ],
        correctIndex: 0,
        fact: "Chilling and starvation are common causes of kit mortality; proper nest boxes prevent these.",
    },
    {
        prompt: "What is the Standard of Perfection?",
        options: [
            "ARBA guide for judging rabbits",
            "A feeding program",
            "A tattooing method",
            "A breeding plan",
        ],
        correctIndex: 0,
        fact: "The Standard of Perfection is ARBA's official guide describing ideal characteristics for each breed.",
    },
    // Market Rabbit Project - Juniors
    {
        prompt: "In the United States, are rabbits classified as livestock?",
        options: [
            "Yes",
            "No",
            "Sometimes",
            "Only in Europe",
        ],
        correctIndex: 0,
        fact: "Rabbits are officially classified as livestock in the U.S., making them eligible for market projects.",
    },
    {
        prompt: "Name two purposes a rabbit is used for.",
        options: [
            "Meat and fur",
            "Guard animals and draft work",
            "Transportation",
            "Companionship only",
        ],
        correctIndex: 0,
        fact: "Rabbits are primarily raised for meat production and fur; show rabbits and pets have other purposes.",
    },
    {
        prompt: "In which ear should rabbits be tattooed?",
        options: [
            "Left",
            "Right",
            "Both",
            "Either is acceptable",
        ],
        correctIndex: 0,
        fact: "Official ARBA identification requires tattooing in the left ear only.",
    },
    // ARBA Standard & Genetics - Advanced
    {
        prompt: "Which breed is recognized by ARBA as having a 'mandolin' body type?",
        options: [
            "Mini Rex",
            "American Fuzzy Lop",
            "American",
            "Flemish Giant",
        ],
        correctIndex: 2,
        fact: "The American breed has a distinctive mandolin body shape recognized by ARBA.",
    },
    {
        prompt: "Which breed was most recently added to the ARBA Standard of Perfection?",
        options: [
            "Lionhead",
            "Silver Marten",
            "Harlequin",
            "Champagne d'Argent",
        ],
        correctIndex: 0,
        fact: "Lionhead was among the more recently accepted breeds in ARBA's Standard of Perfection.",
    },
    {
        prompt: "What genotype produces a 'Blue' rabbit?",
        options: [
            "aa B_ C_ dd E_",
            "aa bb C_ D_ E_",
            "A_ B_ C_ D_ E_",
            "aa B_ C_ D_ E_",
        ],
        correctIndex: 0,
        fact: "Blue coloring results from the combination of specific alleles at multiple loci.",
    },
    {
        prompt: "Which color group does 'Sable Point' belong to?",
        options: [
            "Agouti",
            "Shaded",
            "Self",
            "Tan Pattern",
        ],
        correctIndex: 1,
        fact: "Sable Point is a shaded color pattern with darker coloring on points like ears and face.",
    },
    {
        prompt: "Which of the following is a disqualification in ARBA shows?",
        options: [
            "Missing toenail",
            "Slightly uneven fur",
            "Small litter size",
            "Tattoo in wrong ear",
        ],
        correctIndex: 0,
        fact: "Missing toenails are considered disqualifications as they affect the rabbit's structure and movement.",
    },
    {
        prompt: "Which condition is a permanent disqualification?",
        options: [
            "Malocclusion",
            "Broken toenail",
            "Minor ear tear",
            "Slightly dirty coat",
        ],
        correctIndex: 0,
        fact: "Malocclusion (buck teeth or misaligned jaw) is a permanent disqualification that affects eating.",
    },
    {
        prompt: "To register a rabbit with ARBA, what must be true?",
        options: [
            "Rabbit must meet breed standard and have a complete 3-generation pedigree",
            "Rabbit must be tattooed and weigh over 5 lbs",
            "Rabbit must be shown at least once",
            "Rabbit must be bred by the registrar",
        ],
        correctIndex: 0,
        fact: "ARBA registration requires meeting breed standards and providing a documented three-generation pedigree.",
    },
    {
        prompt: "What is the minimum age for a rabbit to be registered with ARBA?",
        options: [
            "6 weeks",
            "3 months",
            "6 months",
            "1 year",
        ],
        correctIndex: 1,
        fact: "Rabbits must be at least 3 months old to have their breed and quality properly assessed for registration.",
    },
    {
        prompt: "What does the 'E' locus control in rabbit genetics?",
        options: [
            "Fur texture",
            "Extension of color",
            "Body type",
            "Ear length",
        ],
        correctIndex: 1,
        fact: "The E locus controls whether pigment is extended throughout the coat or restricted.",
    },
    {
        prompt: "What is the definition of 'finish' in ARBA judging?",
        options: [
            "The overall condition of flesh and fur",
            "The tattoo process",
            "The end of gestation",
            "The pedigree record",
        ],
        correctIndex: 0,
        fact: "Finish refers to grooming, conditioning, and overall presentation quality on the show table.",
    },
    {
        prompt: "Which breed is classified as a 4-class rabbit?",
        options: [
            "Mini Rex",
            "Flemish Giant",
            "New Zealand",
            "Californian",
        ],
        correctIndex: 0,
        fact: "Mini Rex are lighter breeds, placing them in the 4-class category by weight.",
    },
    {
        prompt: "Which breed is classified as a 6-class rabbit?",
        options: [
            "New Zealand",
            "Netherland Dwarf",
            "Mini Rex",
            "Holland Lop",
        ],
        correctIndex: 0,
        fact: "New Zealand rabbits are large meat breeds, placing them in the 6-class (heaviest) category.",
    },
    {
        prompt: "What is the ARBA motto?",
        options: [
            "To Make the Best Better",
            "Dedicated to the Betterment of Rabbits and Cavy",
            "Learning by Doing",
            "Grow with ARBA",
        ],
        correctIndex: 1,
        fact: "ARBA's official motto reflects their commitment to improving rabbit and cavy breeds.",
    },
    {
        prompt: "Which body type is NOT recognized by ARBA?",
        options: [
            "Compact",
            "Commercial",
            "Cylindrical",
            "Athletic",
        ],
        correctIndex: 3,
        fact: "ARBA recognizes compact, commercial, cylindrical, semi-arch, and full-arch body types.",
    },
    {
        prompt: "Which breed is known for wool production?",
        options: [
            "Angora",
            "Rex",
            "Californian",
            "Lop",
        ],
        correctIndex: 0,
        fact: "Angoras produce long, soft wool that is harvested for textiles and yarn.",
    },
    {
        prompt: "Which breed originated in France?",
        options: [
            "Champagne d'Argent",
            "Mini Rex",
            "Lionhead",
            "Harlequin",
        ],
        correctIndex: 0,
        fact: "Champagne d'Argent rabbits originated in France and are known for their silvery coat.",
    },
    {
        prompt: "What is palpation used for in rabbit breeding?",
        options: [
            "To feel for pregnancy",
            "To check fur texture",
            "To measure body type",
            "To tattoo",
        ],
        correctIndex: 0,
        fact: "Palpation around day 10-14 allows breeders to confirm pregnancy by feeling embryos.",
    },
    {
        prompt: "Which of the following is a temporary disqualification?",
        options: [
            "Sore hocks",
            "Malocclusion",
            "Wrong eye color",
            "Missing toenail",
        ],
        correctIndex: 0,
        fact: "Sore hocks are temporary disqualifications that may heal; they prevent rabbits from being shown.",
    },
    {
        prompt: "Which breed has a cylindrical body type?",
        options: [
            "Himalayan",
            "Flemish Giant",
            "Mini Rex",
            "Lop",
        ],
        correctIndex: 0,
        fact: "Himalayans have a distinctive cylindrical body shape, narrow at shoulders and hindquarters.",
    },
    {
        prompt: "Which breed has a compact body type?",
        options: [
            "Netherland Dwarf",
            "Flemish Giant",
            "New Zealand",
            "Angora",
        ],
        correctIndex: 0,
        fact: "Netherland Dwarfs are small and compact, representing the smallest commercial breed.",
    },
    {
        prompt: "Which breed has a commercial body type?",
        options: [
            "Californian",
            "Himalayan",
            "Mini Rex",
            "Holland Lop",
        ],
        correctIndex: 0,
        fact: "Californians have a deep, commercial body type ideal for meat production.",
    },
    {
        prompt: "Which breed has a semi-arch body type?",
        options: [
            "Flemish Giant",
            "Californian",
            "Mini Rex",
            "Angora",
        ],
        correctIndex: 0,
        fact: "Flemish Giants display the semi-arch body, rising behind the shoulders and over the hips.",
    },
    {
        prompt: "Which breed has a full-arch body type?",
        options: [
            "Belgian Hare",
            "Californian",
            "Mini Rex",
            "Angora",
        ],
        correctIndex: 0,
        fact: "Belgian Hares have a distinctive full-arch, with the body arched high throughout.",
    },
    {
        prompt: "What is the ARBA Standard of Perfection used for?",
        options: [
            "Judging rabbits",
            "Feeding rabbits",
            "Tattooing rabbits",
            "Breeding rabbits",
        ],
        correctIndex: 0,
        fact: "The Standard of Perfection is the official guideline judges use to evaluate rabbits in shows.",
    },
    {
        prompt: "Which of the following is NOT a recognized fur type by ARBA?",
        options: [
            "Normal",
            "Rex",
            "Satin",
            "Curly",
        ],
        correctIndex: 3,
        fact: "ARBA recognizes Normal, Rex, Satin, and Wool fur types; Curly is not an official category.",
    },
    {
        prompt: "Which breed is known for satin fur?",
        options: [
            "Satin",
            "Rex",
            "Angora",
            "Californian",
        ],
        correctIndex: 0,
        fact: "The Satin breed features a distinctive lustrous, satiny coat texture.",
    },
    {
        prompt: "Which breed is known for rex fur?",
        options: [
            "Rex",
            "Satin",
            "Angora",
            "Californian",
        ],
        correctIndex: 0,
        fact: "Rex breeds have short, plush fur that stands upright from the skin.",
    },
    {
        prompt: "Which breed is known for wool fur?",
        options: [
            "Angora",
            "Rex",
            "Satin",
            "Californian",
        ],
        correctIndex: 0,
        fact: "Angoras produce long, woolly coats that require regular grooming and harvesting.",
    },
    {
        prompt: "Which breed is known for normal fur?",
        options: [
            "New Zealand",
            "Rex",
            "Satin",
            "Angora",
        ],
        correctIndex: 0,
        fact: "New Zealand rabbits have normal fur, the standard coat type for most rabbit breeds.",
    },
    {
        prompt: "Which of the following is required for rabbit registration with ARBA?",
        options: [
            "Tattoo",
            "Show record",
            "Breeder's certificate",
            "Fur type approval",
        ],
        correctIndex: 0,
        fact: "A permanent tattoo is required for ARBA registration to link the rabbit to its papers.",
    },
    // Advanced Genetics - Gene Loci
    {
        prompt: "Which gene locus controls chinchilla coloration?",
        options: [
            "A locus",
            "B locus",
            "C locus",
            "D locus",
        ],
        correctIndex: 2,
        fact: "The C locus controls pigment deposition; the chinchilla allele creates the distinctive agouti pattern.",
    },
    {
        prompt: "Which gene locus determines dilute vs. full color?",
        options: [
            "A locus",
            "B locus",
            "C locus",
            "D locus",
        ],
        correctIndex: 3,
        fact: "The D locus controls pigment granule size; dd creates dilute colors like blue and lilac.",
    },
    {
        prompt: "Which gene locus determines chocolate vs. black?",
        options: [
            "A locus",
            "B locus",
            "C locus",
            "D locus",
        ],
        correctIndex: 1,
        fact: "The B locus controls brown pigment; bb creates chocolate or brown colors.",
    },
    {
        prompt: "Which gene locus determines agouti vs. self coloring?",
        options: [
            "A locus",
            "B locus",
            "C locus",
            "D locus",
        ],
        correctIndex: 0,
        fact: "The A locus controls agouti banding in the hair; aa produces self-colored rabbits.",
    },
    {
        prompt: "Which gene locus determines full color vs. albino?",
        options: [
            "A locus",
            "B locus",
            "C locus",
            "D locus",
        ],
        correctIndex: 2,
        fact: "The C locus controls pigment production; the albino allele results in no pigment deposition.",
    },
    {
        prompt: "What genotype produces a Chocolate rabbit?",
        options: [
            "aa bb C_ D_ E_",
            "aa B_ C_ dd E_",
            "A_ B_ C_ D_ E_",
            "A_ bb C_ D_ E_",
        ],
        correctIndex: 0,
        fact: "Chocolate rabbits have the agouti gene hidden (aa) and brown pigment (bb).",
    },
    {
        prompt: "What genotype produces a Lilac rabbit?",
        options: [
            "aa bb C_ D_ E_",
            "aa B_ C_ dd E_",
            "aa bb C_ dd E_",
            "A_ B_ C_ D_ E_",
        ],
        correctIndex: 2,
        fact: "Lilac requires both brown pigment (bb) and dilution (dd) with self coloring (aa).",
    },
    {
        prompt: "What genotype produces a Himalayan rabbit?",
        options: [
            "aa B_ chch D_ E_",
            "aa bb C_ D_ E_",
            "A_ B_ C_ D_ E_",
            "aa B_ C_ D_ E_",
        ],
        correctIndex: 0,
        fact: "Himalayans have chinchilla coloration (chch) restricted to cooler areas via temperature sensitivity.",
    },
    {
        prompt: "What genotype produces a Chocolate Chinchilla rabbit?",
        options: [
            "A_ bb cchd D_ E_",
            "A_ B_ C_ D_ E_",
            "aa bb C_ D_ E_",
            "A_ B_ chch D_ E_",
        ],
        correctIndex: 0,
        fact: "Chocolate Chinchilla combines agouti (A_), brown (bb), chinchilla (cchd), and full color.",
    },
    // Registration & Registrar Rules
    {
        prompt: "How many generations must appear on a pedigree for ARBA registration?",
        options: [
            "2 generations",
            "3 generations",
            "4 generations",
            "5 generations",
        ],
        correctIndex: 1,
        fact: "ARBA requires three generations: parents, grandparents, and great-grandparents.",
    },
    {
        prompt: "Who is authorized to issue ARBA registration numbers?",
        options: [
            "Any breeder",
            "The ARBA Registrar",
            "Show secretary",
            "Judge only",
        ],
        correctIndex: 1,
        fact: "Only authorized ARBA registrars can issue official registration certificates.",
    },
    {
        prompt: "What must a registrar verify before signing a registration certificate?",
        options: [
            "Show wins only",
            "Correct tattoo and conformity to breed standard",
            "Fur type only",
            "Pedigree length only",
        ],
        correctIndex: 1,
        fact: "Registrars must ensure the rabbit meets its breed standard and has proper identification.",
    },
    {
        prompt: "How long is an ARBA registration valid?",
        options: [
            "For 1 year",
            "For 3 years",
            "Until the next show",
            "For the life of the rabbit",
        ],
        correctIndex: 3,
        fact: "ARBA registration is permanent and remains valid throughout the rabbit's lifetime.",
    },
    {
        prompt: "How many ARBA show legs are required for a rabbit to earn a Grand Champion certificate?",
        options: [
            "2 legs",
            "3 legs",
            "4 legs",
            "5 legs",
        ],
        correctIndex: 1,
        fact: "A rabbit must be registered and earn 3 ARBA qualifying legs to become a Grand Champion.",
    },
    {
        prompt: "Who can issue a Grand Champion certificate?",
        options: [
            "Any breeder",
            "An ARBA Registrar",
            "Show secretary only",
            "Judge only",
        ],
        correctIndex: 1,
        fact: "Only ARBA registrars are authorized to issue Grand Champion certificates.",
    },
    // Disqualifications - Eye Color
    {
        prompt: "Which eye color is a disqualification in a Blue rabbit?",
        options: [
            "Blue-gray eyes",
            "Brown eyes",
            "Pink eyes",
            "Any color other than blue-gray",
        ],
        correctIndex: 3,
        fact: "Blue rabbits must have blue-gray eyes; any other eye color is a disqualification.",
    },
    {
        prompt: "Which eye color is a disqualification in a Lilac rabbit?",
        options: [
            "Brown eyes",
            "Blue-gray eyes",
            "Pink eyes",
            "Hazel eyes",
        ],
        correctIndex: 2,
        fact: "Lilac rabbits must have brown or gray eyes; pink eyes are a disqualification.",
    },
    // Breed Standards - Fur Characteristics
    {
        prompt: "Which breed is recognized for having 'flyback' fur?",
        options: [
            "New Zealand",
            "Rex",
            "Satin",
            "Angora",
        ],
        correctIndex: 0,
        fact: "New Zealand rabbits have flyback fur that springs back quickly when brushed backward.",
    },
    {
        prompt: "Which breed is recognized for having 'rollback' fur?",
        options: [
            "Mini Rex",
            "Holland Lop",
            "Flemish Giant",
            "Californian",
        ],
        correctIndex: 1,
        fact: "Holland Lops have rollback fur that slowly returns when brushed backward.",
    },
    {
        prompt: "Which breed is recognized for having 'standing' fur?",
        options: [
            "Silver Fox",
            "Rex",
            "Satin",
            "Angora",
        ],
        correctIndex: 0,
        fact: "Silver Fox rabbits have standing fur that remains upright and does not lie flat.",
    },
    // Show & SOP Knowledge - Body Types
    {
        prompt: "How many body types are recognized by ARBA?",
        options: [
            "4 types",
            "5 types",
            "6 types",
            "7 types",
        ],
        correctIndex: 1,
        fact: "ARBA recognizes five body types: Compact, Commercial, Cylindrical, Semi-Arch, and Full-Arch.",
    },
    // Show & SOP Knowledge - Fur Types
    {
        prompt: "Which fur type is unique for its sheen caused by transparent hair shafts?",
        options: [
            "Satin",
            "Rex",
            "Wool",
            "Normal",
        ],
        correctIndex: 0,
        fact: "Satin fur has hollow hair shafts that refract light, creating a lustrous sheen.",
    },
    {
        prompt: "Which fur type is unique for having no guard hairs?",
        options: [
            "Rex",
            "Satin",
            "Wool",
            "Normal",
        ],
        correctIndex: 0,
        fact: "Rex fur lacks guard hairs, creating a uniform plush texture.",
    },
    // Breed Judging Specialties
    {
        prompt: "Which breed is judged primarily on wool quality?",
        options: [
            "Angora",
            "Rex",
            "Satin",
            "Californian",
        ],
        correctIndex: 0,
        fact: "Angoras are evaluated primarily on wool length, density, texture, and condition.",
    },
    {
        prompt: "Which breed is judged primarily on meat type and commercial qualities?",
        options: [
            "New Zealand",
            "Rex",
            "Angora",
            "Holland Lop",
        ],
        correctIndex: 0,
        fact: "New Zealand and Californian meat breeds are judged on body type, condition, and uniformity.",
    },
    // SOP Judging Priorities
    {
        prompt: "According to the Standard of Perfection, what are the four factors for judging meat pens (in order)?",
        options: [
            "Meat type, condition, uniformity, fur",
            "Fur, tattoo, pedigree, weight",
            "Size, color, pedigree, tattoo",
            "Condition, fur, pedigree, tattoo",
        ],
        correctIndex: 0,
        fact: "Meat pen judging prioritizes meat type first, then condition, uniformity, and fur quality.",
    },
    // Primary Purpose of SOP
    {
        prompt: "What is the primary purpose of the ARBA Standard of Perfection?",
        options: [
            "To provide judging criteria for rabbit shows",
            "To record pedigrees",
            "To track feed programs",
            "To regulate tattooing methods",
        ],
        correctIndex: 0,
        fact: "The Standard of Perfection is ARBA's official guide for judging rabbits at shows.",
    },
    // Registrar Limit
    {
        prompt: "What is the maximum number of rabbits a registrar may register in one day without ARBA approval?",
        options: [
            "25 rabbits",
            "50 rabbits",
            "75 rabbits",
            "100 rabbits",
        ],
        correctIndex: 1,
        fact: "Registrars can register up to 50 rabbits per day; larger numbers require ARBA approval.",
    },
    // Breed-Specific Disqualifications
    {
        prompt: "Which of the following is a breed-specific disqualification in Rex rabbits?",
        options: [
            "Fur longer than ½ inch",
            "Slightly dirty coat",
            "Minor ear tear",
            "Broken toenail",
        ],
        correctIndex: 0,
        fact: "Rex fur must not exceed ½ inch in length; longer fur is a disqualification.",
    },
    {
        prompt: "Which of the following is a breed-specific disqualification in Angora rabbits?",
        options: [
            "Wrong wool texture",
            "Slightly dirty coat",
            "Minor ear tear",
            "Broken toenail",
        ],
        correctIndex: 0,
        fact: "Angoras require proper wooliness; wrong or insufficient wool is a disqualification.",
    },
    // Faults vs. Disqualifications
    {
        prompt: "Which of the following is a fault but NOT a disqualification?",
        options: [
            "Slightly uneven fur",
            "Malocclusion",
            "Missing toenail",
            "Wrong eye color",
        ],
        correctIndex: 0,
        fact: "Slightly uneven fur is a fault that deducts points but does not disqualify the rabbit.",
    },
    // Registrar Scenario - Missing Toenail
    {
        prompt: "You are registering a rabbit with a missing toenail. What do you do?",
        options: [
            "Register it anyway",
            "Refuse registration",
            "Ask the breeder to tattoo again",
            "Ignore the fault",
        ],
        correctIndex: 1,
        fact: "Missing toenails are disqualifications; rabbits cannot be registered if they lack toenails.",
    },
    // Registrar Scenario - Incomplete Pedigree
    {
        prompt: "A rabbit has a pedigree missing one grandparent. Can it be registered?",
        options: [
            "Yes, with a note",
            "No",
            "Only if shown",
            "Only if tattooed",
        ],
        correctIndex: 1,
        fact: "ARBA requires a complete three-generation pedigree; missing ancestors disqualify registration.",
    },
    // Registrar Scenario - Sore Hocks
    {
        prompt: "A rabbit has sore hocks at the time of registration. What is the correct action?",
        options: [
            "Register it anyway",
            "Temporary disqualification—wait until healed",
            "Permanent disqualification",
            "Ignore the condition",
        ],
        correctIndex: 1,
        fact: "Sore hocks are a temporary disqualification; the rabbit may be registered after healing.",
    },
    // Registrar Scenario - No Tattoo
    {
        prompt: "A rabbit meets the breed standard but has no tattoo. What is the registrar's action?",
        options: [
            "Register it anyway",
            "Require a tattoo before registration",
            "Register with the breeder's signature only",
            "Register with photo ID",
        ],
        correctIndex: 1,
        fact: "A permanent tattoo is required for ARBA registration; it cannot be waived.",
    },
    // Registrar Scenario - Three Legs but Not Registered
    {
        prompt: "A rabbit has three ARBA show legs but is not yet registered. Can it be a Grand Champion?",
        options: [
            "Yes, immediately",
            "No, it must be registered first",
            "Only if shown again",
            "Only if tattooed twice",
        ],
        correctIndex: 1,
        fact: "A rabbit must be registered before show legs count toward Grand Champion status.",
    },
    // SOP Application - Judging Priority
    {
        prompt: "You are judging a meat pen. One rabbit has excellent meat type but poor uniformity. What is the correct scoring priority?",
        options: [
            "Uniformity first",
            "Meat type first",
            "Fur first",
            "Tattoo first",
        ],
        correctIndex: 1,
        fact: "According to the SOP, meat type is the first priority in meat pen judging.",
    },
    // SOP Application - Rex Fur Length
    {
        prompt: "A Rex rabbit has fur longer than ½ inch. What does the SOP require?",
        options: [
            "Fault",
            "Disqualification",
            "Registration note",
            "Ignore the issue",
        ],
        correctIndex: 1,
        fact: "Fur exceeding ½ inch in Rex rabbits is a disqualification per the SOP.",
    },
    // SOP Application - Eye Color
    {
        prompt: "A rabbit has blue-gray eyes but is entered as a Lilac. What does the SOP require?",
        options: [
            "Accept the entry",
            "Disqualification",
            "Fault",
            "Ignore the discrepancy",
        ],
        correctIndex: 1,
        fact: "Lilac rabbits must have brown or gray eyes; blue-gray eyes are a disqualification.",
    },
    // ARBA Breed Classes - 4-Class Breeds
    {
        prompt: "The Netherland Dwarf is classified as which type of ARBA class?",
        options: [
            "4-class",
            "6-class",
            "Wool breed",
            "Not recognized",
        ],
        correctIndex: 0,
        fact: "Netherland Dwarfs are one of the smallest breeds, classified as 4-class.",
    },
    {
        prompt: "The Holland Lop is classified as which type of ARBA class?",
        options: [
            "4-class",
            "6-class",
            "Wool breed",
            "Not recognized",
        ],
        correctIndex: 0,
        fact: "Holland Lops are compact lop-eared breeds, classified as 4-class.",
    },
    {
        prompt: "The Mini Rex is classified as which type of ARBA class?",
        options: [
            "4-class",
            "6-class",
            "Wool breed",
            "Not recognized",
        ],
        correctIndex: 0,
        fact: "Mini Rex are small rex-furred breeds, classified as 4-class.",
    },
    {
        prompt: "The Mini Satin is classified as which type of ARBA class?",
        options: [
            "4-class",
            "6-class",
            "Wool breed",
            "Not recognized",
        ],
        correctIndex: 0,
        fact: "Mini Satins are smaller versions of the Satin breed, classified as 4-class.",
    },
    {
        prompt: "The Polish is classified as which type of ARBA class?",
        options: [
            "4-class",
            "6-class",
            "Wool breed",
            "Not recognized",
        ],
        correctIndex: 0,
        fact: "Polish rabbits are small fancy breeds, classified as 4-class.",
    },
    {
        prompt: "The Britannia Petite is classified as which type of ARBA class?",
        options: [
            "4-class",
            "6-class",
            "Wool breed",
            "Not recognized",
        ],
        correctIndex: 0,
        fact: "Britannia Petites are tiny fancy breeds, classified as 4-class.",
    },
    {
        prompt: "The Dwarf Hotot is classified as which type of ARBA class?",
        options: [
            "4-class",
            "6-class",
            "Wool breed",
            "Not recognized",
        ],
        correctIndex: 0,
        fact: "Dwarf Hotots are small eye-banded breeds, classified as 4-class.",
    },
    {
        prompt: "The Lionhead is classified as which type of ARBA class?",
        options: [
            "4-class",
            "6-class",
            "Wool breed",
            "Not recognized",
        ],
        correctIndex: 0,
        fact: "Lionheads are distinctive maned breeds, classified as 4-class.",
    },
    {
        prompt: "The American Fuzzy Lop is classified as which type of ARBA class?",
        options: [
            "4-class",
            "6-class",
            "Wool breed",
            "Not recognized",
        ],
        correctIndex: 0,
        fact: "American Fuzzy Lops are woolly lop-eared breeds, classified as 4-class.",
    },
    {
        prompt: "The Jersey Wooly is classified as which type of ARBA class?",
        options: [
            "4-class",
            "6-class",
            "Wool breed",
            "Not recognized",
        ],
        correctIndex: 0,
        fact: "Jersey Woolys are small wool breeds, classified as 4-class.",
    },
    {
        prompt: "The Standard Chinchilla is classified as which type of ARBA class?",
        options: [
            "4-class",
            "6-class",
            "Wool breed",
            "Not recognized",
        ],
        correctIndex: 0,
        fact: "Standard Chinchillas are medium fancy breeds, classified as 4-class.",
    },
    {
        prompt: "The Silver is classified as which type of ARBA class?",
        options: [
            "4-class",
            "6-class",
            "Wool breed",
            "Not recognized",
        ],
        correctIndex: 0,
        fact: "Silver rabbits are small silvered breeds, classified as 4-class.",
    },
    {
        prompt: "The Silver Marten is classified as which type of ARBA class?",
        options: [
            "4-class",
            "6-class",
            "Wool breed",
            "Not recognized",
        ],
        correctIndex: 0,
        fact: "Silver Martens are small fancy breeds, classified as 4-class.",
    },
    {
        prompt: "The Tan is classified as which type of ARBA class?",
        options: [
            "4-class",
            "6-class",
            "Wool breed",
            "Not recognized",
        ],
        correctIndex: 0,
        fact: "Tan rabbits are small full-arch breeds, classified as 4-class.",
    },
    {
        prompt: "The Himalayan is classified as which type of ARBA class?",
        options: [
            "4-class",
            "6-class",
            "Wool breed",
            "Not recognized",
        ],
        correctIndex: 0,
        fact: "Himalayans are small cylindrical breeds, classified as 4-class.",
    },
    {
        prompt: "The Dutch is classified as which type of ARBA class?",
        options: [
            "4-class",
            "6-class",
            "Wool breed",
            "Not recognized",
        ],
        correctIndex: 0,
        fact: "Dutch rabbits are distinctive marked fancy breeds, classified as 4-class.",
    },
    {
        prompt: "The Havana is classified as which type of ARBA class?",
        options: [
            "4-class",
            "6-class",
            "Wool breed",
            "Not recognized",
        ],
        correctIndex: 0,
        fact: "Havana rabbits are small self-colored breeds, classified as 4-class.",
    },
    {
        prompt: "The Harlequin is classified as which type of ARBA class?",
        options: [
            "4-class",
            "6-class",
            "Wool breed",
            "Not recognized",
        ],
        correctIndex: 0,
        fact: "Harlequins are colorfully patterned fancy breeds, classified as 4-class.",
    },
    {
        prompt: "The English Angora is classified as which type of ARBA class?",
        options: [
            "4-class",
            "6-class",
            "Wool breed",
            "Not recognized",
        ],
        correctIndex: 0,
        fact: "English Angoras are wool breeds, classified as 4-class.",
    },
    {
        prompt: "The Satin Angora is classified as which type of ARBA class?",
        options: [
            "4-class",
            "6-class",
            "Wool breed",
            "Not recognized",
        ],
        correctIndex: 0,
        fact: "Satin Angoras are satiny wool breeds, classified as 4-class.",
    },
    {
        prompt: "The French Angora is classified as which type of ARBA class?",
        options: [
            "4-class",
            "6-class",
            "Wool breed",
            "Not recognized",
        ],
        correctIndex: 0,
        fact: "French Angoras are wool breeds, classified as 4-class.",
    },
    {
        prompt: "The American Sable is classified as which type of ARBA class?",
        options: [
            "4-class",
            "6-class",
            "Wool breed",
            "Not recognized",
        ],
        correctIndex: 0,
        fact: "American Sables are small shaded breeds, classified as 4-class.",
    },
    // ARBA Breed Classes - 6-Class Breeds
    {
        prompt: "The New Zealand is classified as which type of ARBA class?",
        options: [
            "4-class",
            "6-class",
            "Wool breed",
            "Not recognized",
        ],
        correctIndex: 1,
        fact: "New Zealand rabbits are large meat breeds, classified as 6-class.",
    },
    {
        prompt: "The Californian is classified as which type of ARBA class?",
        options: [
            "4-class",
            "6-class",
            "Wool breed",
            "Not recognized",
        ],
        correctIndex: 1,
        fact: "Californians are large commercial meat breeds, classified as 6-class.",
    },
    {
        prompt: "The Flemish Giant is classified as which type of ARBA class?",
        options: [
            "4-class",
            "6-class",
            "Wool breed",
            "Not recognized",
        ],
        correctIndex: 1,
        fact: "Flemish Giants are the largest rabbit breed, classified as 6-class.",
    },
    {
        prompt: "The American is classified as which type of ARBA class?",
        options: [
            "4-class",
            "6-class",
            "Wool breed",
            "Not recognized",
        ],
        correctIndex: 1,
        fact: "American rabbits are large breeds with mandolin body, classified as 6-class.",
    },
    {
        prompt: "The Giant Angora is classified as which type of ARBA class?",
        options: [
            "4-class",
            "6-class",
            "Wool breed",
            "Not recognized",
        ],
        correctIndex: 1,
        fact: "Giant Angoras are large wool breeds, classified as 6-class.",
    },
    {
        prompt: "The Giant Chinchilla is classified as which type of ARBA class?",
        options: [
            "4-class",
            "6-class",
            "Wool breed",
            "Not recognized",
        ],
        correctIndex: 1,
        fact: "Giant Chinchillas are large fancy breeds, classified as 6-class.",
    },
    {
        prompt: "The Checkered Giant is classified as which type of ARBA class?",
        options: [
            "4-class",
            "6-class",
            "Wool breed",
            "Not recognized",
        ],
        correctIndex: 1,
        fact: "Checkered Giants are large patterned breeds, classified as 6-class.",
    },
    {
        prompt: "The English Lop is classified as which type of ARBA class?",
        options: [
            "4-class",
            "6-class",
            "Wool breed",
            "Not recognized",
        ],
        correctIndex: 1,
        fact: "English Lops are large lop-eared breeds, classified as 6-class.",
    },
    {
        prompt: "The French Lop is classified as which type of ARBA class?",
        options: [
            "4-class",
            "6-class",
            "Wool breed",
            "Not recognized",
        ],
        correctIndex: 1,
        fact: "French Lops are large lop-eared meat breeds, classified as 6-class.",
    },
    {
        prompt: "The American Chinchilla is classified as which type of ARBA class?",
        options: [
            "4-class",
            "6-class",
            "Wool breed",
            "Not recognized",
        ],
        correctIndex: 1,
        fact: "American Chinchillas are large fancy breeds, classified as 6-class.",
    },
    {
        prompt: "The Champagne d'Argent is classified as which type of ARBA class?",
        options: [
            "4-class",
            "6-class",
            "Wool breed",
            "Not recognized",
        ],
        correctIndex: 1,
        fact: "Champagne d'Argents are large silvered breeds, classified as 6-class.",
    },
    {
        prompt: "The Crème d'Argent is classified as which type of ARBA class?",
        options: [
            "4-class",
            "6-class",
            "Wool breed",
            "Not recognized",
        ],
        correctIndex: 1,
        fact: "Crème d'Argents are large silvered breeds, classified as 6-class.",
    },
    {
        prompt: "The Palomino is classified as which type of ARBA class?",
        options: [
            "4-class",
            "6-class",
            "Wool breed",
            "Not recognized",
        ],
        correctIndex: 1,
        fact: "Palominos are large colored breeds, classified as 6-class.",
    },
    {
        prompt: "The Satin is classified as which type of ARBA class?",
        options: [
            "4-class",
            "6-class",
            "Wool breed",
            "Not recognized",
        ],
        correctIndex: 1,
        fact: "Satin rabbits are large satin-furred breeds, classified as 6-class.",
    },
    {
        prompt: "The Rex is classified as which type of ARBA class?",
        options: [
            "4-class",
            "6-class",
            "Wool breed",
            "Not recognized",
        ],
        correctIndex: 1,
        fact: "Rex rabbits are large rex-furred breeds, classified as 6-class.",
    },
    {
        prompt: "The Argente Brun is classified as which type of ARBA class?",
        options: [
            "4-class",
            "6-class",
            "Wool breed",
            "Not recognized",
        ],
        correctIndex: 1,
        fact: "Argente Bruns are large silvered breeds, classified as 6-class.",
    },
    {
        prompt: "The Cinnamon is classified as which type of ARBA class?",
        options: [
            "4-class",
            "6-class",
            "Wool breed",
            "Not recognized",
        ],
        correctIndex: 1,
        fact: "Cinnamons are large warm-colored breeds, classified as 6-class.",
    },
    {
        prompt: "The English Spot is classified as which type of ARBA class?",
        options: [
            "4-class",
            "6-class",
            "Wool breed",
            "Not recognized",
        ],
        correctIndex: 1,
        fact: "English Spots are large spotted breeds, classified as 6-class.",
    },
    {
        prompt: "The Belgian Hare is classified as which type of ARBA class?",
        options: [
            "4-class",
            "6-class",
            "Wool breed",
            "Not recognized",
        ],
        correctIndex: 1,
        fact: "Belgian Hares are large full-arch breeds, classified as 6-class.",
    },
    {
        prompt: "The Blanc de Hotot is classified as which type of ARBA class?",
        options: [
            "4-class",
            "6-class",
            "Wool breed",
            "Not recognized",
        ],
        correctIndex: 1,
        fact: "Blanc de Hotots are large white eye-banded breeds, classified as 6-class.",
    },
    {
        prompt: "The Beveren is classified as which type of ARBA class?",
        options: [
            "4-class",
            "6-class",
            "Wool breed",
            "Not recognized",
        ],
        correctIndex: 1,
        fact: "Beverens are large blue-furred breeds, classified as 6-class.",
    },
    {
        prompt: "The Rhinelander is classified as which type of ARBA class?",
        options: [
            "4-class",
            "6-class",
            "Wool breed",
            "Not recognized",
        ],
        correctIndex: 1,
        fact: "Rhinelanders are large patterned breeds, classified as 6-class.",
    },
    {
        prompt: "The Silver Fox is classified as which type of ARBA class?",
        options: [
            "4-class",
            "6-class",
            "Wool breed",
            "Not recognized",
        ],
        correctIndex: 1,
        fact: "Silver Foxes are large silvered standing-coat breeds, classified as 6-class.",
    },
];

function pickRandomQuestions(pool, count) {
    const copy = [...pool];
    for (let i = copy.length - 1; i > 0; i -= 1) {
        const j = Math.floor(Math.random() * (i + 1));
        [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy.slice(0, Math.min(count, copy.length));
}

function shuffleOptions(question) {
    const optionEntries = question.options.map((text, index) => ({ text, index }));
    for (let i = optionEntries.length - 1; i > 0; i -= 1) {
        const j = Math.floor(Math.random() * (i + 1));
        [optionEntries[i], optionEntries[j]] = [optionEntries[j], optionEntries[i]];
    }
    const shuffledOptions = optionEntries.map((entry) => entry.text);
    const newCorrectIndex = optionEntries.findIndex((entry) => entry.index === question.correctIndex);
    return {
        ...question,
        options: shuffledOptions,
        correctIndex: newCorrectIndex,
    };
}

let questions = [];

const questionText = document.getElementById("question");
const optionsList = document.getElementById("options");
const factBox = document.getElementById("fact");
const progress = document.getElementById("progress");
const form = document.getElementById("answer-form");
const answerInput = document.getElementById("answer");
const feedback = document.getElementById("feedback");
const score = document.getElementById("score");
const nextButton = document.getElementById("next");
const finishedButton = document.getElementById("finished");
const exitButton = document.getElementById("exit");
const statsElement = document.getElementById("stats");
const summarySection = document.getElementById("summary");
const summaryNote = document.getElementById("summary-note");
const summaryList = document.getElementById("summary-list");
const celebration = document.getElementById("celebration");
const farewellModal = document.getElementById("farewell-modal");
const farewellMessage = document.getElementById("farewell-message");
const closeModalButton = document.getElementById("close-modal");
const reminderToast = document.getElementById("reminder-toast");

const STORAGE_KEY = "rabbitHusbandryStats";
const DEFAULT_STATS = { bestScore: 0, gamesPlayed: 0 };

function loadStats() {
    try {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (!raw) {
            return { ...DEFAULT_STATS };
        }
        const parsed = JSON.parse(raw);
        return {
            bestScore: Number(parsed.bestScore) || 0,
            gamesPlayed: Number(parsed.gamesPlayed) || 0,
        };
    } catch (error) {
        console.warn("Unable to load stats", error);
        return { ...DEFAULT_STATS };
    }
}

let stats = loadStats();
let answersLog = [];

function saveStats() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(stats));
}

function updateStatsDisplay() {
    if (!statsElement) {
        return;
    }
    statsElement.textContent = `Best Score: ${stats.bestScore}/${QUESTIONS_PER_GAME} | Games Played: ${stats.gamesPlayed}`;
}

updateStatsDisplay();

let currentIndex = 0;
let currentScore = 0;
let waitingForNext = false;
let readyToRestart = false;
let pageWasHidden = false;
let toastTimeoutId = null;

function unlockQuiz() {
    answerInput.disabled = false;
    form.querySelector("button").disabled = false;
}

function lockQuiz() {
    answerInput.disabled = true;
    form.querySelector("button").disabled = true;
}

function stopCelebration() {
    if (!celebration) {
        return;
    }
    celebration.classList.remove("show");
}

function playCelebration() {
    if (!celebration) {
        return;
    }
    celebration.classList.add("show");
}

function startNewGame() {
    questions = pickRandomQuestions(allQuestions, QUESTIONS_PER_GAME).map(shuffleOptions);
    currentIndex = 0;
    currentScore = 0;
    waitingForNext = false;
    readyToRestart = false;
    answersLog = [];
    stopCelebration();
    hideFarewellModal();
    hideReminderToast();
    if (summarySection) {
        summarySection.hidden = true;
    }
    if (summaryList) {
        summaryList.innerHTML = "";
    }
    if (summaryNote) {
        summaryNote.textContent = "";
    }
    unlockQuiz();
    updateActionButtons();
    renderQuestion();
}

function renderQuestion() {
    if (!questionText || !optionsList || !factBox || !progress) {
        return;
    }

    const current = questions[currentIndex];
    progress.textContent = `Question ${currentIndex + 1} of ${questions.length}`;
    questionText.textContent = current.prompt;
    optionsList.innerHTML = "";
    current.options.forEach((option) => {
        const li = document.createElement("li");
        li.textContent = option;
        optionsList.appendChild(li);
    });
    factBox.textContent = "";
    feedback.textContent = "";
    feedback.classList.remove("correct", "incorrect");
    score.textContent = `Score: ${currentScore} / ${questions.length}`;
    answerInput.value = "";
    answerInput.focus();
    waitingForNext = false;
    readyToRestart = false;
    updateActionButtons();
    stopCelebration();
}

function recordAnswer(question, selectedIndex) {
    const chosen = selectedIndex >= 0 ? question.options[selectedIndex] : null;
    const questionNumber = answersLog.length + 1;
    answersLog.push({
        questionNumber,
        prompt: question.prompt,
        correct: question.options[question.correctIndex],
        chosen,
        isCorrect: selectedIndex === question.correctIndex,
    });
}

function setFeedbackState(isCorrect) {
    feedback.classList.remove("correct", "incorrect");
    if (isCorrect === true) {
        feedback.classList.add("correct");
    } else if (isCorrect === false) {
        feedback.classList.add("incorrect");
    }
}

function updateActionButtons() {
    if (!nextButton) {
        return;
    }
    const shouldShowNext = waitingForNext || readyToRestart;
    nextButton.hidden = !shouldShowNext;
    if (readyToRestart) {
        nextButton.textContent = "Play Again";
    } else if (questions.length && currentIndex === questions.length - 1) {
        nextButton.textContent = "Finish";
    } else {
        nextButton.textContent = "Next Question";
    }

    const shouldShowSecondary = shouldShowNext;
    if (finishedButton) {
        finishedButton.hidden = !shouldShowSecondary;
        finishedButton.textContent = readyToRestart ? "Finished" : "Finish Round";
    }
    if (exitButton) {
        exitButton.hidden = !shouldShowSecondary;
        exitButton.textContent = readyToRestart ? "Exit" : "Exit Early";
    }
}

function showFarewellModal(message) {
    if (!farewellModal || !farewellMessage || !closeModalButton) {
        return;
    }
    farewellMessage.textContent = message;
    farewellModal.hidden = false;
    farewellModal.setAttribute("aria-hidden", "false");
    requestAnimationFrame(() => {
        farewellModal.classList.add("show");
        closeModalButton.focus();
    });
}

function hideFarewellModal() {
    if (!farewellModal) {
        return;
    }
    farewellModal.classList.remove("show");
    farewellModal.setAttribute("aria-hidden", "true");
    setTimeout(() => {
        if (farewellModal.classList.contains("show")) {
            return;
        }
        farewellModal.hidden = true;
    }, 220);
}

function showReminderToast(message = "We missed you! Come play again, please.") {
    if (!reminderToast) {
        return;
    }
    reminderToast.textContent = message;
    reminderToast.hidden = false;
    requestAnimationFrame(() => reminderToast.classList.add("show"));
    if (toastTimeoutId) {
        clearTimeout(toastTimeoutId);
    }
    toastTimeoutId = setTimeout(() => {
        hideReminderToast();
    }, 5000);
}

function hideReminderToast() {
    if (!reminderToast) {
        return;
    }
    reminderToast.classList.remove("show");
    if (toastTimeoutId) {
        clearTimeout(toastTimeoutId);
        toastTimeoutId = null;
    }
    setTimeout(() => {
        if (!reminderToast.classList.contains("show")) {
            reminderToast.hidden = true;
        }
    }, 220);
}

form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (waitingForNext || readyToRestart) {
        return;
    }
    const current = questions[currentIndex];
    const value = Number(answerInput.value) - 1;

    if (Number.isNaN(value) || value < 0 || value >= current.options.length) {
        feedback.textContent = "Enter a valid option number.";
        setFeedbackState();
        stopCelebration();
        return;
    }

    recordAnswer(current, value);
    if (value === current.correctIndex) {
        feedback.textContent = "Correct!";
        currentScore += 1;
        setFeedbackState(true);
        playCelebration();
    } else {
        feedback.textContent = `Answer: ${current.options[current.correctIndex]}`;
        setFeedbackState(false);
        stopCelebration();
    }

    factBox.textContent = current.fact || "";
    score.textContent = `Score: ${currentScore} / ${questions.length}`;

    waitingForNext = true;
    updateActionButtons();
});

function showCompletionState() {
    feedback.textContent += " Quiz complete.";
    factBox.textContent = "";
    lockQuiz();
    waitingForNext = false;
    readyToRestart = true;
    updateActionButtons();
    finalizeRound();
    showFarewellModal("Thanks for practicing rabbit husbandry!");
}

function finalizeRound() {
    stats.gamesPlayed += 1;
    if (currentScore > stats.bestScore) {
        stats.bestScore = currentScore;
    }
    saveStats();
    updateStatsDisplay();
    renderSummary();
}

function renderSummary() {
    if (!summarySection || !summaryList || !summaryNote) {
        return;
    }

    const misses = answersLog.filter((entry) => !entry.isCorrect);
    summaryList.innerHTML = "";

    if (misses.length === 0) {
        summaryNote.textContent = "Perfect round! Every question was correct.";
    } else {
        summaryNote.textContent = "Review these topics and try again:";
        misses.forEach((miss) => {
            const item = document.createElement("li");
            item.innerHTML = `<strong>Q${miss.questionNumber}:</strong> ${miss.prompt}<br />Correct answer: ${miss.correct}`;
            if (miss.chosen && miss.chosen !== miss.correct) {
                item.innerHTML += `<br />You answered: ${miss.chosen}`;
            }
            summaryList.appendChild(item);
        });
    }

    summarySection.hidden = false;
    summarySection.focus();
}

nextButton.addEventListener("click", () => {
    if (readyToRestart) {
        startNewGame();
        return;
    }

    if (!waitingForNext) {
        return;
    }

    currentIndex += 1;
    if (currentIndex < questions.length) {
        renderQuestion();
    } else {
        showCompletionState();
    }
});

if (finishedButton) {
    finishedButton.addEventListener("click", () => {
        if (readyToRestart) {
            showFarewellModal("We hope you had fun! Hop back in anytime.");
            return;
        }
        if (!waitingForNext) {
            return;
        }
        showCompletionState();
    });
}

if (exitButton) {
    exitButton.addEventListener("click", () => {
        if (!waitingForNext && !readyToRestart) {
            return;
        }
        lockQuiz();
        waitingForNext = false;
        readyToRestart = true;
        stopCelebration();
        feedback.textContent = "Taking a break? We will be ready when you are.";
        setFeedbackState();
        updateActionButtons();
        showFarewellModal("We already miss you! Come play again soon.");
    });
}

if (closeModalButton) {
    closeModalButton.addEventListener("click", () => {
        hideFarewellModal();
    });
}

if (farewellModal) {
    farewellModal.addEventListener("click", (event) => {
        if (event.target === farewellModal) {
            hideFarewellModal();
        }
    });
}

if (reminderToast) {
    reminderToast.addEventListener("click", () => {
        hideReminderToast();
    });
}

document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "hidden") {
        pageWasHidden = true;
        hideReminderToast();
        return;
    }
    if (pageWasHidden) {
        pageWasHidden = false;
        showReminderToast("We missed you! Come play again, please.");
    }
});

startNewGame();
