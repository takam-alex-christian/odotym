

export default function addToDoItem(params: { value: string }) {

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
    myHeaders.append("mode", "no-cors");

    var urlencoded = new URLSearchParams();
    urlencoded.append("value", params.value);


    fetch("/odotym/todo", {
        method: 'POST',
        headers: myHeaders,
        body: urlencoded,
        redirect: 'follow'
    })
        .then(response => response.json())
        .then(result => { return result })
        .catch(error => console.log('error', error));

}

