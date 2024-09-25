let userPassword = prompt('Введіть пароль');
let length = userPassword.length;

if (length === 0) {
	alert('Введіть пароль')
} else {
	let hasNumbers = userPassword.includes('0') || userPassword.includes('1') || userPassword.includes('2') ||
		userPassword.includes('3') || userPassword.includes('4') || userPassword.includes('5') ||
		userPassword.includes('6') || userPassword.includes('7') || userPassword.includes('8') ||
		userPassword.includes('9');

	let hasSpecialChars = userPassword.includes('!') || userPassword.includes('@') || userPassword.includes('#') ||
		userPassword.includes('$') || userPassword.includes('%') || userPassword.includes('^') ||
		userPassword.includes('&') || userPassword.includes('*');

	if (length <= 6) {
		alert('У вас слабкий пароль 🙏');
	} else if (length > 6 && hasNumbers && !hasSpecialChars) {
		alert('Ваш пароль є середнім ✊');
	} else if (length >= 8 && length < 12 && hasNumbers && hasSpecialChars) {
		alert('У вас достатньо сильний пароль. 👊');
	} else if (length > 12 && hasNumbers && hasSpecialChars) {
		alert('У вас дуже надійний пароль 💪');
	} else {
		alert('Ваш пароль занадто слабкий 😢');
	}
}



