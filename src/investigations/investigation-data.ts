import { InvestigationStep } from './investigations.service';

export const stepsByAlert: Record<string, InvestigationStep[]> = {
  "654321": [
    {
      id: "1",
      when: "2024-04-22T09:00:00Z",
      title: "Alert Creation",
      reasoning: "Cash-intensive deposits followed by transfers to unrelated entities and final aggregation at an ultimate beneficiary.",
      sources: [
        {
          system: "Monitoring",
          data: {
            pattern: "Cash-intensive -> unrelated businesses -> ultimate beneficiary",
            totalAmountCAD: 95000,
            period: "2024-04-01 to 2024-04-20",
          },
        },
      ],
    },
    {
      id: "2",
      when: "2024-04-22T09:02:00Z",
      title: "KYC Assessment",
      reasoning: "Historical revenue profile appears reasonable for segment; current deposit velocity/volume is atypical vs history and benchmarks.",
      sources: [
        {
          system: "KYC Profile",
          data: {
            businessType: "Italian Restaurant",
            location: "Woodbridge, ON",
            yearsInBusiness: 4,
            avgAnnualRevenuePrior3Y: 118000,
            avgMonthlyCashDepositsRangeCAD: "7000-9000",
          },
        },
        {
          system: "OSINT Benchmark",
          data: "https://pos.toasttab.com/blog/on-the-line/average-restaurant-revenue",
        },
      ],
    },
    {
      id: "3",
      when: "2024-04-22T09:05:00Z",
      title: "Source of Funds Analysis",
      reasoning: "$95,000 CAD deposited via multiple cash drops by three signers within 20 days; velocity and frequency markedly elevated.",
      sources: [
        {
          system: "Deposit Log by Signer",
          data: {
            MatteoRossi: {
              dates: [
                { date: "2024-04-01", amount: 7800 },
                { date: "2024-04-08", amount: 6500 },
                { date: "2024-04-15", amount: 9800 },
                { date: "2024-04-22", amount: 5200 },
              ],
              total: 29300,
            },
            LuciaBianchi: {
              dates: [
                { date: "2024-04-02", amount: 5000 },
                { date: "2024-04-09", amount: 6700 },
                { date: "2024-04-16", amount: 9200 },
                { date: "2024-04-23", amount: 8100 },
                { date: "2024-04-30", amount: 6800 },
              ],
              total: 35800,
            },
            GiovanniRicci: {
              dates: [
                { date: "2024-04-03", amount: 5500 },
                { date: "2024-04-10", amount: 7400 },
                { date: "2024-04-17", amount: 8500 },
                { date: "2024-04-24", amount: 8500 },
              ],
              total: 29900,
            },
            grandTotal: 95000,
          },
        },
      ],
    },
    {
      id: "4",
      when: "2024-04-15T12:00:00Z",
      title: "First-Layer Transfers",
      reasoning: "Same-day dispersal of full cash intake to three entities with no clear commercial nexus to a restaurant.",
      sources: [
        {
          system: "Payments Core",
          data: {
            recipients: [
              { name: "Tech Innovations LLC", amount: 25000, note: "car parts website" },
              { name: "Green World Landscaping", amount: 50000, note: "landscaping" },
              { name: "Modern Art Supplies", amount: 20000, note: "art supplies" },
            ],
            grandTotal: 95000,
            date: "2024-04-15",
          },
        },
      ],
    },
    {
      id: "5",
      when: "2024-04-20T12:00:00Z",
      title: "Secondary Transfers + Relationship Graph",
      reasoning: "Downstream entities each wire out their full receipts to Victor Holdings Ltd. within five days.",
      sources: [
        {
          system: "Wire Network",
          data: {
            beneficiary: "Victor Holdings Ltd.",
            date: "2024-04-20",
            observation: "No website or social presence; aggregation pattern consistent with layering.",
          },
        },
      ],
      relationshipGraph: {
        nodes: [
          { id: "bistro", position: { x: 0, y: 80 }, data: { label: "Bella's Bistro" }, type: "input" },
          { id: "tech", position: { x: 220, y: 0 }, data: { label: "Tech Innovations LLC" } },
          { id: "green", position: { x: 220, y: 80 }, data: { label: "Green World Landscaping" } },
          { id: "art", position: { x: 220, y: 160 }, data: { label: "Modern Art Supplies" } },
          { id: "victor", position: { x: 440, y: 80 }, data: { label: "Victor Holdings Ltd." }, type: "output" },
        ],
        edges: [
          { id: "e1", source: "bistro", target: "tech" },
          { id: "e2", source: "bistro", target: "green" },
          { id: "e3", source: "bistro", target: "art" },
          { id: "e4", source: "tech", target: "victor", animated: true },
          { id: "e5", source: "green", target: "victor", animated: true },
          { id: "e6", source: "art", target: "victor", animated: true },
        ],
        narrative: "Layering signature: cash-in at origin, dispersal to unrelated entities, rapid convergence to a single beneficiary.",
      },
    },
    {
      id: "6",
      when: "2024-04-22T09:20:00Z",
      title: "Risk Factor Summary",
      reasoning: "Multiple red flags across source, layering, and integration dimensions.",
      sources: [
        {
          system: "Analyst Reasoning",
          data: "- Cash-intensive origin with atypical deposit velocity\n- Transfers to entities lacking commercial nexus\n- Rapid secondary aggregation at opaque beneficiary\n- Potential layering sequence within 5 days",
        },
      ],
    },
    {
      id: "7",
      when: "2024-04-22T09:25:00Z",
      title: "Required Actions",
      reasoning: "Initiate enhanced due diligence and decisioning workflow.",
      sources: [
        {
          system: "Case Management",
          data: "1) Request supporting invoices/contracts from origin and intermediaries\n2) Obtain bank statements for counterparties\n3) Freeze outbound above risk threshold pending review\n4) Consider LE liaison if corroborated\n5) Prepare SAR draft pending conclusions",
        },
      ],
    },
    {
      id: "8",
      when: "2024-04-22T09:30:00Z",
      title: "Investigation Conclusion",
      reasoning: "Observed flow suggests money-laundering typology (layering). Recommend escalation and SAR consideration.",
      sources: [
        {
          system: "Analyst Summary",
          data: "Summary of investigation:\n- KYC: Italian restaurant, 4 years, Woodbridge ON; prior 3-year avg annual revenue $118,000 CAD; typical monthly cash deposits $7,000–$9,000 CAD; profile aligns with industry benchmarks (Toast OSINT).\n- Source of funds: $95,000 CAD in cash deposits Apr 1–20, 2024 by three signers; elevated velocity/volume vs history. Deposit log totals — Matteo Rossi: $29,300; Lucia Bianchi: $35,800; Giovanni Ricci: $29,900; grand total: $95,000.\n- First-layer transfers (Apr 15): Same-day dispersal of full $95,000 to unrelated entities — Tech Innovations LLC $25,000 (car parts website), Green World Landscaping $50,000, Modern Art Supplies $20,000.\n- Secondary transfers (Apr 20): Each intermediary wired out full receipts to Victor Holdings Ltd. (no website or social presence), total $95,000; rapid convergence consistent with layering.\n- Risk indicators: Cash-intensive origin with atypical deposit velocity; transfers to entities without clear commercial nexus; rapid sequential movement and aggregation; opacity of ultimate beneficiary.\n- Assessment: Pattern consistent with money-laundering layering; further substantiation required via invoices/contracts, counterparties statements, and OSINT/business verification.\n\nEscalate for EDD; provisional SAR recommended.",
        },
      ],
    },
  ],
  "321098": [
    {
      id: "1",
      when: "2024-04-22T16:31:00Z",
      title: "Alert Creation",
      reasoning: "New payee added and funded within 2 minutes; jurisdiction matches sanctions-adjacent list.",
      sources: [
        {
          system: "Monitoring",
          data: {
            pattern: "High-risk beneficiary rapid funding",
            totalAmountCAD: 15000,
            period: "2024-04-22",
          },
        },
      ],
    },
    {
      id: "2",
      when: "2024-04-22T16:32:00Z",
      title: "KYC Assessment",
      reasoning: "Customer profile shows legitimate tech consultant activity; current beneficiary jurisdiction raises concerns.",
      sources: [
        {
          system: "KYC Profile",
          data: {
            businessType: "Technology Consultant",
            location: "Toronto, ON",
            yearsInBusiness: 7,
            avgAnnualRevenuePrior3Y: 85000,
            riskScore: "Medium",
          },
        },
        {
          system: "Geo Risk",
          data: "Bulgaria - High risk jurisdiction (OFAC-adjacent)",
        },
      ],
    },
    {
      id: "3",
      when: "2024-04-22T16:33:00Z",
      title: "Source of Funds Analysis",
      reasoning: "Funding sourced from legitimate client payments accumulated over past month.",
      sources: [
        {
          system: "Transaction History",
          data: {
            incomingPayments: {
              dates: [
                { date: "2024-03-25", amount: 5000, source: "TechCorp Inc" },
                { date: "2024-04-02", amount: 4500, source: "StartupXYZ" },
                { date: "2024-04-15", amount: 5500, source: "ConsultingFee" },
              ],
              total: 15000,
            },
          },
        },
      ],
    },
    {
      id: "4",
      when: "2024-04-22T16:34:00Z",
      title: "First-Layer Transfers",
      reasoning: "Single wire transfer to newly added Bulgarian beneficiary executed immediately after addition.",
      sources: [
        {
          system: "Wire Network",
          data: {
            recipients: [
              { name: "Dimitar Petrov", amount: 15000, note: "Business consulting fee" },
            ],
            country: "Bulgaria",
            date: "2024-04-22",
          },
        },
      ],
    },
    {
      id: "5",
      when: "2024-04-22T16:36:00Z",
      title: "Secondary Transfers + Relationship Graph",
      reasoning: "Device linkage reveals connection to previously flagged fraud accounts through shared device fingerprint.",
      sources: [
        {
          system: "Device Intelligence",
          data: {
            deviceId: "dev-55ab91",
            observation: "Shared device fingerprint with two closed fraud cases",
          },
        },
      ],
      relationshipGraph: {
        nodes: [
          { id: "alex", position: { x: 0, y: 40 }, data: { label: "Alex Chen" }, type: "input" },
          { id: "dev", position: { x: 200, y: 40 }, data: { label: "Device dev-55ab91" } },
          { id: "ben", position: { x: 400, y: 40 }, data: { label: "Dimitar Petrov (BG)" }, type: "output" },
          { id: "fraud1", position: { x: 200, y: -60 }, data: { label: "Closed Fraud A" } },
          { id: "fraud2", position: { x: 200, y: 140 }, data: { label: "Closed Fraud B" } },
        ],
        edges: [
          { id: "e1", source: "alex", target: "dev" },
          { id: "e2", source: "dev", target: "ben", animated: true },
          { id: "e3", source: "dev", target: "fraud1" },
          { id: "e4", source: "dev", target: "fraud2" },
        ],
        narrative: "Device ties current customer and beneficiary to two prior confirmed fraud cases — high escalation priority.",
      },
    },
    {
      id: "6",
      when: "2024-04-22T16:40:00Z",
      title: "Risk Factor Summary",
      reasoning: "High-risk jurisdiction combined with device fraud linkage creates significant risk profile.",
      sources: [
        {
          system: "Analyst Reasoning",
          data: "- High-risk beneficiary jurisdiction (Bulgaria)\n- Device fingerprint matches prior fraud cases\n- Rapid payee addition and funding pattern\n- Lack of historical relationship with beneficiary",
        },
      ],
    },
    {
      id: "7",
      when: "2024-04-22T16:42:00Z",
      title: "Required Actions",
      reasoning: "Immediate escalation required due to fraud device linkage and high-risk jurisdiction.",
      sources: [
        {
          system: "Case Management",
          data: "1) Freeze all outbound transactions immediately\n2) Contact customer for transaction verification\n3) Escalate to fraud investigation team\n4) Review all recent account activity\n5) Consider account restriction pending review",
        },
      ],
    },
    {
      id: "8",
      when: "2024-04-22T16:45:00Z",
      title: "Investigation Conclusion",
      reasoning: "Strong indicators of compromised account or fraudulent activity. Immediate action required.",
      sources: [
        {
          system: "Analyst Summary",
          data: "Critical escalation case:\n- Customer: Alex Chen, technology consultant, 7 years business history\n- Transaction: $15,000 CAD wire to Dimitar Petrov (Bulgaria) on 2024-04-22\n- Red flags: Device fingerprint dev-55ab91 matches two prior confirmed fraud cases; high-risk beneficiary jurisdiction; rapid payee addition and funding\n- Assessment: High probability of account compromise or fraudulent transaction\n- Recommendation: Immediate transaction freeze, customer contact, and fraud team escalation\n\nStatus: ESCALATED - Requires immediate intervention",
        },
      ],
    },
  ],
  "123456": [
    {
      id: "1",
      when: "2024-04-22T10:01:00Z",
      title: "Alert Creation",
      reasoning: "Three ACH debits to new counterparties within 8 minutes post-credential reset.",
      sources: [
        {
          system: "Monitoring",
          data: {
            pattern: "Rapid ACH outflows post-credential change",
            totalAmountCAD: 12890.22,
            period: "2024-04-22",
          },
        },
      ],
    },
    {
      id: "2",
      when: "2024-04-22T10:02:00Z",
      title: "KYC Assessment",
      reasoning: "Account holder profile shows stable employment and regular banking patterns over 5 years.",
      sources: [
        {
          system: "KYC Profile",
          data: {
            businessType: "Individual - Software Engineer",
            location: "Vancouver, BC",
            yearsAsCustomer: 5,
            avgMonthlyBalance: 8500,
            employmentStatus: "Stable",
          },
        },
        {
          system: "Account History",
          data: "No prior unusual activity; typical monthly ACH volume $2,000-3,000",
        },
      ],
    },
    {
      id: "3",
      when: "2024-04-22T10:05:00Z",
      title: "Source of Funds Analysis",
      reasoning: "Funds originated from legitimate salary deposits and savings accumulated over recent months.",
      sources: [
        {
          system: "Account Balance History",
          data: {
            priorBalance: 15420.50,
            recentDeposits: [
              { date: "2024-04-15", amount: 5200, source: "Salary Deposit" },
              { date: "2024-04-01", amount: 5200, source: "Salary Deposit" },
            ],
            availableBalance: 15420.50,
          },
        },
      ],
    },
    {
      id: "4",
      when: "2024-04-22T10:10:00Z",
      title: "First-Layer Transfers",
      reasoning: "Three rapid ACH transfers to previously unknown beneficiaries executed within 8-minute window.",
      sources: [
        {
          system: "ACH Network",
          data: {
            recipients: [
              { name: "Sarah Martinez", amount: 4200.50, note: "Emergency loan" },
              { name: "Michael Thompson", amount: 3890.22, note: "Freelance payment" },
              { name: "Lisa Wang", amount: 4799.50, note: "Investment opportunity" },
            ],
            grandTotal: 12890.22,
            timeWindow: "8 minutes",
          },
        },
      ],
    },
    {
      id: "5",
      when: "2024-04-22T10:15:00Z",
      title: "Secondary Transfers + Relationship Graph",
      reasoning: "All recipient accounts flagged in consortium database as confirmed money mule accounts.",
      sources: [
        {
          system: "Consortium Intelligence",
          data: {
            observation: "All three recipients previously identified as mule accounts in fraud network",
          },
        },
      ],
      relationshipGraph: {
        nodes: [
          { id: "john", position: { x: 0, y: 80 }, data: { label: "John Doe" }, type: "input" },
          { id: "ach1", position: { x: 200, y: 0 }, data: { label: "ACH •••• 1001" } },
          { id: "ach2", position: { x: 200, y: 80 }, data: { label: "ACH •••• 1002" } },
          { id: "ach3", position: { x: 200, y: 160 }, data: { label: "ACH •••• 1003" } },
          { id: "mule1", position: { x: 420, y: 0 }, data: { label: "Sarah Martinez" }, type: "output" },
          { id: "mule2", position: { x: 420, y: 80 }, data: { label: "Michael Thompson" }, type: "output" },
          { id: "mule3", position: { x: 420, y: 160 }, data: { label: "Lisa Wang" }, type: "output" },
        ],
        edges: [
          { id: "e1", source: "john", target: "ach1", animated: true },
          { id: "e2", source: "john", target: "ach2", animated: true },
          { id: "e3", source: "john", target: "ach3", animated: true },
          { id: "e4", source: "ach1", target: "mule1" },
          { id: "e5", source: "ach2", target: "mule2" },
          { id: "e6", source: "ach3", target: "mule3" },
        ],
        narrative: "Funds split across suspected mule accounts — pattern aligns to known ATO typology.",
      },
    },
    {
      id: "6",
      when: "2024-04-22T10:18:00Z",
      title: "Risk Factor Summary",
      reasoning: "Classic account takeover pattern with mule network distribution confirmed.",
      sources: [
        {
          system: "Analyst Reasoning",
          data: "- Credential reset followed by immediate unusual activity\n- Rapid sequential ACH transfers to unknown beneficiaries\n- All recipients confirmed as mule accounts\n- Transfer amounts designed to avoid individual thresholds",
        },
      ],
    },
    {
      id: "7",
      when: "2024-04-22T10:20:00Z",
      title: "Required Actions",
      reasoning: "Confirmed account takeover with mule network requires immediate customer contact and account securing.",
      sources: [
        {
          system: "Case Management",
          data: "1) Contact customer immediately via verified phone\n2) Freeze all account access pending verification\n3) Reverse pending ACH transfers if possible\n4) File fraud report with appropriate authorities\n5) Coordinate with consortium on mule network intelligence",
        },
      ],
    },
    {
      id: "8",
      when: "2024-04-22T10:25:00Z",
      title: "Investigation Conclusion",
      reasoning: "Confirmed account takeover fraud with mule money laundering network. Case closed with appropriate actions taken.",
      sources: [
        {
          system: "Analyst Summary",
          data: "FRAUD CONFIRMED - Account Takeover:\n- Victim: John Doe, software engineer, 5-year customer with stable profile\n- Incident: Password reset at 10:01 AM followed by $12,890.22 in ACH transfers within 8 minutes\n- Recipients: Sarah Martinez ($4,200.50), Michael Thompson ($3,890.22), Lisa Wang ($4,799.50) - all confirmed mule accounts\n- Actions taken: Customer contacted and confirmed unauthorized activity; account secured; ACH reversal initiated; fraud report filed\n- Outcome: $8,200 recovered; $4,690.22 loss confirmed; mule intelligence shared with consortium\n\nStatus: COMPLETED - Fraud confirmed and resolved",
        },
      ],
    },
  ],
};
