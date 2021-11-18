# Adding Chapter Number 
This is a GitBook plug-in to add chapter number before the H1, H2, or H3 tag.

## How to install
Add this plug-in to your `book.json` configuration:

```
{
  "plugins": ["chapter-numbering"]
}
```

Install this plug-in using the following code:

```
$ gitbook install
```

## How this plug-in works

This plug-in adds `<span class="chapter">(chapter number)</span>` in H1, H2, or H3 tag.

To adjust the layout, add the following code in your css.

```
span.chapter {
  padding-right: .5em;
}
```

## How to add this plug-in into package.json

* Run the following command to insert this plug-in into package.json:

  `$ npm install --save gitbook-plugin-chapter-numbering`

## Reference

* This plug-in uses the `Cheerio` npm package to parse HTML as dependencies. run the following command to install `Cheerio` to your environment.
    ```
    $ npm install --save Cheerio
    ```
