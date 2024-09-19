let isActiveM = false;
let isEventListenerAdded = false; 
const bd = document.body;

function mob() {
    const btnMob = document.querySelector(".header__btn-mob");
    
    if (btnMob && !isEventListenerAdded) { 
        btnMob.addEventListener('click', function() {
            const menuMob = document.querySelector(".header__menu__mob");
            this.classList.toggle('active');
            if (isActiveM) {
                menuMob.style.display = "none";
                bd.style.overflowY = "scroll";
                bd.style.position = "absolute";
            } else {
                menuMob.style.display = "flex";
                bd.style.overflowY = "hidden";
                bd.style.position = "fixed";
            }
            isActiveM = !isActiveM;
            console.log(isActiveM);
        });
        isEventListenerAdded = true; 
    }
}

new Vue({
    el: '#app',
    data() {
        return {
            showPopup: false,
            isLoading: true,
        };
    },
    mounted() {
        setTimeout(() => {
            this.isLoading = false; 
        }, 2000); 
        this.mob(); 
    },
    methods: {
        openPopup() {
            this.showPopup = true;
            document.body.style.overflowY = "hidden";
        },
        closePopup() {
            this.showPopup = false;
            document.body.style.overflowY = "scroll";
        },
        mob() {
            mob();
        },
    }
});
