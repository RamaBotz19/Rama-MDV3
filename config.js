const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	zenz: 'https://zenzapi.xyz',
}

// Apikey Website Api
global.APIKeys = {
	'https://zenzapi.xyz': 'Your Key',
}

//api
global.xteam = 'apivproject'
global.lolhuman = 'yourkey'

// Other
global.owner = ['6287793236775']
global.premium = ['6287793236775']
global.ownername = '𝙍𝙖𝙢𝙖 𝙊𝙬𝙣𝙚𝙧'
global.botname = '© 𝙍𝙖𝙢𝙖𝘽𝙤𝙩𝙯'
global.packname = '© 𝙍𝙖𝙢𝙖 𝙊𝙬𝙣𝙚𝙧'
global.gc = 'https://chat.whatsapp.com/IcnbfEst6KK0UOaCJMh8E2'
global.linkyt = 'https://youtube.com/channel/UCJNi-zXIsky4nheONnxoY1w'
global.linkgc = 'https://chat.whatsapp.com/IcnbfEst6KK0UOaCJMh8E2'
global.limitawal = '100'
global.author = '𝘼𝙟𝙞𝙞𝙞\n@Rama'
global.sessionName = 'sessionya'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⌕'
global.mess = {
    success: '𝘽𝙀𝙍𝙃𝘼𝙎𝙄𝙇.....',
    admin: '𝙁𝙄𝙏𝙐𝙍 𝙃𝘼𝙉𝙔𝘼 𝙐𝙉𝙏𝙐𝙆,𝘼𝘿𝙈𝙄𝙉',
    botAdmin: '𝙅𝘼𝘿𝙄𝙆𝘼𝙉 𝘽𝙊𝙏 𝙎𝙀𝘽𝘼𝙂𝘼𝙄,𝘼𝘿𝙈𝙄𝙉..',
    owner: '𝙁𝙄𝙏𝙐𝙍 𝙆𝙃𝙐𝙎𝙐𝙎 𝘼𝙅𝙄',
    group: '𝙁𝙄𝙏𝙐𝙍 𝙃𝘼𝙉𝙔𝘼 𝙐𝙉𝙏𝙐𝙆 𝙂𝙍𝙐𝘽',
    private: '𝙁𝙄𝙏𝙐𝙍 𝙆𝙃𝙐𝙎𝙐𝙎 𝘿𝙄, 𝙋𝘾/𝘾𝙋/𝙋𝙈',
    bot: '𝙁𝙄𝙏𝙐𝙍 𝙆𝙃𝙐𝙎𝙐𝙎 𝙋𝙀𝙉𝙂𝙐𝙉𝘼 𝘽𝙊𝙏',
    wait: '𝙎𝙀𝘿𝘼𝙉𝙂 𝘿𝙄 𝙋𝙍𝙊𝙎𝙀𝙎...',
    endLimit: '𝙇𝙄𝙈𝙄𝙏 𝙃𝘼𝙍𝙄𝘼𝙉 𝘼𝙉𝘿𝘼 𝙏𝙀𝙇𝘼𝙃 𝙃𝘼𝘽𝙄𝙎, 𝙍𝙄𝙎𝙀𝙏 𝙋𝘼𝘿𝘼 𝙅𝘼𝙈 12 𝙈𝘼𝙇𝘼𝙈',
}
global.limitawal = {
    premium: "Infinity",
    free: 100
}
global.sc = fs.readFileSync('./media/sc.jpg')
global.tq = fs.readFileSync('./media/tq.jpg')
global.menu = fs.readFileSync('./media/menu.jpg')
global.allmenu = fs.readFileSync('./media/allmenu.jpg')
global.thumb = { url: 'https://i.pinimg.com/736x/d0/f8/b8/d0f8b804a908ce4aaee63d54035d2192.jpg' }
global.visoka = { url: 'https://telegra.ph/file/769d88bb8c8357546a149.mp4' }

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
