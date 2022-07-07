<template>
  <Story>
    <div class="p-8 w-fit" role="list">
      <CardList
        :cards="[
          {
            author: 'Renato DelPupo',
            date: '19/10/2021',
            description: `
              Topics:
              - Present JavaScript and general web development terms
              - Short explanation about each term
              - Examples of use
            `,
            image: 'https://via.placeholder.com/320x180.png',
            recordingUrl: '#',
            tags: ['JavaScript', 'Web'],
            title: 'JavaScript Recall',
          },
          {
            author: 'Renato DelPupo',
            date: '08/12/2021',
            description: `
              Topics:
              - How simple is create a Telegram bot
              - Bot Father, Telegram API
              - Telegraf package
            `,
            image: 'https://via.placeholder.com/320x180.png',
            recordingUrl: '#',
            tags: ['Bot', 'JavaScript', 'Node'],
            title: 'Telegram Bot with Node.js',
          },
        ]"
      />
    </div>
  </Story>
</template>
