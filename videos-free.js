/**
 * Дефолтное время кручения 22 сек.
 *
 * Длина кручения 22 сек:
 * 'video.webm'
 *
 * Длина кручения 22 сек, видео начнётся с 4 секунды:
 * ['video.webm', 4]
 *
 * Длина кручения 30 сек, видео начнётся с 4 секунды:
 * ['video.webm', 4, 30]
 *
 * Выберется случайное видео из списка, рандомится только при перезапуске всего списка видосов:
 * () => p5Wheel.random([
 *    ['video.webm', 4, 30],
 *    ['video.webm', 45],
 * ]),
 */
const videosFree = [
    ['videos/streamers/liz0N - Пятница (песенка про Minecraft).mp4', 31, 32],
    ['videos/streamers/faker.mp4', 0, 24],
    ['videos/streamers/grafon.mp4', 0, 29],
    ['videos/streamers/mel.mp4', 0, 20],
    ['videos/streamers/nam.mp4', 0, 29],
    ['videos/streamers/Liz0N.mp4', 0, 15],
    ['videos/streamers/Road.mp4', 0, 28],
    ['videos/streamers/Road3.mp4', 0, 30],
    ['videos/streamers/usach01.mp4', 0, 31],
    ['videos/streamers/usach02.mp4', 0, 30],
    ['videos/streamers/Praden01.mp4', 0, 24],
    ['videos/streamers/namvseyasno-shrekophone.mp4', 0, 24],
    ['videos/ozon.mp4', 0, 28],
    ['videos/кис-кис кис-кис, барака Обама, я Гордон ты Гордон, кис-кис кис-кис.mp4', 0, 28],
];
