import emailjs from "@emailjs/browser";

(function () {
	emailjs.init({
		publicKey: "h71Ngnp7Er_Rn7EMV",
	});
})();

export default async function sendVerificationEmail(
	name: string,
	email: string,
	email_otp: string
) {
	const templateParams = {
		user_name: name,
		user_email: email,
		verification_otp: email_otp,
	};

	const serviceId = "service_oh1utgn";
	const templateId = "template_jb21lvl";

	try {
		const result = await emailjs.send(
			serviceId,
			templateId,
			templateParams
		);
		console.log(result);
		return result;
	} catch (error) {
		console.error(error);
	}
}
