debugger
const express = require('express');
const app = express();
app.use(express.static('./images/cat.png'))
cat = {
    top: 0,
    left: 0
}


app.get('/:t/:l', function(req, res){
    var t = req.params.t
    var l = req.params.l
    cat.top += t
    cat.left += l
    var html = `<html> 
                    <body>
                        <style>
                        tr,td {border: 1px solid black; width:50px; height: 50px };
                        </style>
                        <table>
                    `
    for (let i = 0; i <= 3; i++) {
        html += '<tr>'
        for (let j = 0; j <= 3; j++) {
            html += '<td>'
            if(i == cat.top && j == cat.left){
                html += "<img src = '../images/cat.png'  height = '50px' >"
            }
            html += '</td>'
        }
        html += '</tr>'
    }
    html += '</table></body></html>'
    res.send(html)
})

app.listen(8090,err => {
    if(err){
        return console.log('Error', err);
    };
    console.log(`Listening on port  8900`);
})





