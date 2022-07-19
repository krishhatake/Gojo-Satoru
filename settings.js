//═══════════════════════════════════════════════════════//
//
//                              𝙶𝙾𝙹𝙾-𝚂𝙰𝚃𝙾𝚁𝚄 𝓫𝔂 𝓷𝓮𝔁𝓾𝓼𝓝𝔀
//𝙰𝙳𝙾𝙿𝚃𝙴𝙳 𝙵𝚁𝙾𝙼  𝚂𝙲𝚁𝙸𝙿𝚃 𝙾𝙵 𝙲𝙷𝙴𝙴𝙼𝚂𝙱𝙾𝚃 𝚅2 𝙱𝚈 𝙳𝙶𝚇𝚎𝚘𝚗 
//
//════════════════════════════//

const fs = require('fs')
const chalk = require('chalk')

//Api Website\\
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

//Api Key\\
global.APIKeys = {
	'https://zenzapis.xyz': '50e6007001', //credit goes to Scotch, if api key expire, buy it and put it here?\\
}

//customize settings\\
global.owner = ['918446298623']
global.premium = ['918446298623']
global.ownernomer = '918446298623'
global.ownername = '★⃝𝐾𝛬𝐾𝛬𝑆𝐻𝐼★𝐷𝛯𝑆𝑇𝑅𝑂𝑌𝐸𝑅⃝★'
global.botname = '★⃝❥︎𝐾𝛬𝐾𝛬𝑆𝐻𝐼-♡︎-𝑀𝐼𝑁𝐴★⃝❥︎'
global.footer = '★⃝𝐾𝛬𝐾𝛬𝑆𝐻𝐼★𝐷𝛯𝑆𝑇𝑅𝑂𝑌𝐸𝑅⃝★'
global.ig = 'https://https://www.instagram.com/invites/contact/?utm_source=ig_contact_invite&utm_medium=user_system_sheet&utm_content=mg9n51y'
global.region = 'India, South India, Kerala'
global.sc = 'https://github.com/Scotxh/Gojo-Satoru/'
global.myweb = 'https://https://youtube.com/channel/UCulchmkEi38d2kHL9RFlxvA'
global.packname = '★⃝𝐾𝛬𝐾𝛬𝑆𝐻𝐼★𝐷𝛯𝑆𝑇𝑅𝑂𝑌𝐸𝑅⃝★'
global.author = '★⃝❥︎𝐾𝛬𝐾𝛬𝑆𝐻𝐼-♡︎-𝑀𝐼𝑁𝐴★⃝❥︎'
global.sessionName = 'session'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
    success: 'Done',
    admin: 'For Admin',
    botAdmin: 'Make Me Admin',
    owner: 'For Bot Owner',
    group: 'DO NOT TEXT IN DM BYE',
    private: 'Private Chat',
    bot: 'Only For Me,Sorry',
    wait: 'Hold On',
    error: 'Error!! [404]',
    endLimit: 'Your Daily Limit Has Expired, The Limit Will Be Reset Every 12 Hours',
}
    global.limitawal = {
    premium: "Infinity",
    free: 12,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 15,
   goldawal: 10,
   emeraldawal: 5,
   umpanawal: 5,
   potionawal: 1
}
global.thumb = 'https://i.ibb.co/Jk5xFpp/say-scotch-Love-Brecklist.jpg'
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
