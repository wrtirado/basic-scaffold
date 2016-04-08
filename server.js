var express = require('express'),
        app	= express(),
 bodyParser = require('body-parser'),
       cors = require('cors'),
     logger = require('morgan'),
       port = process.env.PORT || 8080

app.use( bodyParser.json() )
app.use( bodyParser.urlencoded( {extended : true} ) )
app.use( cors() )
app.use( logger('dev') )

app.use( express.static('public') )

app.listen( port , function ( err ) {
  if ( err ) console.log( err )
  console.log("Listening on port ", port )
})
