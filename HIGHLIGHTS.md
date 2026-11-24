# Highlights

News on the home page comes from a Google Sheet. Editing the sheet is enough. No site deploy is required.

Sheet: [Highlights](https://docs.google.com/spreadsheets/d/17eIz1we5NqIjmMknky4lelmViaqgZoF3q0Oz4W6muf8)

The tab must be named `Highlights`. Share the sheet as **Anyone with the link: Viewer**.

## Columns

The first row is the header. Names matter. Order does not.

| Column | What to put |
| --- | --- |
| `date` | `YYYY-MM-DD` |
| `title` | English title |
| `text` | English text |
| `image_url` | Optional image address. Leave empty for no picture. |
| `link` | Optional. Shows as “Read more” and opens in a new tab. |
| `show` | `TRUE` to publish, `FALSE` to hide |
| `title_de` / `text_de` | German. Leave empty to use English. |
| `title_uk` / `text_uk` | Ukrainian. Leave empty to use English. |
| `title_ru` / `text_ru` | Russian. Leave empty to use English. |

The heading **Highlights** and the link **Read more** stay in English on every language.

## What visitors see

- Only rows with `show` set to `TRUE`.
- Rows whose English title starts with `[EXAMPLE]` are ignored.
- Newest date first, up to six cards.
- If the sheet cannot be read, or nothing is visible, the section is hidden.
- The browser keeps the result for five minutes.
