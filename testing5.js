var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://webhook.site/dbeb5abd-9348-4c61-a116-4b6d6f239345', true);

xhr.onreadystatechange = function () {
  if (xhr.readyState === 4) {
    if (xhr.status === 200) {
      var responseData = JSON.parse(xhr.responseText); // or xhr.responseText for non-JSON data
      // Process the data received in the response
      console.log(responseData);
    } else {
      // Handle the error
      console.error('Request failed with status:', xhr.status);
    }
  }
};

xhr.send();
