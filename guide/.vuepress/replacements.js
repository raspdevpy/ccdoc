const cooldownAddition = require('./replacements/cooldownAddition');
const imageReplacement = require('./replacements/imageReplacement');

module.exports=(page,content)=>{
    for(let handler of [imageReplacement, cooldownAddition]){
        if(!content)    continue;
        content=handler(page,content);
    }
    return content
}