# TODO

## HTML5 + GA4 + AdSense Compliance

- [ ] Inspect all HTML files for placement/order violations (DOCTYPE, GA, AdSense loader, script.js position)
- [ ] Fix root/index.html: move gtag.js block into <head> and ensure DOCTYPE is the very first line (nothing before it)
- [ ] Add the GA4 gtag.js block to every other HTML file that is currently missing it (inside <head>, exactly once)
- [ ] Ensure AdSense loader script exists exactly once per HTML file and is inside <head> (and never inside <body>)
- [ ] Ensure closing </head> contains GA + AdSense in recommended order (after meta tags)
- [ ] Ensure script.js is immediately before </body> in every HTML file
- [ ] Validate that each HTML file has a valid HTML5 structure and no duplicate meta/scripts
- [ ] Produce final report listing modified files and verification checklist

