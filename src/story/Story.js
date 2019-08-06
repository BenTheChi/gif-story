export default class Story {
    constructor(title, slides){
        this.title = title;
        this.slides = slides;
    }

    async changeGif(index){
        return this.slides[index];
    }
}