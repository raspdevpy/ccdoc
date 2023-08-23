var fs = require('fs');
var path = require('path');
const crypto = require('crypto');

function shaUrl(url) {
  const ext = path.extname(url);
  const hash = crypto.createHash('sha256').update(url).digest('hex');
  return hash + ext;
}
  
module.exports=(page,content)=>{
    content=content.replace(/\((http.*?)\)/g,(...v)=>{
        let url=v[1];
        let name=shaUrl(url)
        const filename = `guide/.vuepress/public/images/${name}`;
        if (fs.existsSync(filename))    return `(/images/${name})`;
        return v[0]
    })
    return content;
}