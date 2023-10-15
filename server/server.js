const proxyUrl = 'https://proxyserverhackgt.shane-downs.repl.co/proxy';

fetch(proxyUrl, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    test: "test"
  })
})

/*
    "url": "https://us-east-2.aws.data.mongodb-api.com/app/data-kpymm/endpoint/data/v1/action/find",
    "data": {
      "dataSource": "mongodb-atlas",
      "database": "HackGT",
      "collection": "SubjectDetails"
    }
    */

const makeProxyRequest = (url, method = 'GET', headers = {}, data = null) => {
  try {
    const response = fetch(proxyUrl, {
      method: 'POST', // The proxy server expects POST requests
      headers: {
        'Content-Type': 'application/json', // Content-Type for the request to the proxy server
        'Authorization': 'YourAuthorizationToken', // Include any necessary headers for the proxy server
      },
      body: JSON.stringify({
        url,
        method,
        headers,
        data,
      }),
    });

    if (response.status === 200) {
      const responseData = response.json();
      return responseData;
    } else {
      throw new Error(`Proxy request failed with status: ${response.status}`);
    }
  } catch (error) {
    console.error('Error making proxy request:', error);
  }
};

// // Example usage:
// const targetApiUrl = 'https://us-east-2.aws.data.mongodb-api.com/app/data-kpymm/endpoint/data/v1/action/insertOne';
// const response = makeProxyRequest(targetApiUrl, 'POST', {}, null);
// console.log('Response from proxy:', response);
