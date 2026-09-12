const QUESTIONS_PER_GAME = 10;

const allQuestions = [
    {
        studyTrack: "cloverbud",
        prompt: "What should you do before touching a rabbit?",
        options: ["Wash your hands", "Run and clap", "Give it candy"],
        correctIndex: 0,
        fact: "Clean hands help keep rabbits healthy.",
    },
    {
        studyTrack: "cloverbud",
        prompt: "What does a rabbit need to drink every day?",
        options: ["Fresh water", "Soda", "Milk"],
        correctIndex: 0,
        fact: "Check that your rabbit has clean, fresh water every day.",
    },
    {
        studyTrack: "cloverbud",
        prompt: "What is a good food for a rabbit to munch?",
        options: ["Grass hay", "Potato chips", "Chocolate"],
        correctIndex: 0,
        fact: "Grass hay is an important everyday food for rabbits.",
    },
    {
        studyTrack: "cloverbud",
        prompt: "How should you talk near a rabbit?",
        options: ["With a quiet voice", "By shouting", "By making loud noises"],
        correctIndex: 0,
        fact: "Rabbits can be startled by loud sounds, so calm voices help them feel safe.",
    },
    {
        studyTrack: "cloverbud",
        prompt: "Is it ok to pick up a rabbit by the scruff of the neck?",
        options: ["No, never", "Yes, anytime", "Only if it is small"],
        correctIndex: 0,
        fact: "Picking up a rabbit by the scruff of the neck can hurt it.",
    },
    {
        studyTrack: "cloverbud",
        prompt: "Where is the best place to pet or play with your rabbit?",
        options: ["Sitting low on the floor", "On top of a tall chair", "While running outside"],
        correctIndex: 0,
        fact: "Being low to the ground helps keep both you and the rabbit safe.",
    },
    {
        studyTrack: "cloverbud",
        prompt: "What should you do if a rabbit is hiding and does not want to come out?",
        options: ["Give it quiet space", "Pull it by the leg or ears", "Bang on its cage"],
        correctIndex: 0,
        fact: "Rabbits need a quiet place to feel safe. Give them time to come out on their own.",
    },
    {
        studyTrack: "cloverbud",
        prompt: "What should you do if your rabbit does not want to eat?",
        options: ["Tell a grown-up right away", "Give it candy", "Ignore it for days"],
        correctIndex: 0,
        fact: "A rabbit that is not eating needs a grown-up to check on it right away.",
    },
    {
        studyTrack: "cloverbud",
        prompt: "What is a gentle way to pet a rabbit?",
        options: ["Use a soft, slow hand", "Pull its ears", "Poke its tummy"],
        correctIndex: 0,
        fact: "Gentle pets help a rabbit feel calm and safe.",
    },
    {
        studyTrack: "cloverbud",
        prompt: "What should you do after helping care for a rabbit?",
        options: ["Wash your hands", "Touch your face", "Leave a mess"],
        correctIndex: 0,
        fact: "Wash your hands after handling rabbits or their supplies.",
    },
    {
        studyTrack: "cloverbud",
        prompt: "What should a rabbit's home be like?",
        options: ["Clean and dry", "Wet and messy", "Full of toys"],
        correctIndex: 0,
        fact: "A clean, dry home helps rabbits stay comfortable and healthy.",
    },
    {
        studyTrack: "cloverbud",
        prompt: "What should you do before opening a rabbit's cage?",
        options: ["Ask a grown-up if it's okay", "Open it quickly", "Shake the door"],
        correctIndex: 0,
        fact: "A grown-up can help you open and close the cage safely.",
    },
    {
        studyTrack: "cloverbud",
        prompt: "What does it mean when a rabbit thumps its foot?",
        options: ["It is worried or startled", "It is happy", "It is hungry"],
        correctIndex: 0,
        fact: "A rabbit may thump when it feels worried or startled.",
    },
    {
        studyTrack: "cloverbud",
        prompt: "What can a rabbit chew for fun?",
        options: ["A plain cardboard tube", "A plastic toy", "A pencil"],
        correctIndex: 0,
        fact: "Safe chew toys can help keep a rabbit busy.",
    },
    {
        studyTrack: "cloverbud",
        prompt: "Where should a rabbit stay on a hot day?",
        options: ["In a cool, shaded place", "In hot sunshine", "Next to a heater"],
        correctIndex: 0,
        fact: "On hot days rabbits need access to fresh water and sometimes a few frozen water bottles to help them cool down.",
    },
    {
        studyTrack: "cloverbud",
        prompt: "How should a cage door be left after caring for a rabbit?",
        options: ["Closed and latched", "Wide open", "Halfway open"],
        correctIndex: 0,
        fact: "A closed, latched door helps keep a rabbit safe at home.",
    },
    {
        studyTrack: "cloverbud",
        prompt: "What should you do when a rabbit is eating?",
        options: ["Let it eat quietly", "Take its food away", "Tap on its bowl"],
        correctIndex: 0,
        fact: "Quiet eating time helps a rabbit feel safe.",
    },
    {
        studyTrack: "cloverbud",
        prompt: "What covers a rabbit's body?",
        options: ["Fur", "Feathers", "Scales"],
        correctIndex: 0,
        fact: "A rabbit's fur helps keep it warm.",
    },
    {
        studyTrack: "cloverbud",
        prompt: "When a rabbit runs super fast and hops in the air, what is this called?",
        options: ["Binky and Zoomies", "Jumps and sprints", "Playtime"],
        correctIndex: 0,
        fact: "A binky is a happy jump that rabbits do when they are excited.",
    },
    {
        studyTrack: "cloverbud",
        prompt: "What can you use to learn about your rabbit?",
        options: ["A rabbit care book", "A video game only", "A loud alarm"],
        correctIndex: 0,
        fact: "Learning with a grown-up helps you become a kind rabbit helper.",
    },
    {
        studyTrack: "cloverbud",
        prompt: "What should you do after giving a rabbit fresh water?",
        options: ["Make sure it can reach the water", "Pour it on the floor", "Hide the water"],
        correctIndex: 0,
        fact: "A rabbit needs water it can easily reach.",
    },
    {
        studyTrack: "cloverbud",
        prompt: "What food helps keep a rabbit's tummy healthy?",
        options: ["Grass hay and rabbit pellets", "Candy", "Only cookies"],
        correctIndex: 0,
        fact: "Hay and rabbit pellets are good everyday foods for rabbits.",
    },
    {
        studyTrack: "cloverbud",
        prompt: "Who should help trim a rabbit's nails?",
        options: ["A grown-up who knows how", "No one", "Another rabbit"],
        correctIndex: 0,
        fact: "A grown-up can trim nails carefully to help keep a rabbit comfortable.",
    },
    {
        studyTrack: "cloverbud",
        prompt: "What can a rabbit rest on in its home?",
        options: ["A clean resting board or mat", "A wet towel", "A pile of toys"],
        correctIndex: 0,
        fact: "A resting board or mat gives a rabbit a comfortable place to relax.",
    },
    {
        studyTrack: "cloverbud",
        prompt: "When should you place a nest box for a pregnant doe?",
        options: ["The day breeding happens", "About 7 days before the due date", "After you see kits born"],
        correctIndex: 1,
        fact: "Provide a box and straw or hay and allow the doe to line it herself.",
    },

    // Genetics section continues unchanged…
    {
        prompt: "Both parents are black but carry the recessive chinchilla gene (Cc). What percent of kits do you expect to be chinchilla (cc)?",
        options: ["25%", "50%", "75%"],
        correctIndex: 0,
        fact: "A simple Punnett square for two carriers predicts one out of four kits showing the recessive color.",
    },
    {
        prompt: "How does a kit receive its coat-color genes?",
        options: ["Both copies come from the buck", "One allele comes from each parent", "Whichever grandparent had the darkest coat"],
        correctIndex: 1,
        fact: "Every kit inherits two alleles per locus—one from each parent.",
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
        studyTrack: "cloverbud",
        prompt: "What can show that a rabbit is doing well?",
        options: [
            "It is eating and drinking normally",
            "It is hiding all day",
            "It has no water",
        ],
        correctIndex: 0,
        fact: "Healthy rabbits eat and drink daily. A grown-up should check this each day.",
    },
    {
        studyTrack: "cloverbud",
        topic: "Health & Biosecurity",
        prompt: "What should you do with a rabbit's water bowl?",
        options: ["Keep it clean", "Fill it with dirt", "Hide it"],
        correctIndex: 0,
        fact: "Rabbits need clean water every day. Wash and refill bowls often.",
    },
    {
        studyTrack: "cloverbud",
        prompt: "What is a rabbit's baby called?",
        options: ["A kit", "A puppy", "A chick"],
        correctIndex: 0,
        fact: "A baby rabbit is called a kit.",
    },
    {
        studyTrack: "cloverbud",
        prompt: "What should you do near a sleeping rabbit?",
        options: ["Let it rest", "Wake it by yelling", "Tap its cage"],
        correctIndex: 0,
        fact: "Quiet rest helps rabbits feel safe.",
    },
    {
        studyTrack: "cloverbud",
        prompt: "What should you do if a rabbit looks scared?",
        options: ["Move slowly and be quiet", "Chase it", "Make loud sounds"],
        correctIndex: 0,
        fact: "Slow, quiet movements help rabbits feel safer.",
    },
    {
        studyTrack: "cloverbud",
        prompt: "Where should rabbit food stay?",
        options: ["In a clean feeder", "On the dirty floor", "In the water bowl"],
        correctIndex: 0,
        fact: "Clean food in a feeder helps rabbits stay healthy.",
    },
    {
        studyTrack: "cloverbud",
        prompt: "What can you do to help clean a rabbit's home?",
        options: ["Work with a grown-up", "Make it messier", "Throw food around"],
        correctIndex: 0,
        fact: "Helping keep a rabbit's home clean is kind care.",
    },
    {
        studyTrack: "cloverbud",
        prompt: "What should a rabbit have for a comfy nap?",
        options: ["A clean, dry place", "A puddle", "A loud television"],
        correctIndex: 0,
        fact: "A clean, dry place helps rabbits rest comfortably.",
    },
    {
        studyTrack: "cloverbud",
        prompt: "What is a kind way to give a rabbit space?",
        options: ["Watch from nearby", "Crowd its cage", "Pull its fur"],
        correctIndex: 0,
        fact: "Rabbits need room to rest and explore calmly.",
    },
    {
        studyTrack: "cloverbud",
        prompt: "What should you do if a rabbit's cage is open?",
        options: ["Tell a grown-up", "Walk away", "Scare the rabbit"],
        correctIndex: 0,
        fact: "A grown-up can help make sure the rabbit is safe.",
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
        options: ["Two", "Three", "Four", "Five"],
        correctIndex: 2,
        fact:
            "Registration requires a four-generation pedigree: the rabbit, its parents, grandparents, and great-grandparents.",
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
            "The semi-arch type, also called mandolin, rises slowly behind the shoulders and peaks over the hips, just like the Flemish.",
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
            "Holland Lops top ARBA registration lists due to their compact body type, rollback fur, and friendly nature.",
    },
    {
        prompt:
            "How should a full-arch breed like a Tan or Checkered Giant be shown on the table?",
        options: [
            "Press the belly to the table",
            "Let it stand naturally showing daylight under the body",
            "Stretch it flat like a rug",
        ],
        correctIndex: 1,
        fact:
            "Full-arch breeds are not posed. Let them run the table so they can show their natural arch from shoulders to hips.",
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
            "Charlies have two copies of the broken gene, so they show less than 10% color, often only on ears or nose.",
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
            "Dutch stops must be even; a longer white foot on one side is a fault that lowers the score.",
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
            "Vienna carriers often show white mittens or a snip even though they are not full blue-eyed whites.",
    },
    {
        prompt: "What does the rufus modifier add to a rabbit's coat?",
        options: ["Extra blue shading", "Warm red/orange richness", "White ticking"],
        correctIndex: 1,
        fact:
            "Rufus deepens rusty orange tones, giving breeds like New Zealands a rich, warm color.",
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
            "Most does kindle at about 31 days, so nest boxes go in around day 28.",
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
            "Biofilm forms quickly; frequent washing keeps bacteria from colonizing drinking equipment.",
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
            "Cooling the ears with room-temperature water and airflow lowers body temperature without shocking the rabbit.",
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
        fact: "Placing the nest box 2–3 days before kindling gives the doe time to prepare it with fur and hay.",
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
        fact: "Newborn kits open their eyes around 7–10 days old as their eyelids develop.",
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
        fact: "ARBA recognizes over 50 breeds, with Lionhead being one of the most recently accepted breeds.",
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
        fact: "Rabbit gestation typically ranges from 28–32 days, with most does kindling around day 31.",
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
            "Netherland Dwarf (4-class), Holland Lop (6-class)",
        ],
        correctIndex: 0,
        fact: "Class is a weight category: 4-class breeds split into junior and senior for each sex, while heavier 6-class breeds add an intermediate class. Mini Rex are 4-class; New Zealands are 6-class.",
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
        fact: "Remove the nest box at 3–4 weeks when kits are weaned and eating pellets independently.",
    },
    {
        prompt: "Which option lists three grounds for disqualification?",
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
        fact: "ARBA recognizes four fur types: Normal, Rex, Satin, and Wool.",
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
        fact: "Rabbits are primarily raised for meat and fur; they are also kept as pets and show animals.",
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
            "Netherland Dwarf",
        ],
        correctIndex: 2,
        fact: "Mandolin is another name for the semi-arch type. The American breed is a classic mandolin/semi-arch breed.",
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
        fact: "Lionhead was among the most recently accepted breeds in ARBA's Standard of Perfection.",
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
        fact: "Blue coloring results from the chocolate allele combined with dilution (dd).",
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
            "Rabbit must meet breed standard and have a complete 4-generation pedigree",
            "Rabbit must be tattooed and weigh over 5 lbs",
            "Rabbit must be shown at least once",
            "Rabbit must be bred by the registrar",
        ],
        correctIndex: 0,
        fact: "ARBA registration requires meeting breed standards and providing a documented four-generation pedigree.",
    },
    {
        prompt: "What is the minimum age for a rabbit to be registered with ARBA?",
        options: [
            "6 weeks",
            "3 months",
            "6 months",
            "1 year",
        ],
        correctIndex: 2,
        fact: "ARBA registration requires a rabbit to be at least 6 months old. Show entry requires a rabbit to be at least 3 months old.",
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
        fact: "Finish refers to the overall condition of flesh and fur, showing grooming and health.",
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
        fact: "New Zealand rabbits are large meat breeds, placing them in the 6-class category.",
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
        fact: "ARBA's official motto is 'Dedicated to the Betterment of Rabbits and Cavy.'",
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
        fact: "Palpation around day 10–14 allows breeders to confirm pregnancy by feeling embryos.",
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
        fact: "Netherland Dwarfs are small and compact, representing the smallest recognized breed type.",
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
        fact: "Finish refers to the overall condition of flesh and fur, showing grooming and health.",
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
        fact: "New Zealand rabbits are large meat breeds, placing them in the 6-class category.",
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
        fact: "ARBA's official motto is 'Dedicated to the Betterment of Rabbits and Cavy.'",
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
        fact: "Palpation around day 10–14 allows breeders to confirm pregnancy by feeling embryos.",
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
        fact: "Netherland Dwarfs are small and compact, representing the smallest recognized breed type.",
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
        fact: "Finish refers to the overall condition of flesh and fur, showing grooming and health.",
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
        fact: "New Zealand rabbits are large meat breeds, placing them in the 6-class category.",
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
        fact: "ARBA's official motto is 'Dedicated to the Betterment of Rabbits and Cavy.'",
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
        fact: "Palpation around day 10–14 allows breeders to confirm pregnancy by feeling embryos.",
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
        fact: "Netherland Dwarfs are small and compact, representing the smallest recognized breed type.",
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
        fact: "Finish refers to the overall condition of flesh and fur, showing grooming and health.",
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
        fact: "New Zealand rabbits are large meat breeds, placing them in the 6-class category.",
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
        fact: "ARBA's official motto is 'Dedicated to the Betterment of Rabbits and Cavy.'",
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
        fact: "Palpation around day 10–14 allows breeders to confirm pregnancy by feeling embryos.",
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
        fact: "Netherland Dwarfs are small and compact, representing the smallest recognized breed type.",
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
        fact: "Rex breeds have short, plush fur with no guard hairs, giving a velvet-like texture.",
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
        fact: "A permanent tattoo in the left ear is required for ARBA registration to link the rabbit to its papers.",
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
        fact: "The C locus controls pigment deposition; the chinchilla allele reduces yellow pigment, creating the chinchilla pattern.",
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
        fact: "The B locus controls brown pigment; bb creates chocolate coloration, while B_ produces black.",
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
        fact: "The C locus controls pigment production; the albino allele (cc) results in no pigment deposition.",
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
        fact: "Chocolate rabbits are self-colored (aa) with brown pigment (bb).",
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
        fact: "Lilac requires self coloring (aa), brown pigment (bb), and dilution (dd).",
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
        fact: "Himalayans carry the temperature-sensitive allele (chch) that restricts color to cooler areas like ears and nose.",
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
        fact: "Chocolate Chinchilla combines agouti (A_), brown pigment (bb), chinchilla allele (cchd), and full color.",
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
        correctIndex: 2,
        fact: "ARBA requires four generations: the rabbit, its parents, grandparents, and great-grandparents.",
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
        fact: "Lilac rabbits must have blue-gray eyes; pink eyes are a disqualification.",
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
            "New Zealand and Californian",
            "Rex",
            "Angora",
            "Holland Lop",
        ],
        correctIndex: 0,
        fact: "New Zealand and Californian are classic meat breeds, judged on commercial body type, condition, and uniformity.",
    },
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
    {
        prompt: "What is the primary purpose of the ARBA Standard of Perfection?",
        options: [
            "To provide judging criteria that promote breed improvement",
            "To record pedigrees",
            "To track feed programs",
            "To regulate tattooing methods",
        ],
        correctIndex: 0,
        fact: "The Standard of Perfection gives judges uniform criteria and guides breeders toward improving each breed.",
    },
    {
        prompt: "What is the maximum number of rabbits a registrar may register in one day without ARBA approval?",
        options: [
            "25 rabbits",
            "50 rabbits",
            "75 rabbits",
            "100 rabbits",
        ],
        correctIndex: 1,
        fact: "Registrars may register up to 50 rabbits per day without special ARBA approval; larger batches require authorization.",
    },
    {
        prompt: "Which of the following is a breed-specific disqualification in Rex rabbits?",
        options: [
            "Fur longer than ½ inch",
            "Slightly dirty coat",
            "Minor ear tear",
            "Broken toenail",
        ],
        correctIndex: 0,
        fact: "Rex rabbits must have a plush, short coat not exceeding ½ inch; longer fur is a disqualification. Rex are also judged on commercial body type, condition, and balance in addition to fur.",
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
        fact: "Angoras are judged primarily on wool; incorrect wool texture, density, or insufficient wool is a disqualification.",
    },
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
    {
        prompt: "You are registering a rabbit with a missing toenail. What do you do?",
        options: [
            "Register it anyway",
            "Refuse registration",
            "Ask the breeder to tattoo again",
            "Ignore the fault",
        ],
        correctIndex: 1,
        fact: "Missing toenails are disqualifications for show and registration; the rabbit cannot be registered until the condition is resolved.",
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
        fact: "ARBA requires a complete four-generation pedigree; missing ancestors disqualify registration.",
    },
    {
        prompt: "A rabbit has sore hocks at the time of registration. What is the correct action?",
        options: [
            "Register it anyway",
            "Temporary disqualification—wait until healed",
            "Permanent disqualification",
            "Ignore the condition",
        ],
        correctIndex: 1,
        fact: "Sore hocks are a temporary disqualification; the rabbit may be registered after the condition has healed.",
    },
    {
        prompt: "A rabbit meets the breed standard but has no tattoo. What is the registrar's action?",
        options: [
            "Register it anyway",
            "Require a tattoo before registration",
            "Register with the breeder's signature only",
            "Register with photo ID",
        ],
        correctIndex: 1,
        fact: "A permanent tattoo in the left ear is required for ARBA registration and must be provided before registration.",
    },
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
    {
        prompt: "You are judging a meat pen. One rabbit has excellent meat type but poor uniformity. What is the correct scoring priority?",
        options: [
            "Uniformity first",
            "Meat type first",
            "Fur first",
            "Tattoo first",
        ],
        correctIndex: 1,
        fact: "Per the Standard of Perfection, meat type is the first priority when judging meat pens, followed by condition, uniformity, then fur.",
    },
    {
        prompt: "A Rex rabbit has fur longer than ½ inch. What does the SOP require?",
        options: [
            "Fault",
            "Disqualification",
            "Registration note",
            "Ignore the issue",
        ],
        correctIndex: 1,
        fact: "Rex fur exceeding ½ inch is a disqualification under the SOP; Rex are also judged on commercial body type, condition, and balance in addition to coat.",
    },
    {
        prompt: "A rabbit has an eye color that does not match the Standard for its variety. What does the SOP require?",
        options: [
            "Accept the entry",
            "Disqualification",
            "Fault",
            "Ignore the discrepancy",
        ],
        correctIndex: 1,
        fact: "Incorrect eye color as specified in the Standard of Perfection is a disqualification for that variety.",
    },
    {
        prompt: "The Netherland Dwarf is classified as which type of ARBA class?",
        options: [
            "4-class",
            "6-class",
            "Wool breed",
            "Not recognized",
        ],
        correctIndex: 0,
        fact: "Netherland Dwarfs are one of the smallest breeds and are classified as 4-class.",
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
        fact: "Holland Lops are compact lop-eared breeds and are classified as 4-class.",
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
        fact: "Britannia Petites are a full-arch breed with flyback fur, 4-class, with a maximum weight of 2.5 lb.",
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
        fact: "Tans are a full-arch breed with flyback fur, 4-class, mature weight 4.5-5 lb, shown in Black, Blue, Chocolate, and Lilac.",
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
    // Cylindrical body type — the three recognized cylindrical breeds
    {
        prompt: "Which three breeds have the cylindrical body type?",
        options: [
            "Himalayan, Czech Frosty, Blue Hollister",
            "Himalayan, Dutch, Polish",
            "Rex, Satin, New Zealand",
            "Flemish Giant, American, Beveren",
        ],
        correctIndex: 0,
        fact: "The cylindrical body type is defined by a long, narrow, tube-like body: Himalayan, Czech Frosty, and Blue Hollister.",
    },
    {
        prompt: "Which fur type does the Himalayan have?",
        options: [
            "Flyback",
            "Slow rollback",
            "Wool",
            "Satin",
        ],
        correctIndex: 0,
        fact: "The Himalayan is a cylindrical, 4-class breed with short, fine, silky flyback fur and a mature weight of 2.5–4.5 lb.",
    },
    {
        prompt: "Which varieties are recognized in the Himalayan?",
        options: [
            "Black, Blue, Chocolate, Lilac",
            "Only Black",
            "Golden and Lynx",
            "White, Red, Black",
        ],
        correctIndex: 0,
        fact: "Himalayans are genetically albino with colored points (ears, nose, tail, feet) and come in Black, Blue, Chocolate, and Lilac.",
    },
    {
        prompt: "The Czech Frosty is classified as which type of ARBA class?",
        options: [
            "4-class",
            "6-class",
            "Wool breed",
            "Not recognized",
        ],
        correctIndex: 0,
        fact: "The Czech Frosty is a cylindrical breed with slow-rollback fur, a mature weight of 6.25–8.25 lb, and is 4-class. Its single variety is Frosty.",
    },
    {
        prompt: "What is the surface appearance of the Czech Frosty's coat?",
        options: [
            "Dark sepia-tipped guard hairs giving a dark haze or veil",
            "A lustrous satin sheen",
            "Long woolly fur",
            "Solid jet black with silver ticking",
        ],
        correctIndex: 0,
        fact: "The Czech Frosty shows dark sepia-tipped guard hairs over the coat, creating a dark haze or veil.",
    },
    {
        prompt: "The Blue Hollister is classified as which type of ARBA class?",
        options: [
            "4-class",
            "6-class",
            "Wool breed",
            "Not recognized",
        ],
        correctIndex: 0,
        fact: "The Blue Hollister is a cylindrical breed with slow-rollback fur, a mature weight of 5.5–7.25 lb, and is 4-class. It is only shown in blue.",
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
        fact: "French Angoras are 4-class commercial wool rabbits weighing 7.5-10.5 lb. They have an oval head, erect ears that may have wool only on the tips, and a medium-length, deep, well-rounded body with a curved topline.",
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
    // Compact body type - owner-supplied breed specifications
    {
        topic: "Breeds & Judging",
        studyTrack: "intermediate",
        prompt: "Which body type describes the Lionhead?",
        options: ["Compact", "Commercial", "Full-arch", "Cylindrical"],
        correctIndex: 0,
        fact: "Lionheads are compact, 4-class rabbits with wool and rollback fur, weighing no more than 3.75 lb.",
    },
    {
        topic: "Breeds & Judging",
        studyTrack: "intermediate",
        prompt: "Which Lionhead varieties were listed?",
        options: ["Seal, Siamese Sable, and Tortoise", "Black, Blue, Chocolate, and Lilac", "Golden and Lynx", "Ruby-Eyed White only"],
        correctIndex: 0,
        fact: "The Lionhead has a short, compact, well-rounded body with broad, well-filled shoulders and chest. Its bold head and erect ears are well set, though the ears need not touch.",
    },
    {
        topic: "Breeds & Judging",
        studyTrack: "intermediate",
        prompt: "Which groups are recognized in the Mini Rex?",
        options: ["Self, Shaded, Agouti, Tan, AOV, Broken", "Agouti, Broken, Pointed White, Self, Shaded, Ticked, Wide Band", "Self, Shaded, Agouti, Tan, AOV", "Black, Blue, Chocolate, and Lilac only"],
        correctIndex: 0,
        fact: "Mini Rex are compact, rex-furred, 4-class rabbits. Bucks weigh 3-4.25 lb and does 3.25-4.5 lb; they have a full head close to the shoulders, short close-set erect ears, and a smooth, short, well-developed body.",
    },
    {
        topic: "Breeds & Judging",
        studyTrack: "intermediate",
        prompt: "What body shape is expected in a Mini Lop?",
        options: ["Massive, thick-set, heavily muscled, compact, and balanced like a basketball", "Long, narrow, and tubular", "Long and narrow with a full arch", "Medium length with depth equal to width"],
        correctIndex: 0,
        fact: "Mini Lops are compact, rollback-furred, 4-class rabbits weighing 4.5-6.5 lb. Their head is strong and sturdy; rounded, well-furred ears rise from a strong basal ridge and lop vertically with the opening toward the head.",
    },
    {
        topic: "Breeds & Judging",
        studyTrack: "intermediate",
        prompt: "Which groups are recognized in the Mini Lop?",
        options: ["Agouti, Broken, Pointed White, Self, Shaded, Ticked, Wide Band", "Agouti, Broken, Self, Shaded, Ticked, Wide Band", "Self, Shaded, Agouti, Tan, AOV", "Pointed White and Self only"],
        correctIndex: 0,
        fact: "Mini Lops are compact rabbits with thick, short, straight legs. Their body should look rounded and symmetrical from the top, side, and back, like a basketball with a small head.",
    },
    {
        topic: "Breeds & Judging",
        studyTrack: "intermediate",
        prompt: "What crown and ear carriage are required in a Holland Lop?",
        options: ["A strongly defined crown, with thick rounded ears lopping vertically toward the head", "No noticeable crown, with ears carried low", "A V-shaped crown with erect ears", "Ears that stand straight up"],
        correctIndex: 0,
        fact: "Holland Lops are compact, rollback-furred, 4-class rabbits weighing no more than 4 lb. The head is massive, wide, rounded, and high and close to the shoulders; the short body is massive, well-muscled, compact, and thick set.",
    },
    {
        topic: "Breeds & Judging",
        studyTrack: "intermediate",
        prompt: "What variety, body type, and fur type describe the Dwarf Papillon?",
        options: ["Chocolate, compact, flyback", "Black, full-arch, flyback", "Ruby-Eyed White, compact, wool", "Sable, commercial, rollback"],
        correctIndex: 0,
        fact: "Dwarf Papillons are 4-class, compact, flyback-furred rabbits weighing 2.5-4.25 lb. They have a bold head close to the body, a relatively stocky body with shoulders and hindquarters of equal width, and erect, rounded, well-furred ears.",
    },
    {
        topic: "Breeds & Judging",
        studyTrack: "intermediate",
        prompt: "How is the Standard Chinchilla coat banded?",
        options: ["Dark slate blue base, pearl middle, very narrow black top edge", "Solid black with a white undercolor", "White with black points", "Orange with black stripes"],
        correctIndex: 0,
        fact: "Standard Chinchillas are compact, 4-class rabbits with a medium-full head on a short neck, distinctive black ear lacing, and a compact body with well-developed shoulders and hindquarters.",
    },
    {
        topic: "Breeds & Judging",
        studyTrack: "intermediate",
        prompt: "Which varieties are recognized in the Mini Satin?",
        options: ["Black, Blue, Broken, Chinchilla, Chocolate, Chocolate Agouti, Copper, Himalayan, Opal, Otter, Red, Siamese, Silver Marten, Squirrel, Tortoise, White", "Black, Blue, Chocolate, and Lilac only", "Golden and Lynx only", "Ruby-Eyed White only"],
        correctIndex: 0,
        fact: "Mini Satins are compact, satin-furred, 4-class rabbits with a maximum mature weight of 4.75 lb. They are short and close coupled, with a gradual curve from the base of the ears to the hips and down to the tail.",
    },
    {
        topic: "Breeds & Judging",
        studyTrack: "intermediate",
        prompt: "What body type, fur type, and class describe the Thrianta?",
        options: ["Compact, rollback, 4-class", "Commercial, satin, 6-class", "Full-arch, flyback, 4-class", "Cylindrical, wool, 4-class"],
        correctIndex: 0,
        fact: "Thriantas are compact, rollback-furred, 4-class rabbits with a mature weight of 4-6 lb.",
    },
    {
        topic: "Breeds & Judging",
        studyTrack: "intermediate",
        prompt: "What coat color and eye color identify the Lilac?",
        options: ["Medium dove gray with a delicate pink tint and blue-gray eyes", "Rich sepia brown with brown eyes", "Pure white with pink eyes", "Black with a dark slate undercolor and brown eyes"],
        correctIndex: 0,
        fact: "Lilacs are compact, rollback-furred, 4-class rabbits. Bucks weigh 5.5-7.5 lb and does 6-8 lb; they have a short, well-filled head and moderately short, well-rounded ears.",
    },
    {
        topic: "Breeds & Judging",
        studyTrack: "intermediate",
        prompt: "What coat and eye color identify the Florida White?",
        options: ["Pure white coat with pink eyes", "White with dark eye bands", "White with black points", "Bluish white with black hairs"],
        correctIndex: 0,
        fact: "Florida Whites are compact, flyback-furred, 4-class rabbits weighing 4-6 lb. They have a round full head, stocky erect ears, and a rather short, close-coupled body with a gradual curve to the topline.",
    },
    {
        topic: "Breeds & Judging",
        studyTrack: "intermediate",
        prompt: "Which groups are recognized in the Netherland Dwarf?",
        options: ["Self, Shaded, Agouti, Tan, AOV", "Agouti, Broken, Self, Shaded, Ticked, Wide Band", "Pointed White and Self only", "Black, Blue, Chocolate, and Lilac only"],
        correctIndex: 0,
        fact: "Netherland Dwarfs are compact, rollback-furred, 4-class rabbits weighing no more than 2.5 lb. They have a round head set high and close to the shoulders, short pointed erect ears, and a compact short body.",
    },
    {
        topic: "Breeds & Judging",
        studyTrack: "intermediate",
        prompt: "Which groups are recognized in the English Angora?",
        options: ["Agouti, Pointed White, Self, Shaded, Ticked, Wide Band", "Agouti, Broken, Self, Shaded, Ticked, Wide Band", "Self, Shaded, Agouti, Tan, AOV", "Black, Blue, Chocolate, and Lilac only"],
        correctIndex: 0,
        fact: "English Angoras are compact, wool-furred, 4-class rabbits weighing 5-7.5 lb. Their short, broad head and short ears are abundantly fringed and tasseled with wool; the body is short coupled and compact.",
    },
    {
        topic: "Breeds & Judging",
        studyTrack: "intermediate",
        prompt: "Which groups are recognized in the Jersey Wooly?",
        options: ["AOV, Broken, Self, Shaded, Tan Pattern", "Agouti, Broken, Self, Shaded, Ticked, Wide Band", "Self, Shaded, Agouti, Tan, AOV", "Black, Blue, Chocolate, and Lilac only"],
        correctIndex: 0,
        fact: "Jersey Woolys are compact, wool-furred, 4-class rabbits weighing no more than 3.5 lb. Their bold, rounded head has a short dense wool cap, and their short compact body has a gradually curving topline.",
    },
    {
        topic: "Breeds & Judging",
        studyTrack: "intermediate",
        prompt: "Which varieties are recognized in the Silver?",
        options: ["Black, Brown, and Fawn", "Black, Blue, Chocolate, and Lilac", "Golden and Lynx", "White and Red"],
        correctIndex: 0,
        fact: "Silver rabbits are compact, flyback-furred, 4-class rabbits weighing 4-7 lb. Their body is medium length with a slight taper from hindquarters to shoulders, and the ears are upright with a strong base.",
    },
    {
        topic: "Breeds & Judging",
        studyTrack: "intermediate",
        prompt: "Which Polish varieties are recognized?",
        options: ["Black, Blue, Broken, Chocolate, Lilac, Blue-Eyed White, Ruby-Eyed White", "Black, Blue, Chocolate, and Lilac only", "Golden and Lynx", "White and Red"],
        correctIndex: 0,
        fact: "Polish are compact, 4-class rabbits. Their medium-full short head has full cheeks and muzzle; small ears sit close together and touch all the way up, and their feet and legs are fine boned and short.",
    },
    {
        topic: "Breeds & Judging",
        studyTrack: "intermediate",
        prompt: "Which Havana varieties are recognized?",
        options: ["Black, Blue, Broken, Chocolate, and Lilac", "Black, Blue, Chocolate, and Sable", "Golden and Lynx", "White and Red"],
        correctIndex: 0,
        fact: "Havanas are compact, flyback-furred, 4-class rabbits weighing up to 6.5 lb. They have a short broad head, erect close-set ears, and a compact body with a smooth, continuously curved topline.",
    },
    {
        topic: "Breeds & Judging",
        studyTrack: "intermediate",
        prompt: "How are Dutch markings divided on the body?",
        options: ["White front half and colored rear half with a straight division", "A white body with colored points", "Evenly distributed black hairs on bluish white", "Alternating orange and black sections"],
        correctIndex: 0,
        fact: "Dutch are compact, flyback-furred, 4-class rabbits weighing 3.5-5.5 lb. Their colored head and ears have a white blaze from nose to ears, while the rear half of the body is colored.",
    },
    {
        topic: "Breeds & Judging",
        studyTrack: "intermediate",
        prompt: "Which groups are recognized in the American Fuzzy Lop?",
        options: ["Agouti, Broken, Pointed White, Self, Shaded, Tan Pattern, Wide Band", "Agouti, Broken, Self, Shaded, Ticked, Wide Band", "Self, Shaded, Agouti, Tan, AOV", "Pointed White and Self only"],
        correctIndex: 0,
        fact: "American Fuzzy Lops are compact, wool-furred, 4-class rabbits weighing no more than 4 lb. They have a massive rounded head, vertically lopped ears, and a short, close-coupled, heavily muscled body.",
    },
    {
        topic: "Breeds & Judging",
        studyTrack: "intermediate",
        prompt: "What coat and eye marking identifies the Dwarf Hotot?",
        options: ["Pure white coat with rich dark eye bands", "White with black or chocolate points", "White with an orange cast and silver ticking", "Rich deep red with a slate-blue undercolor"],
        correctIndex: 0,
        fact: "Dwarf Hotots are compact, rollback-furred, 4-class rabbits weighing no more than 3 lb. They have a bold head without a visible neck, dark brown eyes, and a short, compact, well-rounded body.",
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
        fact: "Flemish Giants are a semi-arch (mandolin) breed with rollback fur, 6-class, with bucks 13 lb and over and does 14 lb and over.",
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
        fact: "American rabbits have a mandolin (semi-arch) body type and are classified as 6-class.",
    },
    // Semi-arch (mandolin) body type — breed details
    {
        prompt: "Which fur type does the Flemish Giant have?",
        options: [
            "Rollback",
            "Flyback",
            "Wool",
            "Satin",
        ],
        correctIndex: 0,
        fact: "The Flemish Giant is a semi-arch (mandolin) breed with rollback fur.",
    },
    {
        prompt: "Which colors are recognized in the Flemish Giant?",
        options: [
            "Black, Blue, Fawn, Light Gray, Sandy, Steel Gray, White",
            "Only Black and White",
            "White, Red, Black",
            "Golden and Lynx",
        ],
        correctIndex: 0,
        fact: "Flemish Giants are recognized in seven colors: Black, Blue, Fawn, Light Gray, Sandy, Steel Gray, and White.",
    },
    {
        prompt: "How should the Giant Chinchilla's coat be banded?",
        options: [
            "Dark slate blue base, light pearl middle, narrow black band at the top",
            "Solid jet black throughout",
            "White with black points",
            "Golden with darker shading",
        ],
        correctIndex: 0,
        fact: "The Giant Chinchilla's coat resembles a real chinchilla: dark slate blue at the base, light pearl in the middle, and a narrow black band at the top edge.",
    },
    {
        prompt: "Which variety and fur type define the American breed?",
        options: [
            "Blue and White varieties with flyback fur",
            "Chinchilla only with wool fur",
            "Pointed White with satin fur",
            "Golden and Lynx with rollback fur",
        ],
        correctIndex: 0,
        fact: "The American is a semi-arch (mandolin) breed with flyback fur, shown in Blue and White, mature weight 9-12 lb.",
    },
    {
        prompt: "What is a defining feature of the English Lop's ears?",
        options: [
            "At least 21 inches from tip to tip",
            "Carried erect in a V shape",
            "Short and rounded",
            "Folded flat against the cheeks",
        ],
        correctIndex: 0,
        fact: "English Lop ears are carried low with no noticeable crown and measure at least 21 inches from tip to tip.",
    },
    {
        prompt: "Which color groups are recognized in the English Lop?",
        options: [
            "Agouti, Broken, Self, Shaded, Ticked, Wide Band",
            "Only Self",
            "Pointed White only",
            "Golden and Lynx",
        ],
        correctIndex: 0,
        fact: "English Lops are shown across six color groups: Agouti, Broken, Self, Shaded, Ticked, and Wide Band.",
    },
    {
        prompt: "How are the Beveren's ears carried?",
        options: [
            "In a V shape",
            "Folded and lopped",
            "Erect and pointed forward",
            "Flat along the back",
        ],
        correctIndex: 0,
        fact: "The Beveren is a semi-arch breed with a distinctively curved head and well-furred ears carried in a V shape.",
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
        fact: "Giant Chinchillas are a semi-arch (mandolin) breed with flyback fur, 6-class, with bucks 12-15 lb and does 13-16 lb.",
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
        fact: "Checkered Giants are a full-arch breed with flyback fur, 6-class (buck min 11 lb, doe min 12 lb), shown in Black and Blue.",
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
        fact: "English Lops are a semi-arch breed with flyback fur, 6-class, with ears at least 21 inches tip to tip; bucks 10 lb and over, does 10.5 lb and over.",
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
        fact: "French Lops are 6-class commercial rabbits with rollback fur. Bucks weigh 11 lb and over, does 11.5 lb and over; they have a massive, thick-set, well-muscled body with a gradually curving topline.",
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
        fact: "Satins are 6-class commercial rabbits with satin fur. Bucks weigh 8.5-10.5 lb and does 9-11 lb; their finer hair shaft and more transparent hair shell create the characteristic sheen.",
    },
    {
        // AUTHORITATIVE per owner (breeder): Rex is a 4-CLASS breed. Do NOT change to 6-class.
        prompt: "The Rex is classified as which type of ARBA class?",
        options: [
            "4-class",
            "6-class",
            "Wool breed",
            "Not recognized",
        ],
        correctIndex: 0,
        fact: "Class is a weight category. The Rex is a commercial-type breed classified as 4-class (junior and senior for each sex).",
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
        fact: "Argente Bruns are large silvered breeds, classified as 6-class commercial.",
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
        fact: "Cinnamons are large warm-colored breeds, reminicent of burnt cinnamon toast and classified as 6-class commercial.",
    },
    {
        prompt: "The English Spot is classified as which type of ARBA class?",
        options: [
            "4-class",
            "6-class",
            "Wool breed",
            "Not recognized",
        ],
        correctIndex: 0,
        fact: "English Spots are a full-arch breed with flyback fur, 4-class, mature weight 5-8 lb.",
    },
    {
        prompt: "The Belgian Hare is classified as which type of ARBA class?",
        options: [
            "4-class",
            "6-class",
            "Wool breed",
            "Not recognized",
        ],
        correctIndex: 0,
        fact: "Belgian Hares are a full-arch breed with flyback fur, 4-class, mature weight 6-9.5 lb, carrying the body high off the ground.",
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
        fact: "Blanc de Hotots are large white, black-eye-banded breeds, classified as 6-class, commercial.",
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
        fact: "Beverens are a semi-arch breed with rollback fur, 6-class, recognized in Black, Blue, and White.",
    },
    {
        prompt: "The Rhinelander is classified as which type of ARBA class?",
        options: [
            "4-class",
            "6-class",
            "Wool breed",
            "Not recognized",
        ],
        correctIndex: 0,
        fact: "Rhinelanders are a full-arch breed with flyback fur, 4-class, shown in Black (black and orange) and Blue (blue and fawn) with both colors equally represented.",
    },
    // Full-arch (running) body type — breed details
    {
        prompt: "Which fur type is shared by the full-arch running breeds?",
        options: [
            "Flyback",
            "Rollback",
            "Wool",
            "Satin",
        ],
        correctIndex: 0,
        fact: "The full-arch breeds (Checkered Giant, Belgian Hare, English Spot, Rhinelander, Tan, Britannia Petite) all carry flyback fur.",
    },
    {
        prompt: "Which colors are recognized in the Checkered Giant?",
        options: [
            "Black and Blue",
            "Only Black",
            "White, Red, Black",
            "Golden and Lynx",
        ],
        correctIndex: 0,
        fact: "Checkered Giants are shown in Black and Blue, with a dorsal stripe from the ears to the tail, butterfly nose marking, cheek spots, and eye circles.",
    },
    {
        prompt: "What color is the Belgian Hare's coat?",
        options: [
            "Rich deep red or tan/chestnut with a slate blue undercoat",
            "White with black points",
            "Bluish white with black ticking",
            "Golden with darker shading",
        ],
        correctIndex: 0,
        fact: "The Belgian Hare has a brilliant rich deep red or tan/chestnut coat with a slate blue undercoat, and carries its long body high off the ground.",
    },
    {
        prompt: "Which colors are recognized in the English Spot?",
        options: [
            "Black, Blue, Chocolate, Gold, Gray, Lilac, Tortoise",
            "Only Black and White",
            "White, Red, Black",
            "Golden and Lynx",
        ],
        correctIndex: 0,
        fact: "English Spots are shown in seven colors and marked with nose spots, eye circles, flank spots, and a dorsal stripe from the ears to the tail.",
    },
    {
        prompt: "How many hip spots are preferred on each side of a Rhinelander?",
        options: [
            "8 to 10 spots",
            "1 to 2 spots",
            "No spots",
            "20 or more spots",
        ],
        correctIndex: 0,
        fact: "Rhinelanders prefer 8 to 10 equally colored spots on each hip, not extending above the waistline; extra body spots are a disqualification.",
    },
    {
        prompt: "What eye color pairs with the Rhinelander's black (black and orange) variety?",
        options: [
            "Brown",
            "Blue",
            "Purple",
            "Pink",
        ],
        correctIndex: 0,
        fact: "Brown eyes go with the black-and-orange variety, while blue or purple eyes go with the blue-and-fawn variety.",
    },
    {
        prompt: "Which colors are recognized in the Tan?",
        options: [
            "Black, Blue, Chocolate, Lilac",
            "Only Black",
            "White, Red, Black",
            "Golden and Lynx",
        ],
        correctIndex: 0,
        fact: "Tans are shown in Black, Blue, Chocolate, and Lilac, with eyes encircled in even tan and ears laced inside with rich tan.",
    },
    {
        prompt: "What is the maximum weight for a Britannia Petite?",
        options: [
            "2.5 pounds",
            "4.5 pounds",
            "6 pounds",
            "9 pounds",
        ],
        correctIndex: 0,
        fact: "The Britannia Petite is a full-arch breed with a wedge-shaped head and a maximum weight of 2.5 lb.",
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
    // Commercial body type - owner-supplied breed specifications read from 4H breed flashcards.
    {
        topic: "Breeds & Judging",
        studyTrack: "intermediate",
        prompt: "Which groups are recognized in the Satin Angora?",
        options: [
            "Agouti, Broken, Pointed White, Self, Shaded, Ticked, Wide Band",
            "Agouti, Self, Shaded only",
            "Black, Blue, Chocolate, Lilac only",
            "Golden and Lynx only",
        ],
        correctIndex: 0,
        fact: "Satin Angoras are commercial-type, wool-furred, 4-class rabbits weighing 6.5-9.5 lb. Their oval head sits close to the body, with erect ears that may have plain or slightly tufted tips.",
    },
    {
        topic: "Breeds & Judging",
        studyTrack: "intermediate",
        prompt: "Which varieties are recognized in the Silver Marten?",
        options: ["Black, Blue, Chocolate, Sable", "Black and Blue only", "Golden and Lynx", "White and Red"],
        correctIndex: 0,
        fact: "Silver Martens are commercial-type, flyback-furred, 4-class rabbits. Bucks weigh 6.5-9 lb and does 7-9.5 lb; their markings include eye circles, silver-tipped side hairs, a nape triangle and collar, silver-white inner ears and nostrils, and a silver-white X.",
    },
    {
        topic: "Breeds & Judging",
        studyTrack: "intermediate",
        prompt: "What fur type and body type describe the Rex?",
        options: ["Rex fur and commercial body type", "Wool fur and compact body type", "Flyback fur and full-arch body type", "Rollback fur and semi-arch body type"],
        correctIndex: 0,
        fact: "Rex are 4-class commercial rabbits with rex fur and a mature weight of 7.5-9.5 lb. They have a broad head, erect moderately thick ears, and a medium-length body with well-rounded hips and a well-filled loin, rib, and shoulders.",
    },
    {
        topic: "Breeds & Judging",
        studyTrack: "intermediate",
        prompt: "Where is the deepest sepia brown shading found on an American Sable?",
        options: ["Ears, face, back, legs, and upper side of the tail", "Only on the belly", "Only around the eyes", "Only on the feet"],
        correctIndex: 0,
        fact: "The 4-class American Sable is commercial-type with rollback fur. Its rich sepia-brown saddle fades to a paler shade; the body is medium length, deep, and wide with a smooth, continuously curving topline.",
    },
    {
        topic: "Breeds & Judging",
        studyTrack: "intermediate",
        prompt: "How are Japanese and Magpie Harlequin varieties distinguished?",
        options: ["Japanese is golden fawn or orange with stripes; Magpie is white with stripes", "Japanese is white; Magpie is solid black", "Japanese is blue; Magpie is red", "They are the same variety"],
        correctIndex: 0,
        fact: "Harlequins are 4-class commercial rabbits with flyback fur. Their Japanese and Magpie groups have brindled stripes; black and orange or black and fawn are common color pairings.",
    },
    {
        topic: "Breeds & Judging",
        studyTrack: "intermediate",
        prompt: "What produces the silver appearance of a Champagne d'Argent?",
        options: ["Jet-black hairs evenly distributed through a bluish-white coat", "A white coat with dark points", "Silver-tipped guard hairs only along the sides", "A solid pearl-gray coat"],
        correctIndex: 0,
        fact: "Champagne d'Argents are 6-class commercial rabbits with flyback fur, weighing 9-12 lb. Their dark slate blue undercolor and evenly distributed jet-black hairs create a silver effect from a distance.",
    },
    {
        topic: "Breeds & Judging",
        studyTrack: "intermediate",
        prompt: "How is the American Chinchilla coat colored?",
        options: ["Dark slate blue base, light pearl middle, narrow black top band", "Solid black with a white undercolor", "White with black points", "Orange with black stripes"],
        correctIndex: 0,
        fact: "American Chinchillas are 6-class commercial rabbits weighing 9-12 lb. Their erect ears are close together with narrow jet-black lacing, and their medium-length body has a curved topline.",
    },
    {
        topic: "Breeds & Judging",
        studyTrack: "intermediate",
        prompt: "What is the recognized variety and eye color of the Giant Angora?",
        options: ["Ruby-Eyed White with ruby-red eyes", "Blue-Eyed White with blue eyes", "Black with brown eyes", "Sable with brown eyes"],
        correctIndex: 0,
        fact: "Giant Angoras are 6-class commercial wool rabbits. Bucks weigh 9.5 lb and over, does 10 lb and over; their ears are carried in a close V shape and the tail is straight and well covered with wool.",
    },
    {
        topic: "Breeds & Judging",
        studyTrack: "intermediate",
        prompt: "Which mature weights apply to New Zealand rabbits?",
        options: ["Bucks 9-11 lb; does 10-12 lb", "Bucks 6.5-9 lb; does 7-9.5 lb", "Bucks 8-10 lb; does 9-11 lb", "Bucks 13 lb and over; does 14 lb and over"],
        correctIndex: 0,
        fact: "New Zealands are 6-class commercial rabbits with flyback fur. They have a full head close to the shoulders, medium-thick erect ears, and a well-rounded, medium-length body with a gradually curving topline.",
    },
    {
        topic: "Breeds & Judging",
        studyTrack: "intermediate",
        prompt: "What coat pattern identifies the Cinnamon?",
        options: ["Rust or cinnamon with uniform smoke-gray ticking across the back", "White with a black eye band", "Bluish white with black hairs", "Sable brown fading to a pale saddle"],
        correctIndex: 0,
        fact: "Cinnamons are 6-class commercial rabbits weighing 8.5-11 lb. They have rust lap spots inside the hind legs, a butterfly on the nose and muzzle, and distinctive dark eye circles.",
    },
    {
        topic: "Breeds & Judging",
        studyTrack: "intermediate",
        prompt: "What coat description matches the Crème d'Argent?",
        options: ["White with an orange cast and silver ticking", "White with black points", "Solid cinnamon with smoke-gray ticking", "Jet black with a dark slate undercolor"],
        correctIndex: 0,
        fact: "The Crème d'Argent is a commercial breed with a cream-colored, silver-ticked coat. It has a medium-length body, well-developed shoulders and hindquarters, a rounded back, and strong, straight legs.",
    },
    {
        topic: "Breeds & Judging",
        studyTrack: "intermediate",
        prompt: "What surface color is required for an Argente Brun?",
        options: ["Evenly silvered and frosted chocolate brown", "Deep red with a slate-blue undercolor", "White with a black eye band", "White with black or chocolate points"],
        correctIndex: 0,
        fact: "Argente Bruns are 6-class commercial rabbits with flyback fur, weighing 8-9.5 lb. They have a broad, bold head on a short neck, erect medium-length ears, and a body whose depth approximately equals its width.",
    },
    {
        topic: "Breeds & Judging",
        studyTrack: "intermediate",
        prompt: "Which Palomino varieties are recognized?",
        options: ["Golden and Lynx", "Black and Blue", "Black, Blue, Chocolate, and Lilac", "White and Red"],
        correctIndex: 0,
        fact: "Palominos are 6-class commercial rabbits with flyback fur. Bucks weigh 8-10 lb and does 9-11 lb; their medium-sized, well-rounded body has a smooth, gradual arc to the topline.",
    },
    {
        topic: "Breeds & Judging",
        studyTrack: "intermediate",
        prompt: "What marking distinguishes the Blanc de Hotot?",
        options: ["Dark eye bands on a frosty white coat", "Black or chocolate points", "A butterfly on the nose and muzzle", "Silver-tipped guard hairs along the sides"],
        correctIndex: 0,
        fact: "Blanc de Hotots are 6-class commercial rabbits with rollback fur, weighing 8-11 lb. They have dark brown eyes, V-shaped ears, a thick-set well-rounded body, and strong hind legs.",
    },
    {
        topic: "Breeds & Judging",
        studyTrack: "intermediate",
        prompt: "What combination identifies the Silver Fox coat?",
        options: ["Jet black with a dark slate undercoat and evenly interspersed white-tipped hairs", "Bluish white with evenly distributed black hairs", "White with an orange cast and silver ticking", "Rich sepia brown fading to a pale saddle"],
        correctIndex: 0,
        fact: "Silver Foxes are 6-class commercial rabbits with standing fur. Bucks weigh 9-11 lb and does 10-12 lb; they have a medium-length body with a curved topline and well-filled shoulders, rib section, and hindquarters.",
    },
    // Breed Varieties and Colors
    {
        prompt: "Which color groups are recognized in Mini Rex?",
        options: [
            "Self, Shaded, Agouti, Tan, AOV, Broken",
            "Agouti, Broken, Pointed White, Self, Shaded, Ticked, Wide Band",
            "Self, Shaded, Agouti, Tan, AOV",
            "Black, Blue, Chocolate, and Lilac only",
        ],
        correctIndex: 0,
        fact: "Mini Rex are shown in the Self, Shaded, Agouti, Tan, AOV, and Broken groups.",
    },
    {
        prompt: "Which colors are allowed in Mini Rex?",
        options: [
            "Black, Blue, Chocolate, Lilac, Castor, Chinchilla, Opal, Red, Sable, Seal, Tortoise, White, Broken",
            "Only Black and White",
            "Only Red and White",
            "Only Agouti",
        ],
        correctIndex: 0,
        fact: "Mini Rex come in 13 recognized colors including standard and broken varieties.",
    },
    {
        prompt: "Which group includes the broken New Zealand variety?",
        options: [
            "Broken",
            "Agouti",
            "Shaded",
            "Tan Pattern",
        ],
        correctIndex: 0,
        fact: "New Zealand has Black, Blue, Red, and White self varieties, plus a Broken variety in the Broken group.",
    },
    {
        prompt: "Which colors are recognized in New Zealand?",
        options: [
            "White, Red, Black, Blue, Broken",
            "White and Red only",
            "Only White",
            "Chinchilla, Silver Marten",
        ],
        correctIndex: 0,
        fact: "New Zealand are recognized in White, Red, Black, Blue, and Broken.",
    },
    {
        prompt: "Which color groups are recognized in Holland Lop?",
        options: [
            "Agouti, Broken, Pointed White, Self, Shaded, Tan Pattern, Ticked, Wide Band",
            "Agouti, Broken, Pointed White, Self, Shaded, Ticked, Wide Band",
            "Self, Shaded, Agouti, Tan, AOV, Broken",
            "Black, Blue, Chocolate, and Lilac only",
        ],
        correctIndex: 0,
        fact: "Holland Lops are shown in the Agouti, Broken, Pointed White, Self, Shaded, Tan Pattern, Ticked, and Wide Band groups.",
    },
    {
        prompt: "Which colors are allowed in Holland Lop?",
        options: [
            "Black, Blue, Chocolate, Lilac, Chestnut Agouti, Opal, Chinchilla, Sable Point, Seal, Tortoise, White, Broken",
            "Only Black and White",
            "Only Red and White",
            "Only Agouti",
        ],
        correctIndex: 0,
        fact: "Holland Lops come in 12 recognized colors.",
    },
    {
        prompt: "Which color group are Californians shown in?",
        options: [
            "Pointed White",
            "Agouti",
            "Self",
            "Tan Pattern",
        ],
        correctIndex: 0,
        fact: "Californians belong to the Pointed White group.",
    },
    {
        prompt: "Which point colors are recognized in Californian rabbits?",
        options: [
            "Black and chocolate",
            "White with blue points",
            "Blue and lilac",
            "Red and black",
        ],
        correctIndex: 0,
        fact: "Californians have a white body with black or chocolate points on the ears, nose, feet, and tail.",
    },
    {
        prompt: "Which color group are Flemish Giant varieties shown in?",
        options: [
            "Self",
            "Agouti",
            "Shaded",
            "Broken",
        ],
        correctIndex: 0,
        fact: "Flemish Giant varieties fall in the Self group.",
    },
    {
        prompt: "Which colors are allowed in Flemish Giant?",
        options: [
            "Black, Blue, Fawn, Light Gray, Sandy, Steel Gray, White",
            "Only Black and White",
            "Only Red",
            "Only Chocolate",
        ],
        correctIndex: 0,
        fact: "Flemish Giants come in seven recognized colors.",
    },
    {
        prompt: "Which color groups are recognized in Rex?",
        options: [
            "Self, Agouti, Shaded, Tan, Wideband",
            "Only Agouti",
            "Only Self",
            "None",
        ],
        correctIndex: 0,
        fact: "Rex are shown across five color groups.",
    },
    {
        prompt: "Which colors are allowed in Rex?",
        options: [
            "Black, Blue, Broken Black, Broken Blue, Broken Chocolate, Broken Lilac, Castor, Chinchilla, Lilac, Opal, Red, White",
            "Only Black and White",
            "Only Red",
            "Only Blue",
        ],
        correctIndex: 0,
        fact: "Rex come in 12 recognized colors including broken patterns.",
    },
    {
        prompt: "Which Satin varieties are recognized?",
        options: [
            "Black, Blue, Californian, Chinchilla, Chocolate, Copper, Otter, Red, Siamese, White, and Broken",
            "Black, Blue, Chocolate, Lilac, and White only",
            "Golden, Lynx, and Tortoise only",
            "Ruby-Eyed White only",
        ],
        correctIndex: 0,
        fact: "In Satins, Californian, Chinchilla, Siamese, and White are accepted color varieties. Broken is a group that includes broken-pattern varieties.",
    },
    {
        prompt: "What is unusual about Satin fur?",
        options: [
            "It has a finer-diameter hair shaft and more transparent hair shell",
            "It has no guard hairs",
            "It remains standing when stroked forward",
            "It is made entirely of wool",
        ],
        correctIndex: 0,
        fact: "The Satin's fine hair shaft and transparent hair shell give the coat its lustrous satin appearance. The commercial body is medium length, with depth approximately equal to width throughout.",
    },
    {
        prompt: "Which color groups are recognized in English Angora?",
        options: [
            "Self, Agouti, Shaded, Tan, Wideband",
            "Only Agouti",
            "Only Wool",
            "Only White",
        ],
        correctIndex: 0,
        fact: "English Angoras are shown across five color groups.",
    },
    {
        prompt: "Which colors are allowed in English Angora?",
        options: [
            "Black, Blue, Broken Black, Broken Blue, Broken Chocolate, Broken Lilac, Castor, Chocolate, Lilac, Opal, Red, White",
            "Only Black and White",
            "Only Red",
            "Only Agouti",
        ],
        correctIndex: 0,
        fact: "English Angoras come in 12 recognized colors.",
    },
    {
        prompt: "Which color groups are recognized in Lionhead?",
        options: [
            "Self, Agouti, Shaded, Tan, Wideband",
            "Only Agouti",
            "Only Self",
            "Only Broken",
        ],
        correctIndex: 0,
        fact: "Lionheads are shown across five color groups.",
    },
    {
        prompt: "Which colors are allowed in Lionhead?",
        options: [
            "Black, Blue, Broken Black, Broken Blue, Broken Chocolate, Broken Lilac, Castor, Chocolate, Lilac, Opal, Red, Sable, White",
            "Only Black and White",
            "Only Red",
            "Only Agouti",
        ],
        correctIndex: 0,
        fact: "Lionheads come in 13 recognized colors.",
    },
    {
        prompt: "Which color groups are recognized in French Lop?",
        options: [
            "Agouti, Broken, Self, Shaded, Ticked, Wide Band",
            "Agouti, Self, Shaded, Tan Pattern, Wide Band",
            "Pointed White, Tan Pattern, and Self only",
            "Black, Blue, Chocolate, and Lilac only",
        ],
        correctIndex: 0,
        fact: "French Lops are shown in the Agouti, Broken, Self, Shaded, Ticked, and Wide Band groups. Silvering and Harlequin/Rhinelander patterns are not accepted.",
    },
    {
        prompt: "How are French Lop ears carried?",
        options: [
            "They extend below the chin and lop vertically with the opening toward the head",
            "They are short and erect in a V shape",
            "They lie flat along the back",
            "They are carried low with no noticeable crown",
        ],
        correctIndex: 0,
        fact: "French Lop ears are well furred, rounded, set high on the head, and rise from the crown before lopping vertically. Their legs are thick, short, straight, and parallel to the body.",
    },
    {
        prompt: "Which color groups are recognized in French Angora?",
        options: [
            "Agouti, Broken, Pointed White, Self, Shaded, Ticked, Wide Band",
            "Agouti, Self, Shaded, Tan Pattern, Wide Band",
            "Pointed White and Self only",
            "Black, Blue, Chocolate, and Lilac only",
        ],
        correctIndex: 0,
        fact: "French Angoras are shown in the Agouti, Broken, Pointed White, Self, Shaded, Ticked, and Wide Band groups. They do not have silvered varieties, but Broken varieties are accepted.",
    },
    {
        prompt: "Which color group are Standard Chinchilla varieties shown in?",
        options: [
            "Agouti",
            "Self",
            "Shaded",
            "Tan Pattern",
        ],
        correctIndex: 0,
        fact: "The chinchilla coloration is an agouti-group pattern.",
    },
    {
        prompt: "Which colors are allowed in Standard Chinchilla?",
        options: [
            "Gray with dark ears and nose",
            "Black and White",
            "Red and White",
            "Blue only",
        ],
        correctIndex: 0,
        fact: "Standard Chinchillas have the distinctive chinchilla coloration.",
    },
    {
        prompt: "Which color group are Silver Marten varieties shown in?",
        options: [
            "Tan Pattern",
            "Agouti",
            "Shaded",
            "Self",
        ],
        correctIndex: 0,
        fact: "Silver Martens are a tan-pattern (marten) group.",
    },
    {
        prompt: "Which colors are allowed in Silver Marten?",
        options: [
            "Black, Blue, Chocolate, Lilac with silver ticking",
            "Only Agouti",
            "Only White",
            "Only Red",
        ],
        correctIndex: 0,
        fact: "Silver Martens come in four base colors all with silvering.",
    },
    {
        prompt: "Which color group are Tan varieties shown in?",
        options: [
            "Tan Pattern",
            "Agouti",
            "Self",
            "Shaded",
        ],
        correctIndex: 0,
        fact: "Tans belong to the Tan Pattern group.",
    },
    {
        prompt: "Which colors are allowed in Tan?",
        options: [
            "Black, Blue, Chocolate, Lilac with tan markings",
            "Only Agouti",
            "Only White",
            "Only Red",
        ],
        correctIndex: 0,
        fact: "Tans come in four base colors with distinctive tan markings.",
    },
    {
        prompt: "Which color group are Harlequin varieties shown in?",
        options: [
            "Harlequin",
            "Agouti",
            "Self",
            "Broken",
        ],
        correctIndex: 0,
        fact: "Harlequin is its own pattern group, with Japanese and Magpie varieties.",
    },
    // {
    //     prompt: "Which colors are allowed in Harlequin?",
    //     options: [
    //         "Black, Blue or Chocolate with Orange and Blue, Chocolate and Fawn, Lilac and Fawn",
    //         "Only Black and White",
    //         "Only Red",
    //         "Only Agouti",
    //     ],
    //     correctIndex: 0,
    //     fact: "Japanese varieties are golden fawn or orand with a second color of black or chocolate. Magpie varieties are white with blue, black or chocolate.",
    // },
    // {
    //     prompt: "Which coat varieties are recognized in Silver Fox?",
    //     options: [
    //         "Silver",
    //         "Agouti",
    //         "Self",
    //         "Tan Pattern",
    //     ],
    //     correctIndex: 0,
    //     fact: "Silver Foxes recognize only the Silver variety.",
    // },
    {
        prompt: "Which colors are allowed in Silver Fox?",
        options: [
            "Jet black with dark slate undercoat and evenly interspersed white or white-tipped hairs.",
            "Only Black and White",
            "Only Red",
            "Only Chinchilla",
        ],
        correctIndex: 0,
        fact: "Silver Foxes come in four base colors with distinctive silvering.",
    },
    {
        prompt: "Which color group are Beveren varieties shown in?",
        options: [
            "Self",
            "Agouti",
            "Shaded",
            "Tan Pattern",
        ],
        correctIndex: 0,
        fact: "Beveren varieties fall in the Self group.",
    },
    {
        prompt: "Which colors are allowed in Beveren?",
        options: [
            "Black, Blue, White",
            "Only Agouti",
            "Only Red",
            "Only Chocolate",
        ],
        correctIndex: 0,
        fact: "Beverens come in three recognized colors.",
    },
    // {
    //     prompt: "Which coat varieties are recognized in Champagne d'Argent?",
    //     options: [
    //         "Self",
    //         "Agouti",
    //         "Shaded",
    //         "Broken",
    //     ],
    //     correctIndex: 0,
    //     fact: "Champagne d'Argents recognize only the Self variety.",
    // },
    {
        prompt: "Which colors are allowed in Champagne d'Argent?",
        options: [
            "Bluish white with jet black hairs",
            "Only Black and White",
            "Only Red",
            "Only Blue",
        ],
        correctIndex: 0,
        fact: "Champagne d'Argents only have one variety and that is a bluish white with jet black hairs set evenly throughout the coat, giving it a silver effect when viewed from a distance.",
    },
    {
        prompt: "Which color group are English Spot varieties shown in?",
        options: [
            "Marked (spotted pattern)",
            "Agouti",
            "Self",
            "Broken",
        ],
        correctIndex: 0,
        fact: "English Spots are a marked/spotted pattern group.",
    },
    {
        prompt: "Which colors are allowed in English Spot?",
        options: [
            "Black, Blue, Chocolate, Gold, Gray, Lilac and Tortoise spotting",
            "Only Agouti",
            "Only White",
            "Only Red",
        ],
        correctIndex: 0,
        fact: "English Spots come in seven recognized colors with spotting.",
    },
    // {
    //     prompt: "Which coat varieties are recognized in Belgian Hare?",
    //     options: [
    //         "Agouti",
    //         "Self",
    //         "Shaded",
    //         "Broken",
    //     ],
    //     correctIndex: 0,
    //     fact: "Belgian Hares recognize only the Agouti variety.",
    // },
    {
        prompt: "Which color varieties are allowed in Belgian Hare?",
        options: [
            "Rufus and Tan",
            "Only Black and White",
            "Only Red",
            "Only Blue",
        ],
        correctIndex: 0,
        fact: "Coat color is brilliant, rich, deep red, or a tan or chestnut shade with a slate blue undercoat.",
    },
    {
        prompt: "Which colors are allowed in Dutch?",
        options: [
            "Black, Blue, Chocolate, Gray, Steel, Golden Yellow",
            "Only Agouti",
            "Only White",
            "Only Red",
        ],
        correctIndex: 0,
        fact: "Dutch recognize Black, Blue, Chocolate, Gray (Chestnut Agouti), Steel, and Golden Yellow.",
    },
    {
        prompt: "Which color group are Himalayan varieties shown in?",
        options: [
            "Pointed White",
            "Agouti",
            "Shaded",
            "Tan Pattern",
        ],
        correctIndex: 0,
        fact: "Himalayans are a Pointed White pattern group.",
    },
    {
        prompt: "Which colors are allowed in Himalayan?",
        options: [
            "Black, Blue, Blue-eyed White, Ruby-eyed White, Chocolate, Lilac",
            "Only Black and White",
            "Only Red",
            "Only Agouti",
        ],
        correctIndex: 0,
        fact: "Himalayans come in six recognized colors.",
    },
    {
        prompt: "Which color group are Checkered Giant varieties shown in?",
        options: [
            "Marked (checkered pattern)",
            "Agouti",
            "Self",
            "Broken",
        ],
        correctIndex: 0,
        fact: "Checkered Giants are a marked/checkerboard pattern group.",
    },
    {
        prompt: "Which colors are allowed in Checkered Giant?",
        options: [
            "Black and White, Blue and White checkerboard",
            "Only Agouti",
            "Only White",
            "Only Red",
        ],
        correctIndex: 0,
        fact: "Checkered Giants feature alternating squares of color and white.",
    },
    {
        prompt: "Which color group are Palomino varieties shown in?",
        options: [
            "Golden and Lynx",
            "Agouti",
            "Shaded",
            "Broken",
        ],
        correctIndex: 0,
        fact: "Palominos are shown in two varieties, Golden and Lynx.",
    },
    {
        prompt: "Which varieties are recognized in Palomino?",
        options: [
            "Golden and Lynx",
            "Only Golden",
            "Only White",
            "Only Black",
        ],
        correctIndex: 0,
        fact: "Palominos are recognized in two varieties: Golden and Lynx.",
    },
    // Rabbit anatomy and judging terminology - owner-supplied glossary
    {
        topic: "Breeds & Judging",
        studyTrack: "intermediate",
        prompt: "What does carriage describe in rabbit judging?",
        options: ["How a rabbit carries itself and its ears", "The length of its fur", "Its show class by weight", "The color of its eyes"],
        correctIndex: 0,
        fact: "Carriage is the manner in which a rabbit carries itself: its style or characteristic pose, including the style in which it carries its ears.",
    },
    {
        topic: "Breeds & Judging",
        studyTrack: "intermediate",
        prompt: "What is a dewlap?",
        options: ["A pendulous fold of loose skin hanging from the throat", "A fold of fur over the hock", "The colored area over the back", "A raised ridge at the ear base"],
        correctIndex: 0,
        fact: "A dewlap is a pendulous fold of loose skin hanging from the throat. It is common in does, should be proportional to body size, and is a disqualification in some breeds.",
    },
    {
        topic: "Breeds & Judging",
        studyTrack: "intermediate",
        prompt: "What are tassels?",
        options: ["Longer wool on top of the ears of some wool breeds", "Long guard hairs along the back", "Loose skin beneath the throat", "White fur inside the ears"],
        correctIndex: 0,
        fact: "Tassels are the longer wool on top of the ears of some wool breeds.",
    },
    {
        topic: "Breeds & Judging",
        studyTrack: "intermediate",
        prompt: "Where are a rabbit's cheeks?",
        options: ["The face below the eyes", "The side between the rib and hip", "The upper rounded hindquarters", "The area below the hock"],
        correctIndex: 0,
        fact: "Cheeks are the face below the eyes. In Dutch markings, the rounded colored head markings form the blaze and carry down along the jawline.",
    },
    {
        topic: "Breeds & Judging",
        studyTrack: "intermediate",
        prompt: "What does saddle mean in rabbit judging?",
        options: ["The upper portion of the back; on a Dutch, where white fur ends and colored fur begins on the upper body", "The loose skin below the throat", "The rear joint of the hind leg", "The ear base of a lop"],
        correctIndex: 0,
        fact: "The saddle is the upper portion of the back. For a Dutch, it is the marking where white fur ceases and colored fur begins on the upper part of the body.",
    },
    {
        topic: "Breeds & Judging",
        studyTrack: "intermediate",
        prompt: "What are bell ears?",
        options: ["Ears with large, heavy tips and a distinctive fold", "Short ears carried close together", "Long ears carried low without a crown", "Ears with wool tassels only"],
        correctIndex: 0,
        fact: "Bell ears have large, heavy tips with a distinctive fold.",
    },
    {
        topic: "Breeds & Judging",
        studyTrack: "intermediate",
        prompt: "Where is a rabbit's flank?",
        options: ["The side between the rib and hip above the belly", "The joint attaching the hind leg to the trunk", "The upper rounded hindquarters", "The area from the neck through the sixth rib"],
        correctIndex: 0,
        fact: "The flank is the side of the rabbit between the rib and the hip, above the belly.",
    },
    {
        topic: "Breeds & Judging",
        studyTrack: "intermediate",
        prompt: "What is included in a rabbit's hind leg?",
        options: ["Foot, hock, stifle, and hip joint", "Pastern, shoulder, and loin", "Rib, flank, and rump", "Muzzle, cheek, and neck"],
        correctIndex: 0,
        fact: "The hind leg consists of the foot, hock, stifle (knee), and hip joint. The hip is the joint attaching the hind leg to the trunk.",
    },
    {
        topic: "Breeds & Judging",
        studyTrack: "intermediate",
        prompt: "What is an arch?",
        options: ["The gentle side-profile curvature of the spine from neck or shoulders to the rear", "The colored section above a Dutch's saddle", "The angle of a rabbit's ears", "The fold of loose skin at the throat"],
        correctIndex: 0,
        fact: "An arch is the gentle curvature of the spine extending from the neck or shoulders to the rear in some breeds. It is best seen from the side profile.",
    },
    {
        topic: "Breeds & Judging",
        studyTrack: "intermediate",
        prompt: "What does topline describe?",
        options: ["The side profile of the shoulders, back, and hindquarters", "The colored line from ears to tail", "The underside of the rabbit", "The line where a Dutch saddle begins"],
        correctIndex: 0,
        fact: "Topline is the side profile of the shoulders, back, and hindquarters.",
    },
    {
        topic: "Breeds & Judging",
        studyTrack: "intermediate",
        prompt: "What are the rump and ribs?",
        options: ["Rump: upper rounded hindquarters; ribs: curved sides immediately behind and under the shoulders", "Rump: neck; ribs: hind legs", "Rump: ear base; ribs: cheek markings", "Rump: hock; ribs: shoulder joint"],
        correctIndex: 0,
        fact: "The rump is the upper rounded portion of the hindquarters. The ribs are the curved portions of the sides immediately behind and under the shoulders.",
    },
    {
        topic: "Breeds & Judging",
        studyTrack: "intermediate",
        prompt: "What portion of the body is the shoulder?",
        options: ["From the neck through the sixth rib, including the upper joint of the foreleg", "From the last rib to the hip joint", "From the sixth rib to the rear legs", "The upper rounded hindquarters"],
        correctIndex: 0,
        fact: "The shoulder is the portion of the body from the neck back through the sixth rib and includes the upper joint of the foreleg.",
    },
    {
        topic: "Breeds & Judging",
        studyTrack: "intermediate",
        prompt: "What is the loin?",
        options: ["The portion of the back on each side of the vertebrae from the last rib to the hip joint", "The area below the hock", "The side between the rib and hip", "The front of the chest"],
        correctIndex: 0,
        fact: "The loin is the portion of the back on each side of the vertebrae, from the last rib to the hip joint.",
    },
    {
        topic: "Breeds & Judging",
        studyTrack: "intermediate",
        prompt: "How are the forequarter, midsection, and hindquarter divided?",
        options: ["Forequarter: neck through last rib; midsection: sixth rib to rear legs; hindquarter: last rib rearward", "Forequarter: head only; midsection: ears; hindquarter: tail only", "Forequarter: shoulders only; midsection: loin only; hindquarter: feet only", "They are all names for the same area"],
        correctIndex: 0,
        fact: "The forequarter runs from the neck through the last rib. The midsection runs from the sixth rib to the rear legs. The hindquarter begins at the last rib and includes the loin, hips, hind legs, and rump.",
    },
    {
        topic: "Breeds & Judging",
        studyTrack: "intermediate",
        prompt: "What are the back, neck, and muzzle?",
        options: ["Back: top of shoulders, loins, and hindquarters; neck: connects head to body; muzzle: lower face and nose", "Back: belly; neck: hip; muzzle: ear base", "Back: tail; neck: shoulder; muzzle: dewlap", "They are all marking terms"],
        correctIndex: 0,
        fact: "The back is the top portion of the shoulders, loins, and hindquarters. The neck connects the head to the body; on a Dutch, it also names a wedge-shaped collar marking behind the ears. The muzzle is the lower part of the face and nose.",
    },
    {
        topic: "Breeds & Judging",
        studyTrack: "intermediate",
        prompt: "What are the hock, pastern, and stifle?",
        options: ["Hock: weight-bearing foot area; pastern: ankle/area below it; stifle: knee joint", "Hock: hip; pastern: shoulder; stifle: ear base", "Hock: muzzle; pastern: cheek; stifle: rump", "They are all names for the tail"],
        correctIndex: 0,
        fact: "The hock is the area of the foot that carries the rabbit's weight. The pastern is the ankle and the portion below it; on the rear leg, this is below the hock. The stifle is the knee joint.",
    },
    {
        topic: "Breeds & Judging",
        studyTrack: "intermediate",
        prompt: "What is a crown on a lop-eared rabbit?",
        options: ["A strong basal ridge of cartilage at the top of the head that forms the ear base", "A fold of loose skin below the throat", "A marking on the Dutch's back", "A ring of color around the eye"],
        correctIndex: 0,
        fact: "The crown is a strong basal ridge of cartilage at the top of the head, forming the ear base on some lop-eared breeds.",
    },
    {
        topic: "Breeds & Judging",
        studyTrack: "intermediate",
        prompt: "Where are rabbit dewclaws found?",
        options: ["On the inside of the front legs only", "On the inside of all four legs", "Only on the hind legs", "At the tip of both ears"],
        correctIndex: 0,
        fact: "Dewclaws are on the inside of the front legs and can help with digging, burrowing, and scratching. Rabbits do not have dewclaws on their hind legs.",
    },
    // Rabbit terms - owner-supplied glossary
    {
        topic: "Breeds & Judging",
        studyTrack: "intermediate",
        prompt: "What is a fault in rabbit judging?",
        options: ["A deviation from perfection or a physical imperfection", "An automatic disqualification", "A required marking", "A type of coat"],
        correctIndex: 0,
        fact: "A fault is a deviation from perfection or a physical imperfection. A fault may reduce a score without necessarily being a disqualification.",
    },
    {
        topic: "Husbandry",
        studyTrack: "junior",
        prompt: "What are a buck and a doe?",
        options: ["An intact male and an intact female rabbit", "A young rabbit and an adult rabbit", "A rabbit with long fur and one with short fur", "A show rabbit and a pet rabbit"],
        correctIndex: 0,
        fact: "A buck is an intact male rabbit. A doe is an intact female rabbit.",
    },
    {
        topic: "ARBA Procedures",
        studyTrack: "registrar",
        prompt: "What does a tattoo identify on a rabbit?",
        options: ["A permanent identification mark; a right-ear tattoo indicates ARBA registration", "A temporary color mark on the coat", "The rabbit's body type", "Its age class"],
        correctIndex: 0,
        fact: "A tattoo is a permanent identification mark placed in the left ear or both ears. A tattoo in the right ear indicates an ARBA-registered rabbit.",
    },
    {
        topic: "Husbandry",
        studyTrack: "junior",
        prompt: "What do lactate and kindle mean?",
        options: ["Produce milk and give birth", "Grow fur and shed fur", "Mate and wean", "Tattoo and register"],
        correctIndex: 0,
        fact: "Lactate means to produce milk. Kindle means the act of giving birth by rabbits.",
    },
    {
        topic: "ARBA Procedures",
        studyTrack: "registrar",
        prompt: "What information does a pedigree record?",
        options: ["Ancestors, birth dates, and details such as color, weight, and registration numbers", "Only a rabbit's current weight", "Only the sire's name", "Only show wins"],
        correctIndex: 0,
        fact: "A pedigree is a genealogy of male and female ancestors, showing the rabbit's parents, grandparents, great-grandparents, dates of birth, and often color, weight, and registration information.",
    },
    {
        topic: "Husbandry",
        studyTrack: "intermediate",
        prompt: "What is a fryer or single fryer market rabbit?",
        options: ["A rabbit under 10 weeks old weighing 3.5-5.5 lb", "A rabbit under 6 months old weighing 5.5-9 lb", "A rabbit over 6 months old weighing over 8 lb", "Any rabbit raised for breeding"],
        correctIndex: 0,
        fact: "A fryer, also called a single fryer, is a market rabbit under 10 weeks of age weighing at least 3.5 lb and no more than 5.5 lb.",
    },
    {
        topic: "Breeds & Judging",
        studyTrack: "intermediate",
        prompt: "What is a white toenail?",
        options: ["A nail without pigment that shows the pink cast of the blood vessel", "A nail with a white tip and black base", "A nail that is broken or split", "A disqualifying nail color in every breed"],
        correctIndex: 0,
        fact: "A white toenail has no pigmentation and shows only the pink cast of the blood vessel.",
    },
    {
        topic: "Husbandry",
        studyTrack: "junior",
        prompt: "What can the term breeder mean?",
        options: ["A person raising rabbits to a standard, or a rabbit used primarily to produce offspring", "Only an ARBA registrar", "Only a male rabbit", "A market-class rabbit"],
        correctIndex: 0,
        fact: "A breeder can be a person who raises a breed or variety meeting the Standard of Perfection, or a rabbit used primarily to produce offspring.",
    },
    {
        topic: "Breeds & Judging",
        studyTrack: "intermediate",
        prompt: "What do breed and purebred mean?",
        options: ["A breed reproduces its distinctive traits; purebred describes rabbits meeting breed requirements for at least three generations", "They both mean any mixed-breed rabbit", "They are names for color groups", "They describe market classes only"],
        correctIndex: 0,
        fact: "A breed is a class of domestic rabbits that reproduces distinctive characteristics such as fur, markings, shape, and size. Purebred is used for rabbits approximating their breed standard for at least three generations.",
    },
    {
        topic: "Genetics",
        studyTrack: "intermediate",
        prompt: "What is a mutation?",
        options: ["A sudden physical change caused by an altered gene", "A temporary condition from shedding", "A normal age division", "A marking fault"],
        correctIndex: 0,
        fact: "A mutation is a sudden change in a physical characteristic caused by an alteration in a gene. Rex and Satin are well-known mutations affecting fur structure.",
    },
    {
        topic: "Husbandry",
        studyTrack: "intermediate",
        prompt: "Which market class describes a roaster?",
        options: ["Under 6 months old and 5.5-9 lb", "Under 10 weeks old and 3.5-5.5 lb", "Over 6 months old and over 8 lb", "Any senior breeding rabbit"],
        correctIndex: 0,
        fact: "A roaster is a rabbit under 6 months of age weighing between 5.5 and 9 lb.",
    },
    {
        topic: "Husbandry",
        studyTrack: "intermediate",
        prompt: "Which market class describes a stewer?",
        options: ["Over 6 months old and over 8 lb", "Under 10 weeks old and 3.5-5.5 lb", "Under 6 months old and 5.5-9 lb", "Any rabbit under 3 months old"],
        correctIndex: 0,
        fact: "A stewer is a rabbit over 6 months of age and over 8 lb.",
    },
    {
        topic: "Breeds & Judging",
        studyTrack: "intermediate",
        prompt: "What does definition mean when judging color?",
        options: ["Sharpness and clarity of a color break or contrast between colors", "The weight limit for a class", "The rabbit's ear carriage", "The amount of wool on the ears"],
        correctIndex: 0,
        fact: "Definition means the sharpness and clarity of a color break on a hair shaft, such as ring color in agouti fur, and the contrast between two or more colors.",
    },
    {
        topic: "Breeds & Judging",
        studyTrack: "intermediate",
        prompt: "What does prime condition mean?",
        options: ["Ideal condition of flesh and coat", "A rabbit under 3 months old", "A rabbit ready for registration", "A rabbit with a permanent tattoo"],
        correctIndex: 0,
        fact: "A rabbit in prime condition exhibits ideal flesh and coat condition.",
    },
    {
        topic: "Husbandry",
        studyTrack: "junior",
        prompt: "What is an adult rabbit?",
        options: ["A mature rabbit of breeding age", "Any rabbit over 10 weeks old", "A rabbit in the intermediate class", "A rabbit with a pedigree"],
        correctIndex: 0,
        fact: "An adult is a mature rabbit of breeding age.",
    },
    {
        topic: "Breeds & Judging",
        studyTrack: "intermediate",
        prompt: "What does mandolin describe?",
        options: ["A semi-arch body with an arch beginning behind the shoulders", "A compact body with no arch", "A full-arch body with long legs", "A cylindrical body with a flat topline"],
        correctIndex: 0,
        fact: "Mandolin describes the semi-arch body shape, whose arch begins at the back of the shoulders rather than at the nape of the neck.",
    },
    {
        topic: "Breeds & Judging",
        studyTrack: "intermediate",
        prompt: "How do group and variety differ?",
        options: ["A group is a broad color-pattern classification; a variety is a color division within a breed or group", "They are exactly the same thing", "A group is a body type; a variety is a fur type", "A group is an age class; a variety is a weight class"],
        correctIndex: 0,
        fact: "A group is broader than a variety and is usually applied to color-pattern groupings. A variety is a division within a breed or group determined by color.",
    },
    {
        topic: "Breeds & Judging",
        studyTrack: "intermediate",
        prompt: "Which rabbits may show in an intermediate class?",
        options: ["Rabbits 6 to under 8 months old in eligible 6-class breeds", "Any rabbit under 6 months old", "Any rabbit 8 months or older", "Only 4-class breed rabbits"],
        correctIndex: 0,
        fact: "Intermediate is used only in 6-class breeds with a minimum ideal senior weight of 9 lb or more. It includes rabbits 6 months to under 8 months old, subject to breed-standard weights.",
    },
    {
        topic: "Breeds & Judging",
        studyTrack: "intermediate",
        prompt: "When is a rabbit a senior?",
        options: ["At 6 months in 4-class breeds, or 8 months in 6-class breeds", "At 3 months in every breed", "At 6 months in every breed", "Only after registration"],
        correctIndex: 0,
        fact: "A senior is 6 months or older in 4-class breeds and 8 months or older in 6-class breeds, subject to any minimum senior weight in the breed standard.",
    },
    {
        topic: "Breeds & Judging",
        studyTrack: "junior",
        prompt: "What are junior and pre-junior rabbits?",
        options: ["Junior: under 6 months; pre-junior: under 3 months when that class is allowed", "Junior: 6-8 months; pre-junior: 8 months or older", "Junior: any adult; pre-junior: any fryer", "They are both market classes"],
        correctIndex: 0,
        fact: "A junior is under 6 months old. A pre-junior is under 3 months old and can be shown only when the breed's showroom classes specifically allow it, separately by sex and variety.",
    },
    {
        topic: "Breeds & Judging",
        studyTrack: "intermediate",
        prompt: "What does type mean in a rabbit breed standard?",
        options: ["Physical conformation or structure unique to a recognized breed", "A color variety", "A weight class", "A permanent identification mark"],
        correctIndex: 0,
        fact: "Type is the physical conformation or structure unique to each recognized breed.",
    },
    {
        topic: "Husbandry",
        studyTrack: "intermediate",
        prompt: "What is gestation?",
        options: ["The period from conception to birth, usually about 31 days", "The period from weaning to maturity", "The act of producing milk", "The process of registration"],
        correctIndex: 0,
        fact: "Gestation is the length of time between conception and birth, usually about 31 days in rabbits.",
    },
    {
        topic: "Genetics",
        studyTrack: "intermediate",
        prompt: "What is a strain?",
        options: ["A genetically related bloodline with heritable distinguishing traits", "A temporary illness", "A market class", "A color fault"],
        correctIndex: 0,
        fact: "A strain is a genetically related bloodline with distinguishable traits, such as type, color, or coat, and the ability to pass those traits to offspring.",
    },
    // Coat and fur terminology - owner-supplied glossary
    {
        topic: "Breeds & Judging",
        studyTrack: "intermediate",
        prompt: "How do rollback and flyback coats differ?",
        options: ["Rollback returns gradually; flyback returns quickly after being stroked toward the shoulders", "Rollback stands upright; flyback is wool", "Rollback has no guard hairs; flyback has long guard hairs", "They are the same fur type"],
        correctIndex: 0,
        fact: "Rollback fur returns gradually to normal after being stroked from hindquarters to shoulders. Flyback fur quickly returns to its smooth, normal position after the same stroke.",
    },
    {
        topic: "Breeds & Judging",
        studyTrack: "intermediate",
        prompt: "What do density, texture, and coat describe?",
        options: ["Fur-fiber quantity, the feel of fur, and the rabbit's fur covering", "Weight, body shape, and ear position", "Color group, variety, and class", "Age, sex, and pedigree"],
        correctIndex: 0,
        fact: "Density is the number of fur fibers in an area. Texture is the tactile surface characteristic or feel of fur. A coat is the fur covering of a rabbit.",
    },
    {
        topic: "Breeds & Judging",
        studyTrack: "intermediate",
        prompt: "What is a pelt?",
        options: ["The hide and fur of an animal after removal", "The undercoat only", "A type of ear carriage", "A permanent identification mark"],
        correctIndex: 0,
        fact: "A pelt is the hide and fur of an animal after it has been removed.",
    },
    {
        topic: "Breeds & Judging",
        studyTrack: "intermediate",
        prompt: "What makes rex fur distinctive?",
        options: ["Guard hairs are upright and equal to the regular fur, creating an even coat", "Guard hairs are longer than all other fur", "The coat is entirely wool", "It has a transparent outer hair shell"],
        correctIndex: 0,
        fact: "Rex is a genetic recessive variation in which the guard hairs are upright and equal in length to the regular fur. Rex guard hairs should not protrude beyond the undercoat.",
    },
    {
        topic: "Husbandry",
        studyTrack: "junior",
        prompt: "What is a molt?",
        options: ["Natural shedding of fur", "A permanent coat-color change", "A rabbit giving birth", "A way to measure body depth"],
        correctIndex: 0,
        fact: "A molt is the natural shedding of fur.",
    },
    {
        topic: "Husbandry",
        studyTrack: "junior",
        prompt: "What are mats or matted fur?",
        options: ["Areas of wool or fur entangled in a thick mass", "Loose fur from a normal molt", "Long guard hairs on a Rex", "A coat with high density"],
        correctIndex: 0,
        fact: "Mats are areas of entangled wool or fur. Matted means wool or fur is entangled in a thick mass.",
    },
    {
        topic: "Breeds & Judging",
        studyTrack: "intermediate",
        prompt: "What is the job of a guard hair?",
        options: ["It protects the undercoat and gives the coat resilience", "It produces wool", "It determines a rabbit's age class", "It causes a satin sheen"],
        correctIndex: 0,
        fact: "Guard hairs are the longer, coarser, protruding hairs that protect the undercoat and give a coat wearing quality and resilience. In Rex fur, they ideally match the undercoat length rather than protruding.",
    },
    {
        topic: "Breeds & Judging",
        studyTrack: "intermediate",
        prompt: "What do glossy, luster, and sheen describe?",
        options: ["The natural reflection, brightness, and brilliance of healthy fur", "The thickness of wool only", "The length of guard hairs", "A coat-color fault"],
        correctIndex: 0,
        fact: "Glossy describes natural reflection, luster, or brightness in healthy fur. Luster is the brightness and brilliance of fur. Sheen is the bright luster characteristic of the satin mutation.",
    },
    {
        topic: "Breeds & Judging",
        studyTrack: "intermediate",
        prompt: "What do condition and finish mean?",
        options: ["Overall health, cleanliness, fur, and grooming; the desired perfection of coat, color, and flesh", "Only the rabbit's weight and age", "A color group and a variety", "The undercoat and guard-hair balance"],
        correctIndex: 0,
        fact: "Condition is a rabbit's overall physical state in relation to health, cleanliness, fur, and grooming. Finish is the desired degree of perfection in condition, including a fully prime coat, color, and flesh.",
    },
    {
        topic: "Breeds & Judging",
        studyTrack: "intermediate",
        prompt: "What is undercolor or base color?",
        options: ["The color at the base of the fur shaft next to the skin", "The color at the tip of the guard hair", "The white portion of a broken pattern", "The color around a rabbit's eye"],
        correctIndex: 0,
        fact: "Undercolor, also called base color, is the color at the base of the fur shaft next to the skin.",
    },
    {
        topic: "Breeds & Judging",
        studyTrack: "intermediate",
        prompt: "What is plush fur?",
        options: ["Dense, fine hair with a very soft feel", "Long wool with prominent tassels", "Coarse guard hairs that stand upright", "Fur that quickly returns when stroked"],
        correctIndex: 0,
        fact: "Plush describes dense, fine hair with a very soft feel and is often used to describe Rex fur.",
    },
    {
        topic: "Breeds & Judging",
        studyTrack: "intermediate",
        prompt: "What are wool and undercoat?",
        options: ["Wool is judged by balanced guard hair and underwool; undercoat is short fur beneath guard hairs", "Wool and undercoat are the same as flyback fur", "Wool is only the coat on the ears", "Undercoat is the long outer hair"],
        correctIndex: 0,
        fact: "For wool breeds, the balance of guard hairs and underwool is judged by density, texture, and length. Undercoat is short fur partly concealed by longer, coarser guard hairs.",
    },
    {
        topic: "Breeds & Judging",
        studyTrack: "intermediate",
        prompt: "What makes standing fur unique?",
        options: ["It remains upright after a stroke from rump to head and returns only when stroked from head to rump", "It instantly lies smooth after every stroke", "It has no undercoat", "It is a wool-only coat"],
        correctIndex: 0,
        fact: "Standing fur is unique to the Silver Fox. It is long and dense, remains upright when stroked from rump toward head, and returns to normal when stroked from head toward rump.",
    },
    {
        topic: "Breeds & Judging",
        studyTrack: "intermediate",
        prompt: "What can depth describe in rabbits?",
        options: ["Body measurement from topline to lowest body point, or color extension down a hair shaft", "Only the length of a rabbit's ears", "Only the density of its fur", "The distance from hip to tail"],
        correctIndex: 0,
        fact: "Depth can mean the measurement straight down from any point on the topline to the lowest portion of the body, or the extension of color down the hair shaft.",
    },
    {
        topic: "Breeds & Judging",
        studyTrack: "intermediate",
        prompt: "What causes the satin sheen?",
        options: ["A glass-like translucent guard-hair shell that reflects light", "An absence of guard hairs", "Long dense wool", "A slow rollback coat"],
        correctIndex: 0,
        fact: "Satin is a mutation that increases translucency of the outer hair shell, allowing pigment to show more clearly and reflect more light. Its sheen is the principal feature of this mutation.",
    },
    // Health and disqualification terminology - owner-supplied glossary
    {
        topic: "Health & Biosecurity",
        studyTrack: "senior",
        prompt: "What is mastitis?",
        options: ["Inflammation of one or more mammary glands", "Natural shedding of fur", "A fold of loose throat skin", "A color fault"],
        correctIndex: 0,
        fact: "Mastitis is inflammation of one or more mammary glands and is a disqualification from competition.",
    },
    {
        topic: "Breeds & Judging",
        studyTrack: "senior",
        prompt: "What is simple malocclusion?",
        options: ["Upper and lower incisors meet without an overbite", "Upper incisors overlap lower incisors normally", "A rabbit's ears fold inward", "A slight curve in the spine"],
        correctIndex: 0,
        fact: "Simple malocclusion occurs when the top and bottom incisors meet evenly without the upper incisors overlapping the lower incisors. It is a disqualification from competition.",
    },
    {
        topic: "Health & Biosecurity",
        studyTrack: "senior",
        prompt: "What are sore hocks?",
        options: ["Bruised areas under the hocks that can become infected or abscessed", "A parasite living in the ear", "A fracture of the hip joint", "A white opaque eye lens"],
        correctIndex: 0,
        fact: "Sore hocks are bruised areas under the hocks that may become infected or abscessed. They are not considered a disease.",
    },
    {
        topic: "Breeds & Judging",
        studyTrack: "senior",
        prompt: "What is splay leg?",
        options: ["Underdeveloped limb support that spreads the legs outward", "A tail permanently bent to one side", "A split opening in the penis", "A narrow protruding breastbone"],
        correctIndex: 0,
        fact: "Splay leg occurs when underdeveloped muscles and ligaments supporting the limbs cause the legs to spread outward. It may be hereditary and is a non-protestable disqualification from competition.",
    },
    {
        topic: "Breeds & Judging",
        studyTrack: "registrar",
        prompt: "What is a split penis?",
        options: ["A large opening extending more than halfway along the shaft", "A minor scratch on the genital area", "A normal doe's genital opening", "A fold of loose throat skin"],
        correctIndex: 0,
        fact: "A split penis is a disqualification in which a large opening extends more than halfway up or down the shaft. The shaft may splay open and can resemble a doe's genitalia.",
    },
    {
        topic: "Breeds & Judging",
        studyTrack: "intermediate",
        prompt: "What is a disqualification from competition?",
        options: ["A defect, deformity, or blemish making a rabbit ineligible for competition or registration", "Any small deviation that lowers a score", "A preferred show characteristic", "A temporary grooming choice"],
        correctIndex: 0,
        fact: "A disqualification is one or more defects, deformities, or blemishes that render a rabbit ineligible for competition or registration.",
    },
    {
        topic: "Breeds & Judging",
        studyTrack: "senior",
        prompt: "What is a wry tail?",
        options: ["A tail permanently bent, carried, or twisted to one side", "A tail with a white tip", "A tail carried straight in line with the spine", "A tail covered in wool"],
        correctIndex: 0,
        fact: "A wry tail is an abnormal tail permanently bent, carried, or twisted to one side. A corkscrew tail is a form of wry tail.",
    },
    {
        topic: "Breeds & Judging",
        studyTrack: "senior",
        prompt: "What is pigeon breast?",
        options: ["A narrow chest with a protruding V-shaped breastbone", "A broad, filled chest", "A deep firm loin", "A pointed muzzle"],
        correctIndex: 0,
        fact: "Pigeon breast is a narrow chest with a protruding V-shaped breastbone and is a non-protestable disqualification from competition.",
    },
    {
        topic: "Health & Biosecurity",
        studyTrack: "senior",
        prompt: "What is a hernia?",
        options: ["A protrusion of an organ or other viscera through its containing wall", "A coat with entangled fur", "An opaque lens in the eye", "A natural shedding of fur"],
        correctIndex: 0,
        fact: "A hernia is a protrusion of an organ or other viscera through the wall or cavity containing it. It can occur near the abdomen, umbilicus, or genitals and is a disqualification from competition.",
    },
    {
        topic: "Health & Biosecurity",
        studyTrack: "senior",
        prompt: "What are parasites, lice, and mites?",
        options: ["Organisms that live on or in a host; lice and mites can infest rabbits", "Types of rabbit fur", "Normal color-pattern groups", "Showroom age classes"],
        correctIndex: 0,
        fact: "A parasite lives on or within a host animal. Lice are sluggish, blood-sucking insects; mites are tiny pests that may appear as dandruff, often around the back of the neck. Parasites are disqualifications from competition.",
    },
    {
        topic: "Health & Biosecurity",
        studyTrack: "senior",
        prompt: "What are pinworms?",
        options: ["Small worms about one-quarter inch long found on or around the anus", "Mites found inside the ears", "A type of caked teat", "A form of malocclusion"],
        correctIndex: 0,
        fact: "Pinworms are small worms approximately one-quarter inch long that may be found on or around the anus.",
    },
    {
        topic: "Health & Biosecurity",
        studyTrack: "senior",
        prompt: "What are dead tail and deviated spine?",
        options: ["A hard brittle tail from circulation loss; vertebrae that are deformed or misaligned", "A tail with a white tip; a normal topline", "Two types of coat color", "Normal age changes"],
        correctIndex: 0,
        fact: "Dead tail is hard and brittle because of lost circulation and is not a disqualification. A deviated spine has deformed or misaligned vertebrae, often detected by gentle topline palpation, and is a disqualification from competition.",
    },
    {
        topic: "Health & Biosecurity",
        studyTrack: "senior",
        prompt: "What is a caked teat or breast?",
        options: ["A swollen, hard, milk-filled mammary gland caused by excess milk production", "A scabby ear caused by mites", "An inflamed eye with discharge", "A coat with thick mats"],
        correctIndex: 0,
        fact: "A caked teat or breast is a swollen, hard, milk-filled mammary gland caused by excessive milk production.",
    },
    {
        topic: "Health & Biosecurity",
        studyTrack: "senior",
        prompt: "What is ringworm?",
        options: ["Hair loss in circumscribed patches, usually on the head", "A small worm near the anus", "A hard brittle tail", "A white opaque eye lens"],
        correctIndex: 0,
        fact: "Ringworm causes hair loss in circumscribed patches, usually on the head but sometimes elsewhere. It excludes a rabbit from competition until healed.",
    },
    {
        topic: "Breeds & Judging",
        studyTrack: "intermediate",
        prompt: "What are peg teeth?",
        options: ["Small residual incisors just behind the normal upper incisors", "Incisors that meet with no overlap", "A discolored toenail", "Small growths on the ear"],
        correctIndex: 0,
        fact: "Peg teeth are small residual incisors just behind the normal upper incisors. The term is sometimes incorrectly used for budding teeth.",
    },
    {
        topic: "Health & Biosecurity",
        studyTrack: "senior",
        prompt: "What are an abscess and purulent discharge?",
        options: ["A localized infection-related swelling; a white pus discharge", "A normal fur molt; a healthy eye reflection", "A body type; a color variety", "A pregnancy sign; a pedigree record"],
        correctIndex: 0,
        fact: "An abscess or boil is a localized infection-related inflammation that may cause swelling, heat, redness, or pus. Purulent discharge is white pus from the nose or an abscess. Both are disqualifications from competition.",
    },
    {
        topic: "Health & Biosecurity",
        studyTrack: "senior",
        prompt: "What are weepy eye, cataract, and entropion?",
        options: ["Eye discharge, an opaque lens, and an inward-folding eyelid", "Three types of coat texture", "Three body faults of the legs", "Three market classes"],
        correctIndex: 0,
        fact: "Weepy eye is abnormal eye discharge that mats the area below the eye and is disqualifying if combined with conjunctivitis. A cataract is an opaque or white lens. Entropion is an inward-folding eyelid that can injure the eye; cataract and entropion are disqualifications from competition.",
    },
    {
        topic: "Breeds & Judging",
        studyTrack: "intermediate",
        prompt: "What is a blemish?",
        options: ["Any defect or fault that detracts from appearance", "A required Dutch marking", "A healthy coat sheen", "A normal rabbit color group"],
        correctIndex: 0,
        fact: "A blemish is any defect or fault that detracts from a rabbit's appearance.",
    },
    {
        topic: "Health & Biosecurity",
        studyTrack: "senior",
        prompt: "What is wry neck?",
        options: ["Head tilt with loss of balance", "A bent or twisted tail", "A narrow protruding breastbone", "A split opening in the penis"],
        correctIndex: 0,
        fact: "Wry neck is head tilt with loss of balance when the balance center in the ear or brain is disturbed. Possible causes include ear infection, E. cuniculi, head injury, liver disease, or dietary imbalance.",
    },
    {
        topic: "Health & Biosecurity",
        studyTrack: "senior",
        prompt: "What conditions can be caused by mites?",
        options: ["Mange on the skin and an inflamed, scabby ear condition", "Malocclusion and peg teeth", "Caked teat and mastitis", "Cataract and entropion"],
        correctIndex: 0,
        fact: "Mange is a skin disease caused by parasitic mites and may cause itching, dandruff, lesions, scabs, hair loss, and disqualification. Ear mites cause an inflamed, scabby condition inside the ear and are a disqualification from competition.",
    },
    {
        topic: "Health & Biosecurity",
        studyTrack: "senior",
        prompt: "What are tumor, deviated sternum, cold, and vent disease?",
        options: ["A tissue growth, irregular breastbone, respiratory infection, and venereal rabbit disease", "Four types of fur", "Four show classes", "Four color groups"],
        correctIndex: 0,
        fact: "A tumor is an abnormal tissue growth. A deviated sternum is an irregular breastbone, often a lower-rib-cage lump or cone-shaped protrusion. A cold may include repeated sneezing and white nasal discharge. Vent disease affects both sexes and may cause scabby, reddened genitalia with pus. Each is a disqualification from competition.",
    },
];

/* Legacy controller retained below for reference while the study controller is initialized after it. */
/*
function pickRandomQuestions(pool, count) {
    const copy = [...pool];
    for (let i = copy.length - 1; i > 0; i -= 1) {
        const j = Math.floor(Math.random() * (i + 1));
        [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy.slice(0, Math.min(count, copy.length));
}

function setRandomBackground() {
    const backgrounds = globalThis.RABBIT_WALLPAPERS;
    const background = backgrounds[Math.floor(Math.random() * backgrounds.length)];
    document.body.style.setProperty("--game-background", `url("${background}")`);
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
const feedback = document.getElementById("feedback");
const score = document.getElementById("score");
const nextButton = document.getElementById("next");
const finishedButton = document.getElementById("finished");
const exitButton = document.getElementById("exit");
const statsElement = document.getElementById("stats");
const summarySection = document.getElementById("summary");
const recapPanel = document.getElementById("recap-panel");
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
*/

const TOPICS = ["Husbandry", "Health & Biosecurity", "Genetics", "ARBA Procedures", "Breeds & Judging"];
const DEFAULT_STATS = { bestScore: 0, gamesPlayed: 0, history: [], misses: [], recentQuestionIds: [], topicResults: {} };
const STORAGE_KEY = "rabbitHusbandryStudyStats";
const WALLPAPER_DECK_STORAGE_KEY = "rabbitHusbandryWallpaperDeck";
const LAST_WALLPAPER_STORAGE_KEY = "rabbitHusbandryLastWallpaper";
const FULL_ACCESS_STORAGE_KEY = "rabbitHusbandryFullAccess";
const FULL_ACCESS_PRODUCT_ID = "full_question_bank";
const TUTORIAL_SEEN_STORAGE_KEY = "rabbitHusbandryTutorialSeen";
const RECENT_QUESTION_LIMIT = 120;

const scenarioQuestions = [
    {
        id: "scenario-returning-rabbit",
        topic: "Health & Biosecurity",
        source: "Practice scenario | Biosecurity guidance",
        prompt: "A rabbit returns from a show and begins sneezing two days later. What should happen before it rejoins the herd?",
        options: ["Return it to its usual cage and watch it", "Isolate it, use dedicated equipment, and contact a rabbit-savvy vet", "Give treats to improve its appetite"],
        correctIndex: 1,
        fact: "Returning rabbits should be quarantined, monitored, and handled with separate equipment to protect the herd.",
    },
    {
        id: "scenario-registration-tattoo",
        topic: "ARBA Procedures",
        source: "Practice scenario | ARBA procedures",
        prompt: "At a registration appointment, the rabbit's left-ear tattoo does not match its paperwork. What is the correct next step?",
        options: ["Ask the registrar to use the paperwork anyway", "Pause the registration and resolve the identification discrepancy", "Tattoo a new number over the existing tattoo at the table"],
        correctIndex: 1,
        fact: "Permanent identification and paperwork must agree. Resolve discrepancies before proceeding with registration.",
    },
    {
        id: "scenario-heat-stress",
        topic: "Husbandry",
        source: "Practice scenario | General husbandry guidance",
        prompt: "The rabbitry is 88°F (31°C), and a rabbit is breathing rapidly with warm ears. What is the best immediate action?",
        options: ["Move it to a cooler space, provide airflow, and use tepid water on the ears", "Submerge it in ice water", "Wait until evening to see whether it improves"],
        correctIndex: 0,
        fact: "Act promptly and cool gradually. Seek veterinary guidance if signs are severe or do not improve.",
    },
    {
        id: "genetics-tyr-melanin",
        topic: "Genetics",
        studyTrack: "senior",
        source: "Song et al., Scientific Reports (2017), doi:10.1038/s41598-017-01727-y",
        prompt: "In rabbit pigmentation research, what did reducing tyrosinase (TYR) activity affect?",
        options: ["Melanin and coat color", "Ear length", "Litter size", "Nail color only"],
        correctIndex: 0,
        fact: "A rabbit study linked a TYR 3' UTR deletion to reduced melanin and a gray coat phenotype.",
    },
    {
        id: "genetics-tyr-utr",
        topic: "Genetics",
        studyTrack: "senior",
        source: "Song et al., Scientific Reports (2017), doi:10.1038/s41598-017-01727-y",
        prompt: "Which part of the rabbit TYR gene was deleted in a study that produced graying?",
        options: ["The 3' untranslated region", "The entire chromosome", "Only the promoter", "A mitochondrial gene"],
        correctIndex: 0,
        fact: "The study used CRISPR/Cas9 to delete the 3' UTR of TYR and observed graying with reduced melanin.",
    },
    {
        id: "genetics-asip-black-tan",
        topic: "Genetics",
        studyTrack: "senior",
        source: "Letko et al., Animal Genetics (2020), doi:10.1111/age.12881",
        prompt: "Which gene was associated with the black-and-tan coat pattern in rabbits?",
        options: ["ASIP", "TYR only", "IGF1", "Myostatin"],
        correctIndex: 0,
        fact: "Animal Genetics reported an ASIP-region deletion strongly associated with the black-and-tan phenotype in rabbits.",
    },
    {
        id: "genetics-asip-protein",
        topic: "Genetics",
        studyTrack: "senior",
        source: "Letko et al., Animal Genetics (2020), doi:10.1111/age.12881",
        prompt: "What protein does the ASIP gene encode?",
        options: ["Agouti signaling protein", "A muscle protein", "An antibody", "A digestive enzyme"],
        correctIndex: 0,
        fact: "ASIP encodes agouti signaling protein, a regulator of pigmentation signaling.",
    },
    {
        id: "genetics-black-tan-pattern",
        topic: "Genetics",
        studyTrack: "senior",
        source: "Letko et al., Animal Genetics (2020), doi:10.1111/age.12881",
        prompt: "What coat pattern describes black-and-tan rabbits in the ASIP study?",
        options: ["Black dorsal areas with sharply bounded tan ventral areas", "One solid color from head to tail", "White fur with red eyes", "Random white spots only"],
        correctIndex: 0,
        fact: "The study describes black-and-tan rabbits as having tan ventral surfaces sharply separated from black dorsal surfaces.",
    },
    {
        id: "genetics-methylation",
        topic: "Genetics",
        studyTrack: "senior",
        source: "Chen et al., Frontiers in Genetics (2021), doi:10.3389/fgene.2020.603528",
        prompt: "What molecular feature was associated with inherited coat-color dilution in Rex rabbit hair follicles?",
        options: ["DNA methylation differences", "Different numbers of ears", "A change in cage size", "A vitamin deficiency"],
        correctIndex: 0,
        fact: "A Frontiers in Genetics study found an association between coat-color dilution and DNA methylation differences in hair follicles.",
    },
    {
        id: "genetics-wgbs",
        topic: "Genetics",
        studyTrack: "senior",
        source: "Chen et al., Frontiers in Genetics (2021), doi:10.3389/fgene.2020.603528",
        prompt: "What did researchers use to compare DNA methylation across the Rex rabbit genome?",
        options: ["Whole-genome bisulfite sequencing", "A kitchen scale", "A pedigree alone", "An eye-color chart"],
        correctIndex: 0,
        fact: "The study used whole-genome bisulfite sequencing to compare methylation patterns in hair follicles.",
    },
    {
        id: "genetics-gnai2-melanin",
        topic: "Genetics",
        studyTrack: "senior",
        source: "Hu et al., Genes (2021), doi:10.3390/genes12081130",
        prompt: "What happened when GNAI2 was overexpressed in rabbit melanocytes?",
        options: ["Melanin content increased", "Melanin disappeared", "Ear growth stopped", "Gestation shortened"],
        correctIndex: 0,
        fact: "In cultured rabbit melanocytes, GNAI2 overexpression increased melanin content and cell proliferation.",
    },
    {
        id: "genetics-gnai2-expression",
        topic: "Genetics",
        studyTrack: "senior",
        source: "Hu et al., Genes (2021), doi:10.3390/genes12081130",
        prompt: "Which rabbit skin color group had the highest GNAI2 levels in one study?",
        options: ["Black skin", "White skin", "All groups were identical", "The study did not measure expression"],
        correctIndex: 0,
        fact: "The study reported the highest GNAI2 levels in black skin and the lowest in white skin among the groups examined.",
    },
    {
        id: "genetics-replication",
        topic: "Genetics",
        studyTrack: "senior",
        source: "Chen et al., Frontiers in Genetics (2021), doi:10.3389/fgene.2020.603528",
        prompt: "Why should breeders avoid treating one genetics study as the final word on a trait?",
        options: ["Results may need replication and traits can have multiple influences", "Genes never affect traits", "Only coat color matters", "Pedigrees replace research"],
        correctIndex: 0,
        fact: "The coat-dilution study notes its small sample size and the need for replication; responsible breeding decisions use multiple reliable sources.",
    },
];

function inferTopic(question) {
    const text = `${question.prompt} ${question.fact || ""}`.toLowerCase();
    if (/gene|genotype|allele|agouti|chinchilla|vienna|rufus|harlequin|brindling|broken pattern|charlie/.test(text)) return "Genetics";
    if (/arba|registration|tattoo|pedigree|meat-pen|meat pen/.test(text)) return "ARBA Procedures";
    if (/pasteurella|snuffles|rhdv|contagious|quarantine|biofilm/.test(text)) return "Health & Biosecurity";
    if (/body type|fur type|moon eye|breed|pose|dutch rabbit|flemish/.test(text)) return "Breeds & Judging";
    return "Husbandry";
}

function inferStudyTrack(question) {
    const text = `${question.prompt} ${question.fact || ""}`.toLowerCase();
    if (/arba|registration|tattoo|pedigree|meat-pen|meat pen/.test(text)) {
        return "registrar";
    }
    if (/pasteurella|snuffles|rhdv|contagious|quarantine|palpate|homozygous|heterozygous|genotype|allele|vienna|charlie/.test(text)) {
        return "senior";
    }
    if (/gene|agouti|chinchilla|rufus|harlequin|brindling|kindling|gestation|breeding record|body type|moon eye|full-arch|fur type|dutch rabbit/.test(text)) {
        return "intermediate";
    }
    if (/daily diet|fresh water|lift a show rabbit|daily observation|wire floors|trim nails/.test(text)) {
        return "cloverbud";
    }
    return "junior";
}

const questionBank = [...allQuestions, ...scenarioQuestions].map((question, index) => ({
    ...question,
    id: question.id || `question-${index + 1}`,
    topic: question.topic || inferTopic(question),
    studyTrack: question.studyTrack || inferStudyTrack(question),
    source: question.source || (inferTopic(question) === "ARBA Procedures" ? "Practice question | ARBA procedures" : "Practice question | General husbandry guidance"),
    reviewStatus: question.reviewStatus || "Practice content - verify current guidance",
}));

const STUDY_TRACKS = ["cloverbud", "junior", "intermediate", "senior", "registrar"];

const STUDY_PATH_ACCESS = {
    mixed: { topics: TOPICS, tracks: STUDY_TRACKS },
    cloverbud: { topics: ["Husbandry", "Health & Biosecurity"], tracks: ["cloverbud"] },
    junior: { topics: ["Husbandry", "Health & Biosecurity", "Genetics"], tracks: ["cloverbud", "junior"] },
    intermediate: { topics: TOPICS, tracks: ["cloverbud", "junior", "intermediate"] },
    senior: { topics: TOPICS, tracks: ["cloverbud", "junior", "intermediate", "senior"] },
    registrar: { topics: TOPICS, tracks: STUDY_TRACKS },
};

function validateQuestionBank() {
    const ids = new Set();
    const problems = [];
    questionBank.forEach((question) => {
        if (!question.id || ids.has(question.id)) problems.push(`duplicate or missing id: ${question.id || question.prompt}`);
        ids.add(question.id);
        const hasValidOptions = Array.isArray(question.options) && question.options.length >= 2;
        if (!question.prompt || !hasValidOptions) problems.push(`incomplete question: ${question.id}`);
        if (!hasValidOptions || !Number.isInteger(question.correctIndex) || question.correctIndex < 0 || question.correctIndex >= question.options.length) problems.push(`invalid correct answer: ${question.id}`);
        if (!TOPICS.includes(question.topic)) problems.push(`invalid topic: ${question.id}`);
        if (!STUDY_TRACKS.includes(question.studyTrack)) problems.push(`invalid study track: ${question.id}`);
        const isReachable = Object.entries(STUDY_PATH_ACCESS)
            .filter(([path]) => path !== "mixed")
            .some(([, access]) => access.topics.includes(question.topic) && access.tracks.includes(question.studyTrack));
        if (!isReachable) problems.push(`unreachable question: ${question.id}`);
    });
    if (problems.length) throw new Error(`Question bank validation failed:\n${problems.join("\n")}`);
}

validateQuestionBank();

const nonRegistrarQuestions = questionBank.filter((question) => question.studyTrack !== "registrar");
const freeQuestionIds = new Set([
    ...TOPICS.flatMap((topic) => nonRegistrarQuestions.filter((question) => question.topic === topic).slice(0, 10)),
].map((question) => question.id));

const questionText = document.getElementById("question");
const questionCard = document.getElementById("question-card");
const optionsList = document.getElementById("options");
const factBox = document.getElementById("fact");
const progress = document.getElementById("progress");
const celebration = document.getElementById("celebration");
const form = document.getElementById("answer-form");
const answerInput = document.getElementById("answer");
const feedback = document.getElementById("feedback");
const score = document.getElementById("score");
const nextButton = document.getElementById("next");
const pauseButton = document.getElementById("pause");
const exitButton = document.getElementById("exit");
const statsElement = document.getElementById("stats");
const summarySection = document.getElementById("summary");
const recapPanel = document.getElementById("recap-panel");
const summaryNote = document.getElementById("summary-note");
const summaryList = document.getElementById("summary-list");
const readiness = document.getElementById("readiness");
const historySection = document.getElementById("study-history");
const historySummary = document.getElementById("history-summary");
const studyMode = document.getElementById("study-mode");
const roundSize = document.getElementById("round-size");
const studyTrack = document.getElementById("study-track");
const chooseStudyLevelsButton = document.getElementById("choose-study-levels");
const studyTrackFilters = document.getElementById("study-track-filters");
const studyLevelsModal = document.getElementById("study-levels-modal");
const closeStudyLevelsModalButton = document.getElementById("close-study-levels-modal");
const startRoundButton = document.getElementById("start-round");
const topicFilters = document.getElementById("topic-filters");
const printReportButton = document.getElementById("print-report");
const confidenceFieldset = document.getElementById("confidence");
const confidenceHelpButton = document.getElementById("confidence-help");
const confidenceModal = document.getElementById("confidence-modal");
const closeConfidenceModalButton = document.getElementById("close-confidence-modal");
const tutorialModal = document.getElementById("tutorial-modal");
const closeTutorialModalButton = document.getElementById("close-tutorial-modal");
const tutorialHelpButton = document.getElementById("tutorial-help");
const upgradePanel = document.getElementById("upgrade-panel");
const upgradeDetails = document.getElementById("upgrade-details");
const upgradeButton = document.getElementById("upgrade-button");
const restorePurchaseButton = document.getElementById("restore-purchase");
const purchaseStatus = document.getElementById("purchase-status");
const questionBankCount = document.getElementById("question-bank-count");

function loadStats() {
    try {
        const stored = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
        return { ...DEFAULT_STATS, ...stored, history: Array.isArray(stored.history) ? stored.history : [], misses: Array.isArray(stored.misses) ? stored.misses : [], recentQuestionIds: Array.isArray(stored.recentQuestionIds) ? stored.recentQuestionIds : [], topicResults: stored.topicResults || {} };
    } catch {
        return { ...DEFAULT_STATS };
    }
}

let stats = loadStats();
let questions = [];
let answersLog = [];
let currentIndex = 0;
let currentScore = 0;
let waitingForNext = false;
let roundComplete = false;
let roundPaused = false;
let celebrationTimeoutId;
const betaFullAccess = false;
let hasFullAccess = localStorage.getItem(FULL_ACCESS_STORAGE_KEY) === "true";

function saveStats() { localStorage.setItem(STORAGE_KEY, JSON.stringify(stats)); }
function selectedTopics() { return [...topicFilters.querySelectorAll("input:checked")].map((input) => input.value); }
function currentMode() { return studyMode.value; }
function currentStudyTrack() { return studyTrack.value; }
function selectedStudyTracks() {
    return currentStudyTrack() === "mixed"
        ? [...studyTrackFilters.querySelectorAll("input:checked")].map((input) => input.value)
        : currentPathAccess().tracks;
}
function selectedRoundSize(availableCount) { return roundSize.value === "all" ? availableCount : Number(roundSize.value); }

function currentPathAccess() { return STUDY_PATH_ACCESS[currentStudyTrack()]; }

function updateStudyTrackFilters() {
    chooseStudyLevelsButton.hidden = currentStudyTrack() !== "mixed";
}

function showStudyLevelsModal() {
    studyLevelsModal.hidden = false;
    studyLevelsModal.setAttribute("aria-hidden", "false");
    closeStudyLevelsModalButton.focus();
}

function hideStudyLevelsModal() {
    studyLevelsModal.hidden = true;
    studyLevelsModal.setAttribute("aria-hidden", "true");
}

function updateTopicFilters(selectAllAvailable = false) {
    const pathAccess = currentPathAccess();
    const availableTopics = new Set(availableQuestions()
        .filter((question) => selectedStudyTracks().includes(question.studyTrack) && pathAccess.topics.includes(question.topic))
        .map((question) => question.topic));
    const topicInputs = [...topicFilters.querySelectorAll("input")];

    topicInputs.forEach((input) => {
        input.disabled = !availableTopics.has(input.value);
        if (input.disabled) input.checked = false;
    });
    if (selectAllAvailable || !topicInputs.some((input) => input.checked && !input.disabled)) {
        topicInputs.filter((input) => !input.disabled).forEach((input) => { input.checked = true; });
    }
}

function eligibleQuestions() {
    const topics = selectedTopics();
    const pathAccess = currentPathAccess();
    const matchingQuestions = availableQuestions().filter((question) =>
        topics.includes(question.topic)
        && pathAccess.topics.includes(question.topic)
        && selectedStudyTracks().includes(question.studyTrack)
    );
    return currentMode() === "review"
        ? matchingQuestions.filter((question) => stats.misses.includes(question.id))
        : matchingQuestions;
}

function updateQuestionBankCount() {
    if (!questionBankCount) return;
    const pathAccess = currentPathAccess();
    const accessibleCount = availableQuestions().filter((question) =>
        pathAccess.topics.includes(question.topic)
        && selectedStudyTracks().includes(question.studyTrack)
    ).length;
    const pathLabel = studyTrack.selectedOptions[0]?.textContent.trim() || "selected study path";
    questionBankCount.textContent = currentStudyTrack() === "mixed"
        ? `${accessibleCount} questions available in the selected study levels. ${questionBank.length} questions in Rabbit Savvy.`
        : `${accessibleCount} questions available for ${pathLabel}. ${questionBank.length} questions in Rabbit Savvy.`;
}

function updateRoundAvailability() {
    const availableCount = eligibleQuestions().length;
    [...roundSize.options].forEach((option) => {
        option.disabled = option.value !== "all" && Number(option.value) > availableCount;
    });
    if (currentMode() === "review" && availableCount > 0 && roundSize.selectedOptions[0].disabled) {
        roundSize.value = "all";
    }
    startRoundButton.textContent = "Start Round";
    startRoundButton.disabled = availableCount === 0 || roundSize.selectedOptions[0].disabled;
    updateQuestionBankCount();
}

function showTutorial() {
    tutorialModal.hidden = false;
    tutorialModal.setAttribute("aria-hidden", "false");
    closeTutorialModalButton.focus();
}

function hideTutorial() {
    tutorialModal.hidden = true;
    tutorialModal.setAttribute("aria-hidden", "true");
    localStorage.setItem(TUTORIAL_SEEN_STORAGE_KEY, "true");
}

function availableQuestions() {
    return hasFullAccess ? questionBank : questionBank.filter((question) => freeQuestionIds.has(question.id));
}

function updateUpgradePanel() {
    if (!upgradePanel || !upgradeDetails || !upgradeButton || !restorePurchaseButton) return;
    const lockedQuestionCount = questionBank.length - freeQuestionIds.size;
    const registrarOption = studyTrack.querySelector('option[value="registrar"]');
    registrarOption.disabled = !hasFullAccess;
    upgradePanel.classList.toggle("unlocked", hasFullAccess);
    upgradeDetails.textContent = hasFullAccess
        ? betaFullAccess
            ? `Beta access is on: all ${questionBank.length} questions are ready to test.`
            : `Full Question Bank unlocked: all ${questionBank.length} questions are ready to study.`
        : `Unlock the complete Rabbit Savvy study guide: comprehensive, structured rabbit knowledge across care, health, genetics, ARBA procedures, and breeds and judging. Includes ${lockedQuestionCount} more questions for one payment of $19.99, lifetime access, no subscription, and study offline anytime.`;
    upgradeButton.hidden = hasFullAccess;
    restorePurchaseButton.hidden = hasFullAccess;
    updateTopicFilters();
    updateRoundAvailability();
}

function grantFullAccess() {
    hasFullAccess = true;
    localStorage.setItem(FULL_ACCESS_STORAGE_KEY, "true");
    if (purchaseStatus) purchaseStatus.textContent = "Full Question Bank unlocked. Thank you for supporting HopNCode.";
    updateUpgradePanel();
}

function playStore() {
    return window.CdvPurchase?.store;
}

function initializeBilling() {
    if (betaFullAccess) return;
    const purchase = window.CdvPurchase;
    const store = playStore();
    if (!purchase || !store) return;

    store.register({
        id: FULL_ACCESS_PRODUCT_ID,
        type: purchase.ProductType.NON_CONSUMABLE,
        platform: purchase.Platform.GOOGLE_PLAY,
    });
    store.when().approved((transaction) => transaction.verify());
    store.when().verified((receipt) => {
        grantFullAccess();
        receipt.finish();
    });
    store.error((error) => {
        if (purchaseStatus) purchaseStatus.textContent = error.message || "The purchase could not be completed. Please try again.";
    });
    store.initialize([purchase.Platform.GOOGLE_PLAY]);
}

function beginPurchase() {
    const purchase = window.CdvPurchase;
    const store = playStore();
    if (!purchase || !store) {
        if (purchaseStatus) purchaseStatus.textContent = "Purchases are available in the Google Play version of the app.";
        return;
    }
    const product = store.get(FULL_ACCESS_PRODUCT_ID, purchase.Platform.GOOGLE_PLAY);
    const offer = product?.getOffer();
    if (!offer) {
        if (purchaseStatus) purchaseStatus.textContent = "The Full Question Bank is not available yet. Please try again shortly.";
        return;
    }
    offer.order();
}

function restorePurchase() {
    const store = playStore();
    if (!store) {
        if (purchaseStatus) purchaseStatus.textContent = "Restore purchases from the Google Play version of the app.";
        return;
    }
    store.restorePurchases();
    if (purchaseStatus) purchaseStatus.textContent = "Checking your previous Google Play purchases...";
}

function topicKey(topic) {
    return topic.toLowerCase().replace(/[ &]+/g, "-");
}

function stopCelebration() {
    clearTimeout(celebrationTimeoutId);
    celebration.classList.remove("show");
    celebration.querySelectorAll(".bonus-bunny").forEach((bunny) => bunny.remove());
}

function playCelebration() {
    const colorSets = [
        ["#ffeef7", "#f5c4d6"],
        ["#f2ffdf", "#c9ec7f"],
        ["#e5f2ff", "#7ac5ff"],
        ["#ffe7d8", "#ffb07a"],
        ["#f0e2ff", "#c09dff"],
        ["#e3fff6", "#6fe3c7"],
        ["#fff3e1", "#ffcd82"],
    ];
    for (let index = 0; index < 16; index += 1) {
        const bunny = document.createElement("span");
        const [bodyBase, accentColor] = colorSets[Math.floor(Math.random() * colorSets.length)];
        bunny.className = "bunny bonus-bunny";
        bunny.style.left = `${4 + Math.random() * 90}%`;
        bunny.style.bottom = `${8 + Math.random() * 58}%`;
        bunny.style.animationDelay = `${Math.random() * 1.6}s`;
        bunny.style.setProperty("--hop-scale", `${0.75 + Math.random() * 0.5}`);
        bunny.style.setProperty("--body-base", bodyBase);
        bunny.style.setProperty("--accent-color", accentColor);
        celebration.appendChild(bunny);
    }
    celebration.classList.add("show");
    clearTimeout(celebrationTimeoutId);
    celebrationTimeoutId = setTimeout(stopCelebration, 4000);
}

function shuffleQuestions(pool) {
    const shuffled = [...pool];
    for (let index = shuffled.length - 1; index > 0; index -= 1) {
        const randomIndex = Math.floor(Math.random() * (index + 1));
        [shuffled[index], shuffled[randomIndex]] = [shuffled[randomIndex], shuffled[index]];
    }
    return shuffled;
}

function pickRandomQuestions(pool, count) {
    const recentIds = new Set(stats.recentQuestionIds);
    const freshQuestions = shuffleQuestions(pool.filter((question) => !recentIds.has(question.id)));
    const repeatedQuestions = shuffleQuestions(pool.filter((question) => recentIds.has(question.id)));
    return [...freshQuestions, ...repeatedQuestions].slice(0, Math.min(count, pool.length));
}

function rememberSelectedQuestions(selectedQuestions) {
    const selectedIds = selectedQuestions.map((question) => question.id);
    stats.recentQuestionIds = [...selectedIds, ...stats.recentQuestionIds.filter((id) => !selectedIds.includes(id))]
        .slice(0, RECENT_QUESTION_LIMIT);
    saveStats();
}

function setRandomBackground() {
    const backgrounds = globalThis.RABBIT_WALLPAPERS;
    let deck;
    try {
        deck = JSON.parse(localStorage.getItem(WALLPAPER_DECK_STORAGE_KEY) || "[]");
    } catch {
        deck = [];
    }
    deck = Array.isArray(deck) ? deck.filter((background) => backgrounds.includes(background)) : [];
    if (!deck.length) {
        deck = [...backgrounds];
        for (let index = deck.length - 1; index > 0; index -= 1) {
            const randomIndex = Math.floor(Math.random() * (index + 1));
            [deck[index], deck[randomIndex]] = [deck[randomIndex], deck[index]];
        }
        const previousBackground = localStorage.getItem(LAST_WALLPAPER_STORAGE_KEY);
        if (deck.length > 1 && deck[deck.length - 1] === previousBackground) {
            [deck[deck.length - 1], deck[deck.length - 2]] = [deck[deck.length - 2], deck[deck.length - 1]];
        }
    }
    const background = deck.pop();
    localStorage.setItem(WALLPAPER_DECK_STORAGE_KEY, JSON.stringify(deck));
    localStorage.setItem(LAST_WALLPAPER_STORAGE_KEY, background);
    document.body.style.setProperty("--game-background", `url("${background}")`);
}

function shuffleOptions(question) {
    const entries = question.options.map((text, index) => ({ text, index }));
    for (let index = entries.length - 1; index > 0; index -= 1) {
        const randomIndex = Math.floor(Math.random() * (index + 1));
        [entries[index], entries[randomIndex]] = [entries[randomIndex], entries[index]];
    }
    return { ...question, options: entries.map((entry) => entry.text), correctIndex: entries.findIndex((entry) => entry.index === question.correctIndex) };
}

function updateStatsDisplay() {
    statsElement.textContent = `Best: ${stats.bestScore} | Rounds: ${stats.gamesPlayed} | Questions to review: ${stats.misses.length}`;
    const recent = stats.history.slice(-5);
    historySummary.textContent = recent.length ? `Recent scores: ${recent.map((round) => `${round.score}/${round.total}`).join(" | ")}` : "Complete a round to begin building your study history.";
}

function setAnswerLocked(locked) {
    optionsList.querySelectorAll("button").forEach((button) => { button.disabled = locked; });
}

function resetConfidence() {
    document.querySelectorAll('input[name="confidence"]').forEach((input) => { input.checked = false; });
}

function renderQuestion() {
    const question = questions[currentIndex];
    const activeTopic = topicKey(question.topic);
    progress.textContent = `Question ${currentIndex + 1} | ${currentMode() === "exam" ? "Exam Mode" : currentMode() === "review" ? "Review Mode" : "Learn Mode"}`;
    questionCard.dataset.topic = activeTopic;
    topicFilters.dataset.activeTopic = activeTopic;
    questionText.textContent = question.prompt;
    optionsList.replaceChildren();
    question.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.type = "button";
        button.className = "answer-option";
        button.textContent = `${index + 1}. ${option}`;
        button.addEventListener("click", () => submitAnswer(index));
        optionsList.appendChild(button);
    });
    factBox.textContent = "";
    feedback.textContent = "";
    feedback.className = "";
    resetConfidence();
    score.textContent = `Score: ${currentScore} / ${questions.length}`;
    waitingForNext = false;
    setAnswerLocked(false);
    updateActionButtons();
    stopCelebration();
}

function selectedConfidence() {
    return document.querySelector('input[name="confidence"]:checked')?.value || "not rated";
}

function addExplanation(question, selectedIndex, isCorrect) {
    if (currentMode() === "exam") return;
    factBox.textContent = isCorrect
        ? question.fact || ""
        : `The best answer is “${question.options[question.correctIndex]}.” ${question.fact || ""}`;
}

function submitAnswer(selectedIndex) {
    if (waitingForNext || roundComplete || roundPaused) return;
    const question = questions[currentIndex];
    if (selectedIndex < 0 || selectedIndex >= question.options.length) {
        feedback.textContent = "Choose one of the available answers.";
        return;
    }
    const isCorrect = selectedIndex === question.correctIndex;
    answersLog.push({ ...question, selectedIndex, isCorrect, confidence: selectedConfidence() });
    if (isCorrect) {
        currentScore += 1;
        playCelebration();
    } else {
        stopCelebration();
    }
    feedback.textContent = "";
    feedback.className = "";
    addExplanation(question, selectedIndex, isCorrect);
    score.textContent = `Score: ${currentScore} / ${questions.length}`;
    waitingForNext = true;
    setAnswerLocked(true);
    updateActionButtons();
}

function updateActionButtons() {
    nextButton.hidden = roundPaused || (!waitingForNext && !roundComplete);
    pauseButton.hidden = !questions.length || roundComplete;
    exitButton.hidden = !questions.length || roundComplete;
    nextButton.textContent = roundComplete ? "Start New Round" : currentIndex === questions.length - 1 ? "Finish Round" : "Next Question";
    pauseButton.textContent = roundPaused ? "Resume Round" : "Pause Round";
    exitButton.textContent = "Quit Round";
}

function pauseRound() {
    roundPaused = true;
    feedback.textContent = "Round paused. Resume when you are ready.";
    setAnswerLocked(true);
    updateActionButtons();
}

function resumeRound() {
    roundPaused = false;
    feedback.textContent = "";
    setAnswerLocked(waitingForNext);
    updateActionButtons();
}

function quitRound() {
    questions = [];
    answersLog = [];
    currentIndex = 0;
    currentScore = 0;
    waitingForNext = false;
    roundPaused = false;
    questionText.textContent = "Choose your settings and start a new round.";
    optionsList.replaceChildren();
    factBox.textContent = "";
    score.textContent = "";
    feedback.textContent = "Round quit. Your study history was not changed.";
    document.querySelector("details.collapsible-panel")?.setAttribute("open", "");
    updateActionButtons();
}

function renderSummary() {
    const misses = answersLog.filter((entry) => !entry.isCorrect);
    summaryList.replaceChildren();
    summaryNote.textContent = misses.length ? "Review these questions before your next round:" : "Congratulations! You got 100%.";
    misses.forEach((entry) => {
        const item = document.createElement("li");
        const certaintyNote = entry.confidence === "certain" ? " You marked this answer as certain, so it is a good one to revisit." : "";
        item.textContent = `${entry.topic}: ${entry.prompt} Correct answer: ${entry.options[entry.correctIndex]}.${certaintyNote} ${entry.fact || ""}`;
        summaryList.appendChild(item);
    });
    const totalAnswered = Object.values(stats.topicResults).reduce((total, result) => total + result.total, 0);
    const totalCorrect = Object.values(stats.topicResults).reduce((total, result) => total + result.correct, 0);
    readiness.textContent = totalAnswered ? `Overall readiness: ${Math.round((totalCorrect / totalAnswered) * 100)}%. Focus next on ${misses.length ? [...new Set(misses.map((entry) => entry.topic))].join(", ") : "keeping every topic sharp"}.` : "";
    recapPanel.hidden = false;
    recapPanel.open = true;
    summarySection.focus();
}

function completeRound() {
    if (roundComplete) return;
    roundComplete = true;
    waitingForNext = false;
    answersLog.forEach((entry) => {
        const topic = stats.topicResults[entry.topic] || { correct: 0, total: 0 };
        topic.total += 1;
        topic.correct += Number(entry.isCorrect);
        stats.topicResults[entry.topic] = topic;
    });
    const newMisses = answersLog.filter((entry) => !entry.isCorrect).map((entry) => entry.id);
    stats.misses = [...new Set([...stats.misses.filter((id) => !answersLog.some((entry) => entry.id === id && entry.isCorrect)), ...newMisses])];
    stats.gamesPlayed += 1;
    stats.bestScore = Math.max(stats.bestScore, currentScore);
    stats.history = [...stats.history, { score: currentScore, total: questions.length, mode: currentMode(), date: new Date().toLocaleDateString() }].slice(-20);
    saveStats();
    updateStatsDisplay();
    renderSummary();
    feedback.textContent = "Round complete.";
    setAnswerLocked(true);
    updateActionButtons();
}

function startNewGame() {
    if (!hasFullAccess && currentStudyTrack() === "registrar") {
        feedback.textContent = "The Registrar study guide is included with the Full Question Bank. Unlock it to continue.";
        return;
    }
    const pool = eligibleQuestions();
    if (!pool.length) {
        feedback.textContent = currentMode() === "review" ? "No missed questions match these filters yet. Try Learn or Exam mode." : "No questions match those filters. Try a different study path or topic.";
        return;
    }
    const requestedCount = selectedRoundSize(pool.length);
    if (pool.length < requestedCount) {
        feedback.textContent = `This setup has ${pool.length} questions. Pick a smaller round or choose more topics.`;
        return;
    }
    questions = pickRandomQuestions(pool, requestedCount);
    rememberSelectedQuestions(questions);
    questions = questions.map(shuffleOptions);
    setRandomBackground();
    currentIndex = 0;
    currentScore = 0;
    answersLog = [];
    roundComplete = false;
    roundPaused = false;
    recapPanel.hidden = true;
    renderQuestion();
}

nextButton.addEventListener("click", () => {
    if (roundComplete) return startNewGame();
    if (!waitingForNext || roundPaused) return;
    if (currentIndex === questions.length - 1) return completeRound();
    currentIndex += 1;
    waitingForNext = false;
    renderQuestion();
});
pauseButton.addEventListener("click", () => {
    if (roundPaused) resumeRound();
    else pauseRound();
});
exitButton.addEventListener("click", quitRound);
startRoundButton.addEventListener("click", startNewGame);
[studyMode, roundSize, topicFilters].forEach((control) => {
    control.addEventListener("change", updateRoundAvailability);
});
studyTrackFilters.addEventListener("change", () => {
    updateTopicFilters();
    updateRoundAvailability();
});
studyTrack.addEventListener("change", () => {
    updateStudyTrackFilters();
    updateTopicFilters(true);
    updateRoundAvailability();
    if (currentStudyTrack() === "mixed") showStudyLevelsModal();
});
chooseStudyLevelsButton.addEventListener("click", showStudyLevelsModal);
closeStudyLevelsModalButton.addEventListener("click", () => {
    hideStudyLevelsModal();
    chooseStudyLevelsButton.focus();
});
studyLevelsModal.addEventListener("click", (event) => {
    if (event.target === studyLevelsModal) hideStudyLevelsModal();
});
upgradeButton?.addEventListener("click", beginPurchase);
restorePurchaseButton?.addEventListener("click", restorePurchase);
printReportButton.addEventListener("click", () => window.print());
confidenceHelpButton.addEventListener("click", () => {
    confidenceModal.hidden = false;
    confidenceModal.setAttribute("aria-hidden", "false");
    closeConfidenceModalButton.focus();
});
closeConfidenceModalButton.addEventListener("click", () => {
    confidenceModal.hidden = true;
    confidenceModal.setAttribute("aria-hidden", "true");
    confidenceHelpButton.focus();
});
confidenceModal.addEventListener("click", (event) => {
    if (event.target === confidenceModal) {
        closeConfidenceModalButton.click();
    }
});
confidenceFieldset.addEventListener("change", () => {
    if (!waitingForNext || !answersLog.length) return;
    answersLog[answersLog.length - 1].confidence = selectedConfidence();
});
tutorialHelpButton.addEventListener("click", showTutorial);
closeTutorialModalButton.addEventListener("click", () => {
    hideTutorial();
    tutorialHelpButton.focus();
});
tutorialModal.addEventListener("click", (event) => {
    if (event.target === tutorialModal) hideTutorial();
});
document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !studyLevelsModal.hidden) {
        hideStudyLevelsModal();
        chooseStudyLevelsButton.focus();
        return;
    }
    if (event.key === "Escape" && !tutorialModal.hidden) {
        hideTutorial();
        tutorialHelpButton.focus();
        return;
    }
    if (waitingForNext || roundComplete || roundPaused || event.ctrlKey || event.metaKey || event.altKey) return;
    if (!["1", "2", "3"].includes(event.key)) return;
    const activeElement = document.activeElement;
    if (activeElement?.matches("select, input, textarea")) return;
    submitAnswer(Number(event.key) - 1);
});

document.addEventListener("deviceready", initializeBilling, { once: true });
updateUpgradePanel();
updateStudyTrackFilters();

updateStatsDisplay();
startNewGame();
if (localStorage.getItem(TUTORIAL_SEEN_STORAGE_KEY) !== "true") showTutorial();
