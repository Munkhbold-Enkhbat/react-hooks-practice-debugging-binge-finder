class Adapter {
  static getShows (setFunc){
    fetch("http://api.tvmaze.com/shows")
    .then(res => res.json())
    .then(data => setFunc(data))
  }

  static getShowEpisodes (show, setSelectShow, setEpisodes){
    fetch(`http://api.tvmaze.com/shows/${show.id}/_links`)
    .then(res => res.json())
    .then(episodes => {
      setSelectShow(show)
      setEpisodes(episodes)
      console.log("Episodes:", episodes);
    })
  }
}

export default Adapter
