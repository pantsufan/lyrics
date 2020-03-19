function search (){
const base_url="https://api.lyrics.ovh/v1/"+
document.getElementById('artist').value+'/'+
document.getElementById('song').value;
fetch (`${base_url}`)
    . then (response => {
        return response.json();
    })
    . then (json => {
        //console.log(json)  
        document.getElementById("song_details").innerHTML="<b> Lyrics: </b>"+json.lyrics;
        artist.value = '';
        song.value = '';
    })}

