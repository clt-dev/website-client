class EmailUtils {
	static isValid(email) {
		const emailRegex = /\S+@\S+\.\S+/;
		
    return emailRegex.test(email);
	}
}

export default EmailUtils;