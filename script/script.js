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
console.log(mainContainer)

function calculateCount(){
    total.innerText = allCardSection.children.length;
    interviewCount.innerText = interviewList.length;
    rejectedCount.innerText = rejectedList.length;
}
calculateCount()

function toggleStyle(id){
    allBtnFilter.classList.remove('bg-blue-500', 'text-white');
    interviewBtnFilter.classList.remove('bg-blue-500', 'text-white');
    rejectedBtnFilter.classList.remove('bg-blue-500', 'text-white');

    allBtnFilter.classList.add('bg-white', 'text-black');
    interviewBtnFilter.classList.add('bg-white', 'text-black');
    rejectedBtnFilter.classList.add('bg-white', 'text-black');
    console.log(id)

    const selected = document.getElementById(id)
    console.log(selected)
    selected.classList.remove('bg-white', 'text-black')
    selected.classList.add('bg-blue-500', 'text-black');
}