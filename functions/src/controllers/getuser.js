import client from '@mailchimp/mailchimp_marketing';
import { apiKey } from '../../env.js';

client.setConfig({
	apiKey: apiKey.key,
	server: apiKey.server,
});

export const checkUserExists = async (req, res) => {
      const list_id = "76f5877f0b";

    try {
        const response = await client.lists.getListMembersInfo(list_id)

        res.status(200).send(response)

    } catch (error) {
        res.status(500)
        console.log(error)
    }
}