'use strict';

module.exports.mylamfun = async event => {
  if(event.httpMethod === "POST" && event.body){
    let json = JSON.parse(event.body);
    return {
      statusCode: 200,
      body: JSON.stringify(
        {
          message: 'Hi ',
          object: json
  
        },
        null,
        2
      ),
    };    

  }
 
  if(event.queryStringParameters.name === ''){
    return {
      statusCode: 200,
      body: JSON.stringify(
        {
          message: 'Hi empty name passing!!' ,
          input: event
        },
        null,
        2
      ),
    };
  }
  else {
   return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Hi '+ event.queryStringParameters.name + ' how are you!!',
        input: event

      },
      null,
      2
    ),
  };
  }
    
  
  
  // callback(null, response);

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
