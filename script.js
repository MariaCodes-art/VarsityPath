document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Data for our institutions
    const institutions = [
        { name: "University of Cape Town", location: "Cape Town", type: "University" },
        { name: "University of the Witwatersrand", location: "Johannesburg", type: "University" },
        { name: "Stellenbosch University", location: "Stellenbosch", type: "University" },
        { name: "Tshwane University of Technology", location: "Pretoria", type: "University of Technology" },
        { name: "Durban University of Technology", location: "Durban", type: "University of Technology" },
        { name: "Varsity College", location: "Multiple Campuses", type: "Private College" }
    ];

    // 2. Get elements from the HTML
    const heroSection = document.getElementById('heroSection');
    const exploreBtn = document.getElementById('exploreBtn');
    const institutionsSection = document.getElementById('institutionsSection');
    const institutionsList = document.getElementById('institutionsList');
    const backBtn = document.getElementById('backBtn');

    // 3. Function to render the institution cards
    function renderInstitutions() {
        institutionsList.innerHTML = ''; // Clear current list
        institutions.forEach(inst => {
            const card = document.createElement('div');
            card.classList.add('card');
            card.innerHTML = `
                <h3>${inst.name}</h3>
                <p><strong>Location:</strong> ${inst.location}</p>
                <p><strong>Type:</strong> ${inst.type}</p>
            `;
            institutionsList.appendChild(card);
        });
    }

    // 4. Event Listeners
    exploreBtn.addEventListener('click', () => {
        heroSection.classList.add('hidden');       // Hide hero
        institutionsSection.classList.remove('hidden'); // Show institutions
        renderInstitutions();                      // Load the data
    });

    backBtn.addEventListener('click', () => {
        institutionsSection.classList.add('hidden'); // Hide institutions
        heroSection.classList.remove('hidden');      // Show hero
    });

    console.log("VarsityPath app loaded successfully!");
});