function test () {
  const multipleIDS = document.getElementsByTagName('span');
  const tweetContainer = document.getElementById('print_tweet_area');
  const tweetID = document.getElementById('container').innerText;

  for(let i = 0; i < multipleIDS.length; i++) {
    twttr.widgets.createTweet(multipleIDS[i].textContent,tweetContainer);
  }
}