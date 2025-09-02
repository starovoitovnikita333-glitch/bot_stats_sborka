module.exports = async (req, res) => {
  const { method, body } = req;
  
  if (method === 'POST') {
    const { message } = body;
    
    if (message && message.text) {
      const chatId = message.chat.id;
      const text = message.text;
      
      // Отправляем ответ в Telegram
      await fetch(`https://api.telegram.org/bot${process.env.TELEGRAM_TOKEN}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: chatId,
          text: `✅ Бот работает! Вы написали: "${text}"`
        })
      });
    }
  }
  
  res.status(200).send('OK');
};
