import { FeatureCard, WorkflowStep, PricingPlan, Testimonial, FAQItem } from '../types';

export const FEATURES: FeatureCard[] = [
  {
    id: 'feat-1',
    title: 'AI-Powered Orchestration',
    description: 'Automate complex tasks with autonomous multi-agent systems designed to run workflows in parallel.',
    iconName: 'Cog8Tooth',
    gridSpanClass: 'md:col-span-2 lg:col-span-2',
    gradientClass: 'from-brand-yellow/10 via-brand-orange/5 to-transparent'
  },
  {
    id: 'feat-2',
    title: 'Instant Integrations',
    description: 'Connect with slack, github, linear, stripe, and over 200+ developer APIs out of the box.',
    iconName: 'LinkIcon',
    gridSpanClass: 'md:col-span-1 lg:col-span-1',
    gradientClass: 'from-brand-teal/20 via-brand-orange/5 to-transparent'
  },
  {
    id: 'feat-3',
    title: 'Real-time Analytics',
    description: 'Track operations, latencies, tokens, and billing in a beautifully visual control panel.',
    iconName: 'ChartPie',
    gridSpanClass: 'md:col-span-1 lg:col-span-1',
    gradientClass: 'from-brand-mint/10 via-brand-teal/5 to-transparent'
  },
  {
    id: 'feat-4',
    title: 'Secure Sandbox',
    description: 'Run arbitrary code safely inside isolated gVisor-based secure execution environments.',
    iconName: 'Cube16Solid',
    gridSpanClass: 'md:col-span-1 lg:col-span-1',
    gradientClass: 'from-brand-orange/10 via-brand-yellow/5 to-transparent'
  },
  {
    id: 'feat-5',
    title: 'Self-Improving Loops',
    description: 'System detects logic failures, self-corrects using historical execution traces, and continues building.',
    iconName: 'ArrowPath',
    gridSpanClass: 'md:col-span-2 lg:col-span-2',
    gradientClass: 'from-brand-yellow/15 via-brand-teal/5 to-transparent'
  },
  {
    id: 'feat-6',
    title: 'Collaborative Inbox',
    description: 'Human-in-the-loop triggers allow teammates to approve complex decisions seamlessly.',
    iconName: 'LinkSolid',
    gridSpanClass: 'md:col-span-1 lg:col-span-1',
    gradientClass: 'from-brand-mint/20 via-brand-orange/5 to-transparent'
  },
  {
    id: 'feat-7',
    title: 'Developer SDKs',
    description: 'Import our client libraries in TS, Python, Go, and Rust to control agents directly.',
    iconName: 'Cube16Solid',
    gridSpanClass: 'md:col-span-2 lg:col-span-2',
    gradientClass: 'from-brand-teal/15 via-brand-yellow/5 to-transparent'
  },
  {
    id: 'feat-8',
    title: 'Global Performance',
    description: 'Run automated tasks edge-cached in 100+ worldwide regions for single-digit millisecond latency.',
    iconName: 'ArrowTrendingUp',
    gridSpanClass: 'md:col-span-1 lg:col-span-1',
    gradientClass: 'from-brand-orange/15 via-brand-teal/5 to-transparent'
  }
];

export const WORKFLOW_STEPS: WorkflowStep[] = [
  {
    stepNumber: 1,
    title: 'Define Prompt & Trigger',
    description: 'Input your objective in natural language or connect an event listener (like a GitHub Webhook).',
    iconName: 'Search'
  },
  {
    stepNumber: 2,
    title: 'Plan Generation',
    description: 'Our core model maps out dependencies and sets up concurrent workspace subagents.',
    iconName: 'Cog8Tooth'
  },
  {
    stepNumber: 3,
    title: 'Secure Execution',
    description: 'Subagents write files, run tests, call APIs, and troubleshoot issues inside isolated sandboxes.',
    iconName: 'Cube16Solid'
  },
  {
    stepNumber: 4,
    title: 'Deployment & Sync',
    description: 'The final code is pushed, and human reviewers are notified via Slack with a detailed log.',
    iconName: 'ArrowPath'
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'starter',
    name: 'Starter',
    description: 'Perfect for indie hackers and developers exploring automation.',
    basePrice: {
      USD: 19,
      EUR: 17,
      INR: 1599
    },
    features: [
      'Up to 3 active agent workflows',
      '50,000 tasks executions / month',
      'Community Slack support',
      'Basic analytics dashboard',
      'Standard execution sandbox (2 min limit)'
    ],
    ctaText: 'Start Free'
  },
  {
    id: 'professional',
    name: 'Professional',
    description: 'Designed for scaling startups and fast-moving software teams.',
    basePrice: {
      USD: 79,
      EUR: 73,
      INR: 6599
    },
    features: [
      'Unlimited active agent workflows',
      '500,000 tasks executions / month',
      'Priority developer support (under 2 hours)',
      'Custom webhook triggers',
      'Extended sandbox execution (10 min limit)',
      'Advanced observability logs',
      'Human-in-the-loop approvals'
    ],
    ctaText: 'Get Started Professional',
    isPopular: true
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    description: 'Custom security, custom SLAs, and dedicated compute instances.',
    basePrice: {
      USD: 299,
      EUR: 275,
      INR: 24999
    },
    features: [
      'Dedicated agent runner clusters',
      'Unlimited task executions',
      '24/7 dedicated support engineer',
      'SSO / SAML authentication',
      'Custom sandbox configurations',
      'SOC-2 compliant logging & audit trails',
      'Custom SLA agreement'
    ],
    ctaText: 'Contact Sales'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Sarah Chen',
    role: 'VP of Engineering',
    company: 'Linear Flow',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    quote: 'The multi-agent execution pipeline cut our CI/CD debugging times by over 60%. It runs code fixes autonomously inside sandboxes. Outstanding user experience.',
    rating: 5
  },
  {
    id: 'test-2',
    name: 'David Miller',
    role: 'Co-Founder & CTO',
    company: 'SyntaxLabs',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    quote: 'We replaced our brittle internal cron scripts with this AI automation platform. It adapts to API updates dynamically. The UI is Vercel-level clean.',
    rating: 5
  },
  {
    id: 'test-3',
    name: 'Aiko Tanaka',
    role: 'Lead Architect',
    company: 'SoraMedia',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    quote: 'The sandbox capability is a game-changer. I was hesitant about AI executing shell scripts, but the gVisor sandbox isolates everything beautifully.',
    rating: 5
  },
  {
    id: 'test-4',
    name: 'James O\'Connor',
    role: 'Director of DevOps',
    company: 'Zenith Retail',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    quote: 'Human-in-the-loop alerts notify our team via Slack. We can approve migrations with a simple click. The integration was seamless.',
    rating: 4
  },
  {
    id: 'test-5',
    name: 'Elena Rostova',
    role: 'Senior Product Manager',
    company: 'Pinnacle Systems',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    quote: 'The billing engine and usage metrics in the dashboard are incredibly transparent. We scaled up to millions of tasks without a single hitch.',
    rating: 5
  },
  {
    id: 'test-6',
    name: 'Marcus Brody',
    role: 'Head of Developer Relations',
    company: 'NexusDB',
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    quote: 'Developer SDKs allowed us to implement natural language triggers directly in our CLI app. Our community is absolutely loving it.',
    rating: 5
  }
];

export const FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'How does the AI agent orchestrate complex tasks?',
    answer: 'The system parses your goal using a planning model, breaks it down into a list of dependencies, and deploys multiple specialized subagents. These agents run concurrently, writing files, executing tests, and calling external APIs to complete the workflow.'
  },
  {
    id: 'faq-2',
    question: 'Is code execution inside sandboxes secure?',
    answer: 'Yes, absolutely. All scripts and terminal commands run inside isolated, single-use sandboxes powered by Google gVisor. They are firewalled, have no access to the hosting infrastructure, and are automatically destroyed upon completion.'
  },
  {
    id: 'faq-3',
    question: 'How does the billing discount cycle work?',
    answer: 'Selecting an annual billing cycle grants you a 20% discount across all tiers. The pricing engine computes this discount dynamically based on the plan and currency selected.'
  },
  {
    id: 'faq-4',
    question: 'What integrations do you support out of the box?',
    answer: 'We support over 200+ developer services including Slack, GitHub, Linear, Stripe, Discord, AWS, GCP, Vercel, and OpenAI, which can be configured via our visual connector panel.'
  },
  {
    id: 'faq-5',
    question: 'Do you offer custom service level agreements (SLAs)?',
    answer: 'Yes, our Enterprise plan includes custom service level agreements, dedicated server clusters, custom sandbox configurations, and a 24/7 dedicated support engineer.'
  }
];
