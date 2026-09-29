// ============================================================
//  CONTENT.JS — EDIT THIS FILE TO UPDATE THE SITE
// ============================================================
//  Everything on the site is driven by this one file.
//  Change text here, save, and the website updates.
//  No need to touch any other file unless you want to add
//  new pages or change the visual design.
// ============================================================

export const profile = {
  name: "Haokai (Daniel) Yang",
  tagline: "Aspiring researcher in machine learning, reinforcement learning, and assistive AI.",
  intro: `I'm a high school student exploring the intersection of reinforcement learning, formal systems, group theory, and human-centered robotics. Over the past year I've been studying how machines learn to reason: from the mathematical foundations of formal systems and Markov decision processes, through deep learning and policy gradient methods, all the way to building real RL agents from scratch.

Right now, my work focuses on two questions: how can neural networks discover the mathematical symmetries hidden in the problems they solve, and how can RL agents adapt their behavior to work safely alongside humans? The two projects below explore each of these.`,
  location: "—",
  email: "—", // e.g. "haokai@example.com" — leave as "—" to hide
  github: "", // e.g. "https://github.com/haokai" — leave empty to hide
};

// ------------------------------------------------------------
// SKILLS & TOPICS — shown as tags on the home page
// ------------------------------------------------------------
export const skills = {
  "Mathematics & Theory": [
    "Propositional Logic",
    "Type Theory",
    "Group Theory (D₄)",
    "Representation Theory",
    "Formal Systems & Automata",
    "Markov Decision Processes",
    "Big-O & Complexity",
    "Reductions & NP-completeness",
  ],
  "Machine Learning": [
    "Feedforward Neural Networks",
    "Backpropagation",
    "CNNs",
    "Group-Equivariant CNNs",
    "Reinforcement Learning",
    "Policy Gradients",
    "DQN",
    "PPO / SAC",
    "Model-free vs Model-based RL",
  ],
  "Engineering": [
    "Python",
    "PyTorch",
    "Gymnasium",
    "stable-baselines3",
    "CleanRL",
    "escnn",
    "Weights & Biases",
    "Git / GitHub",
    "LaTeX / Overleaf",
  ],
  "Algorithms": [
    "Greedy",
    "BFS / DFS",
    "Graph Algorithms",
    "Recursion",
    "Binary Search",
  ],
};

// ------------------------------------------------------------
// LEARNING JOURNEY — timeline of topics covered
// ------------------------------------------------------------
export const journey = [
  {
    period: "January 2026",
    title: "Foundations: Logic, Type Theory, and Formal Systems",
    summary:
      "Started with propositional logic and type theory as non-emotional languages for reasoning. Explored what it means to remove human bias from intelligence, and learned that bias actually comes from objectives, constraints, and data, not from language itself.",
  },
  {
    period: "Late January 2026",
    title: "Inventing a Formal System",
    summary:
      "Studied formal systems through Go as the canonical example: a finite alphabet, syntax, axioms, and decidable rules producing enormous emergent complexity. Worked on inventing an original formal system that an RL agent could be trained to learn, similar in spirit to AlphaGo.",
  },
  {
    period: "February 2026",
    title: "Neural Networks and Modalities",
    summary:
      "Learned MLPs, backpropagation, forward feeding, and loss functions. Distinguished supervised, unsupervised, and reinforcement learning. Surveyed language, vision, vision-language, and world/action models, and asked the deeper question: do models really 'think' in language?",
  },
  {
    period: "February 2026",
    title: "Automata and Theoretical CS",
    summary:
      "Studied finite automata across three lectures, then dove into Big-O complexity, the concept of reduction, and NP-completeness. Built the mental model that complex ≠ hard, and learned how problems reduce to problems.",
  },
  {
    period: "Late February 2026",
    title: "Snake as a Formal System",
    summary:
      "Formalized Snake as a Markov decision process: state space, action space, transition function, and reward. Implemented a controllable Snake simulator, then a greedy solver, and reflected on its failure modes (why greedy traps itself).",
  },
  {
    period: "March 2026",
    title: "Graph Algorithms and RL Foundations",
    summary:
      "Learned BFS, DFS, and graph traversal. Studied the OpenAI Spinning Up RL tutorial and the NIPS 2005 RL tutorial. Categorized RL algorithms: model-free vs. model-based, value- vs. policy-based vs. actor-critic, on- vs. off-policy.",
  },
  {
    period: "March–April 2026",
    title: "Policy Gradients and Optimization",
    summary:
      "Derived the policy gradient theorem and worked through gradient descent from first principles. Read AlphaZero and the Karpathy interview on Dwarkesh. Trained DQN on CartPole as a warm-up.",
  },
  {
    period: "April–May 2026",
    title: "Beginning the Research Projects",
    summary:
      "Launched two projects: an RL study of symmetry and equivariance in Snake (with formal group-theoretic proofs and D₄-equivariant CNNs), and an assistive-feeding project extending Assistive Gym with a user state model.",
  },
];

// ------------------------------------------------------------
// PROJECTS — one entry per project page
// ------------------------------------------------------------
//   To add a new project: copy one of the existing objects,
//   change the `slug` to something unique, and add the project
//   to the list. The site picks it up automatically.
// ------------------------------------------------------------
export const projects = [
  {
    slug: "snake-equivariance",
    title: "Symmetry and Equivariance in Reinforcement Learning on Snake",
    shortTitle: "Equivariance in Snake RL",
    blurb:
      "Investigating whether RL agents discover the symmetries hidden in Snake, and whether building those symmetries into the network with group-equivariant CNNs makes learning faster and more general.",
    tags: ["Reinforcement Learning", "Group Theory", "DQN", "PyTorch", "escnn"],
    status: "In progress",
    duration: "~8 weeks",
    deliverable: "~10-page technical report (arXiv) + GitHub repo",

    sections: [
      {
        heading: "Motivation",
        body: `Snake has a natural symmetry: if you rotate or reflect the board, the optimal strategy
should rotate or reflect with it. A skilled player doesn't relearn the game when the screen
is flipped, the rules are the same. But does a neural-network RL agent figure this out?
And if not, can we hand the symmetry to the network as an inductive bias?

This project takes Snake, which is small, well-understood, but rich enough to be non-trivial, and uses
it as a testbed for studying equivariance in reinforcement learning.`,
      },
      {
        heading: "Research Questions",
        list: [
          {
            label: "Q1 (Theoretical)",
            text: "What is the symmetry group of the Snake MDP, and what does this imply about the structure of optimal policies?",
          },
          {
            label: "Q2 (Empirical)",
            text: "Do standard CNN-based RL agents trained on Snake learn policies that respect the symmetry group? How does equivariance evolve during training?",
          },
          {
            label: "Q3 (Comparative)",
            text: "Does replacing the standard CNN with a D₄-equivariant CNN improve sample efficiency, final performance, and generalization?",
          },
        ],
      },
      {
        heading: "Approach",
        body: `The Snake MDP is invariant under the dihedral group D₄: the 8 symmetries of the square
(4 rotations + 4 reflections). I prove three theorems formalizing this: the MDP is D₄-invariant,
optimal policies are closed under D₄, and there exists an equivariant optimal policy.

On the empirical side, I train a standard DQN baseline and define an equivariance error metric:
for each test state s and group element g, compare π(s) with g⁻¹·π(g·s) using KL divergence.
This measures how far the learned policy is from being truly equivariant. Then I build a
D₄-equivariant CNN using the escnn library and compare it head-to-head with the baseline on
sample efficiency, final performance, and equivariance error.`,
      },
      // {
      //   heading: "Phases",
      //   timeline: [
      //     { phase: "Phase 1", weeks: "Weeks 1–2", title: "Foundations", note: "Group theory, MDP homomorphisms, equivariant CNN literature (Cohen & Welling, van der Pol et al., Ravindran & Barto)." },
      //     { phase: "Phase 2", weeks: "Week 3", title: "Formalization", note: "Define D₄ action on states/actions; prove the three invariance theorems." },
      //     { phase: "Phase 3", weeks: "Week 4", title: "Baseline DQN", note: "Snake as a Gymnasium environment; CleanRL-style DQN; tune until it reliably plays well on 8×8." },
      //     { phase: "Phase 4", weeks: "Week 5", title: "Measuring Equivariance", note: "Implement the equivariance metric; track it across training; visualize asymmetric failure modes." },
      //     { phase: "Phase 5", weeks: "Weeks 6–7", title: "Equivariant Architecture", note: "Build D₄-equivariant CNN with escnn; verify equivariance numerically; train and compare across seeds." },
      //     { phase: "Phase 6", weeks: "Week 8", title: "Writing", note: "Technical report, GitHub polish, blog post." },
      //   ],
      // },
      {
        heading: "Math Content",
        body: `Group theory (dihedral groups, group actions), Markov decision processes,
equivariant neural networks, basic representation theory. The capacity reduction from
equivariance is a representation-theoretic calculation; the quotient MDP analysis
(|S|/|G| = |S|/8) connects symmetry to exploration.`,
      },
      {
        heading: "Engineering Content",
        body: `PyTorch, group-equivariant CNNs via the escnn library, Gymnasium environment design,
DQN built on CleanRL, experiment tracking with Weights & Biases, statistical analysis
across multiple random seeds.`,
      },
    ],
  },
  {
    slug: "robot-feeding",
    title: "Adaptive Bite Timing for Robot-Assisted Feeding",
    shortTitle: "Robot-Assisted Feeding",
    blurb:
      "Teaching a robot arm not just how to move food to a person's mouth, but when by extending Assistive Gym with a model of user readiness and training a policy that learns from noisy cues.",
    tags: ["Reinforcement Learning", "Robotics", "Assistive AI", "PPO/SAC", "Assistive Gym"],
    status: "In progress",
    duration: "~4 weeks",
    deliverable: "GitHub repo",

    sections: [
      {
        heading: "The Core Idea",
        body: `Assistive Gym provides a feeding environment where a robot arm delivers food to a
simulated human's mouth. But the existing setup treats the human as a physical target, and
there's no model of when the human actually wants to eat.

This project extends the environment with a user state model: a small Markov chain
representing the human's readiness to receive a bite, plus noisy observations the robot
can use to decide when to deliver. The policy must learn both how to move and when
to commit to a bite.

The informal research question: can an RL policy learn to time bites well given noisy
readiness cues, and how does it compare to simple baselines like delivering on a fixed schedule?`,
      },
      {
        heading: "The User State Model",
        body: `The human's internal state is a Markov chain over four states:`,
        list: [
          { label: "Hungry", text: "Ready to receive food." },
          { label: "Receiving", text: "Currently being delivered to." },
          { label: "Chewing", text: "Cannot accept another bite yet." },
          { label: "Ready", text: "Done chewing, ready again." },
        ],
        body2: `Transitions: Hungry → Receiving when delivery succeeds; Receiving → Chewing automatically;
Chewing → Ready probabilistically (mean ~3s); Ready → Hungry immediately.

The robot doesn't see the state directly. It sees noisy cues: a simulated mouth-open signal
(more likely to be 1 in Hungry/Ready states) and time since the last bite. The noise level
is the key experimental knob at high noise, the robot has to integrate evidence over time.`,
      },
      {
        heading: "Action Space & Reward",
        body: `The existing continuous joint-control action space, plus a discrete "commit to bite" action.
Delivery only succeeds if the arm is near the mouth AND the user is in the Hungry state.`,
        list: [
          { label: "+", text: "Large positive reward for successful bite (user in Hungry state)." },
          { label: "−", text: "Large negative reward for delivery during Chewing (unsafe behavior)." },
          { label: "·", text: "Small positive shaping reward for approaching the mouth region." },
          { label: "−", text: "Small per-step negative reward to discourage dithering." },
        ],
      },
      {
        heading: "Algorithm & Baselines",
        body: `PPO or SAC from stable-baselines3 with default hyperparameters. Tuning isn't the point
of this project; the point is to study what the policy learns about timing.

The main empirical result is the comparison against a fixed-schedule baseline that delivers
every N seconds regardless of state.`,
      },
    ],
  },
];

// ------------------------------------------------------------
// FOOTER / META — small things you might want to change
// ------------------------------------------------------------
export const meta = {
  copyright: `© ${new Date().getFullYear()} Haokai (Daniel) Yang.`,
  builtWith: "React + Vite",
};

export const hardware_project = [
  title = senminer_detector,
  summary =
  

]