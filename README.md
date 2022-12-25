


# Slack App for Generating Blog Articles
This is a Slack app that allows users to generate blog articles using the GPT API from OpenAI.

## Prerequisites
- An OpenAI account and API key
- A Slack account and app, with the chat:write scope enabled
## Installation
- Clone or download this repository.
- Navigate to the project directory in your terminal.
- Run npm install to install the necessary dependencies.
- Create a .env file in the root directory and add the following variables:
    - SLACK_BOT_TOKEN - The Slack Bot Token for your app
    - SLACK_SIGNING_SECRET - The Slack Signing Secret for your app
    - SLACK_APP_TOKEN - The Slack App Token for your app
    - OPENAI_API_KEY - The API key for your OpenAI account
Run ``node app.js`` or ``nodemon app.js`` to start the app.
## Usage
To generate a blog article, use the ``/generate-blog-article`` slash command followed by a description of the article you would like to generate. The app will respond with a generated article in block format.

## Features
- Uses the GPT API from OpenAI to generate high-quality articles based on user input.
- Allows users to generate articles within Slack using a simple slash command.
- Provides a witty tone for the generated articles.
- Includes a title, an outline, an introduction section, the main body section with clear sections that expand on the outline, a tags section, and a suggested social media copy post.
Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
This project is licensed under the MIT License.

## Acknowledgments
- OpenAI for providing the GPT API
- Slack for providing the messaging platform and API
- @slack/bolt for making it easy to build Slack apps with Node.js