import client from '@mailchimp/mailchimp_marketing';

import { apiKey } from '../../env.js';

client.setConfig({
	apiKey: apiKey.key,
	server: apiKey.server,
});

export const export_account = async (req, res) => {
  const { firstname, lastname, email } = req.body;
  const list_id = "76f5877f0b";

  if(!firstname || !lastname || !email) {
    return res.status(400).send({ message: "missing required fields" })
  }

	try {
		const response = await client.lists.addListMember(list_id, {
      email_address: email,
      status: "subscribed",
      merge_fields: {
        FNAME: firstname,
        LNAME: lastname,
      },
    });
    res.status(200).send({ message: "success", data: response})
	} catch (error) {
    res.sendStatus(500)
    console.log(error)
	}
};
