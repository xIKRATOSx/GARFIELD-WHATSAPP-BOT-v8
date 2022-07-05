require('./Config')
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@adiwajshing/baileys')
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const { exec, spawn, execSync } = require("child_process")
const axios = require('axios')
const path = require('path')
const os = require('os')
const maker = require('mumaker')

const moment = require('moment-timezone')
const { JSDOM } = require('jsdom')
const speed = require('performance-now')
const { performance } = require('perf_hooks')
const { Primbon } = require('scrape-primbon')
const primbon = new Primbon()
const { smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom } = require('./lib/myfunc')
const nexusnw = require('xfarr-api')

//rpg function\\
   const { 
     addInventoriDarah, 
      cekDuluJoinAdaApaKagaDiJson, 
      addDarah, 
      kurangDarah, 
     getDarah 
   }  = require('./IMGDesc/user/darah.js')
   const { 
     cekInventoryAdaAtauGak, 
      addInventori,  
       addBesi, 
       addEmas, 
       addEmerald,
       addUmpan,
       addPotion,
       kurangBesi, 
       kurangEmas, 
       kurangEmerald, 
       kurangUmpan,
       kurangPotion,
       getBesi, 
      getEmas, 
     getEmerald,
     getUmpan,
    getPotion
   } = require('./IMGDesc/user/alat_tukar.js')
   const { 
    addInventoriMonay, 
    cekDuluJoinAdaApaKagaMonaynyaDiJson, 
    addMonay, 
    kurangMonay, 
   getMonay 
   } = require('./IMGDesc/user/monay.js')
   const { 
    addInventoriLimit, 
    cekDuluJoinAdaApaKagaLimitnyaDiJson, 
    addLimit, 
    kurangLimit, 
    getLimit 
   } = require('./IMGDesc/user/limit.js')
   const { 
    cekDuluHasilBuruanNya, 
     addInventoriBuruan, 
     addIkan,
      addAyam, 
      addKelinci, 
      addDomba, 
      addSapi,
      addGajah,
      kurangIkan,
      kurangAyam, 
      kurangKelinci, 
      kurangDomba, 
      kurangSapi,
      kurangGajah,
      getIkan,
      getAyam, 
      getKelinci, 
      getDomba,
     getSapi,
    getGajah
   } = require('./IMGDesc/user/buruan.js')
   let DarahAwal =  global.rpg.darahawal
   const isDarah = cekDuluJoinAdaApaKagaDiJson(m.sender)   
   const isCekDarah = getDarah(m.sender)
   const isUmpan = getUmpan(m.sender)
   const isPotion = getPotion(m.sender)
   const isIkan = getIkan(m.sender)
   const isAyam = getAyam(m.sender)
   const isKelinci = getKelinci(m.sender)
   const isDomba = getDomba(m.sender)
   const isSapi = getSapi(m.sender)
   const isGajah = getGajah(m.sender)
   const isMonay = getMonay(m.sender)
   const isLimit = getLimit(m.sender)
   const isBesi = getBesi(m.sender)
   const isEmas = getEmas(m.sender)
   const isEmerald = getEmerald(m.sender)
   const isInventory = cekInventoryAdaAtauGak(m.sender)
   const isInventoriBuruan = cekDuluHasilBuruanNya(m.sender)
   const isInventoryLimit = cekDuluJoinAdaApaKagaLimitnyaDiJson(m.sender)
   const isInventoryMonay = cekDuluJoinAdaApaKagaMonaynyaDiJson(m.sender)
   const ikan = ['🐟','🐠','🐡']   

//rpg database\\
 let _limit = JSON.parse(fs.readFileSync('./IMGDesc/user/limit.json'));
 let _buruan = JSON.parse(fs.readFileSync('./IMGDesc/user/hasil_buruan.json'));
 let _darahOrg = JSON.parse(fs.readFileSync('./IMGDesc/user/darah.json'))

//Database\\
let setik = JSON.parse(fs.readFileSync('./database/setik.json'));
let vien = JSON.parse(fs.readFileSync('./database/vien.json'));
let imagi = JSON.parse(fs.readFileSync('./database/imagi.json'))
let videox = JSON.parse(fs.readFileSync('./database/video.json'))

//read database\\
let tebaklagu = db.data.game.tebaklagu = []
let _family100 = db.data.game.family100 = []
let kuismath = db.data.game.math = []
let tebakgambar = db.data.game.tebakgambar = []
let tebakkata = db.data.game.tebakkata = []
let caklontong = db.data.game.lontong = []
let caklontong_desk = db.data.game.lontong_desk = []
let tebakkalimat = db.data.game.kalimat = []
let tebaklirik = db.data.game.lirik = []
let tebaktebakan = db.data.game.tebakan = []
let vote = db.data.others.vote = []

module.exports = GarfieldNeural = async (GarfieldNeural, m, chatUpdate, store) => {
    try {
        var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
        var budy = (typeof m.text == 'string' ? m.text : '')
        var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
        const isCmd = body.startsWith(prefix)
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const pushname = m.pushName || "No Name"
        const botNumber = await GarfieldNeural.decodeJid(GarfieldNeural.user.id)
        const isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const itsMe = m.sender == botNumber ? true : false
        const text = q = args.join(" ")
        const quoted = m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
	    const isMedia = /image|video|sticker|audio/.test(mime)
	    const from = mek.key.remoteJid
	    const type = Object.keys(mek.message)[0]        
	    const content = JSON.stringify(mek.message)

        //group\\
        const groupMetadata = m.isGroup ? await GarfieldNeural.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
        const groupOwner = m.isGroup ? groupMetadata.owner : ''
    	const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
    	const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
    	const isPremium = isCreator || global.premium.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender) || false
	    
		
          try {
            let isNumber = x => typeof x === 'number' && !isNaN(x)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            let user = global.db.data.users[m.sender]
            if (typeof user !== 'object') global.db.data.users[m.sender] = {}
            if (user) {
                if (!isNumber(user.afkTime)) user.afkTime = -1
                if (!('afkReason' in user)) user.afkReason = ''
                if (!isNumber(user.limit)) user.limit = limitUser
            } else global.db.data.users[m.sender] = {
                afkTime: -1,
                afkReason: '',
                limit: limitUser,
            }
    
            let chats = global.db.data.chats[m.chat]
            if (typeof chats !== 'object') global.db.data.chats[m.chat] = {}
            if (chats) {
                if (!('mute' in chats)) chats.mute = false
                if (!('antilink' in chats)) chats.antilink = false
            } else global.db.data.chats[m.chat] = {
                mute: false,
                antilink: false,
            }
		
	    let setting = global.db.data.Settings[botNumber]
            if (typeof setting !== 'object') global.db.data.Settings[botNumber] = {}
	    if (setting) {
		if (!isNumber(setting.status)) setting.status = 0
		if (!('autobio' in setting)) setting.autobio = false
	    } else global.db.data.Settings[botNumber] = {
		status: 0,
		autobio: false,
	    }
	    
        } catch (err) {
            console.error(err)
        }
	
	//group target \\
const reply = (teks) => {
            GarfieldNeural.sendMessage(m.chat, { text: teks, contextInfo:{"externalAdReply": {"title": ` ${global.botname}`,"body": ` 𝖦Λ𝖱𝖥𝖨Ξ𝖫𝖣 𝖡𝖮Т`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./TempCloud/logo.png`),"sourceUrl": "https://github.com/Zenoixnoize/GARFIELD-WHATSAPP-BOT-v8"}}}, { quoted: m})
        }
        
        const replay = (teks) => {
            GarfieldNeural.sendMessage(m.chat, { text: teks, contextInfo:{"externalAdReply": {"title": ` ${global.botname}`,"body": ` 𝖦Λ𝖱𝖥𝖨Ξ𝖫𝖣 𝖡𝖮Т`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./TempCloud/logo.png`),"sourceUrl": "https://github.com/Zenoixnoize/GARFIELD-WHATSAPP-BOT-v8"}}}, { quoted: m})
        }
	
        //Public & Self\\
        if (!GarfieldNeural.public) {
            if (!m.key.fromMe) return
        }

        //Push Message To Console && Auto Read\\
        if (m.message) {
            GarfieldNeural.sendReadReceipt(m.chat, m.sender, [m.key.id])
            console.log(chalk.black(chalk.bgWhite('[ MESSAGE ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('🦋 From'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('🛰️ In'), chalk.green(m.isGroup ? pushname : 'Private Chat', m.chat))
        }
	
	//reset limit every 12 hours\\
        let cron = require('node-cron')
        cron.schedule('00 12 * * *', () => {
            let user = Object.keys(global.db.data.users)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            for (let jid of user) global.db.data.users[jid].limit = limitUser
            console.log('Limit Reseted')
        }, {
            scheduled: true,
            timezone: "Asia/Kolkata"
        })
        
	//auto set bio\\
	if (db.data.Settings[botNumber].autobio) {
	    let setting = global.db.data.Settings[botNumber]
	    if (new Date() * 1 - setting.status > 1000) {
		let uptime = await runtime(process.uptime())
		await GarfieldNeural.setStatus(`${GarfieldNeural.user.name} | Runtime : ${runtime(uptime)}`)
		setting.status = new Date() * 1
	    }
	}
	
	  //antilink\\
        if (db.data.chats[m.chat].antilink) {
        if (budy.match(`chat.whatsapp.com`)) {
        reply(`「 ANTI LINK 」\n\nYou have been detected sending a group link, sorry you will be kicked !`)
        if (!isBotAdmins) return reply(`I Am Not An Admin, How Could I Kick Somebody Who Send Link 😒`)
        let gclink = (`https://chat.whatsapp.com/`+await GarfieldNeural.groupInviteCode(m.chat))
        let isLinkThisGc = new RegExp(gclink, 'i')
        let isgclink = isLinkThisGc.test(m.text)
        if (isgclink) return reply(`Group Is Installed With Anti-Link But I Won't Kick You 😉, Because You Sent This Group Link❤️`)
        if (isAdmins) return reply(`Group Is Installed With Anti-Link But I Won't Kick You 😉, Because You Are An Admin Of The Group❤️`)
        if (isCreator) return reply(`Group Is Installed With Anti-Link But I Won't Kick You 😉, Because You Are My Owner Hahahahah🤣😘, You Think I Will Betray You Huh${global.emoji01}`)
        GarfieldNeural.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        }
        }

        //auto reply 
        for (let anji of setik){
				if (budy === anji){
					result = fs.readFileSync(`./TempCloud/sticker/${anji}.webp`)
					GarfieldNeural.sendMessage(m.chat, { sticker: result }, { quoted: m })
					}
			}
			for (let anju of vien){
				if (budy === anju){
					result = fs.readFileSync(`./TempCloud/vn/${anju}.mp3`)
					GarfieldNeural.sendMessage(m.chat, { audio: result, mimetype: 'audio/mp4', ptt: true }, { quoted: m })     
					}
			}
			for (let anjh of imagi){
				if (budy === anjh){
					result = fs.readFileSync(`./TempCloud/image/${anjh}.jpg`)
					GarfieldNeural.sendMessage(m.chat, { image: result }, { quoted: m })
					}
			}
					for (let anjh of videox){
				if (budy === anjh){
					result = fs.readFileSync(`./TempCloud/vid/${anjh}.mp4`)
					GarfieldNeural.sendMessage(m.chat, { video: result }, { quoted: m })
					}
				  }

      //Mute Chat\\
      if (db.data.chats[m.chat].mute && !isAdmins && !isCreator) {
      return
      }
        
        //media detect \\
		const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
		const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
		const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
		const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
        
        //Respon Cmd with media\\
        if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.data.sticker)) {
        let hash = global.db.data.sticker[m.msg.fileSha256.toString('base64')]
        let { text, mentionedJid } = hash
        let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
            userJid: GarfieldNeural.user.id,
            quoted: m.quoted && m.quoted.fakeObj
        })
        messages.key.fromMe = areJidsSameUser(m.sender, GarfieldNeural.user.id)
        messages.key.id = m.key.id
        messages.pushName = m.pushName
        if (m.isGroup) messages.participant = m.sender
        let msg = {
            ...chatUpdate,
            messages: [proto.WebMessageInfo.fromObject(messages)],
            type: 'append'
        }
        GarfieldNeural.ev.emit('messages.upsert', msg)
        }
	    
	if (('family100'+m.chat in _family100) && isCmd) {
            kuis = true
            let room = _family100['family100'+m.chat]
            let teks = budy.toLowerCase().replace(/[^\w\s\-]+/, '')
            let isSurender = /^((me)?give up|surr?ender)$/i.test(m.text)
            if (!isSurender) {
                let index = room.jawaban.findIndex(v => v.toLowerCase().replace(/[^\w\s\-]+/, '') === teks)
                if (room.terjawab[index]) return !0
                room.terjawab[index] = m.sender
            }
            let isWin = room.terjawab.length === room.terjawab.filter(v => v).length
            let caption = `
Answer The Following Questions :\n${room.soal}\n\n\nThere Is ${room.jawaban.length} Answer ${room.jawaban.find(v => v.includes(' ')) ? `(Some Answers Have Spaces)` : ''}
${isWin ? `All Answers Answered` : isSurender ? 'Surrender!' : ''}
${Array.from(room.jawaban, (jawaban, index) => {
        return isSurender || room.terjawab[index] ? `(${index + 1}) ${jawaban} ${room.terjawab[index] ? '@' + room.terjawab[index].split('@')[0] : ''}`.trim() : false
    }).filter(v => v).join('\n')}
    ${isSurender ? '' : `Perfect Player`}`.trim()
            GarfieldNeural.sendText(m.chat, caption, m, { contextInfo: { mentionedJid: parseMention(caption) }}).then(mes => { return _family100['family100'+m.chat].pesan = mesg }).catch(_ => _)
            if (isWin || isSurender) delete _family100['family100'+m.chat]
        }

        if (tebaklagu.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaklagu[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await GarfieldNeural.sendButtonText(m.chat, [{ buttonId: 'guess song', buttonText: { displayText: 'Guess The Song' }, type: 1 }], `🎮 Guess The Music 🎮\n\nCorrect Answer 🎉\n\nWant To Play Again? Press The Button Below`, GarfieldNeural.user.name, m)
                delete tebaklagu[m.sender.split('@')[0]]
            } else reply('*Wrong Answer!*')
        }

        if (kuismath.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = kuismath[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await reply(`🎮 Math Quiz 🎮\n\nCorrect Answer 🎉\n\nWant To Play Again? Send ${prefix}math mode`)
                delete kuismath[m.sender.split('@')[0]]
            } else reply('*Wrong Answer!*')
        }

        if (tebakgambar.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakgambar[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await GarfieldNeural.sendButtonText(m.chat, [{ buttonId: 'guess picture', buttonText: { displayText: 'Guess The Picture' }, type: 1 }], `🎮 Guess The Picture 🎮\n\nCorrect Answer 🎉\n\nWant To Play Again? Press The Button Below`, GarfieldNeural.user.name, m)
                delete tebakgambar[m.sender.split('@')[0]]
            } else reply('*Wrong Answer!*')
        }

        if (tebakkata.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkata[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await GarfieldNeural.sendButtonText(m.chat, [{ buttonId: 'guess word', buttonText: { displayText: 'Guess The Word' }, type: 1 }], `🎮 Guess The Word 🎮\n\nCorrect Answer 🎉\n\nWant To Play Again? Press The Button Below`, GarfieldNeural.user.name, m)
                delete tebakkata[m.sender.split('@')[0]]
            } else reply('*Wrong Answer!*')
        }

        if (caklontong.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = caklontong[m.sender.split('@')[0]]
	    deskripsi = caklontong_desk[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await GarfieldNeural.sendButtonText(m.chat, [{ buttonId: 'guess blank', buttonText: { displayText: 'Guess The Blank' }, type: 1 }], `🎮 Guess The Blank 🎮\n\nCorrect Answer 🎉\n*${deskripsi}*\n\nWant To Play Again? Press The Button Below`, GarfieldNeural.user.name, m)
                delete caklontong[m.sender.split('@')[0]]
		delete caklontong_desk[m.sender.split('@')[0]]
            } else reply('*Wrong Answer!*')
        }

        if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkalimat[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await GarfieldNeural.sendButtonText(m.chat, [{ buttonId: 'guess sentence', buttonText: { displayText: 'Guess The Sentence' }, type: 1 }], `🎮 Guess The Sentence 🎮\n\nCorrect Answer 🎉\n\nWant To Play Again? Press The Button Below`, GarfieldNeural.user.name, m)
                delete tebakkalimat[m.sender.split('@')[0]]
            } else reply('*Wrong Answer!*')
        }

        if (tebaklirik.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaklirik[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await GarfieldNeural.sendButtonText(m.chat, [{ buttonId: 'guess lyrics', buttonText: { displayText: 'Guess The Lyrics' }, type: 1 }], `🎮 Guess The Lyrics 🎮\n\nCorrect Answer 🎉\n\nWant To Play Again? Press The Button Below`, GarfieldNeural.user.name, m)
                delete tebaklirik[m.sender.split('@')[0]]
            } else reply('*Wrong Answer!*')
        }
	    
	if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaktebakan[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await GarfieldNeural.sendButtonText(m.chat, [{ buttonId: 'guess riddle', buttonText: { displayText: 'Guess The Riddle' }, type: 1 }], `🎮 Guess The Riddle 🎮\n\nCorrect Answer 🎉\n\nWant To Play Again? Press The Button Below`, GarfieldNeural.user.name, m)
                delete tebaktebakan[m.sender.split('@')[0]]
            } else reply('*Wrong Answer!*')
        }
        
        //TicTacToe\\
	    this.game = this.game ? this.game : {}
	    let room = Object.values(this.game).find(room => room.id && room.game && room.state && room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender) && room.state == 'PLAYING')
	    if (room) {
	    let ok
	    let isWin = !1
	    let isTie = !1
	    let isSurrender = !1
	    //reply(`[DEBUG]\n${parseInt(m.text)}`)
	    if (!/^([1-9]|(me)?give up|surr?ender|off|skip)$/i.test(m.text)) return
	    isSurrender = !/^[1-9]$/.test(m.text)
	    if (m.sender !== room.game.currentTurn) { 
	    if (!isSurrender) return !0
	    }
	    if (!isSurrender && 1 > (ok = room.game.turn(m.sender === room.game.playerO, parseInt(m.text) - 1))) {
	    reply({
	    '-3': 'Game Has Ended',
	    '-2': 'Invalid',
	    '-1': 'Invalid Position',
	    0: 'Invalid Position',
	    }[ok])
	    return !0
	    }
	    if (m.sender === room.game.winner) isWin = true
	    else if (room.game.board === 511) isTie = true
	    let arr = room.game.render().map(v => {
	    return {
	    X: '❌',
	    O: '⭕',
	    1: '1️⃣',
	    2: '2️⃣',
	    3: '3️⃣',
	    4: '4️⃣',
	    5: '5️⃣',
	    6: '6️⃣',
	    7: '7️⃣',
	    8: '8️⃣',
	    9: '9️⃣',
	    }[v]
	    })
	    if (isSurrender) {
	    room.game._currentTurn = m.sender === room.game.playerX
	    isWin = true
	    }
	    let winner = isSurrender ? room.game.currentTurn : room.game.winner
	    let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

${isWin ? `@${winner.split('@')[0]} Won!` : isTie ? `Game Over` : `Turn ${['❌', '⭕'][1 * room.game._currentTurn]} (@${room.game.currentTurn.split('@')[0]})`}
❌: @${room.game.playerX.split('@')[0]}
⭕: @${room.game.playerO.split('@')[0]}

Typed *surrender* to surrender and admited defeat`
	    if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== m.chat)
	    room[room.game._currentTurn ^ isSurrender ? 'x' : 'o'] = m.chat
	    if (room.x !== room.o) await GarfieldNeural.sendText(room.x, str, m, { mentions: parseMention(str) } )
	    await GarfieldNeural.sendText(room.o, str, m, { mentions: parseMention(str) } )
	    if (isTie || isWin) {
	    delete this.game[room.id]
	    }
	    }

        //Suit PvP\\
	    this.suit = this.suit ? this.suit : {}
	    let roof = Object.values(this.suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender))
	    if (roof) {
	    let win = ''
	    let tie = false
	    if (m.sender == roof.p2 && /^(acc(ept)?|accept|yes|okay?|reject|no|later|nope(k.)?yes|y)/i.test(m.text) && m.isGroup && roof.status == 'wait') {
	    if (/^(reject|no|later|n|nope(k.)?yes)/i.test(m.text)) {
	    GarfieldNeural.sendTextWithMentions(m.chat, `@${roof.p2.split`@`[0]} Refuse Suit, Suit Canceled`, m)
	    delete this.suit[roof.id]
	    return !0
	    }
	    roof.status = 'play'
	    roof.asal = m.chat
	    clearTimeout(roof.waktu)
	    //delete roof[roof.id].waktu
	    GarfieldNeural.sendText(m.chat, `Suit Has Been Sent To Chat

@${roof.p.split`@`[0]} dan 
@${roof.p2.split`@`[0]}

Please Choose A Suit In The Respective Chat"
Click https://wa.me/${botNumber.split`@`[0]}`, m, { mentions: [roof.p, roof.p2] })
	    if (!roof.pilih) GarfieldNeural.sendText(roof.p, `Please Select \n\Rock🗿\nPaper📄\nScissors✂️`, m)
	    if (!roof.pilih2) GarfieldNeural.sendText(roof.p2, `Please Select \n\nRock🗿\nPaper📄\nScissors✂️`, m)
	    roof.waktu_milih = setTimeout(() => {
	    if (!roof.pilih && !roof.pilih2) GarfieldNeural.sendText(m.chat, `Both Players Don't Want To Play,\nSuit Canceled`)
	    else if (!roof.pilih || !roof.pilih2) {
	    win = !roof.pilih ? roof.p2 : roof.p
	    GarfieldNeural.sendTextWithMentions(m.chat, `@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} Didn't Choose Suit, Game Over!`, m)
	    }
	    delete this.suit[roof.id]
	    return !0
	    }, roof.timeout)
	    }
	    let jwb = m.sender == roof.p
	    let jwb2 = m.sender == roof.p2
	    let g = /scissors/i
	    let b = /rock/i
	    let k = /paper/i
	    let reg = /^(scissors|rock|paper)/i
	    if (jwb && reg.test(m.text) && !roof.pilih && !m.isGroup) {
	    roof.pilih = reg.exec(m.text.toLowerCase())[0]
	    roof.text = m.text
	    reply(`You Have Chosen ${m.text} ${!roof.pilih2 ? `\n\nWaiting For The Opponent To Choose` : ''}`)
	    if (!roof.pilih2) GarfieldNeural.sendText(roof.p2, '_The Opponent Has Chosen_\nNow It Is Your Turn', 0)
	    }
	    if (jwb2 && reg.test(m.text) && !roof.pilih2 && !m.isGroup) {
	    roof.pilih2 = reg.exec(m.text.toLowerCase())[0]
	    roof.text2 = m.text
	    reply(`You Have Chosen ${m.text} ${!roof.pilih ? `\n\nWaiting For The Opponent To Choose` : ''}`)
	    if (!roof.pilih) GarfieldNeural.sendText(roof.p, '_The Opponent Has Chosen_\nNow It Is Your Turn', 0)
	    }
	    let stage = roof.pilih
	    let stage2 = roof.pilih2
	    if (roof.pilih && roof.pilih2) {
	    clearTimeout(roof.waktu_milih)
	    if (b.test(stage) && g.test(stage2)) win = roof.p
	    else if (b.test(stage) && k.test(stage2)) win = roof.p2
	    else if (g.test(stage) && k.test(stage2)) win = roof.p
	    else if (g.test(stage) && b.test(stage2)) win = roof.p2
	    else if (k.test(stage) && b.test(stage2)) win = roof.p
	    else if (k.test(stage) && g.test(stage2)) win = roof.p2
	    else if (stage == stage2) tie = true
	    GarfieldNeural.sendText(roof.asal, `_*Suit Results*_${tie ? '\nSERIES' : ''}

@${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ` Win \n` : ` Lost \n`}
@${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ` Win \n` : ` Lost \n`}
`.trim(), m, { mentions: [roof.p, roof.p2] })
	    delete this.suit[roof.id]
	    }
	    }
	    
	    let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
	    for (let jid of mentionUser) {
            let user = global.db.data.users[jid]
            if (!user) continue
            let afkTime = user.afkTime
            if (!afkTime || afkTime < 0) continue
            let reason = user.afkReason || ''
            reply(`
Don't tag him!
He's in AFK/Offline ${reason ? 'dengan alasan ' + reason : 'no reason'}
It's been ${clockString(new Date - afkTime)}
`.trim())
        }

        if (db.data.users[m.sender].afkTime > -1) {
            let user = global.db.data.users[m.sender]
            reply(`
You Came Back Online From AFK${user.afkReason ? ' after ' + user.afkReason : ''}
In ${clockString(new Date - user.afkTime)}
`.trim())
            user.afkTime = -1
            user.afkReason = ''
        }
switch(command) {
        case 'inventori': case 'inventory': case 'profile':{
if (q.includes('--help')) return reply(examkosong) 
  if (!isDarah){ addInventoriDarah(m.sender, DarahAwal) }
  if (!isInventory){ addInventori(m.sender) }
  if (!isInventoriBuruan){ addInventoriBuruan(m.sender) }
     
     var GarfieldNeural = await getBuffer(picak+`User's Inventory`)
     let teksehmazeh = `_[ 👩🏻‍💼INFO USER👨🏻‍💼 ]_\n\n`
     teksehmazeh += `*❤️Your Blood* : ${getDarah(m.sender)}\n`
     teksehmazeh += `*◻️️Your Iron* : ${getBesi(m.sender)}\n`
     teksehmazeh += `*🌟Your Gold* : ${getEmas(m.sender)}\n`
     teksehmazeh += `*💎Your Emerald* : ${getEmerald(m.sender)}\n`
     teksehmazeh += `*⏺️Your Limit* : ${getLimit(m.sender)}\n`
     teksehmazeh += `*🧪Your Potion* : ${getPotion(m.sender)}\n\n`
     teksehmazeh += `_[ 🐺HUNT RESULT🐺 ]_\n`
     teksehmazeh += `*🐟Fish* : ${getIkan(m.sender)}\n`
     teksehmazeh += `*🐔Chicken* : ${getAyam(m.sender)}\n`
     teksehmazeh += `*🐇Rabbit* : ${getKelinci(m.sender)}\n`
     teksehmazeh += `*🐑Sheep* : ${getDomba(m.sender)}\n`
     teksehmazeh += `*🐄Cow* : ${getSapi(m.sender)}\n`
     teksehmazeh += `*🐘Elephant* : ${getGajah(m.sender)}\n\n`
     teksehmazeh += `_*${pushname}*_`
     await GarfieldNeural.send5ButImg(from, `` + '' + teksehmazeh, `© ${footer}`, GarfieldNeural, [{"urlButton": {"displayText": "Follow Us ℹ️ ","url": `${myweb}`}}])
  }
  break
        case 'userlimit': 
{      
   let txt = `「 *ALL LIMIT USER* 」\n\n`
     for (let i of _limit){
     txt += `➸ *ID :* @${i.id.split("@")[0]}\n➸ *Limit* : ${i.limit}\n`
     }
    reply(txt)       
  }
 break
 case 'leaderboard':
{      
   let txt = `「 *LEADERBOARD* 」\n\n`
     for (let i of _buruan){
     txt += `➸ *ID :* ${i.id}\n`
     txt += `*🐟Fish* : ${i.ikan}\n`
     txt += `*🐔Chicken* : ${i.ayam}\n`
     txt += `*🐇Rabbit* : ${i.kelinci}\n`
     txt += `*🐑Sheep* : ${i.domba}\n`
     txt += `*🐄Cow* : ${i.sapi}\n`
     txt += `*🐘Elephant* : ${i.gajah}\n\n`
     }
    reply(txt)       
  }
 break
case 'mining': case 'mine':{
if (q.includes('--help')) return reply(examkosong) 
  if (!isInventory){ addInventori(m.sender) }
  if (isCekDarah < 1) return reply(`You're Tired!, Try To Heal Using Potions`) 
  let besi = [1,2,5,0,3,0,1,1,4,1,5,0,0]
  let emas = [0,1,2,3,0,0,0,1,1,0,0,2]
  let emerald = [0,0,1,0,0,1,0,2,1,0,0,1]
  var besinya = besi[Math.floor(Math.random() * besi.length)]  
  var emasnya = emas[Math.floor(Math.random() * emas.length)]  
  var emeraldnya = emerald[Math.floor(Math.random() * emerald.length)]  
  setTimeout( () => {
  let caption = `[ MINING RESULT ]\n*Iron* : ${besinya}\n*Gold* : ${emasnya}\n*Emerald* : ${emeraldnya}`
  let buttons = [
      {
       buttonId: `${prefix + command}`, 
       buttonText: {
        displayText: 'Mine Again⛏️'
      }, type: 1},
    ]
    let buttonMessage = {
      image: { url: './IMGDesc/image/tambang.jpg' },
      caption: caption,
      footer: pushname,
      buttons: buttons,
      headerType: 4
     }
     GarfieldNeural.sendMessage(from, buttonMessage, { quoted: m })
   
   }, 7000)  
  setTimeout( () => {
  reply(`@${m.sender.split("@")[0]} Started Mining🎣`)     
  }, 1500)
  kurangDarah(m.sender, 10)
  addBesi(m.sender, besinya)
  addEmas(m.sended, emasnya)
  addEmerald(m.sender, emeraldnya)	     
  }   
  break  
  //transaction\\
 case 'beli': case 'buy':{
if (q.includes('--help')) return reply(examkosong) 
 if (!isInventoriBuruan){ addInventoriBuruan(m.sender) } 
 if (!isInventoryMonay){ addInventoriMonay(m.sender) }
 if (!isInventory){ addInventori(m.sender) }
 if (!q) return reply(`What Do You Want To Buy?\n\n1.potion\n2.baitfood\n3.limit\n\nExample: ${prefix + command} baitfood`)
 var anu = args[1]
  if (args[0] === 'potion'){
  let noh = 100000 * anu
 if (!args[1]) return reply(`Example : ${prefix + command} potion 2\n 1 Potion = 100000 Money`)
 if (isMonay < noh) return reply('Your Remaining Money Is Not Sufficient For This Purchase')
 kurangMonay(m.sender, noh)
 var apalu = anu * 1
 addPotion(m.sender, apalu)
  setTimeout( () => {
  reply(`Transaction Successful ✔️\n*Your Remaining Money* : ${getMonay(m.sender)}\n*Your Potion* : ${getPotion(m.sender)}`)
  }, 2000) 
 } else 
 if (args[0] === 'baitfood'){
  let noh = 5000 * anu
 if (!args[1]) return reply(`Example : ${prefix + command} baitfood 2\n 1 Bait Food = 2500 Money`)
 if (isMonay < noh) return reply('Your Remaining Money Is Not Sufficient For This Purchase')
 kurangMonay(m.sender, noh)
 var apalu = anu * 1
 addUmpan(m.sender, apalu)
  setTimeout( () => {
  reply(`Transaction Successful ✔️\n*Your Remaining Money* : ${getMonay(m.sender)}\n*Your Bait Food* : ${getUmpan(m.sender)}`)
  }, 2000) 
  } else 
  if (args[0] === 'limit'){
  let noh = 35000 * anu
 if (!args[1]) return reply(`Example : ${prefix + command} limit 2\n 1 Limit = 35000 Money`)
 if (isMonay < noh) return reply('Your Remaining Money Is Not Sufficient For This Purchase')
 kurangMonay(m.sender, noh)
 var apalu = anu * 1
 addLimit(m.sender, apalu)
  setTimeout( () => {
  reply(`Transaction Successful ✔️\n*Your Remaining Money* : ${getMonay(m.sender)}\n*Your Limit* : ${getLimit(m.sender)}`)
  }, 2000) 
  } else { reply("Incorrect Format!") }
 }
 break
 case 'sel': case 'jual':{
 if (!q) return  reply(`What Do You Want To Sell??\nExample : ${prefix + command} fish 2`)
 if (!isInventoriBuruan){ addInventoriBuruan(m.sender) } 
 if (!isInventoryMonay){ addInventoriMonay(m.sender) }
 if (!isInventory){ addInventori(m.sender) }
 var anu = args[1]
 if (args[0] === 'fish'){
 if (isIkan < anu) return reply(`You Don't Have Enough Fish(es) For This Transaction`)
 if (!args[1]) return reply(`Example : ${prefix + command} fish 2\n 1 Fish = 1500 Money`)
 kurangIkan(m.sender, anu)
 let monaynya = 1500 * anu
 addMonay(m.sender, monaynya)
  setTimeout( () => {
  reply(`Transaction Successful ✔️\n*Your Remaining Money* : ${getMonay(m.sender)}\n*Your Remaining Fish(es)* : ${getIkan(m.sender)}`)
  }, 2000) 
 } else
 if (args[0] === 'chicken'){
 if (isAyam < anu) return reply(`You Don't Have Enough Chicken(s) For This Transaction`)
 if (!args[1]) return reply(`Example : ${prefix + command} chicken 2\n 1 Chicken = 2500 Money`)
 kurangAyam(m.sender, anu)
 let monaynya = 2500 * anu
 addMonay(m.sender, monaynya)
  setTimeout( () => {
  reply(`Transaction Successful ✔️\n*Your Remaining Money* : ${getMonay(m.sender)}\n*Your Remaining Chicken* : ${getAyam(m.sender)}`)
  }, 2000) 
 } else
 if (args[0] === 'rabbit'){
 if (isKelinci < anu) return reply(`You Don't Have Enough Rabbit(s) For This Transaction`)
 if (!args[1]) return reply(`Example : ${prefix + command} rabbit 2\n 1 Rabbit = 3000 Money`)
 kurangKelinci(m.sender, anu)
 let monaynya = 3000 * anu
 addMonay(m.sender, monaynya)
  setTimeout( () => {
  reply(`Transaction Successful ✔️\n*Your Remaining Money* : ${getMonay(m.sender)}\n*Your Remaining Rabbit(s)* : ${getKelinci(m.sender)}`)
  }, 2000) 
 } else
 if (args[0] === 'sheep'){
 if (isDomba < anu) return reply(`You Don't Have Enough Sheep(s) For This Transaction`)
 if (!args[1]) return reply(`Example : ${prefix + command} domba 2\n 1 Sheep = 5000 money`)
 kurangDomba(m.sender, anu)
 let monaynya = 5000 * anu
 addMonay(m.sender, monaynya)
  setTimeout( () => {
  reply(`Transaction Successful ✔️\n*Your Remaining Money* : ${getMonay(m.sender)}\n*Your Remaining Sheep(s)* : ${getDomba(m.sender)}`)
  }, 2000) 
 } else
 if (args[0] === 'cow'){
 if (isSapi < anu) return reply(`You Don't Have Enough Cow(s) For This Transaction`)
 if (!args[1]) return reply(`Example : ${prefix + command} cow 2\n 1 Cow = 10000 Money`)
 kurangSapi(m.sender, anu)
 let monaynya = 10000 * anu
 addMonay(m.sender, monaynya)
  setTimeout( () => {
  reply(`Transaction Successful ✔️\n*Your Remaining Money* : ${getMonay(m.sender)}\n*Your Remaining Cow(s)* : ${getSapi(m.sender)}`)
  }, 2000) 
 } else
 if (args[0] === 'elephant'){
 if (isGajah < anu) return reply(`You Don't Have Enough Elephant(s) For This Transaction`)
 if (!args[1]) return reply(`Example : ${prefix + command} elephant 2\n 1 Elephant = 15000 Money`)
 kurangGajah(m.sender, anu)
 let monaynya = 15000 * anu
 addMonay(m.sender, monaynya)
  setTimeout( () => {
  reply(`Transaction Successful ✔️\n*Your Remaining Money* : ${getMonay(m.sender)}\n*Your Remaining Elephant(s)* : ${getGajah(m.sender)}`)
  }, 2000) 
 } else
 if (args[0] === 'iron'){
 if (isBesi < anu) return reply(`You Don't Have Enough Iron(s) For This Transaction`)
 if (!args[1]) return reply(`Example : ${prefix + command} iron 2\n 1 Iron = 15000 Money`)
 kurangBesi(m.sender, anu)
 let monaynya = 16000 * anu
 addMonay(m.sender, monaynya)
  setTimeout( () => {
  reply(`Transaction Successful ✔️\n*Your Remaining Money* : ${getMonay(m.sender)}\n*Your Remaining Iron(s)* : ${getBesi(m.sender)}`)
  }, 2000) 
 } else
 if (args[0] === 'gold'){
 if (isEmas < anu) return reply(`You Don't Have Enough Gold(s) For This Transaction`)
 if (!args[1]) return reply(`Example : ${prefix + command} gold 2\n 1 Gold = 50000 Money`)
 kurangEmas(m.sender, anu)
 let monaynya = 50000 * anu
 addMonay(m.sender, monaynya)
  setTimeout( () => {
  reply(`Transaction Successful ✔️\n*Your Money* : ${getMonay(m.sender)}\n*Your Remaining Gold(s)* : ${getEmas(m.sender)}`)
  }, 2000) 
 } else
 if (args[0] === 'emerald'){
 if (isEmerald < anu) return reply(`You Don't Have Enough Emerald(s) For This Transaction`)
 if (!args[1]) return reply(`Example : ${prefix + command} emerald 2\n 1 Emerald = 100000 Money`)
 kurangEmerald(m.sender, anu)
 let monaynya = 100000 * anu
 addMonay(m.sender, monaynya)
  setTimeout( () => {
  reply(`Transaction Successful ✔️\n*Your Remaining Money* : ${getMonay(m.sender)}\n*You Don't Have Enough Emerald(s) For This Transaction* : ${getEmerald(m.sender)}`)
  }, 2000) 
 } else { reply("Incorrect Format!") }

 }
 break

 case 'heal':{
if (q.includes('--help')) return reply(examkosong) 
 if (!isCekDarah < 1) return reply('You Can Only Heal When Your Blood Is 0')
 if (isCekDarah > 100) return reply('Your Blood Is Full')
 if (isPotion < 1) return reply(`You Don't Have A Potion, Try Buying It This Way #buypotion _amount_`) 
 addDarah(m.sender, 100)
 kurangPotion(m.sender, 1)
 reply('Success! Your Bood Is Full')
 }
 break
 case 'hunt': case 'hunting': {
if (q.includes('--help')) return reply(examkosong) 
 if (!isDarah){ addInventoriDarah(m.sender, DarahAwal) }
 if (isCekDarah < 1) return reply('Your Blood Is Gone, Try To Heal Using Potions') 
 if (!isInventoriBuruan){ addInventoriBuruan(m.sender) } 
  let luka = ["Pierced by a thorn while hunting","Slipped into the abyss while hunting","Scratched by a wild animal","Not careful","Entangled in roots","Fall while hunting"]
  let location = ["Jungle","Amazon forest","Tropical forest","Meadow","African forest","Mountains"]
   var ikanmu = Math.ceil(Math.random() * 10)
   var ayam = Math.ceil(Math.random() * 8)
   var kelinci = Math.ceil(Math.random() * 7)
   var dombanya = [3,0,4,0,5,4,6,0,1,0,2,3,0,3,0,1]
   var sapinya = [2,0,3,0,4,0,5,0,1,0,2,0,3,0,1]
   var gajahnya = [1,0,4,0,2,0,1,0,2,1,3,0,1]
   var domba = dombanya[Math.floor(Math.random() * dombanya.length)] 
   var sapi = sapinya[Math.floor(Math.random() * sapinya.length)] 
   var gajah = gajahnya[Math.floor(Math.random() * gajahnya.length)]    
   var lukanya = luka[Math.floor(Math.random() * luka.length)]
   var lokasinya = location[Math.floor(Math.random() * location.length)]
 if (lokasinya === 'Jungle') {
    var image = './IMGDesc/image/rimba.jpg'
   } else
 if (lokasinya === 'Amazon forest') {
    var image =  './IMGDesc/image/amazon.jpg'
   } else
 if (lokasinya === 'Tropical forest') {
    var image = './IMGDesc/image/tropis.jpg'
   } else
 if (lokasinya === 'Meadow') {
    var image = './IMGDesc/image/padang_rumput.jpg'
   } else
 if (lokasinya === 'African forest') {
    var image = './IMGDesc/image/afrika.jpg'
   } else
 if (lokasinya === 'Mountains') {
   var image = './IMGDesc/image/pegunungan.jpg'
   }
 setTimeout( () => {
  let teksehmazeh = `_[ HUNT RESULT ]_\n`
     teksehmazeh += `*🐟Fish* : ${ikanmu}\n`
     teksehmazeh += `*🐔Chicken* : ${ayam}\n`
     teksehmazeh += `*🐇Rabbit* : ${kelinci}\n`
     teksehmazeh += `*🐑Sheep* : ${domba}\n`
     teksehmazeh += `*🐄Cow* : ${sapi}\n`
     teksehmazeh += `*🐘Elephant* : ${gajah}\n\n`
     teksehmazeh += `_[ INFO ]_\n`
     teksehmazeh += `*Location* : ${lokasinya}\n`
     teksehmazeh += `*Wounded* : ${lukanya}, blood - 10\n`
     teksehmazeh += `*Remaining blood* : ${getDarah(m.sender)}\n`
    let buttons = [
      {
       buttonId: `${prefix + command}`, 
       buttonText: {
        displayText: 'Hunt Again️🏹'
      }, type: 1},
    ]
    let buttonMessage = {
      image: { url: image },
      caption: teksehmazeh,
      footer: pushname,
      buttons: buttons,
      headerType: 4
     }
     GarfieldNeural.sendMessage(from, buttonMessage, { quoted: m })      
  }, 5000)  
 setTimeout( () => {
  reply(`@${m.sender.split("@")[0]} Started Hunting In ${lokasinya}`)     
  }, 1000) 
 addIkan(m.sender, ikanmu) 
   addAyam(m.sender, ayam) 
   addKelinci(m.sender, kelinci)
   addDomba(m.sender, domba)
   addSapi(m.sender, sapi)
  addGajah(m.sender, gajah)
 kurangDarah(m.sender, 10)
 }
 break
	    case 'afk': {
                let user = global.db.data.users[m.sender]
                user.afkTime = + new Date
                user.afkReason = text
                reply(`${m.pushName} Has Gone Afk/Offline${text ? ': ' + text : ''}`)
            }
            break	
        case 'ttc': case 'ttt': case 'tictactoe': {
            let TicTacToe = require("./lib/tictactoe")
            this.game = this.game ? this.game : {}
            if (Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) return replay(`You Are Still In The Game`)
            let room = Object.values(this.game).find(room => room.state === 'WAITING' && (text ? room.name === text : true))
            if (room) {
            reply('Partner found!')
            room.o = m.chat
            room.game.playerO = m.sender
            room.state = 'PLAYING'
            let arr = room.game.render().map(v => {
            return {
            X: '❌',
            O: '⭕',
            1: '1️⃣',
            2: '2️⃣',
            3: '3️⃣',
            4: '4️⃣',
            5: '5️⃣',
            6: '6️⃣',
            7: '7️⃣',
            8: '8️⃣',
            9: '9️⃣',
            }[v]
            })
            let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

Waiting @${room.game.currentTurn.split('@')[0]}

Type *surrender* to surrender and admit defeat`
            if (room.x !== room.o) await GarfieldNeural.sendText(room.x, str, m, { mentions: parseMention(str) } )
            await GarfieldNeural.sendText(room.o, str, m, { mentions: parseMention(str) } )
            } else {
            room = {
            id: 'tictactoe-' + (+new Date),
            x: m.chat,
            o: '',
            game: new TicTacToe(m.sender, 'o'),
            state: 'WAITING'
            }
            if (text) room.name = text
            reply('Waiting For Partner' + (text ? ` Type The Command Below ${prefix}${command} ${text}` : ''))
            this.game[room.id] = room
            }
            }
            break
            case 'delttc': case 'delttt': {
            this.game = this.game ? this.game : {}
            try {
            if (this.game) {
            delete this.game
            GarfieldNeural.sendText(m.chat, `Successfully Deleted The TicTacToe Session`, m)
            } else if (!this.game) {
            reply(`TicTacToe🎮 Session Does Not Exist`)
            } else reply('?')
            } catch (e) {
            reply('Damaged')
            }
            }
            break
            case 'suitpvp': case 'suit': {
            this.suit = this.suit ? this.suit : {}
            let poin = 10
            let poin_lose = 10
            let timeout = 60000
            if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.sender))) return replay(`Complete Your Previous Suit`)
	    if (m.mentionedJid[0] === m.sender) return reply(`Can't Play With Myself !`)
            if (!m.mentionedJid[0]) return reply(`_Who Do You Want To Challenge?_\nTag The Person..\n\nExample : ${prefix}suit @${owner[1]}`, m.chat, { mentions: [owner[1] + '@s.whatsapp.net'] })
            if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.mentionedJid[0])))  reply(`The Person You Are Challenging Is Playing Suit With Someone Else :(`)
            let id = 'suit_' + new Date() * 1
            let caption = `_*SUIT PvP*_

@${m.sender.split`@`[0]} menantang @${m.mentionedJid[0].split`@`[0]} To Play Suit

Please @${m.mentionedJid[0].split`@`[0]} To Type Accept/Reject`
            this.suit[id] = {
            chat: await GarfieldNeural.sendText(m.chat, caption, m, { mentions: parseMention(caption) }),
            id: id,
            p: m.sender,
            p2: m.mentionedJid[0],
            status: 'wait',
            waktu: setTimeout(() => {
            if (this.suit[id]) GarfieldNeural.sendText(m.chat, `_Suit Time Out_`, m)
            delete this.suit[id]
            }, 60000), poin, poin_lose, timeout
            }
            }
            break
            case 'chat': {
                if (!isCreator) return replay(`${mess.owner}`)
                if (!q) return replay(`Option : 1. mute\n2. unmute\n3. archive\n4. unarchive\n5. read\n6. unread\n7. delete`)
                if (args[0] === 'mute') {
                    GarfieldNeural.chatModify({ mute: 'Infinity' }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                } else if (args[0] === 'unmute') {
                    GarfieldNeural.chatModify({ mute: null }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                } else if (args[0] === 'archive') {
                    GarfieldNeural.chatModify({  archive: true }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                } else if (args[0] === 'unarchive') {
                    GarfieldNeural.chatModify({ archive: false }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                } else if (args[0] === 'read') {
                    GarfieldNeural.chatModify({ markRead: true }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                } else if (args[0] === 'unread') {
                    GarfieldNeural.chatModify({ markRead: false }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                } else if (args[0] === 'delete') {
                    GarfieldNeural.chatModify({ clear: { message: { id: m.quoted.id, fromMe: true }} }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                }
            }
            break
	    case 'family100': {
                if ('family100'+m.chat in _family100) {
                    reply('There Are Still Unfinished Sessions!')
                    reply(false)
                }
                let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/family100.json')
                let random = anu[Math.floor(Math.random() * anu.length)]
                let hasil = `*Answer The Following Questions :*\n${random.soal}\n\nThere Is *${random.jawaban.length}* Answer ${random.jawaban.find(v => v.includes(' ')) ? `(Some Answers Have Spaces)` : ''}`.trim()
                _family100['family100'+m.chat] = {
                    id: 'family100'+m.chat,
                    pesan: await GarfieldNeural.sendText(m.chat, hasil, m),
                    ...random,
                    terjawab: Array.from(random.jawaban, () => false),
                    hadiah: 6,
                }
            }
            break
            case 'halah': case 'hilih': case 'huluh': case 'heleh': case 'holoh':
            if (!m.quoted && !text) return replay(`Send/Reply Text With Caption ${prefix + command}`)
            ter = command[1].toLowerCase()
            tex = m.quoted ? m.quoted.text ? m.quoted.text : q ? q : m.text : q ? q : m.text
            reply(tex.replace(/[aiueo]/g, ter).replace(/[AIUEO]/g, ter.toUpperCase()))
            break
            case 'guess': {
                if (!text) return replay(`Example : ${prefix + command} song\n\nOption : \n1. music\n2. picture (indo)\n3. word\n4. sentence\n5. lyrics (indo)\n6. blank (indo)`)
                if (args[0] === "song") {
                    if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) return replay(`There Are Still Unfinished Sessions`)
                    let anu = await fetchJson('https://fatiharridho.github.io/tebaklagu.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    let msg = await GarfieldNeural.sendMessage(m.chat, { audio: { url: result.link_song }, mimetype: 'audio/mpeg' }, { quoted: m })
                    GarfieldNeural.sendText(m.chat, `What Is The Name Of This Song?\n\nArtist : ${result.artist}\nTime : 60 seconds`, msg).then(() => {
                    tebaklagu[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Answer: " + result.jawaban)
                    GarfieldNeural.sendButtonText(m.chat, [{ buttonId: 'guess song', buttonText: { displayText: 'Guess The Song' }, type: 1 }], `Time Has Run Out\nAnswer:  ${tebaklagu[m.sender.split('@')[0]]}\n\nWant To Play? Press The Button Below`, GarfieldNeural.user.name, m)
                    delete tebaklagu[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'picture') {
                    if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) return replay(`There Are Still Unfinished Sessions!`)
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakgambar.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    GarfieldNeural.sendImage(m.chat, result.img, `Please Answer The Questions Above\n\nDescription : ${result.deskripsi}\nTime : 60 seconds`, m).then(() => {
                    tebakgambar[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Answer: " + result.jawaban)
                    GarfieldNeural.sendButtonText(m.chat, [{ buttonId: 'guess picture', buttonText: { displayText: 'Guess The Picture' }, type: 1 }], `Time Has Run Out\nAnswer:  ${tebakgambar[m.sender.split('@')[0]]}\n\nWant To Play Again? PressThe Button Below`, GarfieldNeural.user.name, m)
                    delete tebakgambar[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'word') {
                    if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) return replay(`There Are Still Unfinished Sessions!`)
                    let anu = await fetchJson('https://raw.githubusercontent.com/nexusnw/fungames/main/GuessTheWord.js')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    GarfieldNeural.sendText(m.chat, `Please Answer The Following Question\n\n${result.soal}\nTime : 60 seconds`, m).then(() => {
                    tebakkata[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Answer: " + result.jawaban)
                    GarfieldNeural.sendButtonText(m.chat, [{ buttonId: 'guess word', buttonText: { displayText: 'Guess The Word' }, type: 1 }], `Time Out\nAnswer:  ${tebakkata[m.sender.split('@')[0]]}\n\nWant To Play Again? PressThe Button Below`, GarfieldNeural.user.name, m)
                    delete tebakkata[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'sentence') {
                    if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) return replay(`There Are Still Unfinished Sessions!`)
                    let anu = await fetchJson('https://raw.githubusercontent.com/nexusnw/fungames/main/GuessTheSentence.js')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    GarfieldNeural.sendText(m.chat, `Please Answer The Following Question\n\n${result.soal}\nTime : 60 seconds`, m).then(() => {
                    tebakkalimat[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Answer: " + result.jawaban)
                    GarfieldNeural.sendButtonText(m.chat, [{ buttonId: 'guess sentence', buttonText: { displayText: 'Guess The Sentence' }, type: 1 }], `Time Out\nAnswer:  ${tebakkalimat[m.sender.split('@')[0]]}\n\nWant To Play Again? PressThe Button Below`, GarfieldNeural.user.name, m)
                    delete tebakkalimat[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'lyrics') {
                    if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) return replay(`There Are Still Unfinished Sessions!`)
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaklirik.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    GarfieldNeural.sendText(m.chat, `These Are The Lyrics Of Which Song? : *${result.soal}*?\nTime : 60 seconds`, m).then(() => {
                    tebaklirik[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Answer: " + result.jawaban)
                    GarfieldNeural.sendButtonText(m.chat, [{ buttonId: 'guess lyrics', buttonText: { displayText: 'Guess The Lyrics' }, type: 1 }], `Time Out\nAnswer:  ${tebaklirik[m.sender.split('@')[0]]}\n\Want To Play Again? PressThe Button Below`, GarfieldNeural.user.name, m)
                    delete tebaklirik[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'blank') {
                    if (caklontong.hasOwnProperty(m.sender.split('@')[0])) return replay(`There Are Still Unfinished Sessions!`)
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/caklontong.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    GarfieldNeural.sendText(m.chat, `*Answer The Following Questions :*\n${result.soal}*\nTime : 60 seconds`, m).then(() => {
                    caklontong[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
		    caklontong_desk[m.sender.split('@')[0]] = result.deskripsi
                    })
                    await sleep(60000)
                    if (caklontong.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Answer: " + result.jawaban)
                    GarfieldNeural.sendButtonText(m.chat, [{ buttonId: 'guess blank', buttonText: { displayText: 'Guess The Blank' }, type: 1 }], `Time Out\nAnswer:  ${caklontong[m.sender.split('@')[0]]}\nDescription : ${caklontong_desk[m.sender.split('@')[0]]}\n\Want To Play Again? PressThe Button Below`, GarfieldNeural.user.name, m)
                    delete caklontong[m.sender.split('@')[0]]
		    delete caklontong_desk[m.sender.split('@')[0]]
                    }
                }
            }
            break
		
	case 'react': {
                if (!isCreator) throw mess.owner
                reactionMessage = {
                    react: {
                        text: args[0],
                        key: { remoteJid: m.chat, fromMe: true, id: quoted.id }
                    }
                }
                GarfieldNeural.sendMessage(m.chat, reactionMessage)
            }
            break
		
		
            case 'kuismath': case 'math': {
                if (kuismath.hasOwnProperty(m.sender.split('@')[0])) return replay(`There Are Still Unfinished Sessions!`)
                let { genMath, modes } = require('./lib/math')
                if (!text) return replay(`Mode: ${Object.keys(modes).join(' | ')}\nFor Examples: ${prefix}math medium`)
                let result = await genMath(text.toLowerCase())
                GarfieldNeural.sendText(m.chat, `*What Is The Result Of: ${result.soal.toLowerCase()}*?\n\nTime: ${(result.waktu / 1000).toFixed(2)} second`, m).then(() => {
                    kuismath[m.sender.split('@')[0]] = result.jawaban
                })
                await sleep(result.waktu)
                if (kuismath.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Answer: " + result.jawaban)
                    reply("Time Out\nAnswer: " + kuismath[m.sender.split('@')[0]])
                    delete kuismath[m.sender.split('@')[0]]
                }
            }
            break
            case 'mysoulmate': {
            if (!m.isGroup) return replay(`${mess.group}`)
            let member = participants.map(u => u.id)
            let me = m.sender
            let jodoh = member[Math.floor(Math.random() * member.length)]
            let jawab = `👫Your Match Is

@${me.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`
            let ments = [me, jodoh]
            let buttons = [
                        { buttonId: '❤️', buttonText: { displayText: '❤️' }, type: 1 }
                    ]
                    await GarfieldNeural.sendButtonText(m.chat, buttons, jawab, GarfieldNeural.user.name, m, {mentions: ments})
            }
            break
            case 'couple': {
            if (!m.isGroup) return replay(`${mess.group}`)
            let member = participants.map(u => u.id)
            let orang = member[Math.floor(Math.random() * member.length)]
            let jodoh = member[Math.floor(Math.random() * member.length)]
            let jawab = `@${orang.split('@')[0]} ❤️ @${jodoh.split('@')[0]}
ඕක සතියයි 😼`
            let menst = [orang, jodoh]
            let buttons = [
                        { buttonId: '❤️', buttonText: { displayText: '❤️' }, type: 1 }
                    ]
                    await GarfieldNeural.sendButtonText(m.chat, buttons, jawab, GarfieldNeural.user.name, m, {mentions: menst})
            }
            break
            case 'is':
				if (!text) return replay(`Use Text, Example : ${prefix + command} he married `)
					const apa = [`Yes`, `No`, `It Could Be`, `Thats right`]
					const kah = apa[Math.floor(Math.random() * apa.length)]
GarfieldNeural.sendMessage(from, { text: `Question : Is ${q}\nAnswer : ${kah}` }, { quoted: m })

					break
					            case 'what':
				if (!text) return replay(`Use Text, Example : ${prefix + command} he married `)
					const lel = [`Ask Your Gf`, `I Dont Know`, `I Don't Know, Ask Your Father`]
					const kahk = lel[Math.floor(Math.random() * lel.length)]
GarfieldNeural.sendMessage(from, { text: `Question : What ${q}\nAnswer : ${kahk}` }, { quoted: m })

					break
case 'can':
				if (!text) return replay(`Use Text, Example : ${prefix + command} you fuck her lol `)
					const bisa = [`Can`,`Can't`,`Cannot`,`Of Course You Can!!!`]
					const ga = bisa[Math.floor(Math.random() * bisa.length)]
GarfieldNeural.sendMessage(from, { text: `Question : Can ${q}\nAnswer : ${ga}` }, { quoted: m })

					break
case 'how':
				if (!text) return replay(`Use Text, Example : ${prefix + command} is my face`)
					const gimana = [`It's Okay`, `It's Difficult Bro`, `Sorry Bot Can't Answer`, `Try Searching On Google`,`Holy Cow! Really???`,`Dizzy Ah`,`Ohhh I See:(`,`The Patient, Boss:(`,`How Are You?`]
					const ya = gimana[Math.floor(Math.random() * gimana.length)]
GarfieldNeural.sendMessage(from, { text: `Question : ${q}\nAnswer : How ${ya}` }, { quoted: m })

					break
case 'rate':
				if (!text) return replay(`Use Text, Example : ${prefix + command} My Dp`)
					const ra = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const te = ra[Math.floor(Math.random() * ra.length)]
GarfieldNeural.sendMessage(from, { text: `Rate : ${q}\nAnswer : *${te}%*` }, { quoted: m })

					break
  case 'handsomecheck':
				if (!text) return replay(`Tag Someone, Example : ${prefix + command} @Zenoi`)
					const gan = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const teng = gan[Math.floor(Math.random() * gan.length)]
GarfieldNeural.sendMessage(from, { text: `*${command}*\n\nName : ${q}\nAnswer : *${teng}%*` }, { quoted: m })

					break
case 'beautifulcheck':
				if (!text) return replay(`Tag Someone, Example : ${prefix + command} @Zenoi`)
					const can = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const tik = can[Math.floor(Math.random() * can.length)]
GarfieldNeural.sendMessage(from, { text: `*${command}*\n\nNama : ${q}\nAnswer : *${tik}%*` }, { quoted: m })

					break
case 'awesomecheck':
  case 'greatcheck':
    case 'gaycheck':
      case 'cutecheck':
        case 'lesbicheck':
          case 'lesbiancheck':
             case 'hornycheck':
                 case 'prettycheck':
                    case 'lovelycheck':
                      case 'uglycheck':
				if (!text) return replay(`Tag Someone, Example : ${prefix + command} @Zenoi`)
					const sangeh = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const sange = sangeh[Math.floor(Math.random() * sangeh.length)]
GarfieldNeural.sendMessage(from, { text: `*${command}*\n\nName : ${q}\nAnswer : *${sange}%*` }, { quoted: m })
					break
					case 'me':
case 'who':
				if (!text) return replay(`Tag Someone, Example : ${prefix + command}`)
					const sarcasm = new Array ();
    sarcasm[0] = '*ලිංගික හැසිරීමකදි හෝ මුත්‍රා කිරීමේදී වේදනාවට පත්වන්නෙක් 🐖*';
    sarcasm[1] = '*HIV ආසාදිතයෙක් 🐮*'
    sarcasm[2] = '*ලිංගික ව්‍යවසායකයෙක්*'
    sarcasm[3] = '*පිස්සෙක 🌼*'
    sarcasm[4] = '*අර්බුදයට වගකිය යුත්තා 👴🏻*'
    sarcasm[5] = '*ලිංගික බෙලහීනතාවයෙන් පෙලෙන්නෙක් 🦒*'
    sarcasm[6] = '*සමලිංගිකයෙක් 🏳️‍🌈*'
    sarcasm[6] = '*කුක්කු පෙරේතයෙක් (කිරි පිටි)🐽*'
    sarcasm[7] = '*පිරිමි ගණිකාවක් 👤*'
    sarcasm[8] = '*නාකි මයිනගෙ ලඟම ඥාතියෙක් 🐧*'
    sarcasm[10] = '*හොරෙක් 🎗️*'
    sarcasm[11] = '*මුට රිලව කිව්වත් එකයි රිලවට මුගෙ නම කිව්වත් එකයි 🐒*'
    sarcasm[12] = '*මහබැංකුව හොරාකන්න රනිල්ට උදව් කරපු කෙනා 🐗*'
    sarcasm[13] = '*බෝම්බයක් 💣*'
    sarcasm[14] = '*ලිංගික ව්‍යවසායකයෙක් 💧*'
    sarcasm[15] = '*පෙට්‍රල් ජාවාරම්කාරයෙක් 🐖*'
    sarcasm[16] = '*බැසිල්ගෙ කපුට නාවන කෙනා 🦨*'
    sarcasm[17] = '*තෙල් නැවක අයිතිකාරයෙක් 🐱*'
    sarcasm[20] = '*බෝ ගහක් 🦢*'
    sarcasm[21] = '*ලිංගික ව්‍යවසායකයෙක් 💧*'
    sarcasm[22] = '*පෙට්‍රල් ජාවාරම්කාරයෙක් 🐖*'
    sarcasm[23] = '*වැඩිපුර පිහිටා ඇති ලිංගික අවයව නිසා මානසික පීඩනයෙක් පෙලෙන්නෙක් 🐎*'
    sarcasm[24] = '*HIV ආසාදිතයෙක් 💦*'
    sarcasm[25] = '*ගොනෝරියා ආසාදිතයෙක් 💧*'
    sarcasm[26] = '*සිෆිලිස් ආසාදිතයෙක් (RIP) 💐*'
    sarcasm[27] = '*ට්‍රයිකොමෝනියාසිස් ආසාදිතයෙක්(RIP) 🏳️*'
    sarcasm[28] = '*පුරුෂ යට ඇඳුම් හොරෙක් 🩳'
    sarcasm[29] = '*Zombie කෙනෙක්  🧟‍♂️*'
    sarcasm[30] = '*මම වගේ program එකක් 👽*'
    sarcasm[31] = '*මැරෙන්න හිතුනට කවදාවත් මැරෙන්න එපා 👽*'
    const refi = sarcasm[Math.floor(Math.random() * sarcasm.length)]
					GarfieldNeural.sendMessage(from, { text: `*${pushname} ඔයා* ${refi}` }, { quoted: m })
					break
					case 'charactercheck':
					if (!text) return replay(`Tag Someone, Example : ${prefix + command} @Zenoi`)
					const xeony =['Compassionate','Generous','Grumpy','Forgiving','Obedient','Good','Simp','Kind-Hearted','patient','UwU','top, anyway','Helpful']
					const taky = xeony[Math.floor(Math.random() * xeony.length)]
					GarfieldNeural.sendMessage(from, { text: `Character Check : ${q}\nAnswer : *${taky}*` }, { quoted: m })
				     break
      case 'stupid':
      case 'හුත්තා':
      case 'මෝඩ':
      case 'පිස්සා':
      case 'whotto':
      case 'whotta':
      case 'mf':
      case 'හුකන්නො':
      case 'ක්ක්ක්':
      case 'fuck':
      case 'පොන්නයා':
      case 'වේසිගෙ පුතා':
      case 'amor amor':
      case 'amor':
      case 'අමර':
      case 'අමර අමර':
      case 'boto':
      case 'කැරි බොටෝ':
      case 'කැරි බොටා':
      case 'whotto':
      case 'පකෝ':
      case 'හුත්තා':
      case 'වේසියෙ':
      case 'බොටා':
      case 'gandu':
      case 'madarchod':
      case 'බොටෝ':
      case 'wesiye':
      case 'pakaya':
      case 'hutta':
      case 'ponnaya':
      case 'පොන්නයා':
      case 'හුකහන්':
      case 'වේසි':
      case 'ක්ක්ක්ක්':
      case 'වේසිගෙ':
      case 'බිජ්ජා':
      case 'පකෝ':
      case 'හුත්තො':
      case 'hutto':
      case 'hukahan':
      case 'wesi':
      case 'behenchod':
      case 'behnchoda':
      case 'whotta':
      case 'kari bota':
      case 'පොන්න බොටා':
      case 'simp':
      case 'බොටෝ':
      case 'මෝඩ බොටා':
      case 'බොටා පොන්නයා':
      case 'වේස බොටා':
      case 'පිස්සු බොටා':
      case 'ගෙරි බොටා':
      case 'sexy':
      case 'hot': {
            if (!m.isGroup) return replay(`${mess.group}`)
            let member = participants.map(u => u.id)
            let me = m.sender
            let jodoh = member[Math.floor(Math.random() * member.length)]
            let jawab = `The *${command}* Here Is Your dad`
            let ments = [me, jodoh]
            let buttons = [
                        { buttonId: '👀', buttonText: { displayText: `Yes ${command}  is his father 💩`}, type: 1 }
                    ]
                    await GarfieldNeural.sendButtonText(m.chat, buttons, jawab,`Coded by Tharindu Liyanage` , m, {mentions: ments})
            }
            break
      case 'thanks':
      case 'tnx':
      case 'තෑන්ක්ස්':
      case 'බොහොම ස්තූතියි':
      case 'thank':
      case 'tnks':{
            if (!m.isGroup) return replay(`${mess.group}`)
            let member = participants.map(u => u.id)
            let me = m.sender
            let jodoh = member[Math.floor(Math.random() * member.length)]
            let jawab = `*You are welcome 💙*`
            let ments = [me, jodoh]
            let buttons = [
                        { buttonId: '👀', buttonText: { displayText: '💙'}, type: 1 }
                    ]
                    await GarfieldNeural.sendButtonText(m.chat, buttons, jawab,`Coded by Tharindu Liyanage` , m, {mentions: ments})
            }
            break
case 'when':
				if (!text) return replay(`Use Text, Example : ${prefix + command} will i get married `)
					const kapan = ['5 More Days', '10 More Days', '15 More Days','20 More Days', '25 More Days','30 More Days','35 More Days','40 More Days','45 More Days','50 More Days','55 More Days','60 More Days','65 More Days','70 More Days','75 More Days','80 More Days','85 More Days','90 More Days','100 More Days','5 Months More', '10 Months More', '15 Months More','20 Months More', '25 Months More','30 Months More','35 Months More','40 Months More','45 Months More','50 Months More','55 Months More','60 Months More','65 Months More','70 Months More','75 Months More','80 Months More','85 Months More','90 Months More','100 Months More','1 More Year','2 More Years','3 More Years','4 More Years','5 More Years','Tomorrow','The Day After Tomorrow',`After This Command, You Too ${q}`]
					const kapankah = kapan[Math.floor(Math.random() * kapan.length)]
GarfieldNeural.sendMessage(from, { text: `Question : ${q}\nAnswer : *${kapankah}*` }, { quoted: m })
					break
case 'wangy':
              if (!text) return replay(`Use Text, Example : ${prefix + command} hinata`)
              qq = q.toUpperCase()
              awikwok = `${qq} ${qq} ${qq} ❤️ ❤️ ❤️ WANGY WANGY WANGY WANGY HU HA HU HA HU HA, aaah the smell of hair ${qq} smelly i want to smell the fragrance ${qq} AAAAAAAAH ~ Her hair.... aaah i want to stroke her hair too ~~ AAAAAH ${qq} first time out in anime is cute too ❤️ ❤️ ❤️ so AAAAAAAH ${qq} AAAAAA LUCCUUUUUUUUUUUUU............ ${qq} AAAAAAAAAAAAAAAAAAAAGH ❤️ ❤️ ❤️what ? ${qq} it's not real ? Just HELL you say ? no, no no no no no no no no no no no no no no no !! I DON'T CARE ABOUT THE REALITY, I DON'T CARE. ❤️ ❤️ ❤️ ${qq} me ... ${qq} on the laptop watching me, ${qq} .. you believe in me ? aaaaaaaaaaah thanks ${q} I don't want to give up ${qq} aaaaaah ❤️ ❤️ ❤️ YEAAAAAAAAAAAH I STILL HAVE ${qq} ALSO NOT THE SAME AAAAAAAAAAAAAAH`
             reply(awikwok)
              break
case 'checkdeath':
             if (!text) return replay(`Use Someone's Name, Example : ${prefix + command} nexus`)
              predea = await axios.get(`https://api.agify.io/?name=${q}`)
              reply(`Name : ${predea.data.name}\n*Dead At Age :* ${predea.data.age} Year.\n\n_Quick, Quick, Repent Bro, Because No One Knows About Death_`)
              break
case 'halah': case 'hilih': case 'huluh': case 'heleh': case 'holoh':
            if (!m.quoted && !text) return replay(`Send/Reply Text With Caption ${prefix + command}`)
            ter = command[1].toLowerCase()
            tex = m.quoted ? m.quoted.text ? m.quoted.text : q ? q : m.text : q ? q : m.text
            reply(tex.replace(/[aiueo]/g, ter).replace(/[AIUEO]/g, ter.toUpperCase()))
            break
            case 'reactxxx': {
                if (!isCreator) return replay(`${mess.owner}`)
                reactionMessage = {
                    react: {
                        text: args[0],
                        key: { remoteJid: m.chat, fromMe: true, id: quoted.id }
                    }
                }
                GarfieldNeural.sendMessage(m.chat, reactionMessage)
            }
            break  
            case 'join': {
                if (!isCreator) return replay(`${mess.owner}`)
                if (!text) return replay(`Enter The Group Link!`)
                if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return replay(`Invalid Link!`)
                reply(mess.wait)
                let result = args[0].split('https://chat.whatsapp.com/')[1]
                await GarfieldNeural.groupAcceptInvite(result).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
            }
            break
            case 'leave': {
                if (!isCreator) return replay(`${mess.owner}`)
                await GarfieldNeural.groupLeave(m.chat).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
            }
            break
            case 'setexif': {
               if (!isCreator) return replay(`${mess.owner}`)
               if (!text) return replay(`Example : ${prefix + command} packname|author`)
          global.packname = text.split("|")[0]
          global.author = text.split("|")[1]
          reply(`Exif Has Been Successfully Changed to\n\n${global.emoji01} Packname : ${global.packname}\n${global.emoji01} Author : ${global.author}`)
            }
            break
	case 'kick': {
		if (!m.isGroup) return replay(`${mess.group}`)
                if (!isBotAdmins) return replay(`${mess.botAdmin}`)
                if (!isAdmins) return replay(`${mess.admin}`)
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await GarfieldNeural.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
	}
	break
	case 'add': {
		if (!m.isGroup) return replay(`${mess.group}`)
                if (!isBotAdmins) return replay(`${mess.botAdmin}`)
                if (!isAdmins) return replay(`${mess.admin}`)
		let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await GarfieldNeural.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
	}
	break
	case 'promote': {
		if (!m.isGroup) return replay(`${mess.group}`)
                if (!isBotAdmins) return replay(`${mess.botAdmin}`)
                if (!isAdmins) return replay(`${mess.admin}`)
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await GarfieldNeural.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
	}
	break
	case 'demote': {
		if (!m.isGroup) return replay(`${mess.group}`)
                if (!isBotAdmins) return replay(`${mess.botAdmin}`)
                if (!isAdmins) return replay(`${mess.admin}`)
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await GarfieldNeural.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
	}
	break
        case 'block': {
		if (!isCreator) return replay(`${mess.owner}`)
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await GarfieldNeural.updateBlockStatus(users, 'block').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
	}
	break
        case 'unblock': {
		if (!isCreator) return replay(`${mess.owner}`)
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await GarfieldNeural.updateBlockStatus(users, 'unblock').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
	}
	break
	    case 'setname': case 'setgcname': case 'setsubject': {
                if (!m.isGroup) return replay(`${mess.group}`)
                if (!isBotAdmins) return replay(`${mess.botAdmin}`)
                if (!isAdmins) replay(`${mess.admin}`)
                if (!text) replay(`Where Is The Text?`)
                await GarfieldNeural.groupUpdateSubject(m.chat, text).then((res) => reply(mess.success)).catch((err) => reply(jsonformat(err)))
            }
            break
          case 'setdesc': case 'setdesk': {
                if (!m.isGroup) return replay(`${mess.group}`)
                if (!isBotAdmins) return replay(`${mess.botAdmin}`)
                if (!isAdmins) replay(`${mess.admin}`)
                if (!text) replay(`Where Is The Text?`)
                await GarfieldNeural.groupUpdateDescription(m.chat, text).then((res) => reply(mess.success)).catch((err) => reply(jsonformat(err)))
            }
            break
          case 'setbotpp': {
                if (!isCreator) return replay(`${mess.owner}`)
                if (!quoted) return replay(`Send/Reply Image With Caption ${prefix + command}`)
                if (!/image/.test(mime)) return replay(`Send/Reply Image With Caption ${prefix + command}`)
                if (/webp/.test(mime)) return replay(`Send/Reply Image With Caption ${prefix + command}`)
                let media = await GarfieldNeural.downloadAndSaveMediaMessage(quoted)
                await GarfieldNeural.updateProfilePicture(botNumber, { url: media }).catch((err) => fs.unlinkSync(media))
                reply(mess.success)
                }
                break
           case 'setgrouppp': case 'setgruppp': case 'setgcpp': {
                if (!m.isGroup) return replay(`${mess.group}`)
                if (!isAdmins) return replay(`${mess.admin}`)
                if (!quoted) return replay(`Send/Reply Image With Caption ${prefix + command}`)
                if (!/image/.test(mime)) return replay(`Send/Reply Image With Caption ${prefix + command}`)
                if (/webp/.test(mime)) return replay(`Send/Reply Image With Caption ${prefix + command}`)
                let media = await GarfieldNeural.downloadAndSaveMediaMessage(quoted)
                await GarfieldNeural.updateProfilePicture(m.chat, { url: media }).catch((err) => fs.unlinkSync(media))
                reply(mess.success)
                }
                break
            case 'tagall': {
                if (!m.isGroup) return replay(`${mess.group}`)
                if (!isBotAdmins) return replay(`${mess.botAdmin}`)
                if (!isAdmins) return replay(`${mess.admin}`)
let teks = `╚»˙·٠•●${global.emoji02} Tag All ${global.emoji02}●•٠·˙«╝ 
 
 ➲ *Message : ${q ? q : 'no message'}*\n\n`
                for (let mem of participants) {
                teks += `${global.emoji01} @${mem.id.split('@')[0]}\n`
                }
                GarfieldNeural.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m })
                }
                break
                case 'hidetag': {
            if (!m.isGroup) return replay(`${mess.group}`)
            if (!isBotAdmins) return replay(`${mess.botAdmin}`)
            if (!isAdmins) return replay(`${mess.admin}`)
            GarfieldNeural.sendMessage(m.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted: m })
            }
            break
	    case 'style': case 'styletext': {
	        if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) //wont response when limit runs out\\
		db.data.users[m.sender].limit -= 1 // -1 limit
		let { styletext } = require('./lib/scraper')
		if (!text) return replay(`Enter Query Text!`)
                let anu = await styletext(text)
                let teks = `Entered Text ${text}\n\n`
                for (let i of anu) {
                    teks += `${global.emoji01} *${i.name}* : ${i.result}\n\n`
                }
                reply(teks)
	    }
	    break
               case 'vote': {
            if (!m.isGroup) return replay(`${mess.group}`)
            if (m.chat in vote) replay(`_There Are Still Votes In This Chat!_\n\n*${prefix}delvote* - To Delete Vote Session`)
            if (!text) return replay(`Enter Reason For Vote, Example: *${prefix + command} Handsome Owner*`)
            reply(`Voting Starts!\n\n*${prefix}upvote* - For Upvote\n*${prefix}devote* - For Devote\n*${prefix}checkvote* - To Check The Vote\n*${prefix}delvote* - To Delete Vote Session`)
            vote[m.chat] = [q, [], []]
            await sleep(1000)
            upvote = vote[m.chat][1]
            devote = vote[m.chat][2]
            teks_vote = `*「 VOTE 」*

*Reason:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
┃╠ Total: ${vote[m.chat][1].length}
│
│ 
└────

┌〔 DEVOTE 〕
│ 
┃╠ Total: ${vote[m.chat][2].length}
│
│ 
└────

*${prefix}delvote* - To Delete Vote Session`
let buttonsVote = [
  {buttonId: `${prefix}upvote`, buttonText: {displayText: 'Upvote'}, type: 1},
  {buttonId: `${prefix}devote`, buttonText: {displayText: 'Devote'}, type: 1}
]

            let buttonMessageVote = {
                text: teks_vote,
                footer: GarfieldNeural.user.name,
                buttons: buttonsVote,
                headerType: 1
            }
            GarfieldNeural.sendMessage(m.chat, buttonMessageVote)
	    }
            break
               case 'upvote': {
            if (!m.isGroup) return replay(`${mess.group}`)
            if (!(m.chat in vote)) return replay(`_*No Voting In This Group!*_\n\n*${prefix}vote* - To Start Voting`)
            isVote = vote[m.chat][1].concat(vote[m.chat][2])
            wasVote = isVote.includes(m.sender)
            if (wasVote) replay(`You've Voted`)
            vote[m.chat][1].push(m.sender)
            menvote = vote[m.chat][1].concat(vote[m.chat][2])
            teks_vote = `*「 VOTE 」*

*Reason:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
┃╠ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `┃╠ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DEVOTE 〕
│ 
┃╠ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `┃╠ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}delvote* - To Delete Vote Session`
            let buttonsUpvote = [
              {buttonId: `${prefix}upvote`, buttonText: {displayText: 'Upvote'}, type: 1},
              {buttonId: `${prefix}devote`, buttonText: {displayText: 'Devote'}, type: 1}
            ]

            let buttonMessageUpvote = {
                text: teks_vote,
                footer: GarfieldNeural.user.name,
                buttons: buttonsUpvote,
                headerType: 1,
                mentions: menvote
             }
            GarfieldNeural.sendMessage(m.chat, buttonMessageUpvote)
	    }
             break
                case 'devote': {
            if (!m.isGroup) return replay(`${mess.group}`)
            if (!(m.chat in vote)) return replay(`_*No Voting In This Group!*_\n\n*${prefix}vote* - To Start Voting`)
            isVote = vote[m.chat][1].concat(vote[m.chat][2])
            wasVote = isVote.includes(m.sender)
            if (wasVote) return replay(`You've Voted`)
            vote[m.chat][2].push(m.sender)
            menvote = vote[m.chat][1].concat(vote[m.chat][2])
            teks_vote = `*「 VOTE 」*

*Reason:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
┃╠ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `┃╠ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DEVOTE 〕
│ 
┃╠ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `┃╠ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}delvote* - To Delete Vote Session`
            let buttonsDevote = [
              {buttonId: `${prefix}upvote`, buttonText: {displayText: 'Upvote'}, type: 1},
              {buttonId: `${prefix}devote`, buttonText: {displayText: 'Devote'}, type: 1}
            ]

            let buttonMessageDevote = {
                text: teks_vote,
                footer: GarfieldNeural.user.name,
                buttons: buttonsDevote,
                headerType: 1,
                mentions: menvote
            }
            GarfieldNeural.sendMessage(m.chat, buttonMessageDevote)
	}
            break
                 
case 'checkvote':
if (!m.isGroup) return replay(`${mess.group}`)
if (!(m.chat in vote)) return replay(`_*No Voting In This Group!*_\n\n*${prefix}vote* - To Start Voting`)
teks_vote = `*「 VOTE 」*

*Reason:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
┃╠ Total: ${upvote.length}
${vote[m.chat][1].map((v, i) => `┃╠ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DEVOTE 〕
│ 
┃╠ Total: ${devote.length}
${vote[m.chat][2].map((v, i) => `┃╠ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}delvote* - To Delete Vote Session


© 𝖯𝗈𝗐𝖾𝗋𝖾𝖽 𝖡𝗒 𝖦𝖺𝗋𝖿𝗂𝖾𝗅𝖽 𝖡𝗈𝗍
`
GarfieldNeural.sendTextWithMentions(m.chat, teks_vote, m)
break
		case 'deletevote': case'delvote': case 'hapusvote': {
            if (!m.isGroup) return replay(`${mess.group}`)
            if (!(m.chat in vote)) return replay(`_*No Voting In This Group!*_\n\n*${prefix}vote* - To Start Voting`)
            delete vote[m.chat]
            reply('Successfully Deleted The Vote Session In This Group')
	    }
            break
               case 'group': case 'grup': {
                if (!m.isGroup) return replay(`${mess.group}`)
                if (!isBotAdmins) return replay(`${mess.botAdmin}`)
                if (!isAdmins) return replay(`${mess.admin}`)
                if (args[0] === 'close'){
                    await GarfieldNeural.groupSettingUpdate(m.chat, 'announcement').then((res) => reply(`Successful Closing The Group`)).catch((err) => reply(jsonformat(err)))
                } else if (args[0] === 'open'){
                    await GarfieldNeural.groupSettingUpdate(m.chat, 'not_announcement').then((res) => reply(`Successful Opening The Group`)).catch((err) => reply(jsonformat(err)))
                } else {
                let buttons = [
                        { buttonId: 'group open', buttonText: { displayText: 'Open' }, type: 1 },
                        { buttonId: 'group close', buttonText: { displayText: 'Close' }, type: 1 }
                    ]
                    await GarfieldNeural.sendButtonText(m.chat, buttons, `Group Mode`, GarfieldNeural.user.name, m)

             }
            }
            break
            case 'editinfo': {
                if (!m.isGroup) return replay(`${mess.group}`)
                if (!isBotAdmins) return replay(`${mess.botAdmin}`)
                if (!isAdmins) return replay(`${mess.admin}`)
             if (args[0] === 'open'){
                await GarfieldNeural.groupSettingUpdate(m.chat, 'unlocked').then((res) => reply(`Successfully Opened Edit Group Info`)).catch((err) => reply(jsonformat(err)))
             } else if (args[0] === 'close'){
                await GarfieldNeural.groupSettingUpdate(m.chat, 'locked').then((res) => reply(`Successfully Closed Edit Group Info`)).catch((err) => reply(jsonformat(err)))
             } else {
             let buttons = [
                        { buttonId: 'editinfo open', buttonText: { displayText: 'Open' }, type: 1 },
                        { buttonId: 'editinfo close', buttonText: { displayText: 'Close' }, type: 1 }
                    ]
                    await GarfieldNeural.sendButtonText(m.chat, buttons, `Mode Edit Info`, GarfieldNeural.user.name, m)

            }
            }
            break
            case 'antilink': {
                if (!m.isGroup) return replay(`${mess.group}`)
                if (!isBotAdmins) return replay(`${mess.botAdmin}`)
                if (!isAdmins) return replay(`${mess.admin}`)
                if (args[0] === "on") {
                if (db.data.chats[m.chat].antilink) return reply(`Activated`)
                db.data.chats[m.chat].antilink = true
                reply(`Antilink Active !`)
                } else if (args[0] === "off") {
                if (!db.data.chats[m.chat].antilink) return reply(`Deactivated`)
                db.data.chats[m.chat].antilink = false
                reply(`Antilink Inactive !`)
                } else {
                 let buttons = [
                        { buttonId: 'antilink on', buttonText: { displayText: 'On' }, type: 1 },
                        { buttonId: 'antilink off', buttonText: { displayText: 'Off' }, type: 1 }
                    ]
                    await GarfieldNeural.sendButtonText(m.chat, buttons, `Antilink Mode`, GarfieldNeural.user.name, m)
                }
             }
             break
             case 'mute': {
                if (!m.isGroup) return replay(`${mess.group}`)
                if (!isBotAdmins) return replay(`${mess.botAdmin}`)
                if (!isAdmins) return replay(`${mess.admin}`)
                if (args[0] === "on") {
                if (db.data.chats[m.chat].mute) return reply(`Previously Active`)
                db.data.chats[m.chat].mute = true
                reply(`${GarfieldNeural.user.name} Has Been Muted In This Group !`)
                } else if (args[0] === "off") {
                if (!db.data.chats[m.chat].mute) return reply(`Previously Inactive`)
                db.data.chats[m.chat].mute = false
                reply(`${GarfieldNeural.user.name} Has Been Unmuted In This Group!`)
                } else {
                 let buttons = [
                        { buttonId: 'mute on', buttonText: { displayText: 'On' }, type: 1 },
                        { buttonId: 'mute off', buttonText: { displayText: 'Off' }, type: 1 }
                    ]
                    await GarfieldNeural.sendButtonText(m.chat, buttons, `Mute Bot`, GarfieldNeural.user.name, m)
                }
             }
             break
            case 'linkgroup': case 'linkgc': case 'gclink': case 'grouplink': {
                if (!m.isGroup) return replay(`${mess.group}`)
                let response = await GarfieldNeural.groupInviteCode(m.chat)
                GarfieldNeural.sendText(m.chat, `https://chat.whatsapp.com/${response}\n\n${groupMetadata.subject} Group Link`, m, { detectLink: true })
            }
            break
            case 'ephemeral': {
                if (!m.isGroup) replay(`${mess.group}`)
                if (!isBotAdmins) return replay(`${mess.botAdmin}`)
                if (!isAdmins) return replay(`${mess.admin}`)
                if (!text) return replay(`Enter The enable/disable Values`)
                if (args[0] === 'enable') {
                    await GarfieldNeural.sendMessage(m.chat, { disappearingMessagesInChat: WA_DEFAULT_EPHEMERAL }).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                } else if (args[0] === 'disable') {
                    await GarfieldNeural.sendMessage(m.chat, { disappearingMessagesInChat: false }).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                }
            }
            break
            case 'delete': case 'del': {
                if (!m.quoted) reply(false)
                let { chat, fromMe, id, isBaileys } = m.quoted
                if (!isBaileys) return replay(`The Message Was Not Sent By A Bot!`)
                GarfieldNeural.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
            }
            break
            case 'bcgc': case 'bcgroup': {
                if (!isCreator) return replay(`${mess.owner}`)
                if (!text) return replay(`Where Is The Text?\n\nExample : ${prefix + command} Nexus Handsome`)
                let getGroups = await GarfieldNeural.groupFetchAllParticipating()
                let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
                let anu = groups.map(v => v.id)
                reply(`Sent Broadcast To ${anu.length} Group Chat, Finish Time ${anu.length * 1.5} Seconds`)
                for (let i of anu) {
                    await sleep(1500)
                    let btn = [{
                                urlButton: {
                                    displayText: 'Script 🌈',
                                    url: `${sc}`
                                }
                            }, {
                                urlButton: {
                                    displayText: 'Follow Us ℹ️ ',
                                    url: `${myweb}`
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Menu 🦋',
                                    id: 'menu'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'owner 🦋',
                                    id: 'owner'
                                }
                            }]
                      let txt = `© 𝖯𝗈𝗐𝖾𝗋𝖾𝖽 𝖡𝗒 𝖦𝖺𝗋𝖿𝗂𝖾𝗅𝖽 𝖡𝗈𝗍\n\n${text}`
                      GarfieldNeural.send5ButImg(i, txt, GarfieldNeural.user.name, global.thumb, btn)
                    }
                reply(`Successful Sending Broadcast To ${anu.length} Group(s)`)
            }
            break
            case 'bc': case 'broadcast': case 'bcall': {
                if (!isCreator) return replay(`${mess.owner}`)
                if (!text) return replay(`Where Is The Text?\n\nExample : ${prefix + command} Nexus`)
                let anu = await store.chats.all().map(v => v.id)
                reply(`Send Broadcast To ${anu.length} Chat\nFinish Time ${anu.length * 1.5} Seconds`)
		for (let yoi of anu) {
		    await sleep(1500)
		    let btn = [{
                                urlButton: {
                                    displayText: 'Script 🌈',
                                    url: `${sc}`
                                }
                            }, {
                                urlButton: {
                                    displayText: 'Follow Us ℹ️ ',
                                    url: `${myweb}`
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Menu 🦋',
                                    id: 'menu'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'owner 🦋',
                                    id: 'owner'
                                }
                            }]
                      let txt = `© 𝖯𝗈𝗐𝖾𝗋𝖾𝖽 𝖡𝗒 𝖦𝖺𝗋𝖿𝗂𝖾𝗅𝖽 𝖡𝗈𝗍\n\n${text}`
                      GarfieldNeural.send5ButImg(yoi, txt, GarfieldNeural.user.name, global.thumb, btn)
		}
		reply('Broadcast Success')
            }
            break
            case 'chatinfo': case 'infochat': {
                if (!m.quoted) return reply(`Reply Message`)
                let msg = await m.getQuotedObj()
                if (!m.quoted.isBaileys) return replay(`The Message Was Not Sent By A Bot!`)
                let teks = ''
                for (let i of msg.userReceipt) {
                    let read = i.readTimestamp
                    let unread = i.receiptTimestamp
                    let waktu = read ? read : unread
                    teks += `${global.emoji01} @${i.userJid.split('@')[0]}\n`
                    teks += ` ┗━${global.emoji01} *Time :* ${moment(waktu * 1000).format('DD/MM/YY HH:mm:ss')} ${global.emoji01} *Status :* ${read ? 'Read' : 'Sent'}\n\n`
                }
                GarfieldNeural.sendTextWithMentions(m.chat, teks, m)
            }
            break
            case 'q': case 'quoted': {
		if (!m.quoted) return reply('Reply Message!!')
		let wokwol = await GarfieldNeural.serializeM(await m.getQuotedObj())
		if (!wokwol.quoted) return reply('The Message You Replied To Does Not Contain A Reply')
		await wokwol.quoted.copyNForward(m.chat, true)
            }
	    break
            case 'listpc': case 'pclist': {
                 let anu = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)
                 let teks = `⬣ *PERSONAL CHAT LIST*\n\nTotal Chat : ${anu.length} Chat\n\n`
                 for (let i of anu) {
                     let nama = store.messages[i].array[0].pushName
                     teks += `${global.emoji02} *Name :* ${nama}\n${global.emoji02} *User :* @${i.split('@')[0]}\n${global.emoji02} *Chat :* https://wa.me/${i.split('@')[0]}\n\n────────────────────────\n\n`
                 }
                 GarfieldNeural.sendTextWithMentions(m.chat, teks, m)
             }
             break
                case 'listgc': case 'gclist': {
                 let anu = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
                 let teks = `⬣ *GROUP CHAT LIST*\n\nTotal Group : ${anu.length} Group\n\n`
                 for (let i of anu) {
                     let metadata = await GarfieldNeural.groupMetadata(i)
                     teks += `${global.emoji02} *Name :* ${metadata.subject}\n${global.emoji02} *Owner :* @${metadata.owner.split('@')[0]}\n${global.emoji02} *ID :* ${metadata.id}\n${global.emoji02} *Made :* ${moment(metadata.creation * 1000).tz('Asia/Kolkata').format('DD/MM/YYYY HH:mm:ss')}\n${global.emoji02} *Member :* ${metadata.participants.length}\n\n────────────────────────\n\n`
                 }
                 GarfieldNeural.sendTextWithMentions(m.chat, teks, m)
             }
             break
             case 'listonlinexxx': case 'onlinelistxxx': {
                    let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
                    let online = [...Object.keys(store.presences[id]), botNumber]
                    GarfieldNeural.sendText(m.chat, 'Online List:\n\n' + online.map(v => '🦋 @' + v.replace(/@.+/, '')).join`\n`, m, { mentions: online })
             }
             break
            case 'sticker': case 's': case 'stickergif': case 'sgif': {
            if (!quoted) return replay(`Reply Video/Image With Caption ${prefix + command}`)
            reply(mess.wait)
                    if (/image/.test(mime)) {
                let media = await quoted.download()
                let encmedia = await GarfieldNeural.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
                await fs.unlinkSync(encmedia)
            } else if (/video/.test(mime)) {
                if ((quoted.msg || quoted).seconds > 11) return reply('Maximum 10 Seconds!')
                let media = await quoted.download()
                let encmedia = await GarfieldNeural.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
                await fs.unlinkSync(encmedia)
            } else {
                reply(`Send Image/Video With Caption ${prefix + command}\nVideo Duration 1-9 Seconds`)
                }
            }
            break
case 'smemex': case 'stickermemex': case 'stickmemex': {
let { TelegraPh } = require('./lib/uploader')
if (!text) return reply(`Send/Reply Photo With Caption ${prefix + command} *Text*`)
if (text.includes('|')) return reply(`Send/Reply Photo With Caption ${prefix + command} *Text*`)
if (!/image/.test(mime)) return reply(`Send/Reply Photo With Caption ${prefix + command} *Text*`)
reply(mess.wait)
mee = await GarfieldNeural.downloadAndSaveMediaMessage(quoted)
mem = await TelegraPh(mee)
meme = `https://api.memegen.link/images/custom/-/${text}.png?background=${mem}`
memek = await GarfieldNeural.sendImageAsSticker(m.chat, meme, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(memek)
}
break
            case 'ebinary': {
            if (!m.quoted.text && !text) return replay(`Reply Text With Caption ${prefix + command}`)
            let { eBinary } = require('./lib/binary')
            let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text
            let eb = await eBinary(teks)
            reply(eb)
        }
        break
            case 'dbinary': {
            if (!m.quoted.text && !text) return replay(`Reply Text With Caption ${prefix + command}`)
            let { dBinary } = require('./lib/binary')
            let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text
            let db = await dBinary(teks)
            reply(db)
        }
        break
            case 'emojimix': {
	        if (!text) return replay(`Example : ${prefix + command} 😅+🤔`)
		let [emoji1, emoji2] = text.split`+`
		let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
		for (let res of anu.results) {
		    let encmedia = await GarfieldNeural.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
		    await fs.unlinkSync(encmedia)
		}
	    }
	    break
            case 'image': case 'img': {
                if (!quoted) return reply(`Reply Image`)
                if (!/webp/.test(mime)) reply(`Reply Sticker With Caption *${prefix + command}*`)
                reply(mess.wait)
                let media = await GarfieldNeural.downloadAndSaveMediaMessage(quoted)
                let ran = await getRandom('.png')
                exec(`ffmpeg -i ${media} ${ran}`, (err) => {
                    fs.unlinkSync(media)
                    if (err) reply(err)
                    let buffer = fs.readFileSync(ran)
                    GarfieldNeural.sendMessage(m.chat, { image: buffer }, { quoted: m })
                    fs.unlinkSync(ran)
                })
            }
            break
	        case 'mp4': case 'video': {
                if (!quoted) reply(`Reply Image`)
                if (!/webp/.test(mime)) return replay(`Reply Sticker With Caption *${prefix + command}*`)
                reply(mess.wait)
		let { webp2mp4File } = require('./lib/uploader')
                let media = await GarfieldNeural.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await GarfieldNeural.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' } }, { quoted: m })
                await fs.unlinkSync(media)
            }
            break
            case 'aud': case 'audio': {
            if (!/video/.test(mime) && !/audio/.test(mime)) return replay(`Send/Reply Video/Audio You Want To Use As Audio With Caption ${prefix + command}`)
            if (!quoted) return reply(`Send/Reply Video/Audio You Want To Convert To Audio With Caption ${prefix + command}`)
            reply(mess.wait)
            let media = await quoted.download()
            let { toAudio } = require('./lib/converter')
            let audio = await toAudio(media, 'mp4')
            GarfieldNeural.sendMessage(m.chat, {audio: audio, mimetype: 'audio/mpeg'}, { quoted : m })
            }
            break
            case 'mp3': {
            if (/document/.test(mime)) return reply(`Send/Reply Video/Audio You Want to Convert Into MP3 With Caption ${prefix + command}`)
            if (!/video/.test(mime) && !/audio/.test(mime)) return replay(`Send/Reply Video/Audio You Want To Convert into MP3 With Caption ${prefix + command}`)
            if (!quoted) return replay(`Send/Reply Video/Audio You Want To Convert Into MP3 With Caption ${prefix + command}`)
            reply(mess.wait)
            let media = await quoted.download()
            let { toAudio } = require('./lib/converter')
            let audio = await toAudio(media, 'mp4')
            GarfieldNeural.sendMessage(m.chat, {document: audio, mimetype: 'audio/mpeg', fileName: `Converted By ${GarfieldNeural.user.name}.mp3`}, { quoted : m })
            }
            break
            case 'vn': case 'ptt': {
            if (!/video/.test(mime) && !/audio/.test(mime)) return reply(`Reply Video/Audio That You Want To Be VN With Caption ${prefix + command}`)
            if (!quoted) return reply(`Reply Video/Audio That You Want To Be VN With Caption ${prefix + command}`)
            reply(mess.wait)
            let media = await quoted.download()
            let { toPTT } = require('./lib/converter')
            let audio = await toPTT(media, 'mp4')
            GarfieldNeural.sendMessage(m.chat, {audio: audio, mimetype:'audio/mpeg', ptt:true }, {quoted:m})
            }
            break
            case 'gif': {
                if (!quoted) return reply(`Reply Image`)
                if (!/webp/.test(mime)) return reply(`Reply Sticker With Caption *${prefix + command}*`)
                reply(mess.wait)
		let { webp2mp4File } = require('./lib/uploader')
                let media = await GarfieldNeural.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await GarfieldNeural.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' }, gifPlayback: true }, { quoted: m })
                await fs.unlinkSync(media)
            }
            break
	        case 'url': {
                reply(mess.wait)
		        let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
                let media = await GarfieldNeural.downloadAndSaveMediaMessage(quoted)
                if (/image/.test(mime)) {
                    let anu = await TelegraPh(media)
                    reply(util.format(anu))
                } else if (!/image/.test(mime)) {
                    let anu = await UploadFileUgu(media)
                    reply(util.format(anu))
                }
                await fs.unlinkSync(media)
            }
            break
            case 'imagenobg': case 'removebg': case 'remove-bg': {
	    if (!quoted) return replay(`Send/Reply Image With Caption ${prefix + command}`)
	    if (!/image/.test(mime)) return replay(`Send/Reply Image With Caption ${prefix + command}`)
	    if (/webp/.test(mime)) return replay(`Send/Reply Image With Caption ${prefix + command}`)
	    let remobg = require('remove.bg')
	    let apirnobg = ['dwyboZDpuSSgbKSgMpwKbXxa','dwyboZDpuSSgbKSgMpwKbXxa']
	    let apinobg = apirnobg[Math.floor(Math.random() * apirnobg.length)]
	    hmm = await './X628/remobg-'+getRandom('')
	    localFile = await GarfieldNeural.downloadAndSaveMediaMessage(quoted, hmm)
	    outputFile = await './X628/hremo-'+getRandom('.png')
	    reply(mess.wait)
	    remobg.removeBackgroundFromImageFile({
	      path: localFile,
	      apiKey: apinobg,
	      size: "regular",
	      type: "auto",
	      scale: "100%",
	      outputFile 
	    }).then(async result => {
	    GarfieldNeural.sendMessage(m.chat, {image: fs.readFileSync(outputFile), caption: mess.success}, { quoted : m })
	    await fs.unlinkSync(localFile)
	    await fs.unlinkSync(outputFile)
	    })
	    }
	    break
	    case 'yts': case 'ytsearch': {
                if (!text) return replay(`Example : ${prefix + command} Anime Story Whatsapp`)
                let yts = require("yt-search")
                let search = await yts(text)
                let teks = '*YouTube Search*\n\n *Result From* '+text+'\n\n'
                let no = 1
                for (let i of search.all) {
                    teks += `${global.emoji01} *No* : ${no++}\n${global.emoji01} *Type* : ${i.type}\n${global.emoji01} *Video ID* : ${i.videoId}\n${global.emoji01} *Title* : ${i.title}\n${global.emoji01} *Views* : ${i.views}\n${global.emoji01} *Duration* : ${i.timestamp}\n${global.emoji01} *Uploaded On* : ${i.ago}\n${global.emoji01} *URL* : ${i.url}\n\n─────────────────\n\n`
                }
                GarfieldNeural.sendMessage(m.chat, { image: { url: search.all[0].thumbnail },  caption: teks }, { quoted: m })
            }
            break
        case 'google': {
                if (!text) return reply(`Example : ${prefix + command} Sri Lanka`)
                let google = require('google-it')
                google({'query': text}).then(res => {
                let teks = `Google Search Title : ${text}\n\n`
                for (let g of res) {
                teks += `${global.emoji01} *Title* : ${g.title}\n`
                teks += `${global.emoji01} *Description* : ${g.snippet}\n`
                teks += `${global.emoji01} *Link* : ${g.link}\n\n────────────────────────\n\n`
                } 
                reply(teks)
                })
                }
                break
        case 'photo': case 'googleimage': {
        if (!text) return reply(`Example : ${prefix + command} Sri Lanka`)
        let gis = require('g-i-s')
        gis(text, async (error, result) => {
        n = result
        images = n[Math.floor(Math.random() * n.length)].url
        let buttons = [
                    {buttonId: `gimage ${text}`, buttonText: {displayText: 'Next Image ➡️'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: images },
                    caption: `*${global.botname} Image Search Engine*
🦋 *Query* : ${text}
🔗 *Media URL* : ${images}`,
                    footer: `© 𝖯𝗈𝗐𝖾𝗋𝖾𝖽 𝖡𝗒 𝖦𝖺𝗋𝖿𝗂𝖾𝗅𝖽 𝖡𝗈𝗍`,
                    buttons: buttons,
                    headerType: 4
                }
                GarfieldNeural.sendMessage(m.chat, buttonMessage, { quoted: m })
        })
        }
        break
	    case 'play': case 'song': case 'ytplay': {
                if (!text) return reply(`Example : ${prefix + command} kuweni`)
                let yts = require("yt-search")
                let search = await yts(text)
                let anu = search.videos[Math.floor(Math.random() * 1)]
                let buttons = [
                    {buttonId: `ytaudio ${anu.url}`, buttonText: {displayText: '🎶 Audio'}, type: 1},
                    {buttonId: `ytvideo ${anu.url}`, buttonText: {displayText: 'Video 📽️'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: anu.thumbnail },
                    caption:  ' ```Title``` - *' + anu.title + '*\n```Duration``` - *' + anu.timestamp + '*\n```Viewes``` - *' + anu.views + '*\n```Uploaded On``` - *' + anu.ago + '*\n```Author``` - *' + anu.author.name + '*\n```Channel``` - *' + anu.author.url + '*\n```Description``` - *' + anu.description + '*\n```URL``` - *' + anu.url + '* ',
                    footer: `© Garfield Whatsapp Bot 2022`,
                    buttons: buttons,
                    headerType: 4
                }
                GarfieldNeural.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
	    case 'ytmp3': case 'getmusic': case 'ytaudio': {
                let { yta } = require('./lib/y2mate')
                if (!text) return reply(`Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 320kbps`)
                let quality = args[1] ? args[1] : '320kbps'
                let media = await tharinduaudio(text, quality)
                if (media.filesize >= 999999) return reply('File Over Limit '+util.format(media))
                GarfieldNeural.sendImage(m.chat, media.thumb,  '```Title :``` *' + media.title + '*\n```URL :``` *' + isUrl(text) + '*\n```Quality :``` *320Kbps*\n', m)
                GarfieldNeural.sendMessage(m.chat, { audio: { url: media.dl_link }, mimetype: 'audio/mpeg', fileName: `${media.title}.mp3` }, { quoted: m })
            }
            break
            case 'ytmp4': case 'getvideo': case 'ytvideo': {
                let {  ytv } = require('./lib/y2mate')
                if (!text) return reply(`Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 360p`)
                let quality = args[1] ? args[1] : '360p'
                let media = await tharinduyt(text, quality)
                if (media.filesize >= 999999) return reply('File Over Limit '+util.format(media))
                GarfieldNeural.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption:'```Title :``` *' + media.title +'*\n```File Size :``` *' + media.filesizeF + '*\n```URL :``` *' + isUrl(text) + '*\n ```Quality  :``` *480p*\n' }, { quoted: m })
            }
            break
		    case 'getmusicxxx': {
                let { yta } = require('./lib/y2mate')
		let urls = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
                let quality = args[1] ? args[1] : '128kbps'
                let media = await yta(urls[text - 1], quality)
                if (media.filesize >= 100000) return reply('File Over Limit '+util.format(media))
                GarfieldNeural.sendImage(m.chat, media.thumb, `${global.emoji01} Title : ${media.title}\n${global.emoji01} File Size : ${media.filesizeF}\n${global.emoji01} URL : ${urls[text - 1]}\n${global.emoji01} Ext : MP3\n${global.emoji01} Resolution : ${args[1] || '128kbps'}`, m)
                GarfieldNeural.sendMessage(m.chat, { audio: { url: media.dl_link }, mimetype: 'audio/mpeg', fileName: `${media.title}.mp3` }, { quoted: m })
            }
            break
            case 'getvideoxxx': {
                let { ytv } = require('./lib/y2mate')
                if (!text) throw `Example : ${prefix + command} 1`
                if (!m.quoted) throw 'Reply Message'
                if (!m.quoted.isBaileys) throw `Can Only Reply To Meessages From Bots`
                let urls = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
                if (!urls) throw`Maybe The Message You Replied Does Not Contain The Video Search Result`
                let quality = args[1] ? args[1] : '360p'
                let media = await ytv(urls[text - 1], quality)
                if (media.filesize >= 100000) return reply('File Over Limit '+util.format(media))
                GarfieldNeural.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: `${global.emoji01} Title : ${media.title}\n${global.emoji01} File Size : ${media.filesizeF}\n${global.emoji01} URL : ${urls[text - 1]}\n${global.emoji01} Ext : MP3\n${global.emoji01} Resolution : ${args[1] || '360p'}` }, { quoted: m })
            }
            break
            case 'pinterest': {
                reply(mess.wait)
		let { pinterest } = require('./lib/scraper')
                anu = await pinterest(text)
                result = anu[Math.floor(Math.random() * anu.length)]
                GarfieldNeural.sendMessage(m.chat, { image: { url: result }, caption: '🦋 Media URL : '+result }, { quoted: m })
            }
            break
case 'webtonsearch': case 'webtoon':
                if (!text) return reply('What Are you Looking For??')
                await reply(mess.wait)
                nexusnw.Webtoons(q).then(async data => {
                    let txt = `*------「 WEBTOONS-SEARCH 」------*\n\n`
                    for (let i of data) {
                        txt += `*📫 Title :* ${i.judul}\n`
                        txt += `*👍🏻 Like :* ${i.like}\n`
                        txt += `*🤴🏻 Creator :* ${i.creator}\n`
                        txt += `*🎥 Genre :* ${i.genre}\n`
                        txt += `*📚 Url :* ${i.url}\n ----------------------------------------------------------\n`
                    }
                    await reply(txt)
                })
                .catch((err) => {
                    reply(mess.error)
                })
            break
case 'candy': case 'christmas': case '3dchristmas': case 'sparklechristmas':
case 'deepsea': case 'scifi': case 'rainbow': case 'waterpipe': case 'spooky': 
case 'pencil': case 'circuit': case 'discovery': case 'metalic': case 'fiction': case 'demon': 
case 'transformer': case 'berry': case 'thunder': case 'magma': case '3dstone': 
case 'neonlight': case 'glitch': case 'harrypotter': case 'brokenglass': case 'papercut': 
case 'watercolor': case 'multicolor': case 'neondevil': case 'underwater': case 'graffitibike':
 case 'snow': case 'cloud': case 'honey': case 'ice': case 'fruitjuice': case 'biscuit': case 'wood': 
case 'chocolate': case 'strawberry': case 'matrix': case 'blood': case 'dropwater': case 'toxic': 
case 'lava': case 'rock': case 'bloodglas': case 'hallowen': case 'darkgold': case 'joker': case 'wicker':
 case 'firework': case 'skeleton': case 'blackpink': case 'sand': case 'glue': case '1917': case 'leaves': {
              if (!q) return reply(`Example : ${prefix + command} ${global.ownername}`) 
          
             let link
             if (/candy/.test(command)) link = 'https://textpro.me/create-christmas-candy-cane-text-effect-1056.html'
             if (/christmas/.test(command)) link = 'https://textpro.me/christmas-tree-text-effect-online-free-1057.html'
             if (/3dchristmas/.test(command)) link = 'https://textpro.me/3d-christmas-text-effect-by-name-1055.html'
             if (/sparklechristmas/.test(command)) link = 'https://textpro.me/sparkles-merry-christmas-text-effect-1054.html'
             if (/deepsea/.test(command)) link = 'https://textpro.me/create-3d-deep-sea-metal-text-effect-online-1053.html'
             if (/scifi/.test(command)) link = 'https://textpro.me/create-3d-sci-fi-text-effect-online-1050.html'
             if (/rainbow/.test(command)) link = 'https://textpro.me/3d-rainbow-color-calligraphy-text-effect-1049.html'
             if (/waterpipe/.test(command)) link = 'https://textpro.me/create-3d-water-pipe-text-effects-online-1048.html'
             if (/spooky/.test(command)) link = 'https://textpro.me/create-halloween-skeleton-text-effect-online-1047.html'
             if (/pencil/.test(command)) link = 'https://textpro.me/create-a-sketch-text-effect-online-1044.html'
             if (/circuit/.test(command)) link = 'https://textpro.me/create-blue-circuit-style-text-effect-online-1043.html'
             if (/discovery/.test(command)) link = 'https://textpro.me/create-space-text-effects-online-free-1042.html'
             if (/metalic/.test(command)) link = 'https://textpro.me/creat-glossy-metalic-text-effect-free-online-1040.html'
             if (/fiction/.test(command)) link = 'https://textpro.me/create-science-fiction-text-effect-online-free-1038.html'
             if (/demon/.test(command)) link = 'https://textpro.me/create-green-horror-style-text-effect-online-1036.html'
             if (/transformer/.test(command)) link = 'https://textpro.me/create-a-transformer-text-effect-online-1035.html'
             if (/berry/.test(command)) link = 'https://textpro.me/create-berry-text-effect-online-free-1033.html'
             if (/thunder/.test(command)) link = 'https://textpro.me/online-thunder-text-effect-generator-1031.html'
             if (/magma/.test(command)) link = 'https://textpro.me/create-a-magma-hot-text-effect-online-1030.html'
             if (/3dstone/.test(command)) link = 'https://textpro.me/3d-stone-cracked-cool-text-effect-1029.html'
             if (/neonlight/.test(command)) link = 'https://textpro.me/create-3d-neon-light-text-effect-online-1028.html'
             if (/glitch/.test(command)) link = 'https://textpro.me/create-impressive-glitch-text-effects-online-1027.html'
             if (/harrypotter/.test(command)) link = 'https://textpro.me/create-harry-potter-text-effect-online-1025.html'
             if (/brokenglass/.test(command)) link = 'https://textpro.me/broken-glass-text-effect-free-online-1023.html'
             if (/papercut/.test(command)) link = 'https://textpro.me/create-art-paper-cut-text-effect-online-1022.html'
             if (/watercolor/.test(command)) link = 'https://textpro.me/create-a-free-online-watercolor-text-effect-1017.html'
             if (/multicolor/.test(command)) link = 'https://textpro.me/online-multicolor-3d-paper-cut-text-effect-1016.html'
             if (/neondevil/.test(command)) link = 'https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html'
             if (/underwater/.test(command)) link = 'https://textpro.me/3d-underwater-text-effect-generator-online-1013.html'
             if (/graffitibike/.test(command)) link = 'https://textpro.me/create-wonderful-graffiti-art-text-effect-1011.html'
             if (/snow/.test(command)) link = 'https://textpro.me/create-snow-text-effects-for-winter-holidays-1005.html'
             if (/cloud/.test(command)) link = 'https://textpro.me/create-a-cloud-text-effect-on-the-sky-online-1004.html'
             if (/honey/.test(command)) link = 'https://textpro.me/honey-text-effect-868.html'
             if (/ice/.test(command)) link = 'https://textpro.me/ice-cold-text-effect-862.html'
             if (/fruitjuice/.test(command)) link = 'https://textpro.me/fruit-juice-text-effect-861.html'
             if (/biscuit/.test(command)) link = 'https://textpro.me/biscuit-text-effect-858.html'
             if (/wood/.test(command)) link = 'https://textpro.me/wood-text-effect-856.html'
             if (/chocolate/.test(command)) link = 'https://textpro.me/chocolate-cake-text-effect-890.html'
             if (/strawberry/.test(command)) link = 'https://textpro.me/strawberry-text-effect-online-889.html'
             if (/matrix/.test(command)) link = 'https://textpro.me/matrix-style-text-effect-online-884.html'
             if (/blood/.test(command)) link = 'https://textpro.me/horror-blood-text-effect-online-883.html'
             if (/dropwater/.test(command)) link = 'https://textpro.me/dropwater-text-effect-872.html'
             if (/toxic/.test(command)) link = 'https://textpro.me/toxic-text-effect-online-901.html'
             if (/lava/.test(command)) link = 'https://textpro.me/lava-text-effect-online-914.html'
             if (/rock/.test(command)) link = 'https://textpro.me/rock-text-effect-online-915.html'
             if (/bloodglas/.test(command)) link = 'https://textpro.me/blood-text-on-the-frosted-glass-941.html'
             if (/hallowen/.test(command)) link = 'https://textpro.me/halloween-fire-text-effect-940.html'
             if (/darkgold/.test(command)) link = 'https://textpro.me/metal-dark-gold-text-effect-online-939.html'
             if (/joker/.test(command)) link = 'https://textpro.me/create-logo-joker-online-934.html'
             if (/wicker/.test(command)) link = 'https://textpro.me/wicker-text-effect-online-932.html'
             if (/firework/.test(command)) link = 'https://textpro.me/firework-sparkle-text-effect-930.html'
             if (/skeleton/.test(command)) link = 'https://textpro.me/skeleton-text-effect-online-929.html'
             if (/blackpink/.test(command)) link = 'https://textpro.me/create-blackpink-logo-style-online-1001.html'
             if (/sand/.test(command)) link = 'https://textpro.me/write-in-sand-summer-beach-free-online-991.html'
             if (/glue/.test(command)) link = 'https://textpro.me/create-3d-glue-text-effect-with-realistic-style-986.html'
             if (/1917/.test(command)) link = 'https://textpro.me/1917-style-text-effect-online-980.html'
                if (/leaves/.test(command)) link = 'https://textpro.me/natural-leaves-text-effect-931.html'
             let anu = await maker.textpro(link, q)
                GarfieldNeural.sendMessage(m.chat, { image: { url: anu }, caption: `Made by ${global.botname}, © 𝖯𝗈𝗐𝖾𝗋𝖾𝖽 𝖡𝗒 𝖦𝖺𝗋𝖿𝗂𝖾𝗅𝖽 𝖡𝗈𝗍 ` }, { quoted: m })
             }
             break
            case 'drakor':
                if (!text) return reply('What Are You Looking For??')
                await reply(mess.wait)
                nexusnw.Drakor(`${text}`).then(async data => {
                    let txt = `*-----「 DRAKOR-SEARCH 」-----*\n\n`
                    for (let i of data) {
                        txt += `*📫 Title :* ${i.judul}\n`
                        txt += `*📆 Years :* ${i.years}\n`
                        txt += `*🎥 Genre :* ${i.genre}\n`
                        txt += `*📚 Url :* ${i.url}\n-----------------------------------------------------\n`
                    }
                    await sendFileFromUrl(from,data[0].thumbnail,txt,m)
                })
                .catch((err) => {
                    reply(mess.error)
                })
            break
            case 'anime':{
                if (!text) return reply(`What Anime Are You Looking For??`)
                await reply(mess.wait)
                nexusnw.Anime(q).then(async data => {
                    let txt = `*-------「 ANIME-SEARCH 」-------*\n\n`
                    for (let i of data) {
                        txt += `*📫 Title :* ${i.judul}\n`
                        txt += `*📚 Url :* ${i.link}\n-----------------------------------------------------\n`
                    }
                    let gam = await getBuffer(data[0].thumbnail.replace('https://www.anime-planet.com',''))
                    var but = [
				{
					"urlButton": {
						"displayText": "Watch🎥",
						"url": `${myweb}`
						}
					}
				]
				await GarfieldNeural.send5ButLoc(from, txt , `© ${ownername}`,gam, but , { userJid: m.chat, quoted: m })
                })
                .catch((err) => {
                    reply(mess.error)
                })
                }
            break
            case 'character': case 'karakterxxx':
                if (!text) return reply(`What Anime Character Are You Looking For??`)
                await reply(mess.wait)
                nexusnw.Character(q).then(async data => {
                    let txt = `*---「 CHARACTER-SEARCH 」---*\n\n`
                    for (let i of data) {
                        txt += `*📫 Character :* ${i.character}\n`
                        txt += `*📚 Url :* ${i.link}\n-----------------------------------------------------\n`
                    }
                    let gam = await getBuffer(data[0].thumbnail.replace('https://www.anime-planet.com',''))
                    var but = [
				{
					"urlButton": {
						"displayText": "Follow Us ℹ️ ",
						"url": `${myweb}`
						}
					}
				]
				await GarfieldNeural.send5ButLoc(from, txt , `© ${ownername}`,gam, but , { userJid: m.chat, quoted: m })
                })
                .catch((err) => {
                    reply(mess.error)
                })
            break
            case 'manga':
                if (!text) return reply(`What Manga Are You Looking For??`)
                await reply(mess.wait)
                nexusnw.Manga(`${text}`).then(async data => {
                    let txt = `*------「 MANGA-SEARCH 」------*\n\n`
                    for (let i of data) {
                         txt += `*📫 Title :* ${i.judul}\n`
                         txt += `*📚 Url :* ${i.link}\n-----------------------------------------------------\n`
                    }
                    let gam = await getBuffer(data[0].thumbnail.replace('https://www.anime-planet.com',''))
                    var but = [
				{
					"urlButton": {
						"displayText": "Follow Us ℹ️ ",
						"url": `${myweb}`
						}
					}
				]
				await GarfieldNeural.send5ButLoc(from, txt , `© ${ownername}`,gam, but , { userJid: m.chat, quoted: m })
                })
                .catch((err) => {
                    reply(mess.error)
                })
            break
case 'textmaker': {
if (args.length < 1) return reply(`Example :\n${prefix + command} Name`)
if (args[0] === 'glitch') {
if (args.length < 2) return reply(`Example :\n${prefix + command + ' ' + args[0]} ${global.ownername}`)
let teds = await thiccysapi.textpro("https://textpro.me/create-impressive-glitch-text-effects-online-1027.html", [args[1]])
GarfieldNeural.sendMessage(from, {image:{url:teds}, caption:"Done!"}, {quoted:m})
} else if (args[0] === 'glow') {
if (args.length < 2) return reply(`Example :\n${prefix + command + ' ' + args[0]} ${global.ownername}`)
let teds = await thiccysapi.textpro("https://textpro.me/create-light-glow-sliced-text-effect-online-1068.html", [args[1]])
GarfieldNeural.sendMessage(from, {image:{url:teds}, caption:"Done!"}, {quoted:m})
} else {
reply(`*Text Maker List :*\n•> glitch\n•> glow`)
}
}
break
            case 'waifu': case 'husbu': case 'neko': case 'shinobu': case 'megumin': case 'waifus': case 'nekos': case 'trap': case 'blowjob': {
                reply(mess.wait)
                GarfieldNeural.sendMessage(m.chat, { image: { url: api('zenz', '/api/random/'+command, {}, 'apikey') }, caption: 'Generated Random ' + command }, { quoted: m })
            }
            break
	    case 'couplepp':  case 'ppcouple': {
                reply(mess.wait)
                let anu = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json')
                let random = anu[Math.floor(Math.random() * anu.length)]
                GarfieldNeural.sendMessage(m.chat, { image: { url: random.male }, caption: `Couple Male🙎🏻‍♂️` }, { quoted: m })
                GarfieldNeural.sendMessage(m.chat, { image: { url: random.female }, caption: `Couple Female🙎🏻‍♀️` }, { quoted: m })
            }
	    break
            case 'coffee': case 'kopi': {
            let buttons = [
                    {buttonId: `coffe`, buttonText: {displayText: 'Next Image ➡️'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: 'https://coffee.alexflipnote.dev/random' },
                    caption: `☕ Random Coffee`,
                    footer: GarfieldNeural.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                GarfieldNeural.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'wallpaper': {
                if (!text) return reply(`Enter Query Title`)
		let { wallpaper } = require('./lib/scraper')
                anu = await wallpaper(text)
                result = anu[Math.floor(Math.random() * anu.length)]
		let buttons = [
                    {buttonId: `wallpaper ${text}`, buttonText: {displayText: 'Next Image ➡️'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: result.image[0] },
                    caption: `${global.emoji01} Title : ${result.title}\n${global.emoji01} Category : ${result.type}\n${global.emoji01} Detail : ${result.source}\n${global.emoji01} Media URL : ${result.image[2] || result.image[1] || result.image[0]}`,
                    footer: GarfieldNeural.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                GarfieldNeural.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'wikimedia': {
                if (!text) return reply(`Enter Query Title`)
		let { wikimedia } = require('./lib/scraper')
                anu = await wikimedia(text)
                result = anu[Math.floor(Math.random() * anu.length)]
                let buttons = [
                    {buttonId: `wikimedia ${text}`, buttonText: {displayText: 'Next Image ➡️'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: result.image },
                    caption: `${global.emoji01} Title : ${result.title}\n${global.emoji01} Source : ${result.source}\n${global.emoji01} Media URL : ${result.image}`,
                    footer: GarfieldNeural.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                GarfieldNeural.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'quotesanime': case 'animequotes': case 'animequote': case 'quoteanime': {
		let { quotesAnime } = require('./lib/scraper')
                let anu = await quotesAnime()
                result = anu[Math.floor(Math.random() * anu.length)]
                let buttons = [
                    {buttonId: `quotesanime`, buttonText: {displayText: 'Next ➡️'}, type: 1}
                ]
                let buttonMessage = {
                    text: `~_${result.quotes}_\n\nBy '${result.karakter}', ${result.anime}\n\n- ${result.up_at}`,
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 2
                }
                GarfieldNeural.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
	        case 'motivasi': case 'motivationalquote': case 'bucinquote': case 'katasenja': case 'puisi': {
                let anu = await fetchJson(api('zenz', '/api/'+command, {}, 'apikey'))
                let buttons = [
                    {buttonId: `motivasi`, buttonText: {displayText: 'Next ➡️'}, type: 1}
                ]
                let buttonMessage = {
                    text: anu.result.message,
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 2
                }
                GarfieldNeural.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case '3dchristmas': case '3ddeepsea': case 'americanflag': case '3dscifi': case '3drainbow': case '3dwaterpipe': case 'halloweenskeleton': case 'sketch': case 'bluecircuit': case 'space': case 'metallic': case 'fiction': case 'greenhorror': case 'transformer': case 'berry': case 'thunder': case 'magma': case '3dcrackedstone': case '3dneonlight': case 'impressiveglitch': case 'naturalleaves': case 'fireworksparkle': case 'matrix': case 'dropwater':  case 'harrypotter': case 'foggywindow': case 'neondevils': case 'christmasholiday': case '3dgradient': case 'blackpink': case 'gluetext': {
                if (!text) return reply(`Enter Text, Example : ${prefix + command} Xeon`)
                reply(mess.wait)
                GarfieldNeural.sendMessage(m.chat, { image: { url: api('zenz', '/textpro/' + command, { text: text }, 'apikey') }, caption: `Text Pro ${command}` }, { quoted: m})
	    }
            break
	    case 'nomerhoki': case 'nomorhoki': {
                if (!Number(text)) return reply(`Example : ${prefix + command} 916909137213`)
                let anu = await primbon.nomer_hoki(Number(text))
                if (anu.status == false) return reply(anu.message)
                GarfieldNeural.sendText(m.chat, `${global.emoji01} *Phone Number :* ${anu.message.nomer_hp}\n${global.emoji01} *Shuzi Angka Figures :* ${anu.message.angka_shuzi}\n${global.emoji01} *Positive Energy :*\n- Riches : ${anu.message.energi_positif.kekayaan}\n- Health : ${anu.message.energi_positif.kesehatan}\n- Love : ${anu.message.energi_positif.cinta}\n- Stability : ${anu.message.energi_positif.kestabilan}\n- Percentage : ${anu.message.energi_positif.persentase}\n${global.emoji01} *Negative Energy :*\n- Dispute : ${anu.message.energi_negatif.perselisihan}\n- Lost : ${anu.message.energi_negatif.kehilangan}\n- Catastrophe : ${anu.message.energi_negatif.malapetaka}\n- Destruction : ${anu.message.energi_negatif.kehancuran}\n- Percentage : ${anu.message.energi_negatif.persentase}`, m)
            }
            break
            case 'artimimpi': case 'tafsirmimpi': {
                if (!text) return reply(`Example : ${prefix + command} belanja`)
                let anu = await primbon.tafsir_mimpi(text)
                if (anu.status == false) return reply(anu.message)
                GarfieldNeural.sendText(m.chat, `${global.emoji01} *Dream :* ${anu.message.mimpi}\n${global.emoji01} *Meaning :* ${anu.message.arti}\n${global.emoji01} *Solution :* ${anu.message.solusi}`, m)
            }
            break
            case 'ramalanjodoh': case 'ramaljodoh': {
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.ramalan_jodoh(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return reply(anu.message)
                GarfieldNeural.sendText(m.chat, `${global.emoji01} *Your Name :* ${anu.message.nama_anda.nama}\n${global.emoji01} *Your Birth :* ${anu.message.nama_anda.tgl_lahir}\n${global.emoji01} *Couple Name :* ${anu.message.nama_pasangan.nama}\n${global.emoji01} *Born Couple :* ${anu.message.nama_pasangan.tgl_lahir}\n${global.emoji01} *Results :* ${anu.message.result}\n${global.emoji01} *Notes :* ${anu.message.catatan}`, m)
            }
            break
            case 'ramalanjodohbali': case 'ramaljodohbali': {
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.ramalan_jodoh_bali(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return reply(anu.message)
                GarfieldNeural.sendText(m.chat, `${global.emoji01} *Your Name :* ${anu.message.nama_anda.nama}\n${global.emoji01} *Your Birth :* ${anu.message.nama_anda.tgl_lahir}\n${global.emoji01} *Couple Name :* ${anu.message.nama_pasangan.nama}\n${global.emoji01} *Born Couple :* ${anu.message.nama_pasangan.tgl_lahir}\n${global.emoji01} *Results :* ${anu.message.result}\n${global.emoji01} *Notes :* ${anu.message.catatan}`, m)
            }
            break
            case 'suamiistri': {
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.suami_istri(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return reply(anu.message)
                GarfieldNeural.sendText(m.chat, `${global.emoji01} *Husband's Name :* ${anu.message.suami.nama}\n${global.emoji01} *Husband Born :* ${anu.message.suami.tgl_lahir}\n${global.emoji01} *Wife's Name :* ${anu.message.istri.nama}\n${global.emoji01} *Born Wife :* ${anu.message.istri.tgl_lahir}\n${global.emoji01} *Results :* ${anu.message.result}\n${global.emoji01} *Notes :* ${anu.message.catatan}`, m)
            }
            break
            case 'ramalancinta': case 'ramalcinta': {
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.ramalan_cinta(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return reply(anu.message)
                GarfieldNeural.sendText(m.chat, `${global.emoji01} *Your Name :* ${anu.message.nama_anda.nama}\n${global.emoji01} *Your Birth :* ${anu.message.nama_anda.tgl_lahir}\n${global.emoji01} *Couple Name :* ${anu.message.nama_pasangan.nama}\n${global.emoji01} *Born Couple :* ${anu.message.nama_pasangan.tgl_lahir}\n${global.emoji01} *Positive Side :* ${anu.message.sisi_positif}\n${global.emoji01} *Negative Side :* ${anu.message.sisi_negatif}\n${global.emoji01} *Notes :* ${anu.message.catatan}`, m)
            }
            break
            case 'artinama': {
                if (!text) throw `Example : ${prefix + command} Dika Ardianta`
                let anu = await primbon.arti_nama(text)
                if (anu.status == false) return reply(anu.message)
                GarfieldNeural.sendText(m.chat, `${global.emoji01} *Name :* ${anu.message.nama}\n${global.emoji01} *Meaning :* ${anu.message.arti}\n${global.emoji01} *Notes :* ${anu.message.catatan}`, m)
            }
            break
            case 'kecocokannama': case 'cocoknama': {
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005`
                let [nama, tgl, bln, thn] = text.split`,`
                let anu = await primbon.kecocokan_nama(nama, tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                GarfieldNeural.sendText(m.chat, `${global.emoji01} *Name :* ${anu.message.nama}\n${global.emoji01} *Born :* ${anu.message.tgl_lahir}\n${global.emoji01} *Life Path :* ${anu.message.life_path}\n${global.emoji01} *Destiny :* ${anu.message.destiny}\n${global.emoji01} *Destiny Desire :* ${anu.message.destiny_desire}\n${global.emoji01} *Personality :* ${anu.message.personality}\n${global.emoji01} *Percentage :* ${anu.message.persentase_kecocokan}`, m)
            }
            break
            case 'kecocokanpasangan': case 'cocokpasangan': case 'pasangan': {
                if (!text) throw `Example : ${prefix + command} Dika|Novia`
                let [nama1, nama2] = text.split`|`
                let anu = await primbon.kecocokan_nama_pasangan(nama1, nama2)
                if (anu.status == false) return reply(anu.message)
                GarfieldNeural.sendImage(m.chat,  anu.message.gambar, `${global.emoji01} *Your Name :* ${anu.message.nama_anda}\n${global.emoji01} *Couple Name :* ${anu.message.nama_pasangan}\n${global.emoji01} *Positive Side :* ${anu.message.sisi_positif}\n${global.emoji01} *Negative Side :* ${anu.message.sisi_negatif}`, m)
            }
            break
            case 'jadianpernikahan': case 'jadiannikah': {
                if (!text) throw `Example : ${prefix + command} 6, 12, 2020`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.tanggal_jadian_pernikahan(tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                GarfieldNeural.sendText(m.chat, `${global.emoji01} *Wedding Date :* ${anu.message.tanggal}\n${global.emoji01} *Characteristics :* ${anu.message.karakteristik}`, m)
            }
            break
            case 'sifatusaha': {
                if (!ext)throw `Example : ${prefix+ command} 28, 12, 2021`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.sifat_usaha_bisnis(tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                GarfieldNeural.sendText(m.chat, `${global.emoji01} *Born :* ${anu.message.hari_lahir}\n${global.emoji01} *Business :* ${anu.message.usaha}`, m)
            }
            break
            case 'rejeki': case 'rezeki': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.rejeki_hoki_weton(tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                GarfieldNeural.sendText(m.chat, `${global.emoji01} *Born :* ${anu.message.hari_lahir}\n${global.emoji01} *Sustenance :* ${anu.message.rejeki}\n${global.emoji01} *Notes :* ${anu.message.catatan}`, m)
            }
            break
            case 'pekerjaan': case 'kerja': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.pekerjaan_weton_lahir(tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                GarfieldNeural.sendText(m.chat, `${global.emoji01} *Born :* ${anu.message.hari_lahir}\n${global.emoji01} *Profession :* ${anu.message.pekerjaan}\n${global.emoji01} *Notes :* ${anu.message.catatan}`, m)
            }
            break
            case 'ramalannasib': case 'ramalnasib': case 'nasib': {
                if (!text) throw `Example : 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.ramalan_nasib(tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                GarfieldNeural.sendText(m.chat, `${global.emoji01} *Analysis :* ${anu.message.analisa}\n${global.emoji01} *Root Number :* ${anu.message.angka_akar}\n${global.emoji01} *Nature :* ${anu.message.sifat}\n${global.emoji01} *Element :* ${anu.message.elemen}\n${global.emoji01} *Lucky Numbers :* ${anu.message.angka_keberuntungan}`, m)
            }
            break
            case 'potensipenyakit': case 'penyakit': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.cek_potensi_penyakit(tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                GarfieldNeural.sendText(m.chat, `${global.emoji01} *Analysis :* ${anu.message.analisa}\n${global.emoji01} *Sector :* ${anu.message.sektor}\n?? *Element :* ${anu.message.elemen}\n${global.emoji01} *Notes :* ${anu.message.catatan}`, m)
            }
            break
            case 'artitarot': case 'tarot': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.arti_kartu_tarot(tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                GarfieldNeural.sendImage(m.chat, anu.message.image, `${global.emoji01} *Born :* ${anu.message.tgl_lahir}\n${global.emoji01} *Tarot Symbol :* ${anu.message.simbol_tarot}\n${global.emoji01} *Meaning :* ${anu.message.arti}\n${global.emoji01} *Notes :* ${anu.message.catatan}`, m)
            }
            break
            case 'fengshui': {
                if (!text) throw `Example : ${prefix + command} Dika, 1, 2005\n\nNote : ${prefix + command} Name, gender, tahun lahir\nGender : 1 untuk laki-laki & 2 untuk perempuan`
                let [nama, gender, tahun] = text.split`,`
                let anu = await primbon.perhitungan_feng_shui(nama, gender, tahun)
                if (anu.status == false) return reply(anu.message)
                GarfieldNeural.sendText(m.chat, `${global.emoji01} *Name :* ${anu.message.nama}\n${global.emoji01} *Born :* ${anu.message.tahun_lahir}\n${global.emoji01} *Gender :* ${anu.message.jenis_kelamin}\n${global.emoji01} *Kua Number :* ${anu.message.angka_kua}\n${global.emoji01} *Group :* ${anu.message.kelompok}\n${global.emoji01} *Character :* ${anu.message.karakter}\n${global.emoji01} *Good Sector :* ${anu.message.sektor_baik}\n${global.emoji01} *Bad Sector :* ${anu.message.sektor_buruk}`, m)
            }
            break
            case 'haribaik': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.petung_hari_baik(tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                GarfieldNeural.sendText(m.chat, `${global.emoji01} *Born :* ${anu.message.tgl_lahir}\n${global.emoji01} *When Challenged :* ${anu.message.kala_tinantang}\n${global.emoji01} *Info :* ${anu.message.info}\n${global.emoji01} *Notes :* ${anu.message.catatan}`, m)
            }
            break
            case 'harisangar': case 'taliwangke': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.hari_sangar_taliwangke(tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                GarfieldNeural.sendText(m.chat, `${global.emoji01} *Born :* ${anu.message.tgl_lahir}\n${global.emoji01} *Results :* ${anu.message.result}\n${global.emoji01} *Info :* ${anu.message.info}\n${global.emoji01} *Notes :* ${anu.message.catatan}`, m)
            }
            break
            case 'harinaas': case 'harisial': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.primbon_hari_naas(tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                GarfieldNeural.sendText(m.chat, `${global.emoji01} *Day Of Birth :* ${anu.message.hari_lahir}\n${global.emoji01} *Date Of Birth :* ${anu.message.tgl_lahir}\n${global.emoji01} *Fateful Day :* ${anu.message.hari_naas}\n${global.emoji01} *Info :* ${anu.message.catatan}\n${global.emoji01} *Notes :* ${anu.message.info}`, m)
            }
            break
            case 'nagahari': case 'harinaga': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.rahasia_naga_hari(tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                GarfieldNeural.sendText(m.chat, `${global.emoji01} *Day Of Birth :* ${anu.message.hari_lahir}\n${global.emoji01} *Date Of Birth :* ${anu.message.tgl_lahir}\n${global.emoji01} *Dragon Day Direction :* ${anu.message.arah_naga_hari}\n${global.emoji01} *Notes :* ${anu.message.catatan}`, m)
            }
            break
            case 'arahrejeki': case 'arahrezeki': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.primbon_arah_rejeki(tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                GarfieldNeural.sendText(m.chat, `${global.emoji01} *Day Of Birth :* ${anu.message.hari_lahir}\n${global.emoji01} *Date Of Birth :* ${anu.message.tgl_lahir}\n${global.emoji01} *Sustenance Direction :* ${anu.message.arah_rejeki}\n${global.emoji01} *Notes :* ${anu.message.catatan}`, m)
            }
            break
            case 'peruntungan': {
                if (!text) throw `Example : ${prefix + command} DIka, 7, 7, 2005, 2022\n\nNote : ${prefix + command} Name, tanggal lahir, bulan lahir, tahun lahir, untuk tahun`
                let [nama, tgl, bln, thn, untuk] = text.split`,`
                let anu = await primbon.ramalan_peruntungan(nama, tgl, bln, thn, untuk)
                if (anu.status == false) return reply(anu.message)
                GarfieldNeural.sendText(m.chat, `${global.emoji01} *Name :* ${anu.message.nama}\n${global.emoji01} *Born :* ${anu.message.tgl_lahir}\n${global.emoji01} *Fortune Of The Year :* ${anu.message.peruntungan_tahun}\n${global.emoji01} *Results :* ${anu.message.result}\n${global.emoji01} *Notes :* ${anu.message.catatan}`, m)
            }
            break
            case 'weton': case 'wetonjawa': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.weton_jawa(tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                GarfieldNeural.sendText(m.chat, `${global.emoji01} *Date :* ${anu.message.tanggal}\n${global.emoji01} *Number Of Neptune :* ${anu.message.jumlah_neptu}\n${global.emoji01} *Day Character :* ${anu.message.watak_hari}\n${global.emoji01} *Dragon Day :* ${anu.message.naga_hari}\n${global.emoji01} *Good Hour :* ${anu.message.jam_baik}\n${global.emoji01} *Birth Character :* ${anu.message.watak_kelahiran}`, m)
            }
            break
            case 'sifat': case 'karakter': {
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005`
                let [nama, tgl, bln, thn] = text.split`,`
                let anu = await primbon.sifat_karakter_tanggal_lahir(nama, tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                GarfieldNeural.sendText(m.chat, `${global.emoji01} *Name :* ${anu.message.nama}\n${global.emoji01} *Born :* ${anu.message.tgl_lahir}\n${global.emoji01} *Lifeline :* ${anu.message.garis_hidup}`, m)
            }
            break
            case 'keberuntungan': {
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005`
                let [nama, tgl, bln, thn] = text.split`,`
                let anu = await primbon.potensi_keberuntungan(nama, tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                GarfieldNeural.sendText(m.chat, `${global.emoji01} *Name :* ${anu.message.nama}\n${global.emoji01} *Born :* ${anu.message.tgl_lahir}\n${global.emoji01} *Results :* ${anu.message.result}`, m)
            }
            break
            case 'memancing': {
                if (!text) throw `Example : ${prefix + command} 12, 1, 2022`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.primbon_memancing_ikan(tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                GarfieldNeural.sendText(m.chat, `${global.emoji01} *Date :* ${anu.message.tgl_memancing}\n${global.emoji01} *Results :* ${anu.message.result}\n${global.emoji01} *Notes :* ${anu.message.catatan}`, m)
            }
            break
            case 'masasubur': {
                if (!text) throw `Example : ${prefix + command} 12, 1, 2022, 28\n\nNote : ${prefix + command} First Day Of Menstruation Cycle`
                let [tgl, bln, thn, siklus] = text.split`,`
                let anu = await primbon.masa_subur(tgl, bln, thn, siklus)
                if (anu.status == false) return reply(anu.message)
                GarfieldNeural.sendText(m.chat, `${global.emoji01} *Results :* ${anu.message.result}\n${global.emoji01} *Notes :* ${anu.message.catatan}`, m)
            }
            break
            case 'zodiak': case 'zodiac': {
                if (!text) throw `Example : ${prefix+ command} 7 7 2005`
                let zodiak = [
                    ["capricorn", new Date(1970, 0, 1)],
                    ["aquarius", new Date(1970, 0, 20)],
                    ["pisces", new Date(1970, 1, 19)],
                    ["aries", new Date(1970, 2, 21)],
                    ["taurus", new Date(1970, 3, 21)],
                    ["gemini", new Date(1970, 4, 21)],
                    ["cancer", new Date(1970, 5, 22)],
                    ["leo", new Date(1970, 6, 23)],
                    ["virgo", new Date(1970, 7, 23)],
                    ["libra", new Date(1970, 8, 23)],
                    ["scorpio", new Date(1970, 9, 23)],
                    ["sagittarius", new Date(1970, 10, 22)],
                    ["capricorn", new Date(1970, 11, 22)]
                ].reverse()

                function getZodiac(month, day) {
                    let d = new Date(1970, month - 1, day)
                    return zodiak.find(([_,_d]) => d >= _d)[0]
                }
                let date = new Date(text)
                if (date == 'Invalid Date') throw date
                let d = new Date()
                let [tahun, bulan, tanggal] = [d.getFullYear(), d.getMonth() + 1, d.getDate()]
                let birth = [date.getFullYear(), date.getMonth() + 1, date.getDate()]

                let zodiac = await getZodiac(birth[1], birth[2])
                
                let anu = await primbon.zodiak(zodiac)
                if (anu.status == false) return reply(anu.message)
                GarfieldNeural.sendText(m.chat, `${global.emoji01} *Zodiac :* ${anu.message.zodiak}\n${global.emoji01} *Number :* ${anu.message.nomor_keberuntungan}\n${global.emoji01} *Aroma :* ${anu.message.aroma_keberuntungan}\n${global.emoji01} *Planet :* ${anu.message.planet_yang_mengitari}\n${global.emoji01} *Flower :* ${anu.message.bunga_keberuntungan}\n${global.emoji01} *Color :* ${anu.message.warna_keberuntungan}\n${global.emoji01} *Stone :* ${anu.message.batu_keberuntungan}\n${global.emoji01} *Element :* ${anu.message.elemen_keberuntungan}\n${global.emoji01} *Zodiac Couple :* ${anu.message.pasangan_zodiak}\n${global.emoji01} *Notes :* ${anu.message.catatan}`, m)
            }
            break
            case 'shio': {
                if (!text) throw `Example : ${prefix + command} tikus\n\nNote : For Detail https://primbon.com/shio.htm`
                let anu = await primbon.shio(text)
                if (anu.status == false) return reply(anu.message)
                GarfieldNeural.sendText(m.chat, `${global.emoji01} *Results :* ${anu.message}`, m)
            }
            break
	    case 'stalker': case 'stalk': {
		if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply('Your Daily Limit Has Expired')
                if (!text) return reply(`Example : ${prefix +command} type id\n\nList Type :\n1. ff (Free Fire)\n2. ml (Mobile Legends)\n3. aov (Arena Of Valor)\n4. cod (Call Of Duty)\n5. pb (point Blank)\n6. ig (Instagram)\n7. npm (https://npmjs.com)`)
                let [type, id, zone] = args
                if (type.toLowerCase() == 'ff') {
                    if (!id) return reply(`No Query id, Example ${prefix + command} ff 552992060`)
                    let anu = await fetchJson(api('zenz', '/api/nickff', { apikey: global.APIKeys[global.APIs['zenz']], query: id }))
                    if (anu.status == false) return reply(anu.result.message)
                    reply(`ID : ${anu.result.gameId}\nUsername : ${anu.result.userName}`)
		    db.data.users[m.sender].limit -= 1
                } else if (type.toLowerCase() == 'ml') {
                    if (!id) return reply(`No Query id, Example : ${prefix + command} ml 214885010 2253`)
                    if (!zone) return reply(`No Query id, Example : ${prefix + command} ml 214885010 2253`)
                    let anu = await fetchJson(api('zenz', '/api/nickml', { apikey: global.APIKeys[global.APIs['zenz']], query: id, query2: zone }))
                    if (anu.status == false) return reply(anu.result.message)
                    reply(`ID : ${anu.result.gameId}\nZone : ${anu.result.zoneId}\nUsername : ${anu.result.userName}`)
		    db.data.users[m.sender].limit -= 1
                } else if (type.toLowerCase() == 'aov') {
                    if (!id) return reply(`No Query id, Example ${prefix + command} aov 293306941441181`)
                    let anu = await fetchJson(api('zenz', '/api/nickaov', { apikey: global.APIKeys[global.APIs['zenz']], query: id }))
                    if (anu.status == false) return reply(anu.result.message)
                    reply(`ID : ${anu.result.gameId}\nUsername : ${anu.result.userName}`)
		    db.data.users[m.sender].limit -= 1
                } else if (type.toLowerCase() == 'cod') {
                    if (!id) return reply(`No Query id, Example ${prefix + command} cod 6290150021186841472`)
                    let anu = await fetchJson(api('zenz', '/api/nickcod', { apikey: global.APIKeys[global.APIs['zenz']], query: id }))
                    if (anu.status == false) return reply(anu.result.message)
                    reply(`ID : ${anu.result.gameId}\nUsername : ${anu.result.userName}`)
		    db.data.users[m.sender].limit -= 1
                } else if (type.toLowerCase() == 'pb') {
                    if (!id) return reply(`No Query id, Example ${prefix + command} pb riio46`)
                    let anu = await fetchJson(api('zenz', '/api/nickpb', { apikey: global.APIKeys[global.APIs['zenz']], query: id }))
                    if (anu.status == false) return reply(anu.result.message)
                    reply(`ID : ${anu.result.gameId}\nUsername : ${anu.result.userName}`)
		    db.data.users[m.sender].limit -= 1
                } else if (type.toLowerCase() == 'ig') {
                    if (!id) return reply(`No Query username, Example : ${prefix + command} ig josephxeon13`)
                    let { result: anu } = await fetchJson(api('zenz', '/api/stalker/ig', { username: id }, 'apikey'))
                    if (anu.status == false) return reply(anu.result.message)
                    GarfieldNeural.sendMedia(m.chat, anu.caption.profile_hd, '', `${global.emoji01} Full Name : ${anu.caption.full_name}\n${global.emoji01} User Name : ${anu.caption.user_name}\n${global.emoji01} ID ${anu.caption.user_id}\n${global.emoji01} Following : ${anu.caption.followers}\n${global.emoji01} Followers : ${anu.caption.following}\n${global.emoji01} Bussines : ${anu.caption.bussines}\n${global.emoji01} Professional : ${anu.caption.profesional}\n${global.emoji01} Verified : ${anu.caption.verified}\n${global.emoji01} Private : ${anu.caption.private}\n${global.emoji01} Bio : ${anu.caption.biography}\n${global.emoji01} Bio Url : ${anu.caption.bio_url}`, m)
		    db.data.users[m.sender].limit -= 1
                } else if (type.toLowerCase() == 'npm') {
                    if (!id) return reply(`No Query username, Example : ${prefix + command} npm scrape-primbon`)
                    let { result: anu } = await fetchJson(api('zenz', '/api/stalker/npm', { query: id }, 'apikey'))
                    if (anu.status == false) return reply(anu.result.message)
                    reply(`${global.emoji01} Name : ${anu.name}\n${global.emoji01} Version : ${Object.keys(anu.versions)}\n${global.emoji01} Created : ${tanggal(anu.time.created)}\n${global.emoji01} Modified : ${tanggal(anu.time.modified)}\n${global.emoji01} Maintainers :\n ${anu.maintainers.map(v => `- ${v.name} : ${v.email}`).join('\n')}\n\n${global.emoji01} Description : ${anu.description}\n${global.emoji01} Homepage : ${anu.homepage}\n${global.emoji01} Keywords : ${anu.keywords}\n${global.emoji01} Author : ${anu.author.name}\n${global.emoji01} License : ${anu.license}\n${global.emoji01} Readme : ${anu.readme}`)
		    db.data.users[m.sender].limit -= 1
                } else {
                    reply(`Example : ${prefix +command} type id\n\nList Type :\n1. ff (Free Fire)\n2. ml (Mobile Legends)\n3. aov (Arena Of Valor)\n4. cod (Call Of Duty)\n5. pb (point Blank)\n6. ig (Instagram)\n7. npm (https://npmjs.com)`)
                }
            }
            break
	        case 'tiktokd': case 'tiktoknowmx': {
                if (!text) return reply(`Enter Query Link!`)
                reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/downloader/tiktok', { url: text }, 'apikey'))
                let buttons = [
                    {buttonId: `tiktokwm ${text}`, buttonText: {displayText: '🥬With Watermark🥬'}, type: 1},
                    {buttonId: `tiktokmp3 ${text}`, buttonText: {displayText: 'Audio 🎵'}, type: 1}
                ]
                let buttonMessage = {
                    video: { url: anu.result.nowatermark },
                    caption: `Download From ${text}`,
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 5
                }
                GarfieldNeural.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'tiktokwmx': case 'tiktokwatermarkx': {
                if (!text) return reply(`Enter Query Link!`)
                reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/downloader/tiktok', { url: text }, 'apikey'))
                let buttons = [
                    {buttonId: `tiktoknowm ${text}`, buttonText: {displayText: '🥬No Watermark🥬'}, type: 1},
                    {buttonId: `tiktokmp3 ${text}`, buttonText: {displayText: 'Audio 🎵'}, type: 1}
                ]
                let buttonMessage = {
                    video: { url: anu.result.watermark },
                    caption: `Download From ${text}`,
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 5
                }
                GarfieldNeural.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'tiktokmp3x': case 'tiktokaudiox': {
                if (!text) return reply(`Enter Query Link!`)
                reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/downloader/musically', { url: text }, 'apikey'))
                let buttons = [
                    {buttonId: `tiktoknowm ${text}`, buttonText: {displayText: '🥬No Watermark🥬'}, type: 1},
                    {buttonId: `tiktokwm ${text}`, buttonText: {displayText: '🥬With Watermark🥬'}, type: 1}
                ]
                let buttonMessage = {
                    text: `Download From ${text}`,
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 2
                }
                let msg = await GarfieldNeural.sendMessage(m.chat, buttonMessage, { quoted: m })
                GarfieldNeural.sendMessage(m.chat, { audio: { url: anu.result.audio }, mimetype: 'audio/mpeg'}, { quoted: msg })
            }
            break
	        case 'instagramx': case 'igx': case 'igdlx': {
                if (!text) return reply(`No Query Url!`)
                reply(mess.wait)
                if (/(?:\/p\/|\/reel\/|\/tv\/)([^\s&]+)/.test(isUrl(text)[0])) {
                    let anu = await fetchJson(api('zenz', '/downloader/instagram2', { url: isUrl(text)[0] }, 'apikey'))
                    for (let media of anu.data) GarfieldNeural.sendMedia(m.chat, media, '', `Download Url Instagram From ${isUrl(text)[0]}`, m)
                } else if (/\/stories\/([^\s&]+)/.test(isUrl(text)[0])) {
                    let anu = await fetchJson(api('zenz', '/downloader/instastory', { url: isUrl(text)[0] }, 'apikey'))
                    GarfieldNeural.sendMedia(m.chat, anu.media[0].url, '', `Download Url Instagram From ${isUrl(text)[0]}`, m)
                }
            }
            break
		//Backup, for example, the video above doesn't come out\\
		case 'igeh': case 'instagram2x': case 'ig2': case 'igdl2': {
                if (!text) return reply(`Enter Query Link!`)
                reply(mess.wait)
                
                let anu = await fetchJson(api('zenz', '/downloader/instagram2', { url:text }, 'apikey'))
                GarfieldNeural.sendMessage(m.chat, { video: { url: anu.data[0] } }, { quoted: m })
            }
            break
            case 'joox': case 'jooxdl': {
                if (!text) return reply(`No Query Title`)
                reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/downloader/joox', { query: text }, 'apikey'))
                let msg = await GarfieldNeural.sendImage(m.chat, anu.result.img, `${global.emoji01} Title : ${anu.result.lagu}\n${global.emoji01} Album : ${anu.result.album}\n${global.emoji01} Singer : ${anu.result.penyanyi}\n${global.emoji01} Publish : ${anu.result.publish}\n${global.emoji01} Lyrics :\n${anu.result.lirik.result}`, m)
                GarfieldNeural.sendMessage(m.chat, { audio: { url: anu.result.mp4aLink }, mimetype: 'audio/mpeg', fileName: anu.result.lagu+'.m4a' }, { quoted: msg })
            }
            break
            case 'soundcloud': case 'scdl': {
                if (!text) return reply(`No Query Title`)
                reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/downloader/soundcloud', { url: isUrl(text)[0] }, 'apikey'))
                let msg = await GarfieldNeural.sendImage(m.chat, anu.result.thumb, `${global.emoji01} Title : ${anu.result.title}\n${global.emoji01} URL : ${isUrl(text)[0]}`)
                GarfieldNeural.sendMessage(m.chat, { audio: { url: anu.result.url }, mimetype: 'audio/mpeg', fileName: anu.result.title+'.m4a' }, { quoted: msg })
            }
            break
	        case 'twitdlx': case 'twitterx': {
                if (!text) return reply(`Enter Query Link!`)
                reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/api/downloader/twitter', { url: text }, 'apikey'))
                let buttons = [
                    {buttonId: `twittermp3 ${text}`, buttonText: {displayText: 'Audio 🎵'}, type: 1}
                ]
                let buttonMessage = {
                    video: { url: anu.result.HD || anu.result.SD },
                    caption: util.format(anu.result),
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 5
                }
                GarfieldNeural.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'twittermp3x': case 'twitteraudiox': {
                if (!text) return reply(`Enter Query Link!`)
                reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/api/downloader/twitter', { url: text }, 'apikey'))
                let buttons = [
                    {buttonId: `twitter ${text}`, buttonText: {displayText: 'Video 📽️'}, type: 1}
                ]
                let buttonMessage = {
		    image: { url: anu.result.thumb },
                    caption: util.format(anu.result),
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 4
                }
                let msg = await GarfieldNeural.sendMessage(m.chat, buttonMessage, { quoted: m })
                GarfieldNeural.sendMessage(m.chat, { audio: { url: anu.result.audio } }, { quoted: msg })
            }
            break
	        case 'fbdlx': case 'fbx': case 'facebookx': {
                if (!text) return reply(`Enter Query Link!`)
                reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/api/downloader/facebook', { url: text }, 'apikey'))
                GarfieldNeural.sendMessage(m.chat, { video: { url: anu.result.url }, caption: `${global.emoji01} Title : ${anu.result.title}`}, { quoted: m })
            }
            break
	        case 'pindl': case 'pinterestdl': {
                if (!text) return reply(`Enter Query Link!`)
                reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/api/downloader/pinterestdl', { url: text }, 'apikey'))
                GarfieldNeural.sendMessage(m.chat, { video: { url: anu.result }, caption: `Download From ${text}` }, { quoted: m })
            }
            break
            case 'umma': case 'ummadl': {
	        if (!text) return reply(`Example : ${prefix + command} https://umma.id/channel/video/post/gus-arafat-sumber-kecewa-84464612933698`)
                let { umma } = require('./lib) scraper')
		let anu = await umma(isUrl(text)[0])
		if (anu.type == 'video') {
		    let buttons = [
                        {buttonId: `ytmp3 ${anu.media[0]} 128kbps`, buttonText: {displayText: 'Audio 🎵'}, type: 1},
                        {buttonId: `ytmp4 ${anu.media[0]} 360p`, buttonText: {displayText: 'Video 📽️'}, type: 1}
                    ]
		    let buttonMessage = {
		        image: { url: anu.author.profilePic },
			caption: `
${global.emoji01} Title : ${anu.title}
${global.emoji01} Author : ${anu.author.name}
${global.emoji01} Like : ${anu.like}
${global.emoji01} Caption : ${anu.caption}
${global.emoji01} URL : ${anu.media[0]}
To Download Media, Please Click One Of The Buttons Below Or Enter The ytmp3/ytmp4 Command With The Url Above
`,
			footer: GarfieldNeural.user.name,
			buttons,
			headerType: 4
		    }
		    GarfieldNeural.sendMessage(m.chat, buttonMessage, { quoted: m })
		} else if (anu.type == 'image') {
		    anu.media.map(async (url) => {
		        GarfieldNeural.sendMessage(m.chat, { image: { url }, caption: `${global.emoji01} Title : ${anu.title}\n${global.emoji01} Author : ${anu.author.name}\n${global.emoji01} Like : ${anu.like}\n${global.emoji01} Caption : ${anu.caption}` }, { quoted: m })
		    })
		}
	    }
	    break
        case 'ringtone': {
		if (!text) return reply(`Example : ${prefix + command} black rover`)
        let { ringtone } = require('./lib/scraper')
		let anu = await ringtone(text)
		let result = anu[Math.floor(Math.random() * anu.length)]
		GarfieldNeural.sendMessage(m.chat, { audio: { url: result.audio }, fileName: result.title+'.mp3', mimetype: 'audio/mpeg' }, { quoted: m })
	    }
	    break
		case 'iqraxxx': {
		oh = `Example : ${prefix + command} 3\n\nIQRA Which Is Available : 1,2,3,4,5,6`
		if (!text) return reply(oh)
		yy = await getBuffer(`https://islamic-api-indonesia.herokuapp.com/api/data/pdf/iqra${text}`)
		GarfieldNeural.sendMessage(m.chat, {document: yy, mimetype: 'application/pdf', fileName: `iqra${text}.pdf`}, {quoted:m}).catch ((err) => reply(oh))
		}
		break
		case 'juzamma': {
		if (args[0] === 'pdf') {
		reply(mess.wait)
		GarfieldNeural.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.pdf'}, mimetype: 'application/pdf', fileName: 'juz-amma-arab-latin-indonesia.pdf'}, {quoted:m})
		} else if (args[0] === 'docx') {
		reply(mess.wait)
		GarfieldNeural.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.docx'}, mimetype: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', fileName: 'juz-amma-arab-latin-indonesia.docx'}, {quoted:m})
		} else if (args[0] === 'pptx') {
		reply(mess.wait)
		GarfieldNeural.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.pptx'}, mimetype: 'application/vnd.openxmlformats-officedocument.presentationml.presentation', fileName: 'juz-amma-arab-latin-indonesia.pptx'}, {quoted:m})
		} else if (args[0] === 'xlsx') {
		reply(mess.wait)
		GarfieldNeural.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.xlsx'}, mimetype: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', fileName: 'juz-amma-arab-latin-indonesia.xlsx'}, {quoted:m})
		} else {
		reply(`What Format Do You Want? ? Example : ${prefix + command} pdf

Available Formats: pdf, docx, pptx, xlsx`)
		}
		}
		break
		case 'hadisxxx': case 'hadistxxx': {
		if (!args[0]) return reply(`Example:
${prefix + command} bukhari 1
${prefix + command} abu-daud 1

Options Available:
abu-daud
1 - 4590
ahmad
1 - 26363
bukhari
1 - 7008
darimi
1 - 3367
ibu-majah
1 - 4331
nasai
1 - 5662
malik
1 - 1594
muslim
1 - 5362`)
		if (!args[1]) return reply(`Which Hadith??\n\nExample:\n${prefix + command} muslim 1`)
		try {
		let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/json/hadith/${args[0]}`)
		let { number, arab, id } = res.find(v => v.number == args[1])
		reply(`No. ${number}

${arab}

${id}`)
		} catch (e) {
		reply(`Hadith Not Found !`)
		}
		}
		break
		case 'alquranxxx': {
		if (!args[0]) return reply(`Usage Examples:\n${prefix + command} 1 2\n\nThen The Result Is Surah Al-Fatihah Verse 2 Along With The Audio, And The Verse Is Just 1`)
		if (!args[1]) return reply(`Usage Examples:\n${prefix + command} 1 2\n\nThen The Result Is Surah Al-Fatihah Verse 2 Along With The Audio, And The Verse Is Just 1`)
		let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/quran?surah=${args[0]}&ayat=${args[1]}`)
		let txt = `*Arab* : ${res.result.data.text.arab}
*English* : ${res.result.data.translation.en}
*Indonesia* : ${res.result.data.translation.id}

( Q.S ${res.result.data.surah.name.transliteration.id} : ${res.result.data.number.inSurah} )`
		reply(txt)
		GarfieldNeural.sendMessage(m.chat, {audio: { url: res.result.data.audio.primary }, mimetype: 'audio/mpeg'}, { quoted : m })
		}
		break
		case 'tafsirsurahxxx': {
		if (!args[0]) return reply(`Usage Examples:\n${prefix + command} 1 2\n\nThen The Result Is The Interpretation Of Surah Al-Fatihah Verse 2`)
		if (!args[1]) return reply(`Usage Examples:\n${prefix + command} 1 2\n\nThen The Result Is The Interpretation Of Surah Al-Fatihah Verse 2`)
		let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/quran?surah=${args[0]}&ayat=${args[1]}`)
		let txt = `「 *Tafsir Surah*  」

*Short* : ${res.result.data.tafsir.id.short}

*Long* : ${res.result.data.tafsir.id.long}

( Q.S ${res.result.data.surah.name.transliteration.id} : ${res.result.data.number.inSurah} )`
		reply(txt)
		}
		break
		   case 'bass': case 'blown': case 'deep': case 'earrape': case 'fast': case 'fat': case 'nightcore': case 'reverse': case 'robot': case 'slow': case 'smooth': case 'squirrel':
                try {
                let set
                if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
                if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
                if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
                if (/earrape/.test(command)) set = '-af volume=12'
                if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
                if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
                if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
                if (/reverse/.test(command)) set = '-filter_complex "areverse"'
                if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
                if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
                if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
                if (/tupai/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
                if (/audio/.test(mime)) {
                reply(mess.wait)
                let media = await GarfieldNeural.downloadAndSaveMediaMessage(quoted)
                let ran = getRandom('.mp3')
                exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
                fs.unlinkSync(media)
                if (err) return reply(err)
                let buff = fs.readFileSync(ran)
                GarfieldNeural.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : m })
                fs.unlinkSync(ran)
                })
                } else reply(`Reply To The Audio You Want To Change With Caption *${prefix + command}*`)
                } catch (e) {
                reply(e)
                }
                break
            case 'setcmd': {
                if (!m.quoted) return reply(`Reply Message!`)
                if (!m.quoted.fileSha256) return reply(`SHA256 Hash Missing`)
                if (!text) return reply(`For What Command?`)
                let hash = m.quoted.fileSha256.toString('base64')
                if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) return reply(`You Have No Permission To Change This Sticker Command`)
                global.db.data.sticker[hash] = {
                    text,
                    mentionedJid: m.mentionedJid,
                    creator: m.sender,
                    at: + new Date,
                    locked: false,
                }
                reply(`Done!`)
            }
            break
            case 'delcmd': {
                let hash = m.quoted.fileSha256.toString('base64')
                if (!hash) return reply(`No Hashes`)
                if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) return reply(`You Have No Permission To Delete This Sticker Command`)
                delete global.db.data.sticker[hash]
                reply(`Done!`)
            }
            break
            case 'listcmd': {
                let teks = `
*Hash List*
Info: *bold* hash is Locked
${Object.entries(global.db.data.sticker).map(([key, value], index) => `${index + 1}. ${value.locked ? `*${key}*` : key} : ${value.text}`).join('\n')}
`.trim()
                GarfieldNeural.sendText(m.chat, teks, m, { mentions: Object.values(global.db.data.sticker).map(x => x.mentionedJid).reduce((a,b) => [...a, ...b], []) })
            }
            break
            case 'lockcmd': {
                if (!isCreator) return replay(`${mess.owner}`)
                if (!m.quoted) return reply(`Reply Message!`)
                if (!m.quoted.fileSha256) return reply(`SHA256 Hash Missing`)
                let hash = m.quoted.fileSha256.toString('base64')
                if (!(hash in global.db.data.sticker)) return reply(`Hash Not Found In Database`)
                global.db.data.sticker[hash].locked = !/^un/i.test(command)
                reply('Done!')
            }
            break
            case 'addmsg': {
                if (!m.quoted) return reply(`Reply Message You Want To Save In Database`)
                if (!text) return reply(`Example : ${prefix + command} File Name`)
                let msgs = global.db.data.database
                if (text.toLowerCase() in msgs) return reply(`'${text}' Has Been Registered In The Message List`)
                msgs[text.toLowerCase()] = quoted.fakeObj
reply(`Successfully Added Message In Message List As '${text}'
    
Access With ${prefix}getmsg ${text}

View List Of Messages With ${prefix}listmsg`)
            }
            break
            case 'getmsg': {
                if (!text) return reply(`Example : ${prefix + command} file name\n\nView Message List With ${prefix}listmsg`)
                let msgs = global.db.data.database
                if (!(text.toLowerCase() in msgs)) return reply(`'${text}' Not Listed In The Message List`)
                GarfieldNeural.copyNForward(m.chat, msgs[text.toLowerCase()], true)
            }
            break
            case 'listmsg': {
                let msgs = JSON.parse(fs.readFileSync('./database/database.json'))
	        let seplit = Object.entries(global.db.data.database).map(([nama, isi]) => { return { nama, ...isi } })
		let teks = '「 DATABASE LIST 」\n\n'
		for (let i of seplit) {
		    teks += `${global.emoji02} *Name :* ${i.nama}\n${global.emoji02} *Type :* ${getContentType(i.message).replace(/Message/i, '')}\n────────────────────────\n\n`
	        }
	        reply(teks)
	    }
	    break
            case 'delmsg': case 'deletemsg': {
	        let msgs = global.db.data.database
	        if (!(text.toLowerCase() in msgs)) return reply(`'${text}' Not Listed In The Message List`)
		delete msgs[text.toLowerCase()]
		reply(`Delete Successfully '${text}' From The Message list`)
            }
	    break
	    case 'anonymous': {
                if (m.isGroup) return reply('Features Cannot Be Used For Groups!')
				this.anonymous = this.anonymous ? this.anonymous : {}
				let buttons = [
                    { buttonId: 'Start', buttonText: { displayText: 'Start 🍿' }, type: 1 }
                ]
                GarfieldNeural.sendButtonText(m.chat, buttons, `\`\`\`Hi ${await GarfieldNeural.getName(m.sender)} Welcome To Anonymous Chat\n\nClick The Button Below To Find A Partner\`\`\``, GarfieldNeural.user.name, m)
            }
			break
            case 'keluar': case 'leave': {
                if (m.isGroup) return reply('Features Cannot Be Used For Groups!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                let room = Object.values(this.anonymous).find(room => room.check(m.sender))
                if (!room) {
                    let buttons = [
                        { buttonId: 'start', buttonText: { displayText: 'Start 🍿' }, type: 1 }
                    ]
                    await GarfieldNeural.sendButtonText(m.chat, buttons, `\`\`\`You Are Not In An Anonymous Session, Press The Button To Find A Partner \`\`\``)
                   reply(false)
                }
                reply('Ok')
                let other = room.other(m.sender)
                if (other) await GarfieldNeural.sendText(other, `\`\`\`Partner Has Left Anonymous Session\`\`\``, m)
                delete this.anonymous[room.id]
                if (command === 'leave') break
            }
            case 'mulai': case 'start': {
                if (m.isGroup) return reply('Features Cannot Be Used For Groups!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                if (Object.values(this.anonymous).find(room => room.check(m.sender))) {
                    let buttons = [
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop 🛑' }, type: 1 }
                    ]
                    await GarfieldNeural.sendButtonText(m.chat, buttons, `\`\`\`You Are Still In An Anonymous Session, Press The Button Below To Terminate Your Anonymous Session\`\`\``, GarfieldNeural.user.name, m)
                    reply(false)
                }
                let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
                if (room) {
                    let buttons = [
                        { buttonId: 'next', buttonText: { displayText: 'Skip ⏩' }, type: 1 },
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop 🛑' }, type: 1 }
                    ]
                    await GarfieldNeural.sendButtonText(room.a, buttons, `\`\`\`Successfully Found Partner, Now You Can Send Message\`\`\``, GarfieldNeural.user.name, m)
                    room.b = m.sender
                    room.state = 'CHATTING'
                    await GarfieldNeural.sendButtonText(room.b, buttons, `\`\`\`Successfully Found Partner, Now You Can Send Message\`\`\``, GarfieldNeural.user.name, m)
                } else {
                    let id = + new Date
                    this.anonymous[id] = {
                        id,
                        a: m.sender,
                        b: '',
                        state: 'WAITING',
                        check: function (who = '') {
                            return [this.a, this.b].includes(who)
                        },
                        other: function (who = '') {
                            return who === this.a ? this.b : who === this.b ? this.a : ''
                        },
                    }
                    let buttons = [
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop 🛑' }, type: 1 }
                    ]
                    await GarfieldNeural.sendButtonText(m.chat, buttons, `\`\`\`Please Wait, Looking For A Partner\`\`\``, GarfieldNeural.user.name, m)
                }
                break
            }
            case 'next': case 'lanjut': {
                if (m.isGroup) return reply('Features Cannot Be Used For Groups!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                let romeo = Object.values(this.anonymous).find(room => room.check(m.sender))
                if (!romeo) {
                    let buttons = [
                        { buttonId: 'start', buttonText: { displayText: 'Start 🍿' }, type: 1 }
                    ]
                    await GarfieldNeural.sendButtonText(m.chat, buttons, `\`\`\`You Are Not In An Anonymous Session, Press The Button To Find A Partner\`\`\``)
                    reply(false)
                }
                let other = romeo.other(m.sender)
                if (other) await GarfieldNeural.sendText(other, `\`\`\`Partner Has Left Anonymous Session\`\`\``, m)
                delete this.anonymous[romeo.id]
                let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
                if (room) {
                    let buttons = [
                        { buttonId: 'next', buttonText: { displayText: 'Skip ⏩' }, type: 1 },
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop 🛑' }, type: 1 }
                    ]
                    await GarfieldNeural.sendButtonText(room.a, buttons, `\`\`\`Successfully Found Partner, Now You Can Send Message\`\`\``, GarfieldNeural.user.name, m)
                    room.b = m.sender
                    room.state = 'CHATTING'
                    await GarfieldNeural.sendButtonText(room.b, buttons, `\`\`\`Successfully Found Partner, Now You Can Send Message\`\`\``, GarfieldNeural.user.name, m)
                } else {
                    let id = + new Date
                    this.anonymous[id] = {
                        id,
                        a: m.sender,
                        b: '',
                        state: 'WAITING',
                        check: function (who = '') {
                            return [this.a, this.b].includes(who)
                        },
                        other: function (who = '') {
                            return who === this.a ? this.b : who === this.b ? this.a : ''
                        },
                    }
                    let buttons = [
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop 🛑' }, type: 1 }
                    ]
                    await GarfieldNeural.sendButtonText(m.chat, buttons, `\`\`\`Please Wait, Looking For A Partner\`\`\``, GarfieldNeural.user.name, m)
                }
                break
            }
            case 'public': {
                if (!isCreator) return replay(`${mess.owner}`)
                GarfieldNeural.public = true
                reply('Successful Change To Public Usage')
            }
            break
            case 'self': {
                if (!isCreator) return replay(`${mess.owner}`)
                GarfieldNeural.public = false
                reply('Successful Change To Self Usage')
            }
                      break
            case 'creator': {
                GarfieldNeural.sendContact(m.chat, global.owner, m)
            }
            break
case 'cry':case 'kill':case 'hug':case 'pat':case 'lick':case 'kiss':case 'bite':case 'yeet':case 'neko':case 'bully':case 'bonk':case 'wink':case 'poke':case 'nom':case 'slap':case 'smile':case 'wave':case 'awoo':case 'blush':case 'smug':case 'glomp':case 'happy':case 'dance':case 'cringe':case 'cuddle':case 'highfive':case 'shinobu':case 'megumin':case 'handhold':
					reply(mess.wait)
					axios.get(`https://api.waifu.pics/sfw/${command}`)
					.then(({data}) => {
						GarfieldNeural.sendImageAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
					})
					break
				case 'waifu': case 'loli':
					reply(mess.wait)
					axios.get(`https://api.waifu.pics/sfw/waifu`)
					.then(({data}) => {
					GarfieldNeural.sendImage(m.chat, data.url, mess.success, m)
					})
					break
case "setmenuxxx": 
if (!text) return reply("1. image\n2. list\n3. catalog\n\nExample .setmenu image")
if (q == "image") {
typemenu = 'image'
reply("Success Changing Menu To "+q)
} else if (q == "list") {
typemenu = 'list'
reply("Success Changing Menu To "+q)
} else if (q == "catalog") {
typemenu = 'catalog'
reply("Success Changing Menu To "+q)
}
                    break
                      case 'list': case 'menu': case 'bot' : case 'alive' :
            var unicorn = await getBuffer(global.thumb)
await GarfieldNeural.send5ButImg(from, `` + '' + ' ', `
┌─
│ Hi  ${pushname} 👋 
│ ${global.botname}
│ ${global.emoji02} 𝗦𝗽𝗲𝗲𝗱 : 0.00117 miliseconds
│ ${global.emoji02} 𝗥𝘂𝗻𝘁𝗶𝗺𝗲 : ${runtime(process.uptime())}
│ ${global.emoji02} 𝗕𝗼𝘁 𝗡𝗮𝗺𝗲 : ${global.botname} 
│ ${global.emoji02} 𝗢𝘄𝗻𝗲𝗿 𝗡𝗮𝗺𝗲 : ${global.ownername}
│ ${global.emoji02} 𝗢𝘄𝗻𝗲𝗿 𝗡𝘂𝗺𝗯𝗲𝗿 : ${global.owner}
│ ${global.emoji02} 𝗛𝗼𝘀𝘁 𝗡𝗮𝗺𝗲 : ${global.ownername}
│ ${global.emoji02} 𝗣𝗹𝗮𝘁𝗳𝗼𝗿𝗺 : ${os.platform()}
│ ${global.emoji02} 𝗧𝗼𝘁𝗮𝗹 𝗨𝘀𝗲𝗿 : ${Object.keys(global.db.data.users).length}
│ ️${global.botname}  Created by ${global.ownername}  🪁
│  𝖯𝗈𝗐𝖾𝗋𝖾𝖽 𝖻𝗒 𝖦𝖺𝗋𝖿𝗂𝖾𝗅𝖽 𝖡𝗈𝗍 𝗏8.2                   
└┬──────────────
   │ Ｘ- ＮＯＤＥＳ
   └───────────────`,unicorn, [{"urlButton": {"displayText": "Follow Us ℹ️ ","url": `${myweb}`}},{"urlButton": {"displayText": "Script 🌈","url": `${sc}`}},{"quickReplyButton": {"displayText": "All Menu 🎉","id": 'allmenu'}},{"quickReplyButton": {"displayText": "List Menu 🧬","id": 'command'}},{"quickReplyButton": {"displayText": "Owner 🦋","id": 'owner'}}] )
                          break
                    case 'command': {
let template = await generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                listMessage :{
                    title: `Hi ${pushname}`,
                    description: `Please Choose The Menu ${global.emoji02}\n\n`,
                    buttonText: "Menu",
                    footerText: `${global.botname} 𝖯𝗈𝗐𝖾𝗋𝖾𝖽 𝖡𝗒 𝖦𝖺𝗋𝖿𝗂𝖾𝗅𝖽 𝖡𝗈𝗍`,
                    listType: "SINGLE_SELECT",
                    sections: [{
								"title": "Main Features",
								"rows": [
									{
										"title": "Main Menu 🦋",
										"description": "Displays The List Of Main Features of Garfield Bot",
										"rowId": `mainmenu`
									}
								]
							},
							{
								"title": "GarfieldBot Features 🌻",
								"rows": [
									{
										"title": "All Menu 🦁",
										"description": "Displays The List Of All The Features!",
										"rowId": `${prefix}allmenu`
									},
									{
										"title": "Owner Menu 🐣",
										"description": "Displays The List Of Owner Features",
										"rowId": `${prefix}ownermenu`
										},
									{
										"title": "Group Menu 🐻",
										"description": "Displays The List Of Main Features",
										"rowId": `${prefix}groupmenu`
										},
									{
										"title": "RPG Menu 🍄",
										"description": "Displays The List Of Rpg Features",
										"rowId": `${prefix}rpgmenu`
									},
									{
										"title": "Download Menu ⬇️",
										"description": "Displays The List Of Download Features",
										"rowId": `downloadmenu`
									},
									{
										"title": "Search Menu 🔍",
										"description": "Displays The List Of Searching Features",
										"rowId": `searchmenu`
									},
									{
											"title": "Random Menu 🎯",
										"description": "Displays The List Of Random Features",
										"rowId": `randommenu`
										},
										{
											"title": "Random Anime Menu 🥀",
										"description": "Displays The List Of Random Anime Features",
										"rowId": `randomanimemenu`
										},
										{
											"title": "Fun Menu 🪁",
										"description": "Displays The List Of Fun Features",
										"rowId": `funmenu`
										},
										{
											"title": "Convert Menu 🔄",
										"description": "Displays The List Of Convert Features",
										"rowId": `${prefix}convertmenu`
										},
										{
											"title": "Database Menu 📡",
										"description": "Displays The List Of Database Features",
										"rowId": `${prefix}databasemenu`
										},
										{
											"title": "Voice Changer Menu 🎙️",
										"description": "Displays The List Of Voice Changing Features",
										"rowId": `${prefix}voicechangermenu`
										},
										{
											"title": "TXT-to-IMG Menu 📰",
										"description": "Displays The List Of Textpro Features",
										"rowId": `${prefix}textpromenu`
										},
										{
											"title": "Religious Menu 🚮",
										"description": "Displays The List Of Islamic Features",
										"rowId": `${prefix}islamicmenu`
										},
										{
											"title": "Horoscope Menu 🐻",
										"description": "Displays The List Of Horoscope Features",
										"rowId": `${prefix}horoscopemenu`
										}
								]
							},
							{
								"title": "Chat With Fellow Users 🦋",
								"rows": [
									{
										"title": "Anonymous Chat Menu 🐼",
										"description": "Displays The List Of Anonymous Chat Features",
										"rowId": `${prefix}anonymouschatmenu`
									}
								]
							},
							{
								"title": "Credit 🐞",
								"rows": [
									{
										"title": "Thanks To 💐",
										"description": "Displays The List Of Credit Of The Bot !!",
										"rowId": `${prefix}help`
									}
								]
							}
						],
          listType: 1
                }
            }), {})
            GarfieldNeural.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
            break
    case 'owner': case 'donate':  {
                GarfieldNeural.sendMessage(m.chat, { image: { url: global.thumb }, caption: `${global.notice}` }, { quoted: m })
            }
            break

            case 'sc': case 'script': {
                reply(`GitHub : *https://github.com/Zenoixnoize/GARFIELD-WHATSAPP-BOT-v8*\n *Dont Forget To Give Star*\n\n*Follow Now* : ${myweb}\n`)
            }
            break
   case 'allmenu': {
                let buttons = [
                    {buttonId: `command`, buttonText: {displayText: 'List Menu 🎉'}, type: 1},
                    {buttonId: `help`, buttonText: {displayText: 'Project 🦋'},  type: 1}
                      ]
                let buttonMessage = {
                    image: { url: global.thumb },
                    caption: `
┏━「 *${global.botname}* 」━━ 
┃╔══「 *MAIN  ${global.emoji02}* 」
┃╠  ${global.emoji01} alive
┃╠  ${global.emoji01} script
┃╠  ${global.emoji01} speedtest
┃╠  ${global.emoji01} ping
┃╠  ${global.emoji01} owner
┃╠  ${global.emoji01} menu
┃╠  ${global.emoji01} delete
┃╠  ${global.emoji01} chatinfo
┃╠  ${global.emoji01} quoted
┃╠  ${global.emoji01} listpc
┃╠  ${global.emoji01} listgc
┃╠  ${global.emoji01} donate
┃╠  ${global.emoji01} report [bug]
┃╠══ 「 *OWNER 🪁* 」 
┃╠  ${global.emoji01} chat [option]
┃╠  ${global.emoji01} join [link]
┃╠  ${global.emoji01} leave
┃╠  ${global.emoji01} block [user]
┃╠  ${global.emoji01} unblock [user]
┃╠  ${global.emoji01} bcgroup [text]
┃╠  ${global.emoji01} bcall [text]
┃╠  ${global.emoji01} setppbot [image]
┃╠  ${global.emoji01} setexif
┃╠══ 「 *GROUP ⚙️* 」       
┃╠  ${global.emoji01} grouplink
┃╠  ${global.emoji01} ephemeral [option]
┃╠  ${global.emoji01} setgcpp [image]
┃╠  ${global.emoji01} setname [text]
┃╠  ${global.emoji01} setdesc [text]
┃╠  ${global.emoji01} group [text]
┃╠  ${global.emoji01} editinfo [option]
┃╠  ${global.emoji01} add [user]
┃╠  ${global.emoji01} kick [reply/tag]
┃╠  ${global.emoji01} hidetag [text]
┃╠  ${global.emoji01} tagall [text]
┃╠  ${global.emoji01} antilink [on/off]
┃╠  ${global.emoji01} mute [on/off]
┃╠  ${global.emoji01} promote [reply/tag]
┃╠  ${global.emoji01} demote [reply/tag]
┃╠  ${global.emoji01} vote
┃╠  ${global.emoji01} devote
┃╠  ${global.emoji01} upvote
┃╠  ${global.emoji01} checkvote
┃╠  ${global.emoji01} delvote
┃╠══「 *RPG 🎮* 」 
┃╠  ${global.emoji01} hunting
┃╠  ${global.emoji01} mining
┃╠  ${global.emoji01} heal
┃╠  ${global.emoji01} userlimit
┃╠  ${global.emoji01} profile
┃╠  ${global.emoji01} inventory
┃╠  ${global.emoji01} leaderboard
┃╠  ${global.emoji01} buy [option]
┃╠  ${global.emoji01} sell [option]
┃╠═ ©「 *DOWNLOADER ⬇️* 」
┃╠  ${global.emoji01} ytmp3 [url|quality]
┃╠  ${global.emoji01} ytmp4 [url|quality]
┃╠  ${global.emoji01} apk (app name)
┃╠  ${global.emoji01} tiktok (Link)
┃╠  ${global.emoji01} save (Video Link)
┃╠  ${global.emoji01} getmusic [yt link]
┃╠  ${global.emoji01} mediafire (Link)
┃╠  ${global.emoji01} fb(Link)
┃╠  ${global.emoji01} getvideo [yt link]
┃╠  ${global.emoji01} umma [Text]
┃╠  ${global.emoji01} joox [Text]
┃╠  ${global.emoji01} soundcloud [url]
┃╠══ 「 *SEARCHER 🔎* 」 
┃╠  ${global.emoji01} play [Text]
┃╠  ${global.emoji01} song [Text]
┃╠  ${global.emoji01} music (Text)
┃╠  ${global.emoji01} apk (app name)
┃╠  ${global.emoji01} wattpad (Text)
┃╠  ${global.emoji01} photo (Text)
┃╠  ${global.emoji01} device (device name)
┃╠  ${global.emoji01} shorts (text YT)
┃╠  ${global.emoji01} apkmod (app name)
┃╠  ${global.emoji01} covid (Text)
┃╠  ${global.emoji01} wikipedia (Text)
┃╠  ${global.emoji01} yts [Text]
┃╠  ${global.emoji01} google [Text]
┃╠  ${global.emoji01} gimage [Text]
┃╠  ${global.emoji01} pinterest [Text]
┃╠  ${global.emoji01} wallpaper [Text]
┃╠  ${global.emoji01} wikimedia [Text]
┃╠  ${global.emoji01} ytsearch [Text]
┃╠  ${global.emoji01} ringtone [Text]
┃╠  ${global.emoji01} webtoon [Text]
┃╠══ 「 *RANDOM  ${global.emoji02}* 」
┃╠  ${global.emoji01} coffee
┃╠  ${global.emoji01} animequote (Text)
┃╠  ${global.emoji01} couplepp
┃╠═ ©「 *RANDOM ANIME 🌻* 」
┃╠  ${global.emoji01} loli
┃╠  ${global.emoji01} bully
┃╠  ${global.emoji01} cuddle
┃╠  ${global.emoji01} cry
┃╠  ${global.emoji01} hug
┃╠  ${global.emoji01} awoo
┃╠  ${global.emoji01} kiss
┃╠  ${global.emoji01} lick
┃╠  ${global.emoji01} pat
┃╠  ${global.emoji01} smug
┃╠  ${global.emoji01} bonk
┃╠  ${global.emoji01} yeet
┃╠  ${global.emoji01} blush
┃╠  ${global.emoji01} smile
┃╠  ${global.emoji01} wave
┃╠  ${global.emoji01} highfive
┃╠  ${global.emoji01} handhold
┃╠  ${global.emoji01} nom
┃╠  ${global.emoji01} glomp
┃╠  ${global.emoji01} bite
┃╠  ${global.emoji01} slap
┃╠  ${global.emoji01} kill
┃╠  ${global.emoji01} happy
┃╠  ${global.emoji01} wink
┃╠  ${global.emoji01} poke
┃╠  ${global.emoji01} dance
┃╠  ${global.emoji01} cringe
┃╠══ 「 *FUN 🎮* 」 
┃╠  ${global.emoji01} how [text
┃╠  ${global.emoji01} when [text]
┃╠  ${global.emoji01} is [text]
┃╠  ${global.emoji01} what [text]
┃╠  ${global.emoji01} can [text]
┃╠  ${global.emoji01} rate [text]
┃╠  ${global.emoji01} wangy [text]
┃╠  ${global.emoji01} beautifulcheck [tag]
┃╠  ${global.emoji01} awesomecheck [tag]
┃╠  ${global.emoji01} prettycheck [tag]
┃╠  ${global.emoji01} lesbiancheck [tag]
┃╠  ${global.emoji01} gaycheck [tag]
┃╠  ${global.emoji01} cutecheck [tag]
┃╠  ${global.emoji01} uglycheck [tag]
┃╠  ${global.emoji01} hornycheck [tag]
┃╠  ${global.emoji01} charactercheck [tag]
┃╠  ${global.emoji01} lovelycheck [tag]
┃╠  ${global.emoji01} couple
┃╠  ${global.emoji01} mysoulmate
┃╠  ${global.emoji01} hot
┃╠  ${global.emoji01} kind
┃╠  ${global.emoji01} idiot
┃╠  ${global.emoji01} handsome
┃╠  ${global.emoji01} beautiful
┃╠  ${global.emoji01} cute
┃╠  ${global.emoji01} pretty
┃╠  ${global.emoji01} lesbian
┃╠  ${global.emoji01} noob
┃╠  ${global.emoji01} bastard
┃╠  ${global.emoji01} foolish
┃╠  ${global.emoji01} nerd
┃╠  ${global.emoji01} asshole
┃╠  ${global.emoji01} gay
┃╠  ${global.emoji01} smart
┃╠  ${global.emoji01} stubble
┃╠  ${global.emoji01} dog
┃╠  ${global.emoji01} horny
┃╠  ${global.emoji01} cunt
┃╠  ${global.emoji01} wibu
┃╠  ${global.emoji01} tictactoe
┃╠  ${global.emoji01} delttt
┃╠  ${global.emoji01} guess [option]
┃╠  ${global.emoji01} math [mode]
┃╠  ${global.emoji01} suitpvp [tag]
┃╠═══ 「 *CONVERTER 🎳* 」 
┃╠  ${global.emoji01} image [reply stick]
┃╠  ${global.emoji01} sticker [reply img|gif]
┃╠  ${global.emoji01} emojimix [moji+moji]
┃╠  ${global.emoji01} video [reply img]
┃╠  ${global.emoji01} gif [reply stick]
┃╠  ${global.emoji01} url [reply img]
┃╠  ${global.emoji01} vn [reply aud]
┃╠  ${global.emoji01} meme (reply photo with text)
┃╠  ${global.emoji01} mp3 [reply vn]
┃╠  ${global.emoji01} audio [reply vid]
┃╠  ${global.emoji01} ebinary [reply Text]
┃╠  ${global.emoji01} dbinary [reply Text]
┃╠  ${global.emoji01} styletext [text]
┃╠══ 「 *DATABASE 🧬* 」 
┃╠  ${global.emoji01} setcmd
┃╠  ${global.emoji01} listcmd
┃╠  ${global.emoji01} delcmd
┃╠  ${global.emoji01} lockcmd
┃╠  ${global.emoji01} addmsg
┃╠  ${global.emoji01} listmsg
┃╠  ${global.emoji01} getmsg
┃╠  ${global.emoji01} delmsg
┃╠═ ©「 *ANONYMOUS CHAT 🐥* 」
┃╠  ${global.emoji01} anonymous
┃╠  ${global.emoji01} start
┃╠  ${global.emoji01} next
┃╠  ${global.emoji01} leave
┃╠═ ©「 *VOICE CHANGER 🎙️* 」
┃╠  ${global.emoji01} bass [reply aud]
┃╠  ${global.emoji01} blown [reply aud]
┃╠  ${global.emoji01} deep [reply aud]
┃╠  ${global.emoji01} earrape [reply aud]
┃╠  ${global.emoji01} fast [reply aud]
┃╠  ${global.emoji01} fat [reply aud]
┃╠  ${global.emoji01} nightcore [reply aud]
┃╠  ${global.emoji01} reverse [reply aud]
┃╠  ${global.emoji01} robot [reply aud]
┃╠  ${global.emoji01} slow [reply aud]
┃╠  ${global.emoji01} squirrel [reply aud]
┃╠══ 「 *HOROSCOPE 🔬* 」
┃╠  ${global.emoji01} nomorhoki (Text)
┃╠  ${global.emoji01} artimimpi (Text)
┃╠  ${global.emoji01} artinama (Text)
┃╠  ${global.emoji01} ramaljodoh (Text)
┃╠  ${global.emoji01} ramaljodohbali (Text)
┃╠  ${global.emoji01} suamiistri (Text)
┃╠  ${global.emoji01} ramalcinta (Text)
┃╠  ${global.emoji01} cocoknama (Text)
┃╠  ${global.emoji01} pasangan (Text)
┃╠  ${global.emoji01} jadiannikah (Text)
┃╠  ${global.emoji01} sifatusaha (Text)
┃╠  ${global.emoji01} rezeki (Text)
┃╠  ${global.emoji01} pekerjaan (Text)
┃╠  ${global.emoji01} nasib (Text)
┃╠  ${global.emoji01} penyakit (Text)
┃╠  ${global.emoji01} tarot (Text)
┃╠  ${global.emoji01} fengshui (Text)
┃╠  ${global.emoji01} haribaik (Text)
┃╠  ${global.emoji01} harisangar (Text)
┃╠  ${global.emoji01} harisial (Text)
┃╠  ${global.emoji01} nagahari (Text)
┃╠  ${global.emoji01} arahrezeki (Text)
┃╠  ${global.emoji01} peruntungan (Text)
┃╠  ${global.emoji01} weton (Text)
┃╠  ${global.emoji01} karakter (Text)
┃╠  ${global.emoji01} keberuntungan (Text)
┃╠  ${global.emoji01} memancing (Text)
┃╠  ${global.emoji01} masasubur (Text)
┃╠  ${global.emoji01} zodiak (Text)
┃╠  ${global.emoji01} shio (Text)
┃╚═══════
┗━「 *${pushname} 2022 ©*  」━©`,
                    footer: `© 𝖯𝗈𝗐𝖾𝗋𝖾𝖽 𝖡𝗒 𝖦𝖺𝗋𝖿𝗂𝖾𝗅𝖽 𝖡𝗈𝗍`,
                    buttons: buttons,
                    headerType: 4
                }
                GarfieldNeural.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
case 'mainmenu':
var unicorn = await getBuffer(global.thumb)
await GarfieldNeural.send5ButImg(from, `` + '' + ' ', `
┏━「 User ${pushname}  ${global.emoji01} 」━━ 
┃╔═ ©「 MAIN  ${global.emoji02}*  」
┃╠  ${global.emoji01} alive
┃╠  ${global.emoji01} script
┃╠  ${global.emoji01} speedtest
┃╠  ${global.emoji01} ping
┃╠  ${global.emoji01} owner
┃╠  ${global.emoji01} menu
┃╠  ${global.emoji01} delete
┃╠  ${global.emoji01} chatinfo
┃╠  ${global.emoji01} quoted
┃╠  ${global.emoji01} listpc
┃╠  ${global.emoji01} listgc
┃╠  ${global.emoji01} donate
┃╠  ${global.emoji01} report [bug]
┃╚═════════════ 
┗━━「 User ${pushname}  ${global.emoji01} 」━©`,unicorn, [{"urlButton": {"displayText": "YouTube 📍","url": `${myweb}`}},{"urlButton": {"displayText": "Script 🌈","url": `${sc}`}},{"quickReplyButton": {"displayText": "Donate 🚀","id": 'donate'}},{"quickReplyButton": {"displayText": "owner 🦋","id": 'owner'}}] )
break

case 'grupmenu': case 'groupmenu':
var unicorn = await getBuffer(global.thumb)
await GarfieldNeural.send5ButImg(from, `` + '' + ' ', `
┏━「 User ${pushname}  ${global.emoji01} 」━━ 
┃╔═ ©「 GROUP 🍿 」	        
┃╠  ${global.emoji01} grouplink
┃╠  ${global.emoji01} ephemeral [option]
┃╠  ${global.emoji01} setgcpp [image]
┃╠  ${global.emoji01} setname [text]
┃╠  ${global.emoji01} setdesc [text]
┃╠  ${global.emoji01} group [text]
┃╠  ${global.emoji01} editinfo [option]
┃╠  ${global.emoji01} add [user]
┃╠  ${global.emoji01} kick [reply/tag]
┃╠  ${global.emoji01} hidetag [text]
┃╠  ${global.emoji01} tagall [text]
┃╠  ${global.emoji01} antilink [on/off]
┃╠  ${global.emoji01} mute [on/off]
┃╠  ${global.emoji01} promote [reply/tag]
┃╠  ${global.emoji01} demote [reply/tag]
┃╠  ${global.emoji01} vote
┃╠  ${global.emoji01} devote
┃╠  ${global.emoji01} upvote
┃╠  ${global.emoji01} checkvote
┃╠  ${global.emoji01} delvote
┃╚═════════════ 
┗━━「 User ${pushname}  ${global.emoji01} 」━©`,unicorn, [{"urlButton": {"displayText": "Follow Us ℹ️ ","url": `${myweb}`}},{"urlButton": {"displayText": "Script 🌈","url": `${sc}`}},{"quickReplyButton": {"displayText": "Donate 🚀","id": 'donate'}},{"quickReplyButton": {"displayText": "owner 🦋","id": 'owner'}}] )
break

case 'rpgmenu':
var unicorn = await getBuffer(global.thumb)
await GarfieldNeural.send5ButImg(from, `` + '' + ' ', `
┏━「 User ${pushname}  ${global.emoji01} 」━━ 
┃╔═ ©「 RPG 🎮 」	        
┃╠  ${global.emoji01} hunting
┃╠  ${global.emoji01} mining
┃╠  ${global.emoji01} heal
┃╠  ${global.emoji01} limituser
┃╠  ${global.emoji01} profile
┃╠  ${global.emoji01} inventory
┃╠  ${global.emoji01} leaderboard
┃╠  ${global.emoji01} buy [option]
┃╠  ${global.emoji01} sell [option]
┃╚═════════════ 
┗━━「 User ${pushname}  ${global.emoji01} 」━©`,unicorn, [{"urlButton": {"displayText": "Follow Us ℹ️ ","url": `${myweb}`}},{"urlButton": {"displayText": "Script 🌈","url": `${sc}`}},{"quickReplyButton": {"displayText": "Donate 🚀","id": 'donate'}},{"quickReplyButton": {"displayText": "owner 🦋","id": 'owner'}}] )
break

case 'funmenu':
var unicorn = await getBuffer(global.thumb)
await GarfieldNeural.send5ButImg(from, `` + '' + ' ', `
┏━「 User ${pushname}  ${global.emoji01} 」━━ 
┃╔═ ©「 FUN 🪁 」	        
┃╠  ${global.emoji01} how [text
┃╠  ${global.emoji01} when [text]
┃╠  ${global.emoji01} me(සිංහල)
┃╠  ${global.emoji01} who is @ (සිංහල)
┃╠  ${global.emoji01} is [text]
┃╠  ${global.emoji01} what [text]
┃╠  ${global.emoji01} can [text]
┃╠  ${global.emoji01} read more (text)
┃╠  ${global.emoji01} rate [text]
┃╠  ${global.emoji01} wangy [text]
┃╠  ${global.emoji01} beautifulcheck [tag]
┃╠  ${global.emoji01} awesomecheck [tag]
┃╠  ${global.emoji01} prettycheck [tag]
┃╠  ${global.emoji01} lesbiancheck [tag]
┃╠  ${global.emoji01} gaycheck [tag]
┃╠  ${global.emoji01} cutecheck [tag]
┃╠  ${global.emoji01} uglycheck [tag]
┃╠  ${global.emoji01} hornycheck [tag]
┃╠  ${global.emoji01} charactercheck [tag]
┃╠  ${global.emoji01} lovelycheck [tag]
┃╠  ${global.emoji01} couple
┃╠  ${global.emoji01} mysoulmate
┃╠  ${global.emoji01} hot
┃╠  ${global.emoji01} sexy
┃╠  ${global.emoji01} kind
┃╠  ${global.emoji01} handsome
┃╠  ${global.emoji01} beautiful
┃╠  ${global.emoji01} cute
┃╠  ${global.emoji01} pretty
┃╠  ${global.emoji01} lesbian
┃╠  ${global.emoji01} noob
┃╠  ${global.emoji01} bastard
┃╠  ${global.emoji01} foolish
┃╠  ${global.emoji01} nerd
┃╠  ${global.emoji01} asshole
┃╠  ${global.emoji01} gay
┃╠  ${global.emoji01} smart
┃╠  ${global.emoji01} stubble
┃╠  ${global.emoji01} dog
┃╠  ${global.emoji01} horny
┃╠  ${global.emoji01} cunt
┃╠  ${global.emoji01} wibu
┃╠  ${global.emoji01} tictactoe
┃╠  ${global.emoji01} delttt
┃╠  ${global.emoji01} guess [option]
┃╠  ${global.emoji01} math [mode]
┃╠  ${global.emoji01} suitpvp [tag]
┃╚═════════════ 
┗━━「 User ${pushname}  ${global.emoji01} 」━©`,unicorn, [{"urlButton": {"displayText": "Follow Us ℹ️ ","url": `${myweb}`}},{"urlButton": {"displayText": "Script 🌈","url": `${sc}`}},{"quickReplyButton": {"displayText": "Donate 🚀","id": 'donate'}},{"quickReplyButton": {"displayText": "owner 🦋","id": 'owner'}}] )
break

case 'ownermenu':
var unicorn = await getBuffer(global.thumb)
await GarfieldNeural.send5ButImg(from, `` + '' + ' ', `
┏━「 User ${pushname}  ${global.emoji01} 」━━ 
┃╔═ ©「 OWNER 🐣 」	        
┃╠  ${global.emoji01} grouplink
┃╠  ${global.emoji01} ephemeral [option]
┃╠  ${global.emoji01} setgcpp [image]
┃╠  ${global.emoji01} setname [text]
┃╠  ${global.emoji01} setdesc [text]
┃╠  ${global.emoji01} group [text]
┃╠  ${global.emoji01} editinfo [option]
┃╠  ${global.emoji01} add [user]
┃╠  ${global.emoji01} kick [reply/tag]
┃╠  ${global.emoji01} hidetag [text]
┃╠  ${global.emoji01} tagall [text]
┃╠  ${global.emoji01} antilink [on/off]
┃╠  ${global.emoji01} mute [on/off]
┃╠  ${global.emoji01} promote [reply/tag]
┃╠  ${global.emoji01} demote [reply/tag]
┃╠  ${global.emoji01} vote
┃╠  ${global.emoji01} devote
┃╠  ${global.emoji01} upvote
┃╠  ${global.emoji01} checkvote
┃╠  ${global.emoji01} delvote
┃╚═════════════ 
┗━━「 User ${pushname}  ${global.emoji01} 」━©`,unicorn, [{"urlButton": {"displayText": "Follow Us ℹ️ ","url": `${myweb}`}},{"urlButton": {"displayText": "Script 🌈","url": `${sc}`}},{"quickReplyButton": {"displayText": "Donate 🚀","id": 'donate'}},{"quickReplyButton": {"displayText": "owner 🦋","id": 'owner'}}] )
break
case 'downloadmenu':
var unicorn = await getBuffer(global.thumb)
await GarfieldNeural.send5ButImg(from, `` + '' + ' ', `
┏━「 User ${pushname}  ${global.emoji01} 」━━ 
┃╔═ 「 DOWNLOADER ⬇️ 」	        
┃╠  ${global.emoji01} ytmp3 [url|quality]
┃╠  ${global.emoji01} ytmp4 [url|quality]
┃╠  ${global.emoji01} apk (app name)
┃╠  ${global.emoji01} apkmod (App Name)
┃╠  ${global.emoji01} photo (Text)
┃╠  ${global.emoji01} tiktok (Link)
┃╠  ${global.emoji01} play (Text)
┃╠  ${global.emoji01} insta (Text)
┃╠  ${global.emoji01} save (Video Link)
┃╠  ${global.emoji01} getmusic [yt link]
┃╠  ${global.emoji01} mediafire (Link)
┃╠  ${global.emoji01} fb(Link)
┃╠  ${global.emoji01} getvideo [yt link]
┃╠  ${global.emoji01} umma [Text]
┃╠  ${global.emoji01} joox [Text]
┃╠  ${global.emoji01} soundcloud [URL]
┃╠  ${global.emoji01} googledrive (URL)
┃╚═════════════ 
┗━━「 User ${pushname}  ${global.emoji01} 」━©`,unicorn, [{"urlButton": {"displayText": "Follow Us ℹ️ ","url": `${myweb}`}},{"urlButton": {"displayText": "Script 🌈","url": `${sc}`}},{"quickReplyButton": {"displayText": "Donate 🚀","id": 'donate'}},{"quickReplyButton": {"displayText": "owner 🦋","id": 'owner'}}] )
break
case 'searchmenu':
var unicorn = await getBuffer(global.thumb)
await GarfieldNeural.send5ButImg(from, `` + '' + ' ', `
┏━「 User ${pushname}  ${global.emoji01} 」━━ 
┃╔══  「 SEARCHER 🔎 」	        
┃╠  ${global.emoji01} play [Text]
┃╠  ${global.emoji01} song [Text]
┃╠  ${global.emoji01} music (Text)
┃╠  ${global.emoji01} apk (app name)
┃╠  ${global.emoji01} wattpad (Text)
┃╠  ${global.emoji01} photo (Text)
┃╠  ${global.emoji01} device (device name)
┃╠  ${global.emoji01} shorts (text YT)
┃╠  ${global.emoji01} apkmod (app name)
┃╠  ${global.emoji01} covid (Text)
┃╠  ${global.emoji01} wikipedia (Text)
┃╠  ${global.emoji01} yts [Text]
┃╠  ${global.emoji01} google [Text]
┃╠  ${global.emoji01} gimage [Text]
┃╠  ${global.emoji01} pinterest [Text]
┃╠  ${global.emoji01} wallpaper [Text]
┃╠  ${global.emoji01} wikimedia [Text]
┃╠  ${global.emoji01} ytsearch [Text]
┃╠  ${global.emoji01} ringtone [Text]
┃╠  ${global.emoji01} webtoon [Text]
┃╚═════════════ 
┗━━「 User ${pushname}  ${global.emoji01} 」━©`,unicorn, [{"urlButton": {"displayText": "Follow Us ℹ️ ","url": `${myweb}`}},{"urlButton": {"displayText": "Script 🌈","url": `${sc}`}},{"quickReplyButton": {"displayText": "Donate 🚀","id": 'donate'}},{"quickReplyButton": {"displayText": "owner 🦋","id": 'owner'}}] )
break
case 'randommenu':
var unicorn = await getBuffer(global.thumb)
await GarfieldNeural.send5ButImg(from, `` + '' + ' ', `
┏━「 User ${pushname}  ${global.emoji01} 」━━ 
┃╔══  「 RANDOM 🎡 」	        
┃╠  ${global.emoji01} coffee
┃╠  ${global.emoji01} animequote (Text)
┃╠  ${global.emoji01} couplepp
┃╚═════════════ 
┗━━「 User ${pushname}  ${global.emoji01} 」━©`,unicorn, [{"urlButton": {"displayText": "Follow Us ℹ️ ","url": `${myweb}`}},{"urlButton": {"displayText": "Script 🌈","url": `${sc}`}},{"quickReplyButton": {"displayText": "Donate 🚀","id": 'donate'}},{"quickReplyButton": {"displayText": "owner 🦋","id": 'owner'}}] )
break
case 'randomanimemenu':
var unicorn = await getBuffer(global.thumb)
await GarfieldNeural.send5ButImg(from, `` + '' + ' ', `
┏━「 User ${pushname}  ${global.emoji01} 」━━ 
┃╔ ©「 RANDOM ANIME 🌸 」	        
┃╠  ${global.emoji01} loli
┃╠  ${global.emoji01} bully
┃╠  ${global.emoji01} cuddle
┃╠  ${global.emoji01} cry
┃╠  ${global.emoji01} hug
┃╠  ${global.emoji01} awoo
┃╠  ${global.emoji01} kiss
┃╠  ${global.emoji01} lick
┃╠  ${global.emoji01} pat
┃╠  ${global.emoji01} smug
┃╠  ${global.emoji01} bonk
┃╠  ${global.emoji01} yeet
┃╠  ${global.emoji01} blush
┃╠  ${global.emoji01} smile
┃╠  ${global.emoji01} wave
┃╠  ${global.emoji01} highfive
┃╠  ${global.emoji01} handhold
┃╠  ${global.emoji01} nom
┃╠  ${global.emoji01} glomp
┃╠  ${global.emoji01} bite
┃╠  ${global.emoji01} slap
┃╠  ${global.emoji01} kill
┃╠  ${global.emoji01} happy
┃╠  ${global.emoji01} wink
┃╠  ${global.emoji01} poke
┃╠  ${global.emoji01} dance
┃╠  ${global.emoji01} cringe
┃╚═════════════ 
┗━━「 User ${pushname}  ${global.emoji01} 」━©`,unicorn, [{"urlButton": {"displayText": "Follow Us ℹ️ ","url": `${myweb}`}},{"urlButton": {"displayText": "Script 🌈","url": `${sc}`}},{"quickReplyButton": {"displayText": "Donate 🚀","id": 'donate'}},{"quickReplyButton": {"displayText": "owner 🦋","id": 'owner'}}] )
break
case 'textpromenu':
var unicorn = await getBuffer(global.thumb)
await GarfieldNeural.send5ButImg(from, `` + '' + ' ', `
┏━「 User ${pushname}  ${global.emoji01} 」━━ 
┃╔═ ©「 LOGO MAKER 🦓 」	        
┃╠  ${global.emoji01} 3dchristmas [Text]
┃╠  ${global.emoji01} 3ddeepsea [Text]
┃╠  ${global.emoji01} americanflag [Text]
┃╠  ${global.emoji01} 3dscifi [Text]
┃╠  ${global.emoji01} 3drainbow [Text]
┃╠  ${global.emoji01} 3dwaterpipe [Text]
┃╠  ${global.emoji01} halloweenskeleton [Text]
┃╠  ${global.emoji01} sketch [Text]
┃╠  ${global.emoji01} bluecircuit [Text]
┃╠  ${global.emoji01} space [Text]
┃╠  ${global.emoji01} metallic [Text]
┃╠  ${global.emoji01} fiction [Text]
┃╠  ${global.emoji01} greenhorror [Text]
┃╠  ${global.emoji01} transformer [Text]
┃╠  ${global.emoji01} berry [Text]
┃╠  ${global.emoji01} thunder [Text]
┃╠  ${global.emoji01} magma [Text]
┃╠  ${global.emoji01} 3dcrackedstone [Text]
┃╠  ${global.emoji01} 3dneonlight [Text]
┃╠  ${global.emoji01} impressiveglitch [Text]
┃╠  ${global.emoji01} naturalleaves [Text]
┃╠  ${global.emoji01} fireworksparkle [Text]
┃╠  ${global.emoji01} matrix [Text]
┃╠  ${global.emoji01} dropwater [Text]
┃╠  ${global.emoji01} harrypotter [Text]
┃╠  ${global.emoji01} foggywindow [Text]
┃╠  ${global.emoji01} neondevils [Text]
┃╠  ${global.emoji01} christmasholiday [Text]
┃╠  ${global.emoji01} 3dgradient [Text]
┃╠  ${global.emoji01} blackpink [Text]
┃╠  ${global.emoji01} gluetext [Text]
┃╚═════════════ 
┗━━「 User ${pushname}  ${global.emoji01} 」━©`,unicorn, [{"urlButton": {"displayText": "Follow Us ℹ️ ","url": `${myweb}`}},{"urlButton": {"displayText": "Script 🌈","url": `${sc}`}},{"quickReplyButton": {"displayText": "Donate 🚀","id": 'donate'}},{"quickReplyButton": {"displayText": "owner 🦋","id": 'owner'}}] )
break
case 'convertmenu':
var unicorn = await getBuffer(global.thumb)
await GarfieldNeural.send5ButImg(from, `` + '' + ' ', `
┏━「 User ${pushname}  ${global.emoji01} 」━━ 
┃╔══  「 CONVERTER 🔃 」	        
┃╠  ${global.emoji01} image [reply stick]
┃╠  ${global.emoji01} sticker [reply img|gif]
┃╠  ${global.emoji01} emojimix [moji+moji]
┃╠  ${global.emoji01} emojimix2 [moji+moji]
┃╠  ${global.emoji01} video [reply img]
┃╠  ${global.emoji01} gif [reply stick]
┃╠  ${global.emoji01} url [reply media]
┃╠  ${global.emoji01} vn [reply aud]
┃╠  ${global.emoji01} mp3 [reply vn]
┃╠  ${global.emoji01} audio [reply vid]
┃╠  ${global.emoji01} meme(reply img)
┃╠  ${global.emoji01} ebinary [reply Text]
┃╠  ${global.emoji01} dbinary [reply Text]
┃╚═════════════ 
┗━━「 User ${pushname}  ${global.emoji01} 」━©`,unicorn, [{"urlButton": {"displayText": "Follow Us ℹ️ ","url": `${myweb}`}},{"urlButton": {"displayText": "Script 🌈","url": `${sc}`}},{"quickReplyButton": {"displayText": "Donate 🚀","id": 'donate'}},{"quickReplyButton": {"displayText": "owner 🦋","id": 'owner'}}] )
break
case 'databasemenu':
var unicorn = await getBuffer(global.thumb)
await GarfieldNeural.send5ButImg(from, `` + '' + ' ', `
┏━「 User ${pushname}  ${global.emoji01} 」━━ 
┃╔═══ 「 DATABASE 📎 」	        
┃╠  ${global.emoji01} setcmd
┃╠  ${global.emoji01} listcmd
┃╠  ${global.emoji01} delcmd
┃╠  ${global.emoji01} lockcmd
┃╠  ${global.emoji01} addmsg
┃╠  ${global.emoji01} listmsg
┃╠  ${global.emoji01} getmsg
┃╠  ${global.emoji01} delmsg
┃╚═════════════ 
┗━━「 User ${pushname}  ${global.emoji01} 」━©`,unicorn, [{"urlButton": {"displayText": "Follow Us ℹ️ ","url": `${myweb}`}},{"urlButton": {"displayText": "Script 🌈","url": `${sc}`}},{"quickReplyButton": {"displayText": "Donate 🚀","id": 'donate'}},{"quickReplyButton": {"displayText": "owner 🦋","id": 'owner'}}] )
break
case 'chatmenu':
var unicorn = await getBuffer(global.thumb)
await GarfieldNeural.send5ButImg(from, `` + '' + ' ', `
┏━「 User ${pushname}  ${global.emoji01} 」━━ 
┃╔══  「 ANONYMOUS CHAT 🐋 」	        
┃╠  ${global.emoji01} anonymous
┃╠  ${global.emoji01} start
┃╠  ${global.emoji01} next
┃╠  ${global.emoji01} leave
┃╚═════════════ 
┗━━「 User ${pushname}  ${global.emoji01} 」━©`,unicorn, [{"urlButton": {"displayText": "Follow Us ℹ️ ","url": `${myweb}`}},{"urlButton": {"displayText": "Script 🌈","url": `${sc}`}},{"quickReplyButton": {"displayText": "Donate 🚀","id": 'donate'}},{"quickReplyButton": {"displayText": "owner 🦋","id": 'owner'}}] )
break
case 'islamicmenu':
var unicorn = await getBuffer(global.thumb)
await GarfieldNeural.send5ButImg(from, `` + '' + ' ', `
┏━「 User ${pushname}  ${global.emoji01} 」━━ 
┃╔══  「 RELIGIOUS 🚮 」	        
┃╠  ${global.emoji01} juzamma
┃╚═════════════ 
┗━━「 User ${pushname}  ${global.emoji01} 」━©`,unicorn, [{"urlButton": {"displayText": "Follow Us ℹ️ ","url": `${myweb}`}},{"urlButton": {"displayText": "Script 🌈","url": `${sc}`}},{"quickReplyButton": {"displayText": "Donate 🚀","id": 'donate'}},{"quickReplyButton": {"displayText": "owner 🦋","id": 'owner'}}] )
break
case 'voicechangermenu':
var unicorn = await getBuffer(global.thumb)
await GarfieldNeural.send5ButImg(from, `` + '' + ' ', `
┏━「 User ${pushname}  ${global.emoji01} 」━━ 
┃╔══  「 VOICE CHANGER 🎙️ 」	        
┃╠  ${global.emoji01} bass [reply aud]
┃╠  ${global.emoji01} blown [reply aud]
┃╠  ${global.emoji01} deep [reply aud]
┃╠  ${global.emoji01} earrape [reply aud]
┃╠  ${global.emoji01} fast [reply aud]
┃╠  ${global.emoji01} fat [reply aud]
┃╠  ${global.emoji01} nightcore [reply aud]
┃╠  ${global.emoji01} reverse [reply aud]
┃╠  ${global.emoji01} robot [reply aud]
┃╠  ${global.emoji01} slow [reply aud]
┃╠  ${global.emoji01} squirrel [reply aud]
┃╚═════════════ 
┗━━「 User ${pushname}  ${global.emoji01} 」━©`,unicorn, [{"urlButton": {"displayText": "Follow Us ℹ️ ","url": `${myweb}`}},{"urlButton": {"displayText": "Script 🌈","url": `${sc}`}},{"quickReplyButton": {"displayText": "Donate 🚀","id": 'donate'}},{"quickReplyButton": {"displayText": "owner 🦋","id": 'owner'}}] )
break
case 'horoscopemenu':
var unicorn = await getBuffer(global.thumb)
await GarfieldNeural.send5ButImg(from, `` + '' + ' ', `
┏━「 User ${pushname}  ${global.emoji01} 」━━ 
┃╔══  「 HOROSCOPE 🔬 」	        
┃╠  ${global.emoji01} nomorhoki (Text)
┃╠  ${global.emoji01} artimimpi (Text)
┃╠  ${global.emoji01} artinama (Text)
┃╠  ${global.emoji01} ramaljodoh (Text)
┃╠  ${global.emoji01} ramaljodohbali (Text)
┃╠  ${global.emoji01} suamiistri (Text)
┃╠  ${global.emoji01} ramalcinta (Text)
┃╠  ${global.emoji01} cocoknama (Text)
┃╠  ${global.emoji01} pasangan (Text)
┃╠  ${global.emoji01} jadiannikah (Text)
┃╠  ${global.emoji01} sifatusaha (Text)
┃╠  ${global.emoji01} rezeki (Text)
┃╠  ${global.emoji01} pekerjaan (Text)
┃╠  ${global.emoji01} nasib (Text)
┃╠  ${global.emoji01} penyakit (Text)
┃╠  ${global.emoji01} tarot (Text)
┃╠  ${global.emoji01} fengshui (Text)
┃╠  ${global.emoji01} haribaik (Text)
┃╠  ${global.emoji01} harisangar (Text)
┃╠  ${global.emoji01} harisial (Text)
┃╠  ${global.emoji01} nagahari (Text)
┃╠  ${global.emoji01} arahrezeki (Text)
┃╠  ${global.emoji01} peruntungan (Text)
┃╠  ${global.emoji01} weton (Text)
┃╠  ${global.emoji01} karakter (Text)
┃╠  ${global.emoji01} keberuntungan (Text)
┃╠  ${global.emoji01} memancing (Text)
┃╠  ${global.emoji01} masasubur (Text)
┃╠  ${global.emoji01} zodiak (Text)
┃╠  ${global.emoji01} shio (Text)
┃╚═════════════ 
┗━━「 User ${pushname}  ${global.emoji01} 」━©`,unicorn, [{"urlButton": {"displayText": "Follow Us ℹ️ ","url": `${myweb}`}},{"urlButton": {"displayText": "Script 🌈","url": `${sc}`}},{"quickReplyButton": {"displayText": "Donate 🚀","id": 'donate'}},{"quickReplyButton": {"displayText": "owner 🦋","id": 'owner'}}] )
break
case 'developer': case 'help': case 'project':
var unicorn = await getBuffer(global.thumb)
await GarfieldNeural.send5ButImg(from, `` + '' + ' ', 'Garfield\nWhatsapp Bot\n From NOIZE Developers\n▰▰▰▰▰▰▰▰▰▰▰▰▰\nPowered By X Nodes Servers\n▰▰▰▰▰▰▰▰▰▰▰▰▰\nAlways On First Whatsapp User Bot in Sri Lanka 🇱🇰 \n▰▰▰▰▰▰▰▰▰▰▰▰▰\nCoded by ZENOI 2022\n▰▰▰▰▰▰▰▰▰▰▰▰▰\n 𝖨 𝖺𝗆 16 𝖸𝖾𝖺𝗋𝗌 𝖮𝗅𝖽 𝖲𝗍𝗎𝖽𝖾𝗇𝗍 𝗂𝗇 𝖲𝗋𝗂 𝖫𝖺𝗇𝗄𝖺 ©\n▰▰▰▰▰▰▰▰▰▰▰▰▰ \nSPECIAL THANKS \n- ʜᴀꜱɪɴᴅᴜ ᴅɪɴᴜꜱʜᴀɴ , ʟᴀꜱɪɴᴅᴜ ɴᴇᴛʜꜱᴀʀᴀ, ᴍᴀʟᴇᴇꜱʜᴀ ɴᴇᴛʜꜱᴀʀᴀ , ꜱᴀʀᴀɴɪ ᴍᴇᴛʜꜱᴀᴅᴇᴇ,ꜱᴇᴡᴍɪ ᴍᴀʟᴇᴇꜱʜᴀ , ᴀꜰɴᴀ ᴘᴀʟɪᴋᴋᴀʟ , ꜰᴀʀʜᴀɴ , ᴀᴛᴛɪᴄᴜꜱ , ʙᴀɪʟᴇʏꜱ , ᴛʜɪᴄᴄʏ ,ʏᴜꜱᴜꜰᴜꜱᴛᴀ  ',unicorn, [{"urlButton": {"displayText": "Follow My Facebook ✈️","url": `https://www.facebook.com/zenoixnoize`}},{"urlButton": {"displayText": "Script 🌈","url": `${sc}`}},{"quickReplyButton": {"displayText": "Donate 🚀","id": 'donate'}},{"quickReplyButton": {"displayText": "Developer 🦋","id": 'dev'}}] )
break
case 'make': case 'creat': case 'deploy':
var unicorn = await getBuffer(global.thumb)
await GarfieldNeural.send5ButImg(from, `` + '' + ' ', `
𝖢𝖱𝖤𝖠𝖳 𝖮𝖶𝖭 𝖡𝖮Т 𝖤𝖠𝖲𝖨𝖫𝖸
▰▰▰▰▰▰▰▰▰▰▰▰▰
${global.emoji02} Step 01 - Creat Heroku Account
▰▰▰▰▰▰▰▰▰▰▰▰▰
${global.emoji02} Step 02 - Fork Garfield v8.2 Repo
▰▰▰▰▰▰▰▰▰▰▰▰▰
${global.emoji02} Step 03 - Scan Qr and Linked Your Device 
▰▰▰▰▰▰▰▰▰▰▰▰▰
${global.emoji02} Step 04 - Replace Your session file
▰▰▰▰▰▰▰▰▰▰▰▰▰
${global.emoji02} Step 05 - Modify the Config file as you wish and enter your bot's name and details
▰▰▰▰▰▰▰▰▰▰▰▰▰
${global.emoji02} Step 04 - Creat Heroku Account 
▰▰▰▰▰▰▰▰▰▰▰▰▰
${global.emoji02} Step 05 - After Click Deploy button 
▰▰▰▰▰▰▰▰▰▰▰▰▰
${global.emoji02} Step 06 - Enter Your app name and click deploy now button 
▰▰▰▰▰▰▰▰▰▰▰▰▰
${global.emoji02} Step 07 - Then wait forty seconds for the process to take place
▰▰▰▰▰▰▰▰▰▰▰▰▰
 Enjoy Now 💙  `,unicorn, [{"urlButton": {"displayText": "Creat Github Account 🐻️","url": `https://github.com/signup?source=login`}},{"urlButton": {"displayText": "Creat Heroku Account 🌻","url": `https://github.com/signup?source=login`}},{"urlButton": {"displayText": "Garfield v8.3 🐼","url": `https://github.com/Zenoixnoize/GARFIELD-WHATSAPP-BOT-v8`}},{"quickReplyButton": {"displayText": "Donate 🚀","id": 'donate'}},{"quickReplyButton": {"displayText": "Developer 🦋","id": 'dev'}}] )
break
            default:
                if (budy.startsWith('=>')) {
                    if (!isCreator) return reply(mess.owner)
                    function Return(sul) {
                        sat = JSON.stringify(sul, null, 2)
                        bang = util.format(sat)
                            if (sat == undefined) {
                                bang = util.format(sul)
                            }
                            reply(bang)
                    }
                    try {
                        reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
                    } catch (e) {
                        reply(String(e))
                    }
                }

                if (budy.startsWith('>')) {
                    if (!isCreator) return reply(mess.owner)
                    try {
                        let evaled = await eval(budy.slice(2))
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                        await reply(evaled)
                    } catch (err) {
                        await reply(String(err))
                    }
                }

                if (budy.startsWith('$')) {
                    if (!isCreator) return reply(mess.owner)
                    exec(budy.slice(2), (err, stdout) => {
                        if(err) return reply(err)
                        if (stdout) return reply(stdout)
                    })
                }
			
		if (m.chat.endsWith('@s.whatsapp.net') && isCmd) {
                    this.anonymous = this.anonymous ? this.anonymous : {}
                    let room = Object.values(this.anonymous).find(room => [room.a, room.b].includes(m.sender) && room.state === 'CHATTING')
                    if (room) {
                        if (/^.*(next|leave|start)/.test(m.text)) return
                        if (['.next', '.leave', '.stop', '.start', 'Cari Partner', 'Keluar', 'Lanjut', 'Stop'].includes(m.text)) return
                        let other = [room.a, room.b].find(user => user !== m.sender)
                        m.copyNForward(other, true, m.quoted && m.quoted.fromMe ? {
                            contextInfo: {
                                ...m.msg.contextInfo,
                                forwardingScore: 0,
                                isForwarded: true,
                                participant: other
                            }
                        } : {})
                    }
                    return !0
                }
			
		if (isCmd && budy.toLowerCase() != undefined) {
		    if (m.chat.endsWith('broadcast')) return
		    if (m.isBaileys) return
		    let msgs = global.db.data.database
		    if (!(budy.toLowerCase() in msgs)) return
		    GarfieldNeural.copyNForward(m.chat, msgs[budy.toLowerCase()], true)
		}
        }
        

    } catch (err) {
        m.reply(util.format(err))
    }
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
