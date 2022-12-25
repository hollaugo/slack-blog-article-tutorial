const { App } = require('@slack/bolt');
const { Configuration, OpenAIApi } = require("openai");

//OpenAI API configuration
const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });

const openai = new OpenAIApi(configuration);

// Slack App configuration
const app = new App({
    token: process.env.SLACK_BOT_TOKEN,
    signingSecret: process.env.SLACK_SIGNING_SECRET,
    socketMode: true,
    appToken: process.env.SLACK_APP_TOKEN,
    port: process.env.PORT || 3000
});

//OpenAI Function to generate blog article from prompt in Slack block format
async function generateBlogArticle(prompt) {
    const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: `Write a blog article about ${prompt}, and write in a witty tone. The output should include the following sections, a title, an outline, an introduction section, the main body section with clear sections that expand on the outline, a tags section and a suggested social media copy post`,
        temperature: 0.9,
        max_tokens: 900,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
        stop: ["/n"],
      });
        return response.data.choices[0].text;

}

//Slack Slash Command Handler
app.command('/generate-blog-article', async ({ command, ack, client}) => {
    // Acknowledge command request
    await ack();
    
    //Respond with message to user
   const article_message =  await client.chat.postMessage({text:`:hourglass: *Generating Blog Article* - [Your Input: ${command.text}]`, 
                                                           channel: command.channel_id});
    //Generate Article
   const article = await generateBlogArticle(command.text);
    //Get message timestamp from response
    const messageTimestamp = article_message.ts;
    //Update Message with Article
    await client.chat.update({
        channel: command.channel_id,
        ts: messageTimestamp,
        text: `*Article Generated* :white_check_mark: ${article}`,
        });
});

(async () => {
    // Start your app
    await app.start();
  
    console.log('⚡️ Bolt app is running!');
  })();
  
