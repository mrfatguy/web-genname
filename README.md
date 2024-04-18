# Web GenName

This is a web version of my [very old Delphi project](https://github.com/mrfatguy/delphi-genname). And [here is](https://mrfatguy.github.io/web-genname/) its on-line version.

I use it to generate names for games, books, poetry, avatars, socials etc. It is able to generate different name sets including fantasty (more and less known) and human names (in many languages or from many culture types).

## Database Authors

Names of original databases / dictionary files contents, in order of appearance:

- Johan Danforth,
- Laurent Dionisi and
- Nathalie Hebert.

That's all about fantasy names. As for human names, with the exception for two dictionary files for an extinct races (Gauls and Vikings, made by Johan Danforth), I'm myself an author of all these databases.

## Source code

The source code isn't very elegant. Frankly saying it is one huge pile of junk. But, I had my reasons.

In Node.js I would use a trivial import-export solution. But the "core" was:

1. Each "databank" (used to generate one set of names) to be stored in a separate file, not in one giant file. Because it's easier to update this way

2. The solution must work 100% locally in the browser, after opening the index.html file. No need to install Node.js or anything else, no need to serve .js files through some server

So (point two above) Node.js was out of question.

While import-export (point one above) works without Node.js in the browser (the vast majority of browsers have long supported ECMAScript 6), it completely breaks down with CORS if .js files (in ES6 and in this case used as JS modules) are served locally.

## Other tools

If need some other tool for any other reason (for random names of a human beings rather than some trolls and other fantasty creatures), you may consider [Random Name Generator](https://www.namespedia.com/random-name-generator.php) or [Students of the World](http://www.studentsoftheworld.info/penpals/stats.php3) website.