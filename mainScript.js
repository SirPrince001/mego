const cron = require("node-cron");
require("dotenv").config();
const User = require("./model/userSchema");

const accountSid = process.env.TWILIO_ACCOUNT_SID
const accountAuth = process.env.TWILIO_AUTH_TOKEN 
const client = require('twilio')(accountSid,accountAuth)

async function sendMessage(body, to) {
  client.messages.create({
    body,
    from:process.env.FROM,
    to
  })
}

module.exports = {
  scheduleMessage: async () => {
    cron.schedule("* * * * *", async () => {
      const users = await User.find({});
      users.forEach(async (user) => {
        await sendMessage(
          `Hello ${user.petName}how are you and how was your night,hope you are fine. Do take care of yourself I love you` , user.phoneNumber
        );
      });
    });
  },
};
