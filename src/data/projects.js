// import videos
import kanbanSmall from '../assets/kanban-small.mp4'
import needThatSmall from '../assets/need-that-small.mp4'
import barlimanSmall from '../assets/barliman-small.mp4'
import zeldaSmall from '../assets/zelda-small.mp4'
import sentimentsionSmall from '../assets/sentimentsion-small.mp4'
import bitcubeSmall from '../assets/bitcube-small.mp4'
import csHistorySmall from '../assets/cs-history-small.mp4'

// define custom colors, values come from here
// https://www.pinterest.com/pin/415034921912258813/
const blue = '#4073ff'
const grape = '#884dff'
const mintGreen = '#6accbc'
const orange = '#ff9933'
const salmon = '#ff8d85'
const skyBlue = '#14aaf5'
const teal = '#158fad'
const red = '#db4035'
const yellow = '#fad000'

// create labels for the different technologies used
const chromeExtensionLabel = { name: 'Extension', background: mintGreen, color: 'white' }
const cssLabel = { name: 'CSS', background: yellow, color: 'black' }
const historyLabel = { name: 'History', background: salmon, color: 'white' }
const htmlLabel = { name: 'HTML', background: orange, color: 'white' }
const iOSLabel = { name: 'iOS', background: red, color: 'white' }
const jsLabel = { name: 'JS', background: yellow, color: 'black' }
const jQueryLabel = { name: 'jQuery', background: teal, color: 'white' }
const luaLabel = { name: 'Lua', background: grape, color: 'white' }
const materializeLabel = { name: 'Materialize', background: blue, color: 'white' }
const materialUILabel = { name: 'Material\xa0UI', background: blue, color: 'white' }
const reactLabel = { name: 'React', background: skyBlue, color: 'white' }
const swiftLabel = { name: 'Swift', background: orange, color: 'white' }

// export projects
export default [
  {
    title: 'Bitcube Image Uploader',
    shortDescription: 'A website to upload images, similar to imgur. Built with AWS S3.',
    githubUrl: 'https://github.com/benjenkinsv95/bitcube-image-uploader',
    video: bitcubeSmall,
    labels: [reactLabel, materialUILabel, jsLabel, cssLabel]
  },
  {
    title: 'React Kanban Board',
    shortDescription: 'A Kanban Board built using React',
    githubUrl: 'https://github.com/benjenkinsv95/react-kanban-board',
    deployedUrl: 'https://benjenkinsv95.github.io/react-kanban-board/',
    video: kanbanSmall,
    labels: [reactLabel, materialUILabel, jsLabel, htmlLabel]
  },
  {
    title: 'Do You Really Need That?',
    shortDescription: 'A chrome extension with a prompt before purchasing on amazon.',
    githubUrl: 'https://github.com/benjenkinsv95/do-you-really-need-that',
    video: needThatSmall,
    labels: [chromeExtensionLabel, jQueryLabel, materializeLabel, cssLabel]
  },
  {
    title: 'Sentimentsion',
    shortDescription: 'A chrome extension that highlights how positive/negative text is.',
    githubUrl: 'https://github.com/benjenkinsv95/sentimentsion',
    video: sentimentsionSmall,
    labels: [chromeExtensionLabel, jQueryLabel, htmlLabel, cssLabel]
  },
  {
    title: 'Barliman iOS',
    shortDescription: 'An iOS app that generates code to pass arbitrary tests.',
    githubUrl: 'https://github.com/benjenkinsv95/Barliman-iOS',
    video: barlimanSmall,
    labels: [swiftLabel, iOSLabel]
  },
  {
    title: 'Legend of 50 RPG',
    shortDescription: 'A Legend of Zelda style RPG written in Lua.',
    githubUrl: 'https://github.com/benjenkinsv95/legend-of-50-rpg',
    video: zeldaSmall,
    labels: [luaLabel]
  },
  {
    title: 'CS History Backgrounds',
    shortDescription: 'A collection of CS history backgrounds I would leave on the projector during breaks.',
    githubUrl: 'https://github.com/benjenkinsv95/cs-history',
    video: csHistorySmall,
    labels: [historyLabel]
  }
]