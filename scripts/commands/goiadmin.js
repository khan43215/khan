module.exports.config = {
  name: "goiadmin",
    version: "1.0.0",
    permission: 0,
    credits: "nayan",
    description: "mention",
    prefix: true,
    category: "user",
    usages: "tag",
    cooldowns: 5,
};
module.exports.handleEvent = function({ api, event }) {
  if (event.senderID !== "61552819703988") {
    var aid = ["61552819703988"];
    for (const id of aid) {
    if ( Object.keys(event.mentions) == id) {
      var msg = ["Mantion_দিস না _সোহাগ বস এর মন মন ভালো নেই আজকে-!💔🥀", "- ম্যানশন দিস না 😾সিরিয়াস প্রেম করতে চাইলে ইনবক্সে চলে যা🐱😼", "এত মেনশন না দিয়ে সিঙ্গেল সোহাগ কে একটা Gf দে😘"," Mantion_দিলে চুম্মাইয়া ঠুটের কালার change কইরা,লামু 💋😾😾🔨","আরেকবার আমার বস সোহাগ রে ম্যানশন দিলে তোমার বিচির মধ্যে ঘুষি মারমু😾","সোহাগ বস এখন  বিজি জা বলার আমাকে বলতে পারেন_!!😼🥰","এতো মিনশন নাহ দিয়া সিংগেল সোহাগ রে একটা গফ দে 😒 😏","Mantion_না দিয়ে সিরিয়াস প্রেম করতে চাইলে ইনবক্স","মেনশন দিসনা পারলে একটা গফ দে","Mantion_দিস না বাঁলঁ_পাঁকঁনাঁ সোহাগ প্রচুর বিজি 🥵🥀🤐"];
      return api.sendMessage({body: msg[Math.floor(Math.random()*msg.length)]}, event.threadID, event.messageID);
    }
    }}
};
module.exports.run = async function({}) {
}
