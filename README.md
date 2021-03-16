# translations
This open-source repository is used to translate strings accross our services. Feel free to add languages you are fluent in, improve translations and propose changes.
# file structure
The repository contains `**.json` files inside `/translations`. The format of the name is a 2-letter code of the language ([ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes)), e.g. `en`, `de`, etc. Not to be confused with country alpha-2 codes (which are GB, US, CH, etc.)

The file `countries.json` in the root directory is again a JSON file. This file represents a map between country alpha-2 codes and their official language (in ISO 639-1). If another language is more common that the official one in a given country, feel free to use the more common language for this country. This file suggests our services in what language to translate our pages based on the visitor's country.

The file `languages.json` in the root direcotry contains info about all languages in the repository, such as their name, ISO 639-1 code and icon. The icon is the flag of the primary country that the langauge is spoken in (e.g. for `de` -> Deutchland).

# en.json
This is the default translations file. It is written in **British English**, since that was originally the default language of the platform. Feel free to contribute to this file by changing wording specific to the UK with more standardised lexic and grammar, both for the UK and the USA. E.g. do not change `colour` to `color` (each word is specific to the different country), but do change `gobsmacked` to `surprised`, since the latter is a word recognised in both countries.

# contributing
You can contribute in many ways.

If you find an inaccuracy, want to add a translation, new language, etc. feel free to create a fork, make your changes (please also add descriptive commit messages), and then open a pull request. You can contact our support team for more info on how to do that.

To add a new language, copy `en.json`. When adding a new language, make sure to edit `countries.json` and `languages.json` where needed, otherwise nobody will be able to see your translations on our websites.

For other suggestions, issues, etc., please [create a new issue](https://github.com/CloudNode-pro/translations/issues/new).

Pull requests that change the general structure of the repository or do not follow the guidelines mentioned above will be rejected. Our system relies on these guidelines and the provided structure. Changes about that should be discussed in an issue so that we can coordinate to update our system.

Translation changes become live as soon as published and approved by us. Please not that they may not appear immediately due to chaching.

# rules
1. No inappropriate content. Do not use vulgar words, sexual inuendos or otherwise write or link to content that might be viewed as inappropriate by others.
2. Do not add personal notes to the translations.
3. Do not enter multiple translations for the same thing. Pick one!
4. Do not create links to other websites, domains or IP adresses.
5. Do not post personal information such as your name, address, e-mail, username, etc. You will be given credit in this repository. You may not claim credit in the translations.
6. Do not use Google Translate or another translation algorithm/program, UNLESS you are fluent in the output language, so that you can verify that the translation is accurate and correct. When unsure, you can always leave the default.
7. Common sense, please!
