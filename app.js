document.querySelector('.DSPLYN').addEventListener('click', () => {
    document.querySelector('.selectaplan').style.display = 'none';
});

document.querySelector('.DSPLYNmobile').addEventListener('click', () => {
    document.querySelector('.sm-devices').style.display = 'none';
});

const bell = document.querySelector('.bell');
const alertclick = document.querySelector('.alertclick');

let alertVisible = false;

function toggleAlert() {
    alertclick.style.display = alertVisible ? 'none' : 'block';
    alertVisible = !alertVisible;
}

function handleClickOutsideCard(event) {
    if (!alertclick.contains(event.target) && !bell.contains(event.target)) {
        alertclick.style.display = 'none';
        alertVisible = false;
    }
}

bell.addEventListener('click', toggleAlert);
document.addEventListener('click', handleClickOutsideCard);



const profileclick = document.querySelector('.profileclick');
const profile = document.querySelector('.profile');

let showProfile = false;

function toggleProfileVisibility() {
    profileclick.style.display = showProfile ? 'none' : 'block';
    showProfile = !showProfile;
}

function handleClickOutsideCad(event) {
    if (!profileclick.contains(event.target) && !profile.contains(event.target)) {
        profileclick.style.display = 'none';
        showProfile = false;
    }
}

profile.addEventListener('click', toggleProfileVisibility);
document.addEventListener('click', handleClickOutsideCad);



document.addEventListener("DOMContentLoaded", function () {
    const downArrow = document.querySelector('.downarrow');
    const upArrow = document.querySelector('.uparrow');
    const dropdownContent = document.querySelector('.dropdown-content');

    downArrow.addEventListener('click', function () {
        downArrow.style.display = 'none';
        upArrow.style.display = 'block';
        dropdownContent.style.display = 'block';
    });

    upArrow.addEventListener('click', function () {
        upArrow.style.display = 'none';
        downArrow.style.display = 'block';
        dropdownContent.style.display = 'none';
    });
});


const iconState = document.querySelectorAll('.iconstate');
iconState.forEach(icon=>{
    icon.addEventListener('click', function () {
    icon.classList.toggle('clicked');
});
})


document.addEventListener('DOMContentLoaded', function () {
    const checkable = document.querySelectorAll('.checkable')
    const checkables = document.querySelectorAll('.checkable h3');
    const iconStates = document.querySelectorAll('.iconstate');
    const detailsCovers = document.querySelectorAll('.detailsdetails');
  
    let activeIndex = null;
  
    function toggleDetails(index) {
      if (activeIndex !== index) {
        // If the clicked element is not the active one, toggle the 'active' class
        if (activeIndex !== null) {
          checkable[activeIndex].classList.remove('active');
          checkables[activeIndex].classList.remove('active');
          iconStates[activeIndex].classList.remove('active');
          detailsCovers[activeIndex].classList.remove('active');
        }
  
        checkable[index].classList.add('active');
        checkables[index].classList.add('active');
        iconStates[index].classList.add('active');
        detailsCovers[index].classList.add('active');
        activeIndex = index;
      }
      // If the clicked element is the active one, do nothing
    }
  
    function handleClick(event) {
      const target = event.target;
      const index = Array.from(checkables).indexOf(target);
      if (index !== -1) {
        toggleDetails(index);
      }
    }
  
    document.addEventListener('click', handleClick);
  });
  