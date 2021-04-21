const app = new Vue({
    el: '#carusel',
    data: {
        images: [
            "https://static.photocdn.pt/images/articles/2017/04/28/iStock-646511634.jpg",
            "https://images.pexels.com/photos/371633/pexels-photo-371633.jpeg?cs=srgb&dl=clouds-country-daylight-371633.jpg&fm=jpg",
            "https://static.photocdn.pt/images/articles/2017/04/28/iStock-546424192.jpg"
        ],
        indexPhoto: 0,
        loopID: 0,
    },
    created(){
        this.loop();
    },
    methods: {
        next(){
            this.indexPhoto++
            this.indexPhoto = (this.indexPhoto > (this.images.length - 1)) ? 0 : this.indexPhoto++;
        },
        prev(){
            this.indexPhoto--
            this.indexPhoto = (this.indexPhoto < 0) ? (this.images.length - 1) : this.indexPhoto--;
        },
        dotSlide(current){
            this.indexPhoto = current;
        },
        loop(){
            this.loopID = setInterval(()=>{
                this.next();
            }, 3000);
        },
        stopLoop(){
            clearInterval(this.loopID);
        }
    }
});