import { rapidAPIHost, rapidAPIURL, rapidAPIKey } from '../config'

const emailer = (
	name: string,
	subject: string,
	message: string,
	fromEmail: string,
): void | boolean => {
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
			.replace(/(\r\n|\n|\r)/gm, ' ')}"}]}`,
	}

	fetch(rapidAPIURL, options)
		.then((response) => response.json)
		.then((response) => console.log(response))
		.then((err) => console.error(err))
}

export default emailer
