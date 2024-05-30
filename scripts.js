document.onreadystatechange = function () {
            if (document.readyState !== "complete") {
                document.querySelector(
                    "body").style.visibility = "hidden";
                document.querySelector(
                    "#pageloader").style.visibility = "visible";
            } else {
                document.querySelector(
                    "#pageloader").style.display = "none";
                document.querySelector(
                    "body").style.visibility = "visible";
            }
        };

const table = [
  {
title: "Meeting Recording",
description: 'This is the meeting recording from the AEM and Kaltura Deep Dive, on May 23rd.<br><br> Feel free to click around the rest of the demo environment to check out a sampling of our different player capabilities and configurations.',

v7:`<div class="player"><iframe type="text/javascript" src='https://cdnapisec.kaltura.com/p/1912501/embedPlaykitJs/uiconf_id/54751092?iframeembed=true&entry_id=1_dwdpbsdl' style="position: absolute; width: 100%; height: 100%" allowfullscreen webkitallowfullscreen mozAllowFullScreen allow="autoplay *; fullscreen *; encrypted-media *" frameborder="0"></iframe></div>`

  },  {
title: "Dual screen + hotspot + chapters",
description: '<ul><li><b>Dual screen:</b> A combined playback experience of two videos on a single video player. Viewers customize their experience in real-time by choosing which stream to focus on, and how to watch the content: side by side or picture in picture view.</li><li><b>Enriched scrubber experience:</b> Hover over the scrubber for a dual thumbnail that helps viewers keep track of what is next or what was just played a few moments back, chapters included. </li><li><b>Hotspots and CTA:</b> Grab viewers attention by adding a hotspot to your video. Include any CTA such a URL, supplemental information, jump to a point in time, or add a "mailto" address for contact. </li><li><b>Chapters:</b> Segment the video to different topics by adding chapters. Click on the magnifying glass to review and search all chapters or hover over the scrubber to view one by one.</li></ul>',

v7:`<div class="player"><iframe type="text/javascript" src='https://cdnapisec.kaltura.com/p/1912501/embedPlaykitJs/uiconf_id/54381072?iframeembed=true&entry_id=1_4r0o7gtg' style="position: absolute; width: 100%; height: 100%" allowfullscreen webkitallowfullscreen mozAllowFullScreen allow="autoplay *; fullscreen *; encrypted-media *" frameborder="0"></iframe></div>`

    },

      {
title: "Quiz",
description: 'Add a layer of interactivity to videos with the Kaltura quiz. All items below can be customized to fit customers requirements:<br><br><ul><li>Add any type of question along the video user can answer, skip, or come back to</li><li>Quiz takers can download the quiz </li><li>Questions are available to view and navigate back to in the navigation menu</li><li>Scrubber indicates a timestamp of when questions are presented in the video</li><li>Submit and review right/wrong answers</li></ul>',

v7: `<div class="player"><iframe type="text/javascript"src='https://cdnapisec.kaltura.com/p/1912501/embedPlaykitJs/uiconf_id/54614992?iframeembed=true&entry_id=1_xutec75g' style="position: absolute; width: 100%; height: 100%" allowfullscreen webkitallowfullscreen mozAllowFullScreen allow="autoplay *; fullscreen *; encrypted-media *" frameborder="0"></iframe></div>`
      },
      {
title: "Transcript + captions",
description: 'Increase accessibility, searchability, and discoverability of your video using captions and transcript<br><br><ul><li><b>Transcript:</b> View side-by-side while the video is playing. Search the transcript to find the exact point in the video a word of a phrase were said and click to watch.</li><li><b>Captions:</b> Add any captions files and customize look and feel in the "Settings" menu. Viewers can pick preferred size, alignment, color, font type, and more.</li></ul>',

v7:`<div class="player"><iframe type="text/javascript" src='https://cdnapisec.kaltura.com/p/1912501/embedPlaykitJs/uiconf_id/54615092?iframeembed=true&entry_id=1_iaro3qez' style="position: absolute; width: 100%; height: 100%" allowfullscreen webkitallowfullscreen mozAllowFullScreen allow="autoplay *; fullscreen *; encrypted-media *" frameborder="0"></iframe></div>`
      },
   {
title: "Audio player",
description: '<ul><li>Dedicated sleek and slim audio player. </li><li>Customize audio speed, volume, and looping.</li><li>Perfect for on-the-go: responsive player that adjusts to any screen size.</li></ul>',

v7:`<div class="playermin"><div class="center"><div class="audioplayer"><iframe type="text/javascript" src='https://cdnapisec.kaltura.com/p/1912501/embedPlaykitJs/uiconf_id/54614902?iframeembed=true&entry_id=1_f8jmu6cv' style=" width: 100%; height: 100%" allowfullscreen webkitallowfullscreen mozAllowFullScreen allow="autoplay *; fullscreen *; encrypted-media *" frameborder="0"></iframe></div></div></div>`
      },
      {
title: "Interactive video",
description: 'Promote active and intuitive viewing experience where viewers can choose their own path to watch a video:<br><br><ul><li>Great storytelling tool to create engaging scenarios and paths to learn something new, release a new product, share something with your audiences</li><li>Viewers will have a personalized experience every time they watch the video</li><li>Navigate between the different tracks or go back to the main menu to watch something different</li></ul>',

v7: `<div class="player"><iframe src="player.html" style="position: absolute;"></iframe></div>`
      },
       {
title: "Playlist",
description: 'Combine different types of assets into one convenient playlist<br><br><ul><li>Add documents, quiz entries, videos, audio entries, images into one playlist</li><li>Can be embedded everywhere</li></ul>',

v7:`<div class="player"><iframe type="text/javascript" src='https://cdnapisec.kaltura.com/p/1912501/embedPlaykitJs/uiconf_id/54615102?iframeembed=true&playlist_id=1_rdw2sl8a' style="position: absolute; width: 100%; height: 100%" allowfullscreen webkitallowfullscreen mozAllowFullScreen allow="autoplay *; fullscreen *; encrypted-media *" frameborder="0"></iframe></div>`
      },
{
title: "Download + info + share",
description: '<ul><li><b>Download:</b> Download captions, flavors, transcript, and attachments right from the player</li><li><b>Info:</b> Add a written introduction to a video to improve discoverability and SEO with the Info plugin. Include additional information like video author, # of plays, and more</li><li><b>Share:</b> Increase engagement with viewers by adding a Share button. Viewers can create a clip, share the whole video or from a certain timestamp</li></ul>',

v7:`<div class="player"><iframe type="text/javascript" src='https://cdnapisec.kaltura.com/p/1912501/embedPlaykitJs/uiconf_id/54615112?iframeembed=true&entry_id=1_4r0o7gtg' style="position: absolute; width: 100%; height: 100%" allowfullscreen webkitallowfullscreen mozAllowFullScreen allow="autoplay *; fullscreen *; encrypted-media *" frameborder="0"></iframe></div>`
      },
];


// Get all elements with class 'tab' and convert the resulting NodeList to an Array
const tabs = Array.from(document.getElementsByClassName('tab'));

// Get elements by their IDs
const title = document.getElementById('title');
const description = document.getElementById('description');

const v7 = document.getElementById('v7');

window.onload = function(){
  for (let i = 0; i < tabs.length; i++) {
     tabs[i].textContent = table[i].title;
  }
  title.innerHTML = table[0].title;
  description.innerHTML = table[0].description;

  v7.innerHTML = table[0].v7;
  tabs[0].classList.add('active');
}

tabs.forEach((element, index) => {
  element.onclick = function() {
    title.innerHTML = table[index].title;
    description.innerHTML = table[index].description;

    v7.innerHTML = table[index].v7;
    // remove action from all the buttons
    for (let i = 0; i < tabs.length; i++) {
      tabs[i].classList.remove("active");
    }
    // add active to the current
    tabs[index].classList.add('active');
  };
});
