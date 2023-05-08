const imageReplacement = require('./replacements/imageReplacement');

module.exports=(page,content)=>{
    content=imageReplacement(page,content);
    return content
}