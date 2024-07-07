This project provides a template for building a personal website that is easy to customize using JSON configuration files. Users can download the project, make changes to the JSON files, and launch their own website with their preferred styles and content.

## Features
- Easy customization of primary and secondary colors, fonts, font colors, font styles, etc.
- Content managed via JSON files.
- Lightweight and easy to deploy.
- No coding skills required for basic setup.

## Getting Started
## Prerequisites
- A web browser.
- A text editor VSCode, Notepad, Notepad++ etc.
- Node.js installed locally https://nodejs.org/en/download/prebuilt-installer

## Installation
1. Clone the repository or Download the Zip:

Click on the Code button then copy the web url and enter the below command
```bash
git clone https://github.com/gouravbhardwaj/jsonpages.git
```

Click on the Code button and then click Download zip

2. Navigate to the project directory:
```bash
cd personal-website-template
```

3. Open the content.json file in a text editor to update your personal details that you want to show in the UI.

4. Open the terminal/ command prompt in the project directory and enter npm run dev, this will start the server.

5. Visit http://localhost:3000 to see the changes.

## Customization
To customize the look and feel of the template.
1. Make changes to the index.js file inside the pages folder. You can update the primarColor and other values in the theme section to alter the basic look of the template.
```bash
const theme = {
  primaryColor      : 'blue-500',
  secondaryColor    : '',
  font              : '',
  fontSize          : '',
  textColor         : 'white',
}
```

2. Make changes to the styleObj JSON variable to make advance styling changes.
```bash
const styleObj = {
  backgroundColor   : `bg-${theme.primaryColor}`,
  foregroundColor   : 'bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900',
 
  headerTextStyle   : 'text-xl font-bold pb-4 flex gap-4',
  blockBorderColor  : `border-b-4 border-${theme.primaryColor} border-solid`,
  blockStyle        : '',
  buttonStyle       : `px-4 py-2 border-solid border-2 border-${theme.primaryColor} rounded-full`,
  buttonColor       : '',
  buttonTextColor   : 'text-white',
  buttonHoverColor  : '',
.....
```

3. Save the index.js file and confirm your changes in the UI.

## Deployment
1. In you github/ bitbucket account upload the project in a new repository. (Create a new account if you don't already have one)

2. Create an account in Vercel (https://vercel.com/).
3. Connect github/ bitbucket account to your Vercel account.
4. Create a new project in Vercel and select the repository where you uploaded the project.
6. Deploy you code.

## Contributing
Contributions are welcome! Please fork the repository and create a pull request with your changes. Ensure your code follows the project's style guidelines and includes appropriate documentation.

## License
This project is licensed under the MIT License. See the LICENSE file for more details.

## Acknowledgements
Inspired by various personal website templates and customization approaches.

