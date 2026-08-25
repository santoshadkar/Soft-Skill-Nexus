// SoftSkills Nexus - Comprehensive Deep-Dive Data Vault (IQ, EQ & SQ Integrated)

const SOFT_SKILLS_DATA = {
  // 1. STAGE-BASED PATHWAYS WITH IQ, EQ & SQ TRIAD INTEGRATION
  pathways: [
    {
      id: "school",
      title: "School & K-12 Foundation",
      subtitle: "Building core cognitive focus (IQ), emotional self-awareness (EQ), and social empathy (SQ) early",
      targetAudience: "Primary, Middle & High School Students",
      badgeColor: "#3b82f6",
      
      // IQ, EQ, SQ Triad Breakdown for School Stage
      triad: {
        iq: {
          title: "IQ: Cognitive Focus & Structural Logic",
          desc: "Developing memory retention, problem breakdown, logical reasoning, and active study habits.",
          enhancementStrategy: "Use the Feynman Technique: explain complex homework topics in simple terms to a peer.",
          keyPractices: [
            "Break large assignments into 25-minute Pomodoro focus blocks.",
            "Use mind maps and visual diagrams to summarize textbook chapters.",
            "Complete toughest homework tasks first before energy drops."
          ]
        },
        eq: {
          title: "EQ: Emotional Self-Awareness & Resilience",
          desc: "Recognizing frustration triggers, managing exam anxiety, and cultivating a growth mindset.",
          enhancementStrategy: "Practice the 3-2-1 breathing pause when feeling overwhelmed by tests or peer pressure.",
          keyPractices: [
            "Replace 'I can't do this' with 'I haven't mastered this yet'.",
            "Journal 3 daily wins before going to sleep to build optimism.",
            "Pause 5 seconds before reacting when feeling angry at a classmate."
          ]
        },
        sq: {
          title: "SQ: Social Empathy & Peer Collaboration",
          desc: "Understanding peer perspectives, respecting diverse backgrounds, and building fair team habits.",
          enhancementStrategy: "Practice active listening in group projects: paraphrase what your classmate said before responding.",
          keyPractices: [
            "Actively invite quieter team members to share their thoughts.",
            "Share project credit generously and celebrate peer achievements.",
            "Practice kindness and standing up against bullying or exclusion."
          ]
        }
      },

      skills: [
        {
          name: "Active Listening & Respectful Dialogue",
          desc: "Paying full attention to peers & teachers without interrupting or jumping to conclusions.",
          icon: "👂",
          keyAction: "Maintain eye contact, count to 2 before speaking, rephrase what you heard.",
          dialogueScript: "Peer: 'I feel stressed about the group project.' -> You: 'It sounds like the deadline feels overwhelming. Let's break it into smaller steps together.'"
        },
        {
          name: "Team Collaboration & Peer Support",
          desc: "Working constructively in group projects, sharing credit, and encouraging shy peers.",
          icon: "🤝",
          keyAction: "Assign clear group roles; actively invite quieter members to share their ideas.",
          dialogueScript: "You: 'Sam, you had a great idea on research earlier—what do you think we should do first?'"
        },
        {
          name: "Basic Presentation & Voice Control",
          desc: "Overcoming stage fear to share thoughts clearly in front of class.",
          icon: "🎤",
          keyAction: "Use 3-2-1 belly breathing before standing up; speak deliberately with pauses.",
          dialogueScript: "Opening line: 'Today, I want to share 3 surprising facts about ocean conservation...'"
        },
        {
          name: "Time & Homework Prioritization",
          desc: "Balancing school, extracurriculars, play, and study without last-minute panic.",
          icon: "⏰",
          keyAction: "Use a simple daily checklist; complete hardest homework first.",
          dialogueScript: "Self-Talk: 'I will finish 25 minutes of math focus time before checking social media.'"
        }
      ]
    },
    {
      id: "college",
      title: "University & College Scholars",
      subtitle: "Preparing for career readiness, networking, critical synthesis, and professional etiquette",
      targetAudience: "Undergraduates, Graduates & Job Seekers",
      badgeColor: "#8b5cf6",

      triad: {
        iq: {
          title: "IQ: Analytical Rigor & Evidence Synthesis",
          desc: "Evaluating information critically, detecting data bias, and structuring complex research.",
          enhancementStrategy: "First-Principles Thinking: deconstruct problems to fundamental truths rather than accepting assumptions.",
          keyPractices: [
            "Ask 'What primary evidence supports this claim?' before taking conclusions for granted.",
            "Synthesize multi-source research into 1-page executive briefs.",
            "Master quantitative data visualization and structured slide design."
          ]
        },
        eq: {
          title: "EQ: Stress Management & Interview Confidence",
          desc: "Regulating job search anxiety, handling interview rejection, and projecting authentic confidence.",
          enhancementStrategy: "Conduct mock interview recording self-audits: evaluate vocal tone and body language.",
          keyPractices: [
            "Use diaphragmatic breathing to regulate heart rate during high-stakes interviews.",
            "Separate self-worth from job application rejections; view each interview as data.",
            "Practice SBI model feedback when receiving critique on academic work."
          ]
        },
        sq: {
          title: "SQ: Networking Etiquette & Professional Purpose",
          desc: "Building authentic professional relationships, cold outreach, and aligning career with core values.",
          enhancementStrategy: "Value-First Networking: always offer insight, appreciation, or mutual benefit before asking for favors.",
          keyPractices: [
            "Send personalized connection notes highlighting specific shared research or interests.",
            "Engage in community mentoring or campus leadership roles.",
            "Cultivate professional integrity and ethical responsibility in technical projects."
          ]
        }
      },

      skills: [
        {
          name: "STAR Method Interview Storytelling",
          desc: "Structuring real-world experiences into compelling, high-impact job interview answers.",
          icon: "🌟",
          keyAction: "Structure answers as Situation (15%), Task (15%), Action (50%), Result (20%).",
          dialogueScript: "Interviewer: 'Tell me about a conflict.' -> You: 'In my senior design project, our team clashed over database architecture. I scheduled an alignment session, benchmarked performance metrics, and delivered 2 weeks early.'"
        },
        {
          name: "Public Speaking & Presentation Flow",
          desc: "Delivering engaging presentations with visual clarity, narrative structure, and confidence.",
          icon: "📊",
          keyAction: "Limit slides to 1 core idea; practice delivery out loud 3x; use vocal variety.",
          dialogueScript: "Hook: 'Imagine reducing customer onboarding friction by 40% with zero additional marketing spend. Here is how we did it...'"
        },
        {
          name: "Networking & Professional Etiquette",
          desc: "Building authentic LinkedIn connections and cold email outreach that get responses.",
          icon: "🌐",
          keyAction: "Send personalized connection notes mentioning a specific shared interest or article.",
          dialogueScript: "Outreach Email: 'Hi Sarah, loved your recent article on product strategy. I'm a senior researching user onboarding. Would you be open to a 10-min virtual coffee next Tuesday?'"
        }
      ]
    },
    {
      id: "corporate-early",
      title: "Early to Mid-Career Professionals",
      subtitle: "Maximizing impact, stakeholder trust, cross-functional alignment, and emotional regulation",
      targetAudience: "Individual Contributors, Associates & Senior Professionals",
      badgeColor: "#06b6d4",

      triad: {
        iq: {
          title: "IQ: Strategic Problem Solving & Data-Driven Logic",
          desc: "Navigating business ambiguity, root-cause troubleshooting, and financial/operational logic.",
          enhancementStrategy: "Apply the 5 Whys Technique: drill down past superficial symptoms to uncover core systemic causes.",
          keyPractices: [
            "Frame project proposals in terms of ROI, saved engineering hours, or customer retention.",
            "Use BLUF (Bottom Line Up Front) when emailing senior leaders.",
            "Conduct pre-mortems before launching major initiatives."
          ]
        },
        eq: {
          title: "EQ: Emotional Self-Regulation & Conflict Resolution",
          desc: "Maintaining composure under intense pressure, giving non-defensive feedback, and building rapport.",
          enhancementStrategy: "Master the 5-Second Emotional Pause when receiving sudden criticism in meetings or Slack.",
          keyPractices: [
            "Use the SBI Model (Situation-Behavior-Impact) when addressing peer friction.",
            "Separate project feedback from personal self-worth.",
            "Practice active listening during heated cross-functional debates."
          ]
        },
        sq: {
          title: "SQ: Stakeholder Alignment & Cultural Trust",
          desc: "Building cross-functional coalitions, influence without authority, and fostering inclusive culture.",
          enhancementStrategy: "Map Stakeholder Incentives: understand what metrics matter most to Sales, Product, and Engineering.",
          keyPractices: [
            "Consult lateral department heads individually before public proposal meetings.",
            "Advocate for psychological safety and equitable work allocation.",
            "Align daily contributions with long-term company mission and ethical standards."
          ]
        }
      },

      skills: [
        {
          name: "Executive Communication (BLUF)",
          desc: "Communicating complex technical updates clearly to senior business leaders.",
          icon: "💬",
          keyAction: "Use BLUF: state request/conclusion in first 2 sentences.",
          dialogueScript: "Email Subject: [DECISION REQUIRED] API Infrastructure Upgrade Budget ($15K)\nBody: 'We request approval for $15K to upgrade API nodes by Friday. This prevents projected 20% latency spikes during Q4 peak traffic.'"
        },
        {
          name: "SBI Feedback Loop (Situation-Behavior-Impact)",
          desc: "Giving and receiving actionable, non-defensive constructive feedback.",
          icon: "🎯",
          keyAction: "Describe specific situation and observable behavior without attacking intent.",
          dialogueScript: "Feedback Script: 'In yesterday's client sync (Situation), when you interrupted the client's question mid-way (Behavior), it made them feel rushed and undermined trust (Impact). Next time, let's wait 3 seconds after they finish.'"
        },
        {
          name: "Cross-Functional Stakeholder Management",
          desc: "Aligning product, engineering, sales, and marketing around shared organizational goals.",
          icon: "🔄",
          keyAction: "Identify each stakeholder's core incentives and tailor your communication pitch.",
          dialogueScript: "To Sales: 'This engineering fix reduces onboarding drop-off, directly boosting your closed-won conversion rate by 12%.'"
        }
      ]
    },
    {
      id: "leadership",
      title: "Corporate Leaders & Executives",
      subtitle: "Inspiring teams, driving strategic vision, coaching talent, and building psychological safety",
      targetAudience: "Managers, Directors, VPs & C-Suite Executives",
      badgeColor: "#10b981",

      triad: {
        iq: {
          title: "IQ: Executive Decision Making & Resource Allocation",
          desc: "Making high-stakes decisions under incomplete data, portfolio management, and vision setting.",
          enhancementStrategy: "Type 1 vs Type 2 Decision Framework: act fast on reversible decisions; save deep analysis for irreversible ones.",
          keyPractices: [
            "Act decisively when possessing ~70% of necessary information.",
            "Simplify complex organizational strategy into 3 clear operational pillars.",
            "Establish quarterly blameless post-mortems for major strategic bets."
          ]
        },
        eq: {
          title: "EQ: Executive Presence & Psychological Safety",
          desc: "Projecting calm authority under crisis, coaching mentees, and maintaining empathetic leadership.",
          enhancementStrategy: "GROW Coaching Model: ask open-ended questions to guide direct reports to their own solutions.",
          keyPractices: [
            "Publicly thank team members who highlight mistakes or express dissenting opinions.",
            "Speak deliberately, lower vocal inflection at line ends, embrace strategic pauses.",
            "Balance high performance standards with deep personal care (Radical Candor)."
          ]
        },
        sq: {
          title: "SQ: Organizational Purpose & Ethical Stewardship",
          desc: "Guiding organizations through cultural transformation, social responsibility, and values alignment.",
          enhancementStrategy: "Values-Based Change Management: over-communicate the 'Why' behind corporate shifts before the 'What'.",
          keyPractices: [
            "Champion diversity, equity, and psychological well-being across departments.",
            "Ensure corporate decisions reflect long-term ethical integrity and societal benefit.",
            "Build lasting mentorship networks that elevate underrepresented leaders."
          ]
        }
      },

      skills: [
        {
          name: "Executive Presence & Gravitas",
          desc: "Projecting calm authority, vision, and authenticity under high uncertainty.",
          icon: "👑",
          keyAction: "Speak deliberately, lower vocal inflection at phrase ends, embrace strategic pauses.",
          dialogueScript: "Executive Statement: 'We face market headwinds this quarter. Here is our 3-point strategy, and here is how each team will be supported to execute it.'"
        },
        {
          name: "Coaching & GROW Model Mentorship",
          desc: "Developing team talent through open-ended coaching questions rather than directives.",
          icon: "🚀",
          keyAction: "Ask GROW questions: Goal -> Reality -> Options -> Way Forward.",
          dialogueScript: "Coach Question: 'What options have you considered to resolve this bottleneck, and what is the potential downside of option A?'"
        },
        {
          name: "Psychological Safety Cultivation",
          desc: "Fostering a culture where team members feel safe taking smart risks and admitting errors.",
          icon: "🛡️",
          keyAction: "Publicly thank people for highlighting mistakes or expressing dissenting views.",
          dialogueScript: "Leader Response: 'Thank you for pointing out that flaw in our launch plan, Elena. You saved us from a costly public mistake.'"
        }
      ]
    }
  ],

  // 2. 5 CORE SKILL PILLARS MATRIX
  pillars: [
    {
      id: "comm",
      name: "Communication & Expressiveness",
      icon: "🗣️",
      color: "gradient-blue",
      accent: "#3b82f6",
      tagline: "Articulate ideas with precision, active listening, and persuasive clarity.",
      keyFrameworks: ["STAR Method", "BLUF (Bottom Line Up Front)", "Pyramid Principle", "Rule of Three"],
      detailedSkills: [
        {
          title: "Active Listening & Empathy Loop",
          level: "All Stages",
          summary: "Absorbing information deeply without formulating your reply prematurely.",
          actionableSteps: [
            "Maintain relaxed eye contact and non-verbal nod cues.",
            "Paraphrase key points: 'What I hear you saying is...'",
            "Ask clarifying questions before offering solutions."
          ],
          scriptExample: "'It sounds like the main bottleneck is lack of clarity on project ownership. Am I understanding correctly?'",
          bodyLanguageCue: "Uncrossed arms, leaning slightly forward, nodding at key points, maintaining 60-70% eye contact.",
          pitfall: "Interrupting with a personal story or jumping straight into advice mode.",
          reflectionExercise: "In your next 3 conversations today, count to 3 silently after the speaker finishes before you say a single word."
        },
        {
          title: "Public Speaking & Storytelling",
          level: "College & Professional",
          summary: "Engaging audiences through narrative hooks, vocal variety, and structured arguments.",
          actionableSteps: [
            "Start with a compelling story, stat, or provocative question.",
            "Use the 3-part framework: Context -> Conflict -> Resolution.",
            "Pause 2 seconds after key statements to let them resonate."
          ],
          scriptExample: "'Three months ago, our customer drop-off rate was 35%. Today, after fixing onboarding friction, it stands at 8%.'",
          bodyLanguageCue: "Grounded stance, open palms, making eye contact with 3 distinct room areas.",
          pitfall: "Reading directly off slides with monotone delivery and rapid pacing.",
          reflectionExercise: "Record a 2-minute video presentation on your phone. Count filler words ('um', 'like') and practice removing them."
        },
        {
          title: "Written & Digital Etiquette",
          level: "Corporate",
          summary: "Writing concise emails, Slack messages, and proposals that drive immediate action.",
          actionableSteps: [
            "Place primary request or decision needed in the first 2 sentences.",
            "Use bullet points for readability on mobile screens.",
            "Proofread tone to eliminate passive-aggressive phrasing."
          ],
          scriptExample: "Subject: [ACTION REQUIRED] Review Security Audit by 5 PM Thursday\nHi Team, please approve attached checklist...",
          bodyLanguageCue: "Digital: Clear paragraph spacing, bolding key deadlines, polite sign-offs.",
          pitfall: "Sending wall-of-text messages without clear calls-to-action.",
          reflectionExercise: "Take your last sent 4-paragraph work email and rewrite it in 3 bullet points without losing core information."
        }
      ]
    },
    {
      id: "eq",
      name: "Emotional Intelligence & Interpersonal",
      icon: "🫀",
      color: "gradient-pink",
      accent: "#ec4899",
      tagline: "Master self-awareness, emotional regulation, and deep relational trust.",
      keyFrameworks: ["SCARF Model", "SBI Feedback", "5-Second Emotional Pause", "Johari Window"],
      detailedSkills: [
        {
          title: "Emotional Self-Regulation",
          level: "All Stages",
          summary: "Managing internal stress responses during intense feedback or high-pressure conflicts.",
          actionableSteps: [
            "Notice physical triggers (tight jaw, rapid heart rate).",
            "Take 3 deep diaphragm breaths before speaking.",
            "Separate emotion from objective facts: 'I feel anxious, but the facts are...'"
          ],
          scriptExample: "'I want to make sure I process this feedback fully. Can we pause for 10 minutes and regroup?'",
          bodyLanguageCue: "Deep slow breaths, relaxed jaw, steady voice pitch.",
          pitfall: "Reacting immediately in anger, defensiveness, or passive-aggressive silence.",
          reflectionExercise: "When someone challenges you today, write down the emotion you felt, the physical trigger, and how you regulated it."
        },
        {
          title: "Constructive Feedback (SBI Model)",
          level: "Early to Mid-Career",
          summary: "Delivering feedback focused strictly on observable behavior and impact rather than character.",
          actionableSteps: [
            "Situation: Specify exact time and place.",
            "Behavior: Describe observable action objectively.",
            "Impact: Explain outcome on team/project without judgment."
          ],
          scriptExample: "'In yesterday's sprint planning (Situation), when you interrupted Sarah twice (Behavior), she stopped sharing her architectural proposal (Impact).'",
          bodyLanguageCue: "Calm, private 1-on-1 setting, neutral vocal tone.",
          pitfall: "Using subjective labels like 'You were unprofessional' or 'You always ignore people'.",
          reflectionExercise: "Draft an SBI feedback script for a real-world friction point you currently experience, then practice saying it out loud."
        }
      ]
    },
    {
      id: "leadership",
      name: "Leadership & Strategic Influence",
      icon: "👑",
      color: "gradient-emerald",
      accent: "#10b981",
      tagline: "Inspire alignment, coach high performers, and exercise executive presence.",
      keyFrameworks: ["GROW Coaching Model", "Radical Candor", "Situational Leadership", "SCARF Influence"],
      detailedSkills: [
        {
          title: "Influence Without Authority",
          level: "Mid-Career to Exec",
          summary: "Persuading stakeholders when you have no direct hierarchical power.",
          actionableSteps: [
            "Understand each stakeholder's personal KPIs and incentives.",
            "Build coalitions by consulting key leaders before public meetings.",
            "Frame proposals as mutual wins for the organization."
          ],
          scriptExample: "'By streamlining this handoff, your team saves 5 hours a week while our engineering team cuts bug reports by 30%.'",
          bodyLanguageCue: "Confident upright posture, steady cadence, engaging gestures.",
          pitfall: "Relying on executive mandates or complaints to force compliance.",
          reflectionExercise: "Identify 1 key stakeholder you need to persuade. List their top 3 personal work goals and frame your idea to support them."
        },
        {
          title: "GROW Coaching Model",
          level: "Managers & Mentors",
          summary: "Guiding mentees and direct reports to solve complex problems independently.",
          actionableSteps: [
            "Goal: What do you want to achieve?",
            "Reality: What is currently happening?",
            "Options: What paths could you take?",
            "Way Forward: What specific step will you take by when?"
          ],
          scriptExample: "'If you had zero constraints, how would you solve this technical roadblock?'",
          bodyLanguageCue: "Listening posture, note-taking, open body stance.",
          pitfall: "Jumping in immediately to give them the answer.",
          reflectionExercise: "In your next 1-on-1, ask 3 open coaching questions instead of giving direct instructions."
        }
      ]
    },
    {
      id: "cognitive",
      name: "Cognitive & Problem Solving",
      icon: "🧠",
      color: "gradient-purple",
      accent: "#8b5cf6",
      tagline: "Navigate ambiguity, evaluate evidence, and make sound decisions under pressure.",
      keyFrameworks: ["5 Whys Technique", "First Principles Thinking", "Eisenhower Matrix", "Pre-Mortem Analysis"],
      detailedSkills: [
        {
          title: "Root Cause Analysis (5 Whys)",
          level: "All Stages",
          summary: "Drilling down past surface-level symptoms to uncover underlying systemic root causes.",
          actionableSteps: [
            "State the problem clearly.",
            "Ask 'Why did this happen?' 5 consecutive times.",
            "Address systemic root causes rather than temporary patches."
          ],
          scriptExample: "'Why did deploy fail? -> DB connection timed out. Why? -> Pool exhausted. Why? -> Unindexed query locked tables. (Fix: Index query)'",
          bodyLanguageCue: "Curious, analytical tone; whiteboard mapping.",
          pitfall: "Stopping at the first superficial explanation ('Human error').",
          reflectionExercise: "Take a recurring friction point in your team and run the 5 Whys technique until you reach systemic infrastructure or workflow causes."
        }
      ]
    },
    {
      id: "resilience",
      name: "Personal Effectiveness & Resilience",
      icon: "⚡",
      color: "gradient-amber",
      accent: "#f59e0b",
      tagline: "Master self-discipline, time prioritization, and bounce-back resilience.",
      keyFrameworks: ["Pomodoro Technique", "Eisenhower Prioritization", "Atomic Habits", "Energy Management"],
      detailedSkills: [
        {
          title: "Prioritization (Eisenhower Matrix)",
          level: "All Stages",
          summary: "Distinguishing between urgent noise and high-impact strategic goals.",
          actionableSteps: [
            "Quadrant 1 (Urgent & Important): Do immediately.",
            "Quadrant 2 (Not Urgent & Important): Schedule dedicated deep work blocks.",
            "Quadrant 3 & 4: Delegate or eliminate distraction tasks."
          ],
          scriptExample: "'I am blocking 9:00 - 11:00 AM daily for Quadrant 2 strategic deep work with notifications muted.'",
          bodyLanguageCue: "Disciplined boundary setting, calm focus.",
          pitfall: "Spending all day reacting to urgent slack alerts instead of strategic goals.",
          reflectionExercise: "Audit yesterday's work hours. Categorize every hour into Quadrants 1 to 4 and move 1 hour from Quadrant 3 to Quadrant 2 today."
        }
      ]
    }
  ],

  // 3. EXPANDED 15-QUESTION DIAGNOSTIC QUIZ
  diagnosticQuiz: [
    {
      id: 1,
      category: "comm",
      question: "During an important presentation, an executive interrupts to challenge your core assumption. How do you respond?",
      options: [
        { text: "Pause, validate their concern ('That's a critical point'), address it using structured data, and offer a follow-up deep-dive.", points: 3 },
        { text: "Get defensive, talk over them, and try to prove your original slide was correct immediately.", points: 1 },
        { text: "Nod passively, abandon your point completely, and move to the next slide without addressing the objection.", points: 2 }
      ]
    },
    {
      id: 2,
      category: "comm",
      question: "You need to email a busy VP requesting a $20,000 software budget approval. How do you format the email?",
      options: [
        { text: "Use BLUF (Bottom Line Up Front): State the exact dollar amount, ROI, and deadline in the first two lines, followed by bulleted evidence.", points: 3 },
        { text: "Write a 5-paragraph background essay explaining the history of your software tools before mentioning money.", points: 1 },
        { text: "Send a quick Slack message saying 'Hey, can we talk about money sometime?' without context.", points: 2 }
      ]
    },
    {
      id: 3,
      category: "comm",
      question: "In a 1-on-1 meeting, a peer is explaining a complex problem they are experiencing. What is your active listening strategy?",
      options: [
        { text: "Maintain eye contact, refrain from interrupting, and paraphrase: 'What I hear you saying is X, am I understanding correctly?'", points: 3 },
        { text: "Interrupt halfway through to share how you solved a similar problem in your own career.", points: 1 },
        { text: "Check your phone or Slack notifications while nodding along silently.", points: 2 }
      ]
    },
    {
      id: 4,
      category: "eq",
      question: "You receive critical performance feedback in an annual review that feels unfair at first glance. What do you do?",
      options: [
        { text: "Take a deep breath (5-second pause), thank them for the feedback, and ask clarifying questions to understand their perspective.", points: 3 },
        { text: "Immediately list excuses, blame colleagues, and accuse the manager of bias.", points: 1 },
        { text: "Shut down emotionally, nod silently, and harbor resentment for the next 6 months.", points: 2 }
      ]
    },
    {
      id: 5,
      category: "eq",
      question: "A junior teammate makes a mistake that delays project deployment by 1 day. How do you deliver feedback?",
      options: [
        { text: "Use the SBI model: Specify the situation, objective behavior, and project impact, then co-create a prevention plan.", points: 3 },
        { text: "Reprimand them publicly in the team Slack channel so everyone knows who caused the delay.", points: 1 },
        { text: "Say nothing to them directly, but complain about their incompetence to other teammates.", points: 2 }
      ]
    },
    {
      id: 6,
      category: "eq",
      question: "During a tense debate in a meeting, you notice your heart rate spiking and jaw tightening. How do you regulate yourself?",
      options: [
        { text: "Recognize the physical trigger, take 3 slow diaphragm breaths, and focus strictly on objective facts rather than emotion.", points: 3 },
        { text: "Raise your voice to match the energy of the room and force your point across.", points: 1 },
        { text: "Abruptly walk out of the meeting room without saying anything.", points: 2 }
      ]
    },
    {
      id: 7,
      category: "leadership",
      question: "You need a cross-functional engineering team (who does not report to you) to prioritize your bug fix request. What is your approach?",
      options: [
        { text: "Understand their sprint incentives, demonstrate how fixing this bug helps their metrics, and build lateral alignment.", points: 3 },
        { text: "Demand immediate action and threaten to complain to their VP if they don't comply.", points: 1 },
        { text: "Submit a ticket with zero context and wait passively for 3 weeks.", points: 2 }
      ]
    },
    {
      id: 8,
      category: "leadership",
      question: "A direct report or mentee comes to you stuck on a technical challenge. How do you handle it?",
      options: [
        { text: "Use the GROW coaching framework: Ask open questions about their goal, current reality, and options to guide them to their own answer.", points: 3 },
        { text: "Take over their keyboard and fix the problem yourself because 'it's faster'.", points: 1 },
        { text: "Tell them 'figure it out' and offer zero guidance or support.", points: 2 }
      ]
    },
    {
      id: 9,
      category: "leadership",
      question: "How do you cultivate psychological safety within your group or team?",
      options: [
        { text: "Openly acknowledge your own mistakes, thank people who raise dissenting opinions, and treat failures as learning experiments.", points: 3 },
        { text: "Highlight and punish mistakes publicly to set an example of high standards.", points: 1 },
        { text: "Avoid discussing failures or mistakes altogether and pretend everything is perfect.", points: 2 }
      ]
    },
    {
      id: 10,
      category: "cognitive",
      question: "A critical customer-facing feature fails right after launch. What is your troubleshooting protocol?",
      options: [
        { text: "Conduct a blameless root-cause analysis using the 5 Whys technique to identify systemic flaws.", points: 3 },
        { text: "Find out which developer wrote the code and assign sole blame to them.", points: 1 },
        { text: "Apply a quick surface patch without investigating why the failure occurred.", points: 2 }
      ]
    },
    {
      id: 11,
      category: "cognitive",
      question: "You need to make a strategic choice, but you only have ~70% of the desired data. How do you proceed?",
      options: [
        { text: "Assess if the decision is reversible (Type 2); if so, act decisively with 70% data and establish a pre-mortem mitigation plan.", points: 3 },
        { text: "Delay the decision indefinitely until 100% complete certainty is reached (analysis paralysis).", points: 1 },
        { text: "Flip a coin randomly without evaluating the 70% data you already possess.", points: 2 }
      ]
    },
    {
      id: 12,
      category: "cognitive",
      question: "A sudden company pivot renders your last 2 months of project planning obsolete. How do you adapt?",
      options: [
        { text: "Reframe the shift ('What new opportunity does this create?'), unlearn obsolete assumptions, and align with new objectives.", points: 3 },
        { text: "Refuse to change your workflow and insist on finishing the old project out of spite.", points: 1 },
        { text: "Become demoralized and stop putting effort into future projects.", points: 2 }
      ]
    },
    {
      id: 13,
      category: "resilience",
      question: "Your inbox has 40 unread messages, Slack is pinging, and you have a major report due Friday. How do you manage your day?",
      options: [
        { text: "Use the Eisenhower Matrix: Block 2 hours of uninterrupted focus for the major report (Quadrant 2) before answering routine messages.", points: 3 },
        { text: "React to whichever notification pops up first, spending all day in email/Slack while the report sits untouched.", points: 1 },
        { text: "Work until 2 AM every night out of panic to clear every minor ping.", points: 2 }
      ]
    },
    {
      id: 14,
      category: "resilience",
      question: "You pitched an innovative project proposal, but the leadership committee rejected it. How do you process this setback?",
      options: [
        { text: "Debrief objectively: Ask for specific feedback, treat it as valuable data, refine the proposal, and try again.", points: 3 },
        { text: "Take the rejection personally, conclude that leadership hates your ideas, and never pitch again.", points: 1 },
        { text: "Complain bitterly to your coworkers about how incompetent the committee is.", points: 2 }
      ]
    },
    {
      id: 15,
      category: "resilience",
      question: "How do you protect your long-term energy and focus during intense 6-week project sprints?",
      options: [
        { text: "Maintain non-negotiable boundaries for sleep, exercise, and evening disconnection to sustain high cognitive output.", points: 3 },
        { text: "Survive on 4 hours of sleep and 5 cups of coffee, wearing burnout as a badge of honor.", points: 1 },
        { text: "Skip all breaks and work through weekends until you suffer physical exhaustion.", points: 2 }
      ]
    }
  ],

  // 4. OVERHAULED & EXPANDED REAL-WORLD SCENARIO SIMULATOR (4 COMPLETE SCENARIOS)
  scenarios: [
    {
      id: "scenario-1",
      title: "Resolving Team Friction in a High-Stakes Deadline",
      stage: "Corporate / College",
      icon: "🔥",
      setup: "Your team is 48 hours away from delivering a critical launch. A senior developer, Alex, is falling behind and publicly criticizing frontend team lead Jordan in Slack. Tension is high.",
      steps: [
        {
          question: "How do you initiate the conversation with Alex?",
          options: [
            {
              label: "A. Use SBI (Situation-Behavior-Impact): 'Alex, in yesterday's Slack sync when project status was reviewed, the public comment delayed testing. Let's see how we can unblock this together.'",
              isOptimal: true,
              feedback: "Excellent! You focused objectively on observable behavior and impact, inviting collaboration without putting Alex on the defensive.",
              nextStep: 1
            },
            {
              label: "B. Direct confrontation: 'Alex, you are missing deadlines and making our team look bad. You need to fix your attitude right now.'",
              isOptimal: false,
              feedback: "Sub-optimal. Accusatory language causes Alex to shut down or counter-attack, escalating tension right before deadline.",
              nextStep: 1
            },
            {
              label: "C. Escalate immediately to executive VP leadership without talking to Alex first.",
              isOptimal: false,
              feedback: "Escalating without first attempting peer-level dialogue destroys trust and damages your relationship with Alex.",
              nextStep: 1
            }
          ]
        },
        {
          question: "Alex replies defensively: 'You don't understand how overworked I am! Sales gave me bad requirements!' How do you de-escalate?",
          options: [
            {
              label: "A. Empathy + Problem Solving: 'I hear you, Alex. It sounds like Sales put you in a tough spot. Let me spend 1 hour helping you reformat those requirements right now.'",
              isOptimal: true,
              feedback: "Outstanding! Validating their stress while offering tangible peer assistance creates alignment and gets the project moving.",
              nextStep: null
            },
            {
              label: "B. Dismiss feelings: 'We are all overworked Alex, stop making excuses and just get it done.'",
              isOptimal: false,
              feedback: "Dismissing emotions destroys psychological safety and guarantees poor execution.",
              nextStep: null
            }
          ]
        }
      ]
    },
    {
      id: "scenario-2",
      title: "Pitching an Unconventional Automation Idea to Executive Leadership",
      stage: "Professional / Executive",
      icon: "💡",
      setup: "You identified an automation tool that saves 15 hours/week per engineer, but requires a $10,000 annual license. You have 5 minutes in front of the executive committee.",
      steps: [
        {
          question: "How do you open your executive pitch?",
          options: [
            {
              label: "A. BLUF Framework: 'We spend $45,000 annually in lost manual engineering hours. Spending $10,000 on tool X yields a 3.5x ROI in 6 months.'",
              isOptimal: true,
              feedback: "Spot on! Executives care about bottom-line business metrics and ROI upfront.",
              nextStep: 1
            },
            {
              label: "B. Feature Walkthrough: Start explaining all 25 technical features of the software step-by-step.",
              isOptimal: false,
              feedback: "Executives lose focus quickly when presented with feature dumps instead of strategic financial value.",
              nextStep: 1
            }
          ]
        },
        {
          question: "The CFO asks: 'Why can't we just build this tool internally ourselves?' How do you respond?",
          options: [
            {
              label: "A. Opportunity Cost Argument: 'Building internally would consume 200 senior engineering hours ($30K cost), delaying our core product roadmap by 2 months. Purchasing is 3x cheaper and instant.'",
              isOptimal: true,
              feedback: "Brilliant! You calculated opportunity cost and engineering velocity, directly addressing the CFO's financial mindset.",
              nextStep: null
            },
            {
              label: "B. Emotional objection: 'Because our engineers are tired and don't want to build it.'",
              isOptimal: false,
              feedback: "Emotional responses fail in executive financial committee meetings.",
              nextStep: null
            }
          ]
        }
      ]
    },
    {
      id: "scenario-3",
      title: "Navigating Salary & Promotion Negotiation with Your Manager",
      stage: "Early to Mid-Career",
      icon: "💰",
      setup: "You have delivered 3 major successful projects over the last 12 months, exceeding KPIs. You are scheduling your annual compensation review.",
      steps: [
        {
          question: "How do you prepare and frame your compensation request?",
          options: [
            {
              label: "A. Value-Delivered Portfolio: Prepare a 1-page summary of quantifiable contributions (e.g. $120K revenue impact, 25% efficiency gain) and benchmark industry salary data.",
              isOptimal: true,
              feedback: "Perfect preparation! Salary negotiations should be grounded in quantifiable business value delivered and objective market benchmarks.",
              nextStep: 1
            },
            {
              label: "B. Personal Needs Pitch: Explain that inflation and personal expenses have increased and you need more money.",
              isOptimal: false,
              feedback: "Personal financial needs do not persuade business managers during compensation reviews.",
              nextStep: 1
            }
          ]
        },
        {
          question: "Your manager says: 'You deserve this raise, but our department budget is frozen until Q3.' How do you respond?",
          options: [
            {
              label: "A. Collaborative Future Commitment: 'I understand budget constraints. Can we agree in writing on a Q3 promotion path if I hit X milestone, and explore non-monetary growth (conference sponsorship / title upgrade) today?'",
              isOptimal: true,
              feedback: "Masterful negotiation! You showed empathy for budget constraints while securing a firm future commitment and immediate non-cash value.",
              nextStep: null
            },
            {
              label: "B. Threaten to quit immediately.",
              isOptimal: false,
              feedback: "Ultimatums burn bridges and destroy long-term career relationships.",
              nextStep: null
            }
          ]
        }
      ]
    },
    {
      id: "scenario-4",
      title: "De-escalating an Upset Enterprise Client After a Software Outage",
      stage: "Corporate & Customer Success",
      icon: "📞",
      setup: "A major enterprise client experienced a 2-hour software downtime during their peak sales event. The Vice President of the client company calls you furious.",
      steps: [
        {
          question: "What is your immediate opening response on the phone call?",
          options: [
            {
              label: "A. Active Listening + Empathy: 'VP Johnson, I completely understand your anger. A 2-hour outage during your peak event is unacceptable, and I am personally overseeing our incident debrief right now.'",
              isOptimal: true,
              feedback: "Outstanding active listening! Validating their emotion first de-escalates anger faster than any technical explanation.",
              nextStep: 1
            },
            {
              label: "B. Technical Excuses: Immediately start arguing that cloud server provider AWS was at fault, not your company.",
              isOptimal: false,
              feedback: "Clients do not care about third-party excuses during a crisis. Blame shifting destroys trust.",
              nextStep: 1
            }
          ]
        },
        {
          question: "The client asks: 'How do I know this won't happen again next week?' How do you reassure them?",
          options: [
            {
              label: "A. Transparent Post-Mortem Commitment: 'We are delivering a full Root-Cause Analysis (5 Whys) report by 5 PM tomorrow, detailing our automated failover upgrades to guarantee 99.99% uptime.'",
              isOptimal: true,
              feedback: "Exceptional! Transparent technical accountability with a firm deadline restores executive client trust.",
              nextStep: null
            },
            {
              label: "B. Vague promises: 'Trust me, we will try our best not to let it happen again.'",
              isOptimal: false,
              feedback: "Vague promises leave the enterprise client feeling insecure and shopping for competitors.",
              nextStep: null
            }
          ]
        }
      ]
    }
  ],

  // 5. EXPANDED REAL-WORLD CASE STUDIES VAULT (6 FULL CASES)
  caseStudies: [
    {
      id: "case-startup-burnout",
      title: "Case Study 1: Resolving Toxic Friction & Burnout in a High-Growth Startup",
      category: "Conflict Resolution & EQ",
      stage: "Mid-Career & Managers",
      icon: "🔥",
      summary: "A 6-person product engineering team is 3 weeks away from a major venture launch. Two senior engineers are refusing to talk directly, communicating only through hostile PR reviews, while team morale plummets.",
      background: "Company: CloudScale Dynamics (Series A FinTech Startup)\nContext: CloudScale is launching a payment gateway engine. The launch deadline is fixed due to investor commitments.\nKey Players:\n- Alex (Lead Backend Architect): High performer, values technical perfection, feels overworked and under-appreciated.\n- Jordan (Senior Frontend Lead): Fast-paced, outcome-focused, frustrated by backend API delays.\n- Morgan (Product Manager / Team Lead): Caught in the middle, trying to meet launch dates without team collapse.\nThe Trigger: Jordan publicly commented on Alex's pull request: 'This API schema is sloppy and shows a total lack of planning.' Alex responded by closing the PR and refusing to approve Jordan's frontend integration code.",
      reflectionQuestions: [
        {
          q: "1. What core soft skill breakdown caused this situation to escalate beyond technical disagreement?",
          modelAnswer: "The primary breakdown occurred in Emotional Regulation and Feedback Delivery (SBI Model). Jordan attacked character/competence ('sloppy', 'lack of planning') rather than providing objective code feedback. Alex experienced a threat to Status and Autonomy (SCARF model) and reacted defensively with silence/stonewalling."
        },
        {
          q: "2. If you were Morgan (the Team Lead), what step-by-step intervention would you take in the next 24 hours?",
          modelAnswer: "1. Separate 1-on-1s: Meet Alex and Jordan individually within 4 hours. Validate stress levels, but establish a firm boundary against public hostility.\n2. Facilitate a Mediated Alignment Session: Bring them into a private room. Set ground rules: focus on launch outcomes, not past slights.\n3. Re-anchor on Mutual Purpose: Define clear API contract interfaces together on a whiteboard.\n4. Public Reset: Establish team-wide PR code review guidelines (focus on code, not creator)."
        },
        {
          q: "3. What micro-practices can Alex and Jordan implement to prevent future deadlocks?",
          modelAnswer: "Alex should practice the 5-second emotional pause before responding to PR comments. Jordan must use the SBI feedback framework: 'In PR #142 (Situation), the missing data field (Behavior) causes frontend rendering errors (Impact). Can we add this field?'"
        }
      ],
      keyTakeaways: [
        "Separate code critique from personal identity.",
        "Address interpersonal friction within 24 hours; unresolved tension compounds exponentially under deadline pressure.",
        "Establish explicit team ground rules for asynchronous communication (Slack/GitHub)."
      ]
    },
    {
      id: "case-restructuring-anxiety",
      title: "Case Study 2: Leading Through Organizational Restructuring & Layoff Rumors",
      category: "Leadership & Change Management",
      stage: "Leadership & Executives",
      icon: "🧭",
      summary: "Following a corporate merger, rumors of a 20% headcount reduction circulate. Productivity drops by 40% as employees spend hours speculating on Slack. As a Director, how do you restore focus and trust?",
      background: "Company: Apex Global Enterprise\nContext: Apex merged with a rival logistics firm. Executive leadership has been silent for 2 weeks while evaluating redundant roles.\nThe Problem: Gossip has crippled operations. Key talent is polishing resumes and interviewing elsewhere. Mid-level managers feel helpless because they lack official answers from executive VP leadership.",
      reflectionQuestions: [
        {
          q: "1. Why does silence from leadership breed toxic anxiety during organizational change?",
          modelAnswer: "In the absence of clear communication, the human brain fills information vacuums with worst-case catastrophic narratives (threat response). Psychological safety evaporates, and employees shift from high performance into survival mode."
        },
        {
          q: "2. How can a manager exercise Executive Presence when they do NOT have all the answers?",
          modelAnswer: "Practice Authentic Transparency. Speak candidly: 'I do not have final headcount numbers yet, but I commit to sharing updates every Tuesday. Here is what we DO control today: delivering quality work for our current clients and supporting each other.'"
        },
        {
          q: "3. What specific communication cadences should be established immediately?",
          modelAnswer: "1. Weekly All-Hands Standup with Q&A.\n2. Weekly 1-on-1 check-ins focused on employee well-being and career stability.\n3. Clear prioritization: freeze non-essential projects so teams aren't burned out by unnecessary work."
        }
      ],
      keyTakeaways: [
        "Over-communicate the 'Why' and the timeline of change, even when details remain fluid.",
        "Empathy must precede strategic directives during organizational distress.",
        "Control what is controllable: maintain team focus on immediate operational excellence."
      ]
    },
    {
      id: "case-first-time-manager",
      title: "Case Study 3: The First-Time Manager Dilemma (Peer to Boss)",
      category: "Transition & Influence",
      stage: "Early Professional to Manager",
      icon: "🚀",
      summary: "Taylor was promoted to lead a team of 5 former peers. One former close friend, Chris, continues to ignore process guidelines, arrives late to syncs, and expects special favor.",
      background: "Context: Taylor was selected over Chris for the Team Lead promotion.\nThe Tension: Chris feels resentful and tests Taylor's authority by missing sprint deadlines and making sarcastic remarks in team meetings. Taylor fears destroying their personal friendship by confronting Chris.",
      reflectionQuestions: [
        {
          q: "1. What is the fundamental mindset shift required when moving from peer to manager?",
          modelAnswer: "Shift from seeking personal popularity to cultivating professional respect and team accountability. A manager's primary duty is to the team's collective success and psychological safety, not preserving individual social comfort."
        },
        {
          q: "2. Script out the exact conversation Taylor should have with Chris in their first private 1-on-1.",
          modelAnswer: "'Chris, I value our friendship and past work together. However, as Team Lead, I need to ensure equity across the whole team. When you arrive 15 minutes late to standup (Behavior), it delays the schedule and signals to others that guidelines are optional (Impact). Moving forward, I need your leadership to set the standard for the team. Can I count on your support?'"
        }
      ],
      keyTakeaways: [
        "Establish clear role boundaries early after internal promotion.",
        "Address peer-to-boss friction directly in private 1-on-1s; do not ignore boundary testing.",
        "Balance personal care with direct professional accountability (Radical Candor)."
      ]
    },
    {
      id: "case-budget-cuts",
      title: "Case Study 4: Navigating Executive Stakeholder Pushback During Budget Cuts",
      category: "Executive Influence & Negotiation",
      stage: "Mid-Career to Executive",
      icon: "⚖️",
      summary: "During company-wide cost cutting, executive leadership slashes your department's R&D budget by 30%. How do you advocate for core innovation initiatives without appearing out-of-touch?",
      background: "Company: OmniTech Corp\nContext: OmniTech faces revenue headwinds. CFO decrees a flat 30% budget cut across all divisions.\nThe Dilemma: Slashing the R&D automated testing budget will increase software security vulnerabilities by 50% over the next 6 months.",
      reflectionQuestions: [
        {
          q: "1. How do you reframe a budget request to align with a CFO's cost-reduction mindset?",
          modelAnswer: "Frame innovation spending as Risk Mitigation and Loss Prevention. Demonstrate that spending $50K on automated testing today prevents a projected $1.5M security breach fine tomorrow."
        },
        {
          q: "2. What negotiation strategy allows you to protect critical projects during blanket cuts?",
          modelAnswer: "Present Tiered Compromise Options: Option A (Full Cut - High Risk), Option B (Strategic 15% Cut with Core Safety Preserved), Option C (Re-allocation from low-impact vendor tools to protect core engineers)."
        }
      ],
      keyTakeaways: [
        "Speak the financial language of your executive stakeholders (Risk, Cost Avoidance, ROI).",
        "Never respond to budget cuts with emotional complaints; provide data-backed risk scenarios.",
        "Offer flexible compromise tiers rather than all-or-nothing stances."
      ]
    },
    {
      id: "case-ai-ethics",
      title: "Case Study 5: Ethical Dilemma: AI Bias vs Speed to Market",
      category: "SQ & Cognitive Ethics",
      stage: "Product & Engineering Leaders",
      icon: "🤖",
      summary: "Your startup is racing to launch an AI hiring algorithm. During pre-launch testing, you discover a subtle bias that penalizes female applicants by 12%. The CEO insists on launching anyway to beat a competitor.",
      background: "Context: Competitor X is launching a rival AI recruiting tool next week. VCs are pressing for immediate release.\nThe Tension: The CEO says: 'We will fix the algorithm in v1.1 post-launch.' You know launching biased software damages real lives and destroys long-term brand equity.",
      reflectionQuestions: [
        {
          q: "1. How do you exercise Social & Spiritual Quotient (SQ) and ethical courage in this high-pressure scenario?",
          modelAnswer: "SQ requires anchoring decisions in long-term moral integrity and societal trust. Speak up firmly: highlight the legal liability, public relations catastrophe, and brand destruction that will occur if news of the 12% bias leaks."
        },
        {
          q: "2. How do you present a technical compromise that preserves the launch timeline while eliminating the ethical flaw?",
          modelAnswer: "Propose a Staggered Beta Launch: Release the tool in a closed beta with human-in-the-loop auditing for 3 weeks to correct dataset bias while securing PR credit for an ethical AI approach."
        }
      ],
      keyTakeaways: [
        "Ethical integrity (SQ) is non-negotiable; short-term speed NEVER justifies long-term harm.",
        "Quantify regulatory and legal risks to persuade speed-obsessed executives.",
        "Propose creative technical compromises (human-in-the-loop, audited beta) to align ethics with business momentum."
      ]
    },
    {
      id: "case-remote-culture",
      title: "Case Study 6: Leading Cross-Cultural Distributed Teams Across 4 Time Zones",
      category: "Cross-Cultural Communication & SQ",
      stage: "Global Leaders & Managers",
      icon: "🌐",
      summary: "You lead a 12-person remote team spanning San Francisco, London, Bengaluru, and Tokyo. Communication misalignments, missed handoffs, and cultural misunderstandings are causing friction.",
      background: "Context: The US team relies on aggressive direct debate in Zoom meetings; the Tokyo team values consensus and rarely interrupts; the Bengaluru team suffers from late-night meeting fatigue due to US-centric scheduling.",
      reflectionQuestions: [
        {
          q: "1. What Cultural Intelligence (SQ) adjustments are needed for global team communication?",
          modelAnswer: "Shift from synchronous meeting-heavy culture to Asynchronous First documentation. Use shared written RFCs (Request for Comments) where team members across all time zones have 24 hours to review and comment asynchronously."
        },
        {
          q: "2. How do you fix fair meeting scheduling across global time zones?",
          modelAnswer: "Rotate meeting times equitably so no single team (e.g. Asia/India) is trapped permanently taking 10 PM calls. Record all key syncs with automated AI transcripts."
        }
      ],
      keyTakeaways: [
        "Default to asynchronous written communication for global teams.",
        "Respect cultural communication nuances (direct vs indirect feedback styles).",
        "Rotate meeting pain equitably across all global time zones."
      ]
    }
  ],

  // 6. CAREER ELEVATION & MASTERY ROADMAP (WITH CURATED BOOKS & ARTICLES)
  roadmap: {
    title: "The Soft Skills Career Elevation Roadmap",
    subtitle: "A structured 4-level progression mapping daily practice habits to quantifiable professional outcomes, complete with curated reading lists.",
    levels: [
      {
        level: 1,
        name: "Level 1: Foundational Practitioner",
        stageTarget: "School Students & Entry-Level",
        icon: "🌱",
        color: "#3b82f6",
        outcomes: [
          "Elimination of communication misunderstandings in group projects.",
          "Overcoming stage fright in class & initial team syncs.",
          "Building basic daily time management routines."
        ],
        enablers: [
          "Active Listening 2-Second Pause practice.",
          "Daily top-3 priority checklist.",
          "Growth mindset self-talk monitoring ('Not yet')."
        ],
        practices: [
          "Practice 3-second breath before answering questions.",
          "Complete toughest homework/task first every morning."
        ],
        recommendedBooks: [
          { title: "Atomic Habits", author: "James Clear", desc: "Building 1% daily incremental habits." },
          { title: "Mindset: The New Psychology of Success", author: "Carol Dweck", desc: "Cultivating a growth mindset." }
        ],
        recommendedArticles: [
          { title: "The Feynman Learning Technique Guide", url: "https://fs.blog/feynman-technique/" },
          { title: "How to Master the Pomodoro Focus Method", url: "https://todoist.com/productivity-methods/pomodoro-technique" }
        ],
        recommendedVideos: [
          { title: "How to Speak so That People Want to Listen", speaker: "Julian Treasure (TED)" }
        ]
      },
      {
        level: 2,
        name: "Level 2: Confident Communicator",
        stageTarget: "University Scholars & Early Professionals",
        icon: "🌟",
        color: "#8b5cf6",
        outcomes: [
          "High job interview callback rate using STAR storytelling.",
          "Constructive peer feedback without relationship damage.",
          "Strong emotional composure during high-stress critiques."
        ],
        enablers: [
          "SBI Feedback model practice.",
          "BLUF email formatting discipline.",
          "Mock interview recording self-audits."
        ],
        practices: [
          "Structure every email request in 2 sentences or less.",
          "Record yourself speaking for 2 minutes weekly and review filler words."
        ],
        recommendedBooks: [
          { title: "Emotional Intelligence 2.0", author: "Travis Bradberry", desc: "4-step EQ mastery program." },
          { title: "Crucial Conversations", author: "Kerry Patterson", desc: "Handling high-stakes conversations." }
        ],
        recommendedArticles: [
          { title: "The STAR Method for Job Interviews", url: "https://www.themuse.com/advice/star-interview-method" },
          { title: "Mastering BLUF: Bottom Line Up Front", url: "https://hbr.org/2016/11/how-to-write-email-with-military-precision" }
        ],
        recommendedVideos: [
          { title: "Your Body Language May Shape Who You Are", speaker: "Amy Cuddy (TED)" }
        ]
      },
      {
        level: 3,
        name: "Level 3: Adaptive Influencer",
        stageTarget: "Mid-Career & Senior Individual Contributors",
        icon: "⚖️",
        color: "#06b6d4",
        outcomes: [
          "Cross-functional project alignment without direct authority.",
          "Faster promotion velocity to senior and lead roles.",
          "High trust rating from lateral department heads."
        ],
        enablers: [
          "GROW coaching model integration.",
          "Stakeholder incentive mapping.",
          "5 Whys root-cause problem solving."
        ],
        practices: [
          "Consult key stakeholders individually before major decision meetings.",
          "Block 2 hours of non-negotiable Quadrant 2 strategic deep work daily."
        ],
        recommendedBooks: [
          { title: "Never Split the Difference", author: "Chris Voss", desc: "High-stakes negotiation & tactical empathy." },
          { title: "Radical Candor", author: "Kim Scott", desc: "Care personally while challenging directly." }
        ],
        recommendedArticles: [
          { title: "HBR: Influence Without Authority", url: "https://hbr.org/2008/01/how-to-influence-without-authority" },
          { title: "The SCARF Model: Brain-Based Leadership", url: "https://neuroleadership.com/your-brain-at-work/scarf-model-defined" }
        ],
        recommendedVideos: [
          { title: "The Power of Vulnerability & Empathy", speaker: "Brené Brown (TED)" }
        ]
      },
      {
        level: 4,
        name: "Level 4: Transformational Leader",
        stageTarget: "Managers, Directors & C-Suite Executives",
        icon: "👑",
        color: "#10b981",
        outcomes: [
          "High-performing team retention & psychological safety.",
          "Seamless organizational change execution with minimal attrition.",
          "Executive presence and gravitas across industry platforms."
        ],
        enablers: [
          "Radical Candor feedback loops.",
          "Crisis communication protocols.",
          "Executive presence vocal/body language calibration."
        ],
        practices: [
          "Publicly celebrate team members who highlight mistakes or dissenting views.",
          "Conduct quarterly pre-mortems for all strategic initiatives."
        ],
        recommendedBooks: [
          { title: "High Output Management", author: "Andrew Grove", desc: "The legendary Intel CEO guide to managerial leverage." },
          { title: "The Fearless Organization", author: "Amy Edmondson", desc: "Creating psychological safety for learning & innovation." }
        ],
        recommendedArticles: [
          { title: "HBR: What Makes a Leader?", url: "https://hbr.org/2004/01/what-makes-a-leader" },
          { title: "Google's Project Aristotle: Building the Perfect Team", url: "https://rework.withgoogle.com/guides/understanding-team-effectiveness/" }
        ],
        recommendedVideos: [
          { title: "First Secret of Design & Problem Solving: Notice!", speaker: "Tony Fadell (TED)" }
        ]
      }
    ]
  },

  // 7. BOOKS VAULT
  books: [
    {
      title: "Crucial Conversations: Tools for Talking When Stakes Are High",
      author: "Kerry Patterson, Joseph Grenny, et al.",
      category: "Communication & EQ",
      coverColor: "#ef4444",
      icon: "💬",
      rating: "4.9 / 5.0",
      summary: "Teaches actionable techniques to handle high-stakes conversations where opinions vary and emotions run strong.",
      keyTakeaways: [
        "Create Mutual Purpose: Ensure the other person knows you care about their goals.",
        "Make it Safe: When people feel safe, they share candid truth; when threatened, they resort to silence or violence.",
        "Master Your Stories: Separate observable facts from the story you tell yourself in your head."
      ]
    },
    {
      title: "Atomic Habits",
      author: "James Clear",
      category: "Personal Effectiveness",
      coverColor: "#f59e0b",
      icon: "⚡",
      rating: "4.95 / 5.0",
      summary: "The definitive guide to building good habits and breaking bad ones through 1% incremental daily improvements.",
      keyTakeaways: [
        "Focus on Systems over Goals: You do not rise to the level of your goals, you fall to the level of your systems.",
        "Identity-Based Habits: Change who you believe you are ('I am a clear communicator').",
        "The 4 Laws: Make it obvious, attractive, easy, and satisfying."
      ]
    },
    {
      title: "Emotional Intelligence 2.0",
      author: "Travis Bradberry & Jean Greaves",
      category: "Interpersonal & EQ",
      coverColor: "#ec4899",
      icon: "🫀",
      rating: "4.8 / 5.0",
      summary: "A step-by-step program to increase your EQ across 4 core skills: Self-Awareness, Self-Management, Social Awareness, and Relationship Management.",
      keyTakeaways: [
        "Count to 10 before reacting to high-stress triggers.",
        "Greet people by name and observe non-verbal body language cues.",
        "Align your posture and breathing to regulate internal emotion."
      ]
    },
    {
      title: "Never Split the Difference",
      author: "Chris Voss",
      category: "Negotiation & Influence",
      coverColor: "#3b82f6",
      icon: "⚖️",
      rating: "4.9 / 5.0",
      summary: "Former FBI lead international hostage negotiator reveals high-stakes negotiation tactics applicable to business & life.",
      keyTakeaways: [
        "Tactical Empathy: Use mirroring (repeating last 3 words) to build fast rapport.",
        "Labeling: Name their negative emotions ('It seems like you feel ignored') to diffuse them.",
        "Calibrated Questions: Ask 'How am I supposed to do that?' to make them solve your problem."
      ]
    },
    {
      title: "Radical Candor",
      author: "Kim Scott",
      category: "Leadership & Management",
      coverColor: "#10b981",
      icon: "👑",
      rating: "4.85 / 5.0",
      summary: "How to be a kick-ass boss without losing your humanity by balancing Caring Personally with Challenging Directly.",
      keyTakeaways: [
        "Radical Candor = Care Personally + Challenge Directly.",
        "Avoid Ruinous Empathy (being nice but silent about real issues).",
        "Give feedback immediately, in private, with specific actionable observations."
      ]
    },
    {
      title: "Mindset: The New Psychology of Success",
      author: "Carol S. Dweck",
      category: "Growth Mindset",
      coverColor: "#8b5cf6",
      icon: "🌱",
      rating: "4.8 / 5.0",
      summary: "Discovers how our belief about our capabilities (Fixed vs. Growth Mindset) dictates achievement and resilience.",
      keyTakeaways: [
        "Fixed Mindset believes talent is static; Growth Mindset believes skills develop through effort.",
        "Embrace challenges as brain training.",
        "Use the power of 'YET': 'I haven't mastered public speaking... YET.'"
      ]
    }
  ],

  // 8. VIDEO HUB
  videos: [
    {
      id: "vid-1",
      title: "How to Speak so That People Want to Listen",
      speaker: "Julian Treasure",
      duration: "9:58 min",
      platform: "TED Talk",
      embedUrl: "https://www.youtube.com/embed/eIho2S0ZahI",
      category: "Communication",
      thumbnail: "🗣️",
      keyPoints: [
        "Avoid the 7 Deadly Sins of Speaking: Gossip, Judging, Negativity, Dogmatism.",
        "Use the HAIL framework: Honesty, Authenticity, Integrity, Love.",
        "Master vocal register, timbre, prosody, pace, pitch, and volume."
      ]
    },
    {
      id: "vid-2",
      title: "Your Body Language May Shape Who You Are",
      speaker: "Amy Cuddy",
      duration: "21:02 min",
      platform: "TED Talk",
      embedUrl: "https://www.youtube.com/embed/Ks-_Mh1QhMc",
      category: "Executive Presence",
      thumbnail: "🧍",
      keyPoints: [
        "Power posing for 2 minutes can increase testosterone and lower cortisol.",
        "Our non-verbals govern how other people think and feel about us.",
        "Don't fake it till you make it; fake it till you BECOME it."
      ]
    },
    {
      id: "vid-3",
      title: "The Power of Vulnerability & Empathy",
      speaker: "Brené Brown",
      duration: "20:19 min",
      platform: "TED Talk",
      embedUrl: "https://www.youtube.com/embed/iCvmsMzlF7o",
      category: "Emotional Intelligence",
      thumbnail: "❤️",
      keyPoints: [
        "Empathy fuels connection; sympathy drives disconnection.",
        "Vulnerability is not weakness; it is our most accurate measure of courage.",
        "To connect with someone, you must connect with something in yourself that knows that feeling."
      ]
    },
    {
      id: "vid-4",
      title: "First Secret of Design & Problem Solving: Notice!",
      speaker: "Tony Fadell",
      duration: "16:40 min",
      platform: "TED Talk",
      embedUrl: "https://www.youtube.com/embed/9uOMjteDdhs",
      category: "Cognitive Skills",
      thumbnail: "🔍",
      keyPoints: [
        "Habituation blinds us to everyday friction and inefficiencies.",
        "Look broader and look closer to question assumed constraints.",
        "Stay young at heart: ask 'Why?' like a child."
      ]
    }
  ],

  // 9. DAILY HABITS
  dailyHabits: [
    { id: "h1", text: "Practice 3-Second Pause before responding in any conversation today", category: "EQ" },
    { id: "h2", text: "Give 1 specific, non-generic piece of positive praise to a peer", category: "Communication" },
    { id: "h3", text: "Identify 1 urgent task vs 1 truly important task using Eisenhower Matrix", category: "Prioritization" },
    { id: "h4", text: "Reframe 1 mistake today using the Growth Mindset ('What did I learn?')", category: "Resilience" },
    { id: "h5", text: "Paraphrase what someone said ('What I hear is...') before giving your input", category: "Active Listening" }
  ],

  // 10. TEMPLATES
  templates: [
    {
      title: "1-on-1 Meeting Agenda Template",
      category: "Leadership",
      content: `### 1-on-1 Meeting Structure (30 Mins)\n1. Check-in & Wins (5 mins): What went well this week? How are your energy levels?\n2. Mentee / Employee Priorities (15 mins): What is top of mind for you? Where are you blocked?\n3. Manager Feedback & Coaching (5 mins): SBI Feedback or strategic context updates.\n4. Action Items & Commitments (5 mins): Who does what by when?`
    },
    {
      title: "Elevator Pitch Structure (30 Seconds)",
      category: "Communication",
      content: `### 30-Second Elevator Pitch\n1. Hook: "Did you know that [surprising stat / challenge]?"\n2. Solution / Expertise: "I specialize in [your core skill/value proposition]."\n3. Impact: "Recently, I helped [project/team] achieve [measurable result]."\n4. Call to Action: "I'd love to grab 5 minutes to explore how we might collaborate on [topic]."`
    },
    {
      title: "Difficult Feedback Script (SBI Model)",
      category: "Conflict Resolution",
      content: `### SBI Feedback Script\n- Situation: "During yesterday's client presentation..."\n- Behavior: "...when you stepped in and changed the slide deck mid-presentation..."\n- Impact: "...it created confusion for the client and undermined our team's preparation."\n- Next Steps: "Moving forward, how can we align on slide adjustments prior to client calls?"`
    }
  ]
};
