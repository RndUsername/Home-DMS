const documentTags = [
    "invoice", "receipt", "contract", "legal", "medical", "education", "employment", "financial", "tax", "personal",
    "insurance", "policy", "agreement", "memorandum", "report", "proposal", "presentation", "letter", "correspondence",
    "meeting-notes", "agenda", "blueprint", "diagram", "drawing", "certification", "application", "license", "permit",
    "manual", "handbook", "brochure", "flyer", "advertisement", "resume", "cover-letter", "portfolio", "reference",
    "recommendation", "evaluation", "plan", "strategy", "analysis", "budget", "spreadsheet", "audit", "compliance",
    "training-material", "user-guide", "case-study", "research", "thesis", "dissertation", "transcript", "degree",
    "diploma", "identity-document", "passport", "visa", "birth-certificate", "death-certificate", "marriage-certificate",
    "divorce-decree", "property-deed", "mortgage", "lease", "rental-agreement", "loan-document", "bank-statement",
    "credit-report", "investment-statement", "utility-bill", "phone-bill", "internet-bill", "electric-bill", "water-bill",
    "medical-record", "prescription", "lab-report", "imaging-report", "hospital-discharge", "vaccination-record",
    "test-result", "diagnosis", "treatment-plan", "insurance-claim", "vehicle-registration", "vehicle-title", "warranty",
    "product-manual", "repair-invoice", "service-contract", "shipping-label", "packing-slip", "order-confirmation",
    "purchase-order", "sales-invoice", "delivery-note", "work-order", "timecard", "paystub", "employment-contract",
    "non-disclosure", "non-compete", "confidentiality-agreement", "client-agreement", "vendor-agreement",
    "partnership-agreement", "merger-agreement", "acquisition-document", "stock-certificate", "shareholder-agreement",
    "board-resolution", "meeting-minutes", "audit-report", "compliance-report", "inspection-report", "safety-report",
    "incident-report", "litigation-document", "court-filing", "summons", "subpoena", "judgment", "court-order",
    "arbitration-document", "mediation-agreement", "settlement-agreement", "patent", "trademark", "copyright",
    "intellectual-property", "trade-secret", "licensing-agreement", "manufacturing-agreement", "supply-agreement",
    "distribution-agreement", "marketing-agreement", "advertising-agreement", "employment-review", "performance-report",
    "kpi-report", "goal-setting", "project-plan", "project-report", "risk-assessment", "contingency-plan",
    "crisis-management", "business-continuity", "emergency-plan", "feedback-form", "survey-response", "interview-notes",
    "interview-guide", "training-certification", "attendance-record", "progress-report", "grade-report",
    "school-certificate", "scholarship-letter", "admission-letter", "course-material", "syllabus", "lesson-plan",
    "teaching-guide", "student-notes", "exam-paper", "answer-sheet", "graded-exam", "assignment", "project-submission",
    "academic-award", "publication", "journal-article", "conference-paper", "scientific-study", "technical-paper",
    "white-paper", "industry-report", "market-research", "consumer-survey", "competitor-analysis", "trend-report",
    "forecast-report", "investment-analysis", "valuation-report", "real-estate-document", "appraisal-report",
    "construction-contract", "engineering-document", "environmental-report", "compliance-certification",
    "government-document", "regulation", "law", "policy-document", "guideline", "directive", "memorandum-of-understanding",
    "public-notice", "announcement", "press-release", "media-coverage", "news-article", "magazine-article", "book-chapter",
    "e-book", "reference-material", "citation", "bibliography", "library-catalog", "archive-document", "historical-record",
    "genealogy", "family-tree", "photo-album", "scrapbook", "diary", "journal", "personal-letter", "thank-you-note",
    "invitation", "greeting-card", "postcard", "recipe", "cookbook", "shopping-list", "to-do-list", "planner",
    "calendar-event", "reminder", "expense-report", "reimbursement-request", "travel-itinerary", "boarding-pass",
    "hotel-booking", "rental-car-agreement", "tourist-brochure", "map", "guidebook", "travel-journal", "trip-report",
    "business-card", "contact-list", "directory", "address-book", "email-printout", "chat-log", "sms-record",
    "call-log", "phone-directory", "service-log", "maintenance-record", "operation-manual", "software-license",
    "source-code", "developer-documentation", "system-diagram", "network-diagram", "it-policy", "security-report",
    "vulnerability-assessment", "incident-response", "log-file", "audit-trail", "backup-record", "recovery-plan",
    "compliance-policy", "privacy-policy", "terms-of-service", "user-agreement", "data-sharing-agreement",
    "partnership-proposal", "collaboration-agreement", "community-guideline", "volunteer-agreement", "donation-receipt",
    "fundraising-report", "event-plan", "event-agenda", "event-summary", "photograph", "certificate-of-appreciation",
    "award-letter", "recognition-document", "testimonial", "review", "feedback-summary", "media-kit", "advertising-copy",
    "campaign-plan", "creative-brief", "branding-guide", "style-guide", "design-mockup", "prototype-document",
    "user-feedback", "focus-group-summary", "usability-report", "accessibility-report", "test-plan", "test-result",
    "bug-report", "feature-request", "roadmap", "release-note", "deployment-plan", "system-architecture",
    "technical-specification", "engineering-drawing", "product-catalog", "price-list", "sales-report", "revenue-report",
    "profit-loss-statement", "balance-sheet", "cash-flow-statement", "annual-report", "quarterly-report",
    "management-report", "shareholder-letter", "investor-presentation", "stakeholder-report", "esg-report",
    "sustainability-report", "carbon-footprint-report", "energy-audit", "waste-management-report",
    "biodiversity-assessment", "community-impact-report", "grant-proposal", "funding-agreement", "loan-agreement",
    "credit-application", "guarantee-document", "underwriting-agreement", "stock-option-agreement", "vesting-schedule",
    "pension-plan", "retirement-statement", "health-benefit-statement", "wellness-report", "fitness-plan",
    "diet-plan", "nutrition-guide", "exercise-log", "health-assessment", "mental-health-report", "therapy-notes",
    "counseling-agreement", "coaching-plan", "personal-development-plan", "goal-tracking", "vision-board", "mind-map",
    "brainstorming-notes", "idea-log", "project-charter", "business-case", "risk-register", "issue-log",
    "decision-log", "action-item", "task-list", "project-schedule", "gantt-chart", "resource-plan", "budget-summary",
    "cost-estimate", "invoice-template", "client-onboarding", "client-profile", "supplier-profile", "vendor-rating",
    "product-specification", "quality-checklist", "inspection-certification", "compliance-audit", "gap-analysis",
    "improvement-plan", "best-practice", "lesson-learned", "success-story", "case-summary", "key-metric", "dashboard",
    "status-report", "executive-summary", "board-report", "management-summary", "performance-review", "appraisal-form",
    "salary-slip", "benefit-summary", "tax-document", "withholding-statement", "deduction-report", "exemption-document",
    "refund-request", "audit-findings", "appeal-letter", "legal-opinion", "brief", "motion", "petition", "affidavit",
    "evidence-document", "expert-witness-report", "closing-statement", "final-decision", "arbitration-award",
    "mediation-summary", "ombudsman-report", "complaint-letter", "response-letter", "resolution-summary",
    "satisfaction-survey", "feedback-response", "survey-summary", "poll-result", "study-finding", "policy-analysis",
    "regulatory-impact", "advocacy-document", "position-paper", "whiteboard-photo", "flipchart-notes",
    "post-it-summary", "brainstorming-output", "idea-cluster", "storyboard", "script", "screenplay", "creative-idea",
    "brand-concept", "design-sketch", "prototype-photo", "product-test-result", "consumer-feedback", "market-forecast",
    "financial-projection", "business-model", "value-proposition", "pitch-deck", "sales-pipeline", "lead-report",
    "campaign-result", "roi-analysis", "engagement-report", "conversion-analysis", "user-retention",
    "customer-journey", "user-persona", "target-market", "demographic-study", "consumer-behavior", "social-media-report",
    "digital-strategy", "seo-analysis", "content-plan", "editorial-calendar", "ad-spend", "ppc-report", "click-rate",
    "traffic-report", "heatmap", "user-session", "survey-questionnaire", "focus-group-feedback", "competitor-benchmark",
    "industry-standard", "regulatory-update", "compliance-memo", "policy-brief", "implementation-plan", "rollout-plan",
    "training-schedule", "workshop-summary", "team-feedback", "employee-survey", "morale-report", "engagement-plan",
    "retention-plan", "diversity-report", "inclusion-strategy", "equity-plan", "accessibility-audit", "talent-pool",
    "succession-plan", "org-chart", "job-description", "role-definition", "skills-gap", "training-needs",
    "learning-path", "mentor-report", "performance-goal", "career-roadmap", "development-plan", "promotion-case",
    "salary-benchmark", "compensation-study", "benefit-comparison", "job-market-report", "employment-trend",
    "internship-plan", "training-agreement", "workplace-policy", "office-layout", "facility-plan", "asset-inventory",
    "it-equipment", "hardware-spec", "software-license", "system-configuration", "backup-log", "incident-log",
    "security-incident", "access-log", "visitor-log", "compliance-check", "asset-tag", "barcode-scan", "qr-code",
    "id-badge", "time-log", "shift-schedule", "work-order", "maintenance-plan", "safety-checklist", "risk-log",
    "hazard-report", "mitigation-plan", "health-check", "wellness-report", "csr-report", "social-impact",
    "employee-wellness", "community-project", "ngo-report", "charity-work", "volunteer-log", "event-summary",
    "donor-list", "impact-summary", "gratitude-note", "newsletter", "annual-summary", "progress-log", "yearly-review"
];
  
export default documentTags;