import { Telegraf, Composer } from 'telegraf'
import { bot } from '../../api'

export const composer = new Composer()
export const middleware = (composer) => {
    bot.use(composer.middleware())
}

bot.telegram.getMe().then((botInfo) => {
    bot.options.username = botInfo.username
})

// if (env.ENVIRONMENT === 'heroku') {
//     bot.launch({
//         webhook: {
//             domain: env.DOMAIN,
//             hookPath: '/bot',
//             port: parseInt(env.PORT)
//         }
//     })
//         .then(async () => {
//             consoles.launch(env.ENVIRONMENT)
//             await bot.telegram.sendMessage(
//                 env.CONTROLLER,
//                 `<a href="https://github.com/genemators/bot"><b>⛓ GitHub Update Notification ⛓</b></a>` +
//                     `\n` +
//                     `\n` +
//                     `<i>The telegram bot has just finished checking health status and has been restarted successfully</i>` +
//                     `\n` +
//                     `\n` +
//                     `<b>For more information, visit:</b>` +
//                     `\n` +
//                     `<a href="https://t.me/genemabot"><u>https://t.me/genemabot</u></a>`,
//                 {
//                     parse_mode: 'HTML',
//                     disable_notification: true
//                 }
//             )
//         })
//         .catch((error) => consoles.errors(error))
// } else if (env.ENVIRONMENT === 'local') {
//     bot.launch()
//         .then(() => consoles.launch(env.ENVIRONMENT))
//         .catch((error) => consoles.errors(error))
// } else {
//     consoles.wrongEnv()
// }
