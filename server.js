var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
var articles = {
    articleOne: {
        title: 'Article One| Sowjanya',
        heading: 'Article One',
        date: '21 Aug, 2017',
        content: `<p>
                        This is the content of my first article.
                    </p>`
    },
    articleTwo: {
        title: 'Article Two| Sowjanya',
        heading: 'Article Two',
        date: '22 Aug, 2017',
        content: `<p>
                        This is the content of my second article.
                    </p>`
    }
};

function createTemplate (data){
    var title= date.title;
    var date= data.date;
    var heading= data.heading;
    var content= data.content;
    
    var htmlTemplate=`<html>
        <head>
            <title>
                ${title}
            </title>        
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <link href="/ui/style.css" rel="stylesheet" />
        </head>
        <body>
                <dev>
                    <a href="/">Home </a>
                </dev>
                <hr/>
                <h3> ${heading}</h3>
                <div>
                    ${date}
                </div>
                <div>
                ${content}
                </div>
        </body>
    </html>`;
    
    return htmlTemplate;
}

        

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get('/article-one', function(req, res){
  res.send(createTemplate(articleOne));
});
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});
pp.get('/article-two', function(req, res){
    res.sendFile('Article two will be served here');
});
app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});
app.get('/article-three', function(req, res){
    res.sendFile('Article three will be served here');
});

// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
