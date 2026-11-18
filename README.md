# Offline Grammar Check & Translate / Speak Leaf

Private, offline spell checking, grammar suggestions and translation right inside your browser. All offline, no uploads.

Fix spelling mistakes as you type, translate selected text, listen aloud, or dictate with your voice. Everything runs locally on your device without sending text to external servers.

## Main features

* Check and fix spelling directly as you type.
* Highlighted corrections let you review changes with ease.
* Smart suggestions that understand sentence context in English and Greek.
* Instant on-page translation using built-in browser translation.
* Read text aloud and dictate with your voice.
* Grab text straight from images without retyping.
* Choose your default language and toggle the floating toolbar anytime.

## How to use it

1. Install the extension in Chrome, or load a local copy as described below.
2. Open any webpage and select the text you want to work with.
3. Pick an action from the floating toolbar. For spelling corrections, highlight the words you want to fix in any text box.
4. Review the corrected words before continuing your work.

Open the extension popup to change the default language, manage the floating toolbar, or choose **Extract Text**.

## Context-Aware Corrections

In English and Greek, Speak Leaf reviews full sentences rather than isolated words. This allows it to spot wrong word endings, doubled words, and misused terms that standard word-by-word checkers miss, even when working completely offline.

## Voice Typing and Read Aloud

Dictate emails, messages, notes, and documents naturally with speech to text. You can also select any passage to have it read aloud in your language, making it easy to catch awkward phrasing or listen along to long articles.

## Floating Toolbar and In-Page Translation

Highlight words on any webpage to bring up the floating toolbar right next to your cursor. Translate phrases instantly on the spot without opening new tabs, and apply corrections directly into text areas with a single click.

## Spelling engines

Speak Leaf uses local spelling engines tailored for each language:

| Language | Engine |
| --- | --- |
| English | SymSpell with word and word-pair frequency data. |
| Greek | A custom Leipzig-based engine, with supporting Hunspell data. |
| Bulgarian, Danish, German, Spanish, French, Indonesian, Portuguese, Romanian, Turkish | nspell with Hunspell dictionaries. |

English and Greek take sentence context into account for smarter suggestions, while other supported languages check words against their local dictionaries.

## Translation, speech, and OCR

Translation uses Chrome's on-device Translator API when available for the selected languages.

Speak Leaf also provides text to speech and voice dictation using built-in browser speech services.

OCR recognizes text in images locally using Tesseract.

## Local processing

Spelling dictionaries, OCR, and text tools run directly on your device for fast performance and privacy. Network connections are only used for license validation and optional browser translation services.

## Bug Reports and Issues
https://github.com/libandreas/speak-leaf/issues

## Website
https://libandreas.github.io/speak-leaf/
