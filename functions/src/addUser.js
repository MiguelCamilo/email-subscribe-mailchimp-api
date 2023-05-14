import mailchimp from '@mailchimp/mailchimp_marketing';
const { apiKey } = require('../env.js');


mailchimp.setConfig({
	apiKey: apiKey.key,
	server: apiKey.server,
  listId: apiKey.listId,
});

export const export_account = ('/', (req, res) => {

  const { firstname, lastname, email } = req.body;

  
	// async func that is uploading the data to the server
	// from mail chimp API doc's
	const run = async () => {
		const response = await mailchimp.lists.addListMember(listId, {
			email_address: userData.email,
			status: 'subscribed',
			merge_fields: {
				FNAME: userData.firstName,
				LNAME: userData.lastName,
			},
		});
		// after form is submitted this here sends the user to the success page
		console.log(`Contact Added Successfully!`);
	};
	run().catch((e) => console.log(e));
});
