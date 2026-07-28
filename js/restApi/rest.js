/*
->API is a way to interface
    2 or more application
    Mobile for android to use
    -bluetooth<Android developers tools>
     documentation of inerfacing bluetooth
    -Node js. writes to the file system
     fs api
    ->rules and guidelines for interfacing

 ->REST API
    (Representational State Transfer Application Programming Interface)
    it allows different devices or application to
    communicate over the internet.<http or https>
    -Guidelines and rules.
    1.what type of application can be interfaced.
     -The application must be running a <http client>
     -Http Client runs on a <client device>
     -Client device is hardware that can connect to the internet
        ->laptop
        ->mobile phone
        ->iot devices
    2.HTTP Client
       -Browser
       -curl<>
       -POSTMAN
    3.Communication
     -Is a one way communication.server and client
     -Client makes a request and
      Server(computer running http client) responds
    4.How to make a request
      1.url<universal resource locator>
      2.Method<GET,POST,PATCH,DELETE>
      3.Headers:<security:neccesary depends on api>
      4.Body<Form,image,json>
      5.Parameters<meta information> search,filtering

TO DO:
 1.Install postman
 2.go to your favourite site on the web
  click inspect go to the network tab
   1.identify the method
   2.identify the url
   3.identify the params if any
   4.check on the request time
 3. for same request try it on postman and curl http client

HTTP METHOD
 GET:<getting data/fetch data,searching>
 POST:<posting data><body:json,files,html>
 PATCH:<updating data>
 DELETE:<delete data>

6.HTTP RESPONSE <wait for response>
   status code:
    ->100 t0 199 :<informational state codes>
    ->200 to 299 :<success status code>
    ->300 to 399 :<redirectional status codes>
            <twitter.com->x.com>
    ->400 to 499 :<client made a mistake>
            404->page not found
            401->not authorised
            409->forbiden
    ->500 t0 599 :<server error>
         <there nothing you can do on your end>

7.RESPONSE BODY
   1.BLOB<binary data>:pictures,videos
   2.Html:<web>
   3.json:<>

8.How does a rest api relate to js.
   ->github users list
   ->search github users.
   ->github api
   
*/

