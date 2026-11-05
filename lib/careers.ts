/**
 * Open roles, in hiring-priority order.
 *
 * Source of truth for /careers and for the open-role count shown elsewhere.
 * Full-time compensation bands and role-specific assignments are kept out of
 * the public listing — those go to candidates after they apply. Contract
 * engagements may publish their rate and term via `compensation`/`engagement`.
 */

export interface Role {
  readonly slug: string;
  readonly title: string;
  readonly team: string;
  readonly location: string;
  readonly type: string;
  /** Two sentences: what the role exists to do. */
  readonly summary: string;
  readonly responsibilities: readonly string[];
  /** The kind of person we're looking for, written as prose. */
  readonly profile: string;
  readonly pluses: string;
  readonly compensation?: string;
  readonly engagement?: string;
}

export const ROLES: readonly Role[] = [
  {
    slug: "applied-ai-evaluation-research-engineer",
    title: "Applied AI / Evaluation Research Engineer",
    team: "Research",
    location: "India — Mumbai",
    type: "Full-time",
    summary:
      "Find where models and agents break, then build the evaluations that prove it. You'll design benchmarks and graders, run experiments across proprietary and open models, and turn the failures you uncover into datasets and training environments for AI labs and enterprises.",
    responsibilities: [
      "Design evaluations, benchmarks and scoring rubrics for LLMs and agents",
      "Build evaluation harnesses, automated graders and validation pipelines",
      "Run and analyse model experiments — outputs, trajectories, tool use",
      "Work with domain experts to establish reliable ground truth and edge cases",
      "Turn important failures into new datasets, adversarial sets or RL environments",
      "Produce clear technical findings for customers, researchers and product decisions",
    ],
    profile:
      "Strong Python and hands-on work with modern LLMs. Experience in model evaluation, benchmarking, agents or post-training, and the ability to design an experiment rather than only run someone else's benchmark. You can read a paper and turn the idea into a working system, and write up what you found so it holds up.",
    pluses:
      "Work on SWE-bench, Terminal-Bench, lm-evaluation-harness, Inspect, WebArena or BrowserGym. RLHF, DPO, LLM-as-judge, tool-use agents, red teaming or safety evals. Public research, benchmark contributions or meaningful open source.",
  },
  {
    slug: "founding-product-ai-infrastructure-engineer",
    title: "Founding Product / AI Infrastructure Engineer",
    team: "Engineering",
    location: "India — Mumbai",
    type: "Full-time",
    summary:
      "Turn research capability into product customers can use. You'll work directly with the founders on evaluation dashboards, routing and inference infrastructure, APIs, model integrations and human-in-the-loop systems — owning features from rough idea through to production.",
    responsibilities: [
      "Build production systems from prototypes and ambiguous requirements",
      "Ship APIs, backend services, data pipelines and customer-facing surfaces",
      "Integrate leading model providers and open-model infrastructure",
      "Build systems to run, track and compare evaluations at scale",
      "Develop routing, usage, latency, cost and outcome logging infrastructure",
      "Productionise research prototypes alongside the evaluation team",
    ],
    profile:
      "Strong engineering fundamentals with Python and/or TypeScript, databases, cloud infrastructure and production APIs. Real product instinct and an ownership mentality — you're comfortable moving fast without a specification and taking a feature all the way to deployment.",
    pluses:
      "LLM APIs, LiteLLM, inference gateways, observability, agent infrastructure, distributed jobs and queues. Evaluation infrastructure, human-in-the-loop workflows, B2B SaaS or developer tools. Early-engineer experience at a fast-moving startup.",
  },
  {
    slug: "frontier-engagement-strategic-projects-lead",
    title: "Frontier Engagement / Strategic Projects Lead",
    team: "Operations",
    location: "India or US / global",
    type: "Full-time",
    summary:
      "Own the bridge between frontier-lab relationships and delivery. You'll take an ambiguous request from a researcher, scope it into a real evaluation or data programme, keep research, engineering, experts and operations moving until it ships — then grow the pilot into an account.",
    responsibilities: [
      "Own strategic relationships with AI labs, model companies and advanced AI teams",
      "Turn vague research requests into scopes, milestones and acceptance criteria",
      "Coordinate research engineers, domain experts, operations and delivery",
      "Keep customer communication tight through pilots and production programmes",
      "Identify follow-on opportunities and expand engagements across teams and use cases",
      "Shape proposals, timelines and commercial structure alongside the founders",
    ],
    profile:
      "Three to seven-plus years in AI data, GenAI delivery, strategic projects, technical account management, research programme management or enterprise AI. You can hold a credible conversation with researchers and engineers, drive cross-functional execution, and exercise commercial judgment on scope and structure.",
    pluses:
      "Experience at Scale AI, AfterQuery, Surge AI, Mercor, Invisible, Toloka, Sama, Turing, Labelbox or similar. Prior ownership of large AI-data or evaluation accounts. Understanding of training, post-training, evals, RLHF and human-data operations. Existing relationships in the frontier ecosystem are highly valued.",
  },
  {
    slug: "human-data-business-development-lead",
    title: "Human Data / AI Data Business Development Lead",
    team: "Revenue",
    location: "India — Mumbai or remote",
    type: "Full-time",
    summary:
      "Own revenue for our human-data business: managed annotation, expert evaluation, RLHF and preference data, custom datasets and human review. This is a hands-on commercial role — you build the pipeline, run the deals, and turn pilots into recurring accounts.",
    responsibilities: [
      "Build pipeline across AI startups, model companies, robotics teams and enterprises",
      "Sell managed annotation, expert review, human evaluation and custom data programmes",
      "Run outbound, discovery, qualification and commercial negotiation end to end",
      "Work with operations to scope delivery, estimate capacity, define SLAs and price",
      "Convert small pilots into recurring or larger-volume accounts",
      "Keep CRM discipline, forecasting and clean pipeline reporting",
    ],
    profile:
      "Proven B2B sales — ideally AI data, annotation, managed services, data services or enterprise AI — with a record of closing new logos rather than only farming existing accounts. Strong written outreach and discovery, and judgment on pricing, margin and expansion.",
    pluses:
      "Existing buyer relationships across AI labs, AI startups, robotics, voice and agent companies, BPOs or enterprise AI. Experience selling annotation, AI training data, human evaluation, RLHF or offshore managed services. A history of expanding pilots into larger contracts.",
  },
  {
    slug: "technical-headhunter-talent-partner",
    title: "Technical Headhunter / Talent Partner",
    team: "Talent",
    location: "India — Mumbai preferred",
    type: "Full-time",
    summary:
      "This is not a role that waits for inbound. You'll map talent markets across AI research, evaluation, engineering and domain expertise, find people who aren't applying anywhere, and build a pipeline before we urgently need one.",
    responsibilities: [
      "Build talent maps across research, evaluation, post-training, agent infrastructure and product",
      "Source through LinkedIn, GitHub, Hugging Face, arXiv, university labs and referrals",
      "Identify contributors to relevant benchmarks and open-source evaluation tooling",
      "Run first-round outreach and screening, and keep hiring processes moving quickly",
      "Build relationships with professors, research labs, alumni networks and founders",
      "Own hiring data: source, stage, conversion, time-to-hire and offer acceptance",
    ],
    profile:
      "Two-plus years in recruiting, headhunting, talent research, executive search or technical sourcing. Enough technical fluency to tell a genuine evaluation or research engineer from a generic ML profile, exceptional online research skill, and personalised outreach that actually gets replies.",
    pluses:
      "Experience hiring AI/ML, research, developer-tools, infrastructure or frontier-AI talent. A network across IITs, IISc, IIITs, Indian AI startups or research labs. Sourcing from GitHub, research papers, open-source communities or technical competitions.",
  },
  {
    slug: "ml-researcher-model-architecture-training",
    title: "ML Researcher – Model Architecture & Training",
    team: "Research",
    location: "India — Mumbai",
    type: "Contract · 3 months",
    summary:
      "Deep expertise in modern machine learning, model pre-training, fine-tuning, and architecture design. You'll explore how models are trained and structured, investigate architectural improvements, and contribute to advanced ML research.",
    responsibilities: [
      "Research and analyze Transformer architectures and their underlying mechanisms",
      "Work on model pre-training and fine-tuning methodologies",
      "Explore ML architecture design, optimization, and improvements",
      "Investigate Neural Architecture Search (NAS) approaches",
      "Conduct experiments and document technical findings",
      "Explore connections between ML systems and human-computer interaction where relevant",
    ],
    profile:
      "Strong expertise in machine learning, deep learning, and neural network architectures. You understand the nuances of Transformers, have practical experience with pre-training or fine-tuning, and can independently conduct research and experiments.",
    pluses:
      "Experience with Neural Architecture Search (NAS), Human-Computer Interaction (HCI), relevant research publications, or meaningful contributions to ML research.",
    compensation:
      "₹50,000–₹1,00,000 per month + incentives, based on expertise and experience.",
    engagement: "3-month research engagement.",
  },
  {
    slug: "cognitive-theory-ml-researcher",
    title: "Cognitive Theory-Focused ML Researcher",
    team: "Research",
    location: "India — Mumbai",
    type: "Contract · 3 months",
    summary:
      "Explore the intersection of cognitive theory, human reasoning, and machine learning. You'll investigate how humans make decisions, form assumptions, and build mental models of collaborators, with opportunities to apply these insights to brain-inspired ML research.",
    responsibilities: [
      "Research cognitive theory and Theory of Mind",
      "Investigate how humans make decisions and reason under uncertainty",
      "Study how people form, store, and update assumptions and beliefs",
      "Explore how humans develop mental models of collaborators and other agents",
      "Connect cognitive theories with machine learning research",
      "Develop research insights that can inform brain-inspired ML approaches",
    ],
    profile:
      "Strong expertise in cognitive theory, Theory of Mind, and human reasoning. You understand human decision-making, mental models, and how people interpret the intentions and beliefs of others.",
    pluses:
      "Experience applying cognitive science to brain-inspired ML research, Human-Computer Interaction (HCI), human-AI interaction, or relevant academic publications.",
    compensation:
      "₹50,000–₹1,00,000 per month + incentives, based on expertise and experience.",
    engagement: "3-month research engagement.",
  },
] as const;

export const ROLE_COUNT = ROLES.length;
