function generateTweets () {
  const multipleIDS = document.getElementsByTagName('span');
  const tweetContainer = document.getElementById('print_tweet_area');
  const tweetID = document.getElementById('container').innerText;

  for(let i = 0; i < multipleIDS.length; i++) {
    twttr.widgets.createTweet(multipleIDS[i].textContent,tweetContainer);
  }
  
}

let btn = document.getElementById('btn');
let loader = document.getElementsByClassName('loader')[0];
btn.addEventListener('click', showLoading);

function showLoading() {
  let handleInput = document.getElementById('target_handle').value;
  let searchInput = document.getElementById('term_to_search').value;
  if (handleInput !== "" && searchInput !== "") {
    loader.style.display = "flex";
  } 
}

