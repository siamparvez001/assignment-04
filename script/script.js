let interviewList = []
let rejectedList = []
let total = document.getElementById('total');
let interviewCount = document.getElementById('interview-count');
let rejectedCount = document.getElementById('rejected-count');


const allBtnFilter = document.getElementById('all-btn-filter');
const interviewBtnFilter = document.getElementById('interview-btn-filter');
const rejectedBtnFilter = document.getElementById('rejected-btn-filter');



const allCardSection = document.getElementById('all-cards');
const mainContainer = document.querySelector('main')
const filteredSection = document.getElementById('filtered-section')
// console.log(mainContainer)

function calculateCount() {
    total.innerText = allCardSection.children.length;
    interviewCount.innerText = interviewList.length;
    rejectedCount.innerText = rejectedList.length;
}
calculateCount()
// added bg-blue for all
function toggleStyle(id) {
    allBtnFilter.classList.remove('bg-blue-500', 'text-white');
    interviewBtnFilter.classList.remove('bg-blue-500', 'text-white');
    rejectedBtnFilter.classList.remove('bg-blue-500', 'text-white');
    // if any button has black then remove
    allBtnFilter.classList.add('bg-white', 'text-black');
    interviewBtnFilter.classList.add('bg-white', 'text-black');
    rejectedBtnFilter.classList.add('bg-white', 'text-black');
    // console.log(id)

    const selected = document.getElementById(id)
    // console.log(selected)
    // added bg-blue for current button
    selected.classList.remove('bg-white', 'text-black')
    selected.classList.add('bg-blue-500', 'text-black');
}

mainContainer.addEventListener('click', function (event) {
    console.log(event.target.parentNode.parentNode)
    console.log(event.target.classList.contains('interview-btn'))
    if (event.target.classList.contains('interview-btn')) {
        const parentNode = event.target.parentNode.parentNode;
        const plantName = parentNode.querySelector('.plant-name').innerText;
        const placeName = parentNode.querySelector('.place').innerText;
        const statusName = parentNode.querySelector('.status').innerText;
        const notesName = parentNode.querySelector('.notes').innerText;

        const cardInfo = {
            plantName,
            placeName,
            statusName,
            notesName
        }
        // console.log(cardInfo)

        const cardExist = interviewList.find(item => item.plantName == cardInfo.plantName);
        parentNode.querySelector('.status').innerText = 'Interview'
        parentNode.querySelector('.status').style.color = 'green'
        parentNode.querySelector('.status').style.backgroundColor = 'white'
        parentNode.querySelector('.status').style.border = '1px solid green'
        parentNode.querySelector('.status').style.borderRadius = '5px'
        if (!cardExist) {
            interviewList.push(cardInfo)
            renderInterview()
        }
        console.log(interviewList)
    }
})

function renderInterview() {
    filteredSection.innerText = ''
    for (let interview of interviewList) {
        console.log(interview)
        let div = document.createElement('div');
        div.className = 'card flex justify-between bg-white rounded-[8px] px-[25px] py-[30px]'
        div.innerHTML = `
            <div class="space-y-[20px]">
                    <div class="card-name">
                        <p class="plant-name">Mobile First Corp</p>
                        <p class="latin-nmae opacity-50 py-[10px]">React Native Developer</p>
                        <p class="place opacity-50">Remote . Full-time . $130,000-$175,000</p>
                    </div>
                    <button id="" class="status px-2 py-1 bg-sky-100">Not Applied</button>
                    <p class="notes">Build cross-platform mobile applications using React Native. Work on products used by millions of
                        users worldwide.</p>
                    <div>
                        <button class="interview-btn text-green-400 px-2 py-1 border-1 rounded-[5px]">Interview</button>
                        <button class="rejected-btn text-red-400 px-2 py-1 border-1 rounded-[5px]">Rejected</button>
                    </div>
            </div>
            <div>
                <i class="fa-regular fa-trash-can"></i>
            </div>
                  
        `
    }
}