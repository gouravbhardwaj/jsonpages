This project provides a template for building a personal website that is easy to customize using JSON configuration files. Users can download the project, make changes to the JSON files, and launch their own website with their preferred styles and content.

## Features
- Easy customization of primary and secondary colors, fonts, font colors, font styles, etc.
- Content managed via JSON files.
- Lightweight and easy to deploy.
- No coding skills required for basic setup.

## Getting Started
## Prerequisites
- A web browser.
- A text editor (optional, for editing JSON files).

## Installation
1. Clone the repository:
```bash
git clone [https://github.com/yourusername/personal-website-template.git](https://github.com/gouravbhardwaj/jsonpages)
```
2. Navigate to the project directory:
```bash
cd personal-website-template
```

3. Open the content.json file in a text editor to update your personal details that you want to show in the UI.

## Customization
1. Open the config.json file in a text editor. This file contains all the customizable properties.
2. Modify the values in config.json to customize the appearance of your website.
3. To change the content of your website, update the content.json file (if applicable).
4. Save your changes and refresh the index.html file in your web browser to see the updates.

## Configuration Options
Primary Color: The main color used in the website (e.g., header background).
Secondary Color: The secondary color used in the website (e.g., main background).
Font Family: The font used for the text.
Font Color: The color of the text.
Font Size: The size of the text.
Font Style: The style of the text (e.g., normal, italic).

Example config.json
```bash
{
  "primaryColor": "#3498db",
  "secondaryColor": "#2ecc71",
  "fontFamily": "Arial, sans-serif",
  "fontColor": "#333333",
  "fontSize": "16px",
  "fontStyle": "normal"
}
```

Example content.json
```bash
{
  "header": "Welcome to My Personal Website",
  "mainContent": "This is a customizable personal website. Edit the content.json file to change this text."
}
```
## Deployment
To deploy your website, upload the project files to your web server or a static site hosting service (e.g., GitHub Pages, Netlify).

## Contributing
Contributions are welcome! Please fork the repository and create a pull request with your changes. Ensure your code follows the project's style guidelines and includes appropriate documentation.

## License
This project is licensed under the MIT License. See the LICENSE file for more details.

## Acknowledgements
Inspired by various personal website templates and customization approaches.

