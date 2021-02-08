const TWEETCONTAINER = document.getElementById('container');
let x = ['1358319183826571264', '1358318823875641345', '1331989085196435456', '1296875769453408256', '1273598747612610561', '1270149052819075074', '1270148976570806273', '1270148721280348161', '1270148615973961729', '1270148364483457024', '1270148193766961152', '1270147964644687872', '1270147838870040578'];

twttr.widgets.createTweet("20",TWEETCONTAINER);

for(let i = 0; i < x.length; i++) {
  twttr.widgets.createTweet(x[i],TWEETCONTAINER);
}



// function TweetWidget(tweetID) {
//   this.tweetID = tweetID;
//   this.embedded = createTweetWidget(this.tweetID);
// }

// let createTweetWidget = (tweetID) => {
//   let widget = document.createElement('blockquote');
//   widget.className = "twitter-tweet";
//   let aTag = document.createElement('a');
//   aTag.href = `https:https://twitter.com/user/status/${tweetID}`;
//   widget.appendChild(aTag);
//   return widget;
// }

// twttr.widgets.createTweet(id,target);
