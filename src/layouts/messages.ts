export const start =
	`<b>Welcome to Genemator's Assistant!</b>` +
	`\n` +
	`\n` +
	`This bot helps you to manage with information about Genemator.` +
	`\n` +
	`With the help of this bot you can do:` +
	`\n` +
	`\n` +
	`<code>* Check current status of the Genemator</code>` +
	`\n` +
	`<code>* Check the students & their statuses</code>` +
	`\n` +
	`<code>* Check status of minecraft server</code>` +
	`\n` +
	`<code>* Check statuses of github repositories</code>` +
	`\n` +
	`<code>* Leave a feedback to admins</code>` +
	`\n` +
	`<code>* Request to join github organisation</code>` +
	`\n` +
	`\n` +
	`<i>In order to see full detailed usage information of the bot, press the button below.</i>`;

export const help =
	`<b>List of available commands:</b>` +
	`\n` +
	`\n` +
	`/help - <code>show this helper message</code>` +
	`\n` +
	`/check - <code>check health of API responses</code>` +
	`\n` +
	`/stats - <code>check admin stats of user</code>` +
	`\n` +
	`/students - <code>get infos about genemator's students</code>` +
	`\n` +
	`/links - <code>show genemator's url links</code>` +
	`\n` +
	`/stream - <code>show media creator's stream links</code>` +
	`\n` +
	`/join - <code>request to join our organisation</code>` +
	`\n` +
	`/minecraft - <code>minecraft server status ping</code>` +
	`\n` +
	`/feedback - <code>leave a feedback to admins</code>` +
	`\n` +
	`\n` +
	`<b>Admin commands:</b>` +
	`\n` +
	`/add - <code>add temporary admin</code>` +
	`\n` +
	`/send - <code>send message to users</code>` +
	`\n` +
	`/reset - <code>reset temporary admin list</code>` +
	`\n` +
	`/list - <code>list temporary admins</code>` +
	`\n` +
	`\n` +
	`<i>In order to use our inline mode, switch to inline mode ` +
	`by typing: @genemabot and then start typing something there.</i>`;

export const student_menu = `<b>Choose a student from the list to get information about:</b>`;

export const student_view = (data, match) =>
	`<a href="${data['avatar']}"></a><a href="${data['profile']}"><b>${match}</b></a>` +
	`\n` +
	`<b>Name:</b> <code>${data['name']}</code>` +
	`\n` +
	`<b>Surname:</b> <code>${data['surname']}</code>` +
	`\n` +
	`<b>Status:</b> <code>${data['status']}</code>` +
	`\n` +
	`<b>Rank:</b> <code>${data['rank']}</code>` +
	`\n` +
	`<b>Experiences:</b> <code>${data['experience'].toString()}</code>`;

export const check = async (github, telegram, website, uptime) =>
	`<b>Genemator's Assistant™ Bot status health checker:</b>` +
	`\n` +
	`\n` +
	`<b>Geno's Website:</b> <code>${website}</code>` +
	`\n` +
	`<b>Github API:</b> <code>${github}</code>` +
	`\n` +
	`<b>Telegram API:</b> <code>${telegram}</code>` +
	`\n` +
	`\n` +
	`<b>Last Update:</b> <code>${uptime}</code>`;

export const form_complete = `You have already responded to applicant!`;

export const form_guide =
	`<b>In order to join my github organisation, choose and type as we showed in our examples below:</b>` +
	`\n` +
	`<code>/join &lt;github username&gt;</code>` +
	`\n` +
	`<code>/join &lt;github email address&gt;</code>` +
	`\n` +
	`\n` +
	`<b>Example:</b>` +
	`\n` +
	`<code>/join example-name</code>` +
	`\n` +
	`<code>/join example@gmail.com</code>`;

export const form_notification = (TG, ID) =>
	`<b><a href="https://genemator.me">⛓ GitHub Update Notification ⛓</a></b>` +
	`\n` +
	`\n` +
	`New applicant for Chisel Devs™ GitHub organization:` +
	`\n` +
	`<code>Telegram ID:</code> <code>${TG}</code>` +
	`\n` +
	`<code>GitHub Token:</code> <code>${ID}</code>` +
	`\n` +
	`\n` +
	`<b>To proceed with it, copy and visit:</b>` +
	`\n` +
	`https://github.com/orgs/chiseldevs/people` +
	`\n`;

export const form_status =
	`<b>Your requested has been applied. It will take up to 3 days to confirm your application.</b>` +
	`\n` +
	`<code>Please, be patient and don't forget to confirm our invitation!</code>`;

export const form_accept = () =>
	`<b>✨Congratulations✨</b>` +
	`\n` +
	`\n` +
	`You have been invited to our organisation and from now so on, you are one of Chisel Devs™ members.` +
	` ` +
	`In order to finish joining, please, open your mail and confirm our invitation that we sent to your github email!` +
	`\n` +
	`\n` +
	`<i>Also, take consider joining our Telegram based communities by pressing buttons below:</i>`;

export const form_decline = () =>
	`<b>We are so sorry seeing you declined</b>` +
	`\n` +
	`\n` +
	`Our staff members are trying to process tons of requests at the moment.` +
	` ` +
	`However, our staff members might be mistaken, so don't hesitate to send a new request!` +
	`\n` +
	`\n` +
	`<i>If you would like to send feedbacks, type /feedback and write your message to our staff</i>`;

export const invalid = `<b>This command or message is invalid. Please see our command list for more information!</b>`;

export const invalid_query = `<b>Ehm!</b>`;

export const photo = (data) =>
	`<b>#photo</b>` +
	`\n` +
	`<b>A new photo upload by ${data.from.first_name}</b>` +
	`\n` +
	`\n` +
	`<i>${data.message.caption || ` `}</i>`;

export const video = (data) =>
	`<b>#video</b>` +
	`\n` +
	`<b>A new video upload by ${data.from.first_name}</b>` +
	`\n` +
	`\n` +
	`<i>${data.message.caption || ` `}</i>`;

export const audio = (data) =>
	`<b>#audio</b>` +
	`\n` +
	`<b>A new audio & music upload by ${data.from.first_name}</b>` +
	`\n` +
	`\n` +
	`<i>${data.message.caption || ` `}</i>`;

export const inline = (data) =>
	`<b><a href="${data['html_url']}">〰 GitHub Project Review 〰</a></b>` +
	`\n` +
	`\n` +
	`<b>Description:</b> ${data['description']}` +
	`\n` +
	`<b>Programming Language:</b> ${data['language']}` +
	`\n` +
	`<b>Created Date:</b> ${data['created_at']}` +
	`\n` +
	`\n` +
	`<code>👁: ${data['watchers_count']}</code> <b>|</b> ` +
	`<code>🌟: ${data['stargazers_count']}</code> <b>|</b> ` +
	`<code>👥: ${data['subscribers_count']}</code> <b>|</b> ` +
	`<code>🔃: ${data['forks_count']}</code> <b>|</b> ` +
	`<code>❗: ${data['open_issues_count']}</code>`;

export const minecraft = async (data) => {
	const online = async () => {
		if (data['online']) {
			return 'responding';
		} else {
			return 'not responding';
		}
	};
	const software = async () => {
		if (data['software']) {
			return `<b>Software:</b> ${data['software']}` + `\n`;
		} else {
			return '';
		}
	};
	const players = async () => {
		if (data['players']['online'] !== 0) {
			return (
				`<b>Players:</b> <code>${data['players']['list'].toString()}</code> <i>(${data['players'].online}/${
					data['players'].max
				})</i>` + `\n`
			);
		} else {
			return `<b>Players:</b> no active players currently` + `\n`;
		}
	};
	return (
		`<b>The status of our minecraft server:</b>` +
		`\n` +
		`\n` +
		`<b>Address:</b> mc.genemator.me` +
		`\n` +
		`<b>Server:</b> ${await online()}` +
		`\n` +
		`<b>Message:</b> ${data['motd']['clean'][0]}` +
		`\n` +
		`${await players()}` +
		`<b>Version: ${data['version']}</b>` +
		`\n` +
		`${await software()}`
	);
};

export const error_admin = `<b>You don't have enough power to do that!</b>`;

export const links = `<b>Here are social pages of Genemator:</b>`;

export const stream = `<b>Here you can get stream links of Genemator. Choose one of platforms and press url buttons provided below:</b>`;
