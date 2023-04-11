import {getRandomPositiveInteger} from './util.js';
import {getRandomArrayElement} from './util.js';

const DESCRIPTIONS = [
  'природа',
  'авто',
  'животные',
  'космос',
  'еда',
  'лучшее',
  'портрет',
  'насекомые',
  'птица',
  'макро',
  '3D',
  '360',
  'селфи',
  'черно-белое',
];
const commentMessages = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];
const commentAutors = [
  'Павел',
  'Дмитрий',
  'Оксана',
  'Ольга',
  'Яна',
  'Андрей',
  'Игорь',
  'Яна',
  'Валерия',
  'Иван',
  'Михаил',
];
const randomComment = () => ({
  id: getRandomPositiveInteger(1, 300),
  avatar: `img/avatar-${  getRandomPositiveInteger(1, 6)  }.svg`,
  message: getRandomArrayElement(commentMessages),
  name: getRandomArrayElement(commentAutors)

});

const SIMILAR_PHOTO_COUNT = 25;

// const randomlikes = getRandomPositiveInteger(15, 200);

function createPhoto() {

  return {
    id: getRandomPositiveInteger(1, 25),
    url: `photos/${  getRandomPositiveInteger(1, 25)  }.jpg`,
    description: getRandomArrayElement(DESCRIPTIONS),
    likes: getRandomPositiveInteger(15, 200),
    comments: randomComment(),
  };
}

const similarPhotos = Array.from({
  length: SIMILAR_PHOTO_COUNT
}, createPhoto);

export {similarPhotos};
