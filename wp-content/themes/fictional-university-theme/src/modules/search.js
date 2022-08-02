
class Search {
    // Describe and create object
    
    constructor() {
        this.openButton = document.querySelectorAll('.js-search-trigger');
        this.closeButton = document.querySelector('#close-button');
        this.searchOverlay = document.querySelector('.search-overlay'); 
        console.log(this.openButton);
    }
    // Events
    events() {
        this.openButton.forEach(e => {
        e.addEventListener('click', () => {
            this.openOverlay();
            document.body.classList.add('body-no-scroll');
        });
    })
        this.closeButton.addEventListener('click', () => {
            this.closeOverlay();
            document.body.classList.remove('body-no-scroll');
            
        })
        document.addEventListener('keydown', (e) => {
            if(e.key === 's'){
                this.openOverlay();
                document.body.classList.add('body-no-scroll');
                console.log("s pressed")
            }
             if(e.key === 'Escape'){                
                this.closeOverlay();
                document.body.classList.remove('body-no-scroll');
                console.log("esc pressed");
            }
        });
    }

    // Methods
    openOverlay(){
        this.searchOverlay.classList.add('search-overlay--active');
    }
    closeOverlay(){
        this.searchOverlay.classList.remove('search-overlay--active');
    }

}   
 
export default Search
 

