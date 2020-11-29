const NOW_URL = process.env.VERCEL_URL

async function init(bot) {
    const botInfo = await bot.telegram.getMe(bot)
    bot.options.username = botInfo.username
    console.info('Server has initialized bot username: ', botInfo.username)
    await bot.telegram.deleteWebhook()
    await bot.startPolling()
}

export async function setWebhook(bot) {
    const botInfo = await bot.telegram.getMe()
    bot.options.username = botInfo.username
    console.info(
        'Server has initialized bot username using Webhook. ',
        botInfo.username
    )

    const getWebhookInfo = await bot.telegram.getWebhookInfo(NOW_URL)

    console.info('getWebhookInfo. ', getWebhookInfo)

    if (getWebhookInfo.url === '') {
        await bot.telegram.setWebhook(NOW_URL)

        console.log('Set webhook', NOW_URL)
        return
    }
    console.log('Webhook already defined!')
}

export default init
