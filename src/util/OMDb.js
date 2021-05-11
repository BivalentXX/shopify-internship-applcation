// const apiKey = '7e147ecf'
// const OMDb = {
//   search(movietitle) {
//     return fetch(`http://www.omdbapi.com/?t=cars&apikey=7e147ecf`).then(response => {
//       return console.log(response.json())
// })}}

// export default OMDb;

const OMDb = {
  search(movietitle) {
    return fetch(`http://www.omdbapi.com/?t=${movietitle}&apikey=7e147ecf`).then(response => {
      return response.json();
    }).then(jsonResponse => {
      if (jsonResponse) {
        return jsonResponse.map(movietitle => ({
          title: movietitle.Title,
          year: movietitle.Year
        }));
      }
    });
  }
};
