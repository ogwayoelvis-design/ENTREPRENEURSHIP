// Navigation scroll functionality
function scrollTo(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

// View opportunity details
function viewOpportunity(opportunityId) {
    window.location.href = `opportunity-detail.html?id=${opportunityId}`;
}

// Sample opportunities data
const opportunities = [
    {
        id: 1,
        title: "Modern Auto Repair & Maintenance - Kisumu",
        industry: "Automotive Services",
        location: "Kisumu, Kenya",
        fundingRequired: "KSh 5,000,000",
        stage: "Business Development Complete",
        status: "Seeking Funding",
        description: "A professional automobile repair and maintenance service addressing underserved customer segments with modern equipment and trained technicians.",
        problem: "Kisumu has growing demand for professional auto repair services, but existing providers are outdated and unreliable.",
        solution: "Modern facility with trained technicians, diagnostic equipment, and customer-focused service model.",
        marketSize: "KSh 500M+ annual market",
        competitors: "5 existing providers, but mostly informal",
        marketGrowth: "15% annual growth",
        fundUse: {
            equipment: "KSh 2,000,000",
            location: "KSh 1,200,000",
            training: "KSh 800,000",
            operations: "KSh 1,000,000"
        },
        financialProjections: {
            year1: "KSh 2,400,000 revenue",
            year2: "KSh 5,200,000 revenue",
            year3: "KSh 8,900,000 revenue"
        },
        ownership: {
            founder: "51%",
            platform: "49%"
        },
        risks: "Economic downturn, competition from larger chains, dependency on founder expertise",
        researchStatus: "Complete",
        dueDiligenceStatus: "Complete",
        founderName: "John Kipchoge",
        founderExperience: "8 years automotive experience",
        platformRole: "Research, business development, equipment sourcing, staff training",
        advantages: [
            "Growing market demand",
            "Underserved customer base",
            "Experienced founder",
            "Clear financial model",
            "Scalable business model"
        ]
    },
    {
        id: 2,
        title: "Eco-Friendly Packaging Solutions",
        industry: "Sustainable Manufacturing",
        location: "Nairobi, Kenya",
        fundingRequired: "KSh 3,500,000",
        stage: "Market Research",
        status: "Under Research",
        description: "Biodegradable packaging solutions for e-commerce businesses with strong demand from growing online retailers.",
        problem: "E-commerce in Africa is growing rapidly but lacks sustainable packaging solutions.",
        solution: "Locally manufactured biodegradable packaging from agricultural waste.",
        marketSize: "KSh 200M+ potential market",
        competitors: "2 companies (mostly imports)",
        marketGrowth: "25% annual growth",
        fundUse: {
            equipment: "KSh 1,500,000",
            materials: "KSh 1,000,000",
            marketing: "KSh 600,000",
            operations: "KSh 400,000"
        },
        financialProjections: {
            year1: "KSh 1,800,000 revenue",
            year2: "KSh 4,500,000 revenue",
            year3: "KSh 9,200,000 revenue"
        },
        ownership: {
            founder: "55%",
            platform: "45%"
        },
        risks: "Raw material supply consistency, technology challenges, market adoption",
        researchStatus: "In Progress",
        dueDiligenceStatus: "In Progress",
        founderName: "Sarah Kipkemboi",
        founderExperience: "5 years sustainability sector",
        platformRole: "Technology research, supplier identification, market validation",
        advantages: [
            "Environmental impact",
            "Growing e-commerce market",
            "Competitive advantage",
            "Strong founder passion"
        ]
    },
    {
        id: 3,
        title: "Tech Training Academy - Youth Skills",
        industry: "Education & Training",
        location: "Kampala, Uganda",
        fundingRequired: "KSh 2,800,000",
        stage: "Business Development Complete",
        status: "Approved",
        description: "Affordable coding and digital skills training for young people with placement guarantee and industry partnerships.",
        problem: "High youth unemployment due to skills gap in tech sector.",
        solution: "Affordable, practical tech training with job placement support and industry partnerships.",
        marketSize: "KSh 300M+ annual market",
        competitors: "3 established training centers",
        marketGrowth: "20% annual growth",
        fundUse: {
            infrastructure: "KSh 1,000,000",
            instructors: "KSh 1,000,000",
            marketing: "KSh 500,000",
            operations: "KSh 300,000"
        },
        financialProjections: {
            year1: "KSh 3,200,000 revenue",
            year2: "KSh 6,800,000 revenue",
            year3: "KSh 11,500,000 revenue"
        },
        ownership: {
            founder: "52%",
            platform: "48%"
        },
        risks: "Student payment defaults, instructor retention, market saturation",
        researchStatus: "Complete",
        dueDiligenceStatus: "Complete",
        founderName: "Peter Njoroge",
        founderExperience: "10 years education sector",
        platformRole: "Curriculum development, industry partnership, operations setup",
        advantages: [
            "Proven founder",
            "Strong market demand",
            "Clear revenue model",
            "Social impact",
            "Scalable model"
        ]
    }
];

// Load opportunity details
function loadOpportunityDetail() {
    const urlParams = new URLSearchParams(window.location.search);
    const opportunityId = parseInt(urlParams.get('id'));
    
    const opportunity = opportunities.find(o => o.id === opportunityId);
    
    if (opportunity) {
        document.getElementById('opp-title').textContent = opportunity.title;
        document.getElementById('opp-status').textContent = opportunity.status;
        document.getElementById('opp-status').className = `status-badge status-${opportunity.status.toLowerCase().replace(/\s+/g, '-').replace('&', 'and')}`;
        
        document.getElementById('opp-industry').textContent = opportunity.industry;
        document.getElementById('opp-location').textContent = opportunity.location;
        document.getElementById('opp-funding').textContent = opportunity.fundingRequired;
        document.getElementById('opp-stage').textContent = opportunity.stage;
        document.getElementById('opp-description').textContent = opportunity.description;
        
        document.getElementById('problem-text').textContent = opportunity.problem;
        document.getElementById('solution-text').textContent = opportunity.solution;
        
        document.getElementById('market-size').textContent = opportunity.marketSize;
        document.getElementById('competitors').textContent = opportunity.competitors;
        document.getElementById('market-growth').textContent = opportunity.marketGrowth;
        
        // Fund use breakdown
        const fundUseHtml = Object.entries(opportunity.fundUse)
            .map(([key, value]) => `<p><strong>${key.charAt(0).toUpperCase() + key.slice(1)}:</strong> ${value}</p>`)
            .join('');
        document.getElementById('fund-use').innerHTML = fundUseHtml;
        
        // Financial projections
        const projectionsHtml = Object.entries(opportunity.financialProjections)
            .map(([key, value]) => `<p><strong>${key}:</strong> ${value}</p>`)
            .join('');
        document.getElementById('projections').innerHTML = projectionsHtml;
        
        // Ownership
        const ownershipHtml = Object.entries(opportunity.ownership)
            .map(([key, value]) => `<p><strong>${key.charAt(0).toUpperCase() + key.slice(1)}:</strong> ${value}</p>`)
            .join('');
        document.getElementById('ownership').innerHTML = ownershipHtml;
        
        document.getElementById('risks-text').textContent = opportunity.risks;
        document.getElementById('research-status').textContent = opportunity.researchStatus;
        document.getElementById('diligence-status').textContent = opportunity.dueDiligenceStatus;
        
        document.getElementById('founder-name').textContent = opportunity.founderName;
        document.getElementById('founder-exp').textContent = opportunity.founderExperience;
        document.getElementById('platform-role').textContent = opportunity.platformRole;
        
        // Advantages
        const advantagesHtml = opportunity.advantages
            .map(adv => `<li>${adv}</li>`)
            .join('');
        document.getElementById('advantages-list').innerHTML = advantagesHtml;
    }
}

// Opportunities list page
function loadOpportunitiesList() {
    const container = document.getElementById('opportunities-container');
    if (!container) return;
    
    const html = opportunities.map(opp => `
        <div class="opportunity-card">
            <div class="opp-header">
                <h3>${opp.title}</h3>
                <span class="status-badge status-${opp.status.toLowerCase().replace(/\s+/g, '-').replace('&', 'and')}">${opp.status}</span>
            </div>
            <div class="opp-details">
                <p><strong>Industry:</strong> ${opp.industry}</p>
                <p><strong>Location:</strong> ${opp.location}</p>
                <p><strong>Funding Required:</strong> ${opp.fundingRequired}</p>
                <p><strong>Stage:</strong> ${opp.stage}</p>
                <p class="description">${opp.description}</p>
            </div>
            <div class="opp-footer">
                <button class="btn btn-small" onclick="viewOpportunity(${opp.id})">View Details</button>
            </div>
        </div>
    `).join('');
    
    container.innerHTML = html;
}

// Submit idea form
function submitIdea(event) {
    event.preventDefault();
    
    const formData = {
        businessName: document.getElementById('business-name').value,
        problem: document.getElementById('problem').value,
        solution: document.getElementById('solution').value,
        industry: document.getElementById('industry').value,
        targetCustomers: document.getElementById('target-customers').value,
        location: document.getElementById('location').value,
        fundingRequired: document.getElementById('funding-required').value,
        fundingUse: document.getElementById('funding-use').value,
        skills: document.getElementById('skills').value,
        experience: document.getElementById('experience').value
    };
    
    // Store in localStorage for demo purposes
    const submissions = JSON.parse(localStorage.getItem('ideaSubmissions')) || [];
    submissions.push({
        ...formData,
        id: Date.now(),
        submittedDate: new Date().toLocaleDateString(),
        status: 'Under Review'
    });
    localStorage.setItem('ideaSubmissions', JSON.stringify(submissions));
    
    alert('✅ Your idea has been submitted successfully!\n\nStatus: Under Review\n\nOur team will review your submission and contact you within 5-7 business days.');
    document.getElementById('idea-form').reset();
}

// Login form
function handleLogin(event) {
    event.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const userType = document.getElementById('user-type').value;
    
    // Demo: Accept any email/password
    localStorage.setItem('currentUser', JSON.stringify({
        email: email,
        userType: userType,
        loginTime: new Date()
    }));
    
    if (userType === 'entrepreneur') {
        window.location.href = 'entrepreneur-dashboard.html';
    } else if (userType === 'investor') {
        window.location.href = 'investor-dashboard.html';
    } else {
        window.location.href = 'admin-dashboard.html';
    }
}

// Entrepreneur dashboard
function loadEntrepreneurDashboard() {
    const user = JSON.parse(localStorage.getItem('currentUser'));
    if (!user || user.userType !== 'entrepreneur') {
        window.location.href = 'login.html';
        return;
    }
    
    document.getElementById('user-email').textContent = user.email;
    
    // Load submissions
    const submissions = JSON.parse(localStorage.getItem('ideaSubmissions')) || [];
    const submissionsHtml = submissions.map(sub => `
        <div class="submission-card">
            <div class="submission-header">
                <h3>${sub.businessName}</h3>
                <span class="status-badge status-${sub.status.toLowerCase().replace(/\s+/g, '-')}">${sub.status}</span>
            </div>
            <div class="submission-details">
                <p><strong>Industry:</strong> ${sub.industry}</p>
                <p><strong>Location:</strong> ${sub.location}</p>
                <p><strong>Funding Needed:</strong> ${sub.fundingRequired}</p>
                <p><strong>Submitted:</strong> ${sub.submittedDate}</p>
            </div>
            <div class="submission-footer">
                <button class="btn btn-small" onclick="viewSubmission(${sub.id})">View Details</button>
            </div>
        </div>
    `).join('');
    
    document.getElementById('submissions-container').innerHTML = submissionsHtml || '<p>No submissions yet. <a href="submit-idea.html">Submit your first idea</a></p>';
}

// Investor dashboard
function loadInvestorDashboard() {
    const user = JSON.parse(localStorage.getItem('currentUser'));
    if (!user || user.userType !== 'investor') {
        window.location.href = 'login.html';
        return;
    }
    
    document.getElementById('user-email').textContent = user.email;
    
    // Load approved opportunities
    const approvedOpps = opportunities.filter(o => o.status === 'Approved' || o.status === 'Seeking Funding');
    const opportunitiesHtml = approvedOpps.map(opp => `
        <div class="opportunity-card">
            <div class="opp-header">
                <h3>${opp.title}</h3>
                <span class="status-badge status-${opp.status.toLowerCase().replace(/\s+/g, '-').replace('&', 'and')}">${opp.status}</span>
            </div>
            <div class="opp-details">
                <p><strong>Industry:</strong> ${opp.industry}</p>
                <p><strong>Funding:</strong> ${opp.fundingRequired}</p>
                <p><strong>Expected ROI:</strong> 25-35% annual</p>
                <p class="description">${opp.description}</p>
            </div>
            <div class="opp-footer">
                <button class="btn btn-small" onclick="expressInterest(${opp.id})">Express Interest</button>
            </div>
        </div>
    `).join('');
    
    document.getElementById('opportunities-container').innerHTML = opportunitiesHtml;
}

// Express interest in investment
function expressInterest(opportunityId) {
    const opportunity = opportunities.find(o => o.id === opportunityId);
    alert(`✅ Interest Expressed\n\nOpportunity: ${opportunity.title}\n\nOur team will contact you shortly with more details.`);
}

// Admin dashboard
function loadAdminDashboard() {
    const user = JSON.parse(localStorage.getItem('currentUser'));
    if (!user || user.userType !== 'admin') {
        window.location.href = 'login.html';
        return;
    }
    
    // Display submissions for review
    const submissions = JSON.parse(localStorage.getItem('ideaSubmissions')) || [];
    const submissionsHtml = submissions.map(sub => `
        <div class="admin-submission-card">
            <div class="card-header">
                <h3>${sub.businessName}</h3>
                <select class="status-select" onchange="updateSubmissionStatus(${sub.id}, this.value)">
                    <option value="Under Review">Under Review</option>
                    <option value="Needs More Information">Needs More Information</option>
                    <option value="Selected for Research">Selected for Research</option>
                    <option value="Rejected">Rejected</option>
                </select>
            </div>
            <div class="card-body">
                <p><strong>Industry:</strong> ${sub.industry}</p>
                <p><strong>Location:</strong> ${sub.location}</p>
                <p><strong>Funding Needed:</strong> ${sub.fundingRequired}</p>
                <p><strong>Problem:</strong> ${sub.problem}</p>
            </div>
        </div>
    `).join('');
    
    document.getElementById('submissions-review-container').innerHTML = submissionsHtml || '<p>No submissions to review</p>';
    
    // Display dashboard stats
    document.getElementById('total-submissions').textContent = submissions.length;
    document.getElementById('under-research').textContent = opportunities.filter(o => o.stage.includes('Research')).length;
    document.getElementById('approved-ventures').textContent = opportunities.filter(o => o.status === 'Approved' || o.status === 'Seeking Funding').length;
}

// Update submission status
function updateSubmissionStatus(submissionId, newStatus) {
    const submissions = JSON.parse(localStorage.getItem('ideaSubmissions')) || [];
    const submission = submissions.find(s => s.id === submissionId);
    if (submission) {
        submission.status = newStatus;
        localStorage.setItem('ideaSubmissions', JSON.stringify(submissions));
        alert(`✅ Status updated to: ${newStatus}`);
    }
}

// Logout
function logout() {
    localStorage.removeItem('currentUser');
    window.location.href = 'index.html';
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    // Call appropriate load function based on page
    if (document.getElementById('opportunities-container')) {
        loadOpportunitiesList();
    }
    if (document.getElementById('opp-title')) {
        loadOpportunityDetail();
    }
    if (document.getElementById('submissions-container')) {
        loadEntrepreneurDashboard();
    }
    if (document.getElementById('opportunities-container') && window.location.pathname.includes('investor')) {
        loadInvestorDashboard();
    }
    if (document.getElementById('submissions-review-container')) {
        loadAdminDashboard();
    }
});
