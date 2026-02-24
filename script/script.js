let interviewList = [];
let rejectedList = [];

const total = document.getElementById('total');
const interviewCount = document.getElementById('interview-count');
const rejectedCount = document.getElementById('rejected-count');
const allBtnFilter = document.getElementById('all-btn-filter');
const interviewBtnFilter = document.getElementById('interview-btn-filter');
const rejectedBtnFilter = document.getElementById('rejected-btn-filter');

const allCardSection = document.getElementById('all-cards');
const mainContainer = document.querySelector('main');
const filteredSection = document.getElementById('filtered-section');


allCardSection.querySelectorAll('.card').forEach((card, index) => {
    card.dataset.id = index;
});


function calculateCount() {
    total.innerText = allCardSection.children.length;
    interviewCount.innerText = interviewList.length;
    rejectedCount.innerText = rejectedList.length;
}
calculateCount();


function updateAvailableJobs(count) {
    const totalJobs = allCardSection.children.length;
    const availableJobsEl = document.getElementById('available-jobs');

    if (allBtnFilter.classList.contains('bg-blue-500')) {
        availableJobsEl.innerText = `${totalJobs} Jobs`;
    } else {
        availableJobsEl.innerText = `${count} of ${totalJobs} Jobs`;
    }
}
updateAvailableJobs(allCardSection.children.length);


function toggleStyle(id) {
    const buttons = [allBtnFilter, interviewBtnFilter, rejectedBtnFilter];
    buttons.forEach(btn => {
        btn.classList.remove('bg-blue-500', 'text-white');
        btn.classList.add('bg-white', 'text-black');
    });

    const selected = document.getElementById(id);
    selected.classList.remove('bg-white', 'text-black');
    selected.classList.add('bg-blue-500', 'text-white');

    if (id === 'all-btn-filter') {
        allCardSection.classList.remove('hidden');
        filteredSection.classList.add('hidden');
        updateAvailableJobs(allCardSection.children.length);
    } else {
        allCardSection.classList.add('hidden');
        filteredSection.classList.remove('hidden');

        if (id === 'interview-btn-filter') {
            renderFiltered(interviewList);
        } else if (id === 'rejected-btn-filter') {
            renderFiltered(rejectedList);
        }
    }
}


function renderFiltered(list) {
    filteredSection.innerHTML = '';

    if (list.length === 0) {
        filteredSection.innerHTML = `
            <div class="flex flex-col items-center mt-10">
                <img src="./images/jobs.png" alt="">
                <h2 class="text-xl font-semibold">No jobs available</h2>
                <p class="text-gray-400 text-lg">Check back soon for new job opportunities</p>
            </div>
        `;
        updateAvailableJobs(0);
        return;
    }

    list.forEach(cardId => {

        const originalCard = allCardSection.querySelector(`[data-id="${cardId}"]`);
        if (originalCard) {
            filteredSection.appendChild(originalCard.cloneNode(true));
        }
    });

    updateAvailableJobs(list.length);
}


function reRenderActiveFilter() {
    if (interviewBtnFilter.classList.contains('bg-blue-500')) {
        renderFiltered(interviewList);
    } else if (rejectedBtnFilter.classList.contains('bg-blue-500')) {
        renderFiltered(rejectedList);
    }
}


mainContainer.addEventListener('click', function (event) {

    let element = event.target;
    let card = null;

    while (element && element !== document) {
        if (element.classList && element.classList.contains('card')) {
            card = element;
            break;
        }
        element = element.parentNode;
    }

    if (!card) return;

    const cardId = card.dataset.id;



    if (event.target.classList.contains('interview-btn')) {


        rejectedList = rejectedList.filter(id => id !== cardId);

        if (!interviewList.includes(cardId)) {
            interviewList.push(cardId);
        }


        const originalCard = allCardSection.querySelector(`[data-id="${cardId}"]`);
        if (originalCard) {
            const status = originalCard.querySelector('.status');
            status.innerText = 'Interview';
            status.className = 'status px-2 py-1 border border-green-500 text-green-600 rounded-md';
        }

        calculateCount();
        reRenderActiveFilter();
    }



    if (event.target.classList.contains('rejected-btn')) {


        interviewList = interviewList.filter(id => id !== cardId);


        if (!rejectedList.includes(cardId)) {
            rejectedList.push(cardId);
        }


        const originalCard = allCardSection.querySelector(`[data-id="${cardId}"]`);
        if (originalCard) {
            const status = originalCard.querySelector('.status');
            status.innerText = 'Rejected';
            status.className = 'status px-2 py-1 border border-red-500 text-red-500 rounded-md';
        }

        calculateCount();
        reRenderActiveFilter();
    }



    let el = event.target;
    let trashClicked = false;

    while (el && el !== document) {
        if (el.classList && el.classList.contains('fa-trash-can')) {
            trashClicked = true;
            break;
        }
        el = el.parentNode;
    }

    if (trashClicked) {
        


            const originalCard = allCardSection.querySelector(`[data-id="${cardId}"]`);

            if (originalCard) {
                originalCard.remove();
            }

            interviewList = interviewList.filter(id => id !== cardId);
            rejectedList = rejectedList.filter(id => id !== cardId);

            calculateCount();
            updateAvailableJobs(allCardSection.children.length);
            reRenderActiveFilter();
        }
    });