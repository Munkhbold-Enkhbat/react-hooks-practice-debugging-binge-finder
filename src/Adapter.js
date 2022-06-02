class Adapter {
  static getShows (setFunc){
    fetch("http://api.tvmaze.com/shows")
    .then(res => res.json())
    .then(data => setFunc(data))
  }

  static getShowEpisodes (showID){
    return fetch(`http://api.tvmaze.com/shows/${showID}/episodes`)
    .then(res => res.json)
  }
}

export default Adapter
