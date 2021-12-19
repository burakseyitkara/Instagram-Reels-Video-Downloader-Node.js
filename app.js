const avd = require("all-video-downloader");
const open = require("open");


//paste Instagram Reels&Video link there;

const URL = "https://www.instagram.com/p/CXn8tuoAoaC/";

const info_with_option_urls = avd(URL).then((result) => {
  open(result.links[0].href);
  return result;
});

// write terminal -->  "npm test"