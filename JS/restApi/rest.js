/*
API - A way to interface 2 or more applications.

eg. Mobile app for android meant to use bluetooth (using the bluetooth api)
    Node.js writing to the file system (using the fs api)


--> REST API
--> REST stands for Representational State Transfer
--> API stands for Application Programming Interface

REST allows different devices or applications to communicate over the internet, using HTTP or HTTPS.

--GUIDELINES & RULES--
1. What type of applications can be interfaced?
    - The application must be running an HTTP client.
    - An HTTP client runs on a client device. 
    - A client device is hardware that can connect to the internet.

2. HTTP Clients
    - Browser
    - curl
    - POSTMAN
    ...etc

3. Communication
    - REST is one way.
    - Client makes a request and server responds. 


HTTP METHODS:
    1. GET: Getting/fetching data or searching
    2. POST: Posting data
    3. PATCH: Updating data
    4. DELETE: Deleting data

HTTP RESPONSE: 
    1. Status Codes:
        -> 100 to 199 - Informational status codes
        -> 200 to 299 - Success status codes
        -> 300 to 399 - Redirectional status codes
        -> 400 to 499 - Client error status codes
            eg.
            404 -> Page not found
            401 -> Not authorized
            409 -> Forbidden
        -> 500 to 599 - Server error status codes

RESPONSE BODY
    1. Blob: Binary data(pictures, videos)
    2. HTML
    3. Json

HOW DOES A REST API RELATE TO JS?

*/