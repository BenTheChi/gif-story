const axios = require('axios')

const parser = (body) => {

    //Keeping ( ) ! ?
    body = body.replace(/\(/g,".(")
    body = body.replace(/\)/g,").")
    body = body.replace(/!/g,"!.")
    body = body.replace(/\?/g,"?.")

    //Removing . , n/
    body = body.replace(/\n/g, ".")
    let sections = body.split(/[.,]/)

    return sections
}

const buildSlides = async (body) => {
    let sections = parser(body)
    let promises = []

    for(let i=0; i < sections.length; i++){

        //If a section is blank remove it
        if(sections[i].trim() === ""){
            sections.splice(i,1)
            i--
            continue
        }

        let keywords = sections[i]

        //Limiting my search result to 1 gif since that is all I need for the initial creation
        //Request each gif asyncronously and resolve them all at once later
        promises.push(axios.get(`http://api.giphy.com/v1/gifs/search?q=${keywords.split(' ').join('+')}&api_key=G5mb3AgMEZjKJQoTTsZWoAbC841cxpzw&limit=1`)
            .then((response) => {
                //The default gif if none is found
                let embed_url = "https://giphy.com/embed/3o7aTskHEUdgCQAXde"

                //If there are no search results
                if(response.data.data.length === 0){
                    keywords = "No GIFs found for - " + keywords.trim()
                }
                else{
                    embed_url = response.data.data[0].embed_url
                }

                //The slide object
                return {keywords, embed_url}
            })
            .catch((error) => {
                console.log(error)
            }))
    }

    //Resolve all promises at once
    return await Promise.all(promises)
}

export default buildSlides