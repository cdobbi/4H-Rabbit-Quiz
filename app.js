const QUESTIONS_PER_GAME = 10;

const allQuestions = [
    {
        studyTrack: "cloverbud",
        topic: "Health & Biosecurity",
        prompt: "What should you do before touching a rabbit?",
        options: ["Wash your hands", "Run and clap", "Give it candy"],
        correctIndex: 0,
        fact: "Clean hands help keep rabbits healthy.",
    },
    {
        studyTrack: "cloverbud",
        topic: "Health & Biosecurity",
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
        prompt: "Who should help you pick up a rabbit?",
        options: ["A grown-up who knows how", "No one", "Another rabbit"],
        correctIndex: 0,
        fact: "Ask a grown-up for help so the rabbit's body and back feet are safely supported.",
    },
    {
        studyTrack: "cloverbud",
        prompt: "Where is a calm place to pet a rabbit with a helper?",
        options: ["Sitting low on the floor", "On top of a tall chair", "While running outside"],
        correctIndex: 0,
        fact: "Being low to the ground helps keep both you and the rabbit safe.",
    },
    {
        studyTrack: "cloverbud",
        prompt: "What should you do if a rabbit is hiding and does not want to come out?",
        options: ["Give it quiet space", "Pull it out", "Bang on its cage"],
        correctIndex: 0,
        fact: "Rabbits need a quiet place to rest and feel safe.",
    },
    {
        studyTrack: "cloverbud",
        topic: "Health & Biosecurity",
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
        topic: "Health & Biosecurity",
        prompt: "What should you do after helping care for a rabbit?",
        options: ["Wash your hands", "Touch your face", "Leave a mess"],
        correctIndex: 0,
        fact: "Wash your hands after handling rabbits or their supplies.",
    },
    {
        studyTrack: "cloverbud",
        topic: "Health & Biosecurity",
        prompt: "What should a rabbit's home be like?",
        options: ["Clean and dry", "Wet and messy", "Full of loud toys"],
        correctIndex: 0,
        fact: "A clean, dry home helps rabbits stay comfortable and healthy.",
    },
    {
        studyTrack: "cloverbud",
        prompt: "What should you do before opening a rabbit's cage?",
        options: ["Ask a grown-up", "Open it quickly", "Shake the door"],
        correctIndex: 0,
        fact: "A grown-up can help you open and close the cage safely.",
    },
    {
        studyTrack: "cloverbud",
        prompt: "What helps a rabbit feel safe in its home?",
        options: ["A quiet hiding spot", "Bright flashing lights", "Lots of shouting"],
        correctIndex: 0,
        fact: "Rabbits like a quiet place where they can rest.",
    },
    {
        studyTrack: "cloverbud",
        prompt: "What should you do if a rabbit thumps its foot?",
        options: ["Be quiet and give it space", "Chase it", "Make more noise"],
        correctIndex: 0,
        fact: "A rabbit may thump when it feels worried or startled.",
    },
    {
        studyTrack: "cloverbud",
        prompt: "What can a rabbit chew for fun with a grown-up's help?",
        options: ["A plain cardboard tube", "A plastic toy", "A pencil"],
        correctIndex: 0,
        fact: "Safe chew toys can help keep a rabbit busy.",
    },
    {
        studyTrack: "cloverbud",
        topic: "Health & Biosecurity",
        prompt: "Where should a rabbit stay on a hot day?",
        options: ["In a cool, shaded place", "In hot sunshine", "Next to a heater"],
        correctIndex: 0,
        fact: "Rabbits can get too hot, so they need shade and fresh water.",
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
        topic: "Health & Biosecurity",
        prompt: "What should you do if you see a loose clump of rabbit fur?",
        options: ["Tell a grown-up", "Pull more fur out", "Throw it at the rabbit"],
        correctIndex: 0,
        fact: "A grown-up can check whether the rabbit needs grooming or help.",
    },
    {
        studyTrack: "cloverbud",
        prompt: "What kind of hands are best for petting a rabbit?",
        options: ["Clean, gentle hands", "Sticky hands", "Rough hands"],
        correctIndex: 0,
        fact: "Clean, gentle hands help rabbits feel safe.",
    },
    {
        studyTrack: "cloverbud",
        prompt: "What should you do if a rabbit runs away from you?",
        options: ["Stay calm and get a grown-up", "Run after it", "Yell at it"],
        correctIndex: 0,
        fact: "Stay calm so a grown-up can help the rabbit get safely home.",
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
        topic: "Health & Biosecurity",
        prompt: "What should you do after giving a rabbit fresh water?",
        options: ["Make sure it can reach the water", "Pour it on the floor", "Hide the water"],
        correctIndex: 0,
        fact: "A rabbit needs water it can easily reach.",
    },
    {
        studyTrack: "cloverbud",
        prompt: "What is a kind way to watch a rabbit play?",
        options: ["Sit quietly nearby", "Grab it suddenly", "Throw toys at it"],
        correctIndex: 0,
        fact: "Quiet watching lets a rabbit explore safely.",
    },
    {
        studyTrack: "cloverbud",
        prompt: "What food helps keep a rabbit's tummy healthy?",
        options: [
            "Grass hay and rabbit pellets",
            "Candy",
            "Only cookies",
        ],
        correctIndex: 0,
        fact: "Hay and rabbit pellets are good everyday foods for rabbits.",
    },
    {
        studyTrack: "cloverbud",
        prompt: "Who should help trim a rabbit's nails?",
        options: [
            "A grown-up who knows how",
            "No one",
            "Another rabbit",
        ],
        correctIndex: 0,
        fact: "A grown-up can trim nails carefully to help keep a rabbit comfortable.",
    },
    {
        studyTrack: "cloverbud",
        prompt: "What can a rabbit rest on in its home?",
        options: [
            "A clean resting board or mat",
            "A wet towel",
            "A pile of toys",
        ],
        correctIndex: 0,
        fact: "A resting board or mat gives a rabbit a comfortable place to relax.",
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
        studyTrack: "cloverbud",
        prompt: "How should a grown-up hold a rabbit?",
        options: [
            "Support its body and back feet",
            "Hold its ears",
            "Swing it around",
        ],
        correctIndex: 0,
        fact: "Supporting a rabbit's body and back feet helps keep it safe.",
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
        fact: "A grown-up should check that a rabbit is eating and drinking each day.",
    },
    {
        studyTrack: "cloverbud",
        topic: "Health & Biosecurity",
        prompt: "What should you do with a rabbit's water bowl?",
        options: ["Keep it clean", "Fill it with dirt", "Hide it"],
        correctIndex: 0,
        fact: "Rabbits need clean water every day.",
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
        fact: "Clean food helps rabbits stay healthy.",
    },
    {
        studyTrack: "cloverbud",
        topic: "Health & Biosecurity",
        prompt: "What can you do to help clean a rabbit's home?",
        options: ["Work with a grown-up", "Make it messier", "Throw food around"],
        correctIndex: 0,
        fact: "Helping keep a rabbit's home clean is kind care.",
    },
    {
        studyTrack: "cloverbud",
        prompt: "What should you do before giving a rabbit a new treat?",
        options: ["Ask a grown-up", "Give it lots", "Use candy"],
        correctIndex: 0,
        fact: "A grown-up can help choose safe rabbit treats.",
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
        correctIndex: 2,
        fact: "ARBA registration requires a rabbit to be at least 6 months old. ARBA show entry requires a rabbit to be at least 3 months old.",
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
    // Breed Varieties and Colors
    {
        prompt: "Which coat varieties are recognized in Mini Rex?",
        options: [
            "Agouti, Self, Shaded, Tan Pattern, Wide Band",
            "Only Agouti",
            "Only Self",
            "None",
        ],
        correctIndex: 0,
        fact: "Mini Rex recognize five color varieties per the ARBA Standard.",
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
        prompt: "Which coat varieties are recognized in New Zealand?",
        options: [
            "Self",
            "Agouti",
            "Shaded",
            "Tan Pattern",
        ],
        correctIndex: 0,
        fact: "New Zealand rabbits only recognize the Self color variety.",
    },
    {
        prompt: "Which colors are allowed in New Zealand?",
        options: [
            "White, Red, Black",
            "Blue, Chocolate, Lilac",
            "Broken, Harlequin, Magpie",
            "Chinchilla, Silver Marten",
        ],
        correctIndex: 0,
        fact: "New Zealand come in three colors: White, Red, and Black.",
    },
    {
        prompt: "Which coat varieties are recognized in Holland Lop?",
        options: [
            "Agouti, Self, Shaded, Tan Pattern, Wide Band",
            "Only Agouti",
            "Only Self",
            "Only Broken",
        ],
        correctIndex: 0,
        fact: "Holland Lops recognize five color varieties.",
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
        prompt: "Which coat varieties are recognized in Californian?",
        options: [
            "Pointed White",
            "Agouti",
            "Self",
            "Tan Pattern",
        ],
        correctIndex: 0,
        fact: "Californians are strictly a pointed white variety.",
    },
    {
        prompt: "Which colors are allowed in Californian?",
        options: [
            "White with black points",
            "White with blue points",
            "White with chocolate points",
            "White with lilac points",
        ],
        correctIndex: 0,
        fact: "Californians are white with black nose, ears, and feet.",
    },
    {
        prompt: "Which coat varieties are recognized in Flemish Giant?",
        options: [
            "Self",
            "Agouti",
            "Shaded",
            "Broken",
        ],
        correctIndex: 0,
        fact: "Flemish Giants recognize the Self variety only.",
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
        prompt: "Which coat varieties are recognized in Rex?",
        options: [
            "Self, Agouti, Shaded, Tan, Wideband",
            "Only Agouti",
            "Only Self",
            "None",
        ],
        correctIndex: 0,
        fact: "Rex rabbits recognize five color varieties.",
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
        prompt: "Which coat varieties are recognized in Satin?",
        options: [
            "Self, Agouti, Shaded, Tan, Wideband",
            "Only Agouti",
            "Only Self",
            "Only Broken",
        ],
        correctIndex: 0,
        fact: "Satin rabbits recognize five color varieties.",
    },
    {
        prompt: "Which colors are allowed in Satin?",
        options: [
            "Black, Blue, Broken Black, Broken Blue, Broken Chocolate, Broken Lilac, Chocolate, Lilac, Siamese Sable, White",
            "Only Black and White",
            "Only Red",
            "Only Agouti",
        ],
        correctIndex: 0,
        fact: "Satins come in 10 recognized colors.",
    },
    {
        prompt: "Which coat varieties are recognized in English Angora?",
        options: [
            "Self, Agouti, Shaded, Tan, Wideband",
            "Only Agouti",
            "Only Wool",
            "Only White",
        ],
        correctIndex: 0,
        fact: "English Angoras recognize five color varieties.",
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
        prompt: "Which coat varieties are recognized in Lionhead?",
        options: [
            "Self, Agouti, Shaded, Tan, Wideband",
            "Only Agouti",
            "Only Self",
            "Only Broken",
        ],
        correctIndex: 0,
        fact: "Lionhead rabbits recognize five color varieties.",
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
        prompt: "Which coat varieties are recognized in French Lop?",
        options: [
            "Self, Agouti, Shaded, Tan, Wideband",
            "Only Agouti",
            "Only Self",
            "Only Broken",
        ],
        correctIndex: 0,
        fact: "French Lops recognize five color varieties.",
    },
    {
        prompt: "Which colors are allowed in French Lop?",
        options: [
            "Black, Blue, Broken Black, Broken Blue, Chocolate, Lilac, Fawn, White, and more",
            "Only Black and White",
            "Only Red",
            "Only Agouti",
        ],
        correctIndex: 0,
        fact: "French Lops come in numerous recognized colors and patterns.",
    },
    {
        prompt: "Which coat varieties are recognized in Angora?",
        options: [
            "Self, Agouti, Shaded, Tan, Wideband",
            "Only Agouti",
            "Only Self",
            "Only White",
        ],
        correctIndex: 0,
        fact: "Angoras recognize five color varieties per ARBA standards.",
    },
    {
        prompt: "Which coat varieties are recognized in Chinchilla?",
        options: [
            "Self",
            "Agouti",
            "Shaded",
            "Tan Pattern",
        ],
        correctIndex: 0,
        fact: "Chinchilla rabbits recognize only the Self variety.",
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
        prompt: "Which coat varieties are recognized in Silver Marten?",
        options: [
            "Self",
            "Agouti",
            "Shaded",
            "Tan Pattern",
        ],
        correctIndex: 0,
        fact: "Silver Martens recognize only the Self variety.",
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
        prompt: "Which coat varieties are recognized in Tan?",
        options: [
            "Tan Pattern",
            "Agouti",
            "Self",
            "Shaded",
        ],
        correctIndex: 0,
        fact: "Tan rabbits recognize only the Tan Pattern variety.",
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
        prompt: "Which coat varieties are recognized in Harlequin?",
        options: [
            "Harlequin",
            "Agouti",
            "Self",
            "Broken",
        ],
        correctIndex: 0,
        fact: "Harlequins are specifically a patterned variety.",
    },
    {
        prompt: "Which colors are allowed in Harlequin?",
        options: [
            "Orange and Black, Orange and Blue, Chocolate and Black, Lilac and Black",
            "Only Black and White",
            "Only Red",
            "Only Agouti",
        ],
        correctIndex: 0,
        fact: "Harlequins feature alternating color blocks in four recognized combinations.",
    },
    {
        prompt: "Which coat varieties are recognized in Silver Fox?",
        options: [
            "Silver",
            "Agouti",
            "Self",
            "Tan Pattern",
        ],
        correctIndex: 0,
        fact: "Silver Foxes recognize only the Silver variety.",
    },
    {
        prompt: "Which colors are allowed in Silver Fox?",
        options: [
            "Black, Blue, Chocolate, Lilac with standing silver coat",
            "Only Black and White",
            "Only Red",
            "Only Agouti",
        ],
        correctIndex: 0,
        fact: "Silver Foxes come in four base colors with distinctive silvering.",
    },
    {
        prompt: "Which coat varieties are recognized in Beveren?",
        options: [
            "Self",
            "Agouti",
            "Shaded",
            "Tan Pattern",
        ],
        correctIndex: 0,
        fact: "Beverens recognize only the Self variety.",
    },
    {
        prompt: "Which colors are allowed in Beveren?",
        options: [
            "Black, Blue, Brown, White",
            "Only Agouti",
            "Only Red",
            "Only Chocolate",
        ],
        correctIndex: 0,
        fact: "Beverens come in four recognized colors.",
    },
    {
        prompt: "Which coat varieties are recognized in Champagne d'Argent?",
        options: [
            "Self",
            "Agouti",
            "Shaded",
            "Broken",
        ],
        correctIndex: 0,
        fact: "Champagne d'Argents recognize only the Self variety.",
    },
    {
        prompt: "Which colors are allowed in Champagne d'Argent?",
        options: [
            "Silver with dark body",
            "Only Black and White",
            "Only Red",
            "Only Blue",
        ],
        correctIndex: 0,
        fact: "Champagne d'Argents have a distinctive silvered coat.",
    },
    {
        prompt: "Which coat varieties are recognized in English Spot?",
        options: [
            "Spotted",
            "Agouti",
            "Self",
            "Broken",
        ],
        correctIndex: 0,
        fact: "English Spots are specifically spotted patterned.",
    },
    {
        prompt: "Which colors are allowed in English Spot?",
        options: [
            "Black, Blue, Chocolate, Gold, Gray, Lilac, Tortoise with spots",
            "Only Agouti",
            "Only White",
            "Only Red",
        ],
        correctIndex: 0,
        fact: "English Spots come in seven recognized colors with spotting.",
    },
    {
        prompt: "Which coat varieties are recognized in Belgian Hare?",
        options: [
            "Agouti",
            "Self",
            "Shaded",
            "Broken",
        ],
        correctIndex: 0,
        fact: "Belgian Hares recognize only the Agouti variety.",
    },
    {
        prompt: "Which colors are allowed in Belgian Hare?",
        options: [
            "Chestnut Agouti with dark lacing",
            "Only Black and White",
            "Only Red",
            "Only Blue",
        ],
        correctIndex: 0,
        fact: "Belgian Hares have rich chestnut agouti coloring.",
    },
    {
        prompt: "Which coat varieties are recognized in Dutch?",
        options: [
            "Marked",
            "Agouti",
            "Self",
            "Broken",
        ],
        correctIndex: 0,
        fact: "Dutch rabbits are distinctly marked with specific patterns.",
    },
    {
        prompt: "Which colors are allowed in Dutch?",
        options: [
            "Black, Blue, Chocolate, Gray, Steel with white markings",
            "Only Agouti",
            "Only White",
            "Only Red",
        ],
        correctIndex: 0,
        fact: "Dutch come in five base colors with required white markings.",
    },
    {
        prompt: "Which coat varieties are recognized in Himalayan?",
        options: [
            "Self",
            "Agouti",
            "Shaded",
            "Tan Pattern",
        ],
        correctIndex: 0,
        fact: "Himalayans recognize only the Self variety.",
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
        prompt: "Which coat varieties are recognized in Checkered Giant?",
        options: [
            "Checkered",
            "Agouti",
            "Self",
            "Broken",
        ],
        correctIndex: 0,
        fact: "Checkered Giants are specifically a checkerboard patterned variety.",
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
        prompt: "Which coat varieties are recognized in Palomino?",
        options: [
            "Self",
            "Agouti",
            "Shaded",
            "Broken",
        ],
        correctIndex: 0,
        fact: "Palominos recognize only the Self variety.",
    },
    {
        prompt: "Which colors are allowed in Palomino?",
        options: [
            "Golden or Red with darker shading",
            "Only Agouti",
            "Only White",
            "Only Black",
        ],
        correctIndex: 0,
        fact: "Palominos have a distinctive warm golden or red coloration.",
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
    if (/arba|registration|tattoo|pedigree|meat-pen|meat pen|body type|moon eye|full-arch|fur type|dutch rabbit/.test(text)) {
        return "registrar";
    }
    if (/pasteurella|snuffles|rhdv|contagious|quarantine|palpate|homozygous|heterozygous|genotype|allele|vienna|charlie/.test(text)) {
        return "senior";
    }
    if (/gene|agouti|chinchilla|rufus|harlequin|brindling|kindling|gestation|breeding record/.test(text)) {
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

const nonRegistrarQuestions = questionBank.filter((question) => question.studyTrack !== "registrar");
const freeQuestionIds = new Set([
    ...TOPICS.flatMap((topic) => nonRegistrarQuestions.filter((question) => question.topic === topic).slice(0, 15)),
    ...nonRegistrarQuestions,
].slice(0, 75).map((question) => question.id));

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
const betaFullAccess = true;
let hasFullAccess = true;

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

const STUDY_PATH_ACCESS = {
    mixed: { topics: TOPICS, tracks: ["cloverbud", "junior", "intermediate", "senior", "registrar"] },
    cloverbud: { topics: ["Husbandry", "Health & Biosecurity"], tracks: ["cloverbud"] },
    junior: { topics: ["Husbandry", "Health & Biosecurity", "Genetics"], tracks: ["cloverbud", "junior"] },
    intermediate: { topics: TOPICS, tracks: ["cloverbud", "junior", "intermediate", "senior", "registrar"] },
    senior: { topics: TOPICS, tracks: ["cloverbud", "junior", "intermediate", "senior", "registrar"] },
    registrar: { topics: TOPICS, tracks: ["cloverbud", "junior", "intermediate", "senior", "registrar"] },
};

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
        && selectedStudyTracks().includes(question.studyTrack)
    );
    return currentMode() === "review"
        ? matchingQuestions.filter((question) => stats.misses.includes(question.id))
        : matchingQuestions;
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
            ? `Beta access is on: all ${questionBank.length} questions, including the Registrar study guide, are ready to test.`
            : `Full Question Bank unlocked: all ${questionBank.length} questions, including the Registrar study guide.`
        : `Unlock ${lockedQuestionCount}+ more questions, including the complete Registrar study guide, for one payment of $19.99. Lifetime access, no subscription, and study offline anytime.`;
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
    const incorrectChoice = question.options[selectedIndex];
    const correction = isCorrect
        ? "Review the note below to reinforce the rule."
        : `“${incorrectChoice}” does not match the key clue in this question. The best answer is “${question.options[question.correctIndex]}.”`;
    factBox.textContent = `${correction} ${question.fact || ""}`;
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
    feedback.textContent = isCorrect ? "Correct." : `Correct answer: ${question.options[question.correctIndex]}`;
    feedback.className = isCorrect ? "correct" : "incorrect";
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
