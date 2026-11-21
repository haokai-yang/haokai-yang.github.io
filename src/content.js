// ============================================================
//  CONTENT.JS — EDIT THIS FILE TO UPDATE THE SITE
// ============================================================

export const profile = {
  name: "Haokai Yang",
  intro: `I'm a high school senior who enjoys mathematics, computer science, and making things. I like questions that take time to figure out, and I enjoy moving between reading about an idea and trying it out for myself. I'm still exploring where those interests will lead me.

Away from my desk, I like playing guitar and hiking. This site is a place to document what I've been working on and learning along the way.`,
  location: "",
  email: "haokai.yang@kiski.org",
  github: "",
};

// ------------------------------------------------------------
// SKILLS & TOPICS
// ------------------------------------------------------------
export const skills = {
  "Mathematical Foundations": [
    "Propositional Logic",
    "Type Theory & Formal Systems",
    "Group Theory (D₄)",
    "Representation Theory",
    "Markov Decision Processes (MDPs)",
    "Automata & Complexity",
  ],
  "Learning & Decision-Making": [
    "Reinforcement Learning",
    "DQN & Policy Gradients",
    "Group-Equivariant CNNs",
    "Partially Observable MDPs (POMDPs)",
    "Bayesian Belief Tracking",
    "Safety–Utility Evaluation",
  ],
  "Programming & Simulation": [
    "Python & PyTorch",
    "Gymnasium",
    "escnn",
    "PyBullet",
    "BFS / DFS & Graph Algorithms",
    "Git / GitHub",
    "LaTeX / Overleaf",
  ],
  "Hardware Prototyping": [
    "Breadboard Assembly",
    "Circuit Wiring & Debugging",
    "XIAO nRF52840 Sense",
    "I2S Audio & MAX98357A",
    "Speaker & Button Integration",
    "USB Connectivity Troubleshooting",
  ],
};

// ------------------------------------------------------------
// LEARNING JOURNEY
// ------------------------------------------------------------
export const journey = [
  {
    period: "January 2026",
    title: "Foundations: Logic, Type Theory, and Formal Systems",
    summary:
      "Started with propositional logic and type theory as precise languages for reasoning. Talked through whether removing human language really removes human bias, and eventually landed on: no, bias comes from objectives, constraints, and data, not from language.",
  },
  {
    period: "Late January 2026",
    title: "Inventing a Formal System",
    summary:
      "Studied formal systems through Go as the canonical example: a finite alphabet, syntax, axioms, and decidable rules producing a lot of emergent complexity. Worked on inventing an original formal system that an RL agent could learn to play, kind of like a toy AlphaGo.",
  },
  {
    period: "February 2026",
    title: "Neural Networks and Modalities",
    summary:
      "Learned MLPs, backpropagation, forward propagation, and loss functions. Went through supervised vs unsupervised vs reinforcement learning. Surveyed language models, vision models, vision-language models, and world/action models, and asked whether models actually 'think' in language at all.",
  },
  {
    period: "February 2026",
    title: "Automata and Theoretical CS",
    summary:
      "Finite automata across three lectures, then Big-O complexity, reductions, and NP-completeness. Big idea I took away: complex ≠ hard, and problems reduce to problems.",
  },
  {
    period: "Late February 2026",
    title: "Snake as a Formal System",
    summary:
      "Formalized Snake as a Markov decision process: state space, action space, transition function, reward. Built a controllable simulator, then a greedy solver, and looked at why greedy Snake traps itself.",
  },
  {
    period: "March 2026",
    title: "Graph Algorithms and RL Foundations",
    summary:
      "BFS, DFS, graph traversal. Read the OpenAI Spinning Up RL tutorial and the NIPS 2005 RL tutorial. Sorted through the RL algorithm zoo: model-free vs model-based, value- vs policy-based vs actor-critic, on- vs off-policy.",
  },
  {
    period: "March–April 2026",
    title: "Policy Gradients and Optimization",
    summary:
      "Derived the policy gradient theorem and worked through gradient descent from first principles. Read AlphaZero and the Karpathy interview on Dwarkesh. Got DQN working on CartPole as a warm-up.",
  },
  {
    period: "April–July 2026",
    title: "Symmetry and Equivariance Project",
    summary:
      "Proved three theorems about symmetric MDPs, formalized Snake under D₄, built a baseline DQN and a D₄-equivariant version, compared them, and wrote everything up as a technical paper.",
  },
  {
    period: "May–June 2026",
    title: "Adaptive Bite Timing Project",
    summary:
      "Framed robot-assisted feeding as a POMDP with a Bayesian belief tracker, ran it against fixed and reactive baselines at different observation-noise levels, and rendered the whole thing in 3D with PyBullet.",
  },
  {
    period: "July 2026",
    title: "Ambient Sentinel: A Personal Assistant Prototype",
    summary:
      "Built a breadboard prototype with a XIAO board, audio amplifier, speaker, and button. Began developing a local personal assistant, motivated by my experience following conversations in a second language and my wish to connect digital knowledge with everyday life.",
  },
];

// ------------------------------------------------------------
// PROJECTS
// ------------------------------------------------------------
export const projects = [
  {
    slug: "snake-equivariance",
    title: "Symmetry and Equivariance in Reinforcement Learning on Snake",
    shortTitle: "Equivariance in Snake RL",
    blurb:
      "A project where I proved three theorems about symmetric MDPs, then tested whether a standard DQN actually learns the symmetry of Snake. It doesn't. A D₄-equivariant network does, with 21× fewer parameters and better performance.",
    tags: ["Reinforcement Learning", "Group Theory", "DQN", "PyTorch", "escnn"],
    status: "Completed · July 2026",
    deliverable: "Technical paper (arXiv-style) + open-source code",
    paperUrl: "paper-snake-equivariance.pdf",
    paperNote: "19 pages",

    sections: [
      {
        heading: "Where this started",
        body: `When I started working on Snake, I kept getting stuck on a thought: if you rotate the board
90 degrees, the game is exactly the same. You still eat food and avoid your tail the same way,
regardless of orientation. I once noticed this in philosophy, if I can assume most of the perspectives arounds
an argument, I suppose to get a more accuate result (after this paper I will probably optimal how to 
design the reflection of perspectives with chaotic couplings with respect to the logical symmetry). What wasn't obvious was
whether a neural network learning to play Snake would ever notice the pattern.

That's what this project turned into. When an environment has a symmetry, some way to
transform the world that leaves the rules unchanged, does an RL agent pick up on it? And if
it doesn't, can we force the network to respect the symmetry through the architecture, and
does that help?

I spent about nine weeks on this. What I found is that a standard DQN really doesn't figure
the symmetry out. It plays Snake fine but stays far from equivariant, no matter how long you
train it. A network that's built to be symmetric by construction (using something called
group-equivariant convolutions) learns Snake much faster, using a fraction of the parameters.
The gap between what theory guarantees is possible and what a symmetry-blind learner
actually finds turned out to be huge.`,
      },

      {
        heading: "The math I needed first",
        body: `Before writing any RL code I wanted to be really sure about the math. So I spent the first
couple weeks proving theorems.

The setup is a Markov decision process, the standard RL abstraction of states, actions,
transitions, and rewards. I defined what it means for such an MDP to be "symmetric" under
a group: there's a finite group G that acts on both the states and the actions, and both the
transitions and the rewards commute with that action. Rotating the world and the action by
the same group element gives you the same transition probabilities and the same reward. The
dynamics don't care about orientation.

Given that setup, I proved three things:`,
        list: [
          {
            label: "1 Lemma",
            text: "The optimal value function V* is invariant under G. The best value you can get from a state doesn't change if you rotate the state.",
          },
          {
            label: "2 Theorem",
            text: "The set of optimal policies is closed under G. If π* is optimal, so is g·π* for every group element g.",
          },
          {
            label: "3 Corollary",
            text: "An equivariant optimal policy always exists. If you average any optimal policy over the group, you get a equivariant one by construction.",
          },
        ],
        body2: `The last one is the important result. You can restrict your search to equivariant policies
without giving anything up, because there's always at least one optimal policy in that
restricted class. The proofs come down to the Bellman optimality operator being a contruction
and the group being finite, so they work for any finite group. Snake and D₄ are just one
instance.`,
      },

      {
        heading: "Making it concrete for Snake",
        body: `Turning the abstract framework into something I could actually run took some care. The state
is a 3-channel tensor on an 8×8 grid: one channel for the snake's head, one for the body,
one for the food. A D₄ element acts on the state by rotating or reflecting each of those
channels spatially. The action space is {up, down, left, right}, and D₄ acts on those by its
standard action on direction vectors, so 90° rotation turns "up" into "left".

Then I had to actually prove that Snake satisfies the symmetric-MDP definition. This is
Proposition 4 in the paper. The clean part is the deterministic snake update: if you rotate
the state and rotate the action, the resulting snake position is rotated too. The trickier
part is food respawning, which is random. I had to show that food is chosen uniformly from
unoccupied cells, and that D₄ maps unoccupied cells bijectively to unoccupied cells, so the
uniform distribution is preserved.

I also wrote a script that checks this numerically, because I didn't want to trust my proof
alone. Over 300 random transitions and all 8 group elements, applying the group to the state
and action and then stepping the environment gives you exactly the same result as stepping
first and applying the group after. Everything checked out to machine precision. So Snake
really is exactly D₄-symmetric, and the existence theorem from earlier gives me an
equivariant optimal policy for free.`,
      },

      {
        heading: "How do you measure equivariance?",
        body: `Once you have a trained policy, how do you tell if it's equivariant? I needed a number.

Here's the idea. For each group element g and each state s, an equivariant policy would have
π(g·s) = g·π(s). That is, the distribution over actions at the rotated state equals the
rotated distribution at the original state. So I can just compare those two distributions
and see how far apart they are.

I used two divergences: total variation (bounded between 0 and 1, easy to read as the fraction
of probability mass in disagreement) and symmetric KL (unbounded but more sensitive to
differences on low-probability actions). Then I averaged over a fixed test set of 1000 states
and all 7 non-identity elements of D₄.

One thing I got wrong on my first attempt: I was sampling test states from the policy's own
trajectories. The problem is that if the policy itself is asymmetric, its trajectories are
asymmetric too, so I'd conflate two different asymmetries: the policy's, and the trajectory
distribution's. So I switched to a fixed test set that's closed under the group action: if s
is in the test set, so are all its rotations and reflections. That way the sampling itself is
D₄-invariant and can't contaminate the measurement.`,
      },

      {
        heading: "What the baseline actually learns (spoiler: not symmetry)",
        body: `I trained a plain convolutional DQN. Two 3×3 convs, a fully-connected layer, standard
hyperparameters, nothing fancy. Then I measured equivariance at every checkpoint.

I expected the equivariance error to start high and decrease as the network learned. It did
the opposite.

At random initialization the error was low, around 0.03. That sounds encouraging but it isn't.
An untrained network outputs nearly uniform Q-values, so its softmax policy is close to
uniform, and any near-uniform policy is trivially equivariant. As soon as training started
sharpening the policy into confident decisions, the error jumped to about 0.12 within a few
thousand steps and then plateaued around 0.16 for the rest of training. The network played
Snake fine, around 9 food per episode, but it never learned the symmetry.

I broke the failure down a few different ways:`,
        list: [
          {
            label: "Isotropy",
            text: "The error is nearly identical across all 7 non-identity group elements, all in [0.152, 0.167]. The network hasn't mastered one rotation and struggled with the others. It's about equally bad at all of them, which suggests it's just learning eight loosely-coupled responses to the eight orientations.",
          },
          {
            label: "Long snakes are worst",
            text: "There's a correlation of 0.53 between snake length and worst-case asymmetry. Longer snakes need more of the grid integrated to make a good decision, and that's where the responses across orientations diverge the most.",
          },
          {
            label: "Two hypotheses that didn't pan out",
            text: "I predicted that 180° rotation would be easier than 90° (since 180° plays more nicely with a CNN's built-in translation symmetry) and that states near the wall would be more asymmetric than states in the middle. Both wrong. Reporting failed predictions felt weird, but my mentor pointed out that reporting them is what makes the paper honest.",
          },
        ],
        body2: `The most vivid part of the failure is seeing specific pairs of states. In the paper I show
three of them. Each pair is a state and its exact rotation. In each case the network puts
about 95% probability on some action for the first state, and about 95% probability on a
completely different action for the rotation. That second action isn't the rotated version
of the first choice, just an unrelated action. These aren't small drift errors. The network
is making qualitatively different decisions on two configurations that are literally
symmetric copies of each other.`,
      },

      {
        heading: "Building the symmetry in from the start",
        body: `So the network can play Snake but doesn't figure out the symmetry. The obvious next step is
to force it.

I built a D₄-equivariant CNN using the escnn library. The construction is called
more general framework called steerable CNNs. Instead of a normal feature map with C channels
at each grid position, you carry C feature maps per group element (so C × 8 in our case,
since D₄ has 8 elements). A group-convolution layer transforms each filter both spatially and
along the group axis, in just the right way that the whole thing comes out equivariant. A
final coset pooling step maps the 8 group elements down to the 4 cardinal actions while
preserving Q(g·s, g·a) = Q(s, a) exactly.

I ran the equivariant network through identical DQN training. Same hyperparameters, replay
buffer, optimizer, exploration schedule. Just a different architecture. Here's what happened:`,
        list: [
          {
            label: "Exactly equivariant",
            text: "The measured equivariance error is around 10⁻⁸ at every checkpoint, which is machine zero from floating-point rounding. From random initialization through convergence. No learning required.",
          },
          {
            label: "Faster to learn",
            text: "After 20,000 steps the equivariant network is already matching the baseline's fully-trained performance. After 40,000 steps it eats 17.1 food per episode. The baseline at the same point is at 7.3.",
          },
          {
            label: "~21× fewer parameters",
            text: "6,262 vs 134,484. Weight sharing across the group means the network isn't wasting capacity on eight loosely-coupled versions of the same thing.",
          },
        ],
        body2: `The parameter count is the one that really got me. My baseline has more than 20 times as
many weights and still plays worse. That's a lot of capacity being spent on a task that a
much smaller network handles better because it has the right structure to begin with.`,
      },
      {
        heading: "What I took away",
        body: `The main thing I took away is that there's a real gap between "an equivariant optimal policy
exists" (which the theorems guarantee) and "a standard learner will find one" (which turns
out not to happen). Existence is a weaker claim than reachability, and in this case the gap
is huge and stubborn.

Equivariant architectures close that gap by making it impossible to be non-equivariant. When
the symmetry is exact, like it is for Snake, this is basically all upside. The correct
hypothesis class is a smaller subset of all possible policies, so you get better sample
efficiency and better final performance from a much smaller network.

I don't want to oversell the finding, though. The whole story depends on the symmetry being
exact. If the symmetry is only approximate (a slightly asymmetric goal, or gravity, or a
boundary effect that breaks the four-fold symmetry), the equivariant network is forced to
ignore a real signal, and the trade can flip. Figuring out where that break-even point is,
and quantifying how approximate the symmetry can be before an equivariant network stops
being worth it, is probably the most interesting direction this project opened up for me.
I'd like to work on that next.`,
        callout:
          '"The theorem tells you an equivariant optimum exists. It doesn\'t tell you the network will find one. Those are different claims, and this project is really about how far apart they can be."',
      },
    ],
  },

  {
    slug: "robot-feeding",
    title: "Adaptive Bite Timing for Robot-Assisted Feeding",
    shortTitle: "Robot-Assisted Feeding",
    blurb:
      "A simulated study of a simple but surprisingly hard question: how can a feeding robot tell when a person actually wants their next bite, when all it has to go on are noisy, unreliable signals?",
    tags: [
      "POMDP",
      "Bayesian belief tracking",
      "Reinforcement Learning",
      "PyBullet",
      "Assistive Gym",
      "Human-robot interaction",
    ],
    status: "Completed · Oct 2026",
    deliverable: "GitHub repo + short writeup",

    heroMedia: {
      src: "assets/feeding/hero.mp4",
      poster: "assets/feeding/hero_poster.png",
      caption: "The arm figures out when the person is ready, then delivers a bite.",
    },

    sections: [
      {
        heading: "What I was trying to figure out",
        blocks: [
          {
            type: "body",
            text: `Feeding robots are starting to show up in real care settings, and the tricky part is that the
robot has no direct way of knowing when someone wants their next bite. That intention is
fuzzy. It only shows up through weak signals like whether the mouth is open, and those signals
are noisy (e.g., people may talk or chew with mouth open), so the robot can easily misread them. Getting it wrong isn't harmless either, 
because putting food in someone's mouth while they're still chewing is a genuine safety problem.`,
          },
          { type: "body", text: `So I set out to answer three questions:` },
          {
            type: "plain-list",
            items: [
              `Can the robot work out the person's hidden "ready" state from a stream of noisy signals, instead of just reacting to whatever it happens to see at one instant?`,
              `How does a policy that learns compare against simple rules, and against a proper probability-based tracker, as the signals get noisier?`,
              `What's actually special about feeding, and how should that change the way you design the robot?`,
            ],
          },
        ],
      },

      {
        heading: "Why feeding isn't just any timing problem",
        blocks: [
          {
            type: "body",
            text: `Before writing any code I spent a while thinking about why feeding isn't the same as a
generic "press the button at the right moment" task. A few things stood out, and each one
ended up pushing a design decision:`,
          },
          {
            type: "list",
            items: [
              {
                label: "Invisible intent",
                text: `I can't have the robot ask "ready?" before every single bite. That would get exhausting and honestly a bit undignified. So it has to read indirect signals and build up evidence over time.`,
              },
              {
                label: "Asymmetric mistakes",
                text: `Feeding someone mid-chew is a choking risk. Making them wait too long is only mildly annoying. So I treat those errors very differently, and I keep track of safety as its own number.`,
              },
              {
                label: "Long horizon",
                text: `A meal is dozens of bites with a personal rhythm, so being steady and predictable matters more than being occasionally perfect.`,
              },
              {
                label: "Individual variation",
                text: `People chew at different speeds and even slow down as they get tired, so the robot has to hold up across different eaters.`,
              },
              {
                label: "Trust matters",
                text: `Nobody feels relaxed with a robot arm moving toward their face, so when the robot isn't sure, I'd rather it play it safe than make a bold guess.`,
              },
            ],
          },
        ],
      },

      {
        heading: "Setting it up as a POMDP",
        blocks: [
          {
            type: "body",
            text: `The clean way to describe "fuzzy intention" turned out to be a POMDP, or partially
observable Markov decision process. That's a mouthful, but the idea behind it is simple.
The person's readiness is a hidden state the robot can't see directly, so instead the robot
keeps a running guess about it (a "belief") and updates that guess every time a new signal
comes in. Here's how I put it together.`,
          },
          { type: "subhead", text: "The hidden state" },
          {
            type: "body",
            text: `I modeled what's going on inside the person as a little cycle of three states:`,
          },
          {
            type: "pill-cycle",
            pills: [
              { text: "WANTS_BITE", color: "green" },
              { text: "RECEIVING", color: "amber" },
              { text: "CHEWING", color: "red" },
            ],
            loopBack: true,
          },
          {
            type: "muted",
            text: `When the robot delivers, the person goes from WANTS_BITE to RECEIVING, then into CHEWING once
the bite lands, and back to WANTS_BITE after a bit of chewing. Delivering while they're in
CHEWING is the unsafe case.`,
          },

          { type: "subhead", text: "What the robot actually sees" },
          {
            type: "body",
            text: `Each step the robot gets one noisy signal: a mouth-open reading that's either 0 or 1. When
the person really is ready the reading tends to be 1, but it flips to the wrong value with
probability ε, which is the knob I use to control how hard the problem is:`,
          },
          {
            type: "equation",
            html: `P(reading = 1 | WANTS_BITE) = 1 − ε &nbsp; and &nbsp; P(reading = 1 | RECEIVING or CHEWING) = ε`,
          },

          { type: "subhead", text: "How the states tend to move" },
          {
            type: "body",
            text: `If the mean chewing time gives a per-step chance p = 1 / mean_chew of finishing, then when
the robot is just waiting the states move according to this table:`,
          },
          {
            type: "table",
            headers: ["from \\ to", "WANTS_BITE", "RECEIVING", "CHEWING"],
            rows: [
              ["<b>WANTS_BITE</b>", "1", "0", "0"],
              ["<b>RECEIVING</b>", "0", "0", "1"],
              ["<b>CHEWING</b>", "p", "0", "1 − p"],
            ],
          },

          { type: "subhead", text: "Updating the guess" },
          {
            type: "body",
            text: `The robot holds a belief b_t(s), its probability that the person is in each state right now.
Every step it does three things: predicts how the state probably moved, corrects that guess
using the new reading, and rescales so the probabilities add up to one.`,
          },
          { type: "equation", html: `<b>Predict:</b> b̄_t(s') = Σ_s b_{t−1}(s) · T(s, s')` },
          { type: "equation", html: `<b>Correct:</b> b_t(s') ∝ b̄_t(s') · P(reading_t | s')` },
          { type: "equation", html: `<b>Rescale:</b> divide by Σ_{s'} b_t(s') so it sums to 1` },

          { type: "subhead", text: "When to go for it" },
          {
            type: "body",
            text: `The robot only delivers once it's fairly sure the person is ready, which I set with a
threshold τ on the belief. One nice detail: the robot always knows when it decided to
deliver, so it can update its guess for its own action exactly, with no noise involved.`,
          },
          {
            type: "equation",
            html: `Deliver if b_t(WANTS_BITE) ≥ τ &nbsp;(I used τ = 0.6), then set the belief to RECEIVING`,
          },
          {
            type: "muted",
            text: `Turning τ up makes the robot more cautious, so it's safer but slower. Turning it down makes
it eager. That one number is really the lever between playing it safe and being useful.`,
          },

          { type: "subhead", text: "In pseudocode" },
          {
            type: "code",
            content: `start with belief b = [1, 0, 0]        # pretty sure they want a bite
for each timestep:
    reading = observe()                # the noisy mouth-open signal
    b_pred     = b @ T                 # predict how the state moved
    likelihood = P(reading | state)    # for each of the 3 states
    b = normalize(b_pred * likelihood) # fold in the new reading
    if b[WANTS_BITE] >= tau:
        deliver_bite()
        b = [0, 1, 0]                  # I know I just started a delivery
    advance_time()`,
          },
          {
            type: "callout",
            text: `One reason the whole project is simulated: the simulator is the only place where I actually know the true hidden state, so it's the only place I can label the data and check how close the robot's belief is to reality.`,
          },
        ],
      },

      {
        heading: "How the code fits together",
        blocks: [
          {
            type: "body",
            text: `I kept the important logic in a small Python package so the interesting part, the timing,
lives in one place, and the 3D rendering just sits on top and reuses it. That way there's a
single source of truth for when a bite gets delivered.`,
          },
          {
            type: "code-grid",
            items: [
              {
                subhead: "How data flows",
                content: `UserModel  (the hidden state)
   |  gives a noisy reading
   v
Policy  (fixed | reactive | Bayesian | RL)
   |  wait or deliver
   v
FeedingTimingEnv  (reward, outcome)
   |  labeled (state, reading, action, reward)
   |--> generate_data.py   -> dataset.csv
   |--> evaluate.py        -> safety / utility
   |--> belief_accuracy.py -> inference score
   \`--> render_3d.py       -> 3D video`,
              },
              {
                subhead: "The repo",
                content: `feeding_sim/
  user_model.py    # hidden state + reading
  env.py           # gym-style environment
  policies.py      # the four policies
generate_data.py   # makes labeled data
evaluate.py        # safety/utility sweep
belief_accuracy.py # how good the guessing is
visualize.py       # the 2D animation
render_3d.py       # the 3D video
train_rl.py        # optional RL policy
tests/             # sanity checks`,
              },
            ],
          },
          { type: "subhead", text: "The reward, on purpose lopsided" },
          {
            type: "body",
            text: `Since a mid-chew delivery is so much worse than a bit of waiting, I made the penalty for it
far bigger than any other term:`,
          },
          {
            type: "code",
            content: `+10   # delivered a bite while they wanted one
-30   # delivered while chewing (unsafe), much heavier than the rest
 -2   # delivered mid-delivery (just wasteful)
-0.1  # every step, so it doesn't dither forever`,
          },
        ],
      },

      {
        heading: "What I found",
        blocks: [
          { type: "subhead", text: "Tracking a belief beats just reacting" },
          {
            type: "body",
            text: `The first thing I checked was whether keeping a belief is actually worth it, versus just
reacting to the raw reading. Using the true labels from the sim, the belief tracker guesses
the hidden state more accurately, and the gap gets bigger as the reading gets noisier. That's
a good sign that it's really combining evidence over time rather than getting lucky:`,
          },
          {
            type: "table",
            headers: ["Noise level ε", "Belief tracker accuracy", "Raw-reading accuracy"],
            rows: [
              ["0.00", "0.885", "0.885"],
              ["0.15", { text: "0.783", highlight: true }, "0.755"],
              ["0.30", { text: "0.702", highlight: true }, "0.624"],
              ["0.45", { text: "0.568", highlight: true }, "0.494"],
            ],
            highlightCol: 1,
          },

          { type: "subhead", text: "The main result" },
          {
            type: "body",
            text: `Then the part I care about most. As the readings get noisier, the reactive rule starts
feeding people mid-chew far more often, while the belief tracker mostly avoids that and still
delivers plenty of bites. I deliberately kept safety and utility as two separate numbers
instead of mashing them into one score, because the trade-off between them is the whole point:`,
          },
          {
            type: "figure",
            src: "assets/feeding/safety_utility.png",
            alt: "Safety and utility vs noise",
            caption: `Left, how often each policy delivers unsafely as noise rises. Right, how many good bites it still gets in. The reactive rule falls apart under noise; the belief tracker stays safe and stays useful. Bars are averaged over many random seeds.`,
          },

          { type: "subhead", text: "Watching the belief in 2D" },
          {
            type: "body",
            text: `Here's the same run under two policies at a medium noise level. The thing to watch is the
belief bars on the left. The tracker sits and waits through a misleading signal, while the
reactive one jumps at any flicker:`,
          },
          {
            type: "figures",
            items: [
              {
                src: "assets/feeding/belief_bayesian.gif",
                alt: "Bayesian rollout",
                caption: "The belief tracker holds off, builds up evidence, and only commits once it's confident.",
              },
              {
                src: "assets/feeding/belief_reactive.gif",
                alt: "Reactive rollout",
                caption: "The reactive rule has no memory, so it fires on noisy readings, sometimes right into a chew.",
              },
            ],
          },
        ],
      },

      {
        heading: "Watching it happen in 3D",
        blocks: [
          {
            type: "body",
            text: `I really wanted to see the arm feed someone, not just stare at accuracy numbers, so I put
the same policy into a 3D scene with a robot arm, a person, and a spoon. The overlays show
the true state, the noisy reading the robot sees, and its live belief.`,
          },
          {
            type: "figure",
            src: "assets/feeding/compare.mp4",
            poster: "assets/feeding/compare_poster.png",
            controls: true,
            caption: `This comparison at high noise is my favorite part. Both people are chewing. On the left the belief-based arm sees a false "mouth open" reading but stays put, while on the right the reactive arm takes the bait and goes in for a very unsafe bite.`,
          },
          {
            type: "figures",
            items: [
              {
                src: "assets/feeding/noise_low.mp4",
                caption: "When the signals are clean, the arm delivers promptly.",
              },
              {
                src: "assets/feeding/noise_high.mp4",
                caption: "When they're noisy, it waits for the reading to be backed up before committing.",
              },
            ],
          },

          { type: "subhead", text: "Trying to use the real Assistive Gym" },
          {
            type: "body",
            text: `I also tried to get this running inside Assistive Gym, which is the standard research
simulator for assistive tasks like this. That turned into a bit of a fight. It's from 2020
and pins some very old dependencies, including TensorFlow 1.14 and its own patched version
of PyBullet, so getting it to even import on a modern setup took a lot of patching. I did
get it partly working with some compatibility shims, but the human model's arms won't pose
properly and the food doesn't settle onto the spoon, so I ended up using a simpler robot-arm
scene for the main videos. I kept the Assistive Gym version here anyway, because it shows
the same timing idea carries over to the established benchmark:`,
          },
          {
            type: "figure",
            src: "assets/feeding/assistive_gym.mp4",
            poster: "assets/feeding/assistive_poster.png",
            controls: true,
            maxWidth: "560px",
            caption: "The same policy driving Assistive Gym's real feeding environment, rough edges and all.",
          },
        ],
      },

      {
        heading: "What I took away",
        blocks: [
          {
            type: "body",
            text: `The main thing I took away is how much you gain by letting the robot have some memory. A
reactive policy with no memory is easy to build and fine when the signals are clean, but it
falls apart under noise. A Bayesian belief tracker keeps most of the safety of a slow fixed
schedule without giving up much of the responsiveness of a quick reactive rule.

The other thing I took away is how much cleaner a POMDP makes the whole design. Once I had
the hidden state, the observation model, and the transition table written down, the reward
function, the belief update, and the safety metric all followed from them. It saved me from
a lot of ad-hoc decisions I'd have made otherwise.`,
          },
          {
            type: "callout",
            text: `"When the robot isn't sure, I'd rather it play it safe than make a bold guess. In feeding, that trade-off is the whole design."`,
          },
        ],
      },
    ],
  },

  // ============================================================
  //  PROJECT 3: AMBIENT SENTINEL
  // ============================================================
  {
    slug: "embedded-ai",
    title: "Ambient Sentinel",
    shortTitle: "Ambient Sentinel",
    blurb:
      "A breadboard prototype for a wearable personal advisor. I want it to connect conversation support, a growing personal knowledge base, and tools in my digital workspace.",
    tags: ["Breadboard Prototyping", "Embedded Audio", "Personal Assistant"],
    status: "Prototype · In development",
    deliverable: "Hardware prototype and assistant software in development",

    sections: [
      {
        heading: "Where this started",
        body: `I got my inspiration from Jarvis in Iron Man: an assistant that fits naturally into everyday life and can connect what happens around me with what I know and do on my computer. Ambient Sentinel is my starting point for exploring that idea. I want to build a wearable personal advisor that brings relevant knowledge into conversations, learning, and daily work.

The hardware is currently a breadboard prototype. The broader vision below describes what I want to develop and test.`,
      },
      {
        heading: "The hardware",
        blocks: [
          {
            type: "body",
            text: `The prototype is built on a breadboard, with a XIAO nRF52840 Sense, a MAX98357A audio amplifier, a speaker, and a push button. Keeping the parts accessible lets me check connections and change the wiring as I work.`,
          },
          {
            type: "figure",
            src: "hardware.jpg",
            alt: "Ambient Sentinel prototype on a breadboard, with a XIAO board, audio amplifier, push button, orange jumper wires, USB cable, and round speaker.",
            caption: "The current breadboard prototype, with the speaker connected beside it and USB plugged into the XIAO board.",
            maxWidth: 720,
            rotate: -90,
            width: 1215,
            height: 1706,
          },
          {
            type: "list",
            items: [
              {
                label: "Controller",
                text: "I chose the XIAO nRF52840 Sense for its small size, built-in microphone, and Bluetooth Low Energy support. It gives me a compact starting point for a portable device.",
              },
              {
                label: "Audio output",
                text: "The MAX98357A takes digital audio through I2S and drives the speaker. This is the output path for spoken responses.",
              },
              {
                label: "Button",
                text: "I included a physical button for a simple input. The intended interaction is a short, predictable response when I press it, with spoken questions allowing a fuller reply.",
              },
              {
                label: "Power",
                text: "For portable use, I chose a slim 3000 mAh USB power bank and a keep-alive module. This avoids having to build a separate battery circuit.",
              },
            ],
          },
        ],
      },
      {
        heading: "Three situations I want to support",
        body: `I think of Ambient Sentinel as a bridge between my digital workspace and the people and situations around me. These three uses give that ambition a practical direction.`,
        list: [
          {
            label: "Conversations",
            text: "Help me revisit an exchange, understand another perspective, and think about how I want to respond. Eventually, I want to explore timely spoken feedback that takes account of my personality and the person I am trying to become. I still need to learn when that support feels helpful and when it interrupts the conversation.",
          },
          {
            label: "Relevant evidence",
            text: "Connect to my notes, digital workspace, and selected research forums, then bring back evidence relevant to a question or action in daily life. My goal is for it to surface useful material without a separate search command each time, with sources I can revisit and judge for myself.",
          },
          {
            label: "A personal knowledge base",
            text: "Build a record of what I learn, how I work, and the goals I choose. Over time, I would like an assistant that understands those preferences well enough to help carry out digital tasks on my behalf. I imagine it connecting individual study with real teamwork, and using a curriculum I choose as a guide for practice and reflection.",
          },
        ],
      },
      {
        heading: "Developing the local assistant",
        body: `I'm using Jev as the core of the local assistant. The design separates the small hardware interface from the larger assistant software: the device provides a way to speak, press a button, and hear a response, while the software works with notes and computer tools.

The longer-term goal is a personal knowledge base that grows as I learn and build. I sometimes think of this as a digital version of myself, but the concrete challenge is to represent my preferences and goals well enough to make its suggestions useful. Automatic retrieval, contextual feedback, and delegated computer tasks are capabilities I want to develop; I have not yet demonstrated them as a complete system.

The question that connects this project to my feeding simulation is when to act under uncertainty. A suggestion can be relevant and still arrive at the wrong time. I want to find out when the assistant should offer help, ask a question, or wait.`,
      },
      {
        heading: "Putting it together",
        body: `The first problem appeared before I could do much with the board. I plugged the XIAO into my computer, but it didn't show up in the terminal. After checking several times, I started to think the board itself was faulty.

The problem turned out to be the USB cable. It wasn't transferring data properly. I tried another cable, and the computer detected the board. Once it connected, I could load the XIAO software and continue the setup.

It was a small fix, but it changed how I approached the rest of the build. Before assuming a component is broken, I need to check the connection that lets me test it.`,
      },
      {
        heading: "Where the project stands",
        body: `I have assembled the breadboard prototype shown above and connected the XIAO to my computer. The assistant's input handling and connections to computer tools are still in development.

My next step is to test a complete interaction, from a spoken question or button press to an audible response. Then I want to try retrieving a relevant note and revisiting a conversation, and evaluate whether the information is accurate and the help arrives at a useful moment.

Beyond that, I hope to make the device into a compact wearable. I would also like to investigate whether physiological signals could help indicate when support would be welcome. That remains an exploratory idea. Eventually, I hope to turn the project into a startup, but first I need evidence that it makes everyday conversations and work easier.`,
      },
      {
        heading: "What I took away",
        body: `I started this project because I wanted to make something useful outside a simulation. Building it meant working through details I could easily overlook on paper, including a cable that stopped the computer from detecting the board.

The project has also made me more patient with an unfinished idea. Reading, talking to people, and building each reveal different problems. I can use those problems to decide what to try next.

What I enjoy most is seeing an idea become something I can put on a table and work on. Ambient Sentinel is still a prototype, but I now have a concrete starting point for the assistant I want to build.`,
      },
    ],
  },
];

// ------------------------------------------------------------
// FOOTER / META
// ------------------------------------------------------------
export const meta = {
  copyright: `© ${new Date().getFullYear()} Haokai Yang`,
  builtWith: "Built with React + Vite",
};

export const hardware_project = [
  {
    title: "senminer_detector",
    summary: "a hardware to help people make discoveries in the daily life"
  }
]