var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
var articles = {
   ' article-one': {
        title: 'Article One| Sowjanya',
        heading: 'Article One',
        date: '21 Aug, 2017',
        content: `<p>
                        This is the content of my first article.
                    </p>`
    },
    //'article-two': {
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
app.get('/:articleName', function(req, res){
    //articleNa,e == article-one
  var articleName = req.parans.articleName;
  res.send(createTemplate(articles[articleName]));
  //articles[articleName] == {}content object for article one
});
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});
app.get('/test-db', function(req,res) {
    //make a select request
    // return the response with the results
    
});

// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
