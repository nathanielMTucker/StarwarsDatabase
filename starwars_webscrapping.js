const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');

if(process.argv.length < 3 || process.argv[2] == "--help"){
    console.log("Info on how this works...");
}else{

const query = process.argv[2]
const exportFile = process.argv[3] || "starwars.json"
const file = exportFile.split('.');
if(file[file.length -1] === "json"){
axios.get(`https://www.starwars.com/databank/${query}`)
    .then(({data : html})=>{
       const $ = cheerio.load(html)

       const ref1 = $('.ref-1-1');
       const name = ref1.find('.long-title').text();
       const description = ref1.find('.desc').text();
    //    console.log(name);
    //    console.log();
    //    console.log(description);
    //    console.log()
       const ref2 = $('#ref-1-2')
       let data = "{ ";
       $(".category").each((i,cat)=>{
           let name;
           const list = [];
           
           name = $(cat).find(".heading").text()
           
           $(cat).find("li").each((i, li)=>{
              let el = $(li).text() || $(li).find("a").text();
               el = el.replace(/\n|,| /g, '').replace(/([A-Z])/g, ' $1').trim().replace(/(:)/g, ' $1 ');
               el = `\"${el}\"`
            //    console.log(el);
               list.push(el)
           });
        //    console.log(name);
            // console.log(list);
            data += ` \"${name}\" : [${list}],`
        });
        data += "}"
        data = data.substr(0, data.length - 2) + data.substr(data.length-1, data.length)
        // console.log(data);
        data = JSON.parse(data);
        const starwars = {
            name, description, data
        }
        console.log(starwars);
        
        
                console.log("Saving file");
                fs.writeFile(exportFile, JSON.stringify(starwars), (err, data)=>{
                   if(err){
                       console.error(err);
                   }
                })
                console.log("Finished");
            
        
    })
    .catch(console.error)

}else{
    console.error("please export file as JSON");
}
}