//ATTEMPT TO GET FORSISMAtIC TO WORK

// fetch('http://api.forismatic.com/api/1.0/', {mode: 'no-cors'})
//     .then(response => {
//         if(!response.ok){
//             throw new Error("COULD NOT FETCH RESOURCE")
//         }
//         return response.json()
//     })
//     .then(data => console.log(data))
//     .catch(error => console.log(error));

// fetchData();

// async function fetchData() {
//     try{
//         const response = await fetch('http://api.forismatic.com/api/1.0/', {mode: 'no-cors'});

//         // if(!response.ok){
//         //     throw new Error ("Could not find resource");
//         // }

//         const string = await response.text();
//         const json = string === "" ? {} : JSON.parse(string);
//         console.log(string);
//         console.log(json);
//     }
//     catch(error){
//         console.log(error)
//     }
// }

//ATTEMPT ENDS HERE, I AM GOING TO DIE OF QUERIESS

fetchData();

async function fetchData() {
    try{
        const response = await fetch('https://quotesondesign.com/wp-json/wp/v2/posts/?orderby=rand');

        if(!response.ok){
            throw new Error ("Could not find resource");
        }

        const string = await response.json();
        console.log(string[0])
        
    }
    catch(error){
        console.log(error)
    }
}