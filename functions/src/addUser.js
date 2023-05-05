const client = require('@mailchimp/mailchimp_marketing');

import { apiKey } from '../env';

client.setConfig({
	apiKey: apiKey.key,
	server: apiKey.server,
});

export const run = async (req, res) => {
	const firstName = req.body.firstName;
	const lastName = req.body.lastName;
	const email = req.body.email;
    const listId = apiKey.listId;

	const userData = {
		firstName,
		lastName,
		email,
	};

	const response = await client.accountExports.createAccountExport(listId, {
        email_address: userData.email,
		include_stages: '[subscribed]',
        merge_fields: {
            FNAME: userData.firstName,
            LNAME: userData.lastName,
          },
	});
	console.log(response);
};

run()
    .catch(e => res.status(500).send({ message: e.message }))