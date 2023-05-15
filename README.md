
# EMAIL-SUBSCRIBE-CARD / MAILCHIMP-API

Using the MailChimp API to be able to ADD users to a Mailing List with MailChimp, this was created with a Frontend Email Subscribe Card in mind which I have add the link to that repo.



## Installation

Clone the repo:

- You will need to Create a MailChimp Account
- Get your *API Key* and place it inside of the *client.setConfig()*
- Localhost is set to *3000* but can be changed in *index.js*
- After running *node index.js* ( make sure you're in the functions directory ) you should see a console log saying *" Server is running on http://localhost:3000 "*
- From there you can either *CLONE* the *FRONTEND REPO* made for this *API* or use *POSTMAN*

*FRONTEND REPO:*  https://github.com/MiguelCamilo/Email-Subscribe-MailChimp 

##### Installation:
```bash
  cd email-subscribe-mailchimp-api 
  cd functions && npm install 
  node index.js
```
    
## API Reference

#### MailChimp API DOCS:
*DOCS:* https://mailchimp.com/developer/marketing/guides/quick-start/#install-the-client-library-for-your-language

POST
/lists/{list_id}/members

```bash
// import client from "@mailchimp/mailchimp_marketing";
const client = require("@mailchimp/mailchimp_marketing");

client.setConfig({
  apiKey: "YOUR_API_KEY",
  server: "YOUR_SERVER_PREFIX",
});

const run = async () => {
  const list_id = "*LIST ID*"
  const response = await client.lists.addListMember("list_id", {
    email_address: "Ebony_Brekke@gmail.com",
    status: "pending",
  });
  console.log(response);
};

run();

```


