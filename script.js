document.addEventListener('DOMContentLoaded', () => {
    
    // --- Data Arrays ---
    const pathwayData = [
        { name: "University of Cape Town", course: "BCom Accounting", apsRequired: 35, alternative: "Start with a Higher Certificate in Commerce, then articulate into the degree." },
        { name: "Tshwane University of Technology", course: "Diploma in IT", apsRequired: 24, alternative: "Enroll in a Higher Certificate in IT (NQF 5) and transfer credits." },
        { name: "Varsity College (Private)", course: "Bachelor of Business", apsRequired: 20, alternative: "Direct Admission available." }
    ];

       // --- Expanded Data for University Directory ---
    const universityData = [
        { name: "CAO (KZN Universities)", desc: "Apply to UKZN, DUT, MUT, UNIZULU in one place.", url: "https://www.cao.ac.za" },
        { name: "University of Cape Town", desc: "Official UCT online application portal.", url: "https://www.uct.ac.za" },
        { name: "University of the Witwatersrand", desc: "Wits Johannesburg online application.", url: "https://www.wits.ac.za" },
        { name: "Stellenbosch University", desc: "SU online application system.", url: "https://www.sun.ac.za" },
        { name: "University of Pretoria", desc: "UP online application.", url: "https://www.up.ac.za" },
        { name: "University of Johannesburg", desc: "UJ Gauteng application portal.", url: "https://www.uj.ac.za" },
        { name: "University of the Free State", desc: "UFS — free application for SA students.", url: "https://www.ufs.ac.za" },
        { name: "University of the Western Cape", desc: "UWC — no application fee for SA students.", url: "https://www.uwc.ac.za" },
        { name: "Nelson Mandela University", desc: "NMU, Gqeberha (Eastern Cape).", url: "https://www.mandela.ac.za" },
        { name: "Tshwane University of Technology", desc: "TUT diplomas & applied degrees.", url: "https://www.tut.ac.za" },
        { name: "Cape Peninsula University of Technology", desc: "CPUT — Engineering, Business, Health.", url: "https://www.cput.ac.za" },
        { name: "North-West University", desc: "NWU — Potchefstroom, Mahikeng, Vaal.", url: "https://www.nwu.ac.za" },
        { name: "Rhodes University", desc: "Small, research-focused, Makhanda.", url: "https://www.ru.ac.za" },
        { name: "University of South Africa", desc: "UNISA distance learning, later closing dates.", url: "https://www.unisa.ac.za" },
        { name: "University of KwaZulu-Natal", desc: "UKZN — applies through CAO.", url: "https://www.ukzn.ac.za" },
        { name: "Durban University of Technology", desc: "DUT — applies through CAO.", url: "https://www.dut.ac.za" },
        { name: "Vaal University of Technology", desc: "VUT — Vanderbijlpark, Secunda.", url: "https://www.vut.ac.za" },
        { name: "Central University of Technology", desc: "CUT — Free State region.", url: "https://www.cut.ac.za" },
        { name: "Mangosuthu University of Technology", desc: "MUT — Umlazi, KZN.", url: "https://www.mut.ac.za" },
        { name: "University of Fort Hare", desc: "UFH — Alice, East London.", url: "https://www.ufh.ac.za" },
        { name: "University of Limpopo", desc: "UL — Turfloop, Medunsa.", url: "https://www.ul.ac.za" },
        { name: "University of Venda", desc: "Univen — Thohoyandou, Limpopo.", url: "https://www.univen.ac.za" },
        { name: "Walter Sisulu University", desc: "WSU — Eastern Cape comprehensive university.", url: "https://www.wsu.ac.za" },
        { name: "Sol Plaatje University", desc: "SPU — Kimberley, Northern Cape.", url: "https://www.spu.ac.za" },
        { name: "University of Mpumalanga", desc: "UMP — Nelspruit, Mbombela.", url: "https://www.ump.ac.za" },
        { name: "Sefako Makgatho Health Sciences University", desc: "SMU — Ga-Rankuwa, Pretoria.", url: "https://www.smu.ac.za" }
    ]; 

    // --- DOM Elements ---
    const homeView = document.getElementById('heroSection');
    const dashboardView = document.getElementById('appSection');
    const directoryView = document.getElementById('directorySection');
    
    // Navigation Buttons
    const startExploreBtn = document.getElementById('exploreBtn');
    const navAppBtn = document.getElementById('navApp');
    const navHomeBtn = document.getElementById('navHome');
    const backHomeBtn = document.getElementById('backBtn');
    const backDashboardBtn = document.getElementById('backToDashboardBtn');
    
    // Action Buttons
    const openDirectoryBtn = document.getElementById('browseBtn');
    const calcApsBtn = document.getElementById('checkBtn');
    
    // Containers
    const apsResultsContainer = document.getElementById('resultsGrid');
    const directoryGrid = document.getElementById('universityGrid');

    // --- View Management Functions ---
    function showHome() {
        homeView.classList.remove('hidden');
        dashboardView.classList.add('hidden');
        directoryView.classList.add('hidden');
        apsResultsContainer.innerHTML = ''; 
        document.getElementById('apsInput').value = ''; 
    }

    function showDashboard() {
        homeView.classList.add('hidden');
        dashboardView.classList.remove('hidden');
        directoryView.classList.add('hidden');
    }

    function showDirectory() {
        dashboardView.classList.add('hidden');
        directoryView.classList.remove('hidden');
        loadUniversityPortals(); 
    }

    // --- Navigation Event Listeners ---
    startExploreBtn.addEventListener('click', showDashboard);
    navAppBtn.addEventListener('click', (e) => { e.preventDefault(); showDashboard(); });
    navHomeBtn.addEventListener('click', (e) => { e.preventDefault(); showHome(); });
    backHomeBtn.addEventListener('click', showHome);
    backDashboardBtn.addEventListener('click', showDashboard);

    // --- 1. Directory Logic ---
    function loadUniversityPortals() {
        directoryGrid.innerHTML = ''; 
        
        universityData.forEach(uni => {
            const card = document.createElement('div');
            card.classList.add('card');
            card.style.borderTopColor = "#0056b3"; 
            
            card.innerHTML = `
                <h3>${uni.name}</h3>
                <p style="color: #666; margin-bottom: 0.5rem;">${uni.desc}</p>
                <a href="${uni.url}" target="_blank" class="apply-btn">Apply Now &rarr;</a>
            `;
            directoryGrid.appendChild(card);
        });
    }

    openDirectoryBtn.addEventListener('click', showDirectory);

    // --- 2. APS Calculator Logic ---
    calcApsBtn.addEventListener('click', () => {
        const userAps = document.getElementById('apsInput').value;
        
        if (!userAps || userAps < 0) {
            alert("Please enter a valid APS score to check your pathway.");
            return;
        }

        const score = parseInt(userAps);
        apsResultsContainer.innerHTML = ''; 

        pathwayData.forEach(path => {
            const card = document.createElement('div');
            card.classList.add('card');
            
            let resultHtml = "";
            let cardBorderColor = "";

            if (score >= path.apsRequired) {
                cardBorderColor = "#2e7d32"; 
                resultHtml = `
                    <p style="color: #2e7d32; font-weight: bold; font-size: 1.1rem;">
                        ✅ You Qualify for Direct Admission!
                    </p>
                    <p>You meet the required APS of ${path.apsRequired}.</p>
                `;
            } else {
                cardBorderColor = "#d32f2f"; 
                resultHtml = `
                    <p style="color: #d32f2f; font-weight: bold; font-size: 1.1rem;">
                        ❌ You do not meet the APS of ${path.apsRequired}.
                    </p>
                    <div style="background-color: #fff3e0; padding: 1rem; border-radius: 5px; margin-top: 10px; border-left: 4px solid #e65100;">
                        <p style="color: #e65100; font-weight: bold; margin-bottom: 5px;">💡 VarsityPath Alternative:</p>
                        <p style="margin: 0; font-size: 0.95rem;">${path.alternative}</p>
                    </div>
                `;
            }

            card.innerHTML = `
                <h3>${path.name}</h3>
                <p><strong>Course:</strong> ${path.course}</p>
                <hr>
                ${resultHtml}
            `;
            
            card.style.borderTopColor = cardBorderColor;
            apsResultsContainer.appendChild(card);
        });
    });
});