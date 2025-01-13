# ![Logo Lockup of Home-DMS](/docs/images/banner.webp)
With Home-DMS you are able to categorize your digitized documents. It priorities ease of use through a well designed UI, while using modern and popular technologies.

## Status: Alpha
This project is in Alpha, so use with **caution**! Expect a rougher experience and to do manual steps when updating, like re-adding data or documents. While trying to keep those situations to a minimum it can't be guaranteed, that they'll never occur.

Furthermore there are currently some limitations:
- The webapp is build with 'mobile-first' in mind, which means it can be used on desktop but is not optimized for it yet. Expect weird layouts.
- installing and updating might be a little complicated
- it has no authentication, so only host it on your local and trusted network
- pdf are not supported, only those image formats, that can also be displayed by your browser (png, jpeg etc.)
- it only has the most basic features

## Installation
1. Download the [latest PocketBase](https://pocketbase.io/docs/) build for your targeted system and unpack it. Home-DMS uses PocketBase as the backend.
2. Download `home-dms-app-static-files.zip` from the [latest Home-DMS files](https://github.com/RndUsername/Home-DMS/releases/latest).
3. Unpack it right besides the PocketBase executable.
4. The file structure should now look something like this:
    ```
    pocketbase
    pb_migrations
    pb_public
    ```
5. Run `./pocketbase serve`. This will open a browser window, when running PocketBase for the first time, where you can create a superuser account for PocketBase. But This is not necessary.
6. You can now access Home-DMS through http://localhost:8090.

## Updating
1. Stop PocketBase.
2. Delete the `pb_migrations` and `pb_public` folder.
3. Follow the installation instructions again from step two onward.

# Developing
Contributions in any form are welcomed!

## Tech-Stack
Frontend:
- [waku](https://waku.gg) as the react framework
- [zag.js](https://zagjs.com/) for components
- [tailwind](https://tailwindcss.com/) for styling

Backend:
- [PocketBase](https://pocketbase.io/) for database and file storage

## Set up Dev Environment
You will need [Node.js](https://nodejs.org/en/download) v20 installed on your system.
1. Clone this repo and cd into it.
2. Download the [latest PocketBase](https://pocketbase.io/docs/) build for your targeted system.
3. Unpack it into the `pocketbase` directory.
4. Start PocketBase with `./pocketbase/pocketbase.exe serve`. Use `pocketbase` instead of `pocketbase.exe` depending on the file you unpacked.
5. Run `npm install`.
6. Run `npm run pb-ts-gen` to generate schema types from the database.
6. Run `npm run dev` to start the dev server.

# Other
## License
Home-DMS is licensed under the [MIT License](LICENSE.md).

## Attribution
- Device Mockup created from [Google Pixel 5 mockups](https://deviceframes.com/templates/google-pixel-5).
