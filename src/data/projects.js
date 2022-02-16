// import videos
import barlimanSmall from '../assets/barliman-small.mp4'
import bitcubeSmall from '../assets/bitcube-small.mp4'
import csHistorySmall from '../assets/cs-history-small.mp4'
import doomsdaySmall from '../assets/doomsday-small.mp4'
import kanbanSmall from '../assets/kanban-small.mp4'
import latinLearnerSmall from '../assets/latin-learner-small.mp4'
import latinVocabSmall from '../assets/latin-vocab-quiz-small.mp4'
import needThatSmall from '../assets/need-that-small.mp4'
import sentimentsionSmall from '../assets/sentimentsion-small.mp4'
import zeldaSmall from '../assets/zelda-small.mp4'

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
const awsLabel = { name: 'AWS', background: orange, color: 'white' }
const bootstrapLabel = { name: 'Bootstrap', background: grape, color: 'white' }
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
    title: 'Latin Learner - Karaoke',
    shortDescription: 'Sing along to latin language music, with the lyrics available ahead of time in Latin & English.',
    githubUrl: 'https://github.com/benjenkinsv95/latin-learner',
    deployedUrl: 'https://benjenkinsv95.github.io/latin-learner/',
    video: latinLearnerSmall,
    labels: [reactLabel, bootstrapLabel, jsLabel, htmlLabel, cssLabel]
  },
  {
    title: 'Latin Vocab Quiz',
    shortDescription: 'Practice the Latin vocab in books such as LLPSI with Latin pronunciations and a review mode.',
    githubUrl: 'https://github.com/benjenkinsv95/latin-vocab-quiz',
    deployedUrl: 'https://benjenkinsv95.github.io/latin-vocab-quiz/',
    video: latinVocabSmall,
    labels: [reactLabel, bootstrapLabel, jsLabel, htmlLabel, cssLabel]
  },
  {
    title: 'Doomsday Rule Trainer',
    shortDescription: 'Practice the doomsday rule to figure out what day of the week any date is on in your head.',
    githubUrl: 'https://github.com/benjenkinsv95/doomsday-rule-trainer',
    deployedUrl: 'https://benjenkinsv95.github.io/doomsday-rule-trainer/',
    video: doomsdaySmall,
    labels: [reactLabel, bootstrapLabel, jsLabel, htmlLabel, cssLabel]
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
    title: 'Bitcube Image Uploader',
    shortDescription: 'A website to upload images, similar to imgur. Built with AWS S3.',
    githubUrl: 'https://github.com/benjenkinsv95/bitcube-image-uploader',
    video: bitcubeSmall,
    labels: [awsLabel, materialUILabel, jsLabel, htmlLabel, cssLabel]
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
