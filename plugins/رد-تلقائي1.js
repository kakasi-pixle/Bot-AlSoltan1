let handler = m => m
handler.all = async function (m) {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let chat = global.db.data.chats[m.chat]
let name = conn.getName(m.sender)

if (/^بووووت|بوت$/i.test(m.text) ) { //sin prefijo 
    let teks = `
${pickRandom([`_*أامـر يـ عـيـونـي 🤭💮✨*_`, `ايـش بـدك 👀♥️✨`])}
`.trim()
conn.reply(m.chat, teks, m, { mentions: { mentionedJid: [m.sender] }})

}

if (/^بحبك|بموت فيكي|حبي$/i.test(m.text) ) { //sin prefijo 
    let teks = `
${pickRandom([`_*امممم 😳*_`, `*_انا اكتر 🤭🌸_*`, `*_كسووووف 😳_*`])}
`.trim()
conn.reply(m.chat, teks, m, { mentions: { mentionedJid: [m.sender] }})

}

if (/^مين المطور|بتاع مين البوت ده|المطور|مين صاحب البوت ده$/i.test(m.text) ) { //sin prefijo 
    conn.reply(m.chat, `╭┅〘 ⚠️ الـمـطـور ⚠️ 〙*
➽🐍 AL SOLTAN
➽⚜️ wa.me/+201277272498
➽💌 Owner Of bot
_*هذا رقم مطوري اذ كنت تريد ان عليك ان تدخل و تكتب رساله بدون ازعاج*_

*╰═┅ৡৢ͜͡✦═╡ *AL SOLTAN* ╞═┅ৡৢ͜͡✦═╯*`, m)

}

/* if (/^hola|halo|hello|hi$/i.test(m.text) ) { //sin prefijo 
     conn.reply(m.chat, `Hola :D`, fkontak, m)

 }*/
 
if (/^مساعده|كيف استخدم البوت|بوت عطلان|ازاي استخدم البوت|.مهام$/i.test(m.text) ) { //sem prefixo
    conn.reply(m.chat, `
> *▫️  اسم البوت , بوت السلطان*
> *▫️ حط قبل كل امر  (.)*
> *▫️ اســم الـمطور : يوسف السلطان*
> *▫️اليك القائمه يحب*  ${taguser}
> *▫️هذا البوت صنع بواسطه يوسف السلطان انضم للقناة عبر الواتساب لمعرفه التحديثات القادمه*
> *▫️https://whatsapp.com/channel/0029VaL2bnW0rGiPZq8B5S2M*


> *▫️انستجرام*
> *▫️https://instagram.com/youssef.alsoltan_*

> *• ∙ ∙━━╍━﹝👥﹞━╍━━∙ ∙ •*
> *˼‏👥˹ قـسـم الجروبات╿↶*
> *⋄━───═◞⬪⋇⬪◟═───━⋄* 
> *. لقبني*
> *. لقب*
> *. الالقاب*
> *. طرد*
> *. ضيف*
> *. ترقية*
> *. اعفاء*
> *. تحذير*
> *. حذف_تحذير*
> *. حذف*
> *. منشن*
> *. مخفي*
> *. المشرفين*
> *. لمنشن*
> *. بروفايل*
> *. الجروب*
> *. دعوه*
> *. تغيير_اللينك*
> *. لفل*
> *. جروب*
> *. الترحيب*
> *. المغادره*
> *. ايات*
> *. جروب قفل  فتح*
> *. خط*
> *. توب*
> *. لينك*
> *. يومي*
> *. الماس*
> *. ترتيب_البنك*
> *. شراء*
> *. هجوم*
> *• ∙ ∙━━╍━﹝📿﹞━╍━━∙ ∙ •*
> *˼‏✨˹ قـسـم الديني╿↶*
> *⋄━───═◞⬪⋇⬪◟═───━⋄*
> *. سورة*
> *. حديث*
> *. قران*
> *. الله*
> *• ∙ ∙━━╍━﹝⚙️﹞━╍━━∙ ∙ •*
> *˼‏🙎🏻˹ قـسـم المطور╿↶*
> *⋄━───═◞⬪⋇⬪◟═───━⋄*
> *. ضيف_بريميام*
> *. حذف_بريميام*
> *. بان*
> *. الغاء_البان*
> *. اطفاء*
> *. تفعيل*
> *. المبندين*
> *. إعادة*
> *. اعادةتشغيل*
> *. أدخل*
> *. ضيف_اكس_بي*
> *. ضيف_جواهر*
> *• ∙ ∙━━╍━﹝📁﹞━╍━━∙ ∙ •*
> *˼‏📥˹ قـسـم التنزيلات╿↶*
> *⋄━───═◞⬪⋇⬪◟═───━⋄*
> *. انستغرام*
> *. انستا*
> *. شغل*
> *. تيكتوك*
> *. تويتر*
> *. اغنية*
> *. بحث*
> *. فيديو*
> *. تطبيق*
> *. صوره*
> *• ∙ ∙━━╍━﹝🕹️﹞━╍━━∙ ∙ •*
> *˼‏🎮˹ قـسـم الترفيه╿↶*
> *⋄━───═◞⬪⋇⬪◟═───━⋄*
> *. اكس او*
> *. ت*
> *. صراحه*
> *. بوت*
> *. ايدت*
> *. فيك*
> *. ميمز*
> *. اختبرني*
> *. تهكير*
> *. لو*
> *. هل*
> *. ترجم*
> *. احزر*
> *. زواج*
> *. انطق*
> *. تاج*
> *. حكمه*
> *. ميمز*
> *. سوال*
> *• ∙ ∙━━╍━﹝💡﹞━╍━━∙ ∙ •*
> *˼‏🛠️˹ قـسـم التحويل╿↶*
> *⋄━───═◞⬪⋇⬪◟═───━⋄*
> *. ملصق*
> *. جوده*
> *. سرقة*
> *. لفيديو*
> *. لصورة*
> *. لانمي*
> *. تخيل*
> *. مكس*
> *. لجواهر*
> *. ستك*
> *. تلجراف*
> *. لكرتون*
> *. باركود*
> *• ∙ ∙━━╍━﹝🎚️﹞━╍━━∙ ∙ •*
> *˼‏🎹˹ قـسـم الصوتيات╿↶*
> *⋄━───═◞⬪⋇⬪◟═───━⋄*
> *. عميق*
> *. منفوخ*
> *. تخين*
> *. صاخب*
> *. سريع*
> *. تخينن*
> *. رفيع*
> *. روبوت*
> *. بطيء*
> *. ناعم*
> *. سنجاب*

> *⚠️┑━━━ملاحظه━━━┍⚠️*
> *البوت قيد التطوير لذا عندما لا يتسجيب*
> *فأعلم انه يتم اعادة تشغيله لان تم*
> *اضافه بعض الاوامر وشكرا علي استخدامك البوت*
> *⚠️━━━━━━━━━━━━⚠️*

> 👾┑━━━حـقـوق الـمـطـور━━━┍👾
> *❗⇆ معلومات الـمطـور  ↯*
> ❗ده  instagram.com/youssef.alsoltan_
> *❗⇆ رقـم الـمطـور  ↯*
> ❗ده  https://wa.me/+201277272498
> 👾━━━حـقـوق الـمـطـور━━━👾`, m) //wm, null, [['Menu', '#menu']], m) botones :V

}  
return !0 
}
export default handler

function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)]
}

