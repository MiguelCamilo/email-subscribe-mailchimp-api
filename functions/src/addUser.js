import client from '@mailchimp/mailchimp_marketing';
import { apiKey } from '../env.js';

client.setConfig({
	apiKey: apiKey.key,
	server: apiKey.server,
});

export const export_account = async (req, res) => {
	const firstName = req.body.firstName;
	const lastName = req.body.lastName;
	const email = req.body.email;
	const listId = apiKey.listId;

	const userData = {
		firstName,
		lastName,
		email,
	};

	try {
		const response = await client.accountExports.createAccountExport(listId, {
			email_address: userData.email,
			include_stages: '[subscribed]',
			merge_fields: {
				FNAME: userData.firstName,
				LNAME: userData.lastName,
			},
		});

		res.status(200).send({ message: response });
	} catch (error) {
		res.status(500).send({ message: error.message });
	}
};
