const cheerio = require('cheerio');

module.exports= (page)=>{
    let tags=[]
    const $ = cheerio.load(page.contentRendered);
    $('Badge').each(function (i,elem){
        let txt = $(this).attr("text");
        if(txt.match(/Easy|Difficult|Read Below|Medium|Bugged/gi)) return;
        if(txt.length>1) tags.push(txt);
    })
    return tags;
}