fetch('./assets/music.json').then(res=>res.json()).then(res=> {
    console.log(res.tracks);
    let songs = ''
    res.tracks.forEach(element => {
        songs += `
        <div class="song">
              <div class="thumbnail">
                  <img src="${element.track.album.images[0].url}" alt="" srcset="">
                  <div class="play">
                    <span class="material-icons">
                        play_arrow
                    </span>
                  </div>
              </div>
              <div class="songDetail">
                  <strong> ${element.track.album.name} </strong>
                  <div> ${element.track.album.artists.map(el => el.name)}  </div>
              </div>
          </div>
        `
    });
    const songsList = document.getElementById('songsList')
    songsList.innerHTML = songs
})
