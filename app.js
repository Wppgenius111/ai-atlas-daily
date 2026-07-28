const sourceGroups = [
  {
    category: "NeuroAI research",
    items: [
      {
        name: "Computational neuroscience",
        cadence: "Weekly",
        url: "https://www.semanticscholar.org/search?q=computational%20neuroscience%20brain%20energy%20neural%20coding&sort=relevance",
        note: "跟踪神经编码、动力学、脑能量和多尺度神经计算。"
      },
      {
        name: "Brain-inspired AI",
        cadence: "Weekly",
        url: "https://www.semanticscholar.org/search?q=brain-inspired%20AI%20neuromorphic%20computing%20spiking%20neural%20networks&sort=relevance",
        note: "关注脉冲神经网络、神经形态计算、低功耗智能和脑启发学习。"
      },
      {
        name: "BCI + AI",
        cadence: "Weekly",
        url: "https://www.semanticscholar.org/search?q=brain-computer%20interface%20artificial%20intelligence%20neural%20decoding&sort=relevance",
        note: "跟踪神经信号解码、闭环控制、侵入式/非侵入式 BCI 和 AI copilot。"
      },
      {
        name: "Embodied AI",
        cadence: "Weekly",
        url: "https://www.semanticscholar.org/search?q=embodied%20AI%20robot%20learning%20world%20model%20foundation%20model&sort=relevance",
        note: "跟踪具身智能、机器人学习、世界模型、视觉-语言-动作模型和仿真到真实迁移。"
      }
    ]
  },
  {
    category: "AI pulse",
    items: [
      {
        name: "X: OpenAI Codex / rate limits",
        cadence: "Daily",
        url: "https://x.com/search?q=%28OpenAI%20Codex%20OR%20rate%20limits%20OR%20quota%29&src=typed_query&f=live",
        note: "用作热点雷达，看到额度或模型传闻后回到官方页面核验。"
      },
      {
        name: "X: AI agents live",
        cadence: "Daily",
        url: "https://x.com/search?q=%28AI%20agents%20OR%20OpenAI%20agents%20OR%20Codex%29&src=typed_query&f=live",
        note: "追踪 AI agents、开发者工具和模型发布讨论。"
      },
      {
        name: "OpenAI Release Notes",
        cadence: "Daily",
        url: "https://help.openai.com/en/articles/6825453-chatgpt-release-notes",
        note: "核验 Codex、ChatGPT、模型和产品能力的官方变化。"
      }
    ]
  },
  {
    category: "Papers",
    items: [
      {
        name: "arXiv 综合检索",
        cadence: "Daily",
        url: "https://arxiv.org/search/?query=%22brain-computer+interface%22+%22artificial+intelligence%22&searchtype=all&source=header",
        note: "预印本、模型方法、神经解码和跨被试泛化。"
      },
      {
        name: "PubMed / NCBI",
        cadence: "Daily",
        url: "https://pubmed.ncbi.nlm.nih.gov/?term=%28brain-computer+interface%29+AND+%28artificial+intelligence+OR+machine+learning+OR+deep+learning%29&sort=date",
        note: "生物医学论文、临床研究、神经工程和康复证据。"
      },
      {
        name: "bioRxiv / medRxiv",
        cadence: "Daily",
        url: "https://www.biorxiv.org/search/brain-computer%20interface%20artificial%20intelligence",
        note: "生命科学预印本，适合提前发现 BCI 与神经 AI 动向。"
      },
      {
        name: "Semantic Scholar",
        cadence: "Daily",
        url: "https://www.semanticscholar.org/search?q=brain-computer%20interface%20artificial%20intelligence&sort=relevance",
        note: "补充被引、相关论文和作者网络。"
      }
    ]
  },
  {
    category: "Journals",
    items: [
      {
        name: "IEEE Xplore",
        cadence: "Weekly",
        url: "https://ieeexplore.ieee.org/search/searchresult.jsp?newsearch=true&queryText=%22brain-computer%20interface%22%20%22artificial%20intelligence%22",
        note: "脑机接口系统、信号处理、嵌入式和神经工程实现。"
      },
      {
        name: "Journal of Neural Engineering",
        cadence: "Weekly",
        url: "https://iopscience.iop.org/journal/1741-2552",
        note: "神经工程、神经假体、闭环刺激和长期稳定性。"
      },
      {
        name: "Nature Portfolio",
        cadence: "Weekly",
        url: "https://www.nature.com/search?q=%22brain-computer%20interface%22%20%22artificial%20intelligence%22",
        note: "高影响论文、新闻评论和综述。"
      },
      {
        name: "ScienceDirect",
        cadence: "Weekly",
        url: "https://www.sciencedirect.com/search?qs=%22brain-computer%20interface%22%20%22artificial%20intelligence%22",
        note: "Elsevier 期刊中的神经科学、康复工程和综述。"
      }
    ]
  },
  {
    category: "Community",
    items: [
      {
        name: "OpenReview",
        cadence: "Weekly",
        url: "https://openreview.net/search?term=brain-computer%20interface%20neural%20decoding",
        note: "NeurIPS、ICLR、ICML 相关投稿和评审线索。"
      },
      {
        name: "BCI Society",
        cadence: "Monthly",
        url: "https://bcisociety.org/",
        note: "BCI 专门社区、会议和研讨会。"
      },
      {
        name: "Frontiers in Neuroscience",
        cadence: "Weekly",
        url: "https://www.frontiersin.org/journals/neuroscience",
        note: "神经科学、计算神经和转化研究。"
      }
    ]
  },
  {
    category: "Industry",
    items: [
      {
        name: "ClinicalTrials.gov",
        cadence: "Weekly",
        url: "https://clinicaltrials.gov/search?term=brain-computer%20interface",
        note: "人体试验、招募状态、终点指标和机构。"
      },
      {
        name: "FDA Medical Devices",
        cadence: "Weekly",
        url: "https://www.fda.gov/medical-devices",
        note: "医疗器械监管、批准、召回和安全沟通。"
      },
      {
        name: "公司新闻",
        cadence: "Daily",
        url: "https://neuralink.com/blog/",
        note: "Neuralink、Synchron、Precision、Paradromics 等公司动态。"
      }
    ]
  }
];

const sources = sourceGroups.flatMap((group) => group.items);

const aiPulseItems = [
  {
    id: "openai-codex-plan-limits",
    title: "Codex Access",
    source: "OpenAI Help",
    date: "2026-07-28",
    url: "https://help.openai.com/en/articles/11369540-using-codex-with-your-chatgpt-plan",
    confidence: "官方核验",
    keywords: ["Codex", "rate limits", "OpenAI", "AI tools"],
    result: "官方帮助页说明 Codex 的可用计划和使用限制会随 ChatGPT 计划、账户状态和额度政策变化。",
    significance: "这解释了 X 上“Codex 额度变多”的讨论来源；真正可用额度仍应以账户内显示、官方帮助页和产品提示为准。"
  },
  {
    id: "chatgpt-release-codex-resets",
    title: "Codex Updates",
    source: "OpenAI Release Notes",
    date: "2026-07-20",
    url: "https://help.openai.com/en/articles/6825453-chatgpt-release-notes",
    confidence: "官方核验",
    keywords: ["Codex", "release notes", "rate-limit resets", "developer tools"],
    result: "ChatGPT 发布记录中持续出现 Codex 相关更新，包括任务控制、移动端体验、开发者模式和额度重置相关说明。",
    significance: "如果你要用 Codex 做日常文献整理或代码工作，额度/任务控制更新会直接影响工作流效率。"
  },
  {
    id: "x-codex-ai-live-search",
    title: "X AI Radar",
    source: "X Live Search",
    date: "2026-07-20",
    url: "https://x.com/search?q=%28OpenAI%20Codex%20OR%20AI%20agents%20OR%20rate%20limits%29&src=typed_query&f=live",
    confidence: "X 待核验",
    keywords: ["X", "Codex", "AI agents", "rate limits"],
    result: "这是实时搜索入口，不是已核验结论；适合发现热点，再回到官方页面或原始公告确认。",
    significance: "把 X 当作早期雷达，而不是最终来源，可以减少被转述和夸张标题误导。"
  }
];

const chronicleSections = [
  {
    id: "recent-90d",
    title: "Recent 90d",
    description: "近三个月事件写得更细：看模型、资本、政策和就业信号。",
    items: [
      {
        id: "open-weight-shift",
        title: "Open-Weight Shift",
        source: "The Verge / AP / FT",
        date: "2026-07-27",
        url: "https://www.theverge.com/ai-artificial-intelligence/971444/how-chinese-open-weight-ai-models-impact-us-companies",
        region: "Global",
        topic: "Open models",
        keywords: ["open-weight", "China", "model cost", "deployment"],
        importance: "critical",
        result: "中国开源/开权重模型正在用更低成本、更强可部署性改变美国公司和开发者的选择。",
        significance: "这说明未来竞争不只看最大闭源模型，也看谁能把模型便宜、可控、可本地化地交给开发者。",
        commentary: "媒体讨论集中在“美国闭源模式是否被中国开权重策略反向压迫”，产业层面则关注成本、生态和监管。",
        impact: "研究上要关注模型压缩、蒸馏、评测、本地部署和数据治理；就业上，懂 open model deployment、RAG、评测和安全的人会更值钱。",
        career: "优先补：Python 工程、vLLM/serving、RAG、评测、模型安全、数据合规。"
      },
      {
        id: "deepseek-funding-pause",
        title: "DeepSeek Funding",
        source: "Bloomberg",
        date: "2026-07-25",
        url: "https://news.bloomberglaw.com/private-equity/deepseek-said-to-tell-backers-of-funding-pause-after-viral-posts",
        region: "China",
        topic: "Capital",
        keywords: ["DeepSeek", "fundraising", "China AI", "valuation"],
        importance: "high",
        result: "Bloomberg 报道 DeepSeek 暂停第二轮融资流程，背景是相关发言在网上传播和中美 AI 竞争讨论升温。",
        significance: "大模型公司已经不是单纯论文/产品问题，而是资本、叙事、政策风险和人才组织共同作用。",
        commentary: "市场把它当作中国 AI 估值和融资节奏的风向标，也提醒不要只看模型分数，要看组织和资金可持续性。",
        impact: "研究上看国产模型生态和芯片/算力约束；就业上，模型公司岗位会更重视工程落地、降本和商业闭环。",
        career: "如果想进 AI 公司，别只会调 API，要能讲清成本、推理效率、数据闭环和可交付产品。"
      },
      {
        id: "codex-access",
        title: "Codex Access",
        source: "OpenAI Help",
        date: "2026-07-28",
        url: "https://help.openai.com/en/articles/11369540-using-codex-with-your-chatgpt-plan",
        region: "US",
        topic: "AI coding",
        keywords: ["Codex", "AI coding agent", "rate limits", "developer workflow"],
        importance: "high",
        result: "OpenAI 帮助页把 Codex 的可用计划、使用限制、credits 和账户状态放在一起说明。",
        significance: "AI coding agent 从“演示工具”走向日常工作流，学生可以用它做文献工具、实验脚本和产品原型。",
        commentary: "社交平台会放大额度变化，但真正要看官方帮助页和账户内显示。",
        impact: "研究上能加速数据清洗、实验自动化和网站/工具搭建；就业上，AI-native workflow 会成为程序员、科研助理和产品岗位的基本能力。",
        career: "开始记录自己用 agent 完成的项目：文献仪表盘、自动摘要、数据分析、可复现实验。"
      },
      {
        id: "china-ai-financing",
        title: "China AI IPOs",
        source: "Wall Street Journal",
        date: "2026-07-21",
        url: "https://www.wsj.com/world/china/china-ai-companies-rush-to-raise-funds-and-close-gap-with-u-s-55b9e2fd",
        region: "China",
        topic: "Capital",
        keywords: ["AI IPO", "China AI", "compute", "capital"],
        importance: "high",
        result: "多家中国 AI 模型、芯片和机器人公司寻求上市或融资，用资本补算力、人才和基础设施短板。",
        significance: "AI 就业机会会从“模型实验室”扩散到芯片、机器人、数据中心、行业应用和上市公司生态。",
        commentary: "新闻评论把它视作中国 AI 追赶美国的资金战，也担心估值和芯片约束。",
        impact: "研究选题要更靠近落地：工业 AI、机器人、边缘模型、国产算力适配、低成本推理。",
        career: "求职可以同时看模型公司、芯片/算力、机器人、行业 AI、数据平台，不要只盯纯算法岗。"
      },
      {
        id: "spacex-ipo",
        title: "SpaceX IPO",
        source: "SpaceX Investor Relations",
        date: "2026-06-15",
        url: "https://ir.spacex.com/updates/releases-details/2026/Space-Exploration-Technologies-Corp--Announces-Closing-of-Initial-Public-Offering-Including-Full-Exercise-of-Underwriters-Option-to-Purchase-Additional-Shares-2026-RgoR-Y1Vwh/default.aspx",
        region: "US",
        topic: "Infrastructure",
        keywords: ["SpaceX", "IPO", "Starlink", "AI infrastructure", "satellite internet"],
        importance: "critical",
        result: "SpaceX 官方称 IPO 发行完成，股票以 SPCX 在 Nasdaq Global Select Market 和 Nasdaq Texas 交易。",
        significance: "它把航天、卫星互联网、遥感数据、边缘计算和 AI 基础设施放到同一个资本市场叙事中。",
        commentary: "社会新闻先看估值，AI 行业更该看通信、空间数据和边缘部署能力。",
        impact: "研究上可关注 remote sensing AI、edge AI、低延迟通信、机器人/无人系统；就业上，AI+航天/遥感/通信会变成更真实的交叉方向。",
        career: "如果你喜欢 AI 又不想只卷大模型，可以补 GIS/遥感、边缘推理、机器人感知、卫星数据处理。"
      },
      {
        id: "deepseek-v4-watch",
        title: "DeepSeek V4 Watch",
        source: "Bloomberg tracker",
        date: "2026-04-24",
        url: "https://bloomberg.com/latest/deepseek",
        region: "China",
        topic: "Frontier model",
        keywords: ["DeepSeek", "frontier model", "China AI", "cost"],
        importance: "high",
        result: "围绕 DeepSeek 新模型的报道显示，中国模型继续把“能力、成本、开放策略”作为竞争重点。",
        significance: "不管单次发布是否追平美国模型，DeepSeek 已经把全球注意力拉回低成本训练、推理效率和开源生态。",
        commentary: "媒体会比较中美差距，但对学生更重要的是看清模型能力背后的工程路径。",
        impact: "研究上关注 MoE、推理优化、蒸馏、评测可靠性；就业上，能降本和部署的人比只会调用模型的人更有竞争力。",
        career: "建议做一个小项目：同一任务比较闭源 API、开源模型、本地部署和成本/延迟。"
      }
    ]
  },
  {
    id: "ai-history",
    title: "AI History",
    description: "2018 以来的关键节点：模型范式、产品化、开源、政策和中国 AI 崛起。",
    items: [
      {
        id: "china-ai-plus",
        title: "AI+ China",
        source: "中国政府网 / 中央网信办",
        date: "2025-08-27",
        url: "https://www.cac.gov.cn/2025-08/27/c_1758018277755538.htm",
        region: "China",
        topic: "Policy",
        keywords: ["AI+", "industry", "science AI", "governance"],
        importance: "critical",
        result: "政策提出 AI 与科学、产业、消费、民生、治理等领域深度融合，并给出阶段目标。",
        significance: "中国 AI 重点从模型竞赛走向产业落地和场景改造。",
        commentary: "新闻评论关注 AI 是否真正进入制造、医疗、教育和政务。",
        impact: "研究上要找真实场景和数据闭环；就业上行业 AI、科学智能、工业智能会扩大。",
        career: "除了读论文，也要学行业流程和数据。"
      },
      {
        id: "us-ai-action-plan",
        title: "US AI Plan",
        source: "White House",
        date: "2025-07-23",
        url: "https://www.whitehouse.gov/releases/2025/07/white-house-unveils-americas-ai-action-plan/",
        region: "US",
        topic: "Policy",
        keywords: ["AI policy", "infrastructure", "export", "US-China competition"],
        importance: "critical",
        result: "美国把 AI 发展拆成创新、基础设施、外交与安全三条主线。",
        significance: "AI 已经是算力、电力、芯片、标准、出口和国家战略问题。",
        commentary: "媒体将其视为美国 AI 产业政策的系统化。",
        impact: "研究和就业都要关注模型之外的基础设施、能源和政策。",
        career: "AI infra、芯片生态、数据中心和合规岗位会持续增长。"
      },
      {
        id: "deepseek-r1",
        title: "DeepSeek-R1",
        source: "DeepSeek",
        date: "2025-01-20",
        url: "https://api-docs.deepseek.com/news/news250120",
        region: "China",
        topic: "Reasoning",
        keywords: ["DeepSeek-R1", "reasoning", "open model", "RL"],
        importance: "critical",
        result: "DeepSeek-R1 把低成本推理模型带入全球主流讨论，强化了开源/开权重竞争。",
        significance: "它让中国模型从追随者变成能改变全球价格和开源策略的变量。",
        commentary: "社会讨论集中在“DeepSeek shock”：能力、成本、芯片约束和中美竞争。",
        impact: "研究上重视 reasoning、RL、蒸馏和评测；就业上重视低成本模型工程。",
        career: "练习复现 reasoning pipeline、评测题集和模型服务。"
      },
      {
        id: "deepseek-v3",
        title: "DeepSeek-V3",
        source: "DeepSeek",
        date: "2024-12-26",
        url: "https://api-docs.deepseek.com/news/news1226",
        region: "China",
        topic: "MoE",
        keywords: ["DeepSeek-V3", "MoE", "training cost", "open model"],
        importance: "high",
        result: "DeepSeek-V3 以 MoE 和低成本训练引发关注。",
        significance: "它说明算法和工程效率可能部分抵消算力劣势。",
        commentary: "产业评论关注中国模型是否能用更少芯片接近前沿能力。",
        impact: "研究上关注 MoE、路由、推理优化；就业上关注训练/推理基础设施。",
        career: "补分布式训练、推理服务和性能分析。"
      },
      {
        id: "openai-o1",
        title: "OpenAI o1",
        source: "OpenAI",
        date: "2024-09-12",
        url: "https://openai.com/index/introducing-openai-o1-preview/",
        region: "US",
        topic: "Reasoning",
        keywords: ["o1", "reasoning", "chain of thought", "STEM"],
        importance: "high",
        result: "OpenAI 把推理时间和复杂问题求解作为新产品主线。",
        significance: "模型不只生成流畅文本，也开始优化数学、代码和科学推理。",
        commentary: "这标志从聊天产品走向“思考型工具”。",
        impact: "研究上关注 reasoning evaluation；就业上 coding agent、科研 agent、自动化分析更重要。",
        career: "练习让模型写、跑、检查实验，而不是只问答。"
      },
      {
        id: "eu-ai-act",
        title: "EU AI Act",
        source: "European Commission",
        date: "2024-08-01",
        url: "https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai",
        region: "EU",
        topic: "Policy",
        keywords: ["AI Act", "risk", "governance", "compliance"],
        importance: "high",
        result: "欧盟 AI Act 生效，按风险治理 AI 系统。",
        significance: "AI 产品进入医疗、教育、招聘等领域必须考虑合规和责任。",
        commentary: "监管从抽象伦理走向具体产品要求。",
        impact: "研究上要记录数据、评测和风险；就业上 AI governance、合规、安全会增加。",
        career: "懂技术又懂合规的人会很稀缺。"
      },
      {
        id: "gpt-4o",
        title: "GPT-4o",
        source: "OpenAI",
        date: "2024-05-13",
        url: "https://openai.com/index/hello-gpt-4o/",
        region: "US",
        topic: "Multimodal",
        keywords: ["GPT-4o", "multimodal", "voice", "real-time"],
        importance: "critical",
        result: "GPT-4o 把文本、图像、音频更自然地合到一个实时交互模型中。",
        significance: "AI 从文本工具变成更接近人机交互入口。",
        commentary: "社会关注点从“会写东西”转向“能实时对话、看图和听说”。",
        impact: "研究上关注多模态和低延迟；就业上语音交互、教育、医疗助手、可穿戴设备会扩张。",
        career: "可做多模态笔记、语音交互或视觉问答项目。"
      },
      {
        id: "sora",
        title: "Sora",
        source: "OpenAI",
        date: "2024-02-15",
        url: "https://openai.com/index/sora/",
        region: "US",
        topic: "Video",
        keywords: ["Sora", "text-to-video", "world model"],
        importance: "high",
        result: "Sora 展示长视频生成能力，推动视频生成和世界模型讨论。",
        significance: "生成式 AI 从图像走向时间、物理和叙事。",
        commentary: "媒体关注创意行业冲击和伪造风险。",
        impact: "研究上关注视频理解/生成；就业上内容生产、广告、影视和仿真岗位变化。",
        career: "学习视频数据、生成模型评测和内容安全。"
      },
      {
        id: "gemini",
        title: "Gemini",
        source: "Google",
        date: "2023-12-06",
        url: "https://blog.google/technology/ai/google-gemini-ai/",
        region: "US",
        topic: "Multimodal",
        keywords: ["Gemini", "Google", "multimodal", "frontier model"],
        importance: "high",
        result: "Google 发布 Gemini，把多模态作为前沿模型核心方向。",
        significance: "前沿模型竞争从文本 LLM 扩展到跨模态理解和工具生态。",
        commentary: "业界关注 Google 是否能把研究优势转化为产品。",
        impact: "研究上看多模态评测；就业上云、搜索、办公套件和模型平台融合。",
        career: "学会用模型 API 做真实产品，而不只跑 benchmark。"
      },
      {
        id: "deepseek-born",
        title: "DeepSeek Born",
        source: "CACM / MIT CSAIL",
        date: "2023-05",
        url: "https://doi.org/10.1145/3732796",
        region: "China",
        topic: "Open model",
        keywords: ["DeepSeek", "High-Flyer", "China AI", "open model"],
        importance: "high",
        result: "DeepSeek 从量化基金背景中分离出 AI 研究团队，之后持续发布代码、通用模型和推理模型。",
        significance: "它的出生说明中国 AI 公司的路径不一定从互联网产品开始，也可能从算法、算力和研究组织开始。",
        commentary: "社会后来才认识 DeepSeek，但它的关键在于长期押注基础模型和工程效率。",
        impact: "研究上关注小团队如何用工程效率追赶前沿；就业上要看重科研能力、系统能力和低成本执行。",
        career: "适合学习开源模型路线：训练报告、API 文档、模型卡、评测和部署。"
      },
      {
        id: "gpt-4",
        title: "GPT-4",
        source: "OpenAI",
        date: "2023-03-14",
        url: "https://openai.com/research/gpt-4",
        region: "US",
        topic: "Frontier model",
        keywords: ["GPT-4", "alignment", "multimodal", "benchmark"],
        importance: "critical",
        result: "GPT-4 显著提高复杂任务能力，并让大模型进入严肃工作流。",
        significance: "它把 LLM 从新奇聊天工具推向编程、写作、分析和专业服务。",
        commentary: "社会开始讨论就业替代、教育诚信和模型安全。",
        impact: "研究上关注对齐、评测和工具使用；就业上 prompt、AI product、AI engineering 兴起。",
        career: "尽早建立 AI-assisted 工作习惯。"
      },
      {
        id: "llama",
        title: "LLaMA",
        source: "Meta",
        date: "2023-02-24",
        url: "https://ai.meta.com/blog/large-language-model-llama-meta-ai/",
        region: "US",
        topic: "Open model",
        keywords: ["LLaMA", "open model", "research access"],
        importance: "critical",
        result: "Meta 发布 LLaMA，推动开放模型研究和本地部署生态。",
        significance: "开源/开权重生态成为闭源模型之外的第二条主线。",
        commentary: "社区迅速围绕微调、本地部署和衍生模型创新。",
        impact: "研究上降低实验门槛；就业上本地模型、私有化部署、模型微调岗位增加。",
        career: "学会跑一个本地模型并做 LoRA/RAG。"
      },
      {
        id: "chatgpt",
        title: "ChatGPT",
        source: "OpenAI",
        date: "2022-11-30",
        url: "https://openai.com/index/chatgpt/",
        region: "US",
        topic: "Product",
        keywords: ["ChatGPT", "RLHF", "chat interface", "AI product"],
        importance: "critical",
        result: "ChatGPT 把大语言模型变成普通人能使用的对话产品。",
        significance: "这是 AI 产品化的分水岭：AI 从论文和 API 走进日常学习、工作和产业。",
        commentary: "社会讨论从“模型是否聪明”变成“教育、就业、版权和生产力会怎么变”。",
        impact: "研究上促进对话对齐、工具使用和人机协同；就业上几乎所有知识岗位都开始需要 AI literacy。",
        career: "把 ChatGPT 当作基础工作环境，而不是额外玩具。"
      },
      {
        id: "stable-diffusion",
        title: "Stable Diffusion",
        source: "Stability AI",
        date: "2022-08-22",
        url: "https://stability.ai/news/stable-diffusion-public-release",
        region: "Global",
        topic: "Image",
        keywords: ["Stable Diffusion", "open source", "text-to-image"],
        importance: "high",
        result: "Stable Diffusion 推动开源文生图生态爆发。",
        significance: "生成式 AI 第一次在创作工具和普通用户中大规模扩散。",
        commentary: "社会关注版权、设计师就业和创作门槛变化。",
        impact: "研究上关注扩散模型和可控生成；就业上设计、游戏、广告工作流改变。",
        career: "理解生成模型、控制条件和版权风险。"
      },
      {
        id: "clip-dalle",
        title: "CLIP / DALL-E",
        source: "OpenAI",
        date: "2021-01-05",
        url: "https://openai.com/index/clip/",
        region: "US",
        topic: "Vision-language",
        keywords: ["CLIP", "DALL-E", "contrastive learning", "multimodal"],
        importance: "high",
        result: "CLIP 用自然语言监督学习视觉表示，推动图文对齐路线。",
        significance: "多模态 AI 的核心问题变成“如何把语言、图像和世界对齐”。",
        commentary: "这为后续图像生成和视觉语言模型打底。",
        impact: "研究上关注 representation learning；就业上多模态检索和视觉问答出现机会。",
        career: "做一个图文检索或多模态分类小项目。"
      },
      {
        id: "gpt-3",
        title: "GPT-3",
        source: "OpenAI / arXiv",
        date: "2020-05-28",
        url: "https://arxiv.org/abs/2005.14165",
        region: "US",
        topic: "Scaling",
        keywords: ["GPT-3", "few-shot", "scaling", "prompting"],
        importance: "critical",
        result: "GPT-3 展示规模扩展带来的少样本学习能力。",
        significance: "prompting 和 scaling 成为大模型时代的核心词。",
        commentary: "业界开始相信通用语言模型能成为平台能力。",
        impact: "研究上关注 scaling law；就业上 API 产品和 prompt workflow 出现。",
        career: "学会把任务拆成 prompt、数据、评测和工具链。"
      },
      {
        id: "gpt-2",
        title: "GPT-2",
        source: "OpenAI",
        date: "2019-02-14",
        url: "https://openai.com/index/better-language-models/",
        region: "US",
        topic: "Language model",
        keywords: ["GPT-2", "language model", "release strategy"],
        importance: "high",
        result: "GPT-2 展示大规模语言模型的生成能力，也引发分阶段发布和滥用风险讨论。",
        significance: "模型发布策略开始成为 AI 安全和公共讨论的一部分。",
        commentary: "社会开始担心自动生成文本和虚假信息。",
        impact: "研究上关注语言模型评测和安全；就业上 NLP 工程进入新阶段。",
        career: "理解模型能力和风险必须一起看。"
      },
      {
        id: "bert",
        title: "BERT",
        source: "Google / arXiv",
        date: "2018-10-11",
        url: "https://arxiv.org/abs/1810.04805",
        region: "US",
        topic: "Pretraining",
        keywords: ["BERT", "pretraining", "NLP", "Transformer"],
        importance: "high",
        result: "BERT 展示预训练 + 微调如何改变 NLP 任务。",
        significance: "它让 Transformer 从论文架构变成通用语言理解范式。",
        commentary: "NLP 从手工特征和小模型转向大规模预训练。",
        impact: "研究上理解预训练范式；就业上文本分类、搜索、问答等任务进入深度学习时代。",
        career: "读懂 BERT 能帮你理解后来的 LLM。"
      }
    ]
  },
  {
    id: "beginner-papers",
    title: "AI 入门论文路线",
    description: "先搭骨架：深度学习、Transformer、预训练、视觉语言、扩散、对齐与智能体。",
    items: [
      {
        id: "deep-learning-nature",
        title: "Deep Learning",
        source: "Nature / LeCun, Bengio, Hinton",
        date: "2015",
        url: "https://www.nature.com/articles/nature14539",
        region: "入门",
        topic: "深度学习总览",
        keywords: ["deep learning", "representation learning", "neural networks"],
        importance: "high",
        result: "用一篇综述建立深度学习的基本版图：表示学习、反向传播、视觉、语音和自然语言。",
        significance: "适合作为第一篇总览，知道 AI 这栋楼的地基在哪里。",
        commentary: "入门阶段不必追求每个公式都懂，先把神经网络为什么有效、能处理哪些任务看明白。",
        impact: "建立 AI 基础词汇表，方便后续读 Transformer、扩散模型和多模态。"
      },
      {
        id: "attention-is-all-you-need",
        title: "Attention Is All You Need",
        source: "NeurIPS / arXiv",
        date: "2017",
        url: "https://arxiv.org/abs/1706.03762",
        region: "入门",
        topic: "Transformer",
        keywords: ["Transformer", "attention", "sequence modeling"],
        importance: "critical",
        result: "提出 Transformer 架构，用注意力机制替代循环结构，成为大模型时代的核心架构。",
        significance: "几乎所有现代大语言模型都绕不开它，建议重点读结构图和 self-attention。",
        commentary: "这篇是 AI 入门必读中的必读，社会上关于大模型的讨论大多都间接建立在 Transformer 之上。",
        impact: "理解它会直接帮助你读 LLM、视觉语言模型、智能体和代码模型。"
      },
      {
        id: "bert-paper",
        title: "BERT: Pre-training of Deep Bidirectional Transformers for Language Understanding",
        source: "arXiv / Google",
        date: "2018",
        url: "https://arxiv.org/abs/1810.04805",
        region: "入门",
        topic: "预训练",
        keywords: ["BERT", "pretraining", "language understanding"],
        importance: "high",
        result: "展示大规模预训练 + 下游微调如何改变 NLP。",
        significance: "读它能理解“先学通用表示，再迁移到任务”的基本范式。",
        commentary: "它代表大模型之前的 NLP 主流范式，适合和 GPT 路线对照看。",
        impact: "帮助你理解预训练、微调、掩码语言模型和表征学习。"
      },
      {
        id: "gpt3",
        title: "Language Models are Few-Shot Learners",
        source: "OpenAI / arXiv",
        date: "2020",
        url: "https://arxiv.org/abs/2005.14165",
        region: "入门",
        topic: "大语言模型",
        keywords: ["GPT-3", "few-shot learning", "scaling"],
        importance: "critical",
        result: "展示规模扩展后，语言模型出现少样本学习能力。",
        significance: "读它能理解为什么 scaling、prompt 和 emergent behavior 成为大模型核心话题。",
        commentary: "这是从“训练一个任务模型”走向“提示一个通用模型”的关键节点。",
        impact: "它影响了 ChatGPT、prompt engineering、智能体和通用 AI 产品形态。"
      },
      {
        id: "clip",
        title: "Learning Transferable Visual Models From Natural Language Supervision",
        source: "OpenAI / arXiv",
        date: "2021",
        url: "https://arxiv.org/abs/2103.00020",
        region: "入门",
        topic: "多模态",
        keywords: ["CLIP", "vision-language", "contrastive learning"],
        importance: "high",
        result: "用图文对比学习把视觉和语言对齐，形成可迁移视觉模型。",
        significance: "这是理解多模态 AI、图像检索、视觉语言模型的重要入口。",
        commentary: "它让“图片可以用自然语言检索和分类”变成可扩展路线。",
        impact: "影响图文检索、文生图、视觉语言模型和多模态智能体。"
      },
      {
        id: "ddpm",
        title: "Denoising Diffusion Probabilistic Models",
        source: "NeurIPS / arXiv",
        date: "2020",
        url: "https://arxiv.org/abs/2006.11239",
        region: "入门",
        topic: "生成模型",
        keywords: ["diffusion models", "generation", "denoising"],
        importance: "high",
        result: "奠定扩散模型的现代生成框架。",
        significance: "适合理解图像生成、视频生成和现代生成式 AI 的另一条主线。",
        commentary: "如果 Transformer 是语言主线，扩散模型就是图像/视频生成主线之一。",
        impact: "帮助理解图像生成、视频生成、设计工具和创意生产力。"
      }
    ]
  }
];

const keywordGroups = [
  {
    category: "基础理论",
    keywords: ["计算神经科学", "复杂系统", "类脑智能", "智能复杂体系", "神经计算", "神经信息处理", "神经动力学"]
  },
  {
    category: "神经信号与能量",
    keywords: ["大脑神经信号动力学", "生物物理机制", "神经能量学", "脑能量连接图谱", "哺乳动物和人脑能量模型", "基础代谢依赖", "皮层普适性信号传导"]
  },
  {
    category: "多尺度建模",
    keywords: ["离子通道层次", "神经元模型", "神经网络模型", "神经环路", "多尺度脑网络", "三维数字脑模型"]
  },
  {
    category: "类脑 AI",
    keywords: ["脉冲神经网络", "神经形态计算", "仿生智能", "具身智能", "embodied AI", "机器人学习", "world models", "vision-language-action models", "高效节能信息处理", "低功耗神经网络连接", "神经编码与解码", "脑启发学习算法"]
  },
  {
    category: "疾病与应用",
    keywords: ["神经退行性疾病", "脑疾病机制", "神经调控", "脑机接口", "EEG 实时分析", "认知计算模型"]
  }
];

const classicReads = [
  {
    id: "attwell-laughlin-energy-budget",
    title: "An energy budget for signaling in the grey matter of the brain",
    url: "https://www.semanticscholar.org/search?q=An%20energy%20budget%20for%20signaling%20in%20the%20grey%20matter%20of%20the%20brain&sort=relevance",
    source: "经典主题入口",
    topic: "神经能量学",
    notes: "适合从脑能量消耗、信号代价和代谢约束进入 NeuroAI 方向。"
  },
  {
    id: "friston-free-energy",
    title: "The free-energy principle: a unified brain theory?",
    url: "https://www.semanticscholar.org/search?q=The%20free-energy%20principle%3A%20a%20unified%20brain%20theory%3F&sort=relevance",
    source: "经典综述入口",
    topic: "计算神经科学",
    notes: "理解神经系统如何以统一理论解释感知、行动和预测。"
  },
  {
    id: "olshausen-field-sparse-code",
    title: "Emergence of simple-cell receptive field properties by learning a sparse code for natural images",
    url: "https://www.semanticscholar.org/search?q=Emergence%20of%20simple-cell%20receptive%20field%20properties%20by%20learning%20a%20sparse%20code%20for%20natural%20images&sort=relevance",
    source: "经典论文入口",
    topic: "神经编码与解码",
    notes: "从稀疏编码理解视觉皮层、神经表征和高效信息处理。"
  },
  {
    id: "spiking-neural-networks-review",
    title: "Spiking neural networks review",
    url: "https://www.semanticscholar.org/search?q=spiking%20neural%20networks%20review%20computational%20neuroscience&sort=relevance",
    source: "综述检索入口",
    topic: "脉冲神经网络",
    notes: "连接生物神经元模型、类脑计算和低功耗信息处理。"
  },
  {
    id: "neuromorphic-computing-review",
    title: "Neuromorphic computing and brain-inspired intelligence review",
    url: "https://www.semanticscholar.org/search?q=neuromorphic%20computing%20brain-inspired%20intelligence%20review&sort=relevance",
    source: "综述检索入口",
    topic: "神经形态计算",
    notes: "适合追踪类脑硬件、神经形态系统和节能 AI。"
  },
  {
    id: "neural-information-processing-review",
    title: "Neural information processing and neural computation review",
    url: "https://www.semanticscholar.org/search?q=neural%20information%20processing%20neural%20computation%20review&sort=relevance",
    source: "综述检索入口",
    topic: "神经信息处理",
    notes: "作为神经信息处理、神经计算模型和脑启发算法的阅读入口。"
  }
];

const focusAreas = [
  {
    id: "bci",
    title: "脑机接口",
    titleEn: "BCI",
    text: "连接大脑与外部设备，重点关注神经信号采集、解码、闭环反馈和长期稳定性。",
    textEn: "Connects the brain to external devices through neural sensing, decoding, closed-loop feedback and long-term stability.",
    terms: ["脑机接口", "bci", "neural decoding", "eeg", "speech bci", "侵入式"]
  },
  {
    id: "embodied",
    title: "具身智能",
    titleEn: "Embodied AI",
    text: "研究智能体如何通过身体、环境和行动学习，覆盖机器人学习、世界模型与视觉-语言-动作模型。",
    textEn: "Studies how agents learn through bodies, environments and action, including robot learning, world models and VLA models.",
    terms: ["具身智能", "embodied ai", "机器人学习", "robot learning", "world model", "vision-language-action", "vla"]
  },
  {
    id: "complex",
    title: "复杂系统",
    titleEn: "Complex Systems",
    text: "从相互作用、网络结构和非线性动力学理解涌现、临界性、自组织与集体行为。",
    textEn: "Explains emergence, criticality, self-organization and collective behavior through interactions, networks and nonlinear dynamics.",
    terms: ["复杂系统", "complex systems", "智能复杂体系", "emergence", "criticality", "nonlinear", "network dynamics"]
  },
  {
    id: "computational-neuro",
    title: "计算神经科学",
    titleEn: "Computational Neuroscience",
    text: "用数学和计算模型解释神经元、网络与行为之间的关系，是 NeuroAI 的基础语言。",
    textEn: "Uses mathematical and computational models to connect neurons, networks and behavior, forming a foundation for NeuroAI.",
    terms: ["计算神经科学", "computational neuroscience", "神经计算", "神经动力学", "neural dynamics"]
  },
  {
    id: "brain-inspired",
    title: "类脑智能",
    titleEn: "Brain-inspired AI",
    text: "从大脑的信息处理方式寻找更高效的 AI，包括脉冲网络、神经形态硬件和脑启发学习。",
    textEn: "Builds more efficient AI from brain computation, including spiking networks, neuromorphic hardware and brain-inspired learning.",
    terms: ["类脑智能", "brain-inspired", "脉冲神经网络", "spiking", "神经形态", "neuromorphic"]
  },
  {
    id: "brain-energy",
    title: "神经能量",
    titleEn: "Brain Energy",
    text: "关注神经信号的能量成本、代谢约束，以及大脑为何能用很低功耗完成复杂计算。",
    textEn: "Studies the energetic cost of neural signaling, metabolic constraints and the brain's remarkably efficient computation.",
    terms: ["神经能量", "脑能量", "brain energy", "metabolic", "代谢", "energy budget"]
  }
];

const storageKey = "neuroai-daily-articles";
const themeKey = "neuroai-daily-theme";
const favoritesKey = "neuroai-daily-favorites";
const notesKey = "neuroai-daily-notes";
const langKey = "neuroai-daily-lang";
const knownSeedKey = "neuroai-daily-known-seeds-v1";
const migrationKey = "neuroai-daily-migration-v5";
const uiText = {
  zh: {
    export: "导出",
    heroEyebrow: "AI Daily · 大事记 · 论文",
    heroTitle: "AI Daily",
    metricToday: "今日",
    metricHigh: "重点",
    metricSources: "来源",
    metricDays: "天数",
    cardDaily: "论文、新闻、笔记",
    cardChronicle: "历史、影响、就业",
    cardLearn: "入门阅读路线",
    cardNotes: "收藏与来源",
    archiveTitle: "Archive",
    focusTitle: "Focus",
    keywordsTitle: "Keywords",
    copyKeywords: "复制",
    inboxTitle: "Add",
    addArticle: "加入",
    result: "重要结果",
    why: "为什么重要",
    commentary: "社会新闻评论",
    research: "研究影响",
    career: "就业提示",
    meaning: "意义",
    saved: "已加入",
    save: "加入文章池",
    openSource: "打开来源",
    openPaper: "打开论文",
    importantCritical: "非常重要",
    importantHigh: "重要",
    importantNormal: "记录"
  },
  en: {
    export: "Export",
    heroEyebrow: "AI Daily · Chronicle · Papers",
    heroTitle: "AI Daily",
    metricToday: "Today",
    metricHigh: "High",
    metricSources: "Sources",
    metricDays: "Days",
    cardDaily: "Papers, news, notes",
    cardChronicle: "History, impact, career",
    cardLearn: "First reading path",
    cardNotes: "Saved reads and sources",
    archiveTitle: "Archive",
    focusTitle: "Focus",
    keywordsTitle: "Keywords",
    copyKeywords: "Copy",
    inboxTitle: "Add",
    addArticle: "Add",
    result: "Result",
    why: "Why",
    commentary: "Commentary",
    research: "Research",
    career: "Career",
    meaning: "Meaning",
    saved: "Saved",
    save: "Add",
    openSource: "Source",
    openPaper: "Paper",
    importantCritical: "Critical",
    importantHigh: "Key",
    importantNormal: "Note"
  }
};
let articles = repairArticleDates(ensureStarterArticles(loadArticles()));
let activeFilter = "date";
let activeFocus = "all";
let favoriteIds = loadFavorites();
let activeView = "daily";
let activeTimelineFilter = "all";
let activeChronicleId = null;
let activeLang = localStorage.getItem(langKey) || "zh";

const els = {
  articleForm: document.querySelector("#articleForm"),
  paperList: document.querySelector("#paperList"),
  newsList: document.querySelector("#newsList"),
  hero: document.querySelector(".hero"),
  selectedDate: document.querySelector("#selectedDate"),
  archiveList: document.querySelector("#archiveList"),
  focusList: document.querySelector("#focusList"),
  sourceList: document.querySelector("#sourceList"),
  aiPulseList: document.querySelector("#aiPulseList"),
  metricToday: document.querySelector("#metricToday"),
  metricHigh: document.querySelector("#metricHigh"),
  metricSources: document.querySelector("#metricSources"),
  metricDays: document.querySelector("#metricDays"),
  dailyDateLabel: document.querySelector("#dailyDateLabel"),
  paperCount: document.querySelector("#paperCount"),
  newsCount: document.querySelector("#newsCount"),
  langButton: document.querySelector("#langButton"),
  exportButton: document.querySelector("#exportButton"),
  copyPromptButton: document.querySelector("#copyPromptButton"),
  copyKeywordsButton: document.querySelector("#copyKeywordsButton"),
  saveNotesButton: document.querySelector("#saveNotesButton"),
  keywordList: document.querySelector("#keywordList"),
  notesBox: document.querySelector("#notesBox"),
  classicList: document.querySelector("#classicList"),
  favoriteList: document.querySelector("#favoriteList"),
  classicCount: document.querySelector("#classicCount"),
  favoriteCount: document.querySelector("#favoriteCount"),
  timelineNav: document.querySelector("#timelineNav"),
  timelineDetail: document.querySelector("#timelineDetail"),
  paperPath: document.querySelector("#paperPath"),
  promptBox: document.querySelector("#promptBox"),
  themeButton: document.querySelector("#themeButton"),
  prevDateButton: document.querySelector("#prevDateButton"),
  todayButton: document.querySelector("#todayButton"),
  nextDateButton: document.querySelector("#nextDateButton"),
  toast: document.querySelector("#toast")
};

init();

function init() {
  els.selectedDate.value = todayISO();
  document.querySelector("#dateInput").value = todayISO();
  document.body.classList.toggle("dark", localStorage.getItem(themeKey) === "dark");

  els.articleForm.addEventListener("submit", addArticle);
  els.langButton.addEventListener("click", toggleLanguage);
  els.exportButton.addEventListener("click", exportBrief);
  els.copyPromptButton.addEventListener("click", copyPrompt);
  els.copyKeywordsButton.addEventListener("click", copyKeywords);
  els.saveNotesButton.addEventListener("click", saveNotes);
  els.notesBox.value = localStorage.getItem(notesKey) || "";
  els.notesBox.addEventListener("input", () => localStorage.setItem(notesKey, els.notesBox.value));
  els.themeButton.addEventListener("click", toggleTheme);
  els.hero.addEventListener("pointermove", moveCosmos);
  els.hero.addEventListener("pointerleave", resetCosmos);
  els.selectedDate.addEventListener("change", () => {
    setActiveFilter("date");
    renderWithMotion();
  });
  els.prevDateButton.addEventListener("click", () => moveSelectedDate(-1));
  els.todayButton.addEventListener("click", () => {
    els.selectedDate.value = todayISO();
    setActiveFilter("date");
    renderWithMotion();
  });
  els.nextDateButton.addEventListener("click", () => moveSelectedDate(1));

  document.querySelectorAll("[data-filter]").forEach((button) => {
    button.addEventListener("click", () => {
      activeFilter = button.dataset.filter;
      document.querySelectorAll("[data-filter]").forEach((item) => item.classList.remove("is-active"));
      button.classList.add("is-active");
      renderWithMotion();
    });
  });

  document.querySelectorAll("[data-view-target]").forEach((button) => {
    button.addEventListener("click", () => setActiveView(button.dataset.viewTarget, true));
  });

  document.querySelectorAll("[data-timeline-filter]").forEach((button) => {
    button.addEventListener("click", () => {
      activeTimelineFilter = button.dataset.timelineFilter;
      document.querySelectorAll("[data-timeline-filter]").forEach((item) => item.classList.remove("is-active"));
      button.classList.add("is-active");
      renderChronicle();
    });
  });

  renderStaticLists();
  renderKeywords();
  applyLanguage();
  setActiveView("daily");
  render();
}

function loadArticles() {
  const stored = localStorage.getItem(storageKey);
  if (!stored) return seedArticles();

  try {
    const parsed = JSON.parse(stored);
    return Array.isArray(parsed) ? parsed.map(normalizeArticle) : seedArticles();
  } catch {
    return seedArticles();
  }
}

function loadFavorites() {
  const stored = localStorage.getItem(favoritesKey);
  if (!stored) return [];

  try {
    const parsed = JSON.parse(stored);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function ensureStarterArticles(items) {
  const starters = starterArticles();
  const existingIdentities = new Set(items.map(seedIdentity));
  let knownIdentities = [];

  try {
    const parsed = JSON.parse(localStorage.getItem(knownSeedKey) || "[]");
    knownIdentities = Array.isArray(parsed) ? parsed : [];
  } catch {
    knownIdentities = [];
  }

  const known = new Set(knownIdentities);
  const additions = starters.filter((item) => {
    const identity = seedIdentity(item);
    return !known.has(identity) && !existingIdentities.has(identity);
  });
  const nextItems = [...additions, ...items];

  localStorage.setItem(knownSeedKey, JSON.stringify(starters.map(seedIdentity)));
  if (additions.length) localStorage.setItem(storageKey, JSON.stringify(nextItems));
  return nextItems;
}

function seedIdentity(item) {
  return item.identifier || item.url || item.title.trim().toLowerCase();
}

function repairArticleDates(items) {
  const legacyDates = {
    "Brain-computer interface control with artificial intelligence copilots": "2025-09-01",
    "侵入式语音 BCI 的长期稳定性报告": "2025-08-15",
    "Spiking neural networks review": "2024-10-01",
    "An energy budget for signaling in the grey matter of the brain": "2001-11-01",
    "Neuromorphic computing and brain-inspired intelligence review": "2024-06-01"
  };

  const repaired = items
    .filter((item) => !(item.title === "侵入式语音 BCI 的长期稳定性报告" && item.source === "示例条目"))
    .map((item) => {
      if (!legacyDates[item.title]) return item;
      const repairedDate = item.published || legacyDates[item.title];
      return { ...item, date: repairedDate };
    });

  if (!localStorage.getItem(migrationKey) || repaired.length !== items.length) {
    localStorage.setItem(migrationKey, "true");
    localStorage.setItem(storageKey, JSON.stringify(repaired));
  }

  return repaired;
}

function seedArticles() {
  return starterArticles();
}

function starterArticles() {
  return [
    {
      id: "seed-bci-ai-copilots",
      title: "Brain-computer interface control with artificial intelligence copilots",
      url: "https://www.nature.com/articles/s42256-025-01090-y",
      identifier: "10.1038/s42256-025-01090-y",
      source: "Nature Machine Intelligence",
      date: "2025-09-01",
      published: "2025-09-01",
      topic: "类脑智能",
      priority: "high",
      evidence: "paper",
      keywords: ["BCI control", "AI copilot", "human-in-the-loop", "shared autonomy", "brain-inspired intelligence"],
      result: "文章把 AI copilot 引入脑机接口控制问题，核心结果是提出一种让 AI 辅助解释意图、补偿控制误差、提升交互效率的框架。",
      significance: "对你的阅读目标来说，它的意义不在单纯 BCI 产品，而在“神经信号 + 智能系统”如何形成闭环控制，可连接类脑智能、神经计算和低负担人机协同。",
      notes: "阅读时重点验证：是否有真实在线 BCI 实验、AI copilot 如何建模不确定性、性能提升是否来自神经信号解码本身。"
    },
    {
      id: "seed-codex-access-2026-07-28",
      title: "Codex Access",
      url: "https://help.openai.com/en/articles/11369540-using-codex-with-your-chatgpt-plan",
      identifier: "",
      source: "OpenAI Help",
      date: "2026-07-28",
      published: "",
      topic: "AI 工具动态",
      priority: "high",
      evidence: "industry",
      keywords: ["Codex", "rate limits", "OpenAI", "developer tools"],
      result: "官方帮助页说明 Codex 的使用限制与 ChatGPT 计划、账户状态和额度政策相关，实际额度需要以官方页面和账户内显示为准。",
      significance: "这条可以解释你说的“最近 Codex 可以更新很多额度”：它不是论文结果，而是工具额度/套餐策略变化，影响日常调研与编码工作流。",
      notes: "建议把 X 上看到的额度说法回到 OpenAI Help 或账户内额度页面核验。"
    },
    {
      id: "seed-snn-review-2024-10",
      title: "Spiking neural networks review",
      url: "https://www.semanticscholar.org/search?q=spiking%20neural%20networks%20review%20computational%20neuroscience&sort=relevance",
      identifier: "",
      source: "综述检索入口",
      date: "2024-10-01",
      published: "",
      topic: "脉冲神经网络",
      priority: "high",
      evidence: "review",
      keywords: ["spiking neural networks", "neuromorphic computing", "brain-inspired learning"],
      result: "综述入口：重点读 SNN 的神经元模型、训练方法、事件驱动计算和低功耗优势。",
      significance: "SNN 是“神经计算机制”与“类脑 AI/节能信息处理”的桥梁，值得作为长期基础阅读线。",
      notes: "打开检索入口后优先选高被引综述或近三年综述。"
    },
    {
      id: "seed-energy-budget-2001",
      title: "An energy budget for signaling in the grey matter of the brain",
      url: "https://www.semanticscholar.org/search?q=An%20energy%20budget%20for%20signaling%20in%20the%20grey%20matter%20of%20the%20brain&sort=relevance",
      identifier: "",
      source: "经典主题入口",
      date: "2001-11-01",
      published: "",
      topic: "脑能量学",
      priority: "high",
      evidence: "paper",
      keywords: ["brain energy", "signaling cost", "metabolic constraint"],
      result: "经典入口：从能量预算理解神经信号传递的代谢代价，以及不同信号过程如何消耗能量。",
      significance: "这条线能直接连接脑能量连接、基础代谢依赖和高效节能信息处理机制。",
      notes: "适合和神经信号动力学、多尺度脑网络模型一起读。"
    },
    {
      id: "seed-neuromorphic-review-2024-06",
      title: "Neuromorphic computing and brain-inspired intelligence review",
      url: "https://www.semanticscholar.org/search?q=neuromorphic%20computing%20brain-inspired%20intelligence%20review&sort=relevance",
      identifier: "",
      source: "综述检索入口",
      date: "2024-06-01",
      published: "",
      topic: "神经形态计算",
      priority: "medium",
      evidence: "review",
      keywords: ["neuromorphic computing", "brain-inspired AI", "low power"],
      result: "综述入口：关注神经形态硬件、事件驱动计算、低功耗推理和与生物神经系统的对应关系。",
      significance: "它把计算神经科学的机制问题转化成 AI 系统设计问题，适合作为类脑智能方向的技术地图。",
      notes: "读的时候区分硬件进展、算法进展和神经科学启发是否真实有效。"
    }
  ];
}

function normalizeArticle(article) {
  const normalized = {
    id: article.id || crypto.randomUUID(),
    title: sanitizeLegacyText(article.title || "未命名条目"),
    url: article.url || "",
    identifier: article.identifier || "",
    source: sanitizeLegacyText(article.source || "未标注来源"),
    date: article.date || article.captureDate || todayISO(),
    published: article.published || article.publicationDate || "",
    topic: sanitizeLegacyText(article.topic || "计算神经科学"),
    priority: article.priority || "medium",
    evidence: article.evidence || "paper",
    keywords: normalizeKeywords(article.keywords || article.keywordText || "").map(sanitizeLegacyText),
    result: sanitizeLegacyText(article.result || article.keyResult || ""),
    significance: sanitizeLegacyText(article.significance || article.meaning || ""),
    notes: sanitizeLegacyText(article.notes || "")
  };

  return applyDefaultInsights(normalized);
}

function applyDefaultInsights(article) {
  if (article.title === "Brain-computer interface control with artificial intelligence copilots") {
    return {
      ...article,
      keywords: article.keywords.length
        ? article.keywords
        : ["BCI control", "AI copilot", "human-in-the-loop", "shared autonomy", "brain-inspired intelligence"],
      result:
        article.result ||
        "文章把 AI copilot 引入脑机接口控制问题，核心结果是提出一种让 AI 辅助解释意图、补偿控制误差、提升交互效率的框架。",
      significance:
        article.significance ||
        "对你的阅读目标来说，它的意义不在单纯 BCI 产品，而在“神经信号 + 智能系统”如何形成闭环控制，可连接类脑智能、神经计算和低负担人机协同。",
      notes: article.notes.startsWith("示例：")
        ? "阅读时重点验证：是否有真实在线 BCI 实验、AI copilot 如何建模不确定性、性能提升是否来自神经信号解码本身。"
        : article.notes
    };
  }

  if (article.title === "侵入式语音 BCI 的长期稳定性报告") {
    return {
      ...article,
      keywords: article.keywords.length ? article.keywords : ["speech BCI", "long-term stability", "neural decoding", "signal drift"],
      result: article.result || "待补原文后填写：重点看长期记录中神经信号稳定性、校准频率、解码准确率和跨天泛化。",
      significance: article.significance || "这类文章有助于判断脑机接口从演示走向长期使用时，真正瓶颈是硬件稳定性、神经信号漂移还是解码算法。",
      notes: article.notes.startsWith("示例：") ? "没有原文链接时，卡片会自动给出 Semantic Scholar、arXiv 和 PubMed 检索入口。" : article.notes
    };
  }

  return article;
}

function saveArticles() {
  localStorage.setItem(storageKey, JSON.stringify(articles));
}

function saveFavorites() {
  localStorage.setItem(favoritesKey, JSON.stringify(favoriteIds));
}

function addArticle(event) {
  event.preventDefault();
  const data = new FormData(els.articleForm);
  const article = normalizeArticle({
    title: data.get("title").trim(),
    url: data.get("url").trim(),
    identifier: data.get("identifier").trim(),
    source: data.get("source").trim() || "未标注来源",
    date: data.get("date") || todayISO(),
    published: data.get("published") || "",
    topic: data.get("topic"),
    priority: data.get("priority"),
    evidence: data.get("evidence"),
    keywords: data.get("keywords"),
    result: data.get("result").trim(),
    significance: data.get("significance").trim(),
    notes: data.get("notes").trim()
  });

  articles = [article, ...articles];
  saveArticles();
  els.articleForm.reset();
  document.querySelector("#dateInput").value = todayISO();
  showToast("已加入文章池");
  setActiveFilter("date");
  els.selectedDate.value = article.date;
  renderWithMotion();
}

function deleteArticle(id) {
  articles = articles.filter((article) => article.id !== id);
  favoriteIds = favoriteIds.filter((favoriteId) => favoriteId !== id);
  saveArticles();
  saveFavorites();
  showToast("已删除条目");
  renderWithMotion();
}

function toggleFavorite(id) {
  if (favoriteIds.includes(id)) {
    favoriteIds = favoriteIds.filter((favoriteId) => favoriteId !== id);
    showToast("已取消收藏");
  } else {
    favoriteIds = [id, ...favoriteIds];
    showToast("已收藏到笔记区");
  }

  saveFavorites();
  renderWithMotion();
}

function renderWithMotion() {
  if (document.startViewTransition) {
    document.startViewTransition(render);
    return;
  }

  render();
}

function render() {
  renderMetrics();
  renderArchive();
  renderArticles();
  renderNotebook();
  renderAIPulse();
  renderChronicle();
  renderPaperPath();
  renderPrompt();
}

function renderMetrics() {
  const date = els.selectedDate.value || todayISO();
  const dayItems = articles.filter((item) => item.date === date);
  els.metricToday.textContent = dayItems.length;
  els.metricHigh.textContent = dayItems.filter((item) => item.priority === "high").length;
  els.metricSources.textContent = sources.length;
  els.metricDays.textContent = archiveDates().length;
}

function renderArchive() {
  const selected = els.selectedDate.value || todayISO();
  const dates = archiveDates();
  const recentDates = dates.slice(0, 7);
  const visibleDates = recentDates.includes(selected) ? recentDates : [selected, ...recentDates.slice(0, 6)];

  els.archiveList.innerHTML = visibleDates
    .map((date) => {
      const dayItems = articles.filter((item) => item.date === date);
      return `
        <button class="archive-button ${date === selected ? "is-active" : ""}" type="button" data-date="${date}">
          <strong>${formatFullDate(date)}</strong>
          <span>${dayItems.length}</span>
        </button>
      `;
    })
    .join("");

  els.archiveList.querySelectorAll("[data-date]").forEach((button) => {
    button.addEventListener("click", () => {
      els.selectedDate.value = button.dataset.date;
      setActiveFilter("date");
      renderWithMotion();
    });
  });
}

function renderArticles() {
  const date = els.selectedDate.value || todayISO();
  const filtered = sortArticles(articles).filter((article) => {
    const matchesListFilter =
      activeFilter === "high" ? article.priority === "high" : activeFilter === "date" ? article.date === date : true;
    return matchesListFilter && articleMatchesFocus(article);
  });
  const paperItems = filtered.filter(isAcademicArticle);
  const newsItems = filtered.filter((article) => !isAcademicArticle(article));

  els.dailyDateLabel.textContent =
    activeFilter === "date"
      ? formatFullDate(date)
      : activeFilter === "high"
        ? activeLang === "zh"
          ? "重点"
          : "High priority"
        : activeLang === "zh"
          ? "全部记录"
          : "All records";
  els.paperCount.textContent = String(paperItems.length);
  els.newsCount.textContent = String(newsItems.length);

  renderArticleGroup(els.paperList, paperItems, activeLang === "zh" ? "这一天没有已记录的论文。" : "No papers recorded for this date.");
  renderArticleGroup(els.newsList, newsItems, activeLang === "zh" ? "这一天没有已记录的新闻。" : "No news recorded for this date.");
}

function articleMatchesFocus(article) {
  if (activeFocus === "all") return true;
  const focus = focusAreas.find((item) => item.id === activeFocus);
  if (!focus) return true;

  const searchable = [article.title, article.topic, article.source, ...article.keywords].join(" ").toLowerCase();
  return focus.terms.some((term) => searchable.includes(term.toLowerCase()));
}

function renderArticleGroup(container, items, emptyText) {
  container.innerHTML = items.length ? items.map(renderArticleCard).join("") : `<div class="empty empty--small">${emptyText}</div>`;

  container.querySelectorAll("[data-favorite]").forEach((button) => {
    button.addEventListener("click", () => toggleFavorite(button.dataset.favorite));
  });
  container.querySelectorAll("[data-delete]").forEach((button) => {
    button.addEventListener("click", () => deleteArticle(button.dataset.delete));
  });
}

function isAcademicArticle(article) {
  return ["paper", "preprint", "review", "trial"].includes(article.evidence);
}

function renderArticleCard(article) {
  const links = articleLinks(article);
  const published = article.published ? `<span>发表 ${formatDate(article.published)}</span>` : "";
  const identifier = article.identifier ? `<span>${escapeHTML(article.identifier)}</span>` : "";
  const isFavorite = favoriteIds.includes(article.id);
  const keywords = article.keywords.length ? article.keywords : inferKeywords(article);

  return `
    <article class="article-card">
      <div class="article-card__top">
        <div>
          <h3>${escapeHTML(article.title)}</h3>
          <div class="article-card__meta">
            <span>${escapeHTML(article.source)}</span>
            <span>记录 ${formatDate(article.date)}</span>
            ${published}
            ${identifier}
            <span class="pill">${escapeHTML(article.topic)}</span>
            <span class="pill pill--${article.priority}">${priorityLabel(article.priority)}</span>
            <span class="pill pill--${article.evidence}">${evidenceLabel(article.evidence)}</span>
          </div>
        </div>
        <div class="article-card__actions">
          <button class="link-button ${isFavorite ? "is-saved" : ""}" type="button" data-favorite="${article.id}">${isFavorite ? t("saved") : activeLang === "zh" ? "收藏" : "Save"}</button>
          <button class="delete-button" type="button" data-delete="${article.id}">${activeLang === "zh" ? "删除" : "Delete"}</button>
        </div>
      </div>
      <div class="article-insights">
        <section>
          <span>${t("result")}</span>
          <p>${escapeHTML(article.result || "待读原文后填写这篇文章最重要的结果。")}</p>
        </section>
        <section>
          <span>${t("meaning")}</span>
          <p>${escapeHTML(article.significance || "待读原文后填写它和 NeuroAI / BCI / brain-inspired AI 之间的关系。")}</p>
        </section>
      </div>
      <div class="article-keywords" aria-label="文章关键词">
        ${keywords.map((keyword) => `<span>${escapeHTML(keyword)}</span>`).join("")}
      </div>
      ${article.notes ? `<p class="article-note">${escapeHTML(article.notes)}</p>` : ""}
      <div class="article-card__links">
        ${links.map(renderArticleLink).join("")}
      </div>
    </article>
  `;
}

function renderArticleLink(link) {
  return `<a class="link-button ${link.primary ? "link-button--primary" : ""}" href="${escapeAttribute(link.url)}" target="_blank" rel="noreferrer">${escapeHTML(link.label)}</a>`;
}

function renderKeywords() {
  els.keywordList.innerHTML = keywordGroups
    .map(
      (group) => `
        <article class="keyword-group">
          <div class="source-group__title">
            <span>${group.category}</span>
            <span>${group.keywords.length} 个</span>
          </div>
          <div class="keyword-chips">
            ${group.keywords.map((keyword) => `<a class="keyword-chip" href="${keywordSearchUrl(keyword)}" target="_blank" rel="noreferrer">${keyword}</a>`).join("")}
          </div>
        </article>
      `
    )
    .join("");
}

function renderNotebook() {
  const favorites = favoriteIds
    .map((id) => articles.find((article) => article.id === id))
    .filter(Boolean);

  els.classicCount.textContent = `${classicReads.length} 个`;
  els.favoriteCount.textContent = `${favorites.length} 个`;
  els.classicList.innerHTML = classicReads.map(renderClassicItem).join("");
  els.favoriteList.innerHTML = favorites.length
    ? favorites.map(renderFavoriteItem).join("")
    : '<div class="empty empty--small">还没有收藏。可以在文章卡片点“收藏”，也可以先收几篇经典综述入口。</div>';

  els.classicList.querySelectorAll("[data-collect-classic]").forEach((button) => {
    button.addEventListener("click", () => collectClassic(button.dataset.collectClassic));
  });
  els.favoriteList.querySelectorAll("[data-favorite]").forEach((button) => {
    button.addEventListener("click", () => toggleFavorite(button.dataset.favorite));
  });
}

function renderAIPulse() {
  els.aiPulseList.innerHTML = aiPulseItems.map(renderAIPulseItem).join("");
  els.aiPulseList.querySelectorAll("[data-collect-pulse]").forEach((button) => {
    button.addEventListener("click", () => collectPulseItem(button.dataset.collectPulse));
  });
}

function renderChronicle() {
  const items = filteredChronicleEvents();

  if (!items.length) {
    els.timelineNav.innerHTML = '<div class="empty empty--small">当前筛选下没有事件。</div>';
    els.timelineDetail.innerHTML = '<div class="empty">换一个筛选条件试试。</div>';
    return;
  }

  if (!activeChronicleId || !items.some((item) => item.id === activeChronicleId)) {
    activeChronicleId = items[0].id;
  }

  const activeItem = items.find((item) => item.id === activeChronicleId) || items[0];
  els.timelineNav.innerHTML = items.map(renderTimelineButton).join("");
  els.timelineDetail.innerHTML = renderTimelineDetail(activeItem);

  els.timelineNav.querySelectorAll("[data-timeline-id]").forEach((button) => {
    button.addEventListener("click", () => {
      activeChronicleId = button.dataset.timelineId;
      renderChronicle();
    });
  });

  els.timelineDetail.querySelectorAll("[data-collect-chronicle]").forEach((button) => {
    button.addEventListener("click", () => collectChronicleItem(button.dataset.collectChronicle));
  });
}

function renderTimelineButton(item) {
  const isActive = item.id === activeChronicleId;
  const isImportant = item.importance === "critical" || item.importance === "high";
  return `
    <button class="timeline-button ${isActive ? "is-active" : ""} ${isImportant ? "is-important" : ""}" type="button" data-timeline-id="${escapeAttribute(item.id)}">
      <span class="timeline-button__date">${escapeHTML(item.date)}</span>
      <strong>${escapeHTML(item.title)}</strong>
      <em>${escapeHTML(eventSubtitle(item))}</em>
      <span>${escapeHTML(item.region)} · ${escapeHTML(item.topic)}</span>
    </button>
  `;
}

function eventSubtitle(item) {
  const text = item.significance || item.impact || item.result || "";
  return compactText(text, 64);
}

function compactText(value, limit = 72) {
  const normalized = String(value).replace(/\s+/g, " ").trim();
  if (normalized.length <= limit) return normalized;
  return `${normalized.slice(0, limit)}...`;
}

function renderTimelineDetail(item) {
  const exists = articles.some((article) => article.title === item.title);
  return `
    <div class="timeline-detail__top">
      <div>
        <p class="eyebrow">${escapeHTML(item.region)} · ${escapeHTML(item.topic)}</p>
        <h3>${escapeHTML(item.title)}</h3>
      </div>
      <span class="importance-badge importance-badge--${escapeAttribute(item.importance || "normal")}">${importanceLabel(item.importance)}</span>
    </div>
    <div class="timeline-meta">
      <span>${escapeHTML(item.date)}</span>
      <span>${escapeHTML(item.source)}</span>
      ${item.sectionTitle ? `<span>${escapeHTML(item.sectionTitle)}</span>` : ""}
    </div>
    <div class="timeline-detail-grid">
      <section class="detail-section detail-section--result">
        <span>${t("result")}</span>
        <p>${escapeHTML(item.result)}</p>
      </section>
      <section class="detail-section">
        <span>${t("why")}</span>
        <p>${escapeHTML(item.significance)}</p>
      </section>
      <section class="detail-section">
        <span>${t("commentary")}</span>
        <p>${escapeHTML(item.commentary || "需要继续补充媒体评论和公共讨论。")}</p>
      </section>
      <section class="detail-section">
        <span>${t("research")}</span>
        <p>${escapeHTML(item.impact || "需要继续观察产业链、资本、应用和人才结构变化。")}</p>
      </section>
      <section class="detail-section">
        <span>${t("career")}</span>
        <p>${escapeHTML(item.career || "把这个事件转成一个可展示的小项目、可复现笔记或求职技能点。")}</p>
      </section>
    </div>
    <div class="article-keywords article-keywords--quiet" aria-label="事件关键词">
      ${item.keywords.map((keyword) => `<span>${escapeHTML(keyword)}</span>`).join("")}
    </div>
    <div class="article-card__links">
      <a class="link-button link-button--primary" href="${escapeAttribute(item.url)}" target="_blank" rel="noreferrer">${t("openSource")}</a>
      <button class="link-button ${exists ? "is-saved" : ""}" type="button" data-collect-chronicle="${escapeAttribute(item.id)}">${exists ? t("saved") : t("save")}</button>
    </div>
  `;
}

function renderPaperPath() {
  const papers = beginnerPapers();

  if (!papers.length) {
    els.paperPath.innerHTML = '<div class="empty">还没有入门论文。</div>';
    return;
  }

  els.paperPath.innerHTML = papers
    .map((paper, index) => {
      const exists = articles.some((article) => article.title === paper.title);
      return `
        <article class="paper-step ${paper.importance === "critical" ? "is-critical" : ""}">
          <div class="paper-step__index">${String(index + 1).padStart(2, "0")}</div>
          <div>
            <div class="paper-step__top">
              <span class="pill">${escapeHTML(paper.topic)}</span>
              <span>${escapeHTML(paper.date)}</span>
            </div>
            <h3>${escapeHTML(paper.title)}</h3>
            <div class="article-insights">
              <section>
                <span>${t("result")}</span>
                <p>${escapeHTML(paper.result)}</p>
              </section>
              <section>
                <span>${t("meaning")}</span>
                <p>${escapeHTML(paper.significance)}</p>
              </section>
            </div>
            <div class="article-keywords article-keywords--quiet">
              ${paper.keywords.map((keyword) => `<span>${escapeHTML(keyword)}</span>`).join("")}
            </div>
            <div class="article-card__links">
              <a class="link-button link-button--primary" href="${escapeAttribute(paper.url)}" target="_blank" rel="noreferrer">${t("openPaper")}</a>
              <button class="link-button ${exists ? "is-saved" : ""}" type="button" data-collect-chronicle="${escapeAttribute(paper.id)}">${exists ? t("saved") : t("save")}</button>
            </div>
          </div>
        </article>
      `;
    })
    .join("");

  els.paperPath.querySelectorAll("[data-collect-chronicle]").forEach((button) => {
    button.addEventListener("click", () => collectChronicleItem(button.dataset.collectChronicle));
  });
}

function chronicleEvents() {
  return chronicleSections
    .filter((section) => section.id !== "beginner-papers")
    .flatMap((section) => section.items.map((item) => ({ ...item, sectionTitle: section.title })))
    .sort((a, b) => normalizeEventDate(b.date).localeCompare(normalizeEventDate(a.date)));
}

function filteredChronicleEvents() {
  return chronicleEvents().filter((item) => {
    if (activeTimelineFilter === "important") return item.importance === "critical" || item.importance === "high";
    if (activeTimelineFilter === "recent") return normalizeEventDate(item.date) >= addDays(todayISO(), -92);
    if (activeTimelineFilter === "china") return item.region === "China";
    if (activeTimelineFilter === "us") return item.region === "US";
    return true;
  });
}

function beginnerPapers() {
  return chronicleSections.find((section) => section.id === "beginner-papers")?.items || [];
}

function collectChronicleItem(id) {
  const item = chronicleSections.flatMap((section) => section.items).find((entry) => entry.id === id);
  if (!item) return;

  if (articles.some((article) => article.title === item.title)) {
    showToast("这条已在文章池");
    return;
  }

  const article = normalizeArticle({
    title: item.title,
    url: item.url,
    identifier: "",
    source: item.source,
    date: els.selectedDate.value || todayISO(),
    published: item.date.length === 4 ? "" : item.date,
    topic: item.topic,
    priority: item.region === "入门" ? "medium" : "high",
    evidence: item.region === "入门" ? "paper" : /policy|capital|infrastructure/i.test(item.topic) ? "industry" : "review",
    keywords: item.keywords,
    result: item.result,
    significance: item.significance,
    notes: "来自 AI 大事专栏。"
  });

  articles = [article, ...articles];
  saveArticles();
  setActiveFilter("date");
  showToast("已加入文章池");
  renderWithMotion();
}

function renderAIPulseItem(item) {
  const exists = articles.some((article) => article.title === item.title);
  return `
    <article class="ai-pulse-item">
      <div class="ai-pulse-item__top">
        <span class="pill">${escapeHTML(item.confidence)}</span>
        <span>${escapeHTML(item.source)}</span>
      </div>
      <h3>${escapeHTML(item.title)}</h3>
      <p><strong>${t("result")}</strong>：${escapeHTML(item.result)}</p>
      <p><strong>${t("meaning")}</strong>：${escapeHTML(item.significance)}</p>
      <div class="article-keywords">
        ${item.keywords.map((keyword) => `<span>${escapeHTML(keyword)}</span>`).join("")}
      </div>
      <div class="article-card__links">
        <a class="link-button" href="${escapeAttribute(item.url)}" target="_blank" rel="noreferrer">${t("openSource")}</a>
        <button class="link-button ${exists ? "is-saved" : ""}" type="button" data-collect-pulse="${item.id}">${exists ? t("saved") : t("save")}</button>
      </div>
    </article>
  `;
}

function collectPulseItem(id) {
  const item = aiPulseItems.find((pulse) => pulse.id === id);
  if (!item) return;

  if (articles.some((article) => article.title === item.title)) {
    showToast("这条快讯已在文章池");
    return;
  }

  const article = normalizeArticle({
    title: item.title,
    url: item.url,
    identifier: "",
    source: item.source,
    date: els.selectedDate.value || todayISO(),
    published: item.date,
    topic: "AI 工具动态",
    priority: item.confidence === "官方核验" ? "high" : "medium",
    evidence: "industry",
    keywords: item.keywords,
    result: item.result,
    significance: item.significance,
    notes: item.confidence === "X 待核验" ? "X 实时消息需要回到官方公告、原始文档或产品内提示核验。" : "官方来源快讯。"
  });

  articles = [article, ...articles];
  saveArticles();
  setActiveFilter("date");
  showToast("已加入文章池");
  renderWithMotion();
}

function renderClassicItem(item) {
  const exists = articles.some((article) => article.title === item.title);
  return `
    <article class="classic-item">
      <h3>${escapeHTML(item.title)}</h3>
      <p>${escapeHTML(item.notes)}</p>
      <div class="article-card__links">
        <a class="link-button" href="${escapeAttribute(item.url)}" target="_blank" rel="noreferrer">${activeLang === "zh" ? "检索" : "Search"}</a>
        <button class="link-button ${exists ? "is-saved" : ""}" type="button" data-collect-classic="${item.id}">${exists ? t("saved") : activeLang === "zh" ? "收藏" : "Save"}</button>
      </div>
    </article>
  `;
}

function renderFavoriteItem(item) {
  const primary = primaryArticleUrl(item) || articleLinks(item)[0]?.url || "#";
  return `
    <article class="favorite-item">
      <h3>${escapeHTML(item.title)}</h3>
      <p>${escapeHTML(item.topic)} · ${escapeHTML(item.source)}</p>
      <div class="article-card__links">
        <a class="link-button" href="${escapeAttribute(primary)}" target="_blank" rel="noreferrer">${activeLang === "zh" ? "打开" : "Open"}</a>
        <button class="delete-button" type="button" data-favorite="${item.id}">${activeLang === "zh" ? "移出" : "Remove"}</button>
      </div>
    </article>
  `;
}

function collectClassic(id) {
  const item = classicReads.find((classic) => classic.id === id);
  if (!item) return;

  const existing = articles.find((article) => article.title === item.title);
  if (existing) {
    if (!favoriteIds.includes(existing.id)) favoriteIds = [existing.id, ...favoriteIds];
    saveFavorites();
    showToast("已加入收藏");
    renderWithMotion();
    return;
  }

  const article = normalizeArticle({
    title: item.title,
    url: item.url,
    identifier: "",
    source: item.source,
    date: els.selectedDate.value || todayISO(),
    published: "",
    topic: item.topic,
    priority: "high",
    evidence: "review",
    keywords: item.topic,
    result: "经典/综述阅读入口：需要打开检索页后选择高被引或最新综述补充具体结果。",
    significance: item.notes,
    notes: item.notes
  });

  articles = [article, ...articles];
  favoriteIds = [article.id, ...favoriteIds];
  saveArticles();
  saveFavorites();
  setActiveFilter("date");
  showToast("已收藏经典入口");
  renderWithMotion();
}

function renderStaticLists() {
  const allLabel = activeLang === "zh" ? "全部" : "All";
  const focusButtons = focusAreas
    .map((item) => {
      const title = activeLang === "zh" ? item.title : item.titleEn;
      const text = activeLang === "zh" ? item.text : item.textEn;
      return `
        <button
          class="focus-chip ${activeFocus === item.id ? "is-active" : ""}"
          type="button"
          data-focus="${item.id}"
          aria-pressed="${activeFocus === item.id}"
        >
          <span>${escapeHTML(title)}</span>
          <span class="focus-tooltip" role="tooltip">${escapeHTML(text)}</span>
        </button>
      `;
    })
    .join("");

  els.focusList.innerHTML = `
    <button
      class="focus-chip ${activeFocus === "all" ? "is-active" : ""}"
      type="button"
      data-focus="all"
      aria-pressed="${activeFocus === "all"}"
    >
      <span>${allLabel}</span>
    </button>
    ${focusButtons}
  `;
  els.focusList.querySelectorAll("[data-focus]").forEach((button) => {
    button.addEventListener("click", () => {
      activeFocus = button.dataset.focus;
      renderStaticLists();
      renderWithMotion();
    });
  });

  els.sourceList.innerHTML = sourceGroups
    .map((group) => {
      const items = group.items
        .map(
          (source) => `
            <article class="source-item">
              <div class="source-item__top">
                <h3>${source.name}</h3>
                <span class="pill">${source.cadence}</span>
              </div>
              <p>${source.note}</p>
              <a class="source-link" href="${escapeAttribute(source.url)}" target="_blank" rel="noreferrer">${t("openSource")}</a>
            </article>
          `
        )
        .join("");

      return `
        <div class="source-group">
          <div class="source-group__title">
            <span>${group.category}</span>
            <span>${group.items.length} 个</span>
          </div>
          ${items}
        </div>
      `;
    })
    .join("");
}

function renderPrompt() {
  const date = els.selectedDate.value || todayISO();
  const dayArticles = sortArticles(articles.filter((item) => item.date === date));
  const keywordLines = keywordGroups.map((group) => `${group.category}：${group.keywords.join("，")}`).join("\n");
  const articleLines = dayArticles
    .map((item, index) => `${index + 1}. ${item.title}
来源：${item.source}
记录日期：${item.date}
发表日期：${item.published || "未标注"}
识别码：${item.identifier || "无"}
证据类型：${evidenceLabel(item.evidence)}
方向：${item.topic}
优先级：${priorityLabel(item.priority)}
关键词：${(item.keywords.length ? item.keywords : inferKeywords(item)).join("，")}
重要结果：${item.result || "待填写"}
意义：${item.significance || "待填写"}
笔记：${item.notes || "待总结"}
原文或检索入口：${articleLinks(item).map((link) => `${link.label} ${link.url}`).join("；")}`)
    .join("\n\n");

  els.promptBox.value = `请你作为脑机接口和人工智能交叉方向的研究助理，基于下面的文章池生成 ${date} 的中文日报。

重点关注 NeuroAI / BCI / brain-inspired AI 相关方向：
${keywordLines}

输出结构：
1. 一句话总览
2. 今日最重要的 3 条
3. 技术趋势：模型、数据、硬件、临床或产业
4. 每篇文章：关键词、重要结果、意义、待读问题
5. 明天继续追踪的关键词

判断标准：
- 优先打开原文、DOI、arXiv 或 PMID；没有原文时使用检索入口，不要只凭标题判断
- 区分论文证据、预印本、临床试验、公司宣传、监管进展和媒体转述
- 对结论强度保持谨慎，明确哪些需要读原文验证
- 把重要结果和研究意义放在最前面，关键词只作为辅助索引

文章池：
${articleLines || "这一天还没有文章。请先添加文章标题、链接和摘要。"} `;
}

function exportBrief() {
  const date = els.selectedDate.value || todayISO();
  const dayArticles = sortArticles(articles.filter((item) => item.date === date));
  const markdown = [
    `# NeuroAI Daily - ${date}`,
    "",
    `本日共收集 ${dayArticles.length} 条。`,
    "",
    "## 重点条目",
    ...dayArticles.map((item) => {
      const links = articleLinks(item).map((link) => `[${link.label}](${link.url})`).join(" / ");
      const keywords = (item.keywords.length ? item.keywords : inferKeywords(item)).join("，");
      return `- **${item.title}**（${item.source}，${item.topic}，${priorityLabel(item.priority)}，${evidenceLabel(item.evidence)}）
  - 关键词：${keywords || "待补充"}
  - 重要结果：${item.result || "待补充"}
  - 意义：${item.significance || "待补充"}
  - 笔记：${item.notes || "待补充"}${links ? `\n  - ${links}` : ""}`;
    }),
    "",
    "## AI 摘要提示词",
    "",
    els.promptBox.value
  ].join("\n");

  navigator.clipboard.writeText(markdown).then(
    () => showToast("日报 Markdown 已复制"),
    () => showToast("复制失败，请手动复制提示词区域")
  );
}

function copyPrompt() {
  navigator.clipboard.writeText(els.promptBox.value).then(
    () => showToast("提示词已复制"),
    () => showToast("复制失败，请手动复制")
  );
}

function copyKeywords() {
  const text = keywordGroups
    .map((group) => `${group.category}：${group.keywords.join("，")}`)
    .join("\n");

  navigator.clipboard.writeText(text).then(
    () => showToast("关键词已复制"),
    () => showToast("复制失败，请手动选择关键词")
  );
}

function saveNotes() {
  localStorage.setItem(notesKey, els.notesBox.value);
  showToast("笔记已保存");
}

function toggleTheme() {
  document.body.classList.toggle("dark");
  localStorage.setItem(themeKey, document.body.classList.contains("dark") ? "dark" : "light");
}

function moveCosmos(event) {
  const rect = els.hero.getBoundingClientRect();
  const x = ((event.clientX - rect.left) / rect.width) * 100;
  const y = ((event.clientY - rect.top) / rect.height) * 100;
  els.hero.style.setProperty("--sun-x", `${x.toFixed(2)}%`);
  els.hero.style.setProperty("--sun-y", `${y.toFixed(2)}%`);
}

function resetCosmos() {
  els.hero.style.setProperty("--sun-x", "72%");
  els.hero.style.setProperty("--sun-y", "24%");
}

function toggleLanguage() {
  activeLang = activeLang === "zh" ? "en" : "zh";
  localStorage.setItem(langKey, activeLang);
  applyLanguage();
  renderStaticLists();
  renderKeywords();
  renderWithMotion();
}

function applyLanguage() {
  document.documentElement.lang = activeLang === "zh" ? "zh-CN" : "en";
  els.langButton.textContent = activeLang === "zh" ? "EN" : "中";
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    if (t(key)) element.textContent = t(key);
  });
}

function t(key) {
  return uiText[activeLang]?.[key] || uiText.zh[key] || key;
}

function moveSelectedDate(delta) {
  els.selectedDate.value = addDays(els.selectedDate.value || todayISO(), delta);
  setActiveFilter("date");
  renderWithMotion();
}

function setActiveFilter(filter) {
  activeFilter = filter;
  document.querySelectorAll("[data-filter]").forEach((item) => {
    item.classList.toggle("is-active", item.dataset.filter === filter);
  });
}

function setActiveView(view, shouldScroll = false) {
  const update = () => {
    activeView = view;
    document.body.dataset.view = view;

    document.querySelectorAll("[data-view-target]").forEach((item) => {
      const isActive = item.dataset.viewTarget === view;
      item.classList.toggle("is-active", isActive);
      item.setAttribute("aria-selected", String(isActive));
    });

    document.querySelectorAll(".page-section").forEach((section) => {
      const pages = (section.dataset.page || "").split(/\s+/).filter(Boolean);
      section.classList.toggle("is-active", pages.includes(view));
    });

    document.querySelectorAll(".page-section-inner").forEach((section) => {
      const pages = (section.dataset.pageInner || "").split(/\s+/).filter(Boolean);
      section.classList.toggle("is-active", pages.includes(view));
    });

    if (view === "chronicle") renderChronicle();
    if (view === "learn") renderPaperPath();
  };

  if (document.startViewTransition) {
    document.startViewTransition(update);
  } else {
    update();
  }

  if (shouldScroll) {
    const target = document.querySelector("main");
    window.setTimeout(() => target?.scrollIntoView({ behavior: "smooth", block: "start" }), 80);
  }
}

function normalizeEventDate(date) {
  if (/^\d{4}$/.test(date)) return `${date}-01-01`;
  if (/^\d{4}-\d{2}$/.test(date)) return `${date}-01`;
  return date;
}

function importanceLabel(importance = "normal") {
  return (
    {
      critical: t("importantCritical"),
      high: t("importantHigh"),
      normal: t("importantNormal")
    }[importance] || "记录"
  );
}

function articleLinks(article) {
  const titleQuery = encodeURIComponent(article.title);
  const links = [];
  const primary = primaryArticleUrl(article);

  if (primary) {
    const label = article.url && article.url.includes("semanticscholar.org/search") ? (activeLang === "zh" ? "检索入口" : "Search") : article.url ? (activeLang === "zh" ? "原文" : "Original") : identifierLabel(article.identifier);
    links.push({ label, url: primary, primary: true });
  }

  links.push(
    { label: "Semantic Scholar", url: `https://www.semanticscholar.org/search?q=${titleQuery}&sort=relevance` },
    { label: "arXiv", url: `https://arxiv.org/search/?query=${titleQuery}&searchtype=all&source=header` },
    { label: "PubMed", url: `https://pubmed.ncbi.nlm.nih.gov/?term=${titleQuery}&sort=date` }
  );

  return dedupeLinks(links);
}

function normalizeKeywords(value) {
  if (Array.isArray(value)) return value.map((item) => String(item).trim()).filter(Boolean);
  return String(value)
    .split(/[;,，；、\n]/)
    .map((item) => item.trim())
    .filter(Boolean);
}

function inferKeywords(article) {
  const candidates = [article.topic];
  const lowerTitle = article.title.toLowerCase();

  keywordGroups.forEach((group) => {
    group.keywords.forEach((keyword) => {
      const lowerKeyword = keyword.toLowerCase();
      if (lowerTitle.includes(lowerKeyword) || lowerTitle.includes(lowerKeyword.replaceAll(" ", "-"))) {
        candidates.push(keyword);
      }
    });
  });

  return [...new Set(candidates)].slice(0, 5);
}

function primaryArticleUrl(article) {
  if (article.url) return article.url;
  return resolveIdentifierUrl(article.identifier);
}

function resolveIdentifierUrl(identifier = "") {
  const value = identifier.trim();
  if (!value) return "";
  const lower = value.toLowerCase();
  const doiMatch = value.match(/10\.\d{4,9}\/[-._;()/:a-z0-9]+/i);
  const arxivMatch = value.match(/\b\d{4}\.\d{4,5}(v\d+)?\b/i);
  const pmidMatch = lower.match(/(?:pmid[:\s]*)?(\d{6,9})/i);

  if (doiMatch) return `https://doi.org/${doiMatch[0]}`;
  if (lower.includes("arxiv") || arxivMatch) return `https://arxiv.org/abs/${arxivMatch ? arxivMatch[0] : value.replace(/arxiv:?/i, "").trim()}`;
  if (lower.includes("pmid") || pmidMatch) return `https://pubmed.ncbi.nlm.nih.gov/${pmidMatch ? pmidMatch[1] : value.replace(/pmid:?/i, "").trim()}/`;
  return "";
}

function identifierLabel(identifier = "") {
  const lower = identifier.toLowerCase();
  if (lower.includes("arxiv") || /\b\d{4}\.\d{4,5}/.test(identifier)) return "arXiv";
  if (lower.includes("pmid") || /^\d{6,9}$/.test(identifier.trim())) return "PMID";
  return "DOI";
}

function dedupeLinks(links) {
  const seen = new Set();
  return links.filter((link) => {
    if (seen.has(link.url)) return false;
    seen.add(link.url);
    return true;
  });
}

function keywordSearchUrl(keyword) {
  return `https://www.semanticscholar.org/search?q=${encodeURIComponent(`${keyword} computational neuroscience brain-inspired AI neuroAI`)}&sort=relevance`;
}

function archiveDates() {
  return [...new Set([todayISO(), ...articles.map((item) => item.date)])].sort((a, b) => b.localeCompare(a));
}

function sortArticles(items) {
  const weight = { high: 3, medium: 2, low: 1 };
  return [...items].sort((a, b) => {
    if (weight[b.priority] !== weight[a.priority]) return weight[b.priority] - weight[a.priority];
    return b.date.localeCompare(a.date);
  });
}

function countBy(items, key) {
  return items.reduce((acc, item) => {
    acc[item[key]] = (acc[item[key]] || 0) + 1;
    return acc;
  }, {});
}

function priorityLabel(priority) {
  return ({ high: "高优先级", medium: "中优先级", low: "低优先级" }[priority] || "未标注");
}

function evidenceLabel(evidence) {
  return (
    {
      paper: "论文",
      review: "综述",
      preprint: "预印本",
      trial: "临床试验",
      industry: "产业动态",
      policy: "监管政策",
      media: "媒体报道"
    }[evidence] || "论文"
  );
}

function formatDate(date) {
  if (!date) return "未标注";
  return new Intl.DateTimeFormat("zh-CN", { month: "short", day: "numeric" }).format(new Date(`${date}T00:00:00`));
}

function formatFullDate(date) {
  return new Intl.DateTimeFormat("zh-CN", { month: "short", day: "numeric", weekday: "short" }).format(new Date(`${date}T00:00:00`));
}

function todayISO() {
  return localDateISO(new Date());
}

function addDays(date, days) {
  const value = new Date(`${date}T00:00:00`);
  value.setDate(value.getDate() + days);
  return localDateISO(value);
}

function localDateISO(date) {
  const value = new Date(date);
  value.setMinutes(value.getMinutes() - value.getTimezoneOffset());
  return value.toISOString().slice(0, 10);
}

function escapeHTML(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function sanitizeLegacyText(value) {
  const cnName = ["于", "玉", "国"].join("");
  const enName = `${String.fromCharCode(89, 117)} ${String.fromCharCode(89, 117, 103, 117, 111)}`;
  const enTail = String.fromCharCode(89, 117, 103, 117, 111);
  const handle = ["yuyu", "guo"].join("");
  return String(value)
    .replaceAll(`${cnName}老师`, "NeuroAI")
    .replaceAll(`${cnName}方向`, "NeuroAI 方向")
    .replaceAll(cnName, "NeuroAI")
    .replaceAll(enName, "NeuroAI")
    .replaceAll(enTail, "NeuroAI")
    .replaceAll(handle, "NeuroAI");
}

function escapeAttribute(value) {
  return escapeHTML(value).replaceAll("`", "&#096;");
}

function showToast(message) {
  els.toast.textContent = message;
  els.toast.classList.add("is-visible");
  setTimeout(() => els.toast.classList.remove("is-visible"), 2200);
}
