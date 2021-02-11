import tweepy
from twitter_api_authentication import tokens
# the function tokens contains the following two lines of code and returns the auth variable
# auth = tweepy.OAuthHandler(consumer_key, consumer_secret)
# auth.set_access_token(key, secret)

# twitter API credentials
auth = tokens()


def test(target_handle,termToSearch):
  api = tweepy.API(auth)
  
  tweetIDList = []
  
  for status in tweepy.Cursor(api.user_timeline, id=target_handle).items():
    if (termToSearch.lower() in status.text.lower()):
        # stores the tweet IDs of those that match the termToSearch string
        tweetIDList.append(repr(status.id))

  if len(tweetIDList) < 1:
    # if the search returns 0 tweet IDs the None is returned
    return None
  else:
    return tweetIDList
  
