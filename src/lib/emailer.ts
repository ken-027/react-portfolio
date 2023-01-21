import { rapidAPIHost, rapidAPIURL, rapidAPIKey } from '../config'

const emailer = (
	name: string,
	subject: string,
	message: string,
	fromEmail: string,
) => {
	const toEmail = 'keanolida7296@gmail.com'
	const options = {
		method: 'POST',
		headers: {
			'content-type': 'application/json',
			'X-RapidAPI-key': rapidAPIKey,
			'X-RapidAPI-Host': rapidAPIHost,
		},
		body: `{"personalizations":[{"to":[{"email":"${toEmail}"}],"subject":"${subject.trim()}"}],"from":{"name":"Portfolio | ${name.trim()}","email":"${fromEmail.trim()}"},"content":[{"type":"text/plain","value":"${message
			.trim()
			.replace(/(\r\n|\n|\r)/gm, ' ') || 'No content'}"}]}`,
	}

	return fetch(rapidAPIURL, options)
		.then((response) => response.json)
		.then((response) => console.log(response))
		.catch((err) => console.error(err))
}

export default emailer
