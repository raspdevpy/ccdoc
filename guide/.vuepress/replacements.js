const cooldownAddition = require('./replacements/cooldownAddition');
const functionLinkReference = require('./replacements/functionLinkReference');
const imageReplacement = require('./replacements/imageReplacement');

module.exports=(page,content)=>{
    for(let handler of [imageReplacement, cooldownAddition, functionLinkReference]){
        if(!content)    continue;
        content=handler(page,content);
    }
    return content
}