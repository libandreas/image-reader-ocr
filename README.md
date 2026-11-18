# Offline Grammar Check & Translate / Speak Leaf

Speak Leaf checks spelling offline in your browser and uses surrounding words to suggest corrections in English and Greek. You can also translate selected text, listen to it aloud or dictate. Select text on a page to use its floating toolbar, or open the extension's popup for settings and text extraction.

## Main features

- Check spelling and apply corrections to selected editable text.
- Highlight corrected words so you can review the changes.
- Use surrounding words to help rank English and Greek spelling suggestions.
- Translate selected text with Chrome's built-in translation features, where available.
- Listen to text and use speech input.
- Extract text from images with OCR.
- Choose a default language and show or hide the floating toolbar.

## How to use it

1. Install the extension in Chrome, or load a local copy as described below.
2. Open a website and select the text you want to work with.
3. Choose an action from the floating toolbar. For spelling corrections, select editable text in a text field or editor.
4. Review the corrected words before continuing your work.

Open the extension popup to change the default language, manage the floating toolbar, or choose **Extract Text**.

## Spelling engines

Speak Leaf uses different local spelling engines for different languages:

| Language | Engine |
| --- | --- |
| English | SymSpell with word and word-pair frequency data. |
| Greek | A custom Leipzig-based engine, with supporting Hunspell data. |
| Bulgarian, Danish, German, Spanish, French, Indonesian, Portuguese, Romanian, Turkish | nspell with Hunspell dictionaries. |

English and Greek use context when ranking candidates. The other bundled spelling engines check words individually. Suggestions depend on the dictionary, language, and surrounding text; they do not guarantee that every error will be detected or corrected.

The language choices available for OCR and translation are separate from the list of spelling dictionaries.

## Translation, speech, and OCR

Translation uses Chrome's on-device Translator API when it is available for the selected languages. Availability depends on the browser, device, and installed language resources.

Speak Leaf also provides text-to-speech and speech input. Browser support and the way speech is processed depend on the available speech service; offline spelling does not mean that every speech feature works offline.

OCR uses Tesseract to recognize text in images. Recognition quality depends on the image and the selected language.

## Local processing

Spelling dictionaries and correction engines run locally. OCR also runs on the device using the bundled runtime and language resources.

The extension includes license management and usage-related code that can make external connections. Local spelling and OCR should not be taken to mean that the entire extension makes no network requests.

## Website

[Speak Leaf](https://libandreas.github.io/speak-leaf/)

The website presents spelling, translation, speech and image text recognition features in English and Greek.

## About this repository

This repository contains the public website and project overview. The browser extension source code, dictionaries, OCR resources, credentials and local development files are not published here.

- `index.html`: the main page.
- `web/`: shared styling, navigation scripts, the English and Greek page content, and the product icon.
- `README.md`: project overview.

## Website languages

- `index.html`: English page.
- `index-el.html`: separate, hand-written Greek page.
- `web/`: supporting styles, scripts and assets.
