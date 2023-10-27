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
    ['videos/gra.mp4', 15, 44],
    ['videos/guts.mp4', 0, 30],
    ['videos/кис-кис кис-кис, барака Обама, я Гордон ты Гордон, кис-кис кис-кис.mp4', 0, 28],
    ['videos/lp.mp4', 0, 35],
    ['videos/niletto.mp4', 0, 30],
    ['videos/kamen.mp4', 0, 30],
    ['videos/tyler.mp4', 0, 20],
    ['videos/napo.mp4', 0, 21],
    ['videos/vanomas.mp4', 0, 26],
    ['videos/shaman.mp4', 45, 60],
    ['videos/sus.mp4', 0, 26],
    ['videos/dmca/ozon.mp4', 0, 31],
    ['videos/dmca/Tesak.mp4', 0, 31],
    ['videos/dmca/ebatoriya.mp4', 3, 31],
    ['videos/dmca/vor.mp4', 3, 33],
    ['videos/dmca/gorin.mp4', 5, 35],
    ['videos/dmca/bogdan.mp4', 0, 31],
    ['videos/dmca/pele.mp4', 0, 27],
    ['videos/dmca/edition.mp4', 0, 30],
    ['videos/dmca/summer.mp4', 0, 31],
    ['videos/dmca/doka.mp4', 10, 45],
    ['videos/gena.mp4', 0, 38], 
    ['videos/ozon_w.mp4', 10, 38], 
    ['videos/kantent.mp4', 0, 28],
    ['videos/sunboy.mp4', 0, 33],
    ['videos/vlad.mp4', 5, 40],
    ['videos/arthas.mp4', 0, 35], 
    ['videos/azamat.mp4', 0, 27],
    ['videos/cgk.mp4', 0, 30],
    ['videos/gavno.mp4', 0, 31],
    ['videos/rus.mp4', 0, 26],
    ['videos/ot_vint.mp4', 0, 26],
    ['videos/put.mp4', 30, 55],
    ['videos/cingr.mp4', 0, 20],
    ['videos/ldum.mp4', 0, 34],
    ['videos/mot.mp4', 5, 38],
    ['videos/lx.mp4', 0, 38],
    ['videos/gena_2.mp4', 0, 30],
    
];
