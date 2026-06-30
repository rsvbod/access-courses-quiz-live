export type Category = 'Tech_Logic' | 'Healthcare' | 'Science_Analysis' | 'People_Service' | 'Creative_Humanities' | 'Practical_Trades';

export interface Option {
  text: string;
  category: Category;
}

export interface Question {
  id: string;
  text: string;
  options: Option[];
}

export const generalQuestions: Question[] = [
  {
    id: "g1",
    text: "When you have free time, what topics do you naturally find yourself wanting to learn more about?",
    options: [
      { text: "How things are built, repaired, or structurally designed.", category: "Practical_Trades" },
      { text: "How computers, software, or business systems operate.", category: "Tech_Logic" },
      { text: "How the human body works, wellness, or medical breakthroughs.", category: "Healthcare" },
      { text: "History, the arts, human behaviour, or society.", category: "Creative_Humanities" },
      { text: "The natural world, laboratory science, or factual data analysis.", category: "Science_Analysis" },
      { text: "How to organise events, support others, or ensure people's safety.", category: "People_Service" }
    ]
  },
  {
    id: "g2",
    text: "Think about a time you felt genuinely accomplished after completing a task. What kind of task was it?",
    options: [
      { text: "Creating something physical, fixing a mechanical issue, or completing a hands-on project.", category: "Practical_Trades" },
      { text: "Solving a puzzle, configuring a system, or optimising a process.", category: "Tech_Logic" },
      { text: "Caring for someone, or helping them recover physically or mentally.", category: "Healthcare" },
      { text: "Writing, performing, designing, or researching a deep subject.", category: "Creative_Humanities" },
      { text: "Finding the answer to a complex question through observation or experimentation.", category: "Science_Analysis" },
      { text: "Providing excellent service, mediating a conflict, or protecting others.", category: "People_Service" }
    ]
  },
  {
    id: "g3",
    text: "If you could pick an ideal environment to spend most of your day, which sounds most appealing?",
    options: [
      { text: "Outdoors, on a site, or moving around a dynamic physical workspace.", category: "Practical_Trades" },
      { text: "At a desk, in an office, or working remotely with digital tools.", category: "Tech_Logic" },
      { text: "In a clinic, hospital, or care facility.", category: "Healthcare" },
      { text: "A studio, a classroom, or a cultural institution.", category: "Creative_Humanities" },
      { text: "A laboratory, research facility, or dedicated testing space.", category: "Science_Analysis" },
      { text: "A bustling public space, an event venue, or out in the community.", category: "People_Service" }
    ]
  },
  {
    id: "g4",
    text: "When working on a group project, what role do you naturally fall into?",
    options: [
      { text: "The hands-on builder who wants to physically put the pieces together.", category: "Practical_Trades" },
      { text: "The strategist who figures out the most efficient, logical way to get it done.", category: "Tech_Logic" },
      { text: "The supporter who ensures everyone's wellbeing and helps those struggling.", category: "Healthcare" },
      { text: "The creative thinker who focuses on the message, design, or historical context.", category: "Creative_Humanities" },
      { text: "The researcher who double-checks the facts, data, and accuracy.", category: "Science_Analysis" },
      { text: "The coordinator who talks to people, organises the team, and keeps morale high.", category: "People_Service" }
    ]
  }
];

export const specificQuestions: Question[] = [
  {
    id: "s1",
    text: "If you were given a budget to learn a practical skill, which would you choose?",
    options: [
      { text: "Bricklaying, carpentry, or electrical installation.", category: "Practical_Trades" },
      { text: "Programming, data analysis, or financial planning.", category: "Tech_Logic" },
      { text: "First aid, anatomy, or therapeutic massage.", category: "Healthcare" },
      { text: "Creative writing, sound engineering, or historical archiving.", category: "Creative_Humanities" },
      { text: "Microbiology techniques, chemical analysis, or environmental surveying.", category: "Science_Analysis" },
      { text: "Culinary arts, conflict resolution, or event management.", category: "People_Service" }
    ]
  },
  {
    id: "s2",
    text: "How do you prefer to see the results of your hard work?",
    options: [
      { text: "A physical structure or repaired object that wasn't there before.", category: "Practical_Trades" },
      { text: "A streamlined system, a functional app, or a growing business.", category: "Tech_Logic" },
      { text: "A patient recovering or improving their quality of life over time.", category: "Healthcare" },
      { text: "An engaged audience, a published piece, or a new perspective shared.", category: "Creative_Humanities" },
      { text: "A proven hypothesis, a detailed report, or a successful experiment.", category: "Science_Analysis" },
      { text: "A satisfied customer, a safe community, or a successful event.", category: "People_Service" }
    ]
  },
  {
    id: "s3",
    text: "Which of these career priorities is most important to you?",
    options: [
      { text: "Working with my hands and seeing tangible, physical results daily.", category: "Practical_Trades" },
      { text: "High earning potential and the ability to innovate or lead.", category: "Tech_Logic" },
      { text: "Job security in a role that directly cares for people's health.", category: "Healthcare" },
      { text: "Having the freedom to explore ideas, culture, and creativity.", category: "Creative_Humanities" },
      { text: "The opportunity to discover facts and work meticulously with data.", category: "Science_Analysis" },
      { text: "Being active, interacting with the public, and providing a direct service.", category: "People_Service" }
    ]
  },
  {
    id: "s4",
    text: "How do you feel about routine and predictability in your working day?",
    options: [
      { text: "I like working through a physical build or repair logically, step-by-step.", category: "Practical_Trades" },
      { text: "I enjoy optimising a routine to make it as efficient as possible.", category: "Tech_Logic" },
      { text: "I need to know my role, but accept that medical emergencies break the routine.", category: "Healthcare" },
      { text: "I prefer to avoid strict routines and let inspiration and research guide my day.", category: "Creative_Humanities" },
      { text: "I thrive on strict, methodical protocols where accuracy is everything.", category: "Science_Analysis" },
      { text: "I prefer when every day is totally different, reacting to people and situations.", category: "People_Service" }
    ]
  },
  {
    id: "s5",
    text: "If you had to solve a difficult problem, how would you approach it?",
    options: [
      { text: "Get my hands dirty and physically test different mechanical solutions.", category: "Practical_Trades" },
      { text: "Break it down into a logical flow chart or algorithm.", category: "Tech_Logic" },
      { text: "Consult with a team of specialists to find the best care plan.", category: "Healthcare" },
      { text: "Look at the historical context or brainstorm creative alternatives.", category: "Creative_Humanities" },
      { text: "Run controlled tests and analyse the resulting data.", category: "Science_Analysis" },
      { text: "Talk to the people involved to mediate and find a fair compromise.", category: "People_Service" }
    ]
  }
];

export interface Outcome {
  id: string;
  course: string;
  persona: string;
  headline: string;
  cta: string;
  pathwayInfo: string;
  url: string;
}

export const outcomes: Record<string, Outcome> = {
  "Tech_Logic": {
    id: "OUT-TECH",
    course: "Technology & Business",
    persona: "The Strategic Innovator: Highly logical, values efficiency, loves solving system puzzles, and driven by progress.",
    headline: "Your Mind is Built for Logic: Step into a High-Value Career.",
    cta: "Explore Tech Bootcamps, IT Apprenticeships & Business Diplomas.",
    pathwayInfo: "From university degrees in Computer Science to Level 4 Apprenticeships in Data Analysis or direct entry into Business Administration.",
    url: "https://accesscoursesonline.com/search?q=computer+science"
  },
  "Healthcare": {
    id: "OUT-HLTH",
    course: "Healthcare & Nursing",
    persona: "The Dedicated Guardian: Resilient, empathetic, thrives in team settings, and values the wellbeing of others.",
    headline: "Answer Your Calling: Transform Lives on the Frontlines of Healthcare.",
    cta: "Check Nursing Degrees, Care Work Roles & Healthcare Qualifications.",
    pathwayInfo: "Explore university pathways for Nursing/Midwifery, or vocational routes like a Senior Healthcare Support Worker apprenticeship.",
    url: "https://accesscoursesonline.com/search?q=nursing"
  },
  "Science_Analysis": {
    id: "OUT-SCI",
    course: "Science & Research",
    persona: "The Empirical Investigator: Driven by fact, data, and curiosity. Prefers structured environments like laboratories.",
    headline: "Unlock the Details: Advance Knowledge with a Career in Science.",
    cta: "View Science Diplomas & Laboratory Technician Apprenticeships.",
    pathwayInfo: "Pathways include traditional Science degrees, or practical, immediate roles like a Laboratory Assistant or Quality Control Inspector.",
    url: "https://accesscoursesonline.com/search?q=science"
  },
  "People_Service": {
    id: "OUT-SERV",
    course: "Public Service & Hospitality",
    persona: "The Community Pillar: Highly social, excellent at communication, and driven by providing service or safety to the public.",
    headline: "Make Every Interaction Count: Excel in Public-Facing Roles.",
    cta: "Discover Careers in Policing, Hospitality Management & Social Care.",
    pathwayInfo: "You don't need a traditional degree. Consider the Police Constable Degree Apprenticeship (PCDA), or vocational training in Hospitality and Event Management.",
    url: "https://accesscoursesonline.com/search?q=policing"
  },
  "Creative_Humanities": {
    id: "OUT-CREA",
    course: "Creative Arts & Humanities",
    persona: "The Social Catalyst: Deep interest in culture, design, human behaviour, and sharing ideas with the world.",
    headline: "Drive Meaningful Change: Shape Culture through Your Unique Voice.",
    cta: "Explore Arts Programmes, Social Science Degrees & Creative Portfolios.",
    pathwayInfo: "Whether going to university for Sociology, or building a portfolio for direct entry into Graphic Design, Media, or Writing, your perspective is your greatest asset.",
    url: "https://accesscoursesonline.com/search?q=humanities"
  },
  "Practical_Trades": {
    id: "OUT-TRAD",
    course: "Construction & Practical Trades",
    persona: "The Hands-On Builder: Prefers physical, tangible work. Enjoys seeing the immediate structural results of their effort.",
    headline: "Build the Future: Master a High-Demand Practical Trade.",
    cta: "Look into Construction Apprenticeships & Specialised Trade Skills.",
    pathwayInfo: "University isn't the only way. The UK has a massive demand for skilled tradespeople through apprenticeships in electrical installation, plumbing, and construction.",
    url: "https://accesscoursesonline.com/search?q=engineering"
  }
};

export function calculateOutcome(scores: Record<Category, number>): Outcome {
  let maxScore = -1;
  let topCategory: Category = 'Practical_Trades';
  
  // To ensure stable tie-breaking, we can use a fixed order, but object entries order is fine for now
  for (const [cat, score] of Object.entries(scores)) {
    if (score > maxScore) {
      maxScore = score;
      topCategory = cat as Category;
    }
  }

  return outcomes[topCategory];
}
