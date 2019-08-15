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

    //Look at each section and make edits
    // for(let i=0; i<sections.length; i++){
    //     let section = sections[i]
    //     section = section.trim()

    //     if(section.length < 1){
    //         sections.splice(i,1)
    //         continue;
    //     }

    //     //Breaking up each section into individual words (subSection)
    //     let subSections = section.split(" ")
    //     let newSection = ""
    //     let changes = 0
    //     for(let x=0; x<subSections.length; x++){
            
    //         let subSection = subSections[x]
            
    //         if(subSection !== "I" && subSection !== "A"){
    //             if(newSection !== ""){
    //                 sections.splice(i+changes,0,newSection) 
    //                 changes++
    //                 sections.splice(i+changes,0,subSection)
    //                 changes ++
    //                 newSection = ""
    //             }
    //             else{
    //                 sections.splice(i,0,subSection)
    //                 changes++
    //             }
    //         }
    //         else{
    //             newSection += subSection + " "
    //         }
    //     }

    //     if(changes !== 0){
    //         i += changes
    //         sections.splice(i,1,newSection.trim())
    //     }
    // }

    return sections
}

const buildSlides = async (body) => {
    let sections = parser(body)
    let promises = []

    for(let i=0; i < sections.length; i++){
        if(sections[i].trim() === ""){
            sections.splice(i,1)
            i--
            continue
        }

        let keywords = sections[i]

        promises.push(axios.get(`http://api.giphy.com/v1/gifs/search?q=${keywords.split(' ').join('+')}&api_key=G5mb3AgMEZjKJQoTTsZWoAbC841cxpzw&limit=1`)
            .then((response) => {
                var embed_url

                if(response.data.data.length === 0){
                    embed_url = "https://giphy.com/embed/3o7aTskHEUdgCQAXde"
                    keywords = "No GIFs found for - " + keywords.trim()
                }
                else{
                    embed_url = response.data.data[0].embed_url
                }

                return {keywords, embed_url}
            })
            .catch((error) => {
                console.log(error)
            }))
    }

    return await Promise.all(promises)
}

export default buildSlides