

var Videos=[];
var Photos=[];


function readTextFile(file)
{   
    var temp=[]
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                var allText = rawFile.responseText;
                var arr =allText.split("\n")
                temp=arr;
                // data=data.split("\n")
                // for (let i=0; i<data.length; i++){
                //     let title=data[i].split(".")[0]
                //     Videos.push({"title":title, "src":`/static/videos/${data[i]}`})
                // }
            }
        }

       
    }
    rawFile.send(null);

    return temp
}


var temp1=readTextFile('static/data/videos.txt')


function create_data(data, path){
    temp2=[]
    for (let i=0; i<data.length; i++){
        let title=data[i].split(".")[0]
        temp2.push({"title":title, "src":`${path}${data[i]}`})
    }

    return temp2

}

Videos=create_data(temp1, 'static/videos/');




var temp3=readTextFile('static/data/photos.txt')
Photos=create_data(temp3, 'static/img/');


function dynamic_gallery(dep){
    var x = `static/img/${dep}/photos.txt`
    var y = `static/img/${dep}/videos.txt`

    var a_id = readTextFile(x);
    var a_vd = readTextFile(y);
    var a_i = create_data(a_id, `static/img/${dep}/`);
    var a_v = create_data(a_vd, `static/img/${dep}/`);

    console.log(a_i);
    console.log(a_v);

    return [a_i, a_v];
    
}

function get_deps(){
    let path = '/gallery/departments.txt'
    return readTextFile(path);
}







