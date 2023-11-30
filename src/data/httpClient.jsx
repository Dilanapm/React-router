const API = "https://api.themoviedb.org/";
export function get(path){
    return fetch(API + path,{
        headers:{
            Authorization:"eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMTMxZmY1MjEyOTEyZjhjMjQxOWI1ZTAwNzhjMzliOSIsInN1YiI6IjY1NjgwM2MzNjgwYmU4MDEzZjNlMmMzNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JW9XZuqPWQObpOcGVdLcNqB5zyRra3EEgRmiuWv5oVU",
            "Content-Type": "application/json;charset=utf-8"

        }
    }).then((result)=> result.json());
}