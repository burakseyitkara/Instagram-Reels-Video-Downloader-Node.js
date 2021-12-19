# Video downloader for all platforms -> 🎬

### Features

- You can download video for all platforms. 
- Instagram reels and videos directly.
- Youtube videos.
- Facebook videos.
- Twitter videos.
- Tiktok videos.
- And more...


# Video downloader for all platforms.

![](https://images.ctfassets.net/00i767ygo3tc/asset-sktwinq8jrzfu78r/2f9681fcec3dd8e6cf2f3a2d9a4e449c/stop-treating-social-platforms-the-same.png?w=1800&q=50)





#Installation
Install the packages.

`$ npm i all-video-downloader`

`$ npm install open`

Thats it.


#Then..
```javascript
    const avd = require("all-video-downloader");
    const open = require("open");
    
    
    //paste Instagram Reels&Video link there;
    
    const URL = "https://www.instagram.com/p/CXn8tuoAoaC/";
    
    const info_with_option_urls = avd(URL).then((result) => {
      open(result.links[0].href);
      return result;
    });
    
    // write terminal -->  "npm test"

```

# All Supported Platforms:
- youtube.com
- instagram.com
- twitter.com
- tiktok.com
- facebook.com
- dailymotion.com
- vimeo.com
- vk.com
- odnoklassniki.ru
- soundcloud.com
- bilibili.com
- hotstar.com
- openloadmovies.net
- streamago.com
- tune.pk
- viu.com
