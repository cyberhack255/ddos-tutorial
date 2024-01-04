import * as bac from 'bac';

// Assuming 'bac' provides a utility function to perform the HTTP request
const fetchData = async () => {
  try {
    const response = await bac.fetch('https://www.fastly.com', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        // You can add other headers as needed
      },
      // You can add other options like credentials, mode, etc.
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    // Handle the data received from the API
    console.log(data);
  } catch (error) {
    // Handle errors during the fetch
    console.error('Error fetching data:', error);
  }
};

// Call the fetchData function when your component mounts or as needed
fetchData();
