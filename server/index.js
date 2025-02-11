// console.log('Hello World');


const express = required('express');

const PORT = 3000;
const app = express();

// CREATING AN API (Using nodejs)
app.listen(PORT, "0.0.0.0" , () => {
    console.log(`Server is running on port ${PORT}`);
})

 

