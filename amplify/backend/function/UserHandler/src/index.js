exports.handler = async (event) => {
    console.log(event)
    const userId = event.pathParameters.userIs;
    const user ={'userId' : customerId, 'userName' : "User " + userId} ;
    const response = {
        statusCode: 200,
    //  uncomment below to enable CORS request
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headears": "*"
         },
         body: JSON.stringify(user),
    };
    return response;
};
