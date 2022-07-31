const cheerio = require('cheerio');
const fs = require('fs');
let jsonObj = [];

let write = (file)=>{
    //write json with indents
    fs.writeFile(file, JSON.stringify(jsonObj,null,2), function(err) {
        if(err) {
            return console.log(err);
        }
        //console.log("The file was saved!");
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

    jsonObj.push({
        title: page.title,
        path: page.path,
        content: page.contentRendered,
        tags: tags
    });
    console.log(jsonObj.length)

    if(jsonObj.length > 500) write('./data.json');
    return tags;
}

