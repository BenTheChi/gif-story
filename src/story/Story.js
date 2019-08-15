import axios from "axios";

export default class Story {
    constructor(title, slides){
        this.title = title;
        this.slides = slides;
    }

    async changeGif(slide){
        const index = slide - 1 
        let originalUrl = this.slides[index].embed_url
        let keywords = this.slides[index].keywords

        await axios.get(`http://api.giphy.com/v1/gifs/search?q=${keywords.split(' ').join('+')}&api_key=G5mb3AgMEZjKJQoTTsZWoAbC841cxpzw&limit=15`)
        .then((response) => {
            let embed_url = originalUrl

            if(response.data.data.length === 0){
                embed_url = "https://giphy.com/embed/3o7aTskHEUdgCQAXde"
                keywords = "No GIFs found for - " + keywords.trim()
            }
            else{
                while(originalUrl === embed_url){
                    const randNum = Math.floor(Math.random() * 15)
                    embed_url = response.data.data[randNum].embed_url
                }
            }

            this.slides[index].embed_url = embed_url
        })
        .catch((error) => {
            console.log(error)
        })
    }
}