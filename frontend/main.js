
window.addEventListener( 'DOMContentLoaded', (Event) =>{
    getVisitCount();

})

const functionApi = ''; 

const getVisitCount = () => {
    let count = 30;
    fetch (functionApi).then(response =>{
        return response.json()
        }).then(response =>{
            console.log("website called function API");
            count= response.count;
            document.getElementById("Counter").innerText = count;
        }).catch(function(error){
            console.log(error);
        }); 
        return count
}