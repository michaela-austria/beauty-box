data = {
    "reviews": [
        {
            id: 1,
            review: "I have been going to Beauty Box for about a year now and it is hands down the best salon I have ever been to. The staff is always very knowledgeable and helpful, the atmosphere is always welcoming, and they are just all around a great place to get a haircut. I highly recommend checking out Beauty Box if you're looking for a new salon!",
            name: "Phyllis Godley",
            img: "img/user-1.jpg",
            date: "October 14, 2022"
        },
        {
            id: 2,
            review: "I've been going to Beauty Box since last year and it's always given me the best haircut. I trust them with my life and wouldn't go anywhere else. The people there are really nice too, which is really important in a hair salon.",
            name: "Johnsie Jock",
            img: "img/user-2.jpg",
            date: "October 15, 2022"
        }
    ],

    "stylist":[
        {
            id: 1,
            img: "img/stylist-img-1.jpg",
            name: "Marilyn Ramirez",
            position: "Senior Stylist"
        },
        {
            id: 2,
            img: "img/stylist-img-2.jpg",
            name: "Linda Perry",
            position: "Junior Stylist"
        },
        {
            id: 3,
            img: "img/stylist-img-3.jpg",
            name: "Emily Cox",
            position: "Stylist"
        },
        {
            id: 4,
            img: "img/stylist-img-4.jpg",
            name: "Judith Smith",
            position: "Stylist"
        },
        {
            id: 5,
            img: "img/stylist-img-5.jpg",
            name: "Gloria Adams",
            position: "Senior Stylist"
        }
    ],

    "packages": [
        {
            id: 1,
            img: "img/package-haircut.jpg",
            name: "Haircut",
            price: 15
        },
        {
            id: 2,
            img: "img/package-color.jpg",
            name: "Hair Color",
            price: 30
        },
        {
            id: 3,
            img: "img/package-texture.jpg",
            name: "Hair Texture",
            price: 45
        },
        {
            id: 4,
            img: "img/package-blowdry.jpg",
            name: "Hair Blow Dry",
            price: 25
        },
        {
            id: 5,
            img: "img/package-highlights.jpg",
            name: "Hair Highlights",
            price: 45
        },
        {
            id: 6,
            img: "img/package-styling-treatment.jpg",
            name: "Hair Styling Treatments",
            price: 50
        },
    ]
       
    
    
}

const date = new Date();
const currDate = date.getFullYear();
const dynamicYear = document.querySelector('.dynamicYear');
dynamicYear.textContent = currDate;

// --- STYLISTS IMAGES ---
const stylistContainer = document.querySelector('#stylists-img-container');
const stylistSectionLoad = function(){
    data.stylist.forEach((person) => {
        const output = `
            <div class="square-images">
                <div class="square-images__container square-images__container--circle">
                    <img src="${person.img}" alt="Stylist ${person.id}" class="square-images__img">
                </div>
                <div class="square-images__text">
                    <h4 class="square-images__text--heading">${person.name}</h4>
                    <h4 class="square-images__text--caption">${person.position}</h4>
                </div>
            </div>
        `;

        stylistContainer.insertAdjacentHTML('beforeend', output);
    })
}
stylistSectionLoad();


// --- PACKAGES IMAGES ---
const packagesContainer = document.querySelector("#packages-img-container");
const packagesSectionLoad = function(){
    data.packages.forEach(package => {
        const output = `
            <div class="square-images">
                <div class="square-images__container">
                    <img src="${package.img}" alt="Stylist ${package.id}" class="square-images__img">
                </div>
                <div class="square-images__text">
                    <h4 class="square-images__text--heading">${package.name}</h4>
                    <h4 class="square-images__text--caption">$${package.price.toFixed(2)}</h4>
                </div>
            </div>
        `;

        packagesContainer.insertAdjacentHTML('beforeend', output);
    })
}
packagesSectionLoad();



// --- REVIEWS ---
const reviewsContainer = document.querySelector('.customer-reviews');

const reviewsSectionLoad = function(){   
    data.reviews.forEach(review => {
        const output =  `
            <figure class="review shadow radius">
                <blockquote class="review__text">
                ${review.review}
                </blockquote>
                <figcaption class="review__user">
                <div class="review__user--left">
                <img src="${review.img}" alt="User image" class="review__user-photo">
                <p class="review__user-name">${review.name}</p>
                
                </div>
                <div class="review__user--right">
                
                <p class="review__user-date">${review.date}</p>
                </div>
                </figcaption>
            </figure>
        `;
        
        reviewsContainer.insertAdjacentHTML('afterbegin', output);
    })
}



// --- IINITIALIZE ---
const init = function(){
    reviewsSectionLoad();
}
init();


// --- SIDENAV & CONTENT ---

const homeTab = document.getElementById('home');
const galleryTab = document.getElementById('gallery');
const stylistTab = document.getElementById('stylists');
const packageTab = document.getElementById('package');
const tabArr = [homeTab, galleryTab, stylistTab, packageTab];

const sideNavParent = document.querySelector('.side-nav');
const sideNavChildren = document.querySelectorAll('.side-nav__link');


// // SideNavChildrenTest
// sideNavChildren.forEach(el => {
//     console.log(el.parentNode);
//     // console.log(el.getAttribute('href'));
//     // console.log(window.location.hash);

//     // if(el.getAttribute('href') === window.location.hash){
        
//     // }
// });



const toggleSideNav = function ($tabClicked) {

    const sideNavLinks = sideNavParent.children;
    const sideNavLinksArr = [...sideNavLinks];
    sideNavLinksArr.forEach(el => {
        el.classList.remove('side-nav__item--active');
    });

    tabArr.forEach(e => {
        if (e.id === $tabClicked) {
            e.classList.remove('hidden');
            const selectedNav = document.querySelector(`#${$tabClicked}-tab`);
            selectedNav.classList.add('side-nav__item--active');
        } else if (e.id !== $tabClicked) {
            e.classList.add('hidden');
        }


    })
}


sideNavParent.addEventListener('click', function(e){
    e.preventDefault();

    if(e.target.classList.contains('side-nav__link')){
        const id = e.target.getAttribute('href');
        const contentEl = document.querySelector(id);    
        
        
        if(contentEl.id === homeTab.id) {
            toggleSideNav(homeTab.id);
            reviewsSection();
            window.location = "#home";
        }
        
        if(contentEl.id === galleryTab.id) {
            toggleSideNav(galleryTab.id);
            window.location = "#gallery";
        }

        if(contentEl.id === stylistTab.id) {
            toggleSideNav(stylistTab.id);
            window.location = "#stylists";          
        }

        if(contentEl.id === packageTab.id) {
            toggleSideNav(packageTab.id);
            window.location = "#package";
        }

    }

})