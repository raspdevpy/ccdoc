const cheerio = require('cheerio');
const fs = require('fs');
let jsonObj = [];
const dataFile='./data.json';

let delayed;
function write(immediate=false){    
    if(!delayed)    return delayed=setTimeout(write,1000,true);
    if(!immediate){
        clearTimeout(delayed)
        return delayed=setTimeout(write,1000,true); 
    }
    fs.writeFile(dataFile, JSON.stringify(jsonObj,null,2), function(err) {
        if(err) {
            return console.log(err);
        }
        console.log("The file was saved!");
    });

}
module.exports= (page)=>{

    let tags=[]
    const $ = cheerio.load(page.contentRendered);
    $('Badge').each(function (i,elem){
        let txt = $(this).attr("text");
        if(txt.match(/Easy|Difficult|Read Below|Medium|Bugged/gi)) return;
        if(txt.length>1) tags.push(txt);
    })
    if(page.title.startsWith('$'))
        tags.push(page.title.slice(1));
    let data={
        title: page.title,
        path: page.path,
        content: page.contentRendered,
        tags: tags
    }
    jsonObj.push(data);
    console.log(jsonObj.length)

    if(jsonObj.length > 500) write();
    return tags;
}

